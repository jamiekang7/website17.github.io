

// mario 1 
function drawMario(x,y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    drawMarioHat(); 
    drawMarioSkinOnFace();
    drawMarioHairOnFace();
    drawMarioGreenShirt();
    drawMarioRedTrousersAndButton();
    drawMarioHands();
    drawMarioShoes();
    ctx.restore();
}

function drawMarioHat() {
    ctx.fillStyle = "#B13425";
    ctx.fillRect(6 * UNIT, 0 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 1 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 2 * UNIT, 6 * UNIT, 1 * UNIT );
    ctx.fillRect(3 * UNIT, 3 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#E39D2D";
    ctx.fillRect(9 * UNIT, 2 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(10* UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
}

function drawMarioSkinOnFace() {
     ctx.fillRect(9 * UNIT, 4 * UNIT, 3 * UNIT, 1 * UNIT);
     ctx.fillRect(10 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);
     ctx.fillRect(7 * UNIT, 6 * UNIT, 8 * UNIT, 1 * UNIT);
     ctx.fillRect(7 * UNIT, 7 * UNIT, 3 * UNIT, 1 * UNIT);
     ctx.fillRect(11  * UNIT, 7 * UNIT, 4 * UNIT, 1 * UNIT);
     ctx.fillRect(3 * UNIT, 5 * UNIT, 2  * UNIT, 4 * UNIT);
     ctx.fillRect(5 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT);
     ctx.fillRect(4 * UNIT, 9 * UNIT, 5 * UNIT, 1 * UNIT);
     ctx.fillRect(5 * UNIT, 10 * UNIT, 8 * UNIT, 1 * UNIT);
     ctx.fillRect(5 * UNIT, 11 * UNIT, 5 * UNIT, 1 * UNIT);
     ctx.fillRect(6 * UNIT, 4 * UNIT, 2 * UNIT, 2 * UNIT);
}

function drawMarioHairOnFace() {
    ctx.fillStyle = "#6A6B0F";
    ctx.fillRect(3 * UNIT, 4 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 4 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(6 * UNIT, 6 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 4 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 8 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 9 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 11 * UNIT, 1 * UNIT, 1* UNIT);
    ctx.fillRect(2 * UNIT, 5 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(1 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(3 * UNIT, 9 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 10 * UNIT, 1 * UNIT, 2 * UNIT);
}

function drawMarioGreenShirt() {
    ctx.fillRect(6 * UNIT, 12 * UNIT, 4 * UNIT, 6 * UNIT);
    ctx.fillRect(4 * UNIT, 12 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(3 * UNIT, 13 * UNIT, 1 * UNIT, 7 * UNIT);
    ctx.fillRect(2 * UNIT, 14 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(1 * UNIT, 15 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(0 * UNIT, 17 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(11 * UNIT, 12 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(12 * UNIT, 13 * UNIT, 1 * UNIT, 7 * UNIT);
    ctx.fillRect(13 * UNIT, 14 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(14 * UNIT, 15 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(15 * UNIT, 17 * UNIT, 1 * UNIT, 3 * UNIT);
}

function drawMarioRedTrousersAndButton() {
    ctx.fillStyle = "#B13425";
    ctx.fillRect(5 * UNIT, 12 * UNIT, 1 * UNIT, 7 * UNIT);
    ctx.fillRect(4 * UNIT, 16 * UNIT, 1 * UNIT, 12 * UNIT);
    ctx.fillRect(5 * UNIT, 20 * UNIT, 2 * UNIT, 6 * UNIT);
    ctx.fillRect(3 * UNIT, 23 *  UNIT, 3 * UNIT, 5 * UNIT);
    ctx.fillRect(2 * UNIT, 24 * UNIT, 4 * UNIT, 4 * UNIT);
    ctx.fillRect(1 * UNIT, 25 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(6 * UNIT, 18 * UNIT, 4 * UNIT, 7 * UNIT);
    ctx.fillRect(10 * UNIT, 12 * UNIT, 1 * UNIT, 7 * UNIT);
    ctx.fillRect(11 * UNIT, 16 * UNIT, 1 * UNIT, 12 * UNIT);
    ctx.fillRect(10 * UNIT, 20 * UNIT, 1 * UNIT, 8 * UNIT);
    ctx.fillRect(9 * UNIT, 25 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 23 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(13 * UNIT, 24 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(14 * UNIT, 25 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillStyle = "#E39D2D";
    ctx.fillRect(5 * UNIT, 19 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 19 * UNIT, 1 * UNIT, 1 * UNIT);
}

function drawMarioHands() {
    ctx.fillRect(0 * UNIT, 20 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(1 * UNIT, 22 * UNIT, 3 * UNIT, 1* UNIT);
    ctx.fillRect(1 * UNIT, 23 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 20 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 22 * UNIT, 3 * UNIT, 1 *UNIT);
    ctx.fillRect(13 * UNIT, 23 * UNIT, 2 * UNIT, 1 * UNIT);
}

function drawMarioShoes() {
    ctx.fillStyle = "#6A6B0F";
    ctx.fillRect(2 * UNIT, 28 * UNIT, 4 * UNIT, 4 * UNIT);
    ctx.fillRect(0 * UNIT, 30 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 28 * UNIT, 4 * UNIT, 4 * UNIT);
    ctx.fillRect(14 * UNIT, 30 * UNIT, 2 * UNIT, 2 * UNIT);
}

//mario 2 
function drawMario2(x,y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    drawMario2Hat();
    drawMario2SkinOnFace();
    drawMario2HairOnFace();
    drawMario2GreenShirt();
    drawMario2RedTrousers();
    drawMario2Hands();
    drawMario2Shoes();
    ctx.restore();
}

function drawMario2Hat() {
    ctx.fillStyle = "#B13425";
    ctx.fillRect(7 * UNIT, 2 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 3 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 4 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 5 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#E39D2D";
    ctx.fillRect(10 * UNIT, 4 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
}

function drawMario2SkinOnFace() {
    ctx.fillRect(7 * UNIT, 6 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 8 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 7 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 9 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 7 * UNIT, 2 * UNIT, 4 * UNIT);
    ctx.fillRect(6 * UNIT, 10 * UNIT, 3 * UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 11 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 12 * UNIT,1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 12 * UNIT, 3 * UNIT, 1 * UNIT);
}

function drawMario2HairOnFace() {
    ctx.fillStyle = "#6A6B0F";
    ctx.fillRect(4 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(7 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 6 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 10 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 11 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 7 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(2 * UNIT, 9 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
}

function drawMario2GreenShirt() {
    ctx.fillRect(4 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 14 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(2 * UNIT, 16 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(9 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 14 * UNIT, 3 * UNIT, 4 * UNIT);
    ctx.fillRect(6 * UNIT,18 * UNIT, 6 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 15 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(9 * UNIT, 16 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(10 * UNIT, 17 * UNIT, 2 * UNIT, 5 * UNIT);
    ctx.fillRect(12 * UNIT, 19 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT,23 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 25 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 26 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 20 * UNIT, 1 * UNIT, 1 * UNIT);
}

function drawMario2RedTrousers() {
    ctx.fillStyle = "#B13425"
    ctx.fillRect(5 * UNIT, 13 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 16 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 14 * UNIT, 1 * UNIT, 14 * UNIT);
    ctx.fillRect(3 * UNIT, 17 * UNIT, 1 * UNIT, 7 * UNIT);
    ctx.fillRect(5 * UNIT, 18 * UNIT, 1 * UNIT, 10 * UNIT);
    ctx.fillRect(6 * UNIT, 20 * UNIT, 1 * UNIT, 8 * UNIT);
    ctx.fillRect(7 * UNIT, 21 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(8 * UNIT, 21 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(9 * UNIT, 22 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 22 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(11 * UNIT, 22 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 21 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 26 * UNIT, 4 * UNIT , 2 * UNIT);
    ctx.fillRect(11 * UNIT, 25 * UNIT, 3 * UNIT , 1 * UNIT);
    ctx.fillRect(12 * UNIT, 24 * UNIT, 2 * UNIT, 1 * UNIT);
}

function drawMario2Hands() {
    ctx.fillStyle = "#E39D2D";
    ctx.fillRect(12 * UNIT, 16 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(13 * UNIT, 19 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 17 * UNIT, 2 * UNIT, 4 * UNIT);
}

function drawMario2Shoes() {
    ctx.fillStyle = "#6A6B0F"; 
    ctx.fillRect(0 * UNIT, 24 * UNIT, 1 * UNIT, 7 * UNIT);
    ctx.fillRect(1 * UNIT, 24 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(2 * UNIT, 24 * UNIT, 2 * UNIT, 5 * UNIT);
    ctx.fillRect(9 * UNIT, 28 * UNIT, 4 * UNIT, 4 * UNIT);
    ctx.fillRect(13 * UNIT, 30 * UNIT, 2 * UNIT, 2 * UNIT);
}

function drawMario3() {
    drawMario3Head(-1,-1);
    drawMario3GreenShirt();
    drawMario3RedTrousers();
    drawMario3Hands();
    drawMario3Shoes();
}

function drawMario3Head(x,y) {
    ctx.save();
    ctx.translate(x * UNIT,y * UNIT) ;
    ctx.fillStyle = "#B13425";
    ctx.fillRect(7 * UNIT, 2 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 3 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 4 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 5 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#E39D2D";
    ctx.fillRect(10 * UNIT, 4 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 6 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 8 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 7 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 9 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 7 * UNIT, 2 * UNIT, 4 * UNIT);
    ctx.fillRect(6 * UNIT, 10 * UNIT, 3 * UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    // ctx.fillRect(8 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 11 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 12 * UNIT,1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 12 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#6A6B0F";
    ctx.fillRect(4 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(7 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 6 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 10 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 11 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 7 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(2 * UNIT, 9 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.restore();
}

function drawMario3GreenShirt() {
    ctx.fillStyle = "#6A6B0F";
    ctx.fillRect(3 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 14 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(9 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 14 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 15 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 14 * UNIT, 4 * UNIT, 6 * UNIT);
    ctx.fillRect(5 * UNIT, 20 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 21 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
}

function drawMario3RedTrousers() {
    ctx.fillStyle = "#B13425";
    ctx.fillRect(4 * UNIT, 12 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 14 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 16 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 19 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(13 * UNIT, 20 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(11 * UNIT, 21 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 14 * UNIT, 1 * UNIT, 10 * UNIT);
    ctx.fillRect(2 * UNIT, 19 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(4 * UNIT, 20 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(5 * UNIT, 21 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(6 * UNIT, 22 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(7 * UNIT, 22 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 26 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 27 * UNIT, 2 * UNIT, 1 * UNIT);
}

function drawMario3Hands() {
    ctx.fillStyle = "#E39D2D";
    ctx.fillRect(9 * UNIT, 17 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 18 * UNIT, 4 * UNIT, 3 * UNIT);
    ctx.fillRect(8 * UNIT, 21 * UNIT, 3 * UNIT, 1 * UNIT);
}

function drawMario3Shoes() {
    ctx.fillStyle = "#6A6B0F"
    ctx.fillRect(8 * UNIT, 22 * UNIT, 2 * UNIT, 5 * UNIT);
    ctx.fillRect(6 * UNIT, 25 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 24 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(9 * UNIT, 27 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 28 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 23 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(11 * UNIT, 24 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 27 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(4 * UNIT, 29 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 28 * UNIT, 3 * UNIT, 4 * UNIT);
    ctx.fillRect(9 * UNIT, 30 * UNIT, 2 * UNIT, 2 * UNIT);
}