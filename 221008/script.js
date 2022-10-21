let bat1 = document.getElementById('bat_1');
let bat2 = document.getElementById('bat_2');
let bat3 = document.getElementById('bat_3');
let wrap = document.getElementById('wrap');
let particle = document.getElementById('particle');
window.addEventListener('scroll',function(){
    let measure = window.scrollY;
    //console.log(measure);
    if(measure > 600){
        bat1.classList.add('on_1');
        bat2.classList.add('on_2');
        bat3.classList.add('on_3');
        wrap.style.setProperty('background-color', 'rgb(46, 26, 43)', 'important');
    } else {
        bat1.classList.remove('on_1');
        bat2.classList.remove('on_2');
        bat3.classList.remove('on_3');
        wrap.style.setProperty('background-color', 'rgb(244, 178, 103)', 'important');
    }
});

function buttonClick(){
    particle.classList.add('particle_on');
}