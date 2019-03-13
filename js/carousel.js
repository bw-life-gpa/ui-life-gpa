//=========================================== Carousel
// transitionend event stuff
let transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };
  let transitionEvent = 'NO_TRANSITION_EVENT';
  let _elem = document.createElement('div');
  let __t = null;
  
  for (__t in transitions)
    if (_elem.style[__t] !== undefined)
        transitionEvent = transitions[__t];
  
  if (transitionEvent == 'NO_TRANSITION_EVENT') {
    let transEvent = document.createEvent('Event');
    transEvent.initEvent(transitionEvent, true, false);
  }
  
  // helper mixins
  
  function asNodeList() {
    this.forEach = function(cb) {
        [].forEach.call(this, cb);
    };
    this.css = function(cssObj) {
        this.forEach(function(node) {
            for (var style in cssObj) node.style[style] = cssObj[style];
        });
    };
    return this;
  }
  
  // Carousel stuff
  
  let carousels = asNodeList.call(document.querySelectorAll('[data-carousel]'));
  
  carousels.forEach(function(elem) {
    let current = 0;
    let carouselSlide = elem.querySelector('.Carousel-Slide');
    let carouselSlideItems = asNodeList.call(
        carouselSlide.querySelectorAll('.Carousel-Slide-item')
    );
  
    carouselSlide.style.width = (carouselSlideItems.length * 100) + '%';
    carouselSlideItems.css({
        width: (100 / carouselSlideItems.length) + '%'
    });
    carouselSlideItems.forEach(function(item) {
        item.style.backgroundImage = item.getAttribute('src');
    });
  
    elem.querySelector('.Carousel-Controller-Nav-left')
        .addEventListener('click', function(e) {
            current--;
            slide(current);
        });
    elem.querySelector('.Carousel-Controller-Nav-right')
        .addEventListener('click', function(e) {
            current++;
            slide(current);
        });
  
    elem.addEventListener(transitionEvent, (function() {
        var completedElem = document.getElementById('completed');
        return function(e) {
            completedElem.style.display = 'block';
            setTimeout(function() {
                completedElem.style.display = 'none';
            }, 500);
        }
    })());
  
    function slide(place) {
        if (current < 0) current = carouselSlideItems.length - 1;
        else if (current >= carouselSlideItems.length) current = 0;
        carouselSlide.style.left = -(current * 100) + '%';
  
        if (transitionEvent == 'NO_TRANSITION_EVENT')
            elem.dispatchEvent(transEvent);
    }
  });

    // window.setInterval(function() {
    // document.getElementById('about-right').click();
    // }, 3000);

    // window.setInterval(function() {
    //     document.getElementById('home-right').click();
    //     }, 5000);