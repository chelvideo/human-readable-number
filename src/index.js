module.exports = function toReadable(number) {
    const str_0_9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const str_11_19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const strTens = [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let res = [];
    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number - hundreds * 100) / 10);
    const units = number - hundreds * 100 - tens *10;

    if (hundreds > 0) res.push(`${str_0_9[hundreds]} hundred`);
    if (tens == 1)  res.push(`${str_11_19[units]}`);
    if (tens > 1)  res.push(`${strTens[tens]}`);
    if (units > 0 && tens != 1) res.push(`${str_0_9[units]}`);
    if (number == 0) res.push(`${str_0_9[0]}`);

    return res.join(' ');

}