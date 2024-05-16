function fibonacci(num) {
// your code here
	//let ans
	if(num=1) return 0
	if(num=2) return 1
	else{
		let ans=fibonacci(num-1)+fibonacci(num-2)
	return ans
	}
}

module.exports = fibonacci;
