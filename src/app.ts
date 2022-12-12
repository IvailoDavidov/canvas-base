import { initCanvas } from "./Canvas";

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = initCanvas(canvas);

ctx.grid();
ctx.frame();
ctx.smiley();
ctx.checker();
ctx.labels();
ctx.draw();