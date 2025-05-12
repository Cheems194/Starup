import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";

export type StartupCardType=Omit<Startup,"author"> & {author ?:Author};

const StartupCard=({post}:{post:StartupCardType})=>{
    const {_createdAt,views,author,title,category,_id,image,description}=post;
    return (
        <li className="bg-white border-4 border-black py-6 px-5 rounded-2xl shadow hover:border-primary transition-all duration-500 hover:shadow-lg hover:bg-primary-100 group">
            <div className="flex justify-between items-center">
                <p className="font-medium text-base bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white transition-colors">
                    {formatDate(_createdAt)}
                </p>
                <div className="flex items-center gap-2">
                    <EyeIcon className="size-6 text-primary" />
                    <span className="font-medium text-base text-black">
                        {views}
                    </span>
                </div>
            </div>

            <div className="flex flex-col mt-5 gap-5">
                <div className="flex items-center gap-4">
                    <Link href={`/user/${author?._id}`}>
                        <Image
                            src={author?.image!}
                            alt={author?.name!}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                        />
                    </Link>
                    <div className="flex-1">
                        <Link href={`/user/${author?._id}`}>
                            <p className="font-medium text-base text-black truncate">
                                {author?.name}
                            </p>
                        </Link>
                    </div>
                </div>

                <Link href={`/startup/${_id}`}>
                    <h3 className="font-semibold text-2xl text-black truncate">
                        {title}
                    </h3>
                </Link>

                <Link href={`/startup/${_id}`}>
                    <p className="font-normal text-base text-gray-600 line-clamp-2 break-words my-3">
                        {description}
                    </p>
                    <Image
                        src={image!}
                        alt="Startup image"
                        width={500}
                        height={300}
                        className="w-full h-[164px] rounded-lg object-cover mt-3"
                    />
                </Link>

                <div className="flex justify-between items-center gap-3 mt-5">
                    <Link href={`/?query=${category?.toLowerCase()}`}>
                        <p className="font-medium text-base text-black capitalize">
                            {category}
                        </p>
                    </Link>
                    <Button asChild className="rounded-full bg-black font-medium text-base text-white px-5 py-3">
                        <Link href={`/startup/${_id}`}>
                            Details
                        </Link>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default StartupCard;