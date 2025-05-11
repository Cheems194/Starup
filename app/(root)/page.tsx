import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?: string}>
}) {

  
  const query=(await searchParams).query;
  const params={search:query || null};
  const session=await auth();
  console.log(session?.id);
  const {data:posts}=await sanityFetch({query:STARTUPS_QUERY,params});
  return (
    <>
      <section className="w-full bg-pink-600 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6 background-image: linear-gradient(
            to right,
            transparent 49.5%,
            rgba(251, 232, 67, 0.2) 49.5%,
            rgba(251, 232, 67, 0.6) 50.5%,
            transparent 50.5%
    );
    background-size: 5% 100%;
    background-position: center;
    background-repeat: repeat-x;">
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center 
        my-5">Pitch Your Startup, <br/> Connect With Entrepreneurs</h1>
        <p className="font-medium text-[20px] text-white max-w-3xl text-center break-words ">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query}/>
      </section>

      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="font-semibold text-[30px] text-black">
          {query? `Search results for "${query}"`: `All startups`}
        </p>
        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts?.length>0 ?(
            posts.map((post:StartupCardType,index:number)=>(
              <StartupCard key={post?._id} post={post}/>
            ))
          ):(
            <p className="text-black text-sm font-normal">No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive/>
    </>
  );
}
