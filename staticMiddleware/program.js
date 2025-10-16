import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

const PORT = process.argv[2]

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.listen(PORT)

