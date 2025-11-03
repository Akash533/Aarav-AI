# Aarav AI - Full Figma Design Specification
## Ultra-Premium AI Voice Assistant | Desktop, Mobile & iOS

---

## 🎨 Design Philosophy

**Core Concept:** A living, breathing AI consciousness represented through a dynamic, morphing AI Orb that responds to user voice and emotions with fluid animations, particle effects, and immersive visual feedback.

**Experience Pillars:**
- **Futuristic Minimalism** - Clean, uncluttered interfaces with premium glass-morphism effects
- **Living Intelligence** - The AI Orb as the central, living entity that reacts and breathes
- **Emotional Connection** - Visual responses that mirror user emotions and intent
- **Premium Tactility** - Every interaction feels responsive, smooth, and intentional

---

## 🌈 Design System

### Color Palette

#### Primary Colors
```
AI Cyan (Primary)     #00D4FF  - Main brand color, AI Orb glow
Deep Space (BG)       #0B1220  - Primary background
Cosmic Blue           #1E293B  - Secondary surfaces
Ice White             #CFE8FF  - Primary text
Steel Gray            #8AA3C2  - Secondary text
```

#### Semantic Colors
```
Success Green         #22C55E  - System status, confirmations
Alert Amber           #F59E0B  - Warnings, attention states
Error Red             #EF4444  - Errors, critical states
Focus Blue            #60A5FA  - Interactive elements, focus states
```

#### Orb States (Dynamic Hues)
```
Calm State            HSL(190, 100%, 50%)  - Default resting
Happy State           HSL(180, 100%, 55%)  - Positive emotion
Focused State         HSL(200, 100%, 48%)  - Processing/thinking
Alert State           HSL(50, 100%, 55%)   - Attention needed
Thinking State        HSL(220, 100%, 52%)  - Deep analysis
```

### Typography

#### Font Stack
```css
Primary: SF Pro Display / -apple-system / system-ui
Secondary: Inter / Roboto
Mono: SF Mono / Consolas / monospace
```

#### Type Scale
```
Hero Title       64px / 400 / -0.02em  - Marketing, hero sections
H1 Display       48px / 600 / -0.01em  - Main headings
H2 Section       32px / 600 / -0.01em  - Section titles
H3 Subsection    24px / 600 / 0        - Subsection titles
Body Large       18px / 400 / 0        - Primary content
Body Regular     15px / 400 / 0        - Standard text
Body Small       13px / 400 / 0.01em   - Secondary text
Caption          11px / 500 / 0.02em   - Labels, hints
```

### Spacing System
```
XXS:  4px   - Micro spacing
XS:   8px   - Tight spacing
S:    12px  - Compact spacing
M:    16px  - Standard spacing
L:    24px  - Comfortable spacing
XL:   32px  - Section spacing
XXL:  48px  - Large section breaks
XXXL: 64px  - Hero spacing
```

### Border Radius
```
sm:     6px   - Small components
md:     10px  - Standard cards
lg:     16px  - Large panels
xl:     24px  - Modal dialogs
round:  999px - Pills, avatars
circle: 50%   - Perfect circles
```

### Shadows & Depth
```css
/* Elevation levels */
shadow-sm:  0 2px 8px rgba(0, 0, 0, 0.12)
shadow-md:  0 4px 16px rgba(0, 0, 0, 0.24)
shadow-lg:  0 8px 30px rgba(0, 0, 0, 0.5)
shadow-xl:  0 16px 60px rgba(0, 0, 0, 0.7)

/* Glow effects */
glow-primary: 0 0 20px rgba(0, 212, 255, 0.6)
glow-success: 0 0 16px rgba(34, 197, 94, 0.5)
glow-orb:     0 0 80px rgba(0, 212, 255, 0.4),
              0 0 120px rgba(0, 212, 255, 0.2)
```

### Glass-morphism Effect
```css
backdrop-filter: blur(12px) saturate(180%)
background: rgba(255, 255, 255, 0.03)
border: 1px solid rgba(255, 255, 255, 0.06)
```

---

## 🔮 AI Orb - The Living Core

### Orb Structure (Layered Design)

