import '../assets/styles/App.css'
import Display from './Display'
import Header from './Header'
import Search from './Search'

function App() {
  return (
    <div className="app flex flex-col justify-center gap-3">
      <Header />
      <Search />
      <Display />
    </div>
  )
}

export default App
