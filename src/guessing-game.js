class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min1=min;
        this.max1=max;
        this.medium = 0;
    }

    guess() {
        this.medium = Math.ceil((this.min1+this.max1)/2);
        return this.medium;
    }

    lower() {
        this.max1 = this.medium
    }

    greater() {
        this.min1 = this.medium 
    }
}

module.exports = GuessingGame;
