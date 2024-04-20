"use client"
import { useChat } from "ai/react"

export default function ChatComponent() {

    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
    console.log(input)
    return(
        <div>
            <div>
                <h3 className="text-lg font-semibold mt-2">
                    GPT-4
                </h3>
                <p>
                    I am a robot with gpt-4
                </p>
            </div>

            <form className="mt-12" onSubmit={handleSubmit}>
                <p>User message</p>
                <textarea 
                    className="mt-2 w-full bg-slate-600 p-2" 
                    placeholder={"What are data structures and algorithms?"}
                    value={input}
                    onChange={handleInputChange}/>
                <button className="rounded-md bg-blue-600 p-2 mt-2">Send message</button>
            </form>
        </div>
    )
}