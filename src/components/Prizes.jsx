import trophy from '../assets/trophy.png'
import rewards from '../assets/rewards.png'

export default function Prizes() {
  return(
    <div className="p-6">
      <div className="text-content py-2">
        <div className="header text-center">
          <h2 className='text-2xl font-medium mb-2'>Prizes and</h2>
          <span className='text-secondary text-xl font-bold'>Reward</span>
          <p className="mt-3">Highlight of the prizes or rewards for winners and for participants.</p>
        </div>
        
        <div className='pt-8 flex flex-col space-y-12 items-center'>
          <img src={trophy} alt="trophy" />
          <img src={rewards} alt="" />
        </div>
      </div>
    </div>
  )
}
