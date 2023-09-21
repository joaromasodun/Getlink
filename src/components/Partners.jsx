import partners from '../assets/partners.png'

export default function Partners() {
  return(
    <div className="p-6 partners">
      <div className="header text-center">
        <h2 className='text-2xl font-medium mb-2'>Partners and Sponsor</h2>
        <p className="mt-3">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
      </div>

      <div className='mt-5'>
        <img src={partners} alt="" />
      </div>
    </div>
  )
}
