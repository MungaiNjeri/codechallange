// Constants for tax rates and deductions
const taxRates = {
    personalRelief: 2808,
    incomeTax: {
      range1: { min: 0, max: 24000, rate: 10 },
      range2: { min: 24001, max: 32333, rate: 15 },
      range3: { min: 32334, max: 40467, rate: 20 },
      range4: { min: 40468, max: 48600, rate: 25 },
      range5: { min: 48601, max: Infinity, rate: 30 },
    },
  };
  
  const nhifRates = {
    lowerLimit: 0,
    upperLimit: 5999,
    monthlyContribution: 150,
  };
  
  const nssfRates = {
    employeeRate: 0.06,
    employerRate: 0.06,
  };
  
  // Function to calculate tax based on income
  function calculateTax(income) {
    let tax = 0;
    if (income <= 24000) {
      tax = income * (taxRates.incomeTax.range1.rate / 100);
    } else if (income <= 32333) {
      tax = (income - taxRates.personalRelief) * (taxRates.incomeTax.range2.rate / 100);
    } else if (income <= 40467) {
      tax = (income - taxRates.personalRelief) * (taxRates.incomeTax.range3.rate / 100);
    } else if (income <= 48600) {
      tax = (income - taxRates.personalRelief) * (taxRates.incomeTax.range4.rate / 100);
    } else {
      tax = (income - taxRates.personalRelief) * (taxRates.incomeTax.range5.rate / 100);
    }
    return tax;
  }
  
  // Function to calculate NHIF deductions
  function calculateNHIF(grossSalary) {
    if (grossSalary <= nhifRates.upperLimit) {
      return nhifRates.monthlyContribution;
    } else {
      return 0; // No NHIF deduction if gross salary is above the upper limit
    }
  }
  
  // Function to calculate NSSF deductions
  function calculateNSSF(grossSalary) {
    return grossSalary * nssfRates.employeeRate;
  }
  
  // Function to calculate net salary
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const tax = calculateTax(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const deductions = tax + nhif + nssf;
    const netSalary = grossSalary - deductions;
    return { grossSalary, tax, nhif, nssf, deductions, netSalary };
  }
  
 
  const basicSalary = 50000; 
  const benefits = 10000; 
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log(salaryDetails);