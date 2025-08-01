// Slide data array

const slides = [
  {
    title: "The Roberts Family Story",
    description:
      "Brandon and Jennifer experienced many setbacks and obstacles before finally finding stability and a foundation to rebuild from at City Rescue Mission.",
    imgURL: "https://img.youtube.com/vi/QSWXiRiTHWA/maxresdefault.jpg",
    videoId: "https://youtu.be/QSWXiRiTHWA?si=tU9X70ByzoS9PAzj",
  },
  {
    title: "Jamie's Story",
    description:
      "Jamie and her 3 children faced eviction after fleeing domestic violence, and were searching for compassion and support during their season of homelessness. Watch how they found hope and restoration after walking through the doors of City Rescue Mission.",
    imgURL: "https://img.youtube.com/vi/zFCh8IvKZSo/maxresdefault.jpg",
    videoId: "https://youtu.be/zFCh8IvKZSo" 
  },
];
// Setup of slide content
document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#story-carousel .splide__list");

// Inject slides into carousel
slides.forEach((slide) => {
  const li = document.createElement("li");
  li.className = "splide__slide";
  li.innerHTML = `
      <a href="${slide.videoId}">
        <img src="${slide.imgURL}" alt="${slide.title}" />
      </a>
    `;
  list.appendChild(li);
});

  // Initialize Splide without built-in arrows
  const splide = new Splide("#story-carousel", {
    heightRatio: 0.5625,
    cover      : true,
    type: "loop",
    perPage: 1,
    arrows: false,
    pagination: true,
    autoplay: false,
    pauseOnHover: true,
    gap: "1rem",
  });
  splide.mount( window.splide.Extensions );
  

  // Setup of custom button listeners
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");

  btnPrev.addEventListener("click", () => {
    console.log("Prev button clicked");
    splide.go("<");
  });
  btnNext.addEventListener("click", () => {
    console.log("Next button clicked");
    splide.go(">");
  });

  // Elements for title and description
  const titleEl = document.getElementById("title");
  const descEl = document.getElementById("description");
  const descMobileEl = document.getElementById("description-mobile");

  // Update title/description based on current slide index
  function updateInfo(index) {
    titleEl.textContent = slides[index].title;
    descEl.textContent = slides[index].description;
    descMobileEl.textContent = slides[index].description;
  }

  // Initialize with first slide info
  updateInfo(splide.index);

  // Update info on slide change
  splide.on("moved", (newIndex) => {
    updateInfo(newIndex);
  });
});
