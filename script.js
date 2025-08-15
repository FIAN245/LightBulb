const bulb = document.getElementById('bulb');
const glow = document.getElementById('glow');

let isOn = false;

// Klik untuk nyalain / matiin lampu
bulb.addEventListener('click', () => {
    isOn = !isOn;
    if(isOn){
        bulb.style.background = '#ffeb3b';
        glow.style.opacity = 1;
    } else {
        bulb.style.background = '#555';
        glow.style.opacity = 0;
    }
});

// Drag lampu
let offsetX, offsetY;
bulb.addEventListener('mousedown', startDrag);
document.addEventListener('mouseup', stopDrag);

function startDrag(e){
    offsetX = e.clientX - bulb.getBoundingClientRect().left;
    offsetY = e.clientY - bulb.getBoundingClientRect().top;
    document.addEventListener('mousemove', drag);
}

function drag(e){
    bulb.style.position = 'absolute';
    bulb.style.left = e.clientX - offsetX + 'px';
    bulb.style.top = e.clientY - offsetY + 'px';
    glow.style.left = (e.clientX - offsetX - 50) + 'px';
    glow.style.top = (e.clientY - offsetY - 50) + 'px';
}

function stopDrag(){
    document.removeEventListener('mousemove', drag);
}

// Mobile touch support
bulb.addEventListener('touchstart', (e)=>{
    const touch = e.touches[0];
    offsetX = touch.clientX - bulb.getBoundingClientRect().left;
    offsetY = touch.clientY - bulb.getBoundingClientRect().top;
}, {passive:true});

bulb.addEventListener('touchmove', (e)=>{
    const touch = e.touches[0];
    bulb.style.position = 'absolute';
    bulb.style.left = touch.clientX - offsetX + 'px';
    bulb.style.top = touch.clientY - offsetY + 'px';
    glow.style.left = (touch.clientX - offsetX - 50) + 'px';
    glow.style.top = (touch.clientY - offsetY - 50) + 'px';
}, {passive:true});
