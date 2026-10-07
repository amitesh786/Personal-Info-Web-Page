$(function () {
    $("input").prop('required', true);
});

function showResult(message) {
    $("#resultBox").html(message);
}

// Calculate input parameters each word's frequency
function eachWordLength() {
    var lastName = $('#lastName').val().trim();
    var firstName = $('#firstName').val().trim();
    var address = $('#address').val().trim();

    if (lastName || firstName || address) {
        var text = `${lastName} ${firstName} ${address}`.trim();
        var freq = eachWordFrequency(text);

        let resultHTML = "<strong>Word Frequency:</strong><br>";
        for (let word in freq) {
            resultHTML += `${word}: ${freq[word]}<br>`;
        }
        showResult(resultHTML);
    } else {
        showResult("<span class='text-danger'>Data is empty</span>");
    }
}

function eachWordFrequency(text) {
    var count = {};
    text.split(/\s+/).forEach(function (word) {
        let lowerWord = word.toLowerCase();
        count[lowerWord] = (count[lowerWord] || 0) + 1;
    });
    return count;
}

// Longest word
function longestWord() {
    var lastName = $('#lastName').val().trim();
    var firstName = $('#firstName').val().trim();
    var address = $('#address').val().trim();

    if (lastName || firstName || address) {
        var text = `${lastName} ${firstName} ${address}`;
        var longest = longestsWord(text);
        showResult(`<strong>Longest word:</strong> ${longest}`);
    } else {
        showResult("<span class='text-danger'>Data is empty</span>");
    }
}

function longestsWord(string) {
    var words = string.split(/\s+/);
    var longest = "";
    words.forEach(function (word) {
        if (word.length > longest.length) {
            longest = word;
        }
    });
    return longest;
}

// Most common letter
function mostCommonLetter() {
    var lastName = $('#lastName').val().trim();
    var firstName = $('#firstName').val().trim();
    var address = $('#address').val().trim();

    if (lastName || firstName || address) {
        var text = (lastName + firstName + address).replace(/\s+/g, '');
        var freq = mostCommonFrequency(text);
        var common = Object.keys(freq).reduce((a, b) => freq[a] >= freq[b] ? a : b);
        showResult(`<strong>Most common letter:</strong> ${common} → ${freq[common]} times`);
    } else {
        showResult("<span class='text-danger'>Data is empty</span>");
    }
}

function mostCommonFrequency(text) {
    var count = {};
    text.split('').forEach(function (ch) {
        count[ch] = (count[ch] || 0) + 1;
    });
    return count;
}

// Extract text
function extractTextUrl() {
    var lastName = $('#lastName').val().trim();
    var firstName = $('#firstName').val().trim();
    var address = $('#address').val().trim();

    if (lastName || firstName || address) {
        var text = `${lastName} ${firstName} ${address}`;
        showResult(`<strong>Extracted text:</strong> ${text}`);
    } else {
        showResult("<span class='text-danger'>Data is empty</span>");
    }
}
