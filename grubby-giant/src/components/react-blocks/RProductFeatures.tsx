
import classNames from 'classnames';
import { Grid, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { IProductFeatures } from '../../../schemas/block';
import { normalizeCmsImage } from '../../../utils/common';

export function RProductFeatures({ data }: Readonly<{ data?: IProductFeatures }>) {
  return (

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
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Grid, Pagination]}
          spaceBetween={52}
          className="!pb-12"
        >
          {data?.productCard?.map((product, index) => {
            const cardImage = normalizeCmsImage(product?.cardImage);
            return (
              <SwiperSlide key={index} className="h-auto">
                <figure
                  className="border border-brandLight bg-white p-5 lg:p-10 space-y-2 lg:space-y-5 h-full"
                  key={index}
                >
                  <img
                    src={cardImage?.url}
                    alt={cardImage?.alternativeText}
                    className="w-auto h-10 lg:h-20 object-scale-down"
                  />
                  <blockquote className="text-[#191919] font-medium text-xl lg:text-2xl tracking-[0.02em] lg:leading-9">
                    {product?.cardHeading}
                  </blockquote>
                  <figcaption className="text-lightGray font-normal text-base lg:text-lg tracking-[0.02em] lg:leading-7">
                    {product?.cardDescription}
                  </figcaption>
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
  
  );
}
