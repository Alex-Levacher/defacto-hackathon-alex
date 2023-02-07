import {type Request, type Response} from 'express'
import {askChatGPT} from './chat.service'

export async function ask(request: Request, response: Response) {
  const message = await askChatGPT(request.body.question)

  return response.status(200).json({
    message,
    question: request.body.question,
  })
}
