// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// 🐨 add a submit event handler here (`handleSubmit`).
// 💰 Make sure to accept the `event` as an argument and call
// `event.preventDefault()` to prevent the default behavior of form submit
// events (which refreshes the page).
// 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//
// 🐨 get the value from the username input (using whichever method
// you prefer from the options mentioned in the instructions)
// 💰 For example: event.target.elements[0].value
// 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below
  
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  
  function UsernameForm({onSubmitUsername}) {
    // const usernameInputRef = React.useRef() // bonus 1
    // const [error, setError] = React.useState(null) // bonus 2
    
    const [username, setUsername] = React.useState('')

    function handleSubmit(event){
      event.preventDefault()
      onSubmitUsername(username)
    }

  function handleChange(event) {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
        {/* bonus 2 */}
        {/* <input id="usernameInput" type="text" onChange={handleChange} /> */}
        {/* bonus 1 */}
        {/* <input id="usernameInput" type="text" ref={usernameInputRef} />   */}
      </div>
      {/* bonus 2 */}
      {/* <div role="alert" style={{color: 'red'}}> 
        {error}
      </div> */}
      {/* <button disabled={Boolean(error)} type="submit"> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
