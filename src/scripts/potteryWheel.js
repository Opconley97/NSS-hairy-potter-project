let potteryKeyValue = 1;

const makePottery = (shape, weight, height) => {
    let pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryKeyValue++
    }
    return pottery
}

module.exports = { makePottery };