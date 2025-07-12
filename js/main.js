const navLinksData = [
  { text: 'About', submenu: [
    { text: 'History', url: 'history.html' },
    { text: 'Leadership', url: 'leadership.html' },
    { text: 'Contact', url: 'contact.html' }
  ]},
  { text: 'Resources', submenu: [
    { text: 'Connection Card', url: 'connection-card.html' }
  ]},
  { text: 'Messages', url: 'messages.html' },
  { text: 'Ministries', submenu: [
    { text: 'All Ministries', url: 'ministries.html' },
    { text: 'Children\'s Ministry', url: 'kids.html' },
    { text: 'Student Ministry', url: 'students.html' },
    { text: 'Men\'s Ministry', url: 'mens-ministry.html' },
    { text: 'Women\'s Ministry', url: 'womens-ministry.html' },
    { text: 'Worship Ministry', url: 'worship.html' },
    { text: 'Care Ministry', url: 'care-ministry.html' },
    { text: 'Media & Technology', url: 'media-ministry.html' },
    { text: 'Missions & Outreach', url: 'missions-ministry.html' }
  ]},
  { text: 'Next Steps', submenu: [
    { text: 'Discover', url: 'discover.html' },
    { text: 'Baptism', url: 'baptism.html' }
  ]},
  { text: 'Give', url: 'give.html' },
  { text: 'Events', url: 'events.html' }
];

// Utility to render main menu or submenu
function renderMobileMenu(menu, submenu = null) {
  const navList = document.getElementById('mobile-nav-list');
  navList.innerHTML = '';
  if (submenu) {
    // Show back button
    const backLi = document.createElement('li');
    backLi.innerHTML = `<button class="mobile-nav-back"><span class="back-arrow">&#8592;</span>Back</button>`;
    backLi.querySelector('button').onclick = () => renderMobileMenu(navLinksData);
    navList.appendChild(backLi);
    submenu.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.url}">${item.text}</a>`;
      navList.appendChild(li);
    });
  } else {
    menu.forEach(link => {
      const li = document.createElement('li');
      if (link.submenu) {
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
      renderMobileMenu(navLinksData);
    };
    mobileNavClose.onclick = () => {
      mobileNav.classList.remove('active');
      mobileNav.setAttribute('aria-hidden', 'true');
    };
    // for accessibility, close menu on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') mobileNav.classList.remove('active');
    });
  }
});
