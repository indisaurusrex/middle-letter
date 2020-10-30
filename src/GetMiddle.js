export default function get_middle(word) {

  var h = Math.floor(word.length / 2);
  
  if(word.length % 2 === 0) {
    return word[h-1] + word[h];
  } else {
    return word[h]
  };
}