function evenify(num){
    if (num % 2 == 0) {
        console.log(num, ': is a even number');
    }
    else{
        console.log(num*2, ': is a odd number');
    }
}
nums = [5, 18, 34, 56, 47, 52, 88];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    evenify(num)
}
friend_age = [32, 31, 36, 30, 39, 42, 48, 51];
// for (let i = 0; i < friend_age.length; i++) {
//     const age = friend_age[i];
//     evenify(age);
// }
evenify(friend_age);