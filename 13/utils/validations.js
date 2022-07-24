function rgbCheck(code) {
    return /^(25[0-5]|2[0-4]\d|1([0-9]){1,2}|\d\d?),\s*(25[0-5]|2[0-4]\d|1([0-9]){1,2}|\d\d?),\s*(25[0-5]|2[0-4]\d|1([0-9]){1,2}|\d\d?)$/.test(code);
}
function rgbaCheck(code) {
    return /^(25[0-5]|2[0-4]\d|1([0-9]){1,2}|\d\d?),\s*(25[0-5]|2[0-4]\d|1([0-9]){1,2}|\d\d?),\s*(25[0-5]|2[0-4]\d|1([0-9]){1,2}|\d\d?),\s*[0?1?]$/.test(code);
}
function hexCheck(code) {
    return /^#[0-9A-F]{6}$/.test(code);
}
function nameCheck(code) {
    return /^[a-zA-Z]+$/.test(code);
}