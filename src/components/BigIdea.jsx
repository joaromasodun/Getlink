import bigIdea from '../assets/The big idea.png'
import rules from '../assets/rules.png'
import judging from '../assets/judging.png'
import Button from './Button'

export default function BigIdea() {
  return(
    <div className='flex flex-col space-y-1 px-8 py-14'>
      <img src={bigIdea} alt="big idea icon"/>

      <div className="text-content py-2">
        <div className="header text-center">
          <h2 className='text-2xl font-medium mb-2'>Introduction to getlinked</h2>
          <span className='text-secondary text-xl font-bold'>techHackaton 1.0</span>
        </div>
        <p className='text-center mt-5'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
        </p>
      </div>

      <img src={rules} alt="rules icon"/>

      <div className="text-content py-2">
        <div className="header text-center">
          <h2 className='text-2xl font-medium mb-2'>Introduction to getlinked</h2>
          <span className='text-secondary text-xl font-bold'>techHackaton 1.0</span>
        </div>

        <p className='text-center mt-5'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day:  shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
        </p>
      </div>

      <img src={judging} alt="judging icon" className='pt-8'/>

      <div className='judgin-criteria flex flex-col space-y-5'>
        <p className='text-center mt-5'>
          <span className='text-secondary font-bold'>Innovation and Creativity: </span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
        </p>

        <p className='text-center mt-5'>
          <span className='text-secondary font-bold'>Functionality: </span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
        </p>

        <p className='text-center mt-5'>
          <span className='text-secondary font-bold'> Impact and Relevance: </span> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
        </p>

        <p className='text-center mt-5'>
          <span className='text-secondary font-bold'> Technical Complexity: </span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
        </p>

        <p className='text-center mt-5'>
          <span className='text-secondary font-bold'> Adherence to Hackathon Rules: </span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
        </p>

        <Button className='py-3 bg-secondary px-8 rounded mx-auto'>Read More</Button>
      </div>
    </div>
  )
}
