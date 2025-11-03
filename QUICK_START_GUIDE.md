# Aarav AI - Figma to Development Quick Start Guide

## 🚀 Getting Started

This guide helps designers and developers quickly understand and implement the Aarav AI design system.

---

## 📋 For Designers: Creating the Figma Files

### Step 1: Set Up Your Figma Workspace

1. **Create a new Figma project**
   - Name: "Aarav AI - Voice Assistant"
   - Create separate files for: Design System, Mobile iOS, Mobile Android, Desktop

2. **Set up design tokens first**
   - Create a "Design Tokens" page
   - Define all colors as styles
   - Create text styles for typography
   - Set up effect styles for shadows/glows

3. **Enable Figma plugins**
   - Install: Stark (accessibility), Iconify (icons), Auto Layout

### Step 2: Build the Design System File

**File: Aarav AI Design System**

```
Page 1: Cover & Documentation
- Add project overview
- Link to other files
- Design principles
- Usage guidelines

Page 2: Design Tokens
- Color palette swatches
- Typography samples
- Spacing scale
- Shadow/effect examples

Page 3: Components
- Create component set for buttons (variants)
- Create input field components
- Create card components
- Build the AI Orb master component

Page 4: Icons
- Import/create all icons
- Create icon component set
- Size variants: 16px, 24px, 32px, 40px
```

### Step 3: Create the AI Orb Component

**Master Component Structure:**

1. Create artboard: 320×320px
2. Build layers (bottom to top):
   ```
   - Background glow (blur effect)
   - Outer ring (with rotation)
   - Middle ring
   - Inner ring
   - Core sphere (with gradients)
   - Reflection overlay
   - Emoji/icon layer
   - Waveform bars (hidden by default)
   ```

3. Create variants for states:
   - `State=Idle`
   - `State=Listening`
   - `State=Processing`
   - `State=Speaking`
   - `State=Alert`
   - `State=Success`
   - `State=Error`

4. Add component properties:
   - Boolean: `ShowWaveform`
   - Text: `Icon` (emoji character)
   - Variant: `State`

5. Create size variants:
   - `Size=Desktop-Large` (420px)
   - `Size=Desktop` (320px)
   - `Size=Mobile` (240px)

### Step 4: Design Mobile Screens

**For each platform (iOS & Android):**

**Essential Screens (Priority 1):**
1. Home screen with AI Orb
   - Status bar
   - Top bar with branding
   - Status indicators
   - Central AI Orb
   - Quick action buttons (6)
   - Bottom navigation

2. Chat interface
   - Top bar with back button
   - Message list (user & assistant bubbles)
   - Input field with send button

3. Voice settings
   - Microphone selection
   - Language selection
   - Sensitivity slider
   - Test controls

4. Settings screen
   - Settings list
   - Toggle switches
   - Navigation arrows

5. Onboarding flow (3-4 screens)
   - Welcome screen
   - Permission requests
   - Quick tutorial
   - Get started

**Create frames:**
- iOS: 393×852 pt (iPhone 14 Pro)
- Android: 360×800 dp

### Step 5: Design Desktop Layouts

**Desktop File:**

1. **Main dashboard** (1440×900px)
   - Top bar (64px)
   - Status strip
   - Central AI Orb (360px)
   - Quick actions grid (6 columns)
   - System info panel

2. **Settings page**
   - Side navigation
   - Content area
   - Apply button

3. **Analytics dashboard**
   - Data visualizations
   - Graphs and charts

4. **Chat panel** (slide-in)
   - 400px wide
   - Full height minus top bar

### Step 6: Create Interactive Prototypes

**Mobile Prototype:**
1. Connect screens with interactions
2. Add transitions (smart animate)
3. Set up tap/swipe gestures
4. Add scroll behavior

**Interaction Examples:**
```
Tap Orb → Listening state
Tap Chat icon → Chat screen (slide in)
Swipe back → Previous screen (slide out)
Tap Quick Action → Detail screen
```

**Desktop Prototype:**
1. Set up click interactions
2. Add hover states
3. Modal overlays
4. Keyboard navigation flow

### Step 7: Document Animations

**Create animation frames:**

For each animation:
1. Create start frame
2. Create 3-5 mid frames
3. Create end frame
4. Add timing notes
5. Specify easing function

**Example: Orb Idle Breathing**
```
Frame 1: Scale 100% (0s)
Frame 2: Scale 105% (1.5s, ease-in-out)
Frame 3: Scale 100% (3s, ease-in-out)
Loop: Infinite
```