**Frame: 320×320px (Desktop) | 240×240px (Mobile)**

#### Layer Hierarchy (Bottom to Top):
1. **Outer Ring (Pulse Layer)**
   - Size: 100% (320px desktop)
   - Style: Gradient stroke, 2px width
   - Animation: Slow rotation (60s), pulsing opacity
   - Effect: `radial-gradient(circle, rgba(0,212,255,0.4), transparent)`

2. **Middle Ring (Energy Layer)**
   - Size: 80% (256px desktop)
   - Style: Subtle gradient, rotating
   - Animation: Counter-rotation (45s)
   - Effect: Particle trail following rotation

3. **Inner Ring (Containment)**
   - Size: 60% (192px desktop)
   - Style: Solid with inner glow
   - Animation: Gentle breathing (3s ease-in-out)

4. **Core Orb (Central Entity)**
   - Size: 50% (160px desktop)
   - Style: Multi-layer radial gradient
   - Gradient Stops:
     ```
     Center: rgba(255, 255, 255, 0.45)
     40%:    rgba(0, 212, 255, 0.3)
     80%:    rgba(0, 212, 255, 0.14)
     Edge:   transparent
     ```
   - Reflection: 45° gradient overlay at 40% opacity
   - Shadow: Deep inner shadow + outer glow

5. **Consciousness Symbol (Emoji/Icon)**
   - Size: 46px (desktop) / 32px (mobile)
   - Position: Absolute center
   - States: 🙂 😄 🧐 ⚡ 🤔 💫 🎯 ✨
   - Transition: Morph animation (0.4s elastic)

### Dynamic Visual States

#### 1. Idle/Calm State
```
- Gentle breathing animation (2-3s cycle)
- Subtle particle drift around orb
- Soft cyan glow (0 0 40px)
- Emoji: 🙂
```

#### 2. Listening State
```
- Voice waveform bars appear at bottom
- Orb pulsing in sync with audio input
- Brightness increases 20%
- Rings rotate faster (30% speed increase)
- Emoji: 🎧 or keep current + add listening indicator
```

#### 3. Processing/Thinking State
```
- Rapid shimmer across orb surface
- Particle swirl accelerates clockwise
- Color shifts to thinking hue (220°)
- Multiple reflection highlights
- Emoji: 🤔 🧐
```

#### 4. Speaking/Responding State
```
- Pulsing glow synchronized with TTS output
- Ripple waves emanate from center
- Color warmer, more inviting
- Emoji: 💬 😊
```

#### 5. Alert/Attention State
```
- Sharp, bright pulse
- Color shift to amber/yellow
- Faster rotation, higher contrast
- Emoji: ⚡ ⚠️
```

#### 6. Success State
```
- Green color wash
- Expanding ring animation
- Celebratory particle burst
- Emoji: ✓ 🎉 ✨
```

#### 7. Error State
```
- Red hue shift
- Shaking micro-animation
- Dimmed glow
- Emoji: ⚠️ 🔴
```

### Particle System Specifications

**Background Particles**
```javascript
Count: 80-120 particles (based on screen size)
Size: 0.5px - 2px radius
Color: rgba(0, 212, 255, 0.6)
Movement: Random drift, 0.3-0.8px/frame
Connections: Draw lines when particles < 110px apart
Connection opacity: (1 - distance/110) × 0.6
Canvas: Full viewport, z-index: -1
```

**Orb Particles** (Appear on interaction)
```javascript
Emit on: Voice input, tap/click, state change
Count: 12-24 per emission
Size: 1-3px
Velocity: Radial outward, 2-5px/frame
Lifespan: 0.8-1.5s
Fade: Exponential decay
Color: Match orb state color
```

### Reflection & Lighting

**Light Source:** Top-left 40% position
**Specular Highlight:** 
- Position: 30% from top, 35% from left
- Size: 40% of orb diameter
- Opacity: 25-35%
- Blur: 20px

**Reflection Map:**
- Gradient overlay from top-left
- Multi-stop radial gradient
- Fresnel effect on edges

---

## 📱 Mobile UI Design (iOS & Android)

