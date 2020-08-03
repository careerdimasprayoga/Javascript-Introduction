function palindrome(string){
    let reverseString = '';
    for(let k in string){
       reverseString += string[(string.length - k) - 1];
    }
  if(string === reverseString){
    console.log('Kata Palindrom');
  } else {
    console.log('Kata Bukan Palindrom');
  }
}
palindrome('sas');