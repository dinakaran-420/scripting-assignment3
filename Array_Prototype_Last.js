Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : -1;
};

let nums1 = [null, {}, 3];
console.log(nums1.last());

let nums2 = [];
console.log(nums2.last());
