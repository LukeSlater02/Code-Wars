//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str){
  let pigStr = []
  let wordArray = str.split(" ")
  wordArray.forEach(w => {
    let result = w.match(/^[.,:!?]/)
    if(result){
      pigStr.push(w)
    }
    else{
    let firstLetter = w.slice(0,1)
    let lettersAfterFirstLetter = w.substring(1)
    pigStr.push(lettersAfterFirstLetter+firstLetter+"ay")
    }
  })
  return pigStr.join(" ")
}