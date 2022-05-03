import { Router, Express } from 'express'

const router = Router()

router.get('/', (req, res) => {
  return res.send(`And be a simple kind of man\nOh be something you love and understand`)
})

export default function useRouter(server: Express): void {
  server.use(router)
}
