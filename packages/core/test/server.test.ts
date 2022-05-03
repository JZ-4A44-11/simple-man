import request from 'supertest'
import { server } from '../src/modules/server'

describe('@core server testing', () => {
  test('GET /', async () => {
    return await request(server).get('/').expect(200)
  })
})
