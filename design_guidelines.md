# TELC B1 Exam Simulator - Design Guidelines

## Design Approach
**Design System Foundation**: Material Design principles adapted for educational software, emphasizing clarity, information hierarchy, and intuitive controls. This is a utility-focused application where learners need immediate comprehension of exam structure and controls.

**Core Principles**:
- Clear role differentiation through layout and typography
- Prominent, accessible audio and recording controls
- Clean information hierarchy for exam content
- Professional, confidence-inspiring aesthetic suitable for exam preparation

---

## Layout System

### Three-Panel Desktop Layout
- **Left Panel (Examiner)**: Fixed width 280px, contains examiner controls and status
- **Center Panel (Content)**: Flexible width (min 400px), displays current task, dialogue, questions, images
- **Right Panel (Candidates)**: Fixed width 320px, houses Candidate A & B recording controls

### Responsive Breakpoints
- Desktop (1200px+): Three-column layout
- Tablet (768px-1199px): Stacked layout - Examiner top, Content middle, Candidates bottom
- Mobile (<768px): Full-width stacked panels with collapsible sections

### Spacing Primitives
Use Tailwind units: **2, 3, 4, 6, 8, 12** for consistent rhythm
- Panel padding: `p-6` (desktop), `p-4` (mobile)
- Section spacing: `space-y-6` within panels
- Component gaps: `gap-4` for controls, `gap-3` for buttons
- Content blocks: `mb-8` between major sections

---

## Typography System

### Font Families
**Primary**: Inter (Google Fonts) - Clean, highly legible for UI and German text
**Monospace**: JetBrains Mono - For timestamps, word counts, technical info

### Type Scale
- **H1 (Exam Task Headers)**: text-2xl font-bold (32px)
- **H2 (Section Headers)**: text-xl font-semibold (24px)
- **H3 (Component Labels)**: text-lg font-medium (20px)
- **Body (Dialogue/Content)**: text-base leading-relaxed (16px/1.75)
- **Small (Metadata/Status)**: text-sm (14px)
- **Micro (Timestamps)**: text-xs font-mono (12px)

### German Language Considerations
- Adequate letter-spacing for German characters (ä, ö, ü, ß)
- Generous line-height (1.75) for readability of long sentences
- Left-aligned text throughout (no justified text which creates awkward German word spacing)

---

## Component Library

### Navigation & Task Selection
**Exam Task Tabs**
- Horizontal tab bar with three equal-width sections: "Teil 1", "Teil 2", "Teil 3"
- Active tab: Underlined with 3px indicator, font-semibold
- Inactive tabs: font-normal, cursor-pointer
- Spacing: px-6 py-3 per tab

### Audio & Recording Controls

**Primary Audio Player** (Examiner/Candidate voices)
- Prominent play/pause button (48px circle)
- Progress bar with current time / total duration
- Speed control: 0.75x, 1x, 1.25x, 1.5x (text-sm buttons)
- Pitch control: Slider from -2 to +2
- Layout: Horizontal flex with gap-4 between controls

**Recording Interface**
- Large circular Record button (64px) with pulsing animation when active
- Stop, Play, Download buttons (40px each) in horizontal row
- Visual waveform indicator during recording (height 80px)
- Timer display (text-lg font-mono) showing recording duration
- Status label: "Ready", "Recording...", "Stopped", "Playing"

**Global Recorder** (Full simulation)
- Distinct visual treatment - elevated card with shadow
- Same control pattern as individual recorders
- Session metadata: Total duration, number of turns recorded

### Content Display Components

**Dialogue Display**
- Card-based layout with distinct sections per speaker
- Speaker label (Examiner/A/B): text-sm font-semibold uppercase tracking-wide
- Dialogue text: text-base leading-relaxed
- Spacing: mb-4 between dialogue turns
- Max-width: 65ch for optimal reading

**Question/Answer Pairs**
- Question: font-semibold with arrow icon (→)
- Answer: Indented ml-6, leading-relaxed
- Separator: border-b between pairs

**Picture Description Task**
- SVG placeholder image: aspect-ratio 4:3, max-width 600px, centered
- Image description below in bordered card
- Model answer in collapsible accordion (initially collapsed)

### Mode Selection Controls
**Simulation Mode Buttons**
- Button group with 5 options:
  - "Full Simulation"
  - "Practice as A"
  - "Practice as B"
  - "Step Mode"
  - "Repeat Last"
- Active mode: font-semibold with distinct visual treatment
- Layout: Wrap on mobile, horizontal row on desktop
- Size: px-4 py-2 per button

### Status Indicators
**Voice Activity**
- Small colored dot (8px) next to active speaker
- Label showing current speaker
- Pause countdown for adaptive pause engine

**Recording Status**
- Recording: Pulsing red indicator
- Playing: Animated sound wave icon
- Idle: Neutral state icon

---

## Interactive Elements

### Buttons
**Primary Action** (Start Simulation, Begin Recording)
- Large size: px-6 py-3, text-base font-semibold
- Rounded corners: rounded-lg

**Secondary Action** (Stop, Download)
- Medium size: px-4 py-2, text-sm font-medium
- Rounded corners: rounded-md

**Icon Buttons** (Play, Pause, Reset)
- Square: 40px × 40px
- Rounded: rounded-full
- Icon size: 20px

### Form Controls
**Sliders** (Pause Sensitivity, Speed, Pitch)
- Track height: 6px
- Thumb size: 16px circle
- Value label below slider showing current setting

**Toggles** (Auto-play, Loop)
- Standard toggle switch (48px wide × 24px tall)
- Label to the right: text-sm

---

## Layout Patterns

### Panel Structure
Each panel follows consistent internal structure:
1. **Panel Header**: Title + quick actions (collapse, settings)
2. **Status Bar**: Current state, active task, timer
3. **Main Content Area**: Scrollable, max-height with overflow-y-auto
4. **Control Footer**: Primary action buttons, sticky to panel bottom

### Content Sections
- Generous whitespace: py-6 between major sections
- Clear visual hierarchy through size and weight
- Divider lines (border-t) between sections when needed
- Collapsible sections with chevron icon indicators

### Mobile Optimization
- Collapsible panels with accordion behavior
- Sticky header showing current task and quick controls
- Bottom sheet for recording controls (always accessible)
- Larger touch targets: minimum 44px × 44px for all interactive elements

---

## Accessibility Features
- High contrast text throughout
- Focus indicators on all interactive elements (2px outline)
- ARIA labels for all audio controls and recorders
- Keyboard navigation support (Tab, Space, Enter)
- Screen reader announcements for recording state changes
- Clear visual feedback for all state changes

---

## Images
**No hero image required** - This is a functional training application. 

**SVG Placeholders for Teil 3**:
- Generate simple, themed SVG illustrations representing each picture description scenario
- Consistent style across all 10 images (line art, minimal detail)
- Dimensions: 800×600px (4:3 aspect ratio)
- Place centrally in content area with max-width 600px
- Example themes: Family gathering, workplace scene, travel situation, daily activity