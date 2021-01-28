document.addEventListener('DOMContentLoaded', () => {
  // opção de cartas
  const cardArray = [
    { name: 'pikachu', img: 'images/pikachu.png' },
    { name: 'bubasauro', img: 'images/bubasauro.png' },
    { name: 'charmander', img: 'images/charmander.png' },
    { name: 'elo', img: 'images/elo.png' },
    { name: 'squirtle', img: 'images/squirtle.png' },
    { name: 'tatu', img: 'images/tatu.png' },
    { name: 'pikachu', img: 'images/pikachu.png' },
    { name: 'bubasauro', img: 'images/bubasauro.png' },
    { name: 'charmander', img: 'images/charmander.png' },
    { name: 'elo', img: 'images/elo.png' },
    { name: 'squirtle', img: 'images/squirtle.png' },
    { name: 'tatu', img: 'images/tatu.png' },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  // criando a mesa
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img')
      card.setAttribute('src', 'images/whats.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/pokeball.png')
      cards[optionTwoId].setAttribute('src', 'images/pokeball.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/whats.jpg')
      cards[optionTwoId].setAttribute('src', 'images/whats.jpg')
      alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
      //window.location.reload(true)
    }
  }

  //flip your card

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
