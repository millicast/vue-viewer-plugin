const express = require("express")
const rateLimit = require("express-rate-limit")
const app = express();
const config = require('config')
const dotenv = require('dotenv')
const cors = require('cors')

const limiter = rateLimit({
  windowMs: 30 * 1000,
  max: 1
})

const dotenvPath = config.get('dotenv.path')
dotenv.config({
    path: dotenvPath
})

app.use(cors({
    origin: config.get('cors.origins')
}))

app.use(limiter)

app.use(express.json({limit: '75mb'}))

const port = process.env.PORT ?? 3000

app.listen(port, () => {
 console.log("Server running on port " + port)
});

// Routes
app.use('/reports', require('./routes/report'))


