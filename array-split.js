const nums = [1,2,3,4,5,6,7,8,9];
//const part = nums.slice(2, 5);
const removed = nums.splice(3, 7, 71, 93, 14);
console.log(removed);
console.log(nums);