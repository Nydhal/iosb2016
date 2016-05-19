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

var powerwords = ["Amazing", "big", "bottom line", "breakthrough", "challenge", "compare", "competitive", "compromise","confidential","daring", "delighted", "direct", "discount", "download", "easy","easily", "edge", "energy", "emerging", "exclusive","expert", "focus", "fortune", "free", "full", "fundamentals", "growth", "guaranteed", "helpful", "high tech", "how to", "huge gift","hurry", "imagination", "immediately", "important", "improved", "innovative", "insider", "interesting", "introducing", "it’s here",
"just arrived", "last chance", "last minute", "latest", "launch", "lifetime", "limited", "love", "luxury", "new", "now", "opportunities","outstanding", "pioneering", "popular", "powerful", "practical", "profitable", "promising", "professional", "proven", "reduced","reliable", "rare", "reveal", "reward", "revolutionary", "secrets", "security", "selected", "simple", "special", "spotlight","strong","successful", "survival", "technology", "timely", "the truth about", "ultimate", "unconditional", "unique", "unlimited", "unusual", "urgent", "useful", "value", "wealth"];

function CorrelationLevel(str){
 var correlation = 0;
 var wcount = WordCount(str); 
 var words = str.toLowerCase().split(/\s+/);
  for (i=0; i<powerwords.length;i++){
     for (j=0; j<words.length;j++){
      if (powerwords[i]==words[j]){
        correlation++;
      }    
  } 
  }
  
  return correlation/WordCount(str);
}




