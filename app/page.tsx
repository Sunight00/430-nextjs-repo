import desktop_image from '../public/handcrafted_haven_desktop.webp'
import mobile_image from '../public/handcrafted_haven_mobile-removebg-preview (1).png'
import Image from 'next/image';
import {Button} from '../app/ui/button';
import Fonts from '../app/ui/font';


export default function Page(){
  return <div className="w-full h-screen relative">
  {/*<!-- Image goes here -->*/}
  <Image src={desktop_image} alt="Background Image" width='2560' height='1440'
    className="absolute inset-0 w-full h-full object-cover "
  />

  {/*<Image src={mobile_image}  alt="Background Image" width='640' height='960'
    className="absolute inset-0 w-full h-full object-cover md:hidden"
  />*/}
  <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center text-black">
    <h1 className={`${Fonts.Headers.className} text-center text-xl md:text-5xl font-bold`}>Discover Unique Handcrafted Creations</h1>
    <h2 className={`${Fonts.Headers.className} text-center text-l md:text-3xl font-semibold mt-4 md:mt-0 `}>Support talented artisans by exploring thoughtfully made, one-of-a-kind handmade products.</h2>
  </div>

  <div className="absolute bottom-8 left-0 right-0 flex flex-col md:flex-row gap-4 items-center justify-center">
    <Button href="/explore" description="Explore Product" />
    <Button href="/login" description="Login" />

  </div>

</div>

}