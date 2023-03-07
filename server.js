const https = require('https')
const express = require('express')
const { ask } = require('./chat')
const app = express()
app.use(express.json())

app.use(express.static('ui'))

app.post('/ask', (req, res) => {
    const { question } = req.body
    console.log('question: ' + question)
    ask(question).then(answer => {
        res.send({ answer })
    }).catch(() => { })
})

app.get('/testVpn', (req, res) => {
    https.get('https://www.google.com', goo => {
        goo.on('data', () => {
            res.end('vpn is working')
        })
    }).on('error', () => {
        res.end('vpn failed')
    })
})

app.listen(80)