const capitalize = (word: string): string =>{ 
  if (word.length < 1) return word
  word = word[0].toUpperCase() + word.substring(1)
  return word
}

export default capitalize