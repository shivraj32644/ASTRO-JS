
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type{ IHowCanWeHelpYou } from '../../../schemas/block';
import { normalizeCmsImage } from "../../../utils/common";
import { Pagination,Navigation,Grid,Keyboard } from 'swiper/modules';

export function RHowCanWeHelpYou({ data }: { data?: IHowCanWeHelpYou }) {
  
  const [reachedEnd, setReachedEnd] = useState(false);
  const [reachedStart, setReachedStart] = useState(true);
  return (
      <div className="relative mb-10 lg:mb-20">
        <Swiper
          slidesPerView={1}
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
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          onSlideChange={({ isBeginning, isEnd }) => {
            setReachedStart(isBeginning);
            setReachedEnd(isEnd);
          }}
          modules={[Keyboard, Grid, Navigation, Pagination]}
          spaceBetween={45}
          className="w-full !pb-5"
        >
          {data?.card?.map((item, index) => {
            const image = normalizeCmsImage(item?.cardImage);
            return (
              <SwiperSlide key={index} className="h-auto w-full">
                <div className="h-full lg:min-h-[31.875rem] bg-white flex flex-col justify-between items-center border-[0.5px] border-brand lg:min-w-[350px] mb-8 w-full">
                  <img
                    src={image?.url}
                    alt={image?.alternativeText}
                    className="w-full h-[18.125rem] lg:min-h-[19.0625rem] object-cover"
                  />
                  <div className="w-full h-full lg:min-h-[12.8125rem] p-5 lg:px-[30px] py-7 flex flex-col gap-2">
                    <p className="text-2xl tracking font-medium tracking-[0.02em] text-[#191919]">
                      {item?.cardHeading}
                    </p>
                    <p className="text-lg text-lightGray font-normal tracking-[0.02em]">
                      {item?.cardDescription}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <section className="flex items-center gap-5 absolute w-full -bottom-10 z-10">
          <div
            className={`prev bg-brand p-2  border-2 rounded-md ${
              reachedStart
                ? "bg-brandLight cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 9C21.5523 9 22 8.55228 22 8C22 7.44772 21.5523 7 21 7L21 9ZM0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z"
                fill="#ffffff"
              />
            </svg>
          </div>

          <div
            className={`next bg-brand p-2  border-2 rounded-md ${
              reachedEnd ? "bg-brandLight cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9C0.447715 9 -4.82823e-08 8.55228 0 8C4.82823e-08 7.44772 0.447715 7 1 7L1 9ZM21.7071 7.2929C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711L15.3431 15.0711C14.9526 15.4616 14.3195 15.4616 13.9289 15.0711C13.5384 14.6805 13.5384 14.0474 13.9289 13.6569L19.5858 8L13.9289 2.34315C13.5384 1.95262 13.5384 1.31946 13.9289 0.928933C14.3195 0.538409 14.9526 0.538409 15.3431 0.928933L21.7071 7.2929ZM1 7L21 7L21 9L1 9L1 7Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </section>
      </div>
    
  );
}
