import '../assets/styles/App.css'
import Header from './Header'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch('https://mobile-store-backend-x0wq.onrender.com/users/startServer');
        if (response.status === 200) {
          console.log('Server is up and running!');
        } else {
          console.error('Server is not responding as expected.');
        }
      } catch (error) {
        console.error('Error checking server status:', error);
      }
    };

    checkServerStatus();
  }, [])

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
