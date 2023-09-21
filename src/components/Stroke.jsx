export default function Stroke({width, className}) {
  return (
    <span>
      <svg 
        width={width} 
        height="17" 
        viewBox="0 0 255 17" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5"/>
      </svg>
    </span>
  )
}
