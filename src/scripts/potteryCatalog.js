let potteryArray = [];

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.cracked === false) {
        if (potteryObj.weight >= 6) {
            potteryObj.price = 40
        } else {
            potteryObj.price = 20
        }
        potteryArray.push(potteryObj);
    }
    return potteryObj
}

export const usePottery = () => {
    let potteryArrayClone = [...potteryArray];
    return potteryArrayClone
}

