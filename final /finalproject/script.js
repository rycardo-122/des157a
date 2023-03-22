(function(){
    'use strict';

    const images = document.querySelectorAll('.image');
    const overlay = document.querySelector('.overlay');
    const close = document.querySelectorAll('.close');
    
    for(let i=0; i< images.length; i++){
        images[i].addEventListener('click', function(event){
            event.preventDefault();
            console.log(event.target.nextElementSibling);
            const thisOverlay = event.target.nextElementSibling;
            thisOverlay.className='overlay showing';
            close[i].addEventListener('click', function(){
               thisOverlay.className='overlay hidden';
            })
        })

    }

    window.addEventListener('load', function(){
      const sections = document.querySelectorAll('section');
      let sectionTops = [];
      let documentTop;
      let counter = 0;
      const slide1 = document.querySelector('#slide1');
      const slide2 = document.querySelector('#slide2');
      const slide3 = document.querySelector('#slide3');
      const sectionHeight = document.querySelector('section').offsetHeight;

      
      
      sections.forEach(function(section){
            sectionTops.push(Math.floor(section.getBoundingClientRect().top) + window.pageYOffset);
      });

      window.addEventListener('scroll', function(){
      documentTop = window.pageYOffset;
    
      // the user is scrolling down
      if (documentTop > sectionTops[counter]){
          // increment counter
              counter++;
              console.log(`scrolling down ${counter}`);
             
          // the user is scrolling up
          } else if (counter > 1 && documentTop < sectionTops[counter-1]){
              // decrement counter
              counter--;
              console.log(`scrolling up ${counter}`)
          }

          // call functions based on which section is in viewport
          switch(counter){
            case 1: moveSlide1(); break;

            default:break;
          }

          function moveSlide1(){
            // create position for slides based on the scrollY position - height of element; change values for different speeds of movement         
            const newPosition1 = (window.scrollY * 2) - 500;

            // Set the element's top property to the new position
            slide1.style.top = `${newPosition1}px`;

            // At about 70% of section, fade out slide1
            if (newPosition1 > sectionHeight * .7){
              slide1.className = 'fadeout';
            } else {
              slide1.className = 'fadein'
            }

            const newPosition2 = (window.scrollY * 2) - 200;
  
            // Set the element's top property to the new position
            slide2.style.top = `${newPosition2}px`;

            console.log(slide2.style.top)

            // At about 70% of section, fade out slide2
            if (newPosition2 > sectionHeight * .7){
              slide2.className = 'fadeout';
            } else {
              slide2.className = 'fadein'
            }

            const newPosition3 = (window.scrollY * 2) - 350;
  
            // Set the element's top property to the new position
            slide3.style.top = `${newPosition3}px`;

            console.log(slide2.style.top)

            // At about 70% of section, fade out slide2
            if (newPosition3 > sectionHeight * .7){
              slide3.className = 'fadeout';
            } else {
              slide3.className = 'fadein'
            }
            
          }
        }) // end window scroll function
        
      }); // end window load function

})()