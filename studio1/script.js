(function(){
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const adj = document.querySelector('#adj').value;
        const verb = document.querySelector('#verb').value;


        let mytext;

        if(noun1==''){
           mytext = `Please provide a noun`;
           document.querySelector('#noun1').focus();
        } else if (noun2==''){
            mytext = `Please provide a second noun`;
            document.querySelector('#noun2').focus();   
        } else if (adj==''){
            mytext = `Please provide an adjective`;
            document.querySelector('#adj').focus();  
        } else if (verb==''){
            mytext = `Please provide a verb`;
            document.querySelector('#verb').focus();  

        } else {
            mytext = `You typed the words ${noun1}, ${noun2}, ${adj}, and ${verb}`
            
            document.querySelector('#noun1').value="";
            document.querySelector('#noun2').value="";
            document.querySelector('#adj').value="";
            document.querySelector('#verb').value="";

        }
        madlib.innerHTML = mytext;
    })
}())