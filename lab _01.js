function addition(a, b){
    return a+b;
}
function bitwiseAND(a,b){
return a & b;
}
function bitwiseOR(a,b)
{
return a|b;
}
function bitwiseXOR(a,b){
    return a^b;
}
function addup(a)
{
    let sum = 0;
    for( let i = 1;i<=a; i++)
    {
        sum += i;
    }
    return sum;
}
function progressbar(a)
{
    const filled = Math.floor(a/b);
    const empty = 10 - filled;
    return "#".repeat(filled) + "-".repeat (empty);
}
function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max];
}
function calculateRepoState(repos)
{
    const stars = repos.map(repo =>repo.stars)
    const max  = Math.max(...stars);
    const min = Math.min(...stars);
    const totalStars = stars.reduce((sum, star)=> sum + star, 0)
    const averageStars = Math.floor( totalStars /stars.length);
    const varianceScore = Math.abs(max - min);
    return {
        max, min, averageStars, varianceScore
    };

}
function calculateFinalPrice(basePrice, taxRate, discountPercentage)
{
    const discountedp = basePrice  * (1 - discountPercentage / 100);
    const totalPrice = discountedp * ( 1 + taxRate /100);
    const finalPrice = Number(totalPrice.toFixed(2));
    const loyaltyPointsEarned = Maths.ceil(finalPrice);
    return {
        finalPrice,
        loyaltyPointsEarned
    };
}
function  paginateData(items, pageNumber, pageSize)
{
    const totalPages = Maths.ceil(items.length / pageSize);
    if(pageNumber<1) pageNumber = 1;
    if (pageNumber > totalPages && totalPages >0 ) pageNumber = totalPages;
    const startindex = (pageNumber -1) * pageSize;
    const endindex = startindex + pageSize;
    const data = items. slice( startindex, endindex);
    return {
        data : data,
        currentPage : pageNumber,
        totalPages: totalPages,
        hasNext : pageNumber<totalPages,
        hasPrev : pageNUmber >1
    };


}
