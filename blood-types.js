function canGiveBlood(bt1, bt2) {
  if (bt1.charAt(1) == "-") {
    if (bt1.charAt(0) == "O") {
      return true;
    } else if (bt1.charAt(0) == "A") {
      if (bt2.charAt(0) == "A" || bt2 == "AB+") {
        return true;
      } else {
        return false;
      }
    }
  } else if (bt1.charAt(0) == "B") {
    if (bt2.charAt(0) == "B" || bt2.charAt(1) == "B") {
      return true;
    } else {
      return false;
    }
  } else if (bt1.charAt(1) == "+") {
    if (bt1.charAt(0) == "O") {
      if (bt2.charAt(1) == "+" || bt2.charAt(2) == "+") {
        return true;
      } else {
        return false;
      }
    }
  } else if (bt1.charAt(0) == "A") {
    if (bt2 == "A+" || bt2 == "AB+") {
      return true;
    } else {
      return false;
    }
  } else if (bt1.charAt(0) == "B") {
    if (bt2 == "B+" || bt2 == "AB+") {
      return true;
    } else {
      return false;
    }
  } else if (bt1 == "AB+") {
    if (bt2 == "AB+") {
      return true;
    } else {
      return false;
    }
  } else if (bt1 == "AB-") {
    if (bt2 == "AB+" || bt2 == "AB-") {
      return true;
    } else {
      return false;
    }
  }
}

var a = canGiveBlood("O-", "A+");
var b = canGiveBlood("A-", "B+");
var c = canGiveBlood("A-", "AB+");

console.log(a);
console.log(b);
console.log(c);
