var coefficients = {};

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

//
function FKCoeffSet(str) {
  var level = FKGradeLevel(str);
  if (level < 30) {
    coefficients["FKGradeLevel"] = 33;
    coefficients["FKGradeScore"] = 5;
  }
  else if (level < 50) {
    coefficients["FKGradeLevel"] = 100;
    coefficients["FKGradeScore"] = 15;
  }
  else {
    coefficients["FKGradeLevel"] = 66;
    coefficients["FKGradeScore"] = 10;
  }
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
  
  var score;
  if (correlation <= 0) {
    coefficients["PowerWordsLevel"] = 0;
    coefficients["PowerWordsScore"] = 0;
  }
  else if (correlation == 1) {
    coefficients["PowerWordsLevel"] = 50;
    coefficients["PowerWordsScore"] = 10;
  }
  else {
    coefficients["PowerWordsLevel"] = 100;
    coefficients["PowerWordsScore"] = 20;
  }

}

function returnCoefficients(input) {
  CorrelationLevel(input);
  FKCoeffSet(input);
  return coefficients;
}




