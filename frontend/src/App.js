import logo from './logo.svg'
import './App.css'
import SecondComponent from './Components/SecondComponent'

function App () {
  function MyComponent () {
    return <h1>This is My First Component</h1>
  }
  return (
    <div>
      <h1>This is the app component</h1>
      <MyComponent />
      <SecondComponent />
      <SecondComponent />
      <SecondComponent />
      <SecondComponent />
      <SecondComponent />
    </div>
  )
}

export default App
