
export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center mx-24 gap-14">
        <div className=''>
            <h1 className="text-4xl font-bold"><span className="text-red-600">Contact</span> Us</h1>
        </div>
        <div className='flex gap-3 justify-center items-center bg-gradient-to-r from-red-700 via-orange-500 to-orange-400 w-full h-96 rounded-badge'>
            <div className="flex flex-col gap-4 w-3/5">
                <h1 className="text-4xl font-extrabold text-white">Get In Touch</h1>
                <input type="text" placeholder="Name" className=" border-solid border-b bg-transparent px-5 outline-none text-xl text-white"/>
                <input type="text" placeholder="Email" className=" border-solid border-b bg-transparent px-5 outline-none text-xl text-white"/>
                <input type="email" placeholder="Subject" required className=" border-solid border-b bg-transparent px-5 outline-none text-xl text-white" />
                <input type="text" placeholder="Message" className=" border-solid border-b bg-transparent px-5 outline-none text-xl text-white"/>
                <button className=" w-32 h-8 rounded-3xl bg-black text-white">Send Message</button>
            </div>
            <div className="w-1/4">
            
            </div>
        </div>
    </div>
  )
}
