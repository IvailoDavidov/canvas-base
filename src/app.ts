
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';

const WIDHT = canvas.width;
const HEIGHT = canvas.height;


grid();

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
