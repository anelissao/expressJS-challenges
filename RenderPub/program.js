import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const PORT = process.argv[2]

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//app.use(express.static(process.argv[3] || path.join(__dirname, 'templates')))

app.set('view engine', 'pug')
app.set('views', process.argv[3])

app.get('/home', (req, res) => {
	res.render('index', {date: new Date().toDateString()})
})
app.listen(PORT)
