import { GoogleGenerativeAI } from '@google/generative-ai';
import { env } from './backend/src/config/env';

async function listModels() {
  const apiKey = env.GEMINI_API_KEY || '';
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
  const data = await response.json();
  console.log(JSON.stringify(data.models.map((m: any) => m.name), null, 2));
}

listModels().catch(console.error);
