window.onload = function () {
  document.querySelector('.menuMobile').addEventListener('click', function () {
    if (document.querySelector('nav ul').style.display == 'flex') {
      document.querySelector('nav ul').style.display = 'none'
    } else {
      document.querySelector('nav ul').style.display = 'flex'
    }
  })
}

/* Vai ver se o menu está sendo exibido, se sim vai dar um display none
Se não ai vai dar um display: flex; */
