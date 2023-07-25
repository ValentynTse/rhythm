'use strict'
const customersSwiper = document.querySelector('.swiper-customers');

if (customersSwiper) {   
   const swiper = new Swiper('.swiper-customers', {
      // Optional parameters
      autoHeight: true,
      loop: true,
      
      // If we need pagination
      pagination: {
         el: '.swiper-customers__pagination',
         clickable: true,
      },
      
      
   });
}