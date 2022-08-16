const hideText = document.querySelectorAll(".hide-text");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("view");
    }
  });
});
hideText.forEach((item) => {
  observer.observe(item);
});

// グルーピングしてタイミング揃える
// const hideTextGroup = document.querySelectorAll(".hide-text-group");
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const children = entry.target.querySelectorAll(".hide-text");
//       children.forEach((hideText) => {
//         hideText.classList.add("view");
//       });
//     }
//   });
// });
// hideTextGroup.forEach((item) => {
//   observer.observe(item);
// });
