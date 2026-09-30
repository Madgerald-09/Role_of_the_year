import imageOne from "../images/Image1.jpg";
import logo from "../images/logo.jpg";
import nomineePoster1 from "../images/1stnominee.jpg";
import nomineePoster2 from "../images/2ndnominee.jpg";
import nomineePoster3 from "../images/3rdnominee.jpg";
import nomineePoster4 from "../images/4thnominee.jpg";
import nomineePoster5 from "../images/5thnominee.jpg";
import nomineePoster6 from "../images/6thnominee.jpg";
import nomineePoster7 from "../images/7thnominee.jpg";
import nomineePoster8 from "../images/8thnominee.jpg";
import nomineePoster9 from "../images/9thnominee.jpg";
import nomineePoster10 from "../images/10thnominee.jpg";
import advert1Image from "../images/1stadvert.jpg";
import advert2Image from "../images/2ndadvert.png";
import advert3Image from "../images/3ndadvert.jpg";
import advert4Image from "../images/4thadvert.jpg";
import advert5Image from "../images/5thadvert.jpg";
import advert6Video from "../videos/6thadvert.mp4";
import finalVideoSource from "../videos/vid1.mp4";
import "./style.css";

type Nominee = {
  anchor: string;
  name: string;
  poster: string;
};

const nominees: Nominee[] = [
  {
    anchor: "nominee-1",
    name: "Nwokolo Chidera David",
    poster: nomineePoster1,
  },
  { anchor: "nominee-2", name: "Treasure Amarachi", poster: nomineePoster2 },
  {
    anchor: "nominee-3",
    name: "Prince Chibueze Onyekachi",
    poster: nomineePoster3,
  },
  {
    anchor: "nominee-4",
    name: "Emmanuel Peace Kelechi",
    poster: nomineePoster4,
  },
  {
    anchor: "nominee-5",
    name: "Precious Chinaza Onyema",
    poster: nomineePoster5,
  },
  {
    anchor: "nominee-6",
    name: "Emmanuel Michael Chigozirim",
    poster: nomineePoster6,
  },
  { anchor: "nominee-7", name: "Enioluwa", poster: nomineePoster7 },
  { anchor: "nominee-8", name: "Amaku Michael", poster: nomineePoster8 },
  { anchor: "nominee-9", name: "Joseph", poster: nomineePoster9 },
  { anchor: "nominee-10", name: "Elijah Goodswill", poster: nomineePoster10 },
];

type Advert = {
  anchor: string;
  title: string;
  subtitle: string;
  media: string;
  mediaType: "image" | "video";
  points: string[];
  links: { label: string; href: string; type: "website" | "whatsapp" }[];
};

