/**
 * @param {number[]} height
 * @return {number}
 */
 var height = [10,9,8,7,6,5,4,3,2,1];

 var volume = [];

 var _maxArea = maxArea(height);

 var test = document.getElementById('test');

 document.getElementById('test').innerHTML = _maxArea;
 
 function maxArea(height) {
     var x, y;
     var flag = 0;
     var flag2 = 0;
     for (var i =0; i<height.length; i++) {
         if (i !== 0){
             flag = (height[i] > x)? 1:0;
         }
         else {
             flag = 1;
         }
         if (flag == 1){
             for (var j = height.length -1 ; j > i ; j--){
                 
                 if (j !== height.length -1) {
                     flag2 = (height[j] > y)? 1:0;
                 }
                 else {
                     flag2 = 1;
                 }
                 if (flag2 == 1){
                     var width = j - i;
                     
                     var length = Math.min(height[j], height[i]);
                     
                     var area = width * length;
                     
                     y = height[j];
                     volume.push(area);
                     
                 }
             }
             x = height[i];
         }
         
     }
     
     var maxVolume = Math.max.apply(null, volume);
     return maxVolume;
 };