### Step 8: Prepare for Handoff

**Before sharing with developers:**

- [ ] All screens designed and reviewed
- [ ] Components properly named
- [ ] Auto-layout applied where needed
- [ ] Constraints set for responsive behavior
- [ ] Text styles and color styles published
- [ ] Prototype connections working
- [ ] Animation specs documented
- [ ] Assets exported (icons, images)
- [ ] Developer mode enabled
- [ ] Comments added for complex interactions

**Export assets:**
```
Icons: SVG, 1x 2x 3x PNG
Images: PNG with alpha
Orb layers: Individual PNGs if needed
```

---

## 💻 For Developers: Implementation Guide

### Step 1: Review Design Files

1. **Access Figma files**
   - Get view/edit access
   - Enable developer mode (Cmd/Ctrl + Shift + D)
   - Review all pages

2. **Install Figma desktop app** (recommended)
   - Better performance
   - Offline access
   - Code export

3. **Review documentation**
   - Read FIGMA_DESIGN_SPEC.md
   - Study AI_ORB_COMPONENT_SPEC.md
   - Check FIGMA_PROJECT_STRUCTURE.md

### Step 2: Set Up Development Environment

**For Web (React example):**

```bash
# Create project
npx create-react-app aarav-ai
cd aarav-ai

# Install dependencies
npm install framer-motion
npm install three @react-three/fiber  # For 3D orb
npm install tailwindcss
npm install @headlessui/react  # For modals, dialogs

# Set up Tailwind
npx tailwindcss init
```

**For iOS (SwiftUI):**

```bash
# Create Xcode project
# Select SwiftUI interface
# Add Core Animation framework
```

**For Android (Jetpack Compose):**

```kotlin
// Add dependencies in build.gradle
implementation "androidx.compose.animation:animation:1.5.0"
implementation "com.airbnb.android:lottie-compose:6.0.0"
```

### Step 3: Extract Design Tokens

**Export from Figma:**

Option 1: Manual extraction
- Select color → Copy as CSS
- Select text → Copy properties
- Document in variables file

Option 2: Figma Plugin
- Use "Design Tokens" plugin
- Export as JSON
- Import into project

**Create tokens file:**

```javascript
// tokens.js or theme.js
export const colors = {
  primary: '#00D4FF',
  background: '#0B1220',
  cosmicBlue: '#1E293B',
  text: '#CFE8FF',
  textMuted: '#8AA3C2',
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#60A5FA',
};

export const typography = {
  heroTitle: {
    fontSize: '64px',
    fontWeight: 400,
    letterSpacing: '-0.02em',
  },
  h1: {
    fontSize: '48px',
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  body: {
    fontSize: '15px',
    fontWeight: 400,
    letterSpacing: '0',
  },
};

export const spacing = {
  xxs: '4px',
  xs: '8px',
  s: '12px',
  m: '16px',
  l: '24px',
  xl: '32px',
  xxl: '48px',
};

export const shadows = {
  sm: '0 2px 8px rgba(0, 0, 0, 0.12)',
  md: '0 4px 16px rgba(0, 0, 0, 0.24)',
  lg: '0 8px 30px rgba(0, 0, 0, 0.5)',
  glowPrimary: '0 0 20px rgba(0, 212, 255, 0.6)',
};
```

**Or use CSS variables:**

```css
/* styles/variables.css */
:root {
  /* Colors */
  --color-primary: #00D4FF;
  --color-bg: #0B1220;
  --color-text: #CFE8FF;
  
  /* Spacing */
  --space-xs: 8px;
  --space-s: 12px;
  --space-m: 16px;
  --space-l: 24px;
  
  /* Typography */
  --font-size-body: 15px;
  --font-size-h1: 48px;
  
  /* Shadows */
  --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.5);
  --glow-primary: 0 0 20px rgba(0, 212, 255, 0.6);
}
```

### Step 4: Implement Components

**Start with basic components:**

1. **Button component**
   - Match exact styles from Figma
   - Implement all variants (primary, secondary, icon)
   - Add all states (hover, active, disabled)

2. **Input component**
   - Match styling
   - Focus states
   - Error states

3. **Card component**
   - Glass-morphism effect
   - Proper shadows

**React example:**