### Screen Dimensions
```
iOS:
- iPhone 14 Pro:     393 × 852 pt
- iPhone 14 Pro Max: 430 × 932 pt
- Safe Area Insets:  Top 59pt, Bottom 34pt

Android:
- Standard:          360 × 800 dp
- Large:             412 × 915 dp
- Status Bar:        24dp
- Navigation Bar:    48dp (gesture) / 56dp (buttons)
```

### Mobile Layout Structure

#### 1. Top Bar (60px height)
```
Layout: Flex, space-between
Left: Brand logo + name "Aarav AI"
Right: Time display + connectivity status
Background: Glass-morphism
Blur: 12px
Border-bottom: 1px rgba(255,255,255,0.06)
```

#### 2. Status Strip (48px height)
```
Layout: Horizontal scroll (if needed)
Items: System • Voice • Security • Device
Each item:
  - Pill shape (border-radius: 999px)
  - Icon/dot indicator (8px)
  - Label text (13px)
  - Background: rgba(255,255,255,0.03)
  - Padding: 8px 16px
```

#### 3. AI Orb Section (Central, 60% of available height)
```
Position: Center of screen
Size: 240×240px (scales to 200px on small phones)
Surrounding space: 32px minimum
Tap target: Full orb + 20px padding
Haptic feedback: Medium impact on tap
```

#### 4. Quick Actions Grid (Bottom, above tab bar)
```
Layout: 3×2 Grid (6 items)
Spacing: 12px gap
Card size: Flex, min 100px
Each action:
  - Icon (32px)
  - Label (12px)
  - Background: Glass card
  - Tap: Ripple effect + haptic
  - Height: 80px
```

#### 5. Bottom Navigation/Tab Bar (iOS: 80px, Android: 64px)
```
Items: Home • Chat • Settings • Profile
iOS specific:
  - Respect safe area (34pt bottom)
  - SF Symbols for icons
  - Blur background
Android specific:
  - Material icons
  - Elevation: 8dp
  - Ripple feedback
```

### Mobile-Specific Interactions

#### Gestures
```
Swipe Up on Orb:    Open voice settings
Swipe Down:         Dismiss overlay
Long Press Orb:     Quick settings menu
Double Tap Orb:     Toggle listening
Pinch:              (Reserved for future zoom)
3D Touch (iOS):     Peek at system info
```

#### Haptic Patterns
```
Light:    UI feedback, selections
Medium:   Confirmations, orb activation
Heavy:    Errors, important alerts
Success:  Notification pattern (._)
Error:    Alert pattern (. . .)
```

---

## 🖥️ Desktop UI Design

### Window Dimensions
```
Minimum:    1024 × 768px
Optimal:    1440 × 900px
Maximum:    2560 × 1440px
Aspect:     16:10 or 16:9
```

### Desktop Layout Grid

**12-Column Grid System**
```
Container Max Width: 1920px
Column Width:        Flexible
Gutter:              24px
Margin:              32px (large screens), 16px (medium)
```

### Layout Regions

#### 1. Top Bar (Fixed, 64px)
```
Full width, z-index: 100
Left section (25%):
  - Logo + Brand (with glow effect)
  - System status indicators
Center section (50%):
  - Time & Date display (monospace)
  - Active session info
Right section (25%):
  - User profile avatar
  - Settings gear icon
  - Minimize/maximize/close (native or custom)
```

#### 2. Sidebar (Optional, Collapsible, 280px)
```
Position: Left or right (user preference)
Content:
  - Navigation menu
  - Recent conversations
  - Quick shortcuts
  - System health widgets
Collapse: Hamburger menu, slides in/out
States: Expanded (280px) | Collapsed (60px) | Hidden
```

#### 3. Main Content Area (Central)
```
Layout: CSS Grid
Rows: 
  - Status strip (80px)
  - AI Orb region (flex, central)
  - Quick actions (120px)
  - Footer info (optional, 60px)

Maximum content width: 1200px
Centering: margin 0 auto
```

#### 4. AI Orb Section (Hero)
```
Size: 420×420px (large desktop)
      360×360px (standard desktop)
      320×320px (small desktop)
Position: Centered vertically and horizontally
Margins: 64px top, 48px bottom
```

