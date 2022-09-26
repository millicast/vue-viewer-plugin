const axios = require('axios')

exports.getContact =  async (param) => {
    try {
        const response = await axios.post('https://api.intercom.io/contacts/search', param, {
            headers: {'Authorization': 'Bearer ' + process.env.INTERCOM_TOKEN}
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}

exports.createContact =  async (param) => {
    try {
        const response = await axios.post('https://api.intercom.io/contacts', param, {
            headers: {'Authorization': 'Bearer ' + process.env.INTERCOM_TOKEN}
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}

exports.createConversation =  async (param) => {
    try {
        const response = await axios.post('https://api.intercom.io/conversations/', param, {
            headers: {'Authorization': 'Bearer ' + process.env.INTERCOM_TOKEN}
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}

exports.assignConversation =  async (id, param) => {
    try {
        let url = 'https://api.intercom.io/conversations/'+ id +'/parts'
        const response = await axios.post(url, param, {
            headers: {'Authorization': 'Bearer ' + process.env.INTERCOM_TOKEN}
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}

exports.replyConversation =  async (id, param) => {
    try {
        let url = 'https://api.intercom.io/conversations/'+ id +'/reply'
        const response = await axios.post(url, param, {
            headers: {'Authorization': 'Bearer ' + process.env.INTERCOM_TOKEN}
        })
        return response.data
    } catch (error) {
        console.log(error.response.data.errors)
        return error
    }
}