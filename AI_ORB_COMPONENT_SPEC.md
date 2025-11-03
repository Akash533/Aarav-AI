# AI Orb Component - Detailed Design Specification

## 🔮 The Living AI Orb - Technical Implementation Guide

The AI Orb is the heart and soul of Aarav AI. This document provides pixel-perfect specifications for designers and developers to create a stunning, reactive orb that feels alive.

---

## 📐 Dimensions & Structure

### Size Variants

| Platform | Variant | Size | Use Case |
|----------|---------|------|----------|
| Desktop | Large | 420×420px | Large displays (1920px+) |
| Desktop | Standard | 360×360px | Standard desktops (1440px) |
| Desktop | Small | 320×320px | Small laptops (1024px) |
| Tablet | Standard | 280×280px | iPad, Android tablets |
| Mobile | Standard | 240×240px | iPhone 13/14, Android |
| Mobile | Small | 200×200px | iPhone SE, small phones |

### Layer Structure (Z-Index Bottom to Top)

```
Layer 0: Background Glow (behind orb)
Layer 1: Outer Ring (Pulse)
Layer 2: Middle Ring (Energy)
Layer 3: Inner Ring (Containment)
Layer 4: Core Orb (Main sphere)
Layer 5: Reflection Overlay
Layer 6: Particle Emitter
Layer 7: Consciousness Icon/Emoji
Layer 8: Voice Waveform (when active)
Layer 9: Touch Ripple (on interaction)
```

---

## 🎨 Visual Specifications

### Layer 1: Background Glow

**Purpose:** Creates ambient light around the orb

```css
Position: absolute
Size: 140% of orb diameter
Center: Aligned with orb center
Background: radial-gradient(
  circle at 50% 50%,
  rgba(0, 212, 255, 0.3) 0%,
  rgba(0, 212, 255, 0.15) 40%,
  transparent 70%
)
Filter: blur(40px)
Animation: Gentle pulse (3s ease-in-out infinite)
```

### Layer 2: Outer Ring (Pulse)

**Purpose:** Outermost rotating ring, creates sense of energy field

```css
Size: 100% (full orb size)
Shape: Circle with stroke, no fill
Stroke: 2px
Stroke Color: linear-gradient(
  135deg,
  rgba(0, 212, 255, 0.6) 0%,
  rgba(0, 170, 204, 0.4) 50%,
  rgba(0, 212, 255, 0.6) 100%
)
Opacity: 0.7 (animated between 0.5 and 0.9)
Animation: 
  - Rotate: 60s linear infinite
  - Opacity: 3s ease-in-out infinite
```

**SVG Path for Desktop (320px):**
```svg
<circle 
  cx="160" 
  cy="160" 
  r="158" 
  fill="none" 
  stroke="url(#outerRingGradient)" 
  stroke-width="2"
  opacity="0.7"
/>
```

### Layer 3: Middle Ring (Energy)

**Purpose:** Secondary ring, counter-rotates for dynamic effect

```css
Size: 80% of orb (256px on 320px orb)
Position: Centered
Shape: Circle with gradient stroke
Stroke: 3px
Stroke Color: linear-gradient(
  225deg,
  rgba(96, 165, 250, 0.5) 0%,
  rgba(0, 212, 255, 0.3) 100%
)
Opacity: 0.6
Animation: 
  - Rotate: -45s linear infinite (counter-clockwise)
  - Scale: 1.0 to 1.02 (breathing)
```

**Particle Trail:**
- Small particles follow the ring's path
- Count: 8-12 particles
- Size: 2-4px
- Delay: Staggered trail effect

### Layer 4: Inner Ring (Containment)

**Purpose:** Frame for the core orb, provides depth

```css
Size: 60% of orb (192px on 320px orb)
Position: Centered
Shape: Circle with solid color
Fill: rgba(0, 212, 255, 0.08)
Border: 1px solid rgba(0, 212, 255, 0.2)
Box-shadow: 
  inset 0 0 20px rgba(0, 212, 255, 0.2),
  0 0 30px rgba(0, 212, 255, 0.1)
Animation: Breathing (3s ease-in-out infinite)
  - Scale: 1.0 to 1.03
```

### Layer 5: Core Orb (Main Sphere)

**Purpose:** The primary visual element, the "consciousness"

