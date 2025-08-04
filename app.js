// Slide data array
const slides = [
  {
    title: "The Roberts Family Story",
    description:
      "Brandon and Jennifer experienced many setbacks and obstacles before finally finding stability and a foundation to rebuild from at City Rescue Mission.",
    imgURL: "https://img.youtube.com/vi/QSWXiRiTHWA/maxresdefault.jpg",
    videoId: "QSWXiRiTHWA",
  },
  {
    title: "Jamie's Story",
    description:
      "Jamie and her 3 children faced eviction after fleeing domestic violence, and were searching for compassion and support during their season of homelessness. Watch how they found hope and restoration after walking through the doors of City Rescue Mission.",
    imgURL: "https://img.youtube.com/vi/zFCh8IvKZSo/maxresdefault.jpg",
    videoId: "zFCh8IvKZSo",
  },
];

// Setup of slide content
document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".splide .splide__list");

// Inject slides into carousel
  slides.forEach((slide) => {
    const li = document.createElement("li");
    li.className = "splide__slide";
    li.setAttribute("data-splide-youtube", `https://www.youtube.com/watch?v=${slide.videoId}`);
    li.innerHTML = `
      <div>
        <img src="${slide.imgURL}" alt="${slide.title}" class="z-10 relative object-center object-cover h-full w-full placeholder-image">
      </div>
    `;
    list.appendChild(li);
  });

  const splide = new Splide(".splide", {
    cover: true,
    type: "loop",
    perPage: 1,
    gap: "1rem",
    padding: {
      right: "25%",
    },
    arrows: false,
    pagination: true,
    classes: {
      pagination: "splide__pagination frost-button",
    },
    autoplay: false,
    pauseOnHover: true,
    video: {
      mute: false,
      autoplay: true,
      loop: false,
    },
  }).mount(window.splide.Extensions);

  const pagination = document.createElement("ul");
  pagination.classList.add("splide__pagination");
  document
    .getElementById("story-carousel")
    .parentNode.insertBefore(
      pagination,
      document.getElementById("story-carousel").nextSibling
    );

  splide.on("mounted", () => {
    splide.Components.Pagination.container = pagination;
    splide.Components.Pagination.init();
  });

  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  btnPrev.addEventListener("click", () => {
    splide.go("<");
  });
  btnNext.addEventListener("click", () => {
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


{/* <div data-splide-youtube="https://www.youtube.com/watch?v=${slide.videoId}">
<img src="${slide.imgURL}" alt="${slide.title}" class="z-10 relative object-center object-cover h-full w-full placeholder-image">
</div> */}