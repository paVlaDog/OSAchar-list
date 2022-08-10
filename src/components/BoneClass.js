import React from 'react';

class BoneClass {

    constructor(val) {
        this.val = val;
        this.order = ["Эээ, куда", "0", "1к4", "1к6", "1к8", "1к10", "1к12", "Эээ, куда"];
    }
    get() {
        return this.val;
    }
    set(val) {
        this.val = val;
    }
    nextVal() {
        return this.order[this.order.indexOf(this.val) + 1];
    }
    prevVal() {
        return this.order[this.order.indexOf(this.val) - 1];
    }
    // midVal() {
    //     if (this.val.length === 4 && this.val[1] === "к") {
    //         return (+this.val[2] + 1) / 2;
    //     } else if (this.val.length === 3 && this.val[1] === "к") {
    //         return (+this.val[2] * 10 + +this.val[3] + 1) / 2;
    //     } else {
    //         return +this.val[0];
    //     }
    // }
}

export default BoneClass;