```css
Size: 50% of total (160px on 320px orb)
Position: Absolute center
Shape: Perfect circle
Background: radial-gradient(
  circle at 40% 30%,
  rgba(255, 255, 255, 0.45) 0%,
  rgba(200, 235, 255, 0.35) 20%,
  rgba(0, 212, 255, 0.25) 40%,
  rgba(0, 170, 204, 0.18) 70%,
  rgba(0, 150, 180, 0.14) 100%
)
Box-shadow:
  /* Inner shadow for depth */
  inset -8px -8px 20px rgba(0, 0, 0, 0.3),
  inset 8px 8px 20px rgba(255, 255, 255, 0.1),
  /* Outer glow */
  0 0 40px rgba(0, 212, 255, 0.4),
  0 0 80px rgba(0, 212, 255, 0.2)
```

**State Color Variations:**

| State | Hue Rotation | Description |
|-------|--------------|-------------|
| Calm | 0° (base) | Default cyan-blue |
| Happy | -10° | Brighter cyan |
| Focused | +10° | Deeper blue |
| Alert | -140° | Amber/yellow shift |
| Thinking | +30° | Cool blue |
| Error | -190° | Red shift |
| Success | -170° | Green shift |

**Implementation:**
```css
.orb.state-alert {
  filter: hue-rotate(-140deg);
}
```

### Layer 6: Reflection Overlay

**Purpose:** Adds realism with light reflection

```css
Size: Same as core orb (160px on 320px)
Position: Absolute center
Background: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.4) 0%,
  rgba(255, 255, 255, 0.2) 30%,
  transparent 60%
)
Opacity: 0.3
Border-radius: 50%
Pointer-events: none
```

**Reflection Highlight (Specular):**
```css
/* Pseudo-element ::before */
Position: absolute
Top: 20%
Left: 25%
Size: 40% × 40%
Background: radial-gradient(
  circle,
  rgba(255, 255, 255, 0.6) 0%,
  rgba(255, 255, 255, 0.2) 50%,
  transparent 100%
)
Filter: blur(10px)
```

### Layer 7: Particle Emitter

**Purpose:** Dynamic particles that react to state changes

**Background Particles (Idle State):**
```javascript
{
  count: 6,
  size: 1-2px,
  color: 'rgba(0, 212, 255, 0.4)',
  movement: 'orbital',
  radius: 80-100px from center,
  speed: 0.5px/frame,
  blur: 1px
}
```

**Emission Particles (Active States):**
```javascript
// On interaction, voice input, state change
{
  count: 12-24,
  size: 2-4px,
  color: match orb state,
  movement: 'radial outward',
  initialVelocity: 3-5px/frame,
  gravity: -0.1px/frame² (upward drift),
  fadeOut: exponential over 1.2s,
  blur: 2px
}
```

### Layer 8: Consciousness Icon (Emoji/Symbol)

**Purpose:** Represents the AI's emotional state

