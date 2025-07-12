<!--
============================================================================
BROAD STREET MISSIONARY BAPTIST CHURCH - WEBSITE PROJECT
============================================================================
-->

# ✝️ Broad Street Missionary Baptist Church Website

![Broad Street Missionary Baptist Church](assets/logo.png)

**A modern, responsive church website built with love and dedication to serve our congregation and community.**

---

## 🌟 Live Website

> **[Visit Our Website: cbreezy0.github.io/BroadStBaptist/](https://cbreezy0.github.io/BroadStBaptist/)**

---

## 📖 About This Project

This website serves as the digital home for Broad Street Missionary Baptist Church in Birmingham, Alabama. Built with modern web technologies and a focus on accessibility, it provides our church family and visitors with essential information, online worship opportunities, and easy ways to connect with our community.

### 🎯 Mission Statement
*"A Church Family Built On Love For God And For ALL Our Brothers And Sisters In Christ"*

---

## 🏗️ Project Structure

```
📂 BroadStBaptist/
├── 🏠 index.html              # Homepage with pastor's message
├── 📄 about.html              # Church history and mission
├── 👥 leadership.html         # Pastor and church leadership
├── 📞 contact.html            # Contact information and location
├── 💒 ministries.html         # Overview of all ministries
├── 👶 kids.html              # Children's ministry
├── 🎓 students.html          # Student/youth ministry
├── 👨 mens-ministry.html     # Men's ministry
├── 👩 womens-ministry.html   # Women's ministry
├── 🎵 worship.html           # Worship and music ministry
├── ❤️ care-ministry.html     # Care and support ministry
├── 📺 media-ministry.html    # Media and technology
├── 🌍 missions-ministry.html # Missions and outreach
├── 📝 connection-card.html   # Visitor connection form
├── 💰 give.html              # Online giving information
├── 📺 messages.html          # Sermons and online worship
├── 👣 next-steps.html        # Spiritual growth steps
├── 🔍 discover.html          # Church discovery process
├── 💧 baptism.html           # Baptism information
├── 📅 events.html            # Church events calendar
├── 📚 history.html           # Detailed church history
│
├── 📁 css/
│   └── 🎨 style.css          # Main stylesheet with comprehensive comments
│
├── 📁 js/
│   └── ⚡ main.js             # Navigation and interactions
│
├── 📁 partials/
│   ├── 🧭 nav.html           # Navigation component
│   └── 🦶 footer.html        # Footer component
│
├── 📁 assets/
│   └── 🖼️ logo.png           # Church logo
│
└── 📋 README.md              # This documentation file
```

---

## 🎨 Design & Features

### 🎨 Visual Design
- **Color Palette:**
  - Primary Purple: `#341639` (Brand color for headers, navigation)
  - Accent Yellow: `#ffc62f` (Call-to-action buttons, highlights)
  - Clean whites and grays for readability
- **Typography:** DM Sans - modern, readable font family
- **Visual Elements:** Soft shadows, rounded corners, clean spacing

### 📱 Responsive Design
- **Mobile-First Approach:** Optimized for all devices
- **Breakpoints:**
  - Mobile: up to 768px
  - Tablet: 769px to 1200px
  - Desktop: 1201px and up
- **Navigation:**
  - Desktop: Dropdown menus with hover effects
  - Mobile: Hamburger menu with full-screen overlay

### ♿ Accessibility Features
- **Keyboard Navigation:** Full keyboard support
- **Screen Reader Friendly:** Proper semantic HTML and ARIA labels
- **Focus Management:** Clear focus indicators
- **Color Contrast:** WCAG compliant color combinations

---

## 🧭 Website Navigation

### 📋 Main Menu Structure
- **🏠 Home** - Welcome message and service info
- **👥 About**
  - 📚 History - Church heritage and timeline
  - 👨‍💼 Leadership - Pastor and church staff
  - 📞 Contact - Location and contact details
- **💒 Ministries**
  - 👶 Children's Ministry
  - 🎓 Student Ministry
  - 👨 Men's Ministry
  - 👩 Women's Ministry
  - 🎵 Worship Ministry
  - ❤️ Care Ministry
  - 📺 Media & Technology
  - 🌍 Missions & Outreach
- **📝 Connection Card** - Visitor information form
- **📺 Messages** - Online worship and sermons
- **👣 Next Steps**
  - 🔍 Discover - Learn about our church
  - 💧 Baptism - Baptism information
- **💰 Give** - Online giving platform
- **📅 Events** - Church calendar and upcoming events

---

## 💻 Technical Information

### 🛠️ Built With
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Icons:** Font Awesome 6.4.0
- **Fonts:** Google Fonts (DM Sans)
- **Hosting:** GitHub Pages
- **Version Control:** Git

### 🚀 Performance Features
- **Optimized Loading:** Preloaded CSS and JavaScript
- **Responsive Images:** Optimized for all screen sizes
- **Clean Code:** Well-commented and organized
- **SEO Optimized:** Meta tags and semantic HTML

### 📁 Code Organization
- **Modular Structure:** Partials for navigation and footer
- **CSS Custom Properties:** Easy color scheme management
- **Commented Code:** Comprehensive documentation throughout
- **Responsive Design:** Mobile-first CSS approach

---

## 🔧 Customization Guide

### 📞 Updating Contact Information
1. **Navigation Bar:** Edit `partials/nav.html` - Quick contact section
2. **Footer:** Edit `partials/footer.html` - Contact details
3. **Contact Page:** Edit `contact.html` - Full contact information

### 🎨 Changing Colors
Update CSS custom properties in `css/style.css`:
```css
:root {
  --purple: #341639;    /* Change primary color */
  --yellow: #ffc62f;    /* Change accent color */
  --white: #ffffff;     /* Background color */
  --black: #000000;     /* Text color */
  --gray: #f5f5f5;      /* Section backgrounds */
}
```

### 🧭 Modifying Navigation
Edit the `navLinksData` array in `js/main.js`:
```javascript
const navLinksData = [
  { text: 'Home', url: 'index.html' },
  { text: 'About', submenu: [...] },
  // Add/remove navigation items here
];
```

### 🖼️ Updating Logo
Replace `assets/logo.png` with your church logo (recommended size: 300x100px)

---

## 📱 Mobile Optimization

### 📲 Mobile Features
- **Touch-Friendly Interface:** Large tap targets and easy navigation
- **Optimized Images:** Fast loading on mobile networks
- **Readable Text:** Appropriate font sizes for mobile screens
- **Streamlined Content:** Important information prioritized

### 🍔 Mobile Navigation
- **Hamburger Menu:** Clean, accessible mobile navigation
- **Full-Screen Overlay:** Easy-to-use mobile menu system
- **Smooth Animations:** Polished user experience
- **Back Button Support:** Easy navigation through submenus

---

## 🚀 Getting Started

### 👨‍💻 For Developers
1. **Clone the repository:**
   ```bash
   git clone https://github.com/CBreezy0/BroadStBaptist.git
   ```
2. **Open in browser:** Simply open `index.html` in your web browser
3. **Make changes:** Edit HTML, CSS, and JavaScript files as needed
4. **Test responsively:** Check on different screen sizes

### ✏️ For Content Editors
1. **Pastor's Message:** Edit `index.html` - Pastor greeting section
2. **Service Times:** Update service schedule in `index.html`
3. **Events:** Modify events section in `index.html` and `events.html`
4. **Ministry Information:** Update individual ministry pages
5. **Contact Info:** Update contact details in navigation and footer partials

---

## 📧 Contact & Support

### 🏢 Church Information
- **Address:** 121 Morris Ave, Birmingham, AL 35204
- **Phone:** (205) 251-1372
- **Email:** church@broadstreetbaptist.org

### 🛠️ Technical Support
- **Developer:** Chris
- **Repository:** [GitHub - BroadStBaptist](https://github.com/CBreezy0/BroadStBaptist)

### 📅 Service Times
- **Sunday School:** 9:30 AM
- **Sunday Worship:** 11:00 AM
- **Wednesday Bible Study:** 6:00 PM

---

## 📋 License & Usage

**For church use only.** This website is designed specifically for Broad Street Missionary Baptist Church. Please contact the church leadership before reusing or distributing any content.

---

## 🙏 Scripture

> *"Unless the Lord builds the house, the builders labor in vain."*  
> **— Psalm 127:1**

---

**Made with ❤️ and faith for the Broad Street Church Family**

*Last updated: July 2025*
