import {Configuration, OpenAIApi} from 'openai'

const API_KEY = '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'

export async function askChatGPT(question: string): Promise<string> {
  const configuration = new Configuration({
    apiKey: API_KEY,
  })

  const openAi = new OpenAIApi(configuration)

  const {data} = await openAi.createCompletion({
    model: 'text-davinci-003',
    prompt: question,
    temperature: 0.5,
    max_tokens: 100,
  })

  const firstChoice = data.choices[0]

  return firstChoice.text || 'Je ne peux pas vous répondre pour le moment'
}