#### 5. Quick Actions Panel
```
Layout: 6-column grid (2 rows)
Items: 12 action cards
Card dimensions: 160×100px
Gap: 16px
Each card:
  - Icon (40px)
  - Label (14px medium weight)
  - Hover: Lift effect (translateY(-4px))
  - Active: Scale(0.96)
  - Background: Glass-morphism
```

#### 6. Chat Panel (Slide-in, Right)
```
Width: 400px
Height: Viewport - 64px (minus top bar)
Position: Fixed right
Transform: translateX(0) | translateX(100%)
Transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
Sections:
  - Header (60px): Title + close button
  - Messages (flex-1): Scrollable chat history
  - Input (80px): Text field + send button
```

#### 7. System Info Panel (Bottom-right or Bottom)
```
Size: 400×200px (floating) or full-width strip
Content:
  - CPU usage graph
  - Memory usage
  - Network status
  - Active processes
Collapse: Toggle visibility
Style: Glass card with data visualizations
```

### Desktop-Specific Features

#### Window Controls
```
- Drag to move (top bar)
- Resize from edges
- Snap to screen edges (Windows)
- Full-screen mode (F11)
- Picture-in-picture mode for orb
```

#### Keyboard Shortcuts
```
Space:        Toggle listening
Ctrl+C:       Open chat
Ctrl+S:       Settings
Ctrl+K:       Quick command palette
Esc:          Close overlays
Tab:          Navigate elements
Enter:        Activate/confirm
```

#### Multi-Window Support
```
- Detach chat to separate window
- Detach system monitor
- Multiple orb instances (different AI personalities)
```

---

## 🎭 Component Library

### 1. Buttons

#### Primary Button
```
Size: 40px height
Padding: 0 24px
Border-radius: 10px
Background: linear-gradient(135deg, #00D4FF, #0EA5E9)
Text: 15px medium, white
Hover: Brightness(1.1) + lift shadow
Active: Scale(0.97)
Disabled: Opacity(0.4)
```

#### Secondary Button
```
Background: rgba(255,255,255,0.06)
Border: 1px solid rgba(255,255,255,0.12)
Text: var(--text)
Hover: Background rgba(255,255,255,0.1)
```

#### Icon Button
```
Size: 44×44px (mobile) / 36×36px (desktop)
Shape: Circle or rounded square
Background: Transparent or glass
Icon: 20px
Hover: Background fade in
Active: Scale(0.9)
```

### 2. Input Fields

#### Text Input
```
Height: 44px (mobile) / 40px (desktop)
Padding: 0 16px
Border-radius: 10px
Background: rgba(255,255,255,0.04)
Border: 1px solid rgba(255,255,255,0.08)
Text: 15px regular
Placeholder: rgba(255,255,255,0.3)

Focus state:
  - Border: 2px solid var(--primary)
  - Glow: 0 0 0 4px rgba(0,212,255,0.1)
  - Background: rgba(255,255,255,0.06)
```

#### Select/Dropdown
```
Same as text input
Icon: Chevron down (right side)
Dropdown menu:
  - Max-height: 300px
  - Scrollable
  - Item height: 40px
  - Hover: Background highlight
  - Selected: Checkmark icon
```

### 3. Cards

#### Glass Card
```
Background: rgba(255,255,255,0.03)
Backdrop-filter: blur(12px)
Border: 1px solid rgba(255,255,255,0.06)
Border-radius: 16px
Padding: 20px
Shadow: 0 8px 30px rgba(0,0,0,0.3)
```

#### Feature Card (Quick Action)
```
Display: flex column
Align: center
Gap: 12px
Padding: 16px
Min-height: 100px
Transition: all 0.2s ease
Hover:
  - Transform: translateY(-4px)
  - Shadow: 0 12px 40px rgba(0,0,0,0.4)
  - Background: rgba(255,255,255,0.05)
```

### 4. Status Indicators

#### Dot Indicator
```
Size: 8px circle
Colors:
  - Green (#22C55E): Active/OK
  - Blue (#60A5FA): Processing
  - Amber (#F59E0B): Warning
  - Red (#EF4444): Error
  - Gray (#64748B): Inactive
Animation: Pulse on active states
```

