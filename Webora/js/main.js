/**
 * WEBORA — Website Design & Development Agency
 * Main Interactive Frontend Script
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Concept Projects Data Repository ---
  const CONCEPTS = {
    northstar: {
      id: 'northstar',
      title: 'Northstar Studio',
      category: 'Brand & Spatial Design Practice',
      url: 'https://northstar-studio.concept',
      headline: 'Spaces & identities designed to outlast the season.',
      description: 'A fictional creative studio website developed to demonstrate high-craft editorial art direction, minimalist typography, and asymmetric portfolio indexing for architecture and brand practices.',
      typography: [
        { role: 'Headings', font: 'Newsreader / Editorial Serif' },
        { role: 'Body & Meta', font: 'Plus Jakarta Sans / Clean Sans' },
        { role: 'Indexing', font: 'JetBrains Mono / Monospace' }
      ],
      palette: [
        { name: 'Warm Ivory', hex: '#F5F3EF' },
        { name: 'Pure White', hex: '#FFFFFF' },
        { name: 'Graphite', hex: '#1A1A1A' },
        { name: 'Terracotta', hex: '#B4533C' },
        { name: 'Stone Grey', hex: '#6E6C68' }
      ],
      deliverables: ['Custom Art Direction', 'Responsive Portfolio Grid', 'Project Detail Templates', 'Fast Static Build'],
      template: `
        <div class="concept-northstar">
          <header class="ns-nav">
            <div class="ns-logo">NORTHSTAR STUDIO</div>
            <nav class="ns-nav-links">
              <span>Work</span>
              <span>Practice</span>
              <span>Monographs</span>
              <span>Contact</span>
            </nav>
          </header>
          <div class="ns-hero">
            <span class="ns-tag">CONCEPT ARCHITECTURE & IDENTITY · EST. 2024</span>
            <h1 class="ns-headline">Designing spaces and identities that <em>endure</em>.</h1>
            <p class="ns-subhead">A multidisciplinary practice balancing quiet material honesty with meticulous structural precision.</p>
          </div>
          <div class="ns-grid">
            <div class="ns-case-card">
              <div class="ns-case-visual"></div>
              <div class="ns-case-title">01. Villa Arcos</div>
              <div class="ns-case-meta">Residential Architecture · Lisbon, PT</div>
            </div>
            <div class="ns-case-card">
              <div class="ns-case-visual"></div>
              <div class="ns-case-title">02. Atelier Marée</div>
              <div class="ns-case-meta">Exhibition Pavilion · Berlin, DE</div>
            </div>
          </div>
          <table class="ns-index-table">
            <thead>
              <tr>
                <th style="text-align: left; padding: 0.4rem 0.25rem; font-size: 0.7rem; color: #6E6C68; text-transform: uppercase;">Selected Work</th>
                <th style="text-align: left; padding: 0.4rem 0.25rem; font-size: 0.7rem; color: #6E6C68; text-transform: uppercase;">Typology</th>
                <th style="text-align: right; padding: 0.4rem 0.25rem; font-size: 0.7rem; color: #6E6C68; text-transform: uppercase;">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Komorebi Tea House</td>
                <td>Public Installation</td>
                <td>2025</td>
              </tr>
              <tr>
                <td>Loom & Weft Identity</td>
                <td>Brand System</td>
                <td>2024</td>
              </tr>
              <tr>
                <td>Brutalist Coast Residence</td>
                <td>Private Commission</td>
                <td>2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    commonground: {
      id: 'commonground',
      title: 'Common Ground Café',
      category: 'Neighbourhood Café & Micro-Roastery',
      url: 'https://commonground-cafe.concept',
      headline: 'Specialty coffee, slow-ferment sourdough, and community warmth.',
      description: 'A fictional neighbourhood café site showcasing warm earthy color harmony, structured menu listings, clear operating hours, and approachable community-driven hospitality design.',
      typography: [
        { role: 'Display & Branding', font: 'Newsreader / Editorial Serif' },
        { role: 'Body & Narrative', font: 'Plus Jakarta Sans / Humanist Sans' },
        { role: 'Pricing & Timings', font: 'JetBrains Mono' }
      ],
      palette: [
        { name: 'Oat Cream', hex: '#FAF6F0' },
        { name: 'Roasted Espresso', hex: '#241C16' },
        { name: 'Sage Olive', hex: '#4D5C4A' },
        { name: 'Warm Terracotta', hex: '#D98358' },
        { name: 'Parchment', hex: '#E8E0D5' }
      ],
      deliverables: ['Weekly Single-Origin Menu', 'Location & Hours Banner', 'Table Reservation Flow', 'Mobile Quick-Glance UI'],
      template: `
        <div class="concept-commonground">
          <div class="cg-top-bar">
            <span>ROASTED LOCALLY IN SMALL BATCHES</span>
            <span>42 MARKET LANE, OLD QUARTER</span>
          </div>
          <header class="cg-header">
            <div class="cg-brand">Common Ground</div>
            <div class="cg-hours-pill">Open Today 7:30 AM – 5:00 PM</div>
          </header>
          <div class="cg-hero-banner">
            <span class="cg-hero-badge">This Week's Feature Roast</span>
            <div class="cg-hero-title">Ethiopia Yirgacheffe Washed G1</div>
            <div class="cg-hero-desc">Notes of jasmine, bergamot, and sweet wildflower honey. Roasted fresh every Tuesday morning.</div>
          </div>
          <div class="cg-menu-section">
            <div class="cg-menu-heading">
              <span>Morning Provisions</span>
              <span class="cg-menu-sub">Served until 11:30 AM daily</span>
            </div>
            <div class="cg-menu-list">
              <div class="cg-menu-item">
                <div>
                  <div class="cg-item-name">Cardamom Knot Bun</div>
                  <span class="cg-item-notes">Slow-proved wild yeast sourdough, organic crushed cardamom</span>
                </div>
                <div class="cg-item-price">₹180</div>
              </div>
              <div class="cg-menu-item">
                <div>
                  <div class="cg-item-name">Whipped Ricotta & Fig Sourdough</div>
                  <span class="cg-item-notes">House-churned ricotta, seasonal poached figs, thyme honey</span>
                </div>
                <div class="cg-item-price">₹320</div>
              </div>
              <div class="cg-menu-item">
                <div>
                  <div class="cg-item-name">Filter Pourover (Kalita Wave)</div>
                  <span class="cg-item-notes">Choice of current single-origin batch, served black</span>
                </div>
                <div class="cg-item-price">₹240</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    fieldnote: {
      id: 'fieldnote',
      title: 'Fieldnote Goods',
      category: 'Sustainable Lifestyle & Stationery Storefront',
      url: 'https://fieldnote-goods.concept',
      headline: 'Tools for considered living, crafted from honest materials.',
      description: 'A fictional e-commerce catalog demo demonstrating clean product hierarchy, transparent material disclosure tags, price formatting, and micro-storefront user flows.',
      typography: [
        { role: 'Wordmark & Headers', font: 'Newsreader / Refined Serif' },
        { role: 'Catalog & UI', font: 'Plus Jakarta Sans / Geometric' },
        { role: 'Specifications', font: 'JetBrains Mono' }
      ],
      palette: [
        { name: 'Raw Kraft Linen', hex: '#F2EFEB' },
        { name: 'Forest Evergreen', hex: '#21392E' },
        { name: 'Sand Dune', hex: '#DFD7CB' },
        { name: 'Clay Accent', hex: '#C0704D' },
        { name: 'Crisp White', hex: '#FFFFFF' }
      ],
      deliverables: ['E-Commerce Product Grid', 'Stock & Material Badging', 'Mini Bag Quick-Drawer', 'Fast Responsive Checkout Flow'],
      template: `
        <div class="concept-fieldnote">
          <div class="fn-banner">COMPLIMENTARY DOMESTIC DISPATCH ON ORDERS OVER ₹1,500 · PLASTIC-FREE PACKAGING</div>
          <header class="fn-header">
            <div class="fn-brand">FIELDNOTE GOODS</div>
            <div class="fn-cart-pill">
              <span>Bag</span>
              <span class="fn-cart-count">2</span>
            </div>
          </header>
          <div class="fn-curation-text">
            <h4>Everyday objects, responsibly made.</h4>
            <p>Thoughtful stationery and desk goods designed for tactile longevity and zero plastic waste.</p>
          </div>
          <div class="fn-products-grid">
            <div class="fn-card">
              <div class="fn-img-placeholder">
                <span class="fn-eco-tag">100% Recycled</span>
              </div>
              <div class="fn-card-title">No. 4 Smyth-Sewn Journal</div>
              <div class="fn-card-material">120gsm unbleached hemp paper</div>
              <div class="fn-card-bottom">
                <span class="fn-price">₹650</span>
                <span class="fn-add-btn">+ Add</span>
              </div>
            </div>
            <div class="fn-card">
              <div class="fn-img-placeholder">
                <span class="fn-eco-tag">Solid Brass</span>
              </div>
              <div class="fn-card-title">Architectural Metric Ruler</div>
              <div class="fn-card-material">Untreated brushed brass, laser etched</div>
              <div class="fn-card-bottom">
                <span class="fn-price">₹1,150</span>
                <span class="fn-add-btn">+ Add</span>
              </div>
            </div>
          </div>
        </div>
      `
    }
  };

  // --- 1. Sticky Header & Active Nav Spy ---
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Scroll spy
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  // --- 2. Mobile Navigation Drawer ---
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileNav) {
    const toggleMenu = (open) => {
      const shouldOpen = open !== undefined ? open : !mobileNav.classList.contains('is-open');
      mobileNav.classList.toggle('is-open', shouldOpen);
      mobileToggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
      document.body.style.overflow = shouldOpen ? 'hidden' : '';
    };

    mobileToggle.addEventListener('click', () => toggleMenu());

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });
  }

  // --- 3. Hero Browser Preview Switcher Tabs ---
  const heroTabs = document.querySelectorAll('.hero-tab-btn');
  const heroAddressUrl = document.getElementById('hero-address-url');
  const heroViewport = document.getElementById('hero-viewport');

  const renderHeroConcept = (conceptKey) => {
    const concept = CONCEPTS[conceptKey];
    if (!concept || !heroViewport || !heroAddressUrl) return;

    heroTabs.forEach(tab => {
      tab.classList.toggle('is-active', tab.dataset.concept === conceptKey);
      tab.setAttribute('aria-selected', tab.dataset.concept === conceptKey ? 'true' : 'false');
    });

    heroAddressUrl.textContent = concept.url;
    heroViewport.innerHTML = concept.template;
  };

  heroTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const conceptKey = tab.dataset.concept;
      renderHeroConcept(conceptKey);
    });
  });

  // Initial render of hero tab
  renderHeroConcept('northstar');

  // --- 4. Interactive Concept Detail Modal Dialog ---
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalAddressUrl = document.getElementById('modal-address-url');
  const modalViewport = document.getElementById('modal-viewport');
  const modalStageWrapper = document.getElementById('modal-stage-wrapper');
  const modalRationale = document.getElementById('modal-rationale');
  const modalTypePills = document.getElementById('modal-type-pills');
  const modalPalette = document.getElementById('modal-palette');
  const modalDeliverables = document.getElementById('modal-deliverables');
  const viewportBtns = document.querySelectorAll('.viewport-btn');
  const modalOpenBtns = document.querySelectorAll('[data-open-modal]');

  let lastActiveElement = null;

  const openConceptModal = (conceptKey) => {
    const concept = CONCEPTS[conceptKey];
    if (!concept || !modalBackdrop) return;

    lastActiveElement = document.activeElement;

    modalTitle.textContent = concept.title;
    modalAddressUrl.textContent = concept.url;
    modalViewport.innerHTML = concept.template;
    modalRationale.textContent = concept.description;

    // Reset viewport to desktop
    if (modalStageWrapper) {
      modalStageWrapper.setAttribute('data-viewport', 'desktop');
      viewportBtns.forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.viewport === 'desktop');
      });
    }

    // Typography
    if (modalTypePills) {
      modalTypePills.innerHTML = concept.typography.map(item => `
        <div class="type-pairing-pill">
          <span>${item.role}</span>
          <span>${item.font}</span>
        </div>
      `).join('');
    }

    // Swatches
    if (modalPalette) {
      modalPalette.innerHTML = concept.palette.map(swatch => `
        <div class="swatch" style="background-color: ${swatch.hex};" title="${swatch.name}: ${swatch.hex}"></div>
      `).join('');
    }

    // Deliverables
    if (modalDeliverables) {
      modalDeliverables.innerHTML = concept.deliverables.map(del => `
        <span class="deliverable-chip">${del}</span>
      `).join('');
    }

    modalBackdrop.classList.add('is-active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalCloseBtn?.focus();
  };

  const closeConceptModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('is-active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  };

  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const conceptKey = btn.dataset.concept;
      openConceptModal(conceptKey);
    });
  });

  modalCloseBtn?.addEventListener('click', closeConceptModal);

  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeConceptModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('is-active')) {
      closeConceptModal();
    }
  });

  // Viewport Switcher Inside Modal
  viewportBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.viewport;
      viewportBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      modalStageWrapper?.setAttribute('data-viewport', mode);
    });
  });

  // --- 5. Accessible FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');

    btn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all other accordion items for clean scanability
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('is-open')) {
          otherItem.classList.remove('is-open');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherAns = otherItem.querySelector('.faq-answer');
          otherBtn?.setAttribute('aria-expanded', 'false');
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        if (answer) answer.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // --- 6. Pricing Package Selector -> Contact Form Link ---
  const packageSelectBtns = document.querySelectorAll('[data-package-select]');
  const websiteTypeSelect = document.getElementById('website-type');
  const projectDescInput = document.getElementById('project-desc');

  packageSelectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const packageType = btn.dataset.packageSelect;
      if (websiteTypeSelect) {
        websiteTypeSelect.value = packageType;
      }
      if (projectDescInput && !projectDescInput.value.trim()) {
        projectDescInput.value = `We are interested in discussing the ${btn.dataset.packageName || packageType} package for our business.`;
      }
    });
  });

  // --- 7. Contact Form Validation & Authentic Demo Submission ---
  const contactForm = document.getElementById('agency-contact-form');
  const demoResponseBox = document.getElementById('form-demo-response');
  const demoSummary = document.getElementById('demo-inquiry-summary');
  const mailtoFallbackBtn = document.getElementById('mailto-fallback-btn');
  const resetFormBtn = document.getElementById('reset-demo-form-btn');

  if (contactForm) {
    const validateField = (input, validator, errorMsg) => {
      const parent = input.closest('.form-group');
      const errElement = parent?.querySelector('.field-error-msg');
      const isValid = validator(input.value.trim());

      if (!isValid) {
        parent?.classList.add('has-error');
        input.classList.add('is-invalid');
        if (errElement) errElement.textContent = errorMsg;
        return false;
      } else {
        parent?.classList.remove('has-error');
        input.classList.remove('is-invalid');
        return true;
      }
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Realtime error clearing
    contactForm.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        const parent = field.closest('.form-group');
        parent?.classList.remove('has-error');
        field.classList.remove('is-invalid');
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('client-name');
      const emailInput = document.getElementById('client-email');
      const businessInput = document.getElementById('business-name');
      const typeSelect = document.getElementById('website-type');
      const descInput = document.getElementById('project-desc');

      let isValid = true;

      if (!validateField(nameInput, val => val.length >= 2, 'Please provide your full name (at least 2 characters).')) {
        isValid = false;
      }

      if (!validateField(emailInput, val => emailRegex.test(val), 'Please provide a valid email address where we can reach you.')) {
        isValid = false;
      }

      if (!validateField(typeSelect, val => val !== '', 'Please select the primary type of website you need.')) {
        isValid = false;
      }

      if (!validateField(descInput, val => val.length >= 10, 'Please share a brief description of your project (at least 10 characters).')) {
        isValid = false;
      }

      if (!isValid) {
        const firstError = contactForm.querySelector('.is-invalid');
        firstError?.focus();
        return;
      }

      // Successful Demo Submission
      const submissionData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        business: businessInput.value.trim() || 'Independent / Not specified',
        websiteType: typeSelect.options[typeSelect.selectedIndex].text,
        description: descInput.value.trim(),
        submittedAt: new Date().toLocaleString()
      };

      // Store in sessionStorage to demonstrate realistic client-side state
      try {
        sessionStorage.setItem('webora_last_inquiry', JSON.stringify(submissionData));
      } catch (err) {
        // Fallback silently if storage unavailable
      }

      // Display formatted summary in Demo Response Box
      if (demoSummary) {
        demoSummary.textContent = JSON.stringify(submissionData, null, 2);
      }

      // Setup mailto button for transparent delivery option
      if (mailtoFallbackBtn) {
        const mailSubject = encodeURIComponent(`Webora Project Inquiry: ${submissionData.websiteType} for ${submissionData.business}`);
        const mailBody = encodeURIComponent(
          `Hi Webora Team,\n\nName: ${submissionData.name}\nEmail: ${submissionData.email}\nBusiness: ${submissionData.business}\nProject Type: ${submissionData.websiteType}\n\nProject Overview:\n${submissionData.description}\n\nSent via Webora website inquiry.`
        );
        mailtoFallbackBtn.href = `mailto:hello@webora.design?subject=${mailSubject}&body=${mailBody}`;
      }

      // Hide form fields & show response box
      contactForm.style.display = 'none';
      if (demoResponseBox) {
        demoResponseBox.classList.add('is-visible');
        demoResponseBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    resetFormBtn?.addEventListener('click', () => {
      contactForm.reset();
      contactForm.style.display = 'flex';
      demoResponseBox?.classList.remove('is-visible');
    });
  }

  // --- 8. Smooth scrolling for internal anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
