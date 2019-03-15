class Carousel {
  constructor(carousel) {
    this.Carousel = carousel;
    // Buttons
    this.leftBtn = this.Carousel.querySelector(".left-button");
    this.rightBtn = this.Carousel.querySelector(".right-button");
    //Slide Container
    this.slide = Array.from(this.Carousel.querySelectorAll(".slide"));
    this.currentSlideIndex = 0;
    this.slide[this.currentSlideIndex].style.display = "flex";
    this.slide[this.currentSlideIndex].style.opacity = 1;
    //Images
    this.images = Array.from(this.Carousel.querySelectorAll(".slide-image"));
    this.currentImgIndex = 0;
    this.images[this.currentImgIndex].style.display = "flex";
    this.images[this.currentImgIndex].style.opacity = 1;
    //Splash Information
    this.splash = Array.from(this.Carousel.querySelectorAll(".splash-info"));
    this.currentSplashIndex = 0;
    this.splash[this.currentSplashIndex].style.display = "flex";
    this.splash[this.currentSplashIndex].style.opacity = 1;
    //Event Listeners
    this.leftBtn.addEventListener("click", () => this.setActiveImg("left"));
    this.rightBtn.addEventListener("click", () => this.setActiveImg("right"));
  }
  setActiveImg(direction) {
    // Active Slide
    this.slide.forEach(slide =>
      TweenMax.to(slide, 0, { display: "none", opacity: 0 })
    );
    // Acitve Image
    this.images.forEach(img =>
      TweenMax.to(img, 0, { display: "none", opacity: 0 }),
    );
    // Acitve Image
    this.splash.forEach(splash =>
      TweenMax.to(splash, 0, { display: "none", opacity: 0 })
    );

    // Set currentImgIndex based on which button was clicked
    if (direction === "left") {
      if (this.currentImgIndex === 0) {
        this.currentImgIndex = this.images.length - 1;
        this.currentSlideIndex = this.slide.length - 1;
        this.currentSplashIndex = this.slide.length - 1; 
      } else {
        this.currentImgIndex -= 1;
        this.currentSlideIndex -= 1;
        this.currentSplashIndex -= 1;
      }
    } else if (direction === "right") {
      if (this.currentImgIndex === this.images.length - 1) {
        this.currentImgIndex = 0;
        this.currentSlideIndex = 0;
        this.currentSplashIndex = 0;
      } else {
        this.currentImgIndex += 1;
        this.currentSlideIndex += 1;
        this.currentSplashIndex += 1;
      }
    }
    // GSAP: Fades in active image by applying styles directly
    //Slide
    TweenMax.to(this.slide[this.currentSlideIndex], 0, { display: "flex" });
    TweenMax.to(this.slide[this.currentSlideIndex], 0.5, { opacity: 1 });
    //Image
    TweenMax.to(this.images[this.currentImgIndex], 0, { display: "flex" });
    TweenMax.to(this.images[this.currentImgIndex], 0.5, { opacity: 1 });
    TweenMax.to(this.images[this.currentImgIndex], 0, {y:400});
    TweenMax.to(this.images[this.currentImgIndex], 2.5, {y:0});
    //Info
    TweenMax.to(this.splash[this.currentSplashIndex], 0, { display: "flex" });
    TweenMax.to(this.splash[this.currentSplashIndex], 0.5, { opacity: 1 });
    TweenMax.to(this.splash[this.currentSplashIndex], 0, {x:600});
    TweenMax.to(this.splash[this.currentSplashIndex], 2.5, {x:0});
  }
}
//--------------------------------Setup don't touch
let carousels = document
  .querySelectorAll(".carousel")
  .forEach(carousel => new Carousel(carousel));

  //------------------------------Auto Scroll for home page

  window.setInterval(function() {
  document.getElementById('home-right').click();
  }, 8000);
