'use client';
import { IPressReleaseSchema } from '@corpcare/shared/api';
import { CalendarBrandIcon } from '@corpcare/web/ui';
import Link from 'next/link';
import React from 'react';

const PressReleaseCard = ({ data }: { data?: IPressReleaseSchema }) => {
  return (
    <>
      <Link
        target="_blank"
        className="border flex flex-col max-w-[335px] lg:max-w-[450px] hover:shadow-md cursor-pointer"
        href={data?.url ? data?.url : '#'}
      >
        <>
          <img
            src={data?.image_url}
            alt={''}
            className="h-[200px] lg:h-[234px] w-auto"
          />
          <div className="flex justify-between items-center gap-5 px-5 lg:px-[30px] pt-4">
            <div className="flex items-center gap-[6px]">
              <CalendarBrandIcon className="w-5 h-5 text-brand" />
              <div
                suppressHydrationWarning
                className="text-lightGray tracking-[0.02em] text-sm lg:text-base font-normal"
              >
                {new Date(data?.publishedAt as string).toLocaleDateString(
                  undefined,
                  {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                  }
                )}
              </div>
            </div>
          </div>
          <div className="px-5 lg:px-[30px] space-y-4 pb-3 lg:pb-[30px] pt-4">
            <h3
              id="text"
              className="text-[#191919] font-medium text-lg lg:text-lg tracking-[0.02em] lg:leading-9 "
            >
              {data?.title}
            </h3>
            <p className="text-brand uppercase cursor-pointer text-sm lg:text-base">
              Read More
            </p>
          </div>
        </>
      </Link>
      <style jsx>
        {`
          #text {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        `}
      </style>
    </>
  );
};

export default PressReleaseCard;
