module.exports = function isValidIMEI(imei) {

    if (imei.length !== 15 && imei.length !== 16) {
        return false;
    }
    if (!imei.match(/^\d+$/)) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < imei.length - 1; i++) {
        let digit = parseInt(imei[i], 10);
        if (i % 2 !== 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }

    const checksum = parseInt(imei[imei.length - 1], 10);
    const calculateChecksum = (sum * 9) % 10;
    return checksum == calculateChecksum;
}

