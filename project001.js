const buttons = document.querySelectorAll('.button');
const bdy = document.querySelector('body');

buttons.forEach(function (button){
     console.log(button);
    button.addEventListener('click', function(n){   
        console.log(n);
        console.log(n.target);
        if(n.target.id === 'grey'){
            bdy.style.backgroundColor = 'grey';
             }
            if(n.target.id === 'white'){
                bdy.style.backgroundColor = 'white';
            }
            if(n.target.id === 'blue'){
                bdy.style.backgroundColor = 'blue';
            }
            if(n.target.id === 'yellow'){
                bdy.style.backgroundColor = n.target.id;
            }
        } );
    });