import { prisma } from '@simple-man/database/client'
import { server } from './modules/server'

prisma.user.findFirst().then((res) => console.log(res))
server.listen('4444', () => console.log('Show Must Go On'))
