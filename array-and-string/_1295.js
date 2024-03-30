/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {


    //  option 1 


    // let count = 0
    // for (let num of nums){
    //     if(String(num).length % 2 == 0) count ++
    // }
    // return count 

    // option 2

    let count = 0
    for (let num of nums) {
        let countEven = 0
        let division = num
        while (division != 0) {
            division = Math.floor(division / 10)
            countEven++
        }
        if (countEven % 2 == 0) count++
    }
    return count

    // option 3

    // return nums.reduce((count, num) => {
    //     if (String(num).length % 2 == 0) count++
    //     return count
    // }, 0)
};