
import './App.css'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import HeroImage from './components/HeroImage/HeroImage'
import Testimonials from './components/Testimonials/Testimonials'


function App() {

  return (
    <>
    <div className='main_page'>
      <Header />
      <HeroImage />
      <Form />
      <Testimonials />
    </div>
    </>
  )
}

export default App
