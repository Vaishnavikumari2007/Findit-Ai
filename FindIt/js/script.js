// --- Global Navigation & Footer Components --- //

const navbarHTML = `
<nav class="navbar">
  <div class="container nav-container">
    <a href="index.html" class="nav-logo">
      <i class="fa-solid fa-magnifying-glass" style="color: var(--secondary)"></i> FindIt
    </a>
    <div class="nav-links" id="nav-links">
      <a href="index.html">Home</a>
      <div class="dropdown">
        <button class="dropdown-btn">
          All Pages <i class="fa-solid fa-chevron-down" style="font-size: 0.7rem;"></i>
        </button>
        <div class="dropdown-content">
          <a href="index.html"><i class="fa-solid fa-house" style="width: 18px;"></i> Home Page</a>
          <a href="dashboard.html"><i class="fa-solid fa-gauge" style="width: 18px;"></i> Dashboard</a>
          <a href="report-lost.html"><i class="fa-solid fa-search" style="width: 18px;"></i> Report Lost</a>
          <a href="report-found.html"><i class="fa-solid fa-hand-holding-heart" style="width: 18px;"></i> Report Found</a>
          <a href="match.html"><i class="fa-solid fa-wand-magic-sparkles" style="width: 18px;"></i> AI Match Results</a>
          <a href="profile.html"><i class="fa-solid fa-user" style="width: 18px;"></i> Profile Settings</a>
          <a href="login.html"><i class="fa-solid fa-right-to-bracket" style="width: 18px;"></i> Login Page</a>
          <a href="signup.html"><i class="fa-solid fa-user-plus" style="width: 18px;"></i> Signup Page</a>
          <a href="about.html"><i class="fa-solid fa-circle-info" style="width: 18px;"></i> About Us</a>
          <a href="contact.html"><i class="fa-solid fa-envelope" style="width: 18px;"></i> Contact Us</a>
        </div>
      </div>
    </div>
    <div class="nav-actions">
      <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle Dark Mode" title="Toggle Dark Mode">
        <i class="fa-solid fa-moon"></i>
      </button>
      <a href="login.html" class="text-muted" style="font-weight: 500; font-size: 0.875rem;">Log in</a>
      <a href="signup.html" class="btn btn-primary">Sign up</a>
    </div>
    <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle Navigation Menu">
      <i class="fa-solid fa-bars"></i>
    </button>
  </div>
</nav>
`;

const footerHTML = `
<footer class="footer">
  <div class="container footer-grid">
    <div class="footer-col">
      <h3 style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.25rem;">
        <i class="fa-solid fa-magnifying-glass" style="color: var(--secondary)"></i> FindIt
      </h3>
      <p style="color: #94a3b8; font-size: 0.875rem; margin-top: 0.5rem;">AI-powered lost and found platform reuniting you with what matters.</p>
      <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
        <a href="#" class="social-icon" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="#" class="social-icon" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
        <a href="#" class="social-icon" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
    <div class="footer-col">
      <h3>Platform</h3>
      <ul>
        <li><a href="report-lost.html">Report Lost</a></li>
        <li><a href="report-found.html">Report Found</a></li>
        <li><a href="about.html">How it Works</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h3>Company</h3>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h3>Newsletter</h3>
      <p style="color: #94a3b8; font-size: 0.8125rem; margin-bottom: 0.75rem;">Subscribe to our newsletter for platform updates.</p>
      <form style="display: flex; gap: 0.5rem;" onsubmit="event.preventDefault(); showToast('Subscribed to newsletter!', 'success'); this.reset();">
        <input type="email" placeholder="Email" required style="padding: 0.5rem 0.75rem; border-radius: 0.5rem; border: none; font-size: 0.8125rem; width: 100%; background-color: #1e293b; color: white;" />
        <button type="submit" class="btn btn-primary" style="padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.8125rem;">Go</button>
      </form>
    </div>
  </div>
  <div class="container" style="border-top: 1px solid #334155; margin-top: 2rem; padding-top: 1rem; color: #94a3b8; font-size: 0.875rem;">
    &copy; ${new Date().getFullYear()} FindIt. All rights reserved.
  </div>
</footer>
`;

