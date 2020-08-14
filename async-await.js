// using Github API's and understanding Async await
// Basically Async function returns a promise

console.log('Testing Async Await Function')

async function asyncFunction(){
  for(let i=1;i<7;i++){
    console.log("Fetching user",i)
    console.log("Inside the function")
    const response = await fetch(`https://api.github.com/user/${i}`)
    console.log("Before Response to JSON")
    const data = await response.json()
    console.log("After Response")

    data_finally = await data
    console.log("Data finally", data_finally);
    // console.table(data_finally)
    
  }
}

console.log("Before calling the Async function")
let a = asyncFunction()
console.log("After calling the Async function")
