// Event carousel : Kiran
const swiperev = new Swiper('.slider-ev', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween:75,
    parallax: true,
  
    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 2,
        spaceBetween: 75,
      },
    },
  
    // If we need pagination    
  pagination: {
  el: '.swiper-pagination',
  type: 'bullets',
  clickable: true
  },
   
  
  });
  
  
  // ans
  
  
  const swiper = new Swiper(".swiper-im", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
      1560: {
        slidesPerView: 3
      }
    }
  });
  // image gallery end---
  
  