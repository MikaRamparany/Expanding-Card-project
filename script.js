const Cards = document.querySelectorAll('.Card');

Cards.forEach(Card=>{
    Card.addEventListener('click',()=>{removeActionClasses()
        Card.classList.add('active')
    })
})
function removeActionClasses() {
    Cards.forEach(Card=>{
        Card.classList.remove('active')
    })
} 