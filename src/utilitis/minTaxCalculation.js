
const minTaxCalculation = (taxArea, totalTax) => {
    let minTax = 0;
        // Minimum  Tax Calculation 
    if (taxArea === 5000 && totalTax <= 5000 && totalTax > 0) {
        minTax = 5000;
    } else if (taxArea === 4000 && totalTax <= 4000 && totalTax > 0) {
        minTax = 4000
    } else if (taxArea === 3000 && totalTax <= 3000 && totalTax > 0) {
        minTax = 3000;
    }

    return minTax;
}

export {minTaxCalculation};