import Logo from '../components/Logo'
import MenuIcon from '../components/MenuIcon'

export default function Navbar() {
  return(
    <div className="navbar flex items-center justify-between p-5">
      <Logo />
      <MenuIcon 
        height={28}
        width={28}
      />
    </div>
  )
}


