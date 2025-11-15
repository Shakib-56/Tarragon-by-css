"use strict";

//Layer1
const layer1 = document.querySelector(".layer");
const wrapper = document.querySelector(".wrapper");
const leafImg = document.querySelector(".leaf");
const halfOrange = document.querySelector(".half-orrange");
const portionOrange = document.querySelector(".portion-orrange");
const labelName = document.querySelector(".toggle1");
const toggle = document.querySelector(".toggle");

const nav = document.querySelector(".navigation");
const body = document.querySelector("body");

toggle.addEventListener("change", (e) => {
  nav.style.backgroundColor = "black";
});
const menuToggle = document.getElementById("menu-toggle");
const navbarLinks = document.querySelector(".navbar-links");

menuToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
