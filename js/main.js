// Load nav and setup hamburger menu
fetch('partials/nav.html')
  .then((res) => res.text())
  .then((html) => {
    document.getElementById('site-nav').innerHTML = html;
    // Hamburger menu logic: runs after nav is loaded!
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (toggle && navLinks) {
      toggle.addEventListener("click", function () {
        const expanded = navLinks.classList.toggle("active");
        toggle.setAttribute("aria-expanded", expanded);
      });
    }
  });

// Load footer
fetch('partials/footer.html')
  .then((res) => res.text())
  .then((html) => {
    document.getElementById('site-footer').innerHTML = html;
  });