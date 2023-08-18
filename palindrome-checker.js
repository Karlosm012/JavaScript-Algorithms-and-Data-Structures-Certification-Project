function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  let start = 0;
  let end = str.length - 1;
  
  while (start !== end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    }
    else
      return false;
  }
  
  return true;
}
