class Piece {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.color = 'blue';
        this.shape = [
            [2, 0, 0],
            [2, 2, 2],
            [0, 0, 0]
        ];

        // Starting position.
        this.x = x;
        this.y = y;

    }


    one_1(valuefromuotside) {
        this.x = valuefromuotside;
    }


}

