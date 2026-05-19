const taxCalculation = (taxSlab, taxArea, taxableIncome) => {
  let totalTax = 0;

  if (taxableIncome <= taxSlab) return 0;

  let remaining = taxableIncome - taxSlab;

  // Slab steps
  const slabs = [
    { limit: 300000, rate: 0.10 },
    { limit: 400000, rate: 0.15 },
    { limit: 500000, rate: 0.20 },
    { limit: 2000000, rate: 0.25 },
    { limit: Infinity, rate: 0.30 },
  ];

  for (let slab of slabs) {
    if (remaining <= 0) break;

    const taxableAmount = Math.min(remaining, slab.limit);
    totalTax += taxableAmount * slab.rate;
    remaining -= taxableAmount;
  }

  // Minimum tax
  if (totalTax > 0) {
    if (taxArea === 5000 && totalTax < 5000) totalTax = 5000;
    else if (taxArea === 4000 && totalTax < 4000) totalTax = 4000;
    else if (taxArea === 3000 && totalTax < 3000) totalTax = 3000;
  }

  return totalTax;
};

export { taxCalculation };