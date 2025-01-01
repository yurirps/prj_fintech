import Header from './Components/Header'
import Sidenav from './Components/Sidenav'
import { DataContextProvider } from './Context/DataContext'
import Resumo from './Pages/Resumo'
import './Style.css'

function App() {


  return (
    <DataContextProvider>
      <div className='container'>
        <Sidenav />
        <main>
          <Header />
        </main>
        <Resumo />
      </div>
    </DataContextProvider>
  )
}

export default App
