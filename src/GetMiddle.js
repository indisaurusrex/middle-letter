export default function get_middle(word) {
  var h = Math.floor(word.length / 2);
  
  if(word.length > 2) {
    return word[h];
  } else {
    return word;
  }
}