function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while (principal < desired) {
        let interestEarned = principal * interest;
        principal += interestEarned - (interestEarned * tax);
        years++;
    }
    return years;
}