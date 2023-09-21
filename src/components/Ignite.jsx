/* eslint-disable react/prop-types */
import Stroke from "./Stroke"

export default function Ignite({children}) {
  return(
    <div className="relative mt-5">
      <span className="flex justify-center text-sm">
        {children}
      </span>
      <Stroke 
        width={128}
        className="absolute top-5 right-[15px]"
      />
    </div>
  )
}
