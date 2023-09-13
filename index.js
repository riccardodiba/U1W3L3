const variabile = document.getElementById('new-contact') 

variabile.addEventListener('submit', function (e) {
  e.preventDefault()
  const rigaUno = document.getElementById("newlist'")
  const rigaDue = document.getElementById("first")
  const rigaTre = document.getElementById("second")
  const rigaQuattro =document.getElementById("third")

  const newVariabile = {
    newlist : rigaUno.value,
    first : rigaDue.value,
    second : rigaTre.value,
    third :rigaQuattro.value
  }
console.log("newvariabile",newVariabile)

 const newContactCard = document.createElement('div') // <div></div>
  newContactCard.classList.add('contact-card')
  newContactCard.innerHTML = `
    <p>${newVariabile.newlist} 
   <p>${newVariabile.first}</p>
    <p>${newVariabile.second}</p>
    <p>${newVariabile.third}</p>
    <button onclick="deleteCard(event)">ELIMINA</button>`
     
    newlist.value = ''
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
