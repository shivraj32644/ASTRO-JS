'use client'

import type { IArticlesCard } from "../../../schemas/shared";
import { normalizeCmsImage } from "../../../utils/common";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineBarChart } from "react-icons/ai";
export const ArticlesCard = ({ data }: { data?: IArticlesCard }) => {
  const image = normalizeCmsImage(data?.Image);
  const icon = normalizeCmsImage(data?.category?.data?.attributes?.image);
  
  return (
    <a
    href={`/blogs/${data?.slug}`}
      className="border flex flex-col max-w-[335px] lg:max-w-[450px] hover:shadow-md cursor-pointer"
      
    >
      <img
        src={image?.url}
        alt={image?.alternativeText}
        className="h-[200px] lg:h-[234px] object-cover w-auto"
      />
      <div className="flex justify-between items-center gap-5 px-5 lg:px-[30px] pt-4">
        <div className="flex items-center gap-[6px]">
        <AiOutlineBarChart  className="h-7 w-7 text-brand"/>
          <p className="text-lightGray tracking-[0.02em] text-sm lg:text-base font-normal">
            {data?.category?.data?.attributes?.title}
          </p>
        </div>
        <div className="flex items-center gap-[6px]">
          <CiCalendar className="w-5 h-5 text-brand" />
          <div
            suppressHydrationWarning
            className="text-lightGray tracking-[0.02em] text-sm lg:text-base font-normal"
          >
            {new Date(data?.publishAt as string).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            })}
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-[30px] space-y-4 pb-3 lg:pb-[30px] pt-4">
        <blockquote className="text-[#191919] font-medium text-xl lg:text-2xl tracking-[0.02em] lg:leading-9 ">
          {data?.title}
        </blockquote>
        <a
        href={`/blogs/${data?.slug}`}
          className="text-brand uppercase cursor-pointer text-sm lg:text-base" 
        >
          {data?.buttonText}
        </a>
      </div>
    </a>
  );
};
