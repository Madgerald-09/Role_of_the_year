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
  </main>

  <nav class="section-progress" aria-label="Section navigation">
    ${[
      { target: "welcome", label: "Welcome" },
      ...nominees.map((nominee) => ({
        target: nominee.anchor,
        label: `${nominee.name} nominee`,
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
