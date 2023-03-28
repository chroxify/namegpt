// Check if env variable is set
if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not set')
}

// Post request taking in a json promt
export async function POST(request: Request) {
  const { amount, prompt } = await request.json()

  // Check if amount and prompt is set
  if (!amount || !prompt) {
    return new Response('Missing amount or prompt', { status: 400 })
  }

  // Check if amount is greater than 5
  if (amount > 5) {
    return new Response('Amount can not be greater than 5', { status: 400 })
  }

  // Set headers
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  }

  // Set payload
  const payload = {
    model: 'text-davinci-003',
    prompt:
      `Product description: ${prompt}\nAmount to generate: ${amount}\nMAKE NAME BE 1 WORD UNIQUE NON COMBINED WORD (NO CAMELCASE COMBINATIONS)\nRETURN RESULTS AS JSON {"names": []}`,
    temperature: 0.8,
    max_tokens: 50,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  }

  // Fetch data from openai
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  })

  // Get choices from response
  const { choices } = await response.json()

  // Convert response to json
  const json = JSON.parse(choices[0].text)

  // Return json
  return new Response(JSON.stringify(json), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
