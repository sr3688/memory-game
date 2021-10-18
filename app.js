const cardContainer = document.getElementById('card-container')
const gameHeading = document.querySelector('.game-heading')
const moves = document.querySelector('.moves-count')
const themeIcon = document.querySelector('.themeIcon')
const modal = document.getElementById('modal-container')
const cards = Array.from(document.getElementsByClassName('card-face'))
const restartButton = document.getElementById('restart-button')

let isLightTheme = document.cookie.length > 0 ? document.cookie : true

const themeToggleButton = document.getElementById('theme-set')

function applyTheme () 
{
  if (document.cookie == 'true') 
  {
    document.body.style.backgroundColor = lightThemeColors.backgroundColor
    cardContainer.style.backgroundColor = lightThemeColors.cardWrapperColor
    themeToggleButton.style.backgroundColor = '#444444'
    themeIcon.classList.replace('fa-sun', 'fa-moon')
    gameHeading.style.backgroundColor = lightThemeColors.headerWrapperColor
    cards.forEach(card =>
    {
      card.style.boxShadow = '0px 3px 18px 3px rgba(0,0,0,0.2)'
    })
  } 
  else 
  {
    document.body.style.backgroundColor = darkThemeColors.backgroundColor
    cardContainer.style.backgroundColor = darkThemeColors.cardWrapperColor
    themeToggleButton.style.backgroundColor = '#f5f5f5'
    gameHeading.style.backgroundColor = darkThemeColors.headerWrapperColor
    themeIcon.classList.replace('fa-moon', 'fa-sun')
    cards.forEach(card =>
    {
      card.style.boxShadow = '0px 3px 18px 3px rgba(255,255,255,0.15)'
    })
  }
}

document.addEventListener('DOMContentLoaded', e => 
{
  applyTheme()
})

const darkThemeColors = 
{
  backgroundColor: '#222222',
  textColor: '#ffffff',
  cardWrapperColor: '#333333',
  headerWrapperColor: '#333333'
}

const lightThemeColors = 
{
  backgroundColor: '#ffffff',
  textColor: '#222222',
  cardWrapperColor: '#f5f5f5',
  headerWrapperColor: '#647b71'
}

var flipCounter = 0
var movesCounter = 0
const frontImg = './img/Dragon_Ball_Cast.png'
let characters = [
  {
    name: 'magin-bu',
    img: './img/magin-bu.jpeg'
  },
  {
    name: 'goku',
    img: './img/goku.png'
  },
  {
    name: 'beerus',
    img: './img/beerus.jpeg'
  },
  {
    name: 'vegeta',
    img: './img/vegeta.jpeg'
  },
  {
    name: 'zeno',
    img: './img/zeno.png'
  },
  {
    name: 'gohan',
    img: './img/gohan.jpeg'
  }
]

let remainingCards = characters.length * 2

function initializeGame ()
{
  let availableCharacterCards = []

  characters.forEach(character => 
  {
    availableCharacterCards.push(character)
    availableCharacterCards.push(character)
  })

  for (let index = 0; index < characters.length * 2; index++) 
  {
    let idx = Math.floor(availableCharacterCards.length * Math.random())
    let currentCharacter = availableCharacterCards[idx]
    availableCharacterCards.splice(idx, 1)

    let cardItem = document.createElement('div')
    cardItem.className = 'card'

    let cardInner = document.createElement('div')
    cardInner.className = 'card-inner'
    cardInner.setAttribute('_title', currentCharacter.name)

    let cardFront = document.createElement('div')
    cardFront.className = 'card-face card-face-front'
    cardFront.style.backgroundColor = 'white'
    let cardFrontImg = document.createElement('img')
    cardFrontImg.src = frontImg
    cardFront.appendChild(cardFrontImg)

    let cardBack = document.createElement('div')
    cardBack.className = 'card-face card-face-back'
    let cardBackImg = document.createElement('img')
    cardBackImg.src = currentCharacter.img
    cardBackImg.alt = `Picture of ${currentCharacter.name}`
    cardBack.appendChild(cardBackImg)

    cardInner.appendChild(cardFront)
    cardInner.appendChild(cardBack)
    cardItem.appendChild(cardInner)
    cardContainer.appendChild(cardItem)
  }

  themeToggleButton.addEventListener('click', e => 
  {
    isLightTheme = isLightTheme === 'true' ? 'false' : 'true'
    document.cookie = isLightTheme
    applyTheme()
  })

  restartButton.addEventListener('click', e =>
  {
    // modal.style.display = 'none'
    window.location.reload()
  })
}

function flipBackAllAndVisibility ()
{
  setTimeout(function ()
  {
    for (let index = 0; index < card.length; index++)
    {
      if (card[index].classList.contains('is-flipped'))
      {
        if (!card[index].classList.contains('matched-card-visibility'))
        {
          for (let index_1 = 0; index_1 < card.length; index_1++) 
          {
            if (index_1 !== index)
            {
              if (card[index_1].classList.contains('is-flipped'))
              {
                if (
                  card[index].attributes._title.value ===
                  card[index_1].attributes._title.value
                   ) 
                {
                  card[index_1].classList.add('matched-card-visibility')
                  card[index].classList.add('matched-card-visibility')
                  flipCounter = 0
                  movesCounter = movesCounter + 1
                  moves.innerHTML = movesCounter
                  remainingCards -= 2
                  if (remainingCards == 0)
                  {
                    console.log('end')
                    modal.style.display = 'flex'
                  }
                } 
                else
                {
                  card[index].classList.toggle('is-flipped')
                  card[index_1].classList.toggle('is-flipped')
                  flipCounter = 0
                  movesCounter = movesCounter + 1
                  moves.innerHTML = movesCounter
                }
              }
            }
          }
        }
      }
    }
  }, 1000)
}

initializeGame()
const card = document.querySelectorAll('.card-inner')

for (let item = 0; item < card.length; item++)
{
  card[item].addEventListener('click', () =>
  {
    if (flipCounter < 2)
    {
      if (card[item].classList.contains('is-flipped'))
      {
        card[item].classList.toggle('is-flipped')
        flipCounter--
      }
      else
      {
        card[item].classList.toggle('is-flipped')
        flipCounter++
      }
    }
    else
    {
      if (card[item].classList.contains('is-flipped'))
      {
        card[item].classList.toggle('is-flipped')
        flipCounter--
      }
    }

    //This is to make the matching cards disappear and counting moves

    if (flipCounter === 2)
    {
      flipBackAllAndVisibility()
    }
  })
}
