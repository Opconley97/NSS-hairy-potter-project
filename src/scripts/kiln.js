const firePottery = (potteryObj, tempNumb) => {
    if (tempNumb > 2200) {
        potteryObj.cracked = true
    } else {
        potteryObj.cracked = false
    }
    return potteryObj
}

module.exports = {firePottery};