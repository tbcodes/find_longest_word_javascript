//Algorithm number 1:

function findLongestWord(str) {
    let words = str.split(" ");
    // console.log(words);
    let myLongestWord = "";
    for(let word of words) {
      if(word.length > myLongestWord.length) {
        myLongestWord = word;
      }
    }
    return myLongestWord;
    
  }
  
  console.log(findLongestWord("Hi Michael ! It's nice to meet you !"))


//Algorithm number 2:
  function findLongestWord(str) {
	let words = str.split(" ");
    let myLongestWord = "";
    for(let i = 0; i < words.length; i++) {
  	    if(words[i].length > myLongestWord.length) {
    	    myLongestWord = words[i];
        }
    }
    return myLongestWord;
}

console.log(findLongestWord("Hola mi mundito cruel"));


//Algorithm number 3:
function longestWord(stringInput) {
	let arr = stringInput.split(" ");
	// We have to sort our Array based on the number of characters
	// That's a sorting function that considers the length of string as the sorting criteria
	arr.sort(function(a,b) {
		return (b.length - a.length);
		
	});

	// La parte anterior con Arrow Function
	// arr.sort((a, b) => b.length - a.length);
	// console.log(`The longest word is: ${arr[0]}`);
	console.log("The longest word issss: " + arr[0]);
	document.write("The longest word issss: " + arr[0]);
};

longestWord("Hola completamentemente querido señor Magallanes!");


//Algorithm number 4:
function longestWord(string) {
    let str = string.split(" ");
  //   console.log(str);
    let countWords = 0;
    let word = "";
    str.forEach(function(str) {
      if(str.length > countWords) {
        countWords = str.length;
        word = str;
      }
    });
    return word;
  }
  
  console.log(longestWord("Hi there ! How are you today ?"));


//Algorithm number 5:
  function whatsLonger(str1, str2) {
  
    return(str2.length > str1.length) ? str2 : str1;
  }
  
  function longestWord(str) {
    let words = str.split(" ");
    return words.reduce(whatsLonger);
  }
  
  console.log(longestWord("Hola querido amigo !"));


//Algorithm number 6 | BONUS - Find ALL Longest Words/Strings:
  function allLongestWords(str) {
    let words = str.split(" ");
    let size = 0;
    let max = [""];
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length >= size) {
  //       console.log(words[i])
        size = words[i].length;
        if (max[max.length - 1].length < words[i].length) {
          max = [];
          max.push(words[i]);
        } else {
          max = [...max, words[i]];
        }
      }
    }
    return max;
  }
  
  console.log(allLongestWords("Un saludo para el señor Caleta"));
  console.log(allLongestWords("Hi ! We are Ricardo and Michael"));


//Algorithm number 6.1 (for of) | BONUS - Find ALL Longest Words:
  function findLongestWord(str) {
    let words = str.split(" ");
    var allWords = [""];
//     let myLongestWord = "";
    for(let word of words) {
      if(word.length > allWords[0].length) {
//         allWords = word;
        allWords = [word];
      } 
      else if (word.length === allWords[0].length) {
        allWords.push(word);
      }
    }
    return allWords;
    
  }
  
  console.log(findLongestWord(
    "Hi Michael Nice to meet you, Rodrigo and Ricardo !"))

//Algorithm number 6.2 (map() + filter()) | BONUS - Find ALL Longest Words:
    function findLongestWord(str) {
      let words = str.split(" ");
      let maxSize = Math.max(...words.map(word => word.length));
      return words.filter(word => word.length === maxSize);
    //   return maxSize;

    }  
      console.log(findLongestWord(
        "Hi Samanta Nice to meet you, Ronaldo and Adolfow !"))