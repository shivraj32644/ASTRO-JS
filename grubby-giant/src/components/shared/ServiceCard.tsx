import React, { useState } from "react";
import { normalizeCmsImage } from "../../../utils/common";
import type { IServiceCard, IServicesWeOffer } from "../../../schemas/block";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Grid, Pagination, Autoplay } from "swiper/modules";
import classNames from "classnames";
// import {   } from 'swiper';

export const ServiceCard = ({ service }: { service: IServiceCard }) => {
  const [showmore, setShowmore] = useState(false);
  const backgroundImage = normalizeCmsImage(service?.backgroundImage);

  return (
    <figure
      style={{
        backgroundImage: `url(${backgroundImage.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onClick={(event: any) => {
        if (event?.target?.accessKey === "no-routing") return;
        // router?.push(`${service?.href}`);
      }}
      className={`saturate-100 hover:saturate-150 flex flex-col justify-end border border-brandLight px-[1.375rem] pb-[1.25rem] space-y-2 lg:space-y-2 h-[26.25rem] w-full `}
    >
      <blockquote className="text-white font-medium text-xl lg:text-2xl tracking-[0.02em] lg:leading-9">
        {service?.heading}
      </blockquote>
      <figcaption
        style={{
          transition: "max-height 0.15s ",
          transitionTimingFunction: "ease-in-out",
          maxHeight: showmore ? "100%" : "3.35rem",
        }}
        className={`transition-all overflow-hidden text-white font-normal text-base lg:text-lg tracking-[0.02em] lg:leading-7`}
      >
        {service?.subheading}
      </figcaption>

      <div
        className="flex space-x-3 w-fit justify-start cursor-pointer"
        onClick={() => setShowmore((p) => !p)}
      >
        <p className="text-brand " accessKey="no-routing">
          {showmore ? "HIDE" : "READ MORE"}
        </p>
        {!showmore && (
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        )}
      </div>
    </figure>
  );
};

export function ServicesWeOfferRComponent({
  data,
}: {
  data?: IServicesWeOffer;
}) {
  
  return (
    <div className="bg-white relative">
      {data?.miscellaneousFigure?.map((item, index) => {
        const figure = normalizeCmsImage(item?.figure);

        return (
          <div
            key={index}
            className={classNames(
              "absolute",
              item?.alignment === "Top-Left" && "top-0 left-0",
              item?.alignment === "Top-Right" && "top-0 right-0",
              item?.alignment === "Bottom-Left" && "bottom-0 left-0",
              item?.alignment === "Bottom-Right" && "bottom-0 right-0",
              item?.alignment === "Center-Left" && "bottom-1/2 left-0",
              item?.alignment === "Center-Right" && "bottom-1/2 right-0"
            )}
          >
            <img
              src={figure?.url}
              alt={figure?.alternativeText}
              className="object-cover w-auto h-auto"
            />
          </div>
        );
      })}
      <div className="mx-auto container  lg:p-10 p-5">
        <h2
          className="font-medium text-lg lg:text-xl lg:leading-8 tracking-[0.02em] text-brand uppercase text-left overflow-hidden before:h-[2px]
           before:bg-brand before:inline-block before:relative before:align-middle 
           before:w-6 before:right-2 p-4 "
        >
          {data?.heading}
        </h2>
        <h1 className="font-medium text-2xl lg:text-[2.25rem] tracking-[0.02em] text-left lg:leading-[48px]  max-w-sm lg:max-w-2xl mb-[2.5rem]">
          {data?.subHeadingParts?.map((item, idx) => {
            return (
              <span key={idx} className={classNames(`text-${item.color}`)}>
                {item.text}
              </span>
            );
          })}
        </h1>
        {/* <Swiper
          slidesPerView={3}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 3.25,
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
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Keyboard, Grid, Pagination, Autoplay]}
          spaceBetween={30}
          className="!pb-12"
        ></Swiper> */}
        <div className="flex w-full max-w-full overflow-x-auto gap-9 ">
          {data?.services?.map((service, index) => (
            <div key={index} className="cursor-grab min-w-[400px] basis-[400px]">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
