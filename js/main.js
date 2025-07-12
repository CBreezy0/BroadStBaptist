/*!
 * ============================================================================
 * BROAD STREET MISSIONARY BAPTIST CHURCH - MAIN JAVASCRIPT
 * ============================================================================
 * 
 * File: main.js
 * Purpose: Navigation functionality and page interactions
 * Author: Chris
 * Date: July 2025
 * 
 * OVERVIEW:
 * This file handles:
 * - Dynamic navigation rendering (desktop & mobile)
 * - Mobile overlay menu functionality
 * - Hamburger menu toggle
 * - Smooth page interactions
 * - Accessibility features
 * 
 * FEATURES:
 * - Responsive navigation with dropdowns
 * - Mobile overlay menu with animations
 * - Keyboard navigation support
 * - Smooth transitions and user feedback
 * - Body scroll locking when mobile menu is open
 * 
 * STRUCTURE:
 * 1. Navigation Data Structure
 * 2. Mobile Menu Rendering Functions
 * 3. Partial Loading Functions
 * 4. Event Handlers & Initialization
 * 
 * ============================================================================
 */

/* ============================================================================
   1. NAVIGATION DATA STRUCTURE
   ============================================================================ */

/**
 * Main navigation structure - modify this to add/remove navigation items
 * Each item can have:
 * - text: Display name
 * - url: Direct link (for simple items)
 * - submenu: Array of child items (for dropdown menus)
 */
const navLinksData = [
  { 
    text: 'About', 
    submenu: [
      { text: 'History', url: 'history.html' },
      { text: 'Leadership', url: 'leadership.html' },
      { text: 'Contact', url: 'contact.html' }
    ]
  },
  { text: 'Connection Card', url: 'connection-card.html' },
  { text: 'Messages', url: 'messages.html' },
  { 
    text: 'Ministries', 
    submenu: [
      { text: 'All Ministries', url: 'ministries.html' },
      { text: 'Children\'s Ministry', url: 'kids.html' },
      { text: 'Student Ministry', url: 'students.html' },
      { text: 'Men\'s Ministry', url: 'mens-ministry.html' },
      { text: 'Women\'s Ministry', url: 'womens-ministry.html' },
      { text: 'Worship Ministry', url: 'worship.html' },
      { text: 'Care Ministry', url: 'care-ministry.html' },
      { text: 'Media & Technology', url: 'media-ministry.html' },
      { text: 'Missions & Outreach', url: 'missions-ministry.html' }
    ]
  },
  { 
    text: 'Next Steps', 
    submenu: [
      { text: 'Discover', url: 'discover.html' },
      { text: 'Baptism', url: 'baptism.html' }
    ]
  },
  { text: 'Give', url: 'give.html' },
  { text: 'Events', url: 'events.html' }
];

/* ============================================================================
   2. MOBILE MENU RENDERING FUNCTIONS
   ============================================================================ */

/**
 * Renders the mobile navigation menu
 * @param {Array} menu - Array of navigation items
 * @param {Array} submenu - Optional submenu items for second level navigation
 */
function renderMobileMenu(menu, submenu = null) {
  const navList = document.getElementById('mobile-nav-list');
  navList.innerHTML = '';
  
  if (submenu) {
    // Show back button for submenu navigation
    const backLi = document.createElement('li');
    backLi.innerHTML = `<button class="mobile-nav-back"><span class="back-arrow">&#8592;</span>Back</button>`;
    backLi.querySelector('button').onclick = () => renderMobileMenu(navLinksData);
    navList.appendChild(backLi);
    
    // Render submenu items
    submenu.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.url}">${item.text}</a>`;
      navList.appendChild(li);
    });
  } else {
    // Render main menu items
    menu.forEach(link => {
      const li = document.createElement('li');
      if (link.submenu) {
        // Item with submenu - add arrow indicator
        li.innerHTML = `<a href="#" class="mobile-nav-submenu"><span>${link.text}</span> <span class="submenu-arrow">&#8250;</span></a>`;
        li.querySelector('a').onclick = (e) => {
          e.preventDefault();
          renderMobileMenu(menu, link.submenu);
        };
      } else {
        li.innerHTML = `<a href="${link.url}">${link.text}</a>`;
      }
      navList.appendChild(li);
    });
    // Example CTA button at bottom
    const ctaLi = document.createElement('li');
    ctaLi.innerHTML = `<a href="messages.html" class="btn-cta" style="background:#3376c6;color:#fff;font-size:1.2rem;padding:1rem 2rem;border-radius:10px;">Watch Online</a>`;
    navList.appendChild(ctaLi);
  }
}

// Function to load HTML partials
async function loadPartial(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (response.ok) {
      const html = await response.text();
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = html;
      }
    } else {
      console.error(`Failed to load ${filePath}: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  // Load navigation and footer partials
  await loadPartial('site-nav', 'partials/nav.html');
  await loadPartial('site-footer', 'partials/footer.html');

  // Initialize hamburger menu functionality after nav is loaded
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav-overlay");
  const mobileNavClose = document.getElementById("mobile-nav-close");

  if (menuToggle && mobileNav) {
    menuToggle.onclick = () => {
      mobileNav.classList.add('active');
      mobileNav.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Prevent body scroll
      renderMobileMenu(navLinksData);
    };
    mobileNavClose.onclick = () => {
      mobileNav.classList.remove('active');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // Restore body scroll
    };
    // for accessibility, close menu on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restore body scroll
      }
    });
    
    // Close menu when clicking outside
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav) {
        mobileNav.classList.remove('active');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restore body scroll
      }
    });
  }
});

// ========== SERVICE COUNTDOWN TIMER (Footer) ========== //
(function() {
  function getNextSundayAt(hour, minute) {
    const now = new Date();
    const result = new Date(now);
    result.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7)); // Next Sunday
    result.setHours(hour, minute, 0, 0);
    if (result < now) {
      result.setDate(result.getDate() + 7);
    }
    return result;
  }
  function updateCountdown() {
    const countdown = document.getElementById('service-countdown');
    if (!countdown) return;
    const nextService = getNextSundayAt(11, 0); // 11:00 AM
    const now = new Date();
    const diff = nextService - now;
    if (diff <= 0) {
      countdown.textContent = 'Service is happening now!';
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    let msg = 'Next Service: ';
    if (days > 0) msg += days + 'd ';
    msg += hours + 'h ' + minutes + 'm ' + seconds + 's';
    countdown.textContent = msg;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();
})();
