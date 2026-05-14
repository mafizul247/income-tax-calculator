
const taxCalculation = (taxPayer, taxArea, taxableIncome) => {
    let totalTax = 0;

    const slab1 = taxPayer;
    const slab2 = slab1 + 300000;
    const slab3 = slab2 + 400000;
    const slab4 = slab3 + 500000;
    const slab5 = slab4 + 2000000;

    // Tax Calculation General Person
    if (taxPayer === 375000) {
        // Slab 2 Tax Calculation 
        if (taxableIncome > slab1 && taxableIncome <= slab2) {
            totalTax = (taxableIncome - slab1) * 0.10;
        }

        else if (taxableIncome > slab2 && taxableIncome <= slab3) {
            // Slab 3 Tax Calculation 
            let stap1 = 300000 * 0.05;
            let step2 = (taxableIncome - slab2) * 0.15;
            totalTax = stap1 + step2;
        }

        else if (taxableIncome > slab3 && taxableIncome <= slab4) {
            // Slab 4 Tax Calculation
            let stap1 = 300000 * 0.10;
            let stap2 = 400000 * 0.15;
            let stap3 = (taxableIncome - slab3) * 0.20;
            totalTax = stap1 + stap2 + stap3;
        }

        else if (taxableIncome > slab4 && taxableIncome <= slab5) {
            // Slab 5 Tax Calculation
            let stap1 = 300000 * 0.10;
            let stap2 = 400000 * 0.15;
            let stap3 = 500000 * 0.20;
            let stap4 = (taxableIncome - slab4) * 0.25;
            totalTax = stap1 + stap2 + stap3 + stap4;
        }

        else if (taxableIncome > slab5) {
            // Slab 6 Tax Calculation
            let stap1 = 300000 * 0.10;
            let stap2 = 400000 * 0.15;
            let stap3 = 500000 * 0.20;
            let stap4 = 2000000 * 0.25;
            let stap5 = (taxableIncome - slab5) * 0.30;
            totalTax = stap1 + stap2 + stap3 + stap4 + stap5;
        }
        // Tax Calculation for Female/Senior Citizen 
    } else if (taxPayer === 425000) {
        // Slab 2 Tax Calculation 
        if (taxableIncome > slab1 && taxableIncome <= slab2) {
            totalTax = (taxableIncome - slab1) * 0.10;
        }

        else if (taxableIncome > slab2 && taxableIncome <= slab3) {
            // Slab 3 Tax Calculation 
            let stap1 = 300000 * 0.05;
            let step2 = (taxableIncome - slab2) * 0.15;
            totalTax = stap1 + step2;
        }

        else if (taxableIncome > slab3 && taxableIncome <= slab4) {
            // Slab 4 Tax Calculation
            let stap1 = 300000 * 0.10;
            let stap2 = 400000 * 0.15;
            let stap3 = (taxableIncome - slab3) * 0.20;
            totalTax = stap1 + stap2 + stap3;
        }

        else if (taxableIncome > slab4 && taxableIncome <= slab5) {
            // Slab 5 Tax Calculation
            let stap1 = 300000 * 0.10;
            let stap2 = 400000 * 0.15;
            let stap3 = 500000 * 0.20;
            let stap4 = (taxableIncome - slab4) * 0.25;
            totalTax = stap1 + stap2 + stap3 + stap4;
        }

        else if (taxableIncome > slab5) {
            // Slab 6 Tax Calculation
            let stap1 = 300000 * 0.10;
            let stap2 = 400000 * 0.15;
            let stap3 = 500000 * 0.20;
            let stap4 = 2000000 * 0.25;
            let stap5 = (taxableIncome - slab5) * 0.30;
            totalTax = stap1 + stap2 + stap3 + stap4 + stap5;
        }
        // Tax Calculation Disable Person
    } else if (taxPayer === 500000) {
        // Slab 2 Tax Calculation 
        if (taxableIncome > slab1 && taxableIncome <= slab2) {
            totalTax = (taxableIncome - slab1) * 0.10;
        }

        else if (taxableIncome > slab2 && taxableIncome <= slab3) {
            // Slab 3 Tax Calculation 
            let stap1 = 300000 * 0.05;
            let step2 = (taxableIncome - slab2) * 0.15;
            totalTax = stap1 + step2;
        }

        else if (taxableIncome > slab3 && taxableIncome <= slab4) {
            // Slab 4 Tax Calculation
            let stap1 = 300000 * 0.10;
            let stap2 = 400000 * 0.15;
            let stap3 = (taxableIncome - slab3) * 0.20;
            totalTax = stap1 + stap2 + stap3;
        }

        else if (taxableIncome > slab4 && taxableIncome <= slab5) {
            // Slab 5 Tax Calculation
            let stap1 = 300000 * 0.10;
            let stap2 = 400000 * 0.15;
            let stap3 = 500000 * 0.20;
            let stap4 = (taxableIncome - slab4) * 0.25;
            totalTax = stap1 + stap2 + stap3 + stap4;
        }

        else if (taxableIncome > slab5) {
            // Slab 6 Tax Calculation
            let stap1 = 300000 * 0.10;
            let stap2 = 400000 * 0.15;
            let stap3 = 500000 * 0.20;
            let stap4 = 2000000 * 0.25;
            let stap5 = (taxableIncome - slab5) * 0.30;
            totalTax = stap1 + stap2 + stap3 + stap4 + stap5;
        }
        // Tax Calculation for Gazetted Freedom Fighter
    } else if (taxPayer === 525000) {
        // Slab 2 Tax Calculation 
        if (taxableIncome > slab1 && taxableIncome <= slab2) {
            totalTax = (taxableIncome - slab1) * 0.10;
        }

        else if (taxableIncome > slab2 && taxableIncome <= slab3) {
            // Slab 3 Tax Calculation 
            let stap1 = 300000 * 0.05;
            let step2 = (taxableIncome - slab2) * 0.15;
            totalTax = stap1 + step2;
        }

        else if (taxableIncome > slab3 && taxableIncome <= slab4) {
            // Slab 4 Tax Calculation
            let stap1 = 300000 * 0.10;
            let stap2 = 400000 * 0.15;
            let stap3 = (taxableIncome - slab3) * 0.20;
            totalTax = stap1 + stap2 + stap3;
        }

        else if (taxableIncome > slab4 && taxableIncome <= slab5) {
            // Slab 5 Tax Calculation
            let stap1 = 300000 * 0.10;
            let stap2 = 400000 * 0.15;
            let stap3 = 500000 * 0.20;
            let stap4 = (taxableIncome - slab4) * 0.25;
            totalTax = stap1 + stap2 + stap3 + stap4;
        }

        else if (taxableIncome > slab5) {
            // Slab 6 Tax Calculation
            let stap1 = 300000 * 0.10;
            let stap2 = 400000 * 0.15;
            let stap3 = 500000 * 0.20;
            let stap4 = 2000000 * 0.25;
            let stap5 = (taxableIncome - slab5) * 0.30;
            totalTax = stap1 + stap2 + stap3 + stap4 + stap5;
        }
    }

        // Minimum  Tax Calculation 
        if (taxArea === 5000 && totalTax <= 5000 && totalTax > 0) {
            totalTax = 5000;
        } else if (taxArea === 4000 && totalTax <= 4000 && totalTax > 0) {
            totalTax = 4000
        } else if (taxArea === 3000 && totalTax <= 3000 && totalTax > 0) {
            totalTax = 3000
        }

    return totalTax;
}

export { taxCalculation };