#### Progress Bar
```
Height: 4px (thin) / 10px (standard)
Background: rgba(255,255,255,0.1)
Fill: Linear gradient (primary colors)
Border-radius: 999px
Animation: Shimmer effect on loading
Indeterminate: Sliding highlight
```

### 5. Modals & Overlays

#### Modal Dialog
```
Max-width: 500px (mobile: 90vw)
Border-radius: 20px
Background: Glass-morphism (stronger blur)
Padding: 32px
Shadow: 0 16px 60px rgba(0,0,0,0.7)
Backdrop: rgba(0,0,0,0.6) with blur

Animation in:
  - Scale: 0.9 → 1
  - Opacity: 0 → 1
  - Duration: 0.3s ease-out
```

#### Toast Notification
```
Width: 320px (mobile: 90vw, max 360px)
Position: Bottom-left (desktop) / Top-center (mobile)
Padding: 16px
Border-radius: 12px
Background: rgba(12,20,36,0.95)
Border-left: 4px solid (status color)
Duration: 3000ms default
Animation: Slide + fade
```

### 6. Chat Components

#### Chat Message Bubble
```
User message:
  - Align: Right
  - Background: linear-gradient(135deg, #0EA5E9, #0284C7)
  - Border-radius: 16px 16px 4px 16px
  - Max-width: 75%
  - Padding: 12px 16px

Assistant message:
  - Align: Left
  - Background: rgba(255,255,255,0.06)
  - Border-radius: 16px 16px 16px 4px
  - Avatar: "A" in circle (24px)
```

#### Chat Input
```
Height: 48px
Background: rgba(255,255,255,0.04)
Border-radius: 24px
Padding: 0 16px 0 20px
Flex: Input field + Send button
Button: Icon only, primary color
```

---

## 🎬 Animation Specifications

### Timing Functions
```
ease-out:    cubic-bezier(0.0, 0, 0.2, 1)    - Entering
ease-in:     cubic-bezier(0.4, 0, 1, 1)      - Exiting
ease:        cubic-bezier(0.4, 0, 0.2, 1)    - Standard
elastic:     cubic-bezier(0.68, -0.55, 0.265, 1.55) - Bounce
```

### Duration Guidelines
```
Micro:       100-150ms  - Hover, highlight
Quick:       200-250ms  - Button press, toggle
Standard:    300-350ms  - Modal, drawer
Deliberate:  400-500ms  - Page transition
Slow:        600-800ms  - Orb state change
```

### Key Animations

#### 1. Orb Breathing (Idle)
```css
@keyframes breathe {
  0%, 100% { 
    transform: scale(1);
    opacity: 1;
  }
  50% { 
    transform: scale(1.05);
    opacity: 0.9;
  }
}
Duration: 3s
Easing: ease-in-out
Iteration: infinite
```

#### 2. Voice Waveform
```css
@keyframes wave {
  0%, 100% { 
    transform: scaleY(0.4);
  }
  50% { 
    transform: scaleY(1.6);
  }
}
Duration: 1.1s
Easing: ease-in-out
Iteration: infinite
Delay: Staggered per bar (0.1s increment)
```

#### 3. Ripple Effect (Touch/Click)
```css
@keyframes ripple {
  from {
    transform: scale(0);
    opacity: 0.6;
  }
  to {
    transform: scale(4);
    opacity: 0;
  }
}
Duration: 600ms
Easing: linear
```

#### 4. Shimmer (Loading/Processing)
```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
Background: linear-gradient(
  90deg, 
  transparent 0%, 
  rgba(255,255,255,0.1) 50%, 
  transparent 100%
)
Duration: 2s
Easing: linear
Iteration: infinite
```

