// function toggleMenu(){
//     var aside = document.querySelector('aside')
//     aside.classList.toggle('active')
// }


let open = document.querySelector('.open')
let close = document.querySelector('.close')

function closer (){
    let aside = document.querySelector('aside')
    aside.classList.remove('active')
    console.log('que tal')
}

function opens (){
    let aside = document.querySelector('aside')
    aside.classList.add('active')
    console.log('que tal')
}

open.addEventListener('click', opens )

close.addEventListener('click', closer )


ScrollReveal().reveal('header', {
    duration:1000,
    distance:'200%',
    origin:'top',
});

ScrollReveal().reveal('.contenido', {
    duration:4000,
    distance:'400%',
    origin:'right',
});

ScrollReveal().reveal('#card1', {
    duration:5000,
    distance:'400%',
    origin:'bottom',
});

ScrollReveal().reveal('#card2', {
    duration:6000,
    distance:'400%',
    origin:'bottom',
});

ScrollReveal().reveal('#card3', {
    duration:7000,
    distance:'400%',
    origin:'bottom',
});


ScrollReveal().reveal('.redesSociales', {
    duration:8000,
    distance:'400%',
    origin:'left',
});




