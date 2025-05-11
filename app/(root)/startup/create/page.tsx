import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";

const Page=async ()=>{
    const session=await auth();
    if(!session){redirect("/")};
    
    return(
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
                <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
                    Submit Your Startup
                </h1>
            </section>

            <StartupForm/>
        </>
    )
}

export default Page;