import desktop_image from '../public/for_now_desk.jpg'
import mobile_image from '../public/for_now_mobile.webp'
import Image from 'next/image';

export default function Page(){
  return <div className="w-full h-screen relative">
  {/*<!-- Image goes here -->*/}
  <Image src={desktop_image} alt="Background Image" width='2560' height='1440'
    className="absolute inset-0 w-full h-full object-cover hidden md:block"
  />

  <Image src={mobile_image}  alt="Background Image" width='640' height='960'
    className="absolute inset-0 w-full h-full object-cover md:hidden"
  />
  <div className="absolute inset-0 flex flex-row md:flex-col items-center justify-center text-black">
    <h1 className="text-center text-2xl md:text-5xl font-bold">Discover Unique Handcrafted Creations</h1>
    <h2 className="text-center text-xl md:text-3xl font-semibold md:mt-8">Support talented artisans by exploring thoughtfully made, one-of-a-kind handmade products.</h2>
  </div>
</div>

}