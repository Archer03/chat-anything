const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey: ""
})
const openai = new OpenAIApi(configuration)

const ask = async (question) => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }]
    });

    const response = completion.data.choices[0].message.content
    console.log(response)
    return response
}

module.exports = {
    ask
}