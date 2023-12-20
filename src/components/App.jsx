import '../assets/styles/App.css'
import Display from './Display'
import Header from './Header'
import Search from './Search'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <Provider store={appStore}>
      <div className="app flex flex-col justify-center gap-3">
        <Header />
        <Search />
        <Display />
      </div>
    </Provider>
  )
}

export default App
