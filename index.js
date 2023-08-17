nums = [0,1,0,3,12];

for(let i=0; i < nums.length; i++){
    if(nums[i] === 0){
        nums.splice(i,1);
        nums.push(0);
    }
    
}
console.log(nums);