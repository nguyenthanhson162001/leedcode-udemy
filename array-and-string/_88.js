/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    for (let i2 = 0; i2 < n; i2++) {
        const indexInsert = 0;
        for (let i1 = 0; i1 < m; i1++) {

        }
        insertElement(nums1, indexInsert, nums2[i2])

    }

};

var insertElement = function (nums1, index, value) {
    for (let i1 = 0; i1 < m; i1++) {

        for (let k = m + i2; k > i1; k--) {
            nums1[k] == nums1[k - 1]
        }
        nums1[i1] = nums2[i2]
        break;
    }

}