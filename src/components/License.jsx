/* eslint-disable react/prop-types */
import licenseIcon from  '../assets/list-icon.svg'

export default function License({children}) {
  return(
    <div className='flex space-x-4 mt-8'>
      <img src={licenseIcon} alt="license icon"  className='h-6'/>
      <p className='text-sm'>{children}</p>
    </div>
  )
}
