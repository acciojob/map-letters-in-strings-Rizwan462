//your JS code here. If required.
function letterMap(word){
	const letter = {};

for(let i = 0; i<word.length; i++){
	const letterWord = word[i];

	if(!(letterWord in letter)){
		letter[letterWord] = [];
	}
	letterMap[letterWord].push(i);
}
	return letter
}
console.log(mapLetters("dodo"));   
console.log(mapLetters("froggy")); 
console.log(mapLetters("grapes"));