'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Bot, MessageCircle, Stethoscope, Brain, HeartPulse, Shield } from "lucide-react"
import Link from "next/link"

export function LandingPageComponent() {
  const [chatbotResponse, setChatbotResponse] = useState("")
  const [userInput, setUserInput] = useState("")

  const handleChatbotInteraction = (e: React.FormEvent) => {
    e.preventDefault()
    if (!userInput.trim()) return

    // Simulating a chatbot response
    setChatbotResponse(`I understand you're asking about "${userInput}". As an AI medical assistant, I'm here to provide general information. For personalized medical advice, please consult with a healthcare professional.`)
    setUserInput("")
  }

  useEffect(() => {
    // Load the first script
    const script1 = document.createElement('script')
    script1.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js"
    script1.async = true
    document.body.appendChild(script1)

    // Load the second script
    const script2 = document.createElement('script')
    script2.src = "https://mediafiles.botpress.cloud/67a015bd-ac19-411c-8f04-3af20f40d36c/webchat/v2.1/config.js"
    script2.async = true
    document.body.appendChild(script2)

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      document.body.removeChild(script1)
      document.body.removeChild(script2)
    }
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-950 -z-10" />
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <Stethoscope className="h-6 w-6 text-purple-500" />
          <span className="ml-2 text-xl font-bold">HealthTech AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="#ai-future">
            AI Future
          </Link>
          <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  The Future of Healthcare Interaction
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Experience our cutting-edge AI medical assistant, designed to provide instant, informative responses to your health queries.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Try AI Assistant</Button>
                <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              AI-Powered Healthcare Assistance
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-purple-400">Revolutionary Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-purple-500" />
                    Advanced Natural Language Processing
                  </li>
                  <li className="flex items-center">
                    <HeartPulse className="mr-2 h-5 w-5 text-purple-500" />
                    Comprehensive Medical Knowledge Base
                  </li>
                  <li className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-purple-500" />
                    Privacy-Focused Interactions
                  </li>
                  <li className="flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5 text-purple-500" />
                    24/7 Availability for Queries
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-purple-400">Experience Our AI Assistant</h3>
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                  <div className="mb-4 h-40 overflow-y-auto bg-gray-700 p-2 rounded border border-gray-600 text-gray-300">
                    {chatbotResponse || "Ask our AI medical assistant a question..."}
                  </div>
                  <form onSubmit={handleChatbotInteraction} className="space-y-2">
                    <Input
                      className="bg-gray-700 border-gray-600 text-gray-300"
                      placeholder="Type your medical question here..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                    />
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                      Send
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ai-future" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              The Future of AI in Healthcare
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <Bot className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Virtual Health Assistant</h3>
                <p className="text-gray-400">Always-on AI support for immediate medical guidance and information.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <HeartPulse className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Personalized Health Information</h3>
                <p className="text-gray-400">Tailored responses based on the latest medical research and guidelines.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Connect With Us
            </h2>
            <div className="mx-auto max-w-2xl">
              <form className="space-y-4">
                <Input placeholder="Your Name" type="text" className="bg-gray-800 border-gray-700 text-gray-300" />
                <Input placeholder="Your Email" type="email" className="bg-gray-800 border-gray-700 text-gray-300" />
                <Textarea placeholder="Your Message" className="bg-gray-800 border-gray-700 text-gray-300" />
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-500">
          © 2024 HealthTech AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-400" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}