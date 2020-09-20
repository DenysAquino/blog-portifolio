const bottons = document.querySelector('.botaoenviar')
    bottons.addEventListener('mouseenter', passMouse);
    bottons.addEventListener('mouseout', outMouse);
    
function passMouse(){
    bottons.style.background ='white'
    bottons.style.border = '4px solid black'
    bottons.style.transform ='scale(1.1)'
    bottons.style.color = '#104b6d'
    bottons.style.transition ='1s'

}
function outMouse(){
    bottons.style.background ='#104b6d'
    bottons.style.border = 'none'
    bottons.style.transform ='scale(1)'
    bottons.style.color = 'white'   
    bottons.style.transition ='1s'         
}
