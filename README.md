# MindEase — SIH26094

AI-powered dynamic mental health monitoring and distress prediction prototype.

## Stack
- React + Vite
- Recharts
- Lucide React
- CSS
- Demo/mock data layer

## Run
```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build
```bash
npm run build
npm run preview
```

## Deploy free
Import this repository into Vercel or Netlify. The build command is `npm run build` and the output directory is `dist`.

## Project structure
```text
src/
  components/
  data/
  lib/
  pages/
  App.jsx
  main.jsx
  styles.css
```

## Connecting a real ML model
The demo currently uses deterministic mock prediction logic in `src/lib/predictor.js`.
Replace that function with a request to your Python/FastAPI model, for example:
`POST /predict` with consented, minimized feature data.

## Important
This is a hackathon prototype. Risk scores are simulated and are not a medical diagnosis. A production system needs informed consent, privacy-by-design, encryption, access control, audit logging, validated models, bias testing, human review, and a safe escalation protocol.
