import { getData } from "./dataManager.js"

const displayGrid = document.querySelector ("#records-container")


const patreonsData = getData()
console.log(patreonsData)

document.addEventListener("DOMContentLoaded", displayRecords )
function displayRecords() {
  // for ui
  
  patreonsData.forEach(data=> {
    
   const idEl =  document.createElement("p")
   const nameEl =  document.createElement("p")
   const titleOfBookEl =  document.createElement("p")
   const dateEl =  document.createElement("p")
   const editEl =  document.createElement("i")
   const deleteEl =  document.createElement("i")
   
   addAttributes()
   addContents()
   appendElements()
   function addAttributes() {
     
     // Tab to edit
   idEl.classList.add("bg-white","w-full", "p-2",  "block", "h-full")
   
   nameEl.classList.add("bg-white","w-full", "p-2",  "block", "h-full")
   titleOfBookEl.classList.add("bg-white","w-full", "p-2",  "block", "h-full")
   dateEl.classList.add("bg-white","w-full", "p-2",  "block", "h-full")
   editEl.classList.add("bg-cyan-400","w-full", "p-2", "block", "h-full","fa-solid", "fa-pen-to-square","text-center","text-2xl")
   deleteEl.classList.add("bg-red-400", "w-full", "p-2", "block", "h-full", "fa-solid", "fa-trash","text-center","text-2xl")
   
   }
   
   function addContents() {
     
     // Tab to edit
     idEl.textContent = data.id
     nameEl.textContent = data.name
     titleOfBookEl.textContent = data.titleOfBook
     dateEl.textContent = data.borrowedDate
   }
   
   
   
   function appendElements() {
     // Tab to edit
   displayGrid.append(idEl)
   displayGrid.append(nameEl)
   displayGrid.append(titleOfBookEl)
   displayGrid.append(dateEl)
   displayGrid.append(editEl)
   displayGrid.append(deleteEl)
   }
  })
  
}



function updatePatreonData(){ // for update and delete
  
}