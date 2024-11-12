import { FaCartArrowDown } from "react-icons/fa6";
export default function Header() {
  return (
    <header className="mx-auto flex justify-between items-center">
        <div>
            <h1 className="text-4xl font-bold"><span className="text-red-600">Fodi</span>fy</h1>
        </div>
        <div>
            <ul className="flex gap-10">
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="flex gap-5 justify-center items-center">
        <FaCartArrowDown />
        <button className="border w-32 h-8 rounded-lg bg-black text-white">Sign Up</button>
        </div>
    </header>
  )
}
