export const potteryList = (potteryArray ) => {
    let htmlString = ""
    for (const arrayObj of potteryArray) {
        htmlString += `<section class="pottery" id="pottery-${arrayObj.id}"`
        htmlString += ` <h2 class="${arrayObj.shape}">${arrayObj.shape}</h2>`
        htmlString += ` <div class="pottery_properties">\n
                Item weighs ${arrayObj.weight} lbs and is
                ${arrayObj.height} inches in height</div>`
        htmlString += ` <div class="pottery_price">Price is $${arrayObj.price}</div>`
        htmlString += `</section>`
    }
    return htmlString
}