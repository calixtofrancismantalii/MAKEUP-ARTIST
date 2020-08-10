function showMenu() {
    
    var ul;
    ul = document.getElementById("ul");
    
    if (ul.style.height === "0px"){
        ul.style.height = "290px";
    }
    else{
        ul.style.height = "0px";
    }
     
    
}




function offOn() {
    
    var off, on;
    off = document.getElementById("off");
    on = document.getElementById("on");
    
    if(off.style.display == ""){
        off.style.display = "none";
        on.style.display = "block";
    }
    else{
        off.style.display = "block";
        on.style.display = "none";
    }
    
}


