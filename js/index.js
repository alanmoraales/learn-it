function scrollToElement(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'top': element.offsetTop - 40,
    });
}

function scrollToHistoria(){
    const element = document.getElementById('historia');
    scrollToElement(element);
}

function scrollToVariables(){
    const element = document.getElementById('variables');
    scrollToElement(element);
}

function scrollToExpresiones(){
    const element = document.getElementById('expresiones');
    scrollToElement(element);
}

function scrollToEstructuras(){
    const element = document.getElementById('estructura');
    scrollToElement(element);
}

function scrollToSubprogramas(){
    const element = document.getElementById('subprogramas');
    scrollToElement(element);
}

function scrollToAplicacion(){
    const element = document.getElementById('aplicacion');
    scrollToElement(element);
}



