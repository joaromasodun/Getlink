import chainIcon from '../assets/chainIcon.svg'
import fireIcon from '../assets/fire.svg'
import heroImg from '../assets/Image 1.png'
import Button from './Button'

export default function Hero() {
  return(
    <div className='hero flex flex-col justify-center items-center space-y-8'>
      <div className='flex flex-col items-center'>
        <div className='text-[36px] font-bold text-center pt-10 flex flex-col'>
          <h2>
            getlinkedTech  
          </h2>
          <div className='flex'>
            <h2 className='pr-1'>Hackathon <span className='text-secondary'>1.0</span></h2>
            <div className='flex space-x-2'>
              <img src={chainIcon} alt="" />
              <img src={fireIcon} alt="" />
            </div>
          </div>
        </div>
        <p className='text-center px-5 mt-3 mb-5'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
        <Button className='py-3 bg-secondary px-10 rounded'>Register</Button>
        <div className="countdown flex space-x-5 mt-5">
          <h2 className='text-3xl font-bold'>00 <span className='text-sm'>H</span></h2>
          <h2 className='text-3xl font-bold'>00 <span className='text-sm'>M</span></h2>
          <h2 className='text-3xl font-bold'>00 <span className='text-sm'>S</span></h2>
        </div>
      </div>
      <div className='right w-full'>
          <img src={heroImg} alt="" />
      </div>
    </div>
  )
}
