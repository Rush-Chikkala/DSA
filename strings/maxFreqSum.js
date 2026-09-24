// This problem requires finding the most frequently occurring vowel and consonant characters in a string, and returning the sum of their frequencies.

// Steps
// Initialize a character frequency map using a loop.
// Define a list of vowels: ['a', 'e', 'i', 'o', 'u'].
// Traverse the string and count how often each character appears.
// Track the highest frequency vowel and the highest frequency consonant.
// Return the sum of those two highest values
var maxFreqSum = function (s) {
    const map = {}
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    let maxVowels = 0
    let maxConsonant = 0

    for (const char of s) {
        map[char] = (map[char] || 0) + 1

        if (vowels.has(char)) {
            maxVowels = Math.max(maxVowels, map[char])
        } else {
            maxConsonant = Math.max(maxConsonant, map[char])
        }
    }

    return maxVowels + maxConsonant
}