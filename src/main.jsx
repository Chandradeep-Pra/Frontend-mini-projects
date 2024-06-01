import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App !| MyApp()</h1>
//     </div>
//   )
// }

// const oneElm = (
//   <a className='text-2xl' href="https://github.com/chandradeep-pra" target='_blanc'>Visit Github</a>
// )

// const reactElm = React.createElement(
//   'p',
//   {
//     className:"text-xl"
//   },
//   "Hi ! I am Chandradeep"
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
