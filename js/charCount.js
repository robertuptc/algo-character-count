exports.charCount = function(str) {
    let splitString = str.replace(/[" "]/g,"").split('');
    let obj = {};
    let answer = []    ;
   
    for (let i = 0; i < splitString.length; i++) {
        if (!obj.hasOwnProperty([splitString[i]])) {
            obj[splitString[i]] = 1;
        } else {
            obj[splitString[i]] += 1;
        }
    } 
    
    let arrOfObj = Object.keys(obj).map(e => ({letter : e, count : obj[e]}))

    let sortDirection = -1
    sortedObj = arrOfObj.slice().sort(function(a,b) {
        if (a.count > b.count) {return sortDirection}     
        if (a.count < b.count) {return -sortDirection}
        if (a.count == b.count) {
            if (a.letter < b.letter) {return -1}
            if (a.letter > b.letter) {return 1}
        }
    })

    for (let i = 0; i < sortedObj.length; i++) {
        answer.push(Object.values(sortedObj[i]))
    }
    return answer
};



