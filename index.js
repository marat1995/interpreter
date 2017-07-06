function run(code){
var error=0; //there is no error 
var bot=99; //for poem 
var j=0; //for command +
var out=""; //for out result 
for(i=0;i<code.length;i++){
//interpreter 
switch(code[i]){
   case "H":
   out+="Hello world <br />";
   break;
   case "9":
   while(bot>0){
   out+=bot + " bottles of beer <br />";
   out+="you take one down,pass it around," + "<br />";
   bot--;
   if(bot>0){
      out+=bot + "bottles of beer on the wall.";
      out+="<br />" + "<br />";
   }
   else{
      out+="no more bottles of beer on the wall." + "<br />";
     }
    } 
    break;
    case "+":
    j++;
    break;
    case "Q":
    out+= code + "<br />";
    break;     
   default:
    error++;
    }
   }
 if(error>0){
 //if error
    out = [error];
 }
 return out;
}
