module.exports = (len = 24) => {
    len = len < 24 ? 24 : len;
    return new Array(len - 11).fill('').map(() => {
        return Math.floor(Math.random() * 16).toString(16);
    }).join('') + new Date().getTime().toString(16);
}