```css
Position: Absolute center
Font-size: 46px (desktop), 32px (mobile)
Text-align: center
Line-height: 1
Emoji: System emoji font
Filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))
Transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

**Emoji State Mapping:**
```
Idle/Calm:     🙂 (Slightly Smiling Face)
Happy:         😄 (Grinning Face with Smiling Eyes)
Focused:       🧐 (Face with Monocle)
Listening:     🎧 (Headphone) or maintain with pulse
Processing:    🤔 (Thinking Face)
Speaking:      💬 (Speech Balloon)
Alert:         ⚡ (High Voltage)
Success:       ✨ (Sparkles) or ✓
Error:         ⚠️ (Warning)
Analyzing:     🔍 (Magnifying Glass)
Learning:      📚 (Books)
```

**Transition Animation:**
```css
@keyframes emojiChange {
  0% {
    transform: scale(1) rotateY(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(0.3) rotateY(90deg);
    opacity: 0;
  }
  51% {
    /* Change emoji here */
  }
  100% {
    transform: scale(1) rotateY(0deg);
    opacity: 1;
  }
}
Duration: 0.4s
```

### Layer 9: Voice Waveform

**Purpose:** Visual feedback during voice input

```css
Position: absolute
Bottom: 16px (from orb bottom)
Display: flex
Gap: 6px
Justify-content: center
```

**Individual Bars:**
```css
Count: 8 bars
Width: 4px
Height: Animated (8-32px range)
Background: var(--primary, #00D4FF)
Border-radius: 2px
Animation: 
  - wave 1.1s ease-in-out infinite
  - Stagger delay: 0.1s per bar
Box-shadow: 0 0 8px rgba(0, 212, 255, 0.5)
```

**Animation:**
```css
@keyframes wave {
  0%, 100% {
    transform: scaleY(0.4);
  }
  50% {
    transform: scaleY(1.6);
  }
}
```

**Audio-Reactive (Advanced):**
```javascript
// Map audio frequency data to bar heights
const updateWaveform = (audioData) => {
  bars.forEach((bar, index) => {
    const value = audioData[index] / 255; // Normalize
    const height = 8 + (value * 24); // 8-32px range
    bar.style.height = `${height}px`;
  });
};
```

### Layer 10: Touch/Click Ripple

**Purpose:** Visual feedback on interaction

```css
/* Created on click/tap */
Position: absolute
Size: 0 → 200% of orb
Border-radius: 50%
Background: radial-gradient(
  circle,
  rgba(0, 212, 255, 0.4) 0%,
  rgba(0, 212, 255, 0.2) 50%,
  transparent 100%
)
Animation: ripple 0.6s ease-out
```

**Ripple Animation:**
```css
@keyframes ripple {
  from {
    transform: scale(0);
    opacity: 0.6;
  }
  to {
    transform: scale(2);
    opacity: 0;
  }
}
```

---

## 🎬 Animation States

### 1. Idle State (Default)

**Visual:**
- All layers visible
- Gentle breathing animation
- Slow ring rotation
- Drifting particles
- Emoji: 🙂

**Animations:**
```javascript
{
  coreOrb: {
    scale: keyframes([1.0, 1.05, 1.0]),
    duration: 3000,
    easing: 'easeInOut',
    loop: true
  },
  outerRing: {
    rotate: 360,
    duration: 60000,
    easing: 'linear',
    loop: true
  },
  middleRing: {
    rotate: -360,
    duration: 45000,
    easing: 'linear',
    loop: true
  },
  glow: {
    opacity: keyframes([0.3, 0.5, 0.3]),
    duration: 4000,
    easing: 'easeInOut',
    loop: true
  }
}
```

### 2. Listening State

**Triggered by:** Voice activation, mic button press

**Visual:**
- Rings rotate 30% faster
- Brightness increase (+20%)
- Voice waveform appears
- Pulsing glow synced to audio
- Emoji: 🎧 or current + indicator

**Animations:**
```javascript
{
  coreOrb: {
    scale: keyframes([1.0, 1.08, 1.0]),
    duration: 1500, // Faster breathing
    easing: 'easeInOut',
    loop: true
  },
  glow: {
    scale: keyframes([1.0, 1.2, 1.0]),
    opacity: keyframes([0.4, 0.7, 0.4]),
    duration: 800, // Sync with heartbeat
    easing: 'easeInOut',
    loop: true
  },
  waveform: {
    display: 'flex',
    bars: 'audio-reactive' // Each bar synced to frequency
  }
}
```

### 3. Processing/Thinking State

**Triggered by:** Query submitted, awaiting response

**Visual:**
- Shimmer effect across orb surface
- Particles swirl clockwise (accelerated)
- Color shifts to thinking hue
- Multiple reflection highlights move
- Emoji: 🤔

**Animations:**
```javascript
{
  coreOrb: {
    filter: hue-rotate(+30deg),
    transition: '0.4s ease'
  },
  shimmer: {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,0.3),
      transparent
    ),
    backgroundSize: '200% 100%',
    backgroundPosition: keyframes(['-100% 0', '200% 0']),
    duration: 1500,
    loop: true
  },
  particles: {
    velocity: '×2',
    direction: 'clockwise swirl'
  }
}
```

### 4. Speaking/Responding State

**Triggered by:** AI responds with text-to-speech

**Visual:**
- Pulsing glow synced with TTS output
- Ripple waves emanate from center (timed with syllables)
- Warmer color tone
- Emoji: 💬 or 😊

**Animations:**
```javascript
{
  coreOrb: {
    scale: syncWithAudio(ttsOutput),
    // Pulse on each syllable/word
  },
  ripples: {
    emit: 'on syllable',
    count: 1 per syllable,
    timing: match TTS amplitude
  },
  glow: {
    opacity: syncWithAudio(ttsOutput),
    range: [0.4, 0.8]
  }
}
```

### 5. Alert State

**Triggered by:** Important notification, user attention needed

**Visual:**
- Sharp, bright pulse (200ms cycle)
- Color shift to amber/yellow (hue -140°)
- Faster rotation (2x speed)
- Higher contrast
- Emoji: ⚡ or ⚠️

**Animations:**
```javascript
{
  coreOrb: {
    filter: 'hue-rotate(-140deg) brightness(1.2)',
    scale: keyframes([1.0, 1.15, 1.0]),
    duration: 400,
    easing: 'easeInOut',
    loop: true
  },
  rings: {
    rotationSpeed: '×2'
  },
  pulse: {
    boxShadow: keyframes([
      '0 0 20px rgba(255,193,7,0.4)',
      '0 0 60px rgba(255,193,7,0.8)',
      '0 0 20px rgba(255,193,7,0.4)'
    ]),
    duration: 600
  }
}
```

### 6. Success State

**Triggered by:** Task completed, positive confirmation

**Visual:**
- Green color wash (hue -170°)
- Expanding ring animation (one-time)
- Celebratory particle burst
- Emoji: ✨ or ✓

**Animations:**
```javascript
{
  coreOrb: {
    filter: 'hue-rotate(-170deg)',
    transition: '0.3s ease'
  },
  successRing: {
    scale: keyframes([0.5, 2.0]),
    opacity: keyframes([0.8, 0]),
    duration: 800,
    easing: 'easeOut',
    count: 1 // One-time
  },
  particleBurst: {
    count: 30,
    direction: 'radial 360°',
    velocity: 5-8px/frame,
    colors: ['#22C55E', '#4ADE80', '#86EFAC'],
    size: 3-6px,
    lifespan: 1000
  }
}
```

### 7. Error State

**Triggered by:** Error occurred, failure

**Visual:**
- Red hue shift (hue -190°)
- Shaking animation (horizontal)
- Dimmed glow
- Emoji: ⚠️ or 🔴

**Animations:**
```javascript
{
  coreOrb: {
    filter: 'hue-rotate(-190deg) brightness(0.8)',
    transition: '0.3s ease'
  },
  shake: {
    translateX: keyframes([0, -8, 8, -8, 8, -4, 4, 0]),
    duration: 500,
    easing: 'easeInOut',
    count: 1
  },
  glow: {
    opacity: 0.3,
    boxShadow: '0 0 30px rgba(239,68,68,0.5)'
  }
}
```

---

## 🖱️ Interaction Specifications

### Click/Tap Behavior

**Single Click/Tap:**
```
Action: Toggle listening mode
Visual: Ripple effect from tap point
Haptic: Medium impact (mobile)
Audio: Subtle "ding" sound (optional)
Transition: 200ms to listening state
```

**Double Tap (Mobile):**
```
Action: Quick command mode
Visual: Double ripple
Haptic: Light-light pattern
```

**Long Press (2s):**
```
Action: Open quick settings
Visual: Progress ring around orb
Haptic: Heavy impact on trigger
```

### Hover (Desktop)

**Hover State:**
```css
.orb:hover {
  transform: scale(1.03);
  filter: brightness(1.1);
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.orb:hover .glow {
  opacity: 0.6;
  scale: 1.2;
}
```

**Cursor Style:**
```css
cursor: pointer;
/* Custom cursor option */
cursor: url('cursor-interact.svg'), pointer;
```

### Active/Pressed State

```css
.orb:active {
  transform: scale(0.97);
  transition: transform 0.1s ease;
}
```

### Focus State (Keyboard Navigation)

```css
.orb:focus {
  outline: 3px solid var(--primary);
  outline-offset: 8px;
  box-shadow: 0 0 0 8px rgba(0, 212, 255, 0.2);
}
```

---

## 🎨 Accessibility

### ARIA Attributes

```html
<button 
  class="orb"
  aria-label="AI Assistant Orb"
  aria-pressed="false"
  role="button"
  tabindex="0"
  aria-live="polite"
  aria-describedby="orb-status"
>
  <!-- Orb layers -->
</button>

<div id="orb-status" class="sr-only">
  Status: Idle, ready to listen
</div>
```

### Screen Reader Announcements

```javascript
const announceState = (state) => {
  const messages = {
    idle: 'AI Assistant ready',
    listening: 'Listening to your voice',
    processing: 'Processing your request',
    speaking: 'AI is responding',
    error: 'An error occurred'
  };
  
  statusElement.textContent = messages[state];
};
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  .orb,
  .orb * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Keep only essential feedback */
  .orb {
    transition: background-color 0.3s ease;
  }
}
```

### Color Contrast

**Minimum Contrast Ratios:**
- Orb against background: 3:1 (UI component)
- Text/icons on orb: 4.5:1 (normal text)
- Focus indicator: 3:1

**High Contrast Mode:**
```css
@media (prefers-contrast: high) {
  .orb {
    border: 3px solid currentColor;
  }
  
  .orb-icon {
    filter: contrast(1.5);
  }
}
```

---

## 💻 Implementation Code Examples

### HTML Structure

```html
<div class="orb-container">
  <canvas id="particles" class="orb-particles"></canvas>
  
  <button class="orb" id="aiOrb" aria-label="AI Assistant">
    <div class="orb-layer glow" aria-hidden="true"></div>
    <div class="orb-layer ring-outer" aria-hidden="true"></div>
    <div class="orb-layer ring-middle" aria-hidden="true"></div>
    <div class="orb-layer ring-inner" aria-hidden="true"></div>
    <div class="orb-layer core">
      <div class="reflection"></div>
      <span class="orb-icon" id="orbIcon">🙂</span>
    </div>
    <div class="waveform hidden" id="waveform" aria-hidden="true">
      <i></i><i></i><i></i><i></i>
      <i></i><i></i><i></i><i></i>
    </div>
  </button>
  
  <div id="orbStatus" class="sr-only" aria-live="polite"></div>