const adverts: Advert[] = [
  {
    anchor: "advert-1",
    title: "Brightz Concept",
    subtitle: "Graphic Design • Video Shooting • Branding • Web Development",
    media: advert1Image,
    mediaType: "image",
    points: [
      "We create premium graphics, video shoots, editing, branding, and digital promotions for businesses.",
      "Your creative partner for visibility, growth and memorable campaigns.",
    ],
    links: [
      {
        label: "WhatsApp",
        href: "https://wa.me/+2348073780742",
        type: "whatsapp",
      },
      {
        label: "Website",
        href: "https://brightzconcept.simdif.com/",
        type: "website",
      },
    ],
  },
  {
    anchor: "advert-2",
    title: "Gerald",
    subtitle: "Web Developer • Tech Enthusiast • Freelancer",
    media: advert2Image,
    mediaType: "image",
    points: [
      "Modern websites and responsive digital solutions built to grow your business online.",
      "From design to deployment, I help turn ideas into working tech experiences.",
    ],
    links: [
      {
        label: "WhatsApp",
        href: "https://wa.me/+2348022720944",
        type: "whatsapp",
      },
      {
        label: "Website",
        href: "https://geraldportfolio-one.vercel.app/",
        type: "website",
      },
    ],
  },
  {
    anchor: "advert-3",
    title: "Ada Daddy Interior Design",
    subtitle: "Bedding & Curtains Specialist",
    media: advert3Image,
    mediaType: "image",
    points: [
      "We design and supply duvet sets, duvet covers, bedsheets, pillows and different types of curtains.",
      "Chisco Plaza, School Road by Mosque, Aba, Abia State.",
    ],
    links: [
      {
        label: "WhatsApp",
        href: "https://wa.me/+2349134686313",
        type: "whatsapp",
      },
    ],
  },
  {
    anchor: "advert-4",
    title: "Deals on Men Wear",
    subtitle: "Senator • Suit • Trouser • Ise Agu • Shirt • Jalabia • Etibo",
    media: advert4Image,
    mediaType: "image",
    points: [
      "Premium men’s fashion and tailoring essentials for quality, comfort and style.",
      "Custom-made and ready-to-wear pieces for everyday elegance.",
    ],
    links: [],
  },
  {
    anchor: "advert-5",
    title: "Clinton's Couture Tailor",
    subtitle:
      "Fabric Materials • Senator • Suit • Crepes • Ise Agu • Jalabia • Etibo",
    media: advert5Image,
    mediaType: "image",
    points: [
      "Dealer in a wide range of fabric materials including senator, suit, thick and light crepe, ise agu, mecado, jalabia, dulchese and etibo.",
      "We deliver worldwide anytime, anywhere.",
    ],
    links: [
      {
        label: "WhatsApp",
        href: "https://wa.me/message/B6FLKTSJTPDEM1",
        type: "whatsapp",
      },
    ],
  },
  {
    anchor: "advert-6",
    title: "Dominic Fabrics",
    subtitle: "Quality textile supply and fabric solutions",
    media: advert6Video,
    mediaType: "video",
    points: [
      "Fashion and fabric materials for everyday style, bulk supply and reliable customer service.",
      "Trusted textile products delivered with care.",
    ],
    links: [
      {
        label: "WhatsApp",
        href: "https://wa.me/+2347042885571",
        type: "whatsapp",
      },
    ],
  },
];

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root element was not found.");
}

const header = () => `
  <header class="site-header">
    <a class="brand" href="#welcome" aria-label="Role of the Year Awards home">
      <img class="brand-logo" src="${logo}" alt="Role of the Year Awards logo" />
      <span class="brand-name">Role of the Year<br /><strong>Awards 2026</strong></span>
    </a>
  </header>
`;

const footer = () => `
  <footer class="site-footer">
    <span>Role of the Year Awards <span class="footer-year">2026</span></span>
    <span class="footer-rule" aria-hidden="true"></span>
  </footer>
`;

