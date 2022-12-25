import { Request, Response } from 'express'
import { Controller, HttpRequest } from '../../presentation/protocols'

export const adaptRoute = (controller: Controller, method: string = 'handle') => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }

    const httpResponse = await controller[method](httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
