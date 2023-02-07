import {Configuration, OpenAIApi} from 'openai'

const API_KEY = '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'

export async function askChatGPT(question: string): Promise<string> {
  const configuration = new Configuration({
    apiKey: API_KEY,
  })

  const openAi = new OpenAIApi(configuration)

  const prompt = 'Réponds-moi sans sauter de lignes'

  const {data} = await openAi.createCompletion({
    model: 'text-davinci-003',
    prompt: `${prompt}: ${question}`,
    temperature: 0.5,
    max_tokens: 100,
  })

  const firstChoice = data.choices[0]

  return firstChoice.text || 'Je ne peux pas vous répondre pour le moment'
}
