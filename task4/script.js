let string ="";
let buttons =document.querySelectorAll('.button');

let r=Array.from(buttons);

r.forEach(function (button){
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=="="){
          string =eval(string);
          document.querySelector('.input').innerHTML=string;
        }
        else if(e.target.innerHTML=="AC"){
            string ="";
            document.querySelector('.input').innerHTML=string;
          }
          else if(e.target.innerHTML=="DEL"){
            string =string.slice(0,-1);
            document.querySelector('.input').innerHTML=string;
          }
        else{
        console.log(e.target);
        string= string + e.target.innerHTML;
        document.querySelector('.input').innerHTML=string;
        }
    })
})