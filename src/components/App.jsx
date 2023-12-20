import '../assets/styles/App.css'
import Header from './Header'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <Provider store={appStore}>
      <div className="app flex flex-col justify-center gap-3">
        <Header />
        <Outlet />
      </div>
    </Provider>
  )
}

export default App
