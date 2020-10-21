window.onload = function() {
    start();
}
var id;

function start() {
    let num = 0;
     id = window.setInterval(function(){
        
       if (num!=0) {

            let obj = document.getElementById(num);
            obj.classList.remove("target");
            obj.removeEventListener("click",win);

       }

        num = Math.floor(Math.random() * 9) + 1;
       
        
        let  obj = document.getElementById(num);

        obj.classList.add("target");
        obj.addEventListener("click",win);


      }, 3000);


}


function win() {
    clearInterval(id);
    window.alert("Win!!!");
}



