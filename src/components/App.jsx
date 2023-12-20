import '../assets/styles/App.css'
import Header from './Header'
import Search from './Search'

function App() {
  return (
    <div className="app flex flex-col justify-center gap-1">
      <Header />
      <Search />
    </div>
  )
}

export default App
