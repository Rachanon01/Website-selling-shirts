// let wHeight = window.innerHeight;
// let sb = document.getElementById("search-button");
// let closeSB = document.getElementById("fullscreen-close-button");
// let SearchOverlay = document.getElementById("search-overlay");
// let searchBar = document.getElementById("fullscreen-searchform");

// searchBar.style.top = wHeight / 2 + "px";
// window.addEventListener("resize", function () {
//   console.log(wHeight);
//   wHeight = window.innerHeight;
//   searchBar.style.top = wHeight / 2 + "px";
// }, true);

// document.addEventListener("click", function() {
//   sb.onclick = function() {
//     SearchOverlay.classList.add("fullscreen-search-overlay-show");
//   };

//   closeSB.onclick = function() {
//     SearchOverlay.classList.remove("fullscreen-search-overlay-show");
//   }
// })

let sb = document.getElementById("search-button-listener"); 
let closeSB = document.getElementById("fullscreen-close-button");
let SearchOverlay = document.getElementById("search-overlay");
let searchBar = document.getElementById("fullscreen-searchform");

//  ทำให้ search bar อยู่กึ่งกลางของหน้าจอ
//  โดยใช้ innerHeight ของ window
let wHeight = window.innerHeight;
searchBar.style.top = wHeight / 2 + "px";

window.addEventListener("resize", function () {
  wHeight = window.innerHeight;
  searchBar.style.top = wHeight / 2 + "px";
});

//  ทำให้ปุ่มเปิด/ปิดทำงานได้
//  โดยใช้ onclick event
//  เมื่อคลิกที่ปุ่ม search button จะเปิด search overlay
//  และเมื่อคลิกที่ปุ่ม close จะปิด search overlay
//  และทำให้ search bar แสดงผล
//  โดยใช้ classList เพื่อเพิ่ม/ลบ class ที่กำหนดไว้ใน CSS
sb.onclick = function () {
  SearchOverlay.classList.add("fullscreen-search-overlay-show");
  document.getElementById("fullscreen-search-wrapper").style.visibility = "visible";
  document.getElementById("fullscreen-search-wrapper").style.opacity = "1";
};

closeSB.onclick = function () {
  SearchOverlay.classList.remove("fullscreen-search-overlay-show");
  document.getElementById("fullscreen-search-wrapper").style.visibility = "hidden";
  document.getElementById("fullscreen-search-wrapper").style.opacity = "0";
};
