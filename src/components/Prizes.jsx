import trophy from '../assets/trophy.png'

export default function Prizes() {
  return(
    <div className="p-8">
      <div className="text-content py-2">
        <div className="header text-center">
          <h2 className='text-2xl font-medium mb-2'>Prizes and</h2>
          <span className='text-secondary text-xl font-bold'>Reward</span>
          <p className="mt-3">Highlight of the prizes or rewards for winners and for participants.</p>
        </div>
        
        <div className='pt-8'>
          <img src={trophy} alt="" />
        </div>
      </div>
    </div>
  )
}
