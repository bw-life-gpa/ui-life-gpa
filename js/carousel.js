//================================================================= Carousel
// transitionend event stuff
var transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };
  var transitionEvent = 'NO_TRANSITION_EVENT';
  var _elem = document.createElement('div');
  var __t = null;
  
  for (__t in transitions)
    if (_elem.style[__t] !== undefined)
        transitionEvent = transitions[__t];
  
  if (transitionEvent == 'NO_TRANSITION_EVENT') {
    var transEvent = document.createEvent('Event');
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
  
  var carousels = asNodeList.call(document.querySelectorAll('[data-carousel]'));
  
  carousels.forEach(function(elem) {
    var current = 0;
    var carouselSlide = elem.querySelector('.Carousel-Slide');
    var carouselSlideItems = asNodeList.call(
        carouselSlide.querySelectorAll('.Carousel-Slide-item')
    );
  
    carouselSlide.style.width = (carouselSlideItems.length * 100) + '%';
    carouselSlideItems.css({
        width: (100 / carouselSlideItems.length) + '%'
    });
    carouselSlideItems.forEach(function(item) {
        item.style.backgroundImage = item.getAttribute('data-background');
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
  