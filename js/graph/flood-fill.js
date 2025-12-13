const dirs = [
    [1, 0],   // abajo
    [-1, 0],  // arriba
    [0, 1],   // derecha
    [0, -1]   // izquierda
];

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, color) {
    const originalColor = image[sr][sc];
    const rows = image.length;
    const cols = image[0].length;

    if (color === originalColor) {
        return image;
    }
    
    // visit first point
    image[sr][sc] = color;
    let points = [[sr,sc]];

    while (points.length) {
        adjustAdjacents(image, points, color, originalColor)
    }    
    return image;
};

function adjustAdjacents(image, points, color, originalColor) {
    const [sr, sc] = points.pop();
    for ([dr, dc] of dirs) { // voy uno a uno en las posibles nuevas dirs
        const nr = dr + sr; //newrow
        const nc = dc + sc; //newcolumn

        if (nr < 0 || nr >= image.length) { continue; }
        if (nc < 0 || nc >= image[0].length) { continue; }
        
        if (image[nr][nc] == originalColor) {
            image[nr][nc] = color; // cambio de color
            points.push([nr,nc]);
        }
    }
}
