
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const WIDHT = canvas.width;
const HEIGHT = canvas.height;

const LIGHT = 'rgb(255, 206, 158)';
const DARK = 'rgb(209, 139, 71)';


grid();
frame();

function smiley(){
    
}

function frame() {
    // ctx.fillRect(100,100,600,400)

    ctx.beginPath();
    ctx.lineWidth = 50;
    ctx.strokeStyle = DARK;
    ctx.strokeRect(75,75,450,450);
    ctx.closePath();
   
 
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.strokeRect(100,100,400,400)
 
}

function grid() {
    for (let y = 20; y < HEIGHT; y += 20) {
        horizontalLine(y);
    }

    for (let x = 20; x < WIDHT; x += 20) {
        verticalLine(x);
    }
}

function horizontalLine(y: number) {
    ctx.save();
    ctx.strokeStyle = `rgba(0, 0, 0, ${y % 100 == 0 ? 0.5 : 0.2})`;

    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(WIDHT, y)
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
}

function verticalLine(x: number) {
    ctx.save();
    ctx.strokeStyle = `rgba(0, 0, 0, ${x % 100 == 0 ? 0.5 : 0.2})`;

    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, HEIGHT)
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
}
