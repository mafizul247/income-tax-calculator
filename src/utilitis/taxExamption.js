
const taxExampted = (salary) => {
    let examptedAmout = 0;

    if (salary > 0 && salary / 3 <= 450000) {
        examptedAmout = salary / 3
    }
    else {
        examptedAmout = 450000;
    }
    return examptedAmout;
}

export { taxExampted }