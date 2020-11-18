function convertHex(c) {
    
    var res = c.toString(16);
    return res.length === 1 ? '0' + res: res;
}
function rgbtoHex(r, g, b) {
    return '#' + convertHex(r) + convertHex(g) + convertHex(b);
} 
export default rgbtoHex;