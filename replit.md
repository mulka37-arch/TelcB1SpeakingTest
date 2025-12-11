# TELC B1 Speaking Exam Simulator

## Overview
A comprehensive digital simulator for the TELC B1 German Speaking Exam that reproduces the real exam format with three distinct roles: Examiner, Candidate A, and Candidate B.

## Purpose
- Practice for TELC B1 German Speaking Exam
- Three-voice Text-to-Speech simulation
- Recording capabilities for self-evaluation
- Complete exam tasks with authentic content

## Features
### Teil 1 - Personal Introduction
- Full self-introduction script
- 25 follow-up questions with model answers
- Examiner → Candidate A → Candidate B flow

### Teil 2 - Joint Planning Task
- 9 realistic planning scenarios
- Complete dialogues for each scenario
- Interactive dialogue playback

### Teil 3 - Picture Description
- 10 picture description tasks
- SVG placeholder images
- Examiner prompts and model answers

## Technical Architecture
### Frontend (React + TypeScript)
- Three-panel responsive layout
- Text-to-Speech with Web Speech API
- Audio recording with MediaRecorder API
- Dark/Light mode support

### Data
- All exam content stored in client-side TypeScript files
- No database required for MVP
- In-memory storage for future features

## Project Structure
```
client/src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── candidate-panel.tsx
│   ├── content-panel.tsx
│   ├── dialogue-display.tsx
│   ├── examiner-panel.tsx
│   ├── recording-controls.tsx
│   ├── simulation-controls.tsx
│   ├── svg-placeholders.tsx
│   ├── theme-toggle.tsx
│   └── voice-controls.tsx
├── lib/
│   ├── exam-data.ts     # Complete exam content
│   ├── theme-provider.tsx
│   ├── use-recorder.ts  # Recording hook
│   └── use-speech.ts    # TTS hook
├── pages/
│   └── exam-simulator.tsx
└── App.tsx
```

## User Preferences
- German language interface with English labels
- Inter font for UI, JetBrains Mono for technical info
- Professional, education-focused design

## Recent Changes
- December 2024: Initial implementation of TELC B1 Simulator
  - Three-panel layout (Examiner, Content, Candidates)
  - TTS with three distinct voice profiles
  - Recording system with three recorders
  - Complete Teil 1, 2, 3 content
  - Dark mode support
