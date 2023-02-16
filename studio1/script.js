(function(){
    'use strict';
    console.log('reading js');

     const myForm = document.querySelector('#myform');
     const madlib = document.querySelector('#madlib');

    document.querySelector('#submit').addEventListener('click', function(event){
        event.preventDefault();
        console.log('hi');

    
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const adj = document.querySelector('#adj').value;
        const verb = document.querySelector('#verb').value;


   document.querySelector('#page2').style.display="block"; 
   document.querySelector('#page1').style.display="none";    
   
        document.querySelector('#adjfill').innerText=adj;
        document.querySelector('#nounfill').innerText=noun1;
        document.querySelector('#verbfill').innerText=verb;
        document.querySelector('#noun2fill').innerText=noun2;
        document.querySelector('#adjectivefill').innerText=adjective;

        let mytext;

        
    })
}())