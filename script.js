//your JS code here. If required.
function mapLetter(word){
	const letterMap = {};

for(let i = 0; i<word.length; i++){
	const letter = word[i];

	if(!(letter in letterMap)){
		letterMap[letter] = [];
	}
	letterMap[letter].push(i);
}
	return letterMap;
}
console.log(mapLetters("dodo"));   
console.log(mapLetters("froggy")); 
console.log(mapLetters("grapes"));