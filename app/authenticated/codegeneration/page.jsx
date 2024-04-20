'use client'
import AuthenticatedNavbar from "@/app/Components/AuthenticatedNavbar";
import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Code } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";
import ReactMarkdown from "react-markdown";
import { toast } from "react-hot-toast";

import {Form, FormControl, FormField, FormItem} from "@/app/Components/ui/form"
import {Button} from "@/app/Components/ui/button"
import { Input } from "@/app/Components/ui/input"
import { cn } from "@/lib/utils";
import { formSchema } from "./constants";
import { Loader } from "@/app/Components/loader";
export default function CodeGeneration() {
    
    const router = useRouter();
    const [messages, setMessages] = useState([]);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values) => {
        try {
          const userMessage = {
            role: "user",
            content: values.prompt
          };
          const newMessages = [...messages, userMessage];
    
          const response = await axios.post("/api/codegeneration", {
            messages: newMessages
          });
    
          setMessages((current) => [...current, userMessage, response.data]);
    
          form.reset();
        } catch (error) {
          if (error?.response?.status === 403) proModal.onOpen();
          else toast.error("Something went wrong.");
        } finally {
          router.refresh();
        }
      };
    return (
        <>
            <AuthenticatedNavbar/>
            <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        disabled={isLoading}
                        placeholder="Simple toggle button using react hooks."
                        className="pl-2 border-0 outline-none focus-visible:ring-0 focus-visible: ring-transparent"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading}
                className="col-span-12 lg:col-span-2 w-full"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <div>"No Code Generated Yet" </div>
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <ReactMarkdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/10 rounded-lg p-1" {...props} />
                    )
                  }}
                  className="text-sm overflow-hidden leading-7"
                >
                  {message.content || ""}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
        </>
    )
}