```jsx
// components/Button.jsx
import React from 'react';
import './Button.css';

export const Button = ({ 
  variant = 'primary', 
  size = 'medium',
  children,
  ...props 
}) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

```css
/* Button.css */
.btn {
  height: 40px;
  padding: 0 24px;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #00D4FF, #0EA5E9);
  color: white;
}

.btn-primary:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
}

.btn-primary:active {
  transform: scale(0.97);
}
```

### Step 5: Implement the AI Orb

**This is the most complex component. Follow AI_ORB_COMPONENT_SPEC.md exactly.**

**React with Framer Motion example:**

```jsx
// components/AIOrb.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AIOrb.css';

export const AIOrb = ({ state = 'idle', onTap }) => {
  const [icon, setIcon] = useState('🙂');
  
  const icons = {
    idle: '🙂',
    listening: '🎧',
    processing: '🤔',
    speaking: '💬',
    alert: '⚡',
  };
  
  React.useEffect(() => {
    setIcon(icons[state] || '🙂');
  }, [state]);
  
  return (
    <div className="orb-container">
      <motion.button
        className={`orb state-${state}`}
        onClick={onTap}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {/* Glow */}
        <motion.div 
          className="orb-layer glow"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Rings */}
        <motion.div 
          className="orb-layer ring-outer"
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        <motion.div 
          className="orb-layer ring-middle"
          animate={{ rotate: -360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        <motion.div 
          className="orb-layer ring-inner"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Core */}
        <motion.div 
          className="orb-layer core"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="reflection" />
          <motion.span 
            className="orb-icon"
            key={icon}
            initial={{ scale: 0, rotateY: 90 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 0.4,
              ease: [0.68, -0.55, 0.265, 1.55],
            }}
          >
            {icon}
          </motion.span>
        </motion.div>
        
        {/* Waveform */}
        {state === 'listening' && (
          <div className="waveform">
            {[...Array(8)].map((_, i) => (
              <motion.i
                key={i}
                animate={{
                  scaleY: [0.4, 1.6, 0.4],
                }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}
      </motion.button>
    </div>
  );
};
```

### Step 6: Implement Screens/Views

**Mobile screens (React Native example):**

```jsx
// screens/HomeScreen.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AIOrb } from '../components/AIOrb';
import { TopBar } from '../components/TopBar';
import { StatusStrip } from '../components/StatusStrip';
import { QuickActions } from '../components/QuickActions';

export const HomeScreen = () => {
  const [orbState, setOrbState] = useState('idle');
  
  const handleOrbTap = () => {
    setOrbState('listening');
    // Start voice recognition
  };
  
  return (
    <View style={styles.container}>
      <TopBar />
      <StatusStrip />
      <View style={styles.orbSection}>
        <AIOrb state={orbState} onTap={handleOrbTap} />
      </View>
      <QuickActions />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220',
  },
  orbSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

### Step 7: Implement Animations

**Match timing and easing from Figma spec:**

```javascript
// animations/config.js
export const animations = {
  durations: {
    micro: 150,
    quick: 250,
    standard: 300,
    deliberate: 450,
    slow: 600,
  },
  
  easings: {
    easeOut: [0.0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    ease: [0.4, 0, 0.2, 1],
    elastic: [0.68, -0.55, 0.265, 1.55],
  },
};

// Usage with Framer Motion
<motion.div
  animate={{ scale: 1.05 }}
  transition={{
    duration: animations.durations.standard / 1000,
    ease: animations.easings.easeOut,
  }}
/>
```

### Step 8: Handle Responsive Behavior

**Implement breakpoints:**

```javascript
// utils/breakpoints.js
export const breakpoints = {
  mobileSmall: 320,
  mobileMedium: 375,
  mobileLarge: 428,
  tablet: 768,
  desktop: 1024,
  desktopLarge: 1920,
};

// React hook
import { useState, useEffect } from 'react';

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('desktop');
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setBreakpoint('mobile');
      else if (width < 1024) setBreakpoint('tablet');
      else setBreakpoint('desktop');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return breakpoint;
};

// Usage
const breakpoint = useBreakpoint();
const orbSize = breakpoint === 'mobile' ? 240 : 320;
```

### Step 9: Accessibility Implementation

**Follow WCAG 2.1 AA guidelines:**

```jsx
// Accessible Orb component
<button
  className="orb"
  onClick={handleClick}
  aria-label="AI Assistant Orb"
  aria-pressed={isListening}
  aria-describedby="orb-status"
  tabIndex={0}
>
  {/* Orb content */}
</button>

<div 
  id="orb-status" 
  className="sr-only"
  role="status"
  aria-live="polite"
>
  {statusMessage}
</div>
```

**Keyboard navigation:**

```javascript
useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      toggleListening();
    }
    if (e.key === 'Escape') {
      closeModals();
    }
  };
  
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);
```

### Step 10: Testing & Refinement

**Visual regression testing:**

```javascript
// Using Storybook + Chromatic
import { AIOrb } from './AIOrb';

export default {
  title: 'Components/AIOrb',
  component: AIOrb,
};

export const Idle = () => <AIOrb state="idle" />;
export const Listening = () => <AIOrb state="listening" />;
export const Processing = () => <AIOrb state="processing" />;
```

**Compare with Figma:**
1. Take screenshots of implemented components
2. Overlay on Figma designs
3. Check pixel alignment
4. Verify colors match exactly
5. Test animations against spec

---

## 🎯 Common Pitfalls & Solutions

### Issue: Colors Don't Match

**Solution:**
- Use exact hex values from Figma
- Check color profile (sRGB)
- Verify opacity values
- Test on different displays

### Issue: Animations Feel Off

**Solution:**
- Match exact durations from spec
- Use correct easing functions
- Test on 60Hz and 120Hz displays
- Add reduced motion support

### Issue: Orb Looks Flat

**Solution:**
- Ensure all gradient stops are correct
- Add proper shadows (inner and outer)
- Implement reflection overlay
- Check blur amounts

### Issue: Poor Performance

**Solution:**
- Use CSS transforms instead of position changes
- Implement will-change for animated elements
- Limit particle count on low-end devices
- Use requestAnimationFrame for custom animations

### Issue: Accessibility Violations

**Solution:**
- Add ARIA labels
- Ensure keyboard navigation
- Test with screen readers
- Add focus indicators
- Support reduced motion

---

## 📚 Resources

### Design Tools
- [Figma](https://figma.com)
- [Stark Plugin](https://www.getstark.co/) - Accessibility
- [Iconify](https://iconify.design/) - Icon library

### Development Tools
- [Framer Motion](https://www.framer.com/motion/) - React animations
- [Three.js](https://threejs.org/) - 3D graphics
- [Lottie](https://airbnb.design/lottie/) - Animations
- [Tailwind CSS](https://tailwindcss.com/) - Utility CSS

### Testing Tools
- [Storybook](https://storybook.js.org/) - Component development
- [Chromatic](https://www.chromatic.com/) - Visual testing
- [axe DevTools](https://www.deque.com/axe/devtools/) - Accessibility

### Learning Resources
- [Framer Motion Tutorial](https://www.framer.com/motion/introduction/)
- [CSS Tricks - Glassmorphism](https://css-tricks.com/glassmorphism/)
- [Web.dev - Animations](https://web.dev/animations/)

---

## ✅ Implementation Checklist

### Design Phase
- [ ] Design system file created
- [ ] All tokens defined
- [ ] Components built with variants
- [ ] AI Orb master component complete
- [ ] Mobile screens designed (iOS & Android)
- [ ] Desktop screens designed
- [ ] Prototypes created
- [ ] Animations documented
- [ ] Assets exported
- [ ] Developer handoff complete

### Development Phase
- [ ] Project set up
- [ ] Design tokens imported
- [ ] Basic components implemented
- [ ] AI Orb component implemented
- [ ] All screens/views built
- [ ] Animations implemented
- [ ] Responsive behavior working
- [ ] Accessibility features added
- [ ] Tested across browsers/devices
- [ ] Performance optimized
- [ ] Visual regression tests passing
- [ ] Documentation updated

---

## 🤝 Collaboration Tips

### For Designers
- **Use consistent naming** - Makes handoff easier
- **Document decisions** - Add comments in Figma
- **Update prototypes** - Keep them in sync with designs
- **Export assets early** - Don't wait until the end
- **Be available** - Answer dev questions quickly

### For Developers
- **Ask questions** - Don't assume
- **Share progress** - Screenshots help alignment
- **Report issues** - File Figma comments for problems
- **Respect the design** - Follow specs closely
- **Provide feedback** - Suggest improvements

### For Everyone
- **Regular syncs** - Weekly design/dev meetings
- **Use Figma comments** - Centralize discussions
- **Document changes** - Keep changelog updated
- **Celebrate wins** - Acknowledge good work

---

**With this guide, you should be able to create comprehensive Figma designs and implement them pixel-perfectly. Good luck building Aarav AI!** ✨
