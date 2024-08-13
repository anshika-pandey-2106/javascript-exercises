const reverseString = function(string) {
let arr=string.slice("");
let newarr=[];
let j=0;
for(let i=(arr.length)-1; i>=0;i--)
{
 newarr[j]=arr[i];
 j++;

}
let newString= newarr.join("");
return newString;
};

// Do not edit below this line
module.exports = reverseString;
