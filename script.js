function cambiarText(elem){
    if(elem.innerText === "Login"){
        elem.innerText="Logout";
    }else{
        elem.innerText="Login";
    }
}

function eliminarBoton(elem) {
    elem.remove();
}

