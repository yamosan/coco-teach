gsap.registerPlugin(ScrollTrigger);

// gsap.to('.box', {
//   x: '70vw',
//   rotation: 360,
//   duration: 3,

//   scrollTrigger: {
//     trigger: '.box',
//     start: 'top bottom',
//     end: 'bottom top',
//     toggleActions: 'play none none reset',
//     markers: true,
//     id: 'box',
//     //scrub: true,
//     scrub: 0.5 // smoothing
//   }
// })

// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".scroll-indicator", {
//   value: 100, // 最大値
//   ease: "none", // イージング
//   scrollTrigger: {
//     scrub: 1, // 追いつくまでの時間,
//     target: "main",
//     start: "top top",
//     end: "bottom bottom",
//   },
// });

/*
gsap.to('.box1', {
  x: 400,
  scrollTrigger: {
    trigger: '.container',
    start: 'center 70%',
    end: '+=1000', //アニメーション開始位置から1000px固定する
    pin: true, //トリガー要素を固定する // アニメーションの終了位置の指定
    scrub: 3, // スクロールの進捗とアニメーションの進捗をリンクさせる
  }
});

gsap.to('.box2', {
  x: 400,
  scrollTrigger: {
    trigger: '.container',
    start: 'center 70%',
    end: '+=1000', //アニメーション開始位置から1000px固定する
    pin: true, //トリガー要素を固定する
    scrub: 3,
  }
});
*/

// gsap.to('.TOP', {
//   scrollTrigger: {
//     trigger: '.container',
//     start: 'center 70%',
//     end: '+=1000', //アニメーション開始位置から1000px固定する
//     pin: true, //トリガー要素を固定する // アニメーションの終了位置の指定
//     scrub: 3, // スクロールの進捗とアニメーションの進捗をリンクさせる
//   }
// });

// ---------------------------------

const targets = gsap.utils.toArray(".target");
targets.forEach((target, i, arr) => {
  gsap.set(target, {
    opacity: 0,
  });

  const isLast = i === arr.length - 1;

  if (!isLast) {
    gsap.to(target, {
      scrollTrigger: {
        trigger: target,
        start: "center center",
        end: "+=500",
        // end: '+=1000', //アニメーション開始位置から1000px固定する
        pin: true, //トリガー要素を固定する // アニメーションの終了位置の指定
        scrub: 1, // スクロールの進捗とアニメーションの進捗をリンクさせる
        onEnter: () => {
          gsap.to(target, { opacity: 1, duration: 0.2 });
          gsap.to(".scroll-indicator", {
            value: (100 / arr.length) * (i + 1),
          });
        },
        onEnterBack: () => {
          gsap.to(target, { opacity: 1, duration: 0.2 });
        },
        onLeave: () => {
          gsap.to(target, { opacity: 0, duration: 0.2 });
        },
        onLeaveBack: () => {
          gsap.to(target, { opacity: 0, duration: 0.2 });
          gsap.to(".scroll-indicator", { value: (100 / arr.length) * i });
        },
      },
    });
  } else {
    gsap.to(target, {
      scrollTrigger: {
        trigger: target,
        start: "center center",
        scrub: 1, // スクロールの進捗とアニメーションの進捗をリンクさせる
        // markers: true,
        onEnter: () => {
          gsap.to(target, { opacity: 1, duration: 0.2 });
          gsap.to(".scroll-indicator", {
            value: 100,
          });
        },
        onLeaveBack: () => {
          gsap.to(target, { opacity: 0, duration: 0.2 });
          gsap.to(".scroll-indicator", {
            value: 100 * ((arr.length - 1) / arr.length),
          });
        },
      },
    });
  }
});

// gsap.to('back-text-1', {

//   y:-500,
//   duration: 3,
//   scrollTrigger: {
//     trigger: '.box',
//     start: 'top bottom',
//     end: 'bottom top',
//     toggleActions: 'play none none reset',
//     markers: true,
//     id: 'box',
//     //scrub: true,
//     scrub: 0.5 // smoothing
//   }
// })

gsap.to(".back-text-1", {
  y: -1500,
  duration: 3,
  scrollTrigger: {
    trigger: ".back-text-1",
    start: "top bottom",
    end: "bottom top",
    toggleActions: "play none none reset",
    id: "back-text-1",
    //scrub: true,
    scrub: 0.5, // smoothing
  },
});

gsap.to(".back-text-2", {
  y: -1500,
  duration: 3,
  scrollTrigger: {
    trigger: ".back-text-2",
    start: "top bottom",
    end: "bottom top",
    toggleActions: "play none none reset",
    id: "back-text-2",
    //scrub: true,
    scrub: 0.5, // smoothing
  },
});

gsap.to(".back-text-3", {
  y: -1500,
  duration: 3,
  scrollTrigger: {
    trigger: ".back-text-3",
    start: "top bottom",
    end: "bottom top",
    toggleActions: "play none none reset",
    id: "back-text-3",
    //scrub: true,
    scrub: 0.5, // smoothing
  },
});

const stalker = document.getElementById("mouse-stalker");
let hovFlag = false;

document.addEventListener("mousemove", function (event) {
  stalker.style.transform =
    "translate3d(" + event.clientX + "px, " + event.clientY + "px, 0)";
});

const linkElem = document.querySelectorAll("a:not(.no_stick_)");
for (let i = 0; i < linkElem.length; i++) {
  linkElem[i].addEventListener("mouseover", function (e) {
    hovFlag = true;
    stalker.classList.add("is_active");
  });
  linkElem[i].addEventListener("mouseout", function (e) {
    hovFlag = false;
    stalker.classList.remove("is_active");
  });
}

// const links = document.querySelectorAll("a");
// links.forEach((link) => {
//   link.addEventListener("mouseover", function (event) {});
// });
