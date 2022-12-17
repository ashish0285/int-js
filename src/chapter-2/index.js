export const fibonacciPrintString = (n) => {
    let prev2=0, prev1=1;
    if (n<1) return 'Invalid value for N';
    if (n==1) return '0';

    let printString = '0 1';
    if (n==2) return printString;
    
    for(let i=3 ;i<=n; i++){
        const next= prev2+prev1;
        prev2=prev1;
        prev1=next;
        printString+= ` ${next}`;
    }
    return printString;
};