function fibonacci(num) {
// your code here
	//let ans
	if(num==1) return 0
	if(num==2) return 1
		
	else{
		//let ans=fibonacci(num-1)+fibonacci(num-2)
		let num1=0
		let num2=1
		let sum=0
		for(let i=2;i<=num;i++){
			sum=num2+num1;
			num1=num2;
			num2=sum
		}
	return sum
	}
}

module.exports = fibonacci;
