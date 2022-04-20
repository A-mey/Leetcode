var removeDuplicates = function(nums) {
    for (var i=0; i<nums.length; i++) {
        if (i!=0) {
            if (nums[i] == nums[i-1]) {
                nums.splice(i, 1);
                i--;
            }
        }
    }
};