const express = require('express')
const app = express()
const post = 3000;

//req : request, res: response
app.get('/', (req, res) => res.send('Hello NodeJS!'))
app.get('/tin-tuc', (req, res) => res.send('Đây là trang tin tức'))

app.listen(post, () => console.log(`App listening at http://localhost:${post}`))