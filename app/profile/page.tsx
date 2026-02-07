import {Profile} from '@/app/ui/profile/display'
import {Form} from '@/app/ui/profile/uploadform'
import {Contents} from '@/app/ui/profile/contents'
//import {ProfileNav} from '@/app/ui/profile/nav'


//import profile from '../public/userimage.png'



export default async function Page() {

    //const image = user?.image || profile;
  return (
    <>
    <div className="flex flex-col  md:flex-row h-screen border">
      <Profile />
      <Contents />
      <Form smallView='hidden' largeView='block' />
    </div>
    </>
  );
}