import {
  normalizeMultipleCmsImage,
} from '../../../utils/common';
import { Grid, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { IOurPartners } from '../../../schemas/block';

export function ROurPartners({ data }: { data?: IOurPartners }) {
  return (
    <Swiper
    slidesPerView={2.5}
    spaceBetween={24}
    breakpoints={{
      1024: {
        slidesPerView: 5.5,
        spaceBetween: 42,
      },
    }}
    grid={{
      rows: 1,
    }}
    keyboard={{
      enabled: true,
    }}
    modules={[Keyboard, Grid, Pagination]}
    className="mySwiper h-28"
  >
    {data?.PartnerImages?.data?.map((item, index) => {
      const _image = normalizeMultipleCmsImage(item);
      return (
        <SwiperSlide
          key={index}
          className="bg-white rounded-2xl border border-brandLight px-4 py-6 flex justify-center items-center"
        >
          <img
            src={_image?.url}
            alt={_image?.alternativeText}
            className="self-center object-cover"
          />
        </SwiperSlide>
      );
    })}
  </Swiper>
  );
}
