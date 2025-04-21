// import Search from "./Search"
// import Logo from "./Logo"
import { DarkMode } from "./DarkMode"
import DropDownListMenu from "./DropDownListMenu"
const Navbar = () => {
  return (
    <nav>
    <div className="container flex flex-col justify-end py-8 sm:flex-row sm:items-center gap-4">
        {/* Logo */}
        {/* <Logo /> */}
        {/* Search */}
        {/* <Search /> */}
        {/* DarkMode & Profile */}
      <div className="flex gap-4 justify-end">
        <DarkMode />
       <DropDownListMenu />
      </div>
    </div>
    </nav>
  )
}
export default Navbar