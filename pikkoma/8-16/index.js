if (window == window.parent) {
} else {
  const menu1 = document.querySelector(".menu1"); // ハンバーガーメニュー
  menu1.style.display = "none";
}

if (window == window.parent) {
} else {
  const menu2 = document.querySelector(".menu2"); // ハンバーガーメニュー
  menu2.style.display = "none";
}

if (window == window.parent) {
} else {
  const menu3 = document.querySelector(".menu3"); // ハンバーガーメニュー
  menu3.style.display = "none";
}

if (window == window.parent) {
} else {
  const menu4 = document.querySelector(".menu1-2"); // ハンバーガーメニュー
  menu4.style.display = "none";
}

// if(window==window.parent){
// }else{const menu = document.querySelector(".menu") // ハンバーガーメニュー
// menu.style.display = "none"}

const stepNum = document.querySelector(".num"); // ステップの数字
const bg = document.querySelector(".howbg"); // 背景
const use = document.querySelector(".use"); // 説明文

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
swiper.on("slideChange", function (swiper) {
  // ステップの数字の更新
  stepNum.innerHTML = "0" + String(swiper.activeIndex + 1);

  // 背景色の更新
  if (swiper.activeIndex === 1) {
    bg.firstElementChild.style.fill = "#FFFAEE";
  } else {
    bg.firstElementChild.style.fill = "#FACF67";
  }

  // 説明文の更新
  if (swiper.activeIndex === 0) {
    use.innerHTML =
      "普段から<br />行きたいお店・行ったお店を<br />マップ上にキープ";
  } else if (swiper.activeIndex === 1) {
    use.innerHTML = "友人とご飯へ行くときに<br />マップをシェア";
  } else if (swiper.activeIndex === 2) {
    use.innerHTML = "画像とお店の情報を見て選択";
  }
});

// ------------------------------------------------------------------------------------
// ハンバーガーボタンがクリックされた時
const menu = document.querySelector(".menu");
const nav = document.querySelector("#nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("menu-active");
});

//ナビゲーションのリンクがクリックされたら
const links = document.querySelectorAll("#nav a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("menu-active");
  });
});
// ------------------------------------------------------------------------------------
