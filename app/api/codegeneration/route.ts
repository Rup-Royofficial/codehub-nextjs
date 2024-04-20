// import { auth } from "@clerk/nextjs";
"use client"
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";
// import { createClient } from "@/app/utils/supabase/client";
import  rateLimit  from "axios-rate-limit"
import { useState } from "react";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const insructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a code generator. You must answer only in markdown code snippet. Use code comments for explanations."
};

// const openaiWithRateLimit = rateLimit(openai, {
//     windowMs: 1000 * 60, // Adjust window based on OpenAI's rate limits (e.g., 1 minute for 1 request)
//     maxRequests: 1, // Adjust limit based on your OpenAI plan
//     rejectOnError: false, // Set to true for error handling
//     onRejected: (error, retry) => {
//       console.error("[RATE_LIMIT_ERROR]", error);
//       retry(); // Automatic retry with exponential backoff
//     },
//   });
export async function POST(req: Request) {
    
//   const supabase = createClient();
//   try {
//     const userId  = async () => {
//         try {
//           const {
//             data: { user },
//           } = await supabase.auth.getUser();
//           if (user !== null) {
//             // console.log(user)
//             // setUserId(user.id);
//           } else {
//             // setUserId("404 not found user.id");
//           }
//         } catch (e) {}
//       };   
      
    //   console.log(userId)
    const [messages, setMessages] = useState([]);
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const handleUserInput = (newMessage) => {
      setMessages([...messages, newMessage]);
    };
  
    const generateCode = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [insructionMessage, ...messages],
        });
  
        setResponse(response.data.choices[0].message);
      } catch (error) {
        console.error(error);
        setError("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
}