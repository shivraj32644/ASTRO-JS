
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { IWhyCorpCareForFixedIncome } from "../../../schemas/block";
import { normalizeCmsImage } from "../../../utils/common";

export function RWhyCorpCareForFixedIncome({
  data,
}: Readonly<{
  data?: IWhyCorpCareForFixedIncome;
}>) {
  const items = data?.items?.map((item) => {
    return {
      ...item,
      image: normalizeCmsImage(item?.image),
    };
  });

  return (
    <Swiper
      slidesPerView={1}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      spaceBetween={30}
      className="!pb-12 lg:hidden"
    >
      {items?.map((item, index) => (
        <SwiperSlide key={index} className="h-auto flex justify-center">
          <div key={index} className="">
            <div className="lg:min-w-[21.875rem] w-full rounded-md overflow-hidden">
              <img
                src={item?.image.url}
                alt={item?.image.alternativeText}
                className="object-cover w-full h-auto"
              />
              <div className="border border-brandLight h-[14.375rem]">
                <h2
                  className="py-4 pl-5
                          border-b border-brandLight
                          text-xl"
                >
                  {item.heading}
                </h2>
                <div className="pl-5">
                  {item?.points?.map((point, index_) => (
                    <div key={index_} className="flex gap-x-5 py-2 h-full">
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 0C10.1217 0 12.1566 0.842854 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842854 5.87827 0 8 0ZM4.5 7.5C4.36739 7.5 4.24021 7.55268 4.14645 7.64645C4.05268 7.74021 4 7.86739 4 8C4 8.13261 4.05268 8.25979 4.14645 8.35355C4.24021 8.44732 4.36739 8.5 4.5 8.5H10.293L8.146 10.646C8.05211 10.7399 7.99937 10.8672 7.99937 11C7.99937 11.1328 8.05211 11.2601 8.146 11.354C8.23989 11.4479 8.36722 11.5006 8.5 11.5006C8.63278 11.5006 8.76011 11.4479 8.854 11.354L11.854 8.354C11.9006 8.30755 11.9375 8.25238 11.9627 8.19163C11.9879 8.13089 12.0009 8.06577 12.0009 8C12.0009 7.93423 11.9879 7.86911 11.9627 7.80837C11.9375 7.74762 11.9006 7.69245 11.854 7.646L8.854 4.646C8.76011 4.55211 8.63278 4.49937 8.5 4.49937C8.36722 4.49937 8.23989 4.55211 8.146 4.646C8.05211 4.73989 7.99937 4.86722 7.99937 5C7.99937 5.13278 8.05211 5.26011 8.146 5.354L10.293 7.5H4.5Z"
                            fill="#C5A265"
                          />
                        </svg>
                      </span>
                      <span>{point?.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