// ===================================================
// Inject layout on page load
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
  // --- Navbar ---
  const navContainer = document.getElementById('navbar-container');
  if (navContainer) {
    navContainer.innerHTML = navbarHTML;

    // Adjust navbar actions depending on auth state
    const currentUser = JSON.parse(localStorage.getItem('findit_currentUser'));
    if (currentUser) {
      const navActions = navContainer.querySelector('.nav-actions');
      if (navActions) {
        navActions.innerHTML = `
          <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle Dark Mode" title="Toggle Dark Mode">
            <i class="fa-solid fa-moon"></i>
          </button>
          <a href="dashboard.html" class="text-muted" style="font-weight: 500; font-size: 0.875rem; display: flex; align-items: center; gap: 0.25rem;"><i class="fa-solid fa-gauge"></i> Dashboard</a>
          <a href="profile.html" class="text-muted" style="font-weight: 500; font-size: 0.875rem; display: flex; align-items: center; gap: 0.25rem;"><i class="fa-solid fa-user"></i> Profile</a>
          <button onclick="handleLogout()" class="btn btn-secondary" style="padding: 0.4rem 1rem; font-size: 0.8125rem;"><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
        `;
      }
    }
  }

  // --- Footer ---
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) footerContainer.innerHTML = footerHTML;

  // --- Toast Container ---
  if (!document.getElementById('toast-container')) {
    const toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  // --- Back to Top Button ---
  const backBtn = document.createElement('button');
  backBtn.className = 'back-to-top';
  backBtn.id = 'back-to-top';
  backBtn.setAttribute('aria-label', 'Back to top');
  backBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(backBtn);

  // --- Initialize Dark Mode from localStorage ---
  initDarkMode();
});

// ===================================================
// Dark Mode Toggle
// ===================================================
function initDarkMode() {
  const saved = localStorage.getItem('findit_darkMode');
  if (saved === 'true') {
    document.body.classList.add('dark-mode');
  }
  updateThemeIcon();

  // Bind toggle button
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('findit_darkMode', isDark);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const icon = btn.querySelector('i');
  if (!icon) return;
  if (document.body.classList.contains('dark-mode')) {
    icon.className = 'fa-solid fa-sun';
    btn.title = 'Switch to Light Mode';
  } else {
    icon.className = 'fa-solid fa-moon';
    btn.title = 'Switch to Dark Mode';
  }
}

// ===================================================
// Back to Top — scroll visibility
// ===================================================
window.addEventListener('scroll', () => {
  const backBtn = document.getElementById('back-to-top');
  if (backBtn) {
    if (window.scrollY > 400) {
      backBtn.classList.add('show');
    } else {
      backBtn.classList.remove('show');
    }
  }
});

// ===================================================
// Global Logout
// ===================================================
window.handleLogout = () => {
  localStorage.removeItem('findit_currentUser');
  showToast('Logged out successfully', 'success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
};

// ===================================================
// Mobile Menu Toggle
// ===================================================
window.addEventListener('click', (e) => {
  const toggle = document.getElementById('mobile-menu-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    if (toggle.contains(e.target)) {
      links.classList.toggle('active');
      const icon = toggle.querySelector('i');
      if (links.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    } else if (!links.contains(e.target) && !toggle.contains(e.target)) {
      links.classList.remove('active');
      const icon = toggle.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-bars';
    }
  }
});

// ===================================================
// Toast Notification Helper
// Green success (#10b981) / Dark Red error (#991b1b)
// ===================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast ' + (type === 'success' ? 'toast-success' : 'toast-error');

  const icon = type === 'success'
    ? '<i class="fa-solid fa-circle-check" style="font-size: 1.25rem;"></i>'
    : '<i class="fa-solid fa-circle-exclamation" style="font-size: 1.25rem;"></i>';

  toast.innerHTML = `
    ${icon}
    <span style="font-weight: 600; font-size: 0.875rem;">${message}</span>
    <button onclick="this.parentElement.remove()" style="background:none;border:none;cursor:pointer;margin-left:auto;color:inherit;font-size:1rem;opacity:0.7;padding:0 0.25rem;">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  // Auto-dismiss after 4 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ===================================================
// Loading Spinner Helper
// Usage: showSpinner() → returns spinner element
//        hideSpinner(spinner) → removes it
// ===================================================
function showSpinner(parentElement) {
  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  overlay.innerHTML = `
    <div class="loading-spinner">
      <div class="spinner-ring"></div>
      <p style="margin-top: 1rem; font-weight: 600; font-size: 0.875rem; color: var(--text-muted);">Loading...</p>
    </div>
  `;
  if (parentElement) {
    parentElement.style.position = 'relative';
    parentElement.appendChild(overlay);
  } else {
    document.body.appendChild(overlay);
  }
  return overlay;
}

function hideSpinner(spinnerEl) {
  if (spinnerEl) {
    spinnerEl.style.opacity = '0';
    spinnerEl.style.transition = 'opacity 0.3s ease';
    setTimeout(() => spinnerEl.remove(), 300);
  }
}

// Full-page loading screen on first visit
function showPageLoader() {
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.id = 'page-loader';
  loader.innerHTML = `
    <div class="spinner-ring" style="width: 3rem; height: 3rem; border-width: 3px;"></div>
  `;
  document.body.appendChild(loader);

  // Hide after DOM is ready + a small delay for visual effect
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.4s ease';
    setTimeout(() => loader.remove(), 400);
  }, 600);
}

// Auto-show page loader
showPageLoader();
