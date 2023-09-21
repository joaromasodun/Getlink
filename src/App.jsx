import Navbar from './components/Navbar'
// import Ignite from './components/Ignite'
import Hero from './components/Hero'
import BigIdea from './components/BigIdea'
import Accordion from './components/Accordion'
import Prizes from './components/Prizes'

export default function App() {
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
      </div>
        <Hero />
      <div className='max-w-7xl mx-auto'>
        <BigIdea />
        <Accordion />
        <Prizes />
      </div>
    </>
  )
}