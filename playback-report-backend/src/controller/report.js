const { body, validationResult } = require('express-validator')
const Intercom = require('../intercom')
const { uploadLog } = require('../lib/s3Client')

exports.validateReport = (method) => {
  switch (method) {
    case 'createReport': {
      return [
        body('from', 'From app not sent').exists().isString(),
        body('name', 'Name not sent').exists().isString(),
        body('email', 'Email not sent').exists(),
        body('email', 'Invalid email').isEmail(),
        body('description', 'Description not sent').exists().isString(),
        body('streamId', 'streamId not sent').exists().isString(),
        body('broadcasterId', 'Error broadcasterId').optional().isString(),
        body('accountId', 'accountId not sent').exists(),
        body('serverId', 'serverId not sent').exists(),
        body('url', 'url not sent').exists().isString(),
        body('log', 'Attached log not sent').exists().isArray(),
      ]
    }
  }
}

exports.createReport = async (req, res) => {
  const validationErrors = validationResult(req)
  if (!validationErrors.isEmpty()) {
    res.status(400).json({ errors: validationErrors.array() })
    return
  }

  const {
    from,
    name,
    email,
    description,
    streamId,
    accountId,
    broadcasterId,
    serverId,
    clusterId,
    url,
    log,
  } = req.body

  const jsonRes = {
    name: name,
    email: email,
    description: description,
    sended: 'true',
  }

  res.status(200).json(jsonRes)

  const query = {
    query: {
      field: 'email',
      operator: '=',
      value: email,
    },
  }
  let response = await Intercom.getContact(query)
  if (response.errors) {
    throw response.errors
  }

  let contact
  if (response.data.length > 0) {
    contact = response.data[0]
  } else {
    const user = {
      role: 'lead',
      email: email,
      name: name,
      signed_up_at: Date.now(),
      last_seen_at: Date.now(),
      owner_id: process.env.INTERCOM_ADMIN,
      unsubscribed_from_emails: false,
    }

    response = await Intercom.createContact(user)
    if (response.errors) {
      throw response.errors
    }
    contact = response
  }

  const broadcaster_id_message = broadcasterId
    ? 'Broadcaster Token ID: ' + broadcasterId + '\n'
    : ''
  let message_body =
    'Stream ID: ' +
    streamId +
    '\n Account ID: ' +
    accountId +
    '\n Current URL: ' +
    url +
    '\n Server ID: ' +
    serverId +
    '\n Cluster: ' +
    clusterId +
    '\n' +
    broadcaster_id_message +
    'Description: ' +
    description

  let message = {
    from: {
      type: contact.type,
      id: contact.id,
    },
    subject: '[' + from + '] Playback Report',
    body: message_body,
  }

  response = await Intercom.createConversation(message)
  if (response.errors) {
    throw response.errors
  }
  let conversation_id = response.conversation_id

  let text_message = ''

  for (let j = 0; j < log.length; j++) {
    text_message += j === 0 ? log[j] : ' \n ' + log[j]
  }

  response = await uploadLog(conversation_id, text_message)

  let path = response

  text_message = 'Log: ' + path

  message = {
    message_type: 'comment',
    type: 'contact',
    intercom_user_id: contact.id,
    body: text_message,
  }

  response = await Intercom.replyConversation(conversation_id, message)
  if (response.response?.errors) {
    throw response.response.errors
  }

  response = await Intercom.assignConversation(conversation_id, {
    type: 'admin',
    admin_id: process.env.INTERCOM_ADMIN,
    assignee_id: process.env.INTERCOM_REPORT_RECIVER,
    message_type: 'assignment',
    body: '',
  })
  if (response.errors) {
    throw response.errors
  }
  return
}
