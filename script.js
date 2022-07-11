//Troca as formações no menu
var typed = new Typed(".typing", {
    strings:["Engenheira", "Desenvolvedora","Técnica"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

//Scroll vertical
const scrollVertical = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    delay: 100,
});

scrollVertical.reveal('.home__data,',{}); 
scrollVertical.reveal('.home__img, .about-subtitle, .about-text, .card, .hobbies',{delay: 400}); 
scrollVertical.reveal('.home__social-icon',{ interval: 200}); 
scrollVertical.reveal('.work__img',{interval: 200}); 

//Scroll Horizontal

const scrollHorizontal = ScrollReveal({
    origin:'left',
    distance: '40px',
    deration: 2000,
    delay: 100
});

scrollHorizontal.reveal('.skills-data', {interval: 200});

//nao implementei um banco ainda

function banco(){
    alert('To na semana de prova, não deu pra implementa o banco :(');
}
