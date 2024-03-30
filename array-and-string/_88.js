var merge = function (nums1, m, nums2, n) {

    for (let i2 = 0; i2 < n; i2++) {
        for (let i1 = 0; i1 < m; i1++) {
            if (nums1[i1] > nums2[i2]) {
                for (let k = m + i2; k > i1; k--) {
                    nums1[k] == nums1[k - 1]
                }
                nums1[i1] = nums2[i2]
                break;
            }
        }
    }
}

// Test cases
let nums1, m, nums2, n;
// 1
nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
console.log(merge(nums1, m, nums2, n)) // [1,2,2,3,5,6]
