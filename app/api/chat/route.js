// route.ts Route Handlers
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = 'edge';
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config);

export async function POST(request){
    const { messages } = await request.json();
    console.log(messages)

    const response = await openai.createChatCompletion({
        model: 'gpt-4',
        stream: true,
        messages: [
            { role: "system", content: "You are a helpful assistant. You explain software concepts simply to intermediate programmers. You will be able to generate small code components as per the query of the user"},
            ...messages
        ]
    })


    const stream = await OpenAIStream(response)
    return new StreamingTextResponse(stream)
}