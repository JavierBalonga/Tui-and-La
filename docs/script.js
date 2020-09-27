var environment = new Environment("tui-la")

var tui = new Model(environment);
var white = {};
white["stroke"] = "black";
white["stroke-width"] = "0.7";
white["fill"] = "white";
white["filter"] = "url(#shadow)";
var black = {};
black["stroke"] = "black";
black["stroke-width"] = "0.7";
black["fill"] = "black";
black["filter"] = "url(#shadow)";
tui.addBodyPart("leftUpperFin", "M-12.6, 22.68 C-19.45, 25.19 -23.31, 28.19 -25.29, 29.99 C-27.51, 31.99 -27.4, 32.5 -25.86, 33.43 C-24.39, 34.32 -21.61, 35.6 -12.74, 36.14", "rigid", white);
tui.addBodyPart("rightUpperFin", "M12.60, 22.68 C19.45, 25.19 23.31, 28.19 25.3, 29.99 C27.52, 31.99 27.41, 32.5 25.86, 33.43 C24.39, 34.32 21.61, 35.6 12.74, 36.14", "rigid", white);
tui.addBodyPart("leftBottomFin", "M-8.46, 68.24 C-13.75, 73.07 -13.86, 77.12 -13.78, 79.22 C-13.69, 81.52 -13.37, 81.46 -11.59, 80.35 C-10.22, 79.51 -8, 78.04 -6.35, 76.49", "rigid", white);
tui.addBodyPart("rightBottomFin", "M8.47, 68.24 C13.75, 73.07 13.87, 77.12 13.78, 79.22 C13.69, 81.52 13.37, 81.46 11.59, 80.35 C10.22, 79.51 8.00, 78.04 6.36, 76.49", "rigid", white);
tui.addBodyPart("body", "M-4.47, 113.14 C-0.30, 115.15 -0.07, 111.59 -0.17, 107.28 C1.32, 114.56 0.87, 127.03 -1.65, 133.11 C0.48, 135.13 1.76, 138.21 2.19, 142.33 C4.65, 132.42 5.41, 122.69 3.25, 111.35 C1.99, 104.7 1.57, 98.83 2.05, 93.91 C2.54, 88.99 3.92, 85.02 5.70, 78.81 C7.49, 72.61 9.68, 64.17 11.08, 54.41 C12.49, 44.65 13.11, 33.57 12.79, 25.74 C12.46, 17.91 11.19, 13.33 9.60, 9.67 C8.00, 6 6.07, 3.24 4.41, 1.89 C2.75, 0.54 1.38, 0.6 0, 0.6 C-1.38, 0.6 -2.76, 0.54 -4.41, 1.89 C-6.06, 3.24 -7.99, 6 -9.59, 9.67 C-11.19, 13.33 -12.46, 17.91 -12.78, 25.74 C-13.11, 33.57 -12.49, 44.65 -11.08, 54.41 C-9.67, 64.17 -7.48, 72.61 -5.70, 78.81 C-3.91, 85.02 -2.54, 88.99 -2.05, 93.91 C-1.57, 98.83 -1.98, 104.7 -4.47, 113.14", "soft", white);
tui.addBodyPart("leftEye", "M-6.31, 8.94 C-7.36, 10.01 -8.10, 11.48 -8.52, 13.34 C-7.06, 12.95 -5.93, 10.81 -6.41, 7.55", "rigid", black);
tui.addBodyPart("rightEye", "M6.31, 8.94 C7.37, 10.01 8.10, 11.48 8.53, 13.34 C7.06, 12.95 5.94, 10.81 6.42, 7.55", "rigid", black);
tui.addBodyPart("headPoint", "M0, 10.03 C2.76, 10.03 5.51, 11.46 6.76, 14 C8.00, 16.53 7.72, 20.17 6.34, 22.82 C4.96, 25.47 2.48, 27.12 0, 27.12 C-2.48, 27.12 -4.96, 25.47 -6.34, 22.82 C-7.72, 20.17 -7.99, 16.53 -6.75, 14 C-5.51, 11.46 -2.76, 10.03 0, 10.03", "rigid", black);
tui.easySkeleton()

