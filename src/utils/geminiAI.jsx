import { GEMINI_SECRET_KEY } from "./constants";
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: GEMINI_SECRET_KEY,
});

export default genAI;
