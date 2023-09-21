import Navbar from './components/Navbar'
// import Ignite from './components/Ignite'
import Hero from './components/Hero'
import BigIdea from './components/BigIdea'
import Faq from './components/Faq'
import Prizes from './components/Prizes'
import Partners from './components/Partners'
import Policy from './components/Policy'


export default function App() {
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
      </div>
        <Hero />
      <div className='max-w-7xl mx-auto'>
        <BigIdea />
        <Faq />
        <Prizes />
        <Partners />
        <Policy />
      </div>
    </>
  )
}