function rot13(r) {
  r = r.split("");
  var t = "";
  for (i = 0; i < r.length; i++)
    if (/[^A-Z]/.test(r[i])) t += r[i];
    else {
      var e = r[i].charCodeAt(0);
      e > 77 ? (e -= 13) : (e += 13), (t += String.fromCharCode(e));
    }
  return t;
}

console.log(rot13("SERR PBQR PNZC"));
