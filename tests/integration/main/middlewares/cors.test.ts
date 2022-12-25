import request from 'supertest'
import app from '../../../../src/main/config/app'

describe('CORS Middleware', () => {
  app.get('/test_cors', (req, res) => {
    res.send('')
  })

  test('Should enable cors', async () => {
    await request(app)
      .get('/test_cors')
      .expect('Access-Control-Allow-Origin', '*')
      .expect('Access-Control-Allow-Headers', '*')
      .expect('Access-Control-Allow-Methods', '*')
  })
})
