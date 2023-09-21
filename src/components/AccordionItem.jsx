/* eslint-disable react/prop-types */
export default function AccordionItem({title, answer, current, num, onSetCurrent}) {

  const isShown = num === current

  function handleToggle () {
    onSetCurrent(isShown ? null : num)
  }

  return(
    <div className="accordion py-3" onClick={handleToggle}>
      <div className="header flex">
        <h2 className="title flex-1">{title}</h2>
        <p className="sign text-secondary text-2xl font-bold">{isShown ? '-' : '+'}</p>
      </div>
      {isShown && 
        <div className="answer py-5">
          {answer}
        </div>
      }
    </div>
  )
}