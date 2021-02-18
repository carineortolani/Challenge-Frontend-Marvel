const heroFavorite = document.querySelectorAll('.mcc__button')
const heros = 'Team favorite:'
let list = []

heroFavorite.forEach(function(button, index) {
  const heroSelected = button.getAttribute('data-hero')

  if(localStorage[heros]) {
    list = localStorage[heros].split(',') || []
  }

  if(list.includes(heroSelected)){
    button.classList.add('mcc__buttonSelect')
  }

  button.addEventListener('click',function() {
    button.classList.toggle("mcc__buttonSelect");

    if(localStorage[heros]) {
      list = localStorage[heros].split(',') || []
    }

    if(list.includes(heroSelected)) {
      list = list.filter(function(hero) {
        return hero !== heroSelected
      })
      localStorage.setItem(heros, list)
    }
    else {
      localStorage.setItem(heros, [...list, heroSelected])
    }
  })
})
