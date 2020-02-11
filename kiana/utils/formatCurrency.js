/**
 * 格式化金钱数字
 * @param {number} num
 */
export function formatCurrency(num, noFixed) {
    if (!num) {
        return "";
    }
    num = num.toString().replace(/\$|\,/g, "");
    if (isNaN(num)) num = "0";
    const sign = +num === (num = Math.abs(num));
    num = Math.floor(num * 100 + 0.50000000001);
    let cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10) cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
        num =
            num.substring(0, num.length - (4 * i + 3)) +
            "," +
            num.substring(num.length - (4 * i + 3));
    }
    if (noFixed) {
        return (sign ? "" : "-") + num;
    } else {
        return (sign ? "" : "-") + num + "." + cents;
    }
}
