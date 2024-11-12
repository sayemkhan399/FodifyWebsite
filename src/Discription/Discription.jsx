import pizza from '../../src/assets/images/2.png'

export default function Discription() {
  return (
    <div className='mx-24 flex items-center justify-center pb-16'>
        <dir className='flex gap-5 items-center  h-96 w-4/5 rounded-3xl text-white bg-gradient-to-r from-red-700 via-orange-500 to-orange-400'>
            <div className='w-3/5 flex flex-col gap-3 relative'>
                <h1 className='text-4xl font-bold'>Discover Delicious Deals <br /> Just For You</h1>
                <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias, tenetur dolor velit quibusdam iste quis impedit ea delectus, commodi, excepturi nobis nesciunt libero facere!</p>
                <button className=" w-32 h-8 rounded-3xl bg-black text-white">Order Now</button>
            </div>
            <img src={pizza} alt="" className='w-2/5 absolute right-5' />

        </dir>
    </div>
  )
}
