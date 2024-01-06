var icon = document.querySelector("#myImage");
var myInput = document.querySelector("#myInput");

icon.addEventListener("click", function(){
    if(myInput.type == "password"){
        myInput.type = "text";
        icon.src = "show.png";
    }else {
        myInput.type = "password";
        icon.src = "hide.png";
    }
})