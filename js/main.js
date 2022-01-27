
// all variables
var btn = document.querySelector(".control-button span"),
    card = document.querySelectorAll('.card'),
    scor = document.querySelector('.scor span');

// sound
let succes = document.querySelector('#succes'),
    error = document.querySelector('#error'),
    finish = document.querySelector('#finish');
    
document.querySelector('.control-button').parentElement.style.overflow = 'hidden';

// message of the name 
btn.onclick = function(){
    let name = prompt('what is your name?');
    console.log(name)
    let dname = document.querySelector('.name span')
    if(name == null || name == ''){
        dname.textContent = 'Unknow';
    }
    else{
        dname.textContent = name;
    }
    btn.parentElement.remove();
    document.querySelector('body').parentElement.style.overflow = 'auto';
}


document.querySelector('.card').addEventListener('contextmenu', event => event.preventDefault());

// array of the cards game
let cards = Array.from(document.querySelectorAll('.card'));


// array same number of the cards 
let cardsBlock = [...Array(cards.length).keys()];

// shuffle function
function shuffle(array){   
    let rand , temp;
    
    for(let i=0; i < array.length; i++ ){
        
        rand = Math.floor(Math.random() * cards.length);
        
        temp = array[i];
        array[i] =  array[rand];
        array[rand] = temp;
    }
    return array;
}

function shuffle0(array){   
    let rand , temp;
    
    for(let i=array.length-1; i >= 0 ; i-- ){
        
        rand = Math.floor(Math.random() * cards.length);
        
        temp = array[i];
        array[i] =  array[rand];
        array[rand] = temp;
    }
    return array;
}

// shuffle the array randome
let swap =  shuffle(cardsBlock);
console.log(swap);
let swap2 = shuffle0(swap);
console.log(swap2);

// add the shuffle array in the cards
cards.forEach((block,index)=> {
    block.style.order = swap2[index];
})



let try1 = 0;
var card1, card2,
    done=0;
for(let i=0; i<card.length; i++){
    card[i].onclick = chicked;
}

// checked of the card if it is the same
function chicked(){
    if(!this.classList.contains('done')){
        if(try1 == 0){
            card1 = this;
            console.log(card1)
            this.classList.toggle('is-flipped');
            try1++;
        }
        else if(try1 == 1){
            card2 = this;
            if(card1 == card2){return false}
            else{
            console.log(card2)
            card2.classList.toggle('is-flipped');
            try1++;
            
            setTimeout(function(){
                if(card2.children[1].firstElementChild.getAttribute('src') ==
                   card1.children[1].firstElementChild.getAttribute('src')){
                        try1 = 0;
                        card1.classList.add('done');
                        card2.classList.add('done');
                        done++;
                        succes.play();  
                        if(done == (cards.length/2) ){complet()}
                }
                else{
                    card1.classList.toggle('is-flipped');
                    card2.classList.toggle('is-flipped');
                    scor.textContent++;
                    console.log(scor);
                    try1 = 0;
                    error.play();
                }
            }, 500)
            }
        }
    }
    else{
        return false;
    }
}

function complet(){
    finish.play();
}

setInterval(()=>{
    btn.parentElement.classList.toggle('anime');
},1600)

