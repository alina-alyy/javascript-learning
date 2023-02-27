const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

rectangle1=document.getElementsByClassName("index1")
rectangle2=document.getElementsByClassName("index2") 
function generate() {
    let passwordLength = document.getElementById("textarea").value;
    genratePassword(passwordLength);
}

function genratePassword(num) {
  
  let password1 = ""
  let password2=""
  for (let i = 1; i <= num; i++) {
    password1 += characters[Math.floor(Math.random() * characters.length)];
    password2 += characters[Math.floor(Math.random() * characters.length)];
  }
      
   rectangle1[0].innerText=password1
   rectangle2[0].innerText=password2    
    
 }
