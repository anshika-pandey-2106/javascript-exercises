const repeatString = function(string, num) {
    let word="";

    let i=0;
    if (num==0) return "";
    else if(num<0) return "ERROR";
    else {
        do {
        word+=string;
        i++;

    } while (i<num);
    return word;
}

};

// Do not edit below this line
module.exports = repeatString;
