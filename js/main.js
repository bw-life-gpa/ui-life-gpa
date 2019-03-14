//================================================================= Page Nav
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(
      `.content[data-tab='${this.data}']`
    );
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener("click", () => this.select());
  }

  select() {
    const linkTab = document.querySelectorAll(`.link`);
    linkTab.forEach(function(linkTab) {
      linkTab.classList.remove(`change`);
    });
    this.element.classList.toggle(`change`);
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(`.content`);
    items.forEach(items => items.classList.remove("change"));
    this.element.classList.toggle("change");
  }
}

let links = document.querySelectorAll(`.link`).forEach(link => new TabLink(link));
//=============================== Profile Animations 
//------------secectors
let profile = document.querySelectorAll(`.profile`);
let ryanImg = profile[0].querySelectorAll(`img`);
let elishaImg = profile[1].querySelectorAll(`img`);
let brooksImg = profile[2].querySelectorAll(`img`);
let arshakImg = profile[3].querySelectorAll(`img`);
let ethanImg = profile[4].querySelectorAll(`img`);
//---------------------------------------TweenMax Animations
//-------------------------------Ryan
window.addEventListener("load", e => {
  TweenMax.to(ryanImg, 0 , {y:1000});
  TweenLite.to(ryanImg, 2.5, {delay: 1, ease: Bounce.easeOut, y: 0 });
  TweenMax.to(ryanImg, 1 , {delay: 1.5, src: "./Images/profilePictures/Ryan.png"});
});
//---mouseover
ryanImg[0].addEventListener("mouseover", function(e) {
  TweenMax.to(ryanImg[0], .5, {boxShadow:"0px 0px 20px #FFEB38", scale: 1.02 });
});
ryanImg[0].addEventListener("mouseout", function(e) {
  TweenMax.to(ryanImg[0], .5, {boxShadow: "0px 0px 0px #000000", scale: 1 });
});

//-------------------------------Elisha
window.addEventListener("load", e => {
  TweenMax.to(elishaImg, 0 , {y:1000});
  TweenLite.to(elishaImg, 3, {delay: 1.5, ease: Bounce.easeOut, y: 0 });
  TweenMax.to(elishaImg, 1 , {delay: 2.5, src: "./Images/profilePictures/Elisha.png"});
});
//--
elishaImg[0].addEventListener("mouseover", function(e) {
  TweenMax.to(elishaImg[0], .5, {boxShadow:"0px 0px 20px #FFEB38", scale: 1.02 });
});
elishaImg[0].addEventListener("mouseout", function(e) {
  TweenMax.to(elishaImg[0], .5, {boxShadow: "0px 0px 0px #000000", scale: 1 });
});
//-------------------------------Brooks
window.addEventListener("load", e => {
  TweenMax.to(brooksImg, 0 , {y:1000});
  TweenLite.to(brooksImg, 2.5, {delay: 2, ease: Bounce.easeOut, y: 0 });
  TweenMax.to(brooksImg, 1 , {delay: 3, src: "./Images/profilePictures/Brooks.png"});
});
//---mouseover
brooksImg[0].addEventListener("mouseover", function(e) {
  TweenMax.to(brooksImg[0], .5, {boxShadow:"0px 0px 20px #FFEB38", scale: 1.02 });
});
brooksImg[0].addEventListener("mouseout", function(e) {
  TweenMax.to(brooksImg[0], .5, {boxShadow: "0px 0px 0px #000000", scale: 1 });
});
//-------------------------------Arshak
window.addEventListener("load", e => {
  TweenMax.to(arshakImg, 0 , {y:1000});
  TweenLite.to(arshakImg, 2.5, {delay: 2.5, ease: Bounce.easeOut, y: 0 });
  TweenMax.to(arshakImg, 3.5 , {delay: 3.5, src: "./Images/profilePictures/Arshak.png"});
});
//---mouseover
arshakImg[0].addEventListener("mouseover", function(e) {
  TweenMax.to(arshakImg[0], .5, {boxShadow:"0px 0px 20px #FFEB38", scale: 1.02 });
});
arshakImg[0].addEventListener("mouseout", function(e) {
  TweenMax.to(arshakImg[0], .5, {boxShadow: "0px 0px 0px #000000", scale: 1 });
});
//-------------------------------Ethan
window.addEventListener("load", e => {
  TweenMax.to(ethanImg, 0 , {y:1000});
  TweenLite.to(ethanImg, 2.5, {delay: 4, ease: Bounce.easeOut, y: 0 });
  TweenMax.to(ethanImg, 4 , {delay: 4, src: "./Images/profilePictures/Ethan.png"});
});
//---mouseover
ethanImg[0].addEventListener("mouseover", function(e) {
  TweenMax.to(ethanImg[0], .5, {boxShadow:"0px 0px 20px #FFEB38", scale: 1.02 });
});
ethanImg[0].addEventListener("mouseout", function(e) {
  TweenMax.to(ethanImg[0], .5, {boxShadow: "0px 0px 0px #000000", scale: 1 });
});
