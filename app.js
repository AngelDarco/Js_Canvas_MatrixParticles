import {myImage} from './img.js';

myImage.addEventListener('load', function(){

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 528;
canvas.height = 528;

/* ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
 */

let particlesArray = [];
const numberOfParticles = 5000;

let mappedImage = [];

for (let y = 0; y < canvas.height; y++) {
    const row = [];
for (let x = 0; x < canvas.width; x++) {
    const red = pixels.data[(y*4*pixels.width)+(x*4)];
    const green = pixels.data[(y*4*pixels.width)+(x*4+1)];
    const blue = pixels.data[(y*4*pixels.width)+(x*4+2)];
    const brightness = calculateRelativeBrightness(red, green, blue);
    const cell = [ cellBrightness = brightness];
    row.push( cell);
    
    }
}












class Particles{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 10;
        this.velocity = Math.random() * 3.5;
        this.size = Math.random() * 1.5 + 1;
    }

    update(){
        this.y += this.velocity;
        if (this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
        }
}


function init(){
    for(let i = 0; i < numberOfParticles; i++){
        particlesArray.push(new Particles);
    }
}

init();


function animate(){
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}


animate();
});