#### 5. Slide In (Panel/Drawer)
```css
@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
Duration: 300ms
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

#### 6. Fade + Scale (Modal)
```css
@keyframes modalIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
Duration: 300ms
Easing: ease-out
```

---

## 📐 Responsive Breakpoints

```
Mobile Small:     320px - 374px   (iPhone SE)
Mobile Medium:    375px - 428px   (iPhone 13/14)
Mobile Large:     429px - 767px   (iPhone Max, Android)
Tablet:           768px - 1023px  (iPad)
Desktop Small:    1024px - 1279px (Laptop)
Desktop Medium:   1280px - 1919px (Standard)
Desktop Large:    1920px+          (HD/4K)
```

### Adaptive Rules

#### Orb Sizing
```
Mobile:      200px - 240px
Tablet:      280px - 320px
Desktop:     320px - 420px
```

#### Grid Columns (Quick Actions)
```
Mobile:      2 columns
Tablet:      3-4 columns
Desktop:     6 columns
```

#### Font Scaling
```
Mobile:      Base 14px
Tablet:      Base 15px
Desktop:     Base 15px (can go to 16px on large)
```

#### Spacing Adjustments
```
Mobile:      Use smaller spacing scale (75%)
Tablet:      Standard spacing (100%)
Desktop:     Can increase to 110% on very large screens
```

---

## 🎯 Platform-Specific Guidelines

### iOS Specific

#### Navigation
- Use native iOS navigation patterns
- Swipe back gesture support
- Tab bar at bottom (with safe area)
- Large titles in navigation

#### Components
- SF Symbols for icons
- SF Pro font family
- Haptic feedback (UIImpactFeedbackGenerator)
- Native switches and pickers where appropriate

#### Status Bar
- Light content style
- Translucent background
- Respect notch/Dynamic Island

#### Gestures
- Swipe from left edge: Back
- Pull down: Refresh (where applicable)
- Long press: Context menu (iOS 13+)

### Android Specific

#### Material Design Integration
- Ripple effects on all touchable elements
- Floating Action Button (FAB) for quick mic access
- Material icons
- Roboto font family

#### Navigation
- Bottom navigation bar or drawer
- Hardware back button support
- Adaptive icons (API 26+)

#### Components
- Material switches and sliders
- Snackbar for notifications
- Bottom sheets for options

#### Status Bar
- Immersive mode available
- Edge-to-edge content
- System navigation (gesture or buttons)

### Desktop (Electron/PWA) Specific

#### Window Chrome
- Custom title bar (optional)
- Native menu bar (macOS) or hamburger menu
- Minimize, maximize, close controls
- Drag to move from top bar

#### Keyboard Navigation
- Full keyboard accessibility
- Focus indicators
- Shortcuts for all major actions
- Tab order optimization

#### Mouse Interactions
- Hover states
- Context menus (right-click)
- Drag and drop
- Scroll behaviors

---

## 🔧 Implementation Guidelines

### For Designers

#### Figma File Structure
```
📁 Aarav AI - Design System
  📄 Cover Page & Guidelines
  📄 Design Tokens (Colors, Typography, Spacing)
  📄 Components Library
  📄 Icon Set
  
📁 Mobile Designs
  📄 iOS - Light/Dark Themes
  📄 Android - Light/Dark Themes
  📄 Mobile Components
  
📁 Desktop Designs
  📄 Desktop Layouts
  📄 Desktop Components
  
📁 Prototypes
  📄 Mobile Flow Prototype
  📄 Desktop Flow Prototype
  
📁 Resources
  📄 Animation Specs
  📄 Export Assets
```

#### Component Variants
- Create variants for all button states
- Build auto-layout components
- Use component properties for dynamic content
- Set up proper constraints for responsive behavior

#### Design Handoff
- Export assets at 1x, 2x, 3x for mobile
- Provide CSS/style snippets in Inspect
- Document all animation specs
- Include interaction notes
- Specify touch target sizes (min 44×44px mobile)

### For Developers

#### Technology Stack Recommendations
```
Web:
  - React or Vue.js
  - Three.js or WebGL for orb rendering
  - Framer Motion for animations
  - Tailwind CSS with custom theme

Mobile Native:
  iOS: SwiftUI + Core Animation
  Android: Jetpack Compose + Lottie

Desktop:
  - Electron (cross-platform)
  - Tauri (lightweight alternative)
