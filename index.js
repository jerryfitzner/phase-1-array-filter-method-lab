// Code your solution here

function findMatching(array, string){
    return array.filter(function(match){
        return match.toLowerCase() === string.toLowerCase()
    })
};

function fuzzyMatch(array, string){
    return array.filter(function(beg){
        return beg.indexOf(string) === 0
    })
};

function matchName(array, string){
    return array.filter(function(test){
        return test.name === string;
    })

}