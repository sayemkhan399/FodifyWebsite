import picture from '../../../fodify/src/assets/images/1.png'
export default function Home() {
  return (
    <div className='flex gap-5 justify-around items-center mx-auto'>
        <div className=' flex flex-col gap-2'>
            <h1 className='text-5xl font-bold'><span className="text-red-600">Fodi</span>fy:</h1>
            <h2 className='text-4xl font-bold'>Where test takes shape</h2>
            <p>Foodify referes fast food Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iure exercitationem laboriosam adipisci est voluptatem.</p>
            <button className="border w-32 h-8 rounded-3xl bg-black text-white">Order Now</button>
        </div>
        <div>
            <img src={picture} alt="" />
        </div>
    </div>
  )
}
