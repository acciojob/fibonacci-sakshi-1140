function fibonacci(num) {
// your code here
	let ans
	if(num=1) ans=0
	else if(num=2) ans=1
	else ans=fibonacci(num-1)+fibonacci(num-2)
	return ans
}

module.exports = fibonacci;
