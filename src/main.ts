import imageOne from "../images/Image1.jpg";
import logo from "../images/logo.jpg";
import "./style.css";

type Nominee = {
  anchor: string;
  category: string;
};

const nominees: Nominee[] = [
  { anchor: "nominee-2", category: "Steady Light" },
  { anchor: "nominee-3", category: "Cutest" },
  { anchor: "nominee-4", category: "Eljay" },
  { anchor: "nominee-5", category: "Fashion Creator" },
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
        <a class="nominee-cta" href="#nominee-2">
          <span class="cta-copy">Click to check out our<strong>Nominees</strong></span>
          <span class="cta-arrow" aria-hidden="true">↓</span>
        </a>
        <a class="cover-photo" href="#nominee-2" aria-label="Scroll to the nominees">
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
          <div class="individual-portrait" aria-hidden="true">
            <span class="portrait-initial">R</span>
            <span class="portrait-caption">Nominee</span>
          </div>
          <div class="individual-details">
            <p class="eyebrow">Category</p>
            <h1 id="nominee-title-${index}">${nominee.category}</h1>
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
        label: `${nominee.category} nominee`,
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