```

#### Performance Targets
```
Orb rendering:      60 FPS minimum
Animation:          60 FPS
Initial load:       < 2s
Time to interactive: < 3s
Bundle size:        < 500KB (gzipped)
```

#### Accessibility Requirements
```
- WCAG 2.1 AA compliance
- Screen reader support
- Keyboard navigation
- Minimum touch targets: 44×44px
- Color contrast ratio: 4.5:1 (text), 3:1 (UI)
- Reduced motion support (prefers-reduced-motion)
- Focus visible indicators
```

---

## 🎨 Visual Examples & References

### Orb Visual States Mockup
```
[Idle]     [Listening]  [Processing]  [Speaking]    [Alert]
  🙂          🎧           🤔            💬           ⚡
Cyan glow   Pulsing     Shimmer      Ripples      Yellow hue
Gentle      Audio sync  Particles    Wave sync    Fast pulse
breath      waveform    swirl        output       attention
```

### Color Mood Mapping
```
Calm:       Cool cyan-blue       - Relaxed, ready
Happy:      Bright cyan          - Positive outcome
Focused:    Deep blue            - Working, analyzing
Alert:      Amber-yellow         - Needs attention
Error:      Red                  - Problem occurred
Success:    Green                - Task completed
```

### Interaction Flow Example

**Voice Command Flow:**
1. User taps/clicks orb
   - Orb scales up (1.05x)
   - Ripple animation
   - Haptic feedback (medium)
   
2. Listening begins
   - Voice waveform appears
   - Color pulses with audio
   - Status indicator turns blue
   
3. User speaks
   - Waveform animates with voice amplitude
   - Real-time transcription in chat
   
4. Processing
   - Orb shimmers
   - Emoji changes to 🤔
   - Thinking animation
   
5. Response
   - Orb pulses with TTS
   - Ripples emanate
   - Chat shows response text

---

## 📋 Design Checklist

### Pre-Development Handoff
- [ ] All screens designed for mobile, tablet, desktop
- [ ] Light and dark themes completed
- [ ] Component library with all variants
- [ ] Animation specifications documented
- [ ] Interaction states defined (hover, active, disabled, etc.)
- [ ] Error states and empty states designed
- [ ] Loading states and skeletons created
- [ ] Accessibility annotations added
- [ ] Responsive behavior documented
- [ ] Export-ready assets prepared
- [ ] Developer documentation written
- [ ] Prototype with key flows created
- [ ] Design tokens exported (JSON/CSS variables)

### Platform Coverage
- [ ] iOS mobile screens (all sizes)
- [ ] Android mobile screens (all sizes)
- [ ] iPad/Tablet layouts
- [ ] Desktop layouts (small, medium, large)
- [ ] Platform-specific components identified

### Orb Design Completeness
- [ ] All emotional states visualized
- [ ] Animation keyframes documented
- [ ] Particle system specified
- [ ] Lighting and reflections defined
- [ ] Color variations mapped
- [ ] Sound-reactive behavior defined

---

## 🚀 Future Enhancements

### Potential Additions
- **AR Mode**: Orb projected in real-world space (ARKit/ARCore)
- **3D Orb**: Full 3D rendering with rotation and depth
- **Custom Themes**: User-created color schemes
- **Orb Customization**: Different shapes, effects, personalities
- **Ambient Mode**: Screensaver-like state with passive info
- **Multi-Orb**: Multiple AI personalities, different colors
- **Gesture Drawing**: Draw commands around orb
- **Emotion Detection**: Camera-based emotion to orb mapping

---

## 📞 Design System Maintenance

### Version Control
- Use semantic versioning (v1.0.0)
- Document changes in CHANGELOG
- Maintain backward compatibility when possible
- Deprecation notices for removed components

### Update Process
1. Propose changes in design team review
2. Update Figma library
3. Notify developers of changes
4. Update documentation
5. Publish new version

### Contact & Resources
- Design System Owner: [To be assigned]
- Figma File Link: [Insert link]
- Developer Docs: [Insert link]
- Issue Tracker: GitHub Issues

---

**Document Version:** 1.0.0  
**Last Updated:** 2025-11-03  
**Status:** ✅ Ready for Implementation

---

*This specification represents a complete design system for Aarav AI. All measurements, colors, and specifications are production-ready and should be followed precisely for brand consistency and optimal user experience.*
