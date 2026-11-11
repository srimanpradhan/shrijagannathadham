/**
 * Shri Jagannath Dham — Devotional Frontend Logic
 * Pure Vanilla TypeScript / JavaScript (Zero React dependency)
 */

interface ModalContent {
  title: string;
  iconSvg: string;
  bodyHtml: string;
  actionUrl?: string;
  actionText?: string;
}

// Sacred modal details for services & information
const MODAL_DATA: Record<string, ModalContent> = {
  todayInTemple: {
    title: 'Today in the Temple · ଦୈନନ୍ଦିନ ନୀତି',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
    bodyHtml: `
      <p>The daily rituals (Nitis) of Mahaprabhu Shri Jagannath in Puri Sri Mandira are carried out strictly according to the ancient Satwik Sevayat traditions of Chhatisa Nijog.</p>
      
      <h4>Daily Ritual Schedule (Typical Timing)</h4>
      <ul>
        <li><strong>Mangala Alati:</strong> 5:00 AM (Auspicious awakening ceremony of the Lord)</li>
        <li><strong>Mailam & Tadapa Lagi:</strong> 6:00 AM (Change of divine garments and bath preparations)</li>
        <li><strong>Abakasha (Snana):</strong> 6:30 AM (Purificatory divine bath and tooth brushing ritual)</li>
        <li><strong>Besha Lagi:</strong> 7:00 AM (Adorning the holy trinity in morning attire)</li>
        <li><strong>Sahanamela (Public Darshan):</strong> 7:30 AM – 8:30 AM (Open darshan close to Ratnavedi)</li>
        <li><strong>Gopala Ballabha Bhoga:</strong> 9:00 AM (Morning breakfast offering of sweetmeats and fruits)</li>
        <li><strong>Sakala Dhupa:</strong> 10:00 AM (First cooked food offering, Raja Bhoga)</li>
        <li><strong>Madhyanha Dhupa:</strong> 12:30 PM – 1:30 PM (Mid-day grand feast offering)</li>
        <li><strong>Sandhya Alati:</strong> 6:30 PM (Evening lamp ritual accompanied by sacred bells)</li>
        <li><strong>Sandhya Dhupa:</strong> 7:00 PM – 8:00 PM (Evening cooked meal offering)</li>
        <li><strong>Chandan Lagi & Badasinghara:</strong> 10:30 PM (Flower and sandalwood adornment)</li>
        <li><strong>Pahuda:</strong> 11:30 PM (Closing of sanctum doors for the Lord's divine slumber)</li>
      </ul>

      <div class="modal-notice-callout">
        <strong>Devotee Notice:</strong> Timings are indicative and subject to change during special festivals, Ekadashi, and eclipse periods according to the Shree Jagannath Temple Administration (SJTA).
      </div>
    `,
    actionUrl: 'https://shreejagannatha.in/',
    actionText: 'View Official Niti Updates'
  },

  darshan: {
    title: 'Darshan Guidelines & Temple Gates',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    bodyHtml: `
      <p>Darshan of Lord Jagannath, Lord Balabhadra, and Devi Subhadra upon the Ratnavedi is one of the most sacred experiences in Sanatana Dharma.</p>
      
      <h4>Four Sacred Entrance Gates (Dwara)</h4>
      <ul>
        <li><strong>Simhadwara (Lion Gate / East):</strong> The primary ceremonial entrance facing Bada Danda, housing the iconic Aruna Stambha (Sun Pillar) and 22 sacred steps (Baisi Pahacha).</li>
        <li><strong>Ashwadwara (Horse Gate / South):</strong> Dedicated entry points with facilities for devotees and senior pilgrims.</li>
        <li><strong>Vyaghradwara (Tiger Gate / West):</strong> Secondary exit and entry gate for local pilgrims and festival processions.</li>
        <li><strong>Hastidwara (Elephant Gate / North):</strong> Access toward the temple gardens, Anandabazar pathway, and administrative offices.</li>
      </ul>

      <h4>Essential Pilgrim Conduct</h4>
      <ul>
        <li>Footwear must be deposited at the free footwear stands near Simhadwara.</li>
        <li>Maintain quiet reverence and follow designated barricaded queue lines.</li>
        <li>Special facilities and dedicated ramps are available for elderly and divyang devotees.</li>
      </ul>

      <div class="modal-notice-callout">
        <strong>Important:</strong> Traditional modest clothing is required. Mobile phones, smart watches, cameras, and leather articles are strictly prohibited inside Sri Mandira.
      </div>
    `,
    actionUrl: 'https://shreejagannatha.in/',
    actionText: 'Official Darshan Information'
  },

  donation: {
    title: 'Donation & Sacred Offerings (Samarpan)',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    bodyHtml: `
      <p>Offerings made to Lord Jagannath support temple sevayats, traditional rituals, daily Anna Daan, Cow shelters (Goshalas), and pilgrim welfare.</p>
      
      <h4>Independent Portal Notice</h4>
      <p><strong>Shri Jagannath Dham</strong> is an independent devotional website. <em>We do NOT accept or process any financial donations or booking fees.</em></p>
      
      <h4>How to Make Authorized Offerings</h4>
      <ul>
        <li>All legitimate devotee contributions, Corpus donations, and Hundi Samarpan must be submitted directly through the official portal of <strong>Shree Jagannath Temple Administration (SJTA), Puri</strong>.</li>
        <li>Official bank receipts with tax exemption under Section 80G are issued exclusively by the SJTA.</li>
        <li>Beware of fraudulent websites or unauthorized middlemen soliciting donations in the name of Sri Mandira.</li>
      </ul>

      <div class="modal-notice-callout">
        Always verify that you are on the authentic official temple domain: <strong>shreejagannatha.in</strong>.
      </div>
    `,
    actionUrl: 'https://shreejagannatha.in/',
    actionText: 'Go to Official SJTA Donation Portal'
  },

  hundi: {
    title: 'Hundi Collection & Digital Samarpan',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
    bodyHtml: `
      <p>The sacred Hundis (Dropboxes) at Shree Jagannath Temple have collected devotee offerings for centuries, handled under strict administrative oversight.</p>
      
      <h4>Hundi Locations in Sri Mandira</h4>
      <ul>
        <li>Main Hundi near Simhadwara (Lion Gate).</li>
        <li>Inner Courtyard Hundis near the Jagamohana and Bada Deula premises.</li>
        <li>E-Hundi digital kiosks installed by nationalized banks near the temple complex.</li>
      </ul>

      <h4>Online E-Hundi Samarpan</h4>
      <p>Devotees across India and around the globe can offer their E-Hundi contributions directly into the official Shree Jagannath Temple Corpus through approved government payment gateways on the official temple website.</p>

      <div class="modal-notice-callout">
        Please use only the official Shree Jagannath Temple website for electronic Hundi transfers.
      </div>
    `,
    actionUrl: 'https://shreejagannatha.in/',
    actionText: 'Visit Official E-Hundi Portal'
  },

  guesthouse: {
    title: 'Guest House & Bhakta Nivas Online Booking',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    bodyHtml: `
      <p>The Shree Jagannath Temple Administration operates several subsidized, clean, and safe pilgrim accommodations (Bhakt Nivas) for visiting devotees in Puri.</p>
      
      <h4>Major SJTA Pilgrim Accommodations</h4>
      <ul>
        <li><strong>Neelachal Bhakt Nivas:</strong> Located conveniently on Bada Danda (Grand Road), near the temple. Features AC and Non-AC family rooms.</li>
        <li><strong>Shree Gundicha Bhakt Nivas:</strong> Near Gundicha Temple with peaceful surroundings and ample parking facilities.</li>
        <li><strong>Jagannath Ballav Pilgrim Centre:</strong> Modern multi-story pilgrim complex with transport hub amenities and dormitory options.</li>
        <li><strong>Niladri Bhakt Nivas:</strong> Comfortable accommodations managed directly under the Temple Administration.</li>
      </ul>

      <div class="modal-notice-callout">
        <strong>Booking Advisory:</strong> Room reservations open online through the official SJTA portal. Peak seasons (Ratha Yatra, Kartika Masa, Snana Purnima) require advance booking.
      </div>
    `,
    actionUrl: 'https://shreejagannatha.in/',
    actionText: 'Check Availability on Official Portal'
  },

  historyInfo: {
    title: 'Temple History · ଶ୍ରୀମନ୍ଦିର ଇତିହାସ',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>`,
    bodyHtml: `
      <p>The Shree Jagannath Temple of Puri, known reverently as <strong>Sri Mandira</strong> or <strong>Bada Deula</strong>, is one of the four cardinal Char Dham pilgrimage destinations established in Sanatana Dharma.</p>
      
      <h4>Origins and Legends</h4>
      <p>Sacred texts including the <em>Skanda Purana</em>, <em>Brahma Purana</em>, and the <em>Madala Panji</em> (temple chronicle) recount the miraculous advent of Lord Jagannath as Darubrahma (the divine wooden log floating at the seashore) under the patronage of the virtuous King Indradyumna of Avanti and Queen Gundicha.</p>
      
      <h4>Architectural Grandeur of Kalinga</h4>
      <ul>
        <li>The soaring 65-metre (214 ft) vimana shikhara was initiated in the 12th century by King Chodaganga Deva and brought to completion by Anangabhima Deva of the Eastern Ganga dynasty.</li>
        <li>Built in the pinnacle Rekha Deula style of Kalinga temple architecture upon an elevated stone platform called Nilachala.</li>
        <li>Surrounded by two concentric stone ramparts: the outer <em>Meghanada Pacheri</em> and inner <em>Kurma Bedha</em>.</li>
        <li>Crowned by the mystic <strong>Nilachakra</strong> (the sacred eight-spoked alloy wheel) and the fluttering <strong>Patitapabana Bana</strong> flag, visible from miles away.</li>
      </ul>
    `,
    actionUrl: 'https://shreejagannatha.in/',
    actionText: 'Read Detailed Temple History'
  },

  guidelinesInfo: {
    title: 'Visitor Guidelines · ଦର୍ଶନ ନିୟମାବଳୀ',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    bodyHtml: `
      <p>To preserve the sanctity, centuries-old traditions, and security of Sri Mandira, pilgrims are kindly requested to strictly abide by the temple code of conduct.</p>
      
      <h4>Dress Code & Personal Items</h4>
      <ul>
        <li><strong>Attire:</strong> Traditional and modest attire is mandatory. Men are advised to wear Dhoti/Kurta or formal trousers; women are advised to wear Sarees or Salwar Kameez.</li>
        <li><strong>Prohibited Items:</strong> Mobile phones, electronic cameras, smart watches, recording devices, cigarettes/tobacco, and leather items (belts, wallets, bags) are strictly barred inside the gates.</li>
        <li>Free cloakrooms and secure counters are operational near Simhadwara.</li>
      </ul>

      <h4>Baisi Pahacha & Ananda Bazar</h4>
      <ul>
        <li>Upon entering Simhadwara, ascend the 22 holy steps (Baisi Pahacha) reverently.</li>
        <li>Mahaprasad (Abhada) can be obtained and honored at the historic Ananda Bazar courtyard inside the temple complex.</li>
      </ul>
    `,
    actionUrl: 'https://shreejagannatha.in/',
    actionText: 'Official Visitor Code of Conduct'
  },

  officialInfo: {
    title: 'Official Temple Administration (SJTA)',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    bodyHtml: `
      <p>The Shree Jagannath Temple Administration (SJTA) is the statutory governmental body constituted under the Shree Jagannath Temple Act of 1955 to manage the temple endowments, rituals, and properties.</p>
      
      <h4>Services on the Official Portal</h4>
      <ul>
        <li>Official Daily Niti & Ritual Bulletins</li>
        <li>Online Donation & Corpus Fund Samarpan with 80G tax exemptions</li>
        <li>Official Bhakta Nivas guest house reservations</li>
        <li>Public Tenders, Auctions, and Employment Notifications</li>
        <li>Annual Ratha Yatra live streaming and official schedule publications</li>
      </ul>

      <div class="modal-notice-callout">
        Visit the verified portal: <strong>https://shreejagannatha.in/</strong>
      </div>
    `,
    actionUrl: 'https://shreejagannatha.in/',
    actionText: 'Proceed to Official Temple Website'
  }
};

/**
 * Initializes interactive functionality when DOM is ready
 */
function initTempleApp() {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navList = document.getElementById('mainNavList');

  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      navList.classList.toggle('is-active', !isExpanded);
    });

    // Close on navigation link click (if link is internal)
    const navLinks = navList.querySelectorAll('.dropdown-item a, .dropdown-item button');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 860) {
          mobileToggle.setAttribute('aria-expanded', 'false');
          navList.classList.remove('is-active');
        }
      });
    });
  }

  // 2. Mobile Dropdown Accordion Click Handling
  const navItemsWithDropdown = document.querySelectorAll('.nav-item.has-dropdown');
  navItemsWithDropdown.forEach(item => {
    const trigger = item.querySelector('.nav-link');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        // On mobile, clicking parent toggles the submenu
        if (window.innerWidth <= 860) {
          e.preventDefault();
          const isOpen = item.classList.contains('is-open');
          
          // Close other open accordions
          navItemsWithDropdown.forEach(other => {
            if (other !== item) other.classList.remove('is-open');
          });

          item.classList.toggle('is-open', !isOpen);
        }
      });
    }
  });

  // 3. Modal System for Services and Quick Info
  const modalOverlay = document.getElementById('templeModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalIcon = document.getElementById('modalIcon');
  const modalBody = document.getElementById('modalBody');
  const modalActionBtn = document.getElementById('modalActionBtn');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');

  function openModal(dataKey: string) {
    const data = MODAL_DATA[dataKey];
    if (!data || !modalOverlay || !modalTitle || !modalIcon || !modalBody) return;

    modalTitle.textContent = data.title;
    modalIcon.innerHTML = data.iconSvg;
    modalBody.innerHTML = data.bodyHtml;

    if (modalActionBtn) {
      if (data.actionUrl) {
        modalActionBtn.style.display = 'inline-flex';
        modalActionBtn.setAttribute('href', data.actionUrl);
        modalActionBtn.textContent = data.actionText || 'Visit Official Website';
      } else {
        modalActionBtn.style.display = 'none';
      }
    }

    modalOverlay.classList.add('is-active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalCloseBtn?.focus();
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('is-active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Attach modal triggers for service buttons
  const serviceButtons = document.querySelectorAll('[data-service]');
  serviceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-service');
      if (key) openModal(key);
    });
  });

  // Attach modal triggers for info cards
  const infoButtons = document.querySelectorAll('[data-info]');
  infoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-info');
      if (key) openModal(key);
    });
  });

  // Attach modal triggers for dropdown links
  const modalTriggers = document.querySelectorAll('[data-open-modal]');
  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-open-modal');
      if (key) openModal(key);
    });
  });

  // Modal Close Handlers
  modalCloseBtn?.addEventListener('click', closeModal);
  modalDismissBtn?.addEventListener('click', closeModal);

  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('is-active')) {
      closeModal();
    }
  });

  // Image Error Fallback handling
  const heroImg = document.getElementById('heroTempleImg') as HTMLImageElement | null;
  const heroFallback = document.getElementById('heroFallback');
  if (heroImg && heroFallback) {
    heroImg.addEventListener('error', () => {
      heroImg.style.display = 'none';
      heroFallback.style.display = 'flex';
    });
  }
}

// Run on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTempleApp);
} else {
  initTempleApp();
}
