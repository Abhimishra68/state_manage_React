import React, { useState } from 'react'

const App = () => {
  
  let c = ["abhishek", "vikash", "vivek", "vidut", "bishnu"];
  const [a, seta] = useState(20)
  const [i, seti] = useState(0)
  function callme(){
   
    seta(a+1)
    
    seti(i+1)
    
  }
  return (
    <div>
      <h1>The value of a is {a}</h1>
      <h1>The name of person is {c[i]}</h1>
      <button onClick = {callme}>Click</button>
    </div>
  )
}

export default App;