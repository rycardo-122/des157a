(function(){
    'use strict';
    console.log('reading js');

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
   
    
})();