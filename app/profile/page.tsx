import {Profile} from '@/app/ui/profile/display'


//import profile from '../public/userimage.png'



export default async function Page() {

    //const image = user?.image || profile;
  return (
    <div className="flex flex-row h-screen border ">
      <Profile />
    </div>
  );
}