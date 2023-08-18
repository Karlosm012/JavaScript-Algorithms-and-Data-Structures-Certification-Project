function telephoneCheck(str) {
  if (!str.match(/^(1 |1)?((\d{3})|(\(\d{3}\)))(-| |)(\d{3})(-| |)(\d{4})$/))
    return false;

  return true;
}
