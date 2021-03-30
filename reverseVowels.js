//amazon
//omazon
//

function reverseVowels(a) {
    let choppedVowels = [];
    let constraint = [];
    let result = [];
    let vowels = "aeiou".split("");
    const len = a.length;
    for (let i = 0; i < len; i++) {
        let chopped = "";
        if (vowels.includes(a[i])) {
            choppedVowels.push(a.slice(i, i + 1));
        } else {
            constraint.push(a.slice(i, i + 1));
        }
    }
    choppedVowels.reverse();

    let j = 0;
    let k = 0;
    for (let i = 0; i < len; i++) {
        if (vowels.includes(a[i])) {
            result.push(choppedVowels[j]);
            j += 1;
        } else {
            result.push(constraint[k]);
            k += 1;
        }
    }
    return result.join("");
}
console.log(reverseVowels("amazon"));
console.log(reverseVowels("hello"));