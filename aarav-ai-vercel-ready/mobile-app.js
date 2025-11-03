// Aarav AI - Mobile App JavaScript
// Handles navigation, interactions, and AI features

class AaravMobileApp {
  constructor() {
    this.currentScreen = 'splash';
    this.previousScreen = null;
    this.isInitialized = false;
    
    // App state
    this.tasks = [];
    this.chatMessages = [];
    this.userName = 'Akash';
    
    // Initialize app
    this.init();
  }
  
  init() {
    console.log('Initializing Aarav AI Mobile App...');
    
    // Show splash screen for 2 seconds
    setTimeout(() => {
      this.navigateTo('home');
      this.isInitialized = true;
    }, 2000);
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Update greeting based on time
    this.updateGreeting();
    
    // Initialize features
    this.initializeChat();
    this.initializeTasks();
  }
  
  setupEventListeners() {
    // Navigation buttons
    document.querySelectorAll('[data-navigate]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = btn.dataset.navigate;
        this.navigateTo(target);
      });
    });
    
    // Add task button
    const addTaskBtn = document.getElementById('addTaskBtn');
    if (addTaskBtn) {
      addTaskBtn.addEventListener('click', () => this.addTask());
    }
    
    // Chat send button
    const sendChatBtn = document.getElementById('sendChatBtn');
    if (sendChatBtn) {
      sendChatBtn.addEventListener('click', () => this.sendChatMessage());
    }
    
    // Chat input enter key
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
      chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.sendChatMessage();
        }
      });
    }
    
    // Task checkboxes
    document.querySelectorAll('.task-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        const taskItem = checkbox.closest('.task-item');
        if (checkbox.checked) {
          taskItem.classList.add('completed');
          this.showNotification('Task completed! 🎉', 'success');
        } else {
          taskItem.classList.remove('completed');
        }
      });
    });
    
    // Content generation
    const generateBtn = document.querySelector('.input-card .btn-primary');
    if (generateBtn) {
      generateBtn.addEventListener('click', () => this.generateContent());
    }
    
    // Filter chips
    document.querySelectorAll('.filter-chips .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chips .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });
    
    // Content type cards
    document.querySelectorAll('.content-type-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.content-type-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
    
    // Suggestion chips in chat
    document.querySelectorAll('.suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const text = chip.textContent;
        this.handleSuggestionClick(text);
      });
    });
    
    // Quick suggestions
    document.querySelectorAll('.quick-suggestion').forEach(suggestion => {
      suggestion.addEventListener('click', () => {
        const text = suggestion.textContent;
        this.handleQuickSuggestion(text);
      });
    });
  }
  
  navigateTo(screenName) {
    const currentScreenEl = document.querySelector('.screen.active');
    const targetScreenEl = document.getElementById(`${screenName}Screen`);
    
    if (!targetScreenEl) {
      console.error(`Screen not found: ${screenName}`);
      return;
    }
    
    // Don't navigate if already on this screen
    if (this.currentScreen === screenName) {
      return;
    }
    
    // Store previous screen
    this.previousScreen = this.currentScreen;
    
    // Remove active class from current screen
    if (currentScreenEl) {
      currentScreenEl.classList.remove('active');
      currentScreenEl.classList.add('slide-out-left');
      
      setTimeout(() => {
        currentScreenEl.classList.remove('slide-out-left');
      }, 300);
    }
    
    // Add active class to target screen
    targetScreenEl.classList.add('active');
    
    // Update current screen
    this.currentScreen = screenName;
    
    // Update bottom nav active state
    this.updateBottomNav(screenName);
    
    // Screen-specific actions
    this.onScreenEnter(screenName);
  }
  
  updateBottomNav(screenName) {
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
      const navTarget = item.dataset.navigate;
      if (navTarget === screenName) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  
  onScreenEnter(screenName) {
    switch(screenName) {
      case 'chat':
        this.scrollChatToBottom();
        break;
      case 'home':
        this.updateGreeting();
        break;
    }
  }
  
  updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = 'Good Morning';
    
    if (hour >= 12 && hour < 17) {
      greeting = 'Good Afternoon';
    } else if (hour >= 17) {
      greeting = 'Good Evening';
    }
    
    const greetingEl = document.getElementById('greetingText');
    if (greetingEl) {
      greetingEl.textContent = greeting;
    }
  }
  
  initializeChat() {
    this.chatMessages = [
      {
        sender: 'ai',
        text: "Hello! I'm Aarav AI. How can I assist you today? 👋",
        time: this.getCurrentTime()
      }
    ];
  }
  
  initializeTasks() {
    this.tasks = [
      {
        id: 1,
        title: 'Review project documentation',
        completed: false,
        priority: 'high',
        time: 'Today, 2:00 PM'
      },
      {
        id: 2,
        title: 'Prepare presentation slides',
        completed: false,
        priority: 'medium',
        time: 'Tomorrow, 10:00 AM'
      },
      {
        id: 3,
        title: 'Team meeting discussion points',
        completed: false,
        priority: 'low',
        time: 'Next week'
      }
    ];
  }
  
  sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Add user message
    this.addChatMessage('user', message);
    
    // Clear input
    chatInput.value = '';
    
    // Simulate AI thinking
    setTimeout(() => {
      const response = this.generateAIResponse(message);
      this.addChatMessage('ai', response);
    }, 500 + Math.random() * 1000);
  }
  
  addChatMessage(sender, text) {
    const messagesContainer = document.getElementById('chatMessages');
    if (!messagesContainer) return;
    
    const messageGroup = document.createElement('div');
    messageGroup.className = `message-group ${sender}`;
    
    const time = this.getCurrentTime();
    
    if (sender === 'ai') {
      messageGroup.innerHTML = `
        <div class="message-avatar">
          <span>A</span>
        </div>
        <div class="message-bubble">
          <p>${this.escapeHtml(text)}</p>
          <span class="message-time">${time}</span>
        </div>
      `;
    } else {
      messageGroup.innerHTML = `
        <div class="message-bubble">
          <p>${this.escapeHtml(text)}</p>
          <span class="message-time">${time}</span>
        </div>
      `;
    }
    
    messagesContainer.appendChild(messageGroup);
    this.scrollChatToBottom();
    
    // Add to messages array
    this.chatMessages.push({ sender, text, time });
  }
  
  generateAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple keyword-based responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return `Hello ${this.userName}! How can I help you today?`;
    }
    
    if (lowerMessage.includes('task')) {
      return `I can help you manage your tasks. You currently have ${this.tasks.filter(t => !t.completed).length} pending tasks. Would you like to view them?`;
    }
    
    if (lowerMessage.includes('plan') || lowerMessage.includes('schedule')) {
      return "I'd be happy to help you plan your schedule! Let me know what you need to organize, and I'll assist you.";
    }
    
    if (lowerMessage.includes('email') || lowerMessage.includes('write')) {
      return "I can help you compose emails and other content. Just tell me what you need, and I'll generate it for you!";
    }
    
    if (lowerMessage.includes('weather')) {
      return "I don't have real-time weather data yet, but I can help you with many other tasks! Try asking about tasks, scheduling, or content generation.";
    }
    
    if (lowerMessage.includes('thank')) {
      return "You're welcome! I'm always here to help. 😊";
    }
    
    // Default responses
    const responses = [
      "That's interesting! Tell me more about what you need.",
      "I understand. How can I assist you with that?",
      "I'm here to help! What would you like me to do?",
      "Let me help you with that. Can you provide more details?",
      "I'd be happy to assist! What specific help do you need?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  handleSuggestionClick(text) {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
      chatInput.value = text;
      chatInput.focus();
    }
  }
  
  handleQuickSuggestion(text) {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
      chatInput.value = text;
      this.sendChatMessage();
    }
  }
  
  scrollChatToBottom() {
    const messagesContainer = document.getElementById('chatMessages');
    if (messagesContainer) {
      setTimeout(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 100);
    }
  }
  
  addTask() {
    // Show notification for demo purposes
    this.showNotification('Task creation coming soon! Use AI suggestions to add tasks.', 'info');
    
    // In a production app, this would open a custom modal or navigate to task creation screen
    // For now, we demonstrate the feature without breaking the UI with native dialogs
  }
  
  generateContent() {
    const contentInput = document.querySelector('.content-input');
    const previewContent = document.querySelector('.preview-content p');
    
    if (!contentInput || !previewContent) return;
    
    const userInput = contentInput.value.trim();
    
    if (!userInput) {
      this.showNotification('Please describe what you need', 'info');
      return;
    }
    
    // Show loading state
    previewContent.textContent = 'Generating content... ✨';
    
    // Simulate AI content generation
    setTimeout(() => {
      const generatedContent = this.generateAIContent(userInput);
      previewContent.textContent = generatedContent;
      this.showNotification('Content generated successfully!', 'success');
    }, 1500);
  }
  
  generateAIContent(prompt) {
    // Simulate content generation based on type
    const activeType = document.querySelector('.content-type-card.active .content-type-label');
    const type = activeType ? activeType.textContent : 'Email';
    
    const templates = {
      'Email': `Subject: ${prompt.substring(0, 50)}

Dear Team,

I hope this email finds you well. I wanted to reach out regarding ${prompt}.

I would appreciate your thoughts and feedback on this matter. Please let me know if you have any questions or need additional information.

Looking forward to your response.

Best regards,
${this.userName}`,
      
      'Article': `# ${prompt}

In today's fast-paced world, it's essential to understand the importance of ${prompt}.

## Introduction

This topic has gained significant attention recently, and for good reason. Let me share some insights that might help you better understand this subject.

## Key Points

1. Understanding the fundamentals
2. Practical applications
3. Future implications

## Conclusion

As we move forward, it's clear that ${prompt} will continue to play a crucial role in our daily lives.`,
      
      'Ideas': `💡 Ideas related to: ${prompt}

1. Create a comprehensive plan focusing on key objectives
2. Develop a timeline with clear milestones
3. Identify resources and stakeholders
4. Set measurable goals and KPIs
5. Regular review and adjustment process

These ideas can help you get started. Feel free to expand on any of these points!`,
      
      'Social Post': `📱 ${prompt}

Excited to share this with you all! 🌟

What are your thoughts? Drop a comment below and let's discuss! 👇

#AI #Innovation #Technology #AaravAI`
    };
    
    return templates[type] || templates['Email'];
  }
  
  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#6366F1'};
      color: white;
      padding: 12px 24px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      z-index: 9999;
      animation: notificationSlideIn 0.3s ease-out;
      max-width: 90%;
      text-align: center;
      font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'notificationSlideOut 0.3s ease-out';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
  
  getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  }
  
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.aaravApp = new AaravMobileApp();
  });
} else {
  window.aaravApp = new AaravMobileApp();
}

// Service Worker registration for PWA support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('ServiceWorker registered:', registration);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed:', error);
      });
  });
}

// Add to home screen prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log('App can be installed');
  
  // Show install notification after a delay
  setTimeout(() => {
    if (window.aaravApp) {
      window.aaravApp.showNotification('Install Aarav AI on your device!', 'info');
    }
  }, 5000);
});

window.addEventListener('appinstalled', () => {
  console.log('App installed successfully');
  deferredPrompt = null;
});
