
import classNames from 'classnames';
import { Grid, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import  ReactMarkdown  from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { ICorpcareTeam } from '../../../schemas/block';
import { normalizeCmsImage } from '../../../utils/common';
import type { ICard } from '../../../schemas/shared';
export function RCorpcareTeam({ data }: { data?: ICorpcareTeam }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedManager, setSelectedManager] = useState<ICard | null>(null);
  const selectedManagerCardImage = normalizeCmsImage(
    selectedManager?.cardImage
  );
  return (
    <>
      <div className="bg-white relative">
        {data?.miscellaneousFigure?.map((item, index) => {
          const figure = normalizeCmsImage(item?.figure);

          return (
            <div
              key={index}
              className={classNames(
                'absolute',
                item?.alignment === 'Top-Left' && 'top-0 left-0',
                item?.alignment === 'Top-Right' && 'top-0 right-0',
                item?.alignment === 'Bottom-Left' && 'bottom-0 left-0',
                item?.alignment === 'Bottom-Right' && 'bottom-0 right-0',
                item?.alignment === 'Center-Left' && 'bottom-1/2 left-0',
                item?.alignment === 'Center-Right' && 'bottom-1/2 right-0'
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
        <div className="container mx-auto lg:p-10 p-5">
          <h1 className="w-fit mx-auto font-medium text-2xl lg:text-[2.25rem] tracking-[0.02em] text-left lg:leading-[48px] mb-[2.5rem]">
            {data?.headingParts?.map((item, idx) => {
              return (
                <span key={idx} className={classNames(`text-${item.color}`)}>
                  {item.text}
                </span>
              );
            })}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 bg-light border-brand border rounded-lg lg:divide-y-0 divide-y-2 lg:divide-x-2 divide-brand text-[#191919] font-normal text-lg lg:text-xl ">
            {data?.subHeadingParts?.map((part, idx) => {
              return (
                <span
                  key={idx}
                  className="py-2 lg:py-3 lg:px-3 px-6 text-center"
                >
                  {part?.text}
                </span>
              );
            })}
          </div>

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
            spaceBetween={60}
            className="!pb-12"
          >
            {data?.teamCard?.map((product, index) => {
              const cardImage = normalizeCmsImage(product?.cardImage);
              return (
                <SwiperSlide
                  key={index}
                  onClick={() => {
                    setIsOpen(true);
                    setSelectedManager(product);
                  }}
                  className="h-auto "
                >
                  <figure
                    className="p-5 lg:p-10 cursor-pointer h-full flex items-center flex-col"
                    key={index}
                  >
                    <img
                      src={cardImage?.url}
                      alt={cardImage?.alternativeText}
                      className="w-auto  h-[150px] lg:h-[300px] object-cover rounded-lg mb-5 "
                    />
                    <blockquote className="text-[#191919] font-medium text-xl lg:text-2xl tracking-[0.02em] lg:leading-9 capitalize mb-1">
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
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-h-[560px] max-w-[840px] transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-lg transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between text-lg lg:text-xl font-medium lg:leading-[30px] text-lightGray tracking-[0.02em] uppercase bg-light py-2 lg:py-4 px-3 lg:px-6"
                  >
                    {selectedManager?.cardHeading}
                    <svg
                      width="32"
                      height="32"
                      className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="15"
                        fill="white"
                        stroke="#C5A265"
                        strokeWidth="2"
                      />
                      <line
                        x1="1"
                        y1="-1"
                        x2="16.7881"
                        y2="-1"
                        transform="matrix(0.682563 0.730827 -0.682563 0.730827 10 10)"
                        stroke="#C5A265"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="1"
                        y1="-1"
                        x2="16.7881"
                        y2="-1"
                        transform="matrix(0.682563 -0.730827 0.682563 0.730827 10.8584 23)"
                        stroke="#C5A265"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Dialog.Title>
                  <div className="py-3 lg:py-5 px-5 lg:px-10 border-b">
                    <figure className="bg-white flex items-center gap-4">
                      <img
                        src={selectedManagerCardImage.url}
                        alt={selectedManagerCardImage?.alternativeText}
                        className="object-cover w-20 h-20 rounded-lg"
                      />
                      <figcaption className="px-3 lg:px-5 py-2 lg:py-4 flex flex-col gap-2 items-start">
                        <blockquote className="text-[#191919] tracking-[0.02em] font-normal text-base lg:text-xl lg:!leading-[30px]">
                          {selectedManager?.cardHeading}
                        </blockquote>
                        <div className="flex gap-3 items-center">
                          <p className="text-lightGray tracking-[0.02em] font-normal text-sm">
                            {selectedManager?.cardDescription}
                          </p>
                          <a
                            href={selectedManager?.Linkedin_Url || '#'}
                            target="_blank"
                            className="outline-none"
                          >
                            {/* <LinkedinIcon className="hover:text-[#0078d4] h-5 -ml-3 text-brand cursor-pointer" /> */}
                          </a>{' '}
                        </div>
                      </figcaption>
                    </figure>
                  </div>

                  <div className="px-5 lg:px-10 py-4 lg:py-8 overflow-y-auto max-h-[312px]">
                    <div className="markdown-body !bg-white">
                      <ReactMarkdown
                        className="text-sm lg:text-base tracking-[0.02em] text-[#555555] "
                        children={selectedManager?.cardContent as string}
                        // remarkPlugins={[remarkGfm]}
                        // linkTarget="_blank"
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
