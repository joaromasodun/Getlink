/* eslint-disable react/prop-types */
export default function AccordionItem({title, answer, current, num, onSetCurrent}) {

  const isShown = num === current

  function handleToggle () {
    onSetCurrent(isShown ? null : num)
  }

  return(
    <div className="accordion" onClick={handleToggle}>
      <div className="header flex space-x-1 py-2">
        <h2 className="title flex-1">{title}</h2>
        <p className="sign text-secondary text-2xl font-bold">{isShown ? '-' : '+'}</p>
      </div>
      {isShown && 
        <div className="answer pb-3">
          {answer}
        </div>
      }
    </div>
  )
}