</div>
```

### CSS (Core Styles)

```css
.orb-container {
  position: relative;
  width: 320px;
  height: 320px;
  display: grid;
  place-items: center;
}

.orb {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: transform 0.2s ease;
}

.orb-layer {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.glow {
  width: 140%;
  height: 140%;
  background: radial-gradient(
    circle,
    rgba(0, 212, 255, 0.3) 0%,
    transparent 70%
  );
  filter: blur(40px);
  animation: glow-pulse 3s ease-in-out infinite;
}

.ring-outer {
  width: 100%;
  height: 100%;
  border: 2px solid rgba(0, 212, 255, 0.6);
  opacity: 0.7;
  animation: rotate-cw 60s linear infinite;
}

.ring-middle {
  width: 80%;
  height: 80%;
  border: 3px solid rgba(96, 165, 250, 0.5);
  opacity: 0.6;
  animation: rotate-ccw 45s linear infinite;
}

.ring-inner {
  width: 60%;
  height: 60%;
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.2);
  box-shadow: 
    inset 0 0 20px rgba(0, 212, 255, 0.2),
    0 0 30px rgba(0, 212, 255, 0.1);
  animation: breathe 3s ease-in-out infinite;
}

.core {
  width: 50%;
  height: 50%;
  background: radial-gradient(
    circle at 40% 30%,
    rgba(255, 255, 255, 0.45) 0%,
    rgba(0, 212, 255, 0.25) 40%,
    rgba(0, 150, 180, 0.14) 100%
  );
  box-shadow:
    inset -8px -8px 20px rgba(0, 0, 0, 0.3),
    inset 8px 8px 20px rgba(255, 255, 255, 0.1),
    0 0 40px rgba(0, 212, 255, 0.4);
  display: grid;
  place-items: center;
  position: relative;
  animation: breathe 3s ease-in-out infinite;
}

