/* eslint-disable unicorn/prefer-top-level-await */
/* eslint-disable @typescript-eslint/naming-convention */
import {Configuration, OpenAIApi} from 'openai'

const API_KEY = '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'

async function main() {
  const configuration = new Configuration({
    apiKey: API_KEY,
  })

  const openAi = new OpenAIApi(configuration)

  const prompt = 'Answer the question as truthfully as possible, and if you\'re unsure of the answer, say: Sorry, I don\'t know'
  const question = 'Who won the 2020 Summer Olympics men\'s high jump?'
  const context = 'The men\'s high jump event at the 2020 Summer Olympics took place between 30 July and 1 August 2021 at the Olympic Stadium. 33 athletes from 24 nations competed; the total possible number depended on how many nations would use universality places to enter athletes in addition to the 32 qualifying through mark or ranking (no universality places were used in 2021). Italian athlete Gianmarco Tamberi along with Qatari athlete Mutaz Essa Barshim emerged as joint winners of the event following a tie between both of them as they cleared 2.37m. Both Tamberi and Barshim agreed to share the gold medal in a rare instance where the athletes of different nations had agreed to share the same medal in the history of Olympics.  Barshim in particular was heard to ask a competition official \'Can we have two golds?\' in response to being offered a \'jump off\'. Maksim Nedasekau of Belarus took bronze. The medals were the first ever in the men\'s high jump for Italy and Belarus, the first gold in the men\'s high jump for Italy and Qatar, and the third consecutive medal in the men\'s high jumpfor Qatar (all by Barshim). Barshim became only the second man to earn three medals in high jump, joining Patrik Sjöbergof Sweden (1984 to 1992)'

  const {data} = await openAi.createCompletion({
    model: 'text-davinci-003',
    prompt: `${context} ${prompt} ${question}`,
    max_tokens: 30,
  })

  console.log(data)
}

main()
  .then(() => {
    console.log('Done ✅')
  })
  .catch(error => {
    console.log(error)
  })
