var continueButton = document.querySelector('#continue')
var skipButton = document.querySelector('#skip')

continueButton.addEventListener('click', function () {
  flag = flag + 1
  paginasFlag()
})
skipButton.addEventListener('click', function () {
  flag = 2
  paginasFlag()
})

function paginasFlag() {
  if (flag == 0) {
    paginaUm()
  } else {
    if (flag == 1) {
      paginaDois()
    } else {
      if (flag == 2) {
        paginaTres()
      } else {
        if (flag == 3) {
          flag = 0
          paginaUm()
        }
      }
    }
  }
}
