
const investment = (actualInv, taxbaleIncome) => {
    const actual = actualInv * 0.15;
    const oneThridTaxableIncome = taxbaleIncome * 0.03;
    const tenMillion = 10000000;

    if(isNaN(actualInv) || actualInv < 0) {
        // console.log('Empty', actualInv)
        return 0;
    }else if (actual < oneThridTaxableIncome && actual < tenMillion) {
        // console.log('actual', actual)
        return actual;
    } else if (oneThridTaxableIncome < actual && oneThridTaxableIncome < tenMillion) {
        // console.log('taxableOneThird', oneThridTaxableIncome)
        return oneThridTaxableIncome;
    } else {
        // console.log('Ten', tenMillion)
        return tenMillion;
    }
}


export { investment };