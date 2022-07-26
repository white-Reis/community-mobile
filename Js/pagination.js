var imagemDaPaginaOne = document.querySelector('#image-one')
var imagemDaPaginaTwo = document.querySelector('#image-two')
var imagemDaPaginaThre = document.querySelector('#image-thre')
var paginationOne = document.querySelector('#pagination-one')
var paginationTwo = document.querySelector('#pagination-two')
var paginationThre = document.querySelector('#pagination-thre')
var title = document.querySelector('.title')
var text = document.querySelector('.text')
var flag = 0
/////pagina um
var pagOne = document.querySelector('#label-one')
pagOne.addEventListener('click', function () {
  paginaUm()
  flag = 0
})
/////////pagina dois
var pagTwo = document.querySelector('#label-two')
pagTwo.addEventListener('click', function () {
  paginaDois()
  flag = 1
})

////////////// pagina tres
var pagThre = document.querySelector('#label-thre')
pagThre.addEventListener('click', function () {
  paginaTres()
  flag = 2
})
/////////////////functions
function paginaUm() {
  imagemDaPaginaOne.classList.remove('invisible')
  title.textContent = 'Plant lover Community'
  text.textContent = 'Find gardening enthusiasts from all over the world'
  imagemDaPaginaTwo.classList.add('invisible')
  imagemDaPaginaThre.classList.add('invisible')
  skipButton.classList.remove('invisible')
  continueButton.classList.remove('getStard')
  continueButton.textContent = 'Continue'
  paginationOne.checked = true
  paginationTwo.checked = false
  paginationThre.checked = false
}

function paginaDois() {
  imagemDaPaginaTwo.classList.remove('invisible')
  title.textContent = 'Get fast & safe delivery'
  text.textContent = 'Get good quality products for your plants '
  imagemDaPaginaOne.classList.add('invisible')
  imagemDaPaginaThre.classList.add('invisible')
  skipButton.classList.remove('invisible')
  continueButton.textContent = 'Continue'
  continueButton.classList.remove('getStard')
  paginationTwo.checked = true
  paginationOne.checked = false
  paginationThre.checked = false
}

function paginaTres() {
  imagemDaPaginaThre.classList.remove('invisible')
  title.textContent = 'Buy & Sell Tools'
  text.textContent =
    'Buy & sell good quality products for your beautiful plants'
  imagemDaPaginaOne.classList.add('invisible')
  imagemDaPaginaTwo.classList.add('invisible')
  skipButton.classList.add('invisible')
  continueButton.textContent = 'Get started'
  continueButton.classList.add('getStard')
  paginationThre.checked = true
  paginationOne.checked = false
  paginationTwo.checked = false
}
