import express from 'express'

const app = express()

app.get('/', (req, res, next) => {
    console.log('log3..')
    res.send('Hello')
})

app.listen(5001, () => {
    console.log('Server running')
})