.reflection {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4) 0%,
    transparent 60%
  );
  border-radius: 50%;
  opacity: 0.3;
}

.orb-icon {
  font-size: 46px;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 1;
}

.waveform {
  position: absolute;
  bottom: 16px;
  display: flex;
  gap: 6px;
  z-index: 2;
}

.waveform i {
  width: 4px;
  height: 8px;
  background: #00D4FF;
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(0, 212, 255, 0.5);
}

.waveform i:nth-child(1) { animation: wave 1.1s ease-in-out 0.0s infinite; }
.waveform i:nth-child(2) { animation: wave 1.1s ease-in-out 0.1s infinite; }
.waveform i:nth-child(3) { animation: wave 1.1s ease-in-out 0.2s infinite; }
.waveform i:nth-child(4) { animation: wave 1.1s ease-in-out 0.3s infinite; }
.waveform i:nth-child(5) { animation: wave 1.1s ease-in-out 0.4s infinite; }
.waveform i:nth-child(6) { animation: wave 1.1s ease-in-out 0.5s infinite; }
.waveform i:nth-child(7) { animation: wave 1.1s ease-in-out 0.6s infinite; }
.waveform i:nth-child(8) { animation: wave 1.1s ease-in-out 0.7s infinite; }

@keyframes glow-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
}