var la = new Model(environment);
var negativeWhite = {};
negativeWhite["stroke"] = "white";
negativeWhite["stroke-width"] = "0.7";
negativeWhite["fill"] = "black";
negativeWhite["filter"] = "url(#shadow)";
var negativeBlack = {};
negativeBlack["stroke"] = "white";
negativeBlack["stroke-width"] = "0.7";
negativeBlack["fill"] = "white";
negativeBlack["filter"] = "url(#shadow)";
la.addBodyPart("leftUpperFin", "M-12.6, 22.68 C-19.45, 25.19 -23.31, 28.19 -25.29, 29.99 C-27.51, 31.99 -27.4, 32.5 -25.86, 33.43 C-24.39, 34.32 -21.61, 35.6 -12.74, 36.14", "rigid", negativeWhite);
la.addBodyPart("rightUpperFin", "M12.60, 22.68 C19.45, 25.19 23.31, 28.19 25.3, 29.99 C27.52, 31.99 27.41, 32.5 25.86, 33.43 C24.39, 34.32 21.61, 35.6 12.74, 36.14", "rigid", negativeWhite);
la.addBodyPart("leftBottomFin", "M-8.46, 68.24 C-13.75, 73.07 -13.86, 77.12 -13.78, 79.22 C-13.69, 81.52 -13.37, 81.46 -11.59, 80.35 C-10.22, 79.51 -8, 78.04 -6.35, 76.49", "rigid", negativeWhite);
la.addBodyPart("rightBottomFin", "M8.47, 68.24 C13.75, 73.07 13.87, 77.12 13.78, 79.22 C13.69, 81.52 13.37, 81.46 11.59, 80.35 C10.22, 79.51 8.00, 78.04 6.36, 76.49", "rigid", negativeWhite);
la.addBodyPart("body", "M-4.47, 113.14 C-0.30, 115.15 -0.07, 111.59 -0.17, 107.28 C1.32, 114.56 0.87, 127.03 -1.65, 133.11 C0.48, 135.13 1.76, 138.21 2.19, 142.33 C4.65, 132.42 5.41, 122.69 3.25, 111.35 C1.99, 104.7 1.57, 98.83 2.05, 93.91 C2.54, 88.99 3.92, 85.02 5.70, 78.81 C7.49, 72.61 9.68, 64.17 11.08, 54.41 C12.49, 44.65 13.11, 33.57 12.79, 25.74 C12.46, 17.91 11.19, 13.33 9.60, 9.67 C8.00, 6 6.07, 3.24 4.41, 1.89 C2.75, 0.54 1.38, 0.6 0, 0.6 C-1.38, 0.6 -2.76, 0.54 -4.41, 1.89 C-6.06, 3.24 -7.99, 6 -9.59, 9.67 C-11.19, 13.33 -12.46, 17.91 -12.78, 25.74 C-13.11, 33.57 -12.49, 44.65 -11.08, 54.41 C-9.67, 64.17 -7.48, 72.61 -5.70, 78.81 C-3.91, 85.02 -2.54, 88.99 -2.05, 93.91 C-1.57, 98.83 -1.98, 104.7 -4.47, 113.14", "soft", negativeWhite);
la.addBodyPart("leftEye", "M-6.31, 8.94 C-7.36, 10.01 -8.10, 11.48 -8.52, 13.34 C-7.06, 12.95 -5.93, 10.81 -6.41, 7.55", "rigid", negativeBlack);
la.addBodyPart("rightEye", "M6.31, 8.94 C7.37, 10.01 8.10, 11.48 8.53, 13.34 C7.06, 12.95 5.94, 10.81 6.42, 7.55", "rigid", negativeBlack);
la.addBodyPart("headPoint", "M0, 10.03 C2.76, 10.03 5.51, 11.46 6.76, 14 C8.00, 16.53 7.72, 20.17 6.34, 22.82 C4.96, 25.47 2.48, 27.12 0, 27.12 C-2.48, 27.12 -4.96, 25.47 -6.34, 22.82 C-7.72, 20.17 -7.99, 16.53 -6.75, 14 C-5.51, 11.46 -2.76, 10.03 0, 10.03", "rigid", negativeBlack);
la.easySkeleton()

var mauseX = window.innerWidth / 2;
var mauseY = window.innerHeight / 2;
function mausePos(e) {
    if (!e.clientX ||!e.clientY || e.clientX < 15 || e.clientY  < 15 || e.clientX > window.innerWidth - 15 || e.clientY > window.innerHeight - 15) {
        mauseX = window.innerWidth / 2;
        mauseY = window.innerHeight / 2;
    } else {
        mauseX = e.clientX
        mauseY = e.clientY
    }
}

la.skeleton.move(mauseX, mauseY);
tui.skeleton.move(mauseX, mauseY);

var angle = 0
function rotate() {
    angle += 2 / 180 * Math.PI;
    tui.move(mauseX + 100 * Math.cos(angle), mauseY + 100 * Math.sin(angle));
    la.move(mauseX + 100 * Math.cos(angle + Math.PI), mauseY + 100 * Math.sin(angle + Math.PI));
    environment.render();
}

window.onmousemove = mausePos
window.onresize = mausePos
setInterval("rotate()", 42)