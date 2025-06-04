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

gsap.utils.toArray("p").forEach(p => {
  gsap.from(p, {
    scrollTrigger: {
      trigger: p,
      start: "top 80%", 
      toggleActions: "restart reset restart reset"
    },
    opacity: 0,
    x: -30,
    duration: 1,
    ease: "power2.out"
  });
});