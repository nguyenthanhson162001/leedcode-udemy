/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
    for (let i2 = 0; i2 < n; i2++) {
        let indexInsert = m + i2;
        for (let i1 = 0; i1 < m + i2; i1++) {
            if (nums2[i2] <= nums1[i1]) {
                indexInsert = i1
                break
            }

        }
        insertElement(nums1, m + i2, indexInsert, nums2[i2])
    }
};

const insertElement = function (nums1, length, index, value) {
    for (let i = length; i > index; i--) {
        nums1[i] = nums1[i - 1]
    }
    nums1[index] = value
}

