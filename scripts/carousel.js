const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper-streetwear i");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 10; // getting fisrt img width & adding 10 margin value

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    if (icon.id == "left") {
      carousel.scrollLeft -= firstImgWidth;
    } else {
      carousel.scrollLeft += firstImgWidth;
    }
  });
});

const dragStart = e => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = e => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positonDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positonDiff;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mouseup", dragStop);
