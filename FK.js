function WordCount(str) {
  return str.split(/\s+/).length;
}

function Sylllablecount(word) {
  word = word.toLowerCase();                                     
  if(word.length <= 3) { return 1; }                             
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   
  word = word.replace(/^y/, '');                                 
  return word.match(/[aeiouy]{1,2}/g).length;                    
}

function SentenceCount(str) {
  return str.replace(/\w[.?!](\s|$)/g, "$1|").split("|").length;
}

function FKGradeLevel(str){
  var FK1 = 206.835-1.015*(WordCount(str)/1)-84.6*(Sylllablecount(str)/WordCount(str));
  var FK2 = 206.835-1.015*(WordCount(str)/2)-84.6*(Sylllablecount(str)/WordCount(str));
  var FK3 = 206.835-1.015*(WordCount(str)/3)-84.6*(Sylllablecount(str)/WordCount(str));
  return (FK1+FK2+FK3)/3;

}