function waysToClimbStaircase(n){
    let fNMinus1 = 1;
    let fNMinus2 = 1; 
    let fN;
    for(let i=2; i<=n; i++){
        fN = fNMinus1 + fNMinus2;
        fNMinus2 = fNMinus1;
        fNMinus1 = fN;
    }
    return fN;
}
let n1 = 2;
let n2 = 3;
console.log(waysToClimbStaircase(n1));
console.log(waysToClimbStaircase(n2));

// Time Complexity: O(n)
// Space Complexity: O(1)