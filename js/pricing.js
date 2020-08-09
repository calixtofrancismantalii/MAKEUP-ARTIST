function showMenu(){
    
    var ul;
    ul = document.getElementById("ul");
    
    if(ul.style.height === "0px"){
        ul.style.height = "290px";
    }
    else{
        ul.style.height = "0px";
    }
     
    
}



function on(){
    
    var on, off;
    on = document.getElementById("on");
    off = document.getElementById("off");
    
    if(on.style.display == ""){
        on.style.display = "none";
        off.style.display = "block"
    }
    else{
        off.style.display = "";
        on.style.display = "block";
    }
}

function off(){
    var on, off;
    on = document.getElementById("on");
    off =  document.getElementById("off");
    
    if(off.style.display == "none"){
        off.style.display = "block";
    }
    else{
        off.style.display = "block";
        on.style.display = "none";
    }
}


