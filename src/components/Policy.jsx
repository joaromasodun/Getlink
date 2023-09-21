import License from './License'
import Button from '../components/Button'
import lock from  '../assets/lock.png'

export default function Policy() {
  return (
    <div className="p-6">
      <div className="header text-center">
        <h2 className='text-2xl font-medium mb-2'>Privacy Policy and</h2>
        <span className='text-secondary text-xl font-bold'>Terms</span>
        <p className="mt-3 text-sm">Last updated on September 12, 2023.</p>
        <span className="mt-5 block">Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</span>
      </div>

      <div className="border border-secondary p-3 mt-10 rounded">
        <p className="text-center pt-10">At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>

        <div>
          <div className="mt-16">
            <div className="header">
              <h3 className="text-secondary font-semibold mb-3">Licencing Policy</h3>
              <span className="text-sm font-semibold">Here are terms of our Standard License:</span>
            </div>

              <div className='flex flex-col pb-8'>
                <License>
                  The Standard License grants you a non-exclusive right to navigate and register for our event
                </License>
                <License>
                  You are licensed to use the item available at any free source sites, for your project development
                </License>
                <Button className='py-3 bg-secondary px-10 rounded mx-auto mt-8'>Read More</Button>
              </div>
          </div>
          <div className="lock">
            <img src={lock} alt="lock" className='translate-y-16'/>
          </div>
        </div>
      </div>
    </div>
  )
}
