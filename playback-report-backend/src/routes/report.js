const express = require('express')
const router = express.Router()
const reportController = require('../controller/report')

router.use(express.json())

router.post(
    '/',
    reportController.validateReport('createReport'),
    reportController.createReport
)

module.exports = router
