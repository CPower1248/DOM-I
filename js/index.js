const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Task 2a
const myA = document.querySelectorAll("a")
myA.forEach((item, idx) => {
  myA[idx].textContent = siteContent.nav[`nav-item-${idx + 1}`]
  myA[idx].style.color = "green";
})

// const myNav = document.querySelector("nav")
// myNav.appendChild("-Appended-")
// myNav.prependChild("-Prepended-")

let myCtaH1 = document.querySelector(".cta h1")
myCtaH1.textContent = siteContent.cta.h1;
let myCtaButton = document.querySelector(".cta button")
myCtaButton.textContent = siteContent.cta.button;
let myCtaImg = document.querySelector(".cta img")
myCtaImg.src = siteContent.cta["img-src"]

let myMainContentH4 = document.querySelectorAll(".main-content h4")
myMainContentH4[0].textContent = siteContent["main-content"]["features-h4"]
myMainContentH4[1].textContent = siteContent["main-content"]["about-h4"]
myMainContentH4[2].textContent = siteContent["main-content"]["services-h4"]
myMainContentH4[3].textContent = siteContent["main-content"]["product-h4"]
myMainContentH4[4].textContent = siteContent["main-content"]["vision-h4"]

let myMainContentP = document.querySelectorAll(".main-content p")
myMainContentP[0].textContent = siteContent["main-content"]["features-content"]
myMainContentP[1].textContent = siteContent["main-content"]["about-content"]
myMainContentP[2].textContent = siteContent["main-content"]["services-content"]
myMainContentP[3].textContent = siteContent["main-content"]["product-content"]
myMainContentP[4].textContent = siteContent["main-content"]["vision-content"]

let myMainContentImg = document.querySelector(".main-content img")
myMainContentImg.src = siteContent["main-content"]["middle-img-src"]

let myContactH4 = document.querySelector(".contact h4")
myContactH4.textContent = siteContent.contact["contact-h4"]
let myContactP = document.querySelectorAll(".contact p")
myContactP[0].textContent = siteContent.contact.address;
myContactP[1].textContent = siteContent.contact.phone;
myContactP[2].textContent = siteContent.contact.email;

let myFooterP = document.querySelector("footer p")
myFooterP.textContent = siteContent.footer.copyright;