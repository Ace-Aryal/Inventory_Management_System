const patreonsData =  []
const records = localStorage.getItem("records")

if (records) {
  patreonsData.push(records)
}


export const addData = (data) => {
  patreonsData.push(data)
  console.log(patreonsData)
  let patreonsDataString = JSON.stringify(patreonsData) // stringify
localStorage.setItem("records", patreonsDataString)
}





export const getData = () =>{ 
  let patreonsRecord = localStorage.getItem("records") // parse from local storage
  let patreonsDataJSON = JSON.parse(patreonsRecord)
  return patreonsDataJSON
}