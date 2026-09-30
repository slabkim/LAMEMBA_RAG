import { GoogleGenerativeAI } from '@google/generative-ai';
import { env } from './backend/src/config/env';

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY || '');
// Well, listModels isn't exposed in standard GenAI SDK easily.
// I'll just change the model to 'embedding-001' which always works.
