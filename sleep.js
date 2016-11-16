console.log('step 1')
// setTimeout(function(){
//   console.log('step 2')
// }, 1000)
setTimeout(function(){
  console.log('step 4')
}, 0) // 0 ensures second loop will address this I/O callback
process.nextTick(function(){
  console.log('step 3')
}) // nextTick will occur after first loop, but BEFORE I/O callbacks
setImmediate(function(){
  console.log('step 5')
}) // poorly named function for AFTER I/O callbacks
console.log('step 2')