@keyframes rotate-cw {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes rotate-ccw {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes wave {
  0%, 100% { transform: scaleY(0.4); }
  50% { transform: scaleY(1.6); }
}

.hidden {
  display: none !important;
}

/* States */
.orb.state-listening .core {
  animation: breathe 1.5s ease-in-out infinite;
}

.orb.state-processing .core {
  filter: hue-rotate(30deg);
}

.orb.state-alert .core {
  filter: hue-rotate(-140deg) brightness(1.2);
  animation: breathe 0.4s ease-in-out infinite;
}

.orb.state-success .core {
  filter: hue-rotate(-170deg);
}

.orb.state-error .core {
  filter: hue-rotate(-190deg) brightness(0.8);
}
```

### JavaScript (State Management)

```javascript
class OrbController {
  constructor(element) {
    this.orb = element;
    this.icon = element.querySelector('.orb-icon');
    this.waveform = element.querySelector('.waveform');
    this.state = 'idle';
  }
  
  setState(newState) {
    // Remove old state
    this.orb.classList.remove(`state-${this.state}`);
    
    // Add new state
    this.state = newState;
    this.orb.classList.add(`state-${this.state}`);
    
    // Update icon
    const icons = {
      idle: '🙂',
      listening: '🎧',
      processing: '🤔',
      speaking: '💬',
      alert: '⚡',
      success: '✨',
      error: '⚠️'
    };
    
    this.updateIcon(icons[newState] || '🙂');
    
    // Show/hide waveform
    if (newState === 'listening') {
      this.waveform.classList.remove('hidden');
    } else {
      this.waveform.classList.add('hidden');
    }
    
    // Announce to screen readers
    this.announce(newState);
  }
  
  updateIcon(emoji) {
    // Animate icon change
    this.icon.style.transform = 'scale(0.3) rotateY(90deg)';
    this.icon.style.opacity = '0';
    
    setTimeout(() => {
      this.icon.textContent = emoji;
      this.icon.style.transform = 'scale(1) rotateY(0deg)';
      this.icon.style.opacity = '1';
    }, 200);
  }
  
  announce(state) {
    const messages = {
      idle: 'AI Assistant ready',
      listening: 'Listening',
      processing: 'Processing',
      speaking: 'Responding',
      alert: 'Alert',
      success: 'Success',
      error: 'Error'
    };
    
    const statusElement = document.getElementById('orbStatus');
    if (statusElement) {
      statusElement.textContent = messages[state];
    }
  }
  
  ripple(event) {
    const rect = this.orb.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    this.orb.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  }
}

// Usage
const orb = new OrbController(document.getElementById('aiOrb'));

document.getElementById('aiOrb').addEventListener('click', (e) => {
  orb.ripple(e);
  orb.setState('listening');
});
```

---

## 📱 Responsive Adjustments

### Mobile (< 768px)

```css
@media (max-width: 767px) {
  .orb-container {
    width: 240px;
    height: 240px;
  }
  
  .orb-icon {
    font-size: 32px;
  }
  
  .waveform {
    bottom: 12px;
  }
  
  .waveform i {
    width: 3px;
    height: 6px;
  }
}

@media (max-width: 374px) {
  .orb-container {
    width: 200px;
    height: 200px;
  }
  
  .orb-icon {
    font-size: 28px;
  }
}
```

### Desktop Large (> 1920px)

```css
@media (min-width: 1920px) {
  .orb-container {
    width: 420px;
    height: 420px;
  }
  
  .orb-icon {
    font-size: 56px;
  }
  
  .glow {
    filter: blur(60px);
  }
}
```

---

**This comprehensive specification ensures pixel-perfect implementation of the AI Orb across all platforms and states.**
