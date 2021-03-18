const removeCard = document.querySelectorAll('.mc__card')

removeCard.forEach(function(card, index){
  const hero = card.getAttribute('data-hero')
  const key = localStorage.getItem("Team favorite:");
  const array = key.split(',');

  if (!array.includes(hero)) {
    card.classList.add('mc__cardRemove')
  }
})
