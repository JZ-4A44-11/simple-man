import express from 'express'
import useRouter from './router'

const server = express()
server.use(express.urlencoded({ extended: false }))
server.use(express.json({ strict: true }))

useRouter(server)

export { server }
