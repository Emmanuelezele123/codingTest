function checkPalindrome(arr) {
  var current, number, divider;
  var broken = 0;
  var originalLength = arr.length;
  for (var i = 0; i < arr.length; i++) {

    current = arr[i].split("");
    number = current.length - 1;
    divider = Math.floor(number / 2);
    for (var j = 0; j < divider; j++) {

      if (current[j] == current[j + number]) {



      } else {
        broken++;
        break;

      }





    }



  }

  return originalLength - broken;
}
