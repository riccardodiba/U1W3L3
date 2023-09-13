const variabile = document.getElementById('newlist') 

variabile.addEventListener('submit', function (e) {
  e.preventDefault()
  const rigaUno = document.getElementById("nuova")
  const rigaDue = document.getElementById("first")
  const rigaTre = document.getElementById("second")
  const rigaQuattro =document.getElementById("third")

  const newVariabile = {
    nuova : rigaUno.value,
    first : rigaDue.value,
    second : rigaTre.value,
    third :rigaQuattro.value
  }
console.log("newvariabile",newVariabile)

 const newContactCard = document.createElement('div') // <div></div>
  newContactCard.classList.add('contact-card')
  newContactCard.innerHTML = `
    <p>${newVariabile.nuova} 
   <p>${newVariabile.first}</p>
    <p>${newVariabile.second}</p>
    <p>${newVariabile.third}</p>
    <button onclick="deleteCard(event)">ELIMINA</button>`
     
    nuova.value = ''
    first.value = ''
    second.value = ''
    third.value = ''
})
const deleteCard = function (e) {
  const clickedButton = e.target
  console.log(clickedButton.parentElement)
  const reallyRemove = confirm('Vuoi davvero eliminare?')
  if (reallyRemove) {
    clickedButton.parentElement.remove() 
}
}
