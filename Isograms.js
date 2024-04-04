//PREP
// string , checked, any repeating elemnt, if there is true else false
//words, "" can be, if a A
//

function isIsogram(str){
  
    //LowerCase
     //split into Array
     //reduce array to objuect
     //iterate over each value inside the object
     //if value > 1 return false else return true
     
     let word = str.toLowerCase()
     let wordArr = word.split("")
     let reduced =  wordArr.reduce((acc,key) =>{
       acc[key] = (acc[key] || 0) + 1
       return acc
     },{})
     
     for(let i = 0; i<wordArr.length;i++){
       if(reduced[wordArr[i]] > 1){
         return false
       }
     }
     
     return true
   }
   
   
   