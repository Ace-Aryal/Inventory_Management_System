let patreonsData =  []
const records = localStorage.getItem("records")

if (records) {
  
  patreonsData = JSON.parse(records)
  
 
}


export const addData = (data) => {
  console.log(patreonsData)
  patreonsData.push(data)
  
  let patreonsDataString = JSON.stringify(patreonsData) // stringify
localStorage.setItem("records", patreonsDataString)
}





export const getData = () =>{ 
  let patreonsRecord = localStorage.getItem("records") // parse from local storage

  let patreonsDataJSON = JSON.parse(patreonsRecord)
  
  return patreonsDataJSON
}

export const deleteData = (filteredArray) =>{
   let patreonsData = filteredArray
  let patreonsDataString = JSON.stringify(patreonsData) // stringify
localStorage.setItem("records", patreonsDataString)


  
}