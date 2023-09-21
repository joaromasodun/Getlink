/* eslint-disable react/prop-types */
import { useState } from "react"
import faqImg from '../assets/faq.png'
import AccordionItem from './AccordionItem'

export default function Faq() {
  const AccordionData = [
    {
      id: 1,
      title: 'Can i work on the project i started before the hackaton?',
      answer: 'Lorem ipsum dolor sit amet cons ectetur adipisicing elit.'
    },
    {
      id: 2,
      title: 'What happenss if i need help during the hackaton?',
      answer: 'Lorem ipsum dolor sit amet cons ectetur adipisicing elit.'
    },
    {
      id: 3,
      title: "What happenss if i don't have an idea for a project?",
      answer: 'Lorem ipsum dolor sit amet cons ectetur adipisicing elit.'
    },
    {
      id: 4,
      title: 'Can i join a team or do i have to join one?',
      answer: 'Lorem ipsum dolor sit amet cons ectetur adipisicing elit.'
    },
    {
      id: 5,
      title: 'What happens after the hackaton ends?',
      answer: 'Lorem ipsum dolor sit amet cons ectetur adipisicing elit.'
    },
    {
      id: 6,
      title: 'Can i work on the project i started before the hackaton?',
      answer: 'Lorem ipsum dolor sit amet cons ectetur adipisicing elit.'
    }
  ]


  const [current, setCurrent] = useState(null)


  return (
    <div className="p-6">
      <div className="header text-center">
        <h2 className='text-2xl font-medium mb-2'>Frequently Asked</h2>
        <span className='text-secondary text-xl font-bold'>Question</span>
        <p className="mt-3 leading-relaxed">We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
      </div>

      <div className="flex flex-col space-y-8 mt-8">
        <div>
          {AccordionData.map((accordion,i) =>  
            <AccordionItem 
              key={i}
              current={current}
              num={i + 1}
              onSetCurrent={setCurrent}
              {...accordion}
            />
          )}
        </div>
        <img src={faqImg} alt="faq image" />
      </div>
    </div>
  )
}