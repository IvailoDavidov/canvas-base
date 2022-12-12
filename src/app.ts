
const LIGHT = 'rgb(255, 206, 158)';
const DARK = 'rgb(209, 139, 71)';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const WIDHT = canvas.width;
const HEIGHT = canvas.height;

type ColorType = 'light' | 'dark';

grid();
frame();
smiley();
checker();
labels();


function labels() {
    const textLabel = 'abcdefgh';
    const numberLabel = '87654321';

    let firstTextX = 125;
    let firstTextY = 75;

    let secTextX = 125;
    let secTextY = 525;

    let firstNumX = 75;
    let firstNumY = 125;

    let secNumX = 525;
    let secNumY = 125

    ctx.beginPath();
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < textLabel.length; i++) {
        ctx.fillText(`${textLabel[i]}`, firstTextX, firstTextY);
        ctx.fillText(`${textLabel[i]}`, secTextX, secTextY);
        ctx.fillText(`${numberLabel[i]}`, firstNumX, firstNumY);
        ctx.fillText(`${numberLabel[i]}`, secNumX, secNumY);
        firstTextX += 50;

        secTextX += 50;
        firstNumY += 50;
        secNumY += 50;
    }
    ctx.closePath();
}

function checker() {

    let x = 1;
    for (let i = 0.01; i <= 8; i++) {
        for (let j = 0.01; j <= 8; j++) {
            rect(i, j, `${x % 2 === 0 ? 'dark' : 'light'}`);
            x++;
        }
        x++;
    }
}


function rect(file: number, rank: number, color: ColorType) {
    const x = file * 50 + 100
    const y = rank * 50 + 100

    let style = '';

    if (color == 'dark') {
        style = DARK;
    } else if (color == 'light') {
        style = LIGHT;
    }

    ctx.beginPath();
    ctx.lineWidth = 0.01;
    ctx.fillStyle = style;
    ctx.strokeRect(x, y, 50, 50);
    ctx.fillRect(x, y, 50, 50)
    ctx.closePath();
}


function smiley() {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black'
    ctx.arc(700, 100, 80, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(670, 70, 10, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(730, 70, 10, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(700, 100, 60, 0, Math.PI)
    ctx.stroke();
    ctx.closePath();

}

function frame() {
    ctx.beginPath();
    ctx.lineWidth = 50;
    ctx.strokeStyle = DARK;
    ctx.strokeRect(75, 75, 450, 450);
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'black';
    ctx.strokeRect(100, 100, 400, 400)
    ctx.closePath();
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
