import Search from '@/app/ui/explore/search'
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
            <Search placeholder="Search for anything" />
            <DisplayData query={query} />
        </div>
    )   
}