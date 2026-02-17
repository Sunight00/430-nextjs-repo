import { Nav } from '@/app/ui/explore/nav'
import { DisplayData } from '@/app/ui/explore/explore'
import {Suspense} from 'react'
import { ExploreSkeleton } from "../ui/skeletons"


export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}){
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';


    return (
        <div>
            <Nav />
            <Suspense fallback={ExploreSkeleton()}>
              <DisplayData query={query} />
            </Suspense>
        </div>
    )   
}