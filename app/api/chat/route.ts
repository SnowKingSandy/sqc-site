import { NextResponse } from 'next/server';

// Together AI API endpoint
const API_URL = 'https://api.together.xyz/v1/chat/completions';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages } = body;
    
    // Format the conversation history for Together AI format
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role === 'bot' ? 'assistant' : 'user',
      content: msg.content
    }));
    
    // Add system prompt for context
    const systemPrompt = {
      role: "system",
      content: "You are QuantBot, a helpful quantum computing assistant for Symbiosis Quantum Club. You provide concise, accurate information about quantum computing concepts, the club's activities, and upcoming events. Answer in a friendly, helpful manner with a focus on being educational. Keep responses under 150 words when possible."
    };
    
    // Prepare request payload
    const payload = {
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1", // Free tier model
      messages: [systemPrompt, ...formattedMessages],
      max_tokens: 800,
      temperature: 0.7,
      top_p: 0.9
    };
    
    // Using local fallback if API key isn't configured
    if (!process.env.TOGETHER_API_KEY) {
      console.warn("No TOGETHER_API_KEY found, using fallback responses");
      return NextResponse.json({ 
        response: getFallbackResponse(messages[messages.length - 1]?.content || "") 
      });
    }
    
    // Call Together API
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.TOGETHER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    const data = await response.json();
    
    // Extract the response text
    if (!response.ok) {
      console.error("API error:", data);
      throw new Error(`API error: ${data.error?.message || 'Unknown error'}`);
    }
    
    const botResponse = data.choices[0]?.message?.content || 
                       "I'm having trouble connecting to my knowledge base right now. Please try again in a moment.";
    
    return NextResponse.json({ response: botResponse });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { response: "I'm sorry, I encountered an error connecting to my knowledge base. Please try again in a moment." },
      { status: 200 } // Return 200 with error message to prevent client errors
    );
  }
}

// Fallback responses when API key isn't available
function getFallbackResponse(message: string) {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes("quantum computing")) {
    return "Quantum computing harnesses quantum mechanics to perform calculations that classical computers cannot efficiently do. Unlike classical bits that are either 0 or 1, quantum bits (qubits) can exist in multiple states simultaneously through superposition. This enables quantum computers to process vast amounts of information in parallel, potentially solving complex problems like cryptography, molecular modeling, and optimization problems exponentially faster.";
  }
  
  if (lowerMsg.includes("join") || lowerMsg.includes("club") || lowerMsg.includes("member")) {
    return "You can join Symbiosis Quantum Club by attending our next introduction session or by filling out the membership form on our website. We welcome students from all academic backgrounds - no prior quantum knowledge is required! Members get access to workshops, events, project opportunities, and networking with quantum computing professionals.";
  }
  
  if (lowerMsg.includes("event") || lowerMsg.includes("workshop")) {
    return "Our next event is a Qiskit workshop on quantum algorithms, scheduled for May 15, 2025. We also have a guest lecture on quantum machine learning coming up, and our monthly quantum hackathon. Check our website or Discord channel for the complete schedule and registration details.";
  }
  
  if (lowerMsg.includes("entangle")) {
    return "Quantum entanglement is a fascinating phenomenon where two or more quantum particles become correlated in such a way that the quantum state of each particle cannot be described independently. Even when separated by large distances, measuring one particle instantaneously affects its entangled partners. Einstein famously called this 'spooky action at a distance.' Entanglement is essential for quantum computing and enables applications like quantum teleportation and super-dense coding.";
  }
  
  if (lowerMsg.includes("supremacy") || lowerMsg.includes("advantage")) {
    return "Quantum supremacy (now often called quantum advantage) refers to the demonstration that a quantum computer can solve a problem that would be practically impossible for classical computers to solve in a reasonable timeframe. Google claimed to achieve this milestone in 2019 with their 53-qubit Sycamore processor, completing a specific calculation in 200 seconds that would take the world's most powerful supercomputer thousands of years. This field continues to advance with various demonstrations from different research teams.";
  }
  
  if (lowerMsg.includes("algorithm")) {
    return "Quantum algorithms are specialized procedures designed to run on quantum computers. Popular examples include Shor's algorithm for integer factorization (which could break current encryption systems), Grover's algorithm for searching unsorted databases, and the Quantum Approximate Optimization Algorithm (QAOA) for solving complex optimization problems. These algorithms showcase quantum computing's potential to exponentially outperform classical algorithms for certain problems.";
  }
  
  return "I'm here to help answer your quantum computing questions! You can ask me about quantum concepts, our club activities, upcoming events, or how to get involved. What would you like to know about the fascinating world of quantum computing?";
}