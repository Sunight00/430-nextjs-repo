import { Nav } from '@/app/ui/explore/nav'
import { DisplayData } from '@/app/ui/explore/explore'



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
            <DisplayData query={query} />
        </div>
    )   
}