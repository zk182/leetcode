
const dirs = [
    [1,0], // up
    [-1,0], // down
    [0,1], // right
    [0,-1] //left
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let area = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    if (!rows) {
        return area;
    }

    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            if (grid[i][j] !== 1) { continue; } 

            let land = [[i,j]];
            let actualArea = 1;
            grid[i][j] = 0;

            while (land.length) {
                const [r,c] = land.pop();
                for (const [x,y] of dirs) {
                    const newX = x + r;
                    const newY = c + y;

                    if (newX < 0 || newX >= rows) { continue; }
                    if (newY < 0 || newY >= cols) { continue; }

                    if (grid[newX][newY] == 1) {
                        land.push([newX, newY]);
                        actualArea ++;
                        grid[newX][newY] = 0; //cambio pintura para que no vuelva a caer;
                    }
                }
            }
            area = Math.max(area, actualArea);
        }
    }

    return area;
};