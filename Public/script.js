const myForm = document.querySelector ("form")
export let patreaonsData = []

myForm.addEventListener("submit",e=> {
  e.preventDefault()
  const patreonID = myForm.querySelector("#SN").value
  const patreonName = myForm.querySelector("#NOS").value
  const titleOfBook = myForm.querySelector("#TOB").value
  const borrowedDate = myForm.querySelector("#DOB").value
  console.log(patreonID , borrowedDate , titleOfBook , patreonName)
  const patreonData = {
    id: patreonID,
    name: patreonName,
    titleOfBook,
    borrowedDate
  }
  
  patreaonsData.push(patreonData)
  
  
  
  
  myForm.querySelector("#SN").value = ""
  myForm.querySelector("#NOS").value = ""
  myForm.querySelector("#TOB").value = ""
  
  alert("Record Added Sucessfully")
})

