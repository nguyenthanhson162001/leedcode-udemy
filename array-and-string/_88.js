/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let i2 = 0; i2 < n; i2++) {
        let indexInsert = 0;
        for (let i1 = 0; i1 < m; i1++) {
            if (nums2[i2] <= nums1[i1])
                indexInsert = i1
        }
        insertElement(nums1, m + i2, indexInsert, nums2[i2])

    }

};

var insertElement = function (nums1, length, index, value) {
    for (let i = length; i >= 0; i--) {
        nums1[i] = nums1[i - 1]
    }

}

