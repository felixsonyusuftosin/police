import './App.css'
import { MainPage, MainPageProvider } from './components/mainPage/index'
import { SnackbarProvider } from 'notistack'

function App() {
  return (
    <div className='app'>
      <SnackbarProvider maxSnack={3}>
        <MainPageProvider>
          <MainPage />
        </MainPageProvider>
      </SnackbarProvider>
    </div>
  )
}

export default App
