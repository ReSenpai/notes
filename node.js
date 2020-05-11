function truncateString(str, num) {

  return num < str.length ? `${str.slice(0, num)}...` : str;


}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
