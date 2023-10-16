const cardArray=[
    {
        name:'apple',
        img: 'Images/apple.jpg'
    },
    {
        name:'mango',
        img: 'Images/mango.jpg'
    },
    {
        name:'grape',
        img: 'Images/grape.jpg'
    },
    {
        name:'guava',
        img: 'Images/guava.jpg'
    },
    {
        name:'cherry',
        img: 'Images/cherry.jpg'
    },
    {
        name:'water',
        img: 'Images/water.jpg'
    },
    {
        name:'apple',
        img: 'Images/apple.jpg'
    },
    {
        name:'mango',
        img: 'Images/mango.jpg'
    },
    {
        name:'grape',
        img: 'Images/grape.jpg'
    },
    {
        name:'guava',
        img: 'Images/guava.jpg'
    },
    {
        name:'cherry',
        img: 'Images/cherry.jpg'
    },
    {
        name:'water',
        img: 'Images/water.jpg'
    }
    
]


cardArray.sort(()=>0.5-Math.random())
let cardChose=[]
let cardsChosenId=[]
let cardsWon=[]
const gridDisplay=document.querySelector('#grid')
gridDisplay.setAttribute('style','height:1000px')
gridDisplay.setAttribute('style','width:1000px')
let p=document.querySelector('#result')
function creategrid(){
    for(let i=0;i<12;i++){
        const card=document.createElement('img')
        card.setAttribute('src','Images/blank.jpg')
        card.setAttribute('style','height:220px')
        card.setAttribute('style','width:220px')
        // card.setAttribute('style','border-color:black')
        card.setAttribute('style','margin:10px 10px 10px 10px')
        card.setAttribute('data-Id',i);
        card.addEventListener('click',flipCard) 
        gridDisplay.appendChild(card)
    }

}
creategrid();

function checkMatch(){
    const cards=document.querySelectorAll('img');
    let option1=cardsChosenId[0]
    let option2=cardsChosenId[1]
    if(option1==option2){
        cards[option1].setAttribute('src','Images/blank.jpg')
        cards[option2].setAttribute('src','Images/blank.jpg')
    }
    else if(cardChose[0]===cardChose[1]){
        cards[option1].removeEventListener('click',flipCard);
        cards[option2].removeEventListener('click',flipCard)
        cardsWon.push(cardChose);
    }
    else{
        cards[option1].setAttribute('src','Images/blank.jpg');
        cards[option2].setAttribute('src','Images/blank.jpg')
    }
 
    cardsChosenId=[]
    cardChose=[]
    p.innerHTML=cardsWon.length;
    if(cardsWon.length==6){p.innerHTML="You Won!!!"}
}

function flipCard(){
let cardId=this.getAttribute('data-Id')
cardChose.push(cardArray[cardId].name);
cardsChosenId.push(cardId)
this.setAttribute('src',cardArray[cardId].img)
if(cardChose.length===2){
    setTimeout(checkMatch,500);
    
}

}
