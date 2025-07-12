<!--
============================================================================
BROAD STREET MISSIONARY BAPTIST CHURCH - DEVELOPMENT NOTES
============================================================================

File: DEVELOPMENT-NOTES.md
Purpose: Technical documentation and customization guide
Author: Chris
Date: July 2025

============================================================================
-->

# 🛠️ Development Notes & Customization Guide

## ✅ Completed Enhancements

### 📝 Documentation & Comments
- ✅ **Comprehensive CSS Comments**: Added detailed section headers and explanations
- ✅ **JavaScript Documentation**: Complete function documentation and structure comments
- ✅ **HTML Comments**: Added structure comments and customization notes
- ✅ **README Update**: Complete project documentation with usage instructions
- ✅ **Navigation Partial Comments**: Detailed component documentation
- ✅ **Footer Partial Comments**: Clear customization instructions

### 🔧 Code Organization
- ✅ **File Headers**: Added descriptive headers to all major files
- ✅ **Section Organization**: Clear separation of code sections
- ✅ **Customization Instructions**: Inline comments showing where to make changes
- ✅ **Best Practices**: Clean, maintainable code structure

## 🎯 Areas for Easy Customization

### 📞 Contact Information
**Where to Update:**
- `partials/nav.html` - Quick contact bar (lines 25-45)
- `partials/footer.html` - Footer contact section (lines 50-65)
- `contact.html` - Full contact page

**What to Change:**
```html
<!-- Phone Number -->
<a href="tel:+12052511372">(205) 251-1372</a>

<!-- Email Address -->
<a href="mailto:church@broadstreetbaptist.org">church@broadstreetbaptist.org</a>

<!-- Address -->
<span>121 Morris Ave, Birmingham, AL</span>
```

### 🎨 Colors & Branding
**Where to Update:**
- `css/style.css` - CSS Custom Properties (lines 35-45)

**What to Change:**
```css
:root {
  --purple: #341639;    /* Primary brand color */
  --yellow: #ffc62f;    /* Accent/CTA color */
  --white: #ffffff;     /* Background color */
  --black: #000000;     /* Text color */
  --gray: #f5f5f5;      /* Section backgrounds */
}
```

### 🧭 Navigation Menu
**Where to Update:**
- `js/main.js` - navLinksData array (lines 40-75)

**What to Change:**
```javascript
const navLinksData = [
  { text: 'Home', url: 'index.html' },
  { 
    text: 'About', 
    submenu: [
      { text: 'History', url: 'history.html' },
      // Add/remove submenu items here
    ]
  },
  // Add/remove main navigation items here
];
```

### ⏰ Service Times
**Where to Update:**
- `index.html` - Service schedule section (lines 140-160)
- `partials/nav.html` - Quick contact bar (line 35)

**What to Change:**
```html
<!-- Service Schedule -->
<div class="service-item">
  <h4>Sunday Worship</h4>
  <p class="time">11:00 AM</p>
</div>
```

### 👨‍💼 Pastor Information
**Where to Update:**
- `index.html` - Pastor's greeting section (lines 90-120)
- `leadership.html` - Leadership page

**What to Change:**
- Pastor's name and title
- Welcome message content
- Signature and credentials

## 🚀 Recommended Additions

### 📸 Visual Enhancements
1. **Church Photos**: Add gallery of church activities and facilities
2. **Pastor Photo**: Professional headshot for about/leadership pages
3. **Ministry Photos**: Images for each ministry page
4. **Event Photos**: Visual content for events page

### 📱 Functionality Improvements
1. **Contact Form**: Add working contact form with backend
2. **Event Calendar**: Interactive calendar for church events
3. **Online Giving**: Integrate with payment processor
4. **Sermon Archive**: Audio/video sermon library

### 📊 Analytics & SEO
1. **Google Analytics**: Track website usage
2. **Search Console**: Monitor search performance
3. **Local SEO**: Optimize for Birmingham area searches
4. **Schema Markup**: Add structured data for better search results

### 🔒 Security & Performance
1. **SSL Certificate**: Ensure HTTPS for all pages
2. **Image Optimization**: Compress images for faster loading
3. **CDN Setup**: Content delivery network for global performance
4. **Backup System**: Regular website backups

## 📋 Content Updates Needed

### 📅 Regular Updates
- **Events Calendar**: Monthly event updates
- **Pastor's Message**: Quarterly message updates
- **Ministry Information**: Annual ministry description reviews
- **Service Times**: Verify times are current

### 🎯 One-Time Setup
- **Replace Placeholder Content**: Update all "TBD" and placeholder text
- **Add Real Events**: Replace sample events with actual church events
- **Ministry Leaders**: Add contact info for ministry leaders
- **Church History**: Complete the history page with actual church timeline

## 🛠️ Technical Maintenance

### 📱 Testing Checklist
- [ ] **Mobile Responsiveness**: Test on various devices
- [ ] **Cross-Browser Compatibility**: Test in Chrome, Firefox, Safari, Edge
- [ ] **Accessibility**: Screen reader testing and keyboard navigation
- [ ] **Performance**: Check page load speeds
- [ ] **Links**: Verify all internal and external links work

### 🔄 Update Schedule
- **Weekly**: Review and update events
- **Monthly**: Check for broken links and update content
- **Quarterly**: Review analytics and performance
- **Annually**: Major content review and refresh

## 📞 Support Contacts

### 🛠️ Technical Issues
- **Developer**: Chris
- **GitHub Repository**: [BroadStBaptist](https://github.com/CBreezy0/BroadStBaptist)

### ✏️ Content Updates
- **Church Leadership**: For content approval
- **Ministry Leaders**: For ministry-specific updates
- **Administrative Staff**: For contact and service information

---

**This documentation serves as a roadmap for maintaining and enhancing the church website. Keep this file updated as new features are added or processes change.**
