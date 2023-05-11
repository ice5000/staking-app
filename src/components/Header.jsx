import Logo from '../assets/logo.png'
import { CustomConnect } from "./CustomConnect";

const Header = () => {
  return (
    <div className="flex justify-between flex-row items-center max-w-6xl mx-auto">
    <div className="flex items-center">
    <a href="/">
      <img src={Logo} className="w-16" alt="logo" />
    </a>
    </div>

    <div className="flex text-center justify-center items-center space-x-1">

      <div className="text-[16px] truncate text-purple-900 font-medium ">
      <CustomConnect />
      </div>

    </div>
  </div>
  )
}

export default Header