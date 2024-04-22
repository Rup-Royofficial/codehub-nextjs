"use client"
import { useChat, Message } from "ai/react"
import { Button } from "./ui/button";
import ReactMarkdown from 'react-markdown'

export default function ChatComponent() {

    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
    console.log(messages)
    console.log(input)
    
    return(
        <div>
            <div>
                <h3 className="text-lg font-bold mt-2">
                    GPT-4
                </h3>
                <p className="ms-3">
                    I am a robot with gpt-4
                </p>
            </div>
            {messages.map((message) => {
                return (
                    <div key={message.id}>
                        {/*  Name of person talking */}
                        {
                            message.role === "assistant"
                            ?
                            <h3 className="text-lg font-semibold mt-2">
                                GPT-4
                            </h3>
                            :
                            <h3 className="text-lg font-semibold mt-8">
                                User
                            </h3>
                        }
                        
                        {/* Formatting the message */}
                        <ReactMarkdown 
                        components={{
                            pre: ({ node, ...props }) => (
                            <div className="overflow-auto w-full my-2 bg-black/50 py-5 px-3 rounded-lg">
                                <pre {...props} />
                            </div>
                            ),
                            code: ({ node, ...props }) => (
                              <code className="bg-slate-900/50 rounded-lg px-3 py-1" {...props} />
                            )}}
                            className="text-sm overflow-hidden leading-7"
                            >
                            {message.content || "Error Fetching Data/Invalid Api Key"}
                        </ReactMarkdown>
                            {/* {message.content.split("\n").map((currentTextBlock, index) => {
                                if(currentTextBlock === "") {
                                    return <p key={message.id + index}>&nbsp;</p> // " "
                                } else {
                                    return <p key={message.id + index}>{currentTextBlock}</p> 
                                }
                            })} */}
                        
                        
                    </div>
                )
            })}
            

            <form className="mt-12" onSubmit={handleSubmit}>
                <p>User message</p>
                <textarea 
                    className="mt-2 w-full bg-gray-900 p-2 outline-none" 
                    placeholder={"What are data structures and algorithms?"}
                    value={input}
                    onChange={handleInputChange}/>
                <button className="rounded-md bg-gradient-to-br from-[#FFB457] to-[#FF705B] text-black/80 hover:bg-gradient-to-br hover:from-[#E09E4A] hover:to-[#E3634B] p-2 mt-2">Send Message</button>
            </form>
        </div>
    )
}