function Show(text) {
let count=0;
for (let i = 0; i < text.length; i++) {
 for (let j = 0; j < text.length; j++) {
  if(text[i]==text[j]&& i>j){
    break;
  }
  if (text[i]==text[j]) {
    count++;
  }
 }  
 if (count>0) {
  console.log(`${text[i]}-->Count:${count}`);

 }

}
}
Show("Have a good day.");

function Show(text) {
  let obj={};
  for (const letter of text) {
    if (obj[letter]==undefined) {
     obj[letter] =1; 
    }
    else{
      obj[letter]+=1;
    }
      
  }
 return obj;    
}
console.log(Show('Have a good day.')); 
