import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Grid, Pagination } from "swiper/modules";
import InsightCard from "../Home/InsightCard.astro";
import { normalizeCmsImage } from "../../../utils/common";

const RelatedInsightsRComponents = ({
  sortedInsights,
}: {
  sortedInsights: any;
}) => {
  return (
    <>
      {
        <Swiper
          slidesPerView={3}
          breakpoints={{
            1280: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          grid={{
            rows: 1,
          }}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Grid, Pagination]}
          spaceBetween={52}
          className="!pb-12"
        >
          {sortedInsights?.map(({ attributes }:{attributes:any}, index:any) => {
            const icon = normalizeCmsImage(attributes?.category?.data?.attributes?.image);
            const image = normalizeCmsImage(attributes?.image);
            return (
              <SwiperSlide key={index} className="h-auto">
                <a
                  href={attributes?.slug}
                  target="_blank"
                  className="hover:shadow-md cursor-pointer w-full lg:min-w-[350px] border-brandLight border rounded-md overflow-hidden"
                >
                  <img
                    src={image?.url}
                    alt={image?.alternativeText}
                    className="h-[224px] lg:h-[235px] object-cover w-full"
                  />
                  <div className="flex h items-center gap-x-3 lg:gap-x-5 my-[0.875rem] px-2 lg:px-5">
                    <div className="flex items-center gap-[6px]">
                      <div className="text-lightGray tracking-[0.02em] text-sm lg:text-base font-normal">
                        {new Date(
                          attributes?.createdAt as string
                        ).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })}
                      </div>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <img
                        src={icon?.url}
                        alt={icon?.alternativeText}
                        className="h-5 w-5"
                      />
                      <p className="text-lightGray tracking-[0.02em] text-sm lg:text-base font-normal">
                        {attributes?.category?.data?.attributes?.title}
                      </p>
                    </div>
                  </div>
                  <p
                    id="text"
                    className="text-[1.35rem] h-[82px] lg:text-2xl mb-3 lg:mb-4 px-2 lg:px-5 border-t border-brandLight pt-3 lg:pt-4"
                  >
                    {attributes?.title}
                  </p>
                  <div className="text-brand text-[0.875rem] lg:text-base px-2 lg:px-5 py-2">
                    <a href={attributes?.slug} target="_blank">
                      {" "}
                      READ MORE
                    </a>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      }
    </>
  );
};

export default RelatedInsightsRComponents;
