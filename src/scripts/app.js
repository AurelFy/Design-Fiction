"use strict";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

var menuBtn = document.querySelector(".menu--burger");
menuBtn.addEventListener("click", openMenu);

function openMenu(){
  var menu = document.querySelector(".menu--links");
  menu.classList.toggle("menu--links__hidden");
  }

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text--anim").forEach(left => {
  gsap.from(left, {
    scrollTrigger: {
      trigger: left,
      start: "top 80%", 
      toggleActions: "restart reset restart reset"
    },
    opacity: 0,
    x: -30,
    duration: 1,
    ease: "power2.out"
  });
});

gsap.utils.toArray(".text--anim__right").forEach(right => {
  gsap.from(right, {
    scrollTrigger: {
      trigger: right,
      start: "top 80%", 
      toggleActions: "restart reset restart reset"
    },
    opacity: 0,
    x: 30,
    duration: 1,
    ease: "power2.out"
  });
});

gsap.from("html > *", {
  opacity: 0,
  duration: 2,
  ease: "ease-out"
});

gsap.utils.toArray(".bof--card").forEach(bot => {
  gsap.from(bot, {
    scrollTrigger: {
      trigger: bot, 
      start: "top 70%", 
      toggleActions: "restart reset restart reset"
    }, 
    opacity: 0, 
    y: 30, 
    duration: 1, 
    ease: "ease-out"
  })
}); 


  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      window.location.href = "index.html";
    });
  }; 