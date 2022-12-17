const fibonacciTerm = (n) => {
    if (n==1) return 0;
    if (n==2) return 1;
    return fibonacciTerm(n-2)+fibonacciTerm(n-1);
};

export const fibonacciPrintString = (n) => {
    let prev2=0, prev1=1;
    if (n<1) return 'Invalid value for N';
    let printString='';
    for(let i=1 ;i<=n; i++){
        printString+= ` ${fibonacciTerm(i)}`;
    }
    return printString;
};