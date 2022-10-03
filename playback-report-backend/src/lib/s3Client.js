const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')

const bucketName = process.env.AWS_BUCKETNAME
const region = process.env.AWS_REGION
const accesKeyId = process.env.AWS_ACCESS_KEY
const secretAccesKey = process.env.AWS_SECRET_ACCESS_KEY
const endpoint = process.env.AWS_ENDPOINT
const links = process.env.AWS_LINKS

const s3 = new S3Client({
  region: region,
  credentials: {
    accessKeyId: accesKeyId,
    secretAccessKey: secretAccesKey,
  },
  endpoint: endpoint,
})

exports.uploadLog = async function (fileName, fileBody) {
  try {
    let d = new Date()
    let date =
      '-' +
      d.getDate() +
      d.getMonth() +
      d.getFullYear() +
      '-' +
      d.getHours() +
      d.getMinutes()
    const uploadParams = {
      Bucket: bucketName,
      Key: 'log-' + fileName + date + '.txt',
      Body: fileBody,
      ACL: 'public-read',
    }

    await s3.send(new PutObjectCommand(uploadParams))
    return links + uploadParams.Key
  } catch (err) {
    return err
  }
}
