import type { IInsightCard } from "../../../schemas/shared";
import { normalizeCmsImage } from "../../../utils/common";
import { CiCalendar } from "react-icons/ci";
import { RiBarChart2Line } from "react-icons/ri";
export default function InsightCard({ data }: { data?: IInsightCard }) {
  const icon = normalizeCmsImage(data?.category?.data?.attributes?.image);
 
  const image = normalizeCmsImage(data?.image);
  function icon_image(){
    if(data?.category?.data?.attributes?.title==="Investment"){
      return "investment.png"
    }else if (data?.category?.data?.attributes?.title==="Market Wrap-up"){
      return "market_bites.png"
    }
    else if (data?.category?.data?.attributes?.title==="Market Bites"){
      return "market_wrapup.png"
    }
  }
  return (
      <div
        className="hover:shadow-md  cursor-pointer w-full lg:min-w-[350px] border-brandLight border rounded-md overflow-hidden"
        onClick={() => window.open(data?.slug || '', '_blank')}
      >
        <img
          src={image?.url}
          alt={image?.alternativeText}
          className="h-[224px] lg:h-[235px] object-cover w-full"
        />
        <div className="flex h items-center gap-x-3 lg:gap-x-5 my-[0.875rem] px-2 lg:px-5 ">
          <div className="flex items-center gap-[6px]">
            <CiCalendar className="w-5 h-5 text-brand" />

            <div
              suppressHydrationWarning
              className="text-lightGray tracking-[0.02em] text-sm lg:text-base font-normal"
            >
              {new Date(data?.createdAt as string).toLocaleDateString(
                undefined,
                {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                }
              )}
            </div>
          </div>
          <div className="flex items-center gap-[6px]">
            {/* <img
              src="/market_bites.png"
              alt={icon?.alternativeText}
              
            /> */}
            <RiBarChart2Line className="h-5 w-5 text-brand"/>
            
            <p className="text-lightGray tracking-[0.02em] text-sm lg:text-base font-normal">
              {data?.category?.data?.attributes?.title}
            </p>
          </div>
        </div>
        <p
          id="text"
          className="text-[1.35rem] overflow-hidden text-ellipsis line-clamp-2 h-[82px]   lg:text-2xl mb-3 lg:mb-4 px-2 lg:px-5 border-t border-brandLight pt-3 lg:pt-4"
        >
          {data?.title}
        </p>
        <div className="text-brand text-[0.875rem] lg:text-base px-2 lg:px-5 py-2">
          <button onClick={() => window.open(data?.slug || '', '_blank')}>
            READ MORE
          </button>
        </div>
      </div>
    
  );
}
