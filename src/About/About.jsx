import photo1 from '../../src/assets/images/3.jpg'
import photo2 from '../../src/assets/images/4.jpg'
import { HiCheck } from "react-icons/hi";
export default function About() {
  return (
    <div className="flex flex-col justify-center items-center mx-24 gap-14">
        <div className=''>
            <h1 className="text-4xl font-bold"><span className="text-red-600">About</span> Us</h1>
        </div>
        <div className='flex gap-3 justify-center items-center '>
            <div className='w-2/4 flex flex-col gap-3'>
                <h2 className='text-5xl font-bold'>About <span className="text-red-600">Fodify</span></h2>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, officiis corrupti fugit at repellendus consequuntur error maxime velit, explicabo dolorum adipisci voluptate animi. Eum, suscipit harum repellat quisquam ad corrupti.</p>
                <div>
                    <h3 className='text-2xl font-bold'>Our Values</h3>
                    <div className='font-thin'>
                    <p className='flex gap-2  items-center'> <HiCheck className='rounded-full bg-red-600 text-white'/>Customer satisfactino</p>
                    <p className='flex gap-2  items-center'> <HiCheck className='rounded-full bg-red-600 text-white'/>Customer satisfactino</p>
                    <p className='flex gap-2  items-center'> <HiCheck className='rounded-full bg-red-600 text-white'/>Customer satisfactino</p>
                    <p className='flex gap-2  items-center'> <HiCheck className='rounded-full bg-red-600 text-white'/>Customer satisfactino</p>
                    <p className='flex gap-2  items-center'> <HiCheck className='rounded-full bg-red-600 text-white'/>Customer satisfactino</p>
                    <p className='flex gap-2  items-center'> <HiCheck className='rounded-full bg-red-600 text-white'/>Customer satisfactino</p>
                    
                    </div>
                </div>
                <button className=" w-32 h-8 rounded-3xl bg-black text-white">Learn More</button>
            </div>
            <div className='grid grid-cols-2 w-2/5 gap-5 '>
                <img src={photo1} alt="" className='rounded-2xl'/>
                <img src={photo2} alt="" className='rounded-2xl ' />
            </div>
        </div>
    </div>
  )
}