app.innerHTML = `
  <main class="story-pages">
    <section class="scroll-screen page-shell cover-page" id="welcome" aria-labelledby="cover-title">
      ${header()}
      <div class="cover-content">
        <p class="welcome-line">Welcome to</p>
        <h1 id="cover-title">Role of the Year<br /><span>Award</span></h1>
        <p class="cover-year">2026</p>
        <a class="nominee-cta" href="#nominee-1">
          <span class="cta-copy">Click to check out our<strong>Nominees</strong></span>
          <span class="cta-arrow" aria-hidden="true">↓</span>
        </a>
        <a class="cover-photo" href="#nominee-1" aria-label="Scroll to the nominees">
          <img src="${imageOne}" alt="Featured image for the Role of the Year Awards 2026" />
        </a>
      </div>
      ${footer()}
    </section>

    ${nominees
      .map(
        (nominee, index) => `
      <section class="scroll-screen page-shell nominee-screen" id="${nominee.anchor}" aria-labelledby="nominee-title-${index}">
        ${header()}
        <div class="individual-nominee" style="--nominee-index: ${index}">
          <div class="individual-portrait">
            <img class="nominee-poster" src="${nominee.poster}" alt="Nominee poster for ${nominee.name}" />
          </div>
          <div class="individual-details">
            <p class="eyebrow">Nominee</p>
            <h1 id="nominee-title-${index}">${nominee.name}</h1>
          </div>
        </div>
        ${footer()}
      </section>
    `,
      )
      .join("")}

    <section class="scroll-screen nominee-screen video-screen" id="final-video" aria-labelledby="final-video-title">
      ${header()}
      <div class="final-video-content">
        <p class="eyebrow">Role of the Year Awards 2026</p>
        <h1 id="final-video-title">The Final Moment</h1>
        <video
          class="award-video"
          src="${finalVideoSource}"
          aria-label="Role of the Year Awards 2026 video"
          playsinline
          controls
          preload="auto"
        ></video>
      </div>
      ${footer()}
    </section>

    <section class="scroll-screen page-shell nominee-screen voting-soon-screen" id="voting-soon" aria-labelledby="voting-soon-title">
      ${header()}
      <div class="voting-soon-content">
        <p class="eyebrow">Role of the Year Awards 2026</p>
        <h1 id="voting-soon-title">Voting Starts Soon</h1>
        <p class="voting-soon-copy">Stay tuned for the official launch of voting.</p>
      </div>
      ${footer()}
    </section>

    <section class="scroll-screen page-shell advert-intro-screen" id="advert-block" aria-labelledby="advert-block-title">
      ${header()}
      <div class="advert-intro-content">
        <h2 id="advert-block-title">Advertisement Pages</h2>
      </div>
      ${footer()}
    </section>

    ${adverts
      .map(
        (advert, index) => `
      <section class="scroll-screen page-shell advert-screen" id="${advert.anchor}" aria-labelledby="advert-title-${index}">
        ${header()}
        <div class="advert-content">
          <div class="advert-card">
            <div class="advert-media">
              ${
                advert.mediaType === "video"
                  ? `<video class="advert-video" src="${advert.media}" controls playsinline preload="metadata"></video>`
                  : `<img class="advert-image" src="${advert.media}" alt="${advert.title}" />`
              }
            </div>
            <div class="advert-copy">
              <p class="eyebrow">Advert ${index + 1}</p>
              <h2 id="advert-title-${index}">${advert.title}</h2>
              <p class="advert-subtitle">${advert.subtitle}</p>
              <ul class="advert-points">
                ${advert.points.map((point) => `<li>${point}</li>`).join("")}
              </ul>
              <div class="advert-links">
                ${advert.links
                  .map(
                    (link) => `
                    <a href="${link.href}" target="_blank" rel="noreferrer noopener">
                      ${link.label}
                    </a>
                  `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
        ${footer()}
      </section>
    `,
      )
      .join("")}
  </main>

  <nav class="section-progress" aria-label="Section navigation">
    ${[
      { target: "welcome", label: "Welcome" },
      ...nominees.map((nominee) => ({
        target: nominee.anchor,
        label: `${nominee.name} nominee`,
      })),
      { target: "final-video", label: "Final video" },
      { target: "voting-soon", label: "Voting starts soon" },
      { target: "advert-block", label: "Advertisement pages" },
      ...adverts.map((advert) => ({
        target: advert.anchor,
        label: `${advert.title} advert`,
      })),
    ]
      .map(
        (section, index) => `
      <a href="#${section.target}" aria-label="${section.label}"${index === 0 ? ' aria-current="page"' : ""}>
        <span class="progress-dot" aria-hidden="true"></span>
      </a>
    `,
      )
      .join("")}
  </nav>
`;

const sections = [...document.querySelectorAll<HTMLElement>(".scroll-screen")];
const sectionLinks = [
  ...document.querySelectorAll<HTMLAnchorElement>(".section-progress a"),
];
const videoSection = document.querySelector<HTMLElement>("#final-video");
const videoPlayer = document.querySelector<HTMLVideoElement>(".award-video");

if (videoSection && videoPlayer && "IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        videoPlayer.muted = false;
        void videoPlayer.play().catch(() => undefined);
      } else {
        videoPlayer.pause();
      }
    },
    { threshold: 0.5 },
  );
  videoObserver.observe(videoSection);
}

const updateActiveSection = () => {
  const viewportCenter = window.innerHeight / 2;
  const activeSection = sections.find((section) => {
    const bounds = section.getBoundingClientRect();
    return bounds.top <= viewportCenter && bounds.bottom >= viewportCenter;
  });

  if (!activeSection) return;

  sectionLinks.forEach((link) => {
    if (link.hash === `#${activeSection.id}`) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

let updateScheduled = false;
window.addEventListener(
  "scroll",
  () => {
    if (updateScheduled) return;
    updateScheduled = true;
    requestAnimationFrame(() => {
      updateScheduled = false;
      updateActiveSection();
    });
  },
  { passive: true },
);
window.addEventListener("resize", updateActiveSection);
if (!window.location.hash) window.scrollTo(0, 0);
updateActiveSection();
