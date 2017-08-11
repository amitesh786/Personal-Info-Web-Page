$(function(){
       $("input").prop('required',true);
});

// Calculate input parameters each words length
function eachWordLength() {
    var lastName = $('#lastName').val();
    var firstName = $('#firstName').val();
    var address = $('#address').val();
    if (lastName || firstName || address) {
        var totalInput = lastName + firstName + address;
        console.log("Each word with there frequency: ");
        console.log(eachWordFrequency(totalInput));        
    }else {
        console.log("Data is empty");
    }
}

// get the value for every string frequency
function eachWordFrequency(text) {
    var count = {};
    text.split('').forEach(function(s) {
        count[s] = count[s] ? count[s]+1 : 1;
    });
    return count;
}

// Calculate input parameters longest word
function longestWord() {
    var lastName = $('#lastName').val();
    var firstName = $('#firstName').val();
    var address = $('#address').val();
    if (lastName || firstName || address) {
        var string = lastName + " " + firstName + " " + address;
        var long = longestsWord(string);
        console.log("Longest word in all input fields: " +long);
    }else {
        console.log("Data is empty");
    }    
}

// Call this function to get longest string
function longestsWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

// Most common letter in the input parameters
function mostCommonLetter() {
    var lastName = $('#lastName').val();
    var firstName = $('#firstName').val();
    var address = $('#address').val();
    if (lastName || firstName || address) {
        var longCommon = lastName + firstName + address;
        var objectLetter = {};
        objectLetter = mostCommonFrequency(longCommon);
        var textCommon = Object.keys(objectLetter).reduce(function(a, b){ return objectLetter[a] >= objectLetter[b] ? a : b });
        console.log("Most common letter: " + textCommon + " -> " +objectLetter[textCommon]);        
    }else {
        console.log("Data is empty");
    }
}

function mostCommonFrequency(text) {
    var count = {};
    text.split('').forEach(function(s) {
        count[s] = count[s] ? count[s]+1 : 1;
    });
    return count;
}

// Extract text field inside input parameters 
function extractTextUrl() {
    var lastName = $('#lastName').val();
    var firstName = $('#firstName').val();
    var address = $('#address').val();
    if (lastName || firstName || address) {
        this.extractTextUrl = lastName + " " + firstName + " " + address;
        console.log("Extract text only for input fields: " +this.extractTextUrl);
    }else {
        console.log("Data is empty");
    }
}
