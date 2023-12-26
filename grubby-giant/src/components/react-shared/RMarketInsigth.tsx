"use client";

import ReactPaginate from "react-paginate";
import classNames from "classnames";
import InsightCard from "./InsightCard";

import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useGetInsightListing } from "../../../api-requests/insight";
import { notify } from "../../../utils/notify";
import type { IInsightCard } from "../../../schemas/shared";
const loadingArr = [1, 2, 3, 4, 5, 6];

interface Itype {
  pagination?: {
    page: number;
    pageSize?: number;
    pageCount?: number;
    total?: number;
  };
  insights: {
    attributes: IInsightCard;
  }[];
}

export const Articles = () => {
  const [wrapUpPageNumber, setWrapUpPageNumber] = useState<number>(1);
  const [insightPageNumber, setInsightPageNumber] = useState<number>(1);
  const [bitesPageNumber, setBitesPageNumber] = useState<number>(1);
  const wrapUpRef = useRef<HTMLHeadingElement>(null!);
  const insightRef = useRef<HTMLHeadingElement>(null!);
  const bitesRef = useRef<HTMLHeadingElement>(null!);
  const [marketWrapUpData, setMarketWrapUpData] = useState<Itype>();
  const [marketInsightsData, setMarketInsightsData] = useState<Itype>();
  const [marketBites, setMarketBites] = useState<Itype>();
  const isError = false;
  const isLoading = false;
  const isMarketInsightLoading = false;
  const isMarketBitesLoading = false;
  async function resolveData(
    pageNo: number,
    typeOfInsight: string,
    noOfInsight: number
  ) {
    const data = await useGetInsightListing(pageNo, typeOfInsight, noOfInsight);

    return data;
  }

  useEffect(() => {
    resolveData(wrapUpPageNumber, "Market Wrap-up", 6).then((res) => {
      setMarketWrapUpData(res);
    });
  }, [wrapUpPageNumber]);
  useEffect(() => {
    resolveData(insightPageNumber, "Investment", 6).then((res) => {
      setMarketInsightsData(res);
    });
  }, [insightPageNumber]);
  useEffect(() => {
    resolveData(bitesPageNumber, "MMarket Bites", 6).then((res) => {
      setMarketBites(res);
    });
  }, [bitesPageNumber]);

  // console.log("marketWrapUpData", marketWrapUpData);
  // console.log("marketInsightsData", marketInsightsData);
  // console.log("marketBites", marketBites);
  useEffect(() => {
    if (isError) {
      notify(toast, "Something went wrong! Please try again.", "error");
    }
  }, [isError]);

  return (
    <div
      ref={wrapUpRef}
      className="container mx-auto lg:px-10 px-5 py-16 lg:py-[80px]"
    >
      <h3 className="px-4 lg:px-0 py-3 text-3xl mb-3 font-medium lg:font-semibold border-b lg:border-b-0 border-[#EDD5AB] bg-[#FFFDFA] lg:bg-transparent flex items-center justify-between">
        Market Wrapup
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  place-items-center">
        {isLoading || isError ? (
          <>
            {/* {loadingArr.map((no) => (
                  <div
                    key={no}
                    className="hover:shadow-md  cursor-pointer w-full lg:min-w-[350px] border-brandLight border rounded-md overflow-hidden"
                  >
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="235px"
                    />
                    <div className="flex h items-center gap-x-3 lg:gap-x-5 my-[0.875rem] px-2 lg:px-5 ">
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{ fontSize: '0.9rem' }}
                      />
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{ fontSize: '0.9rem' }}
                      />
                    </div>
                    <p
                      id="text"
                      className="text-[1.35rem] h-[82px]   lg:text-2xl mb-3 lg:mb-4 px-2 lg:px-5 border-t border-brandLight pt-3 lg:pt-4"
                    >
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{
                          fontSize: '0.9rem',
                        }}
                      />
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{
                          fontSize: '0.9rem',
                        }}
                      />
                    </p>
                    <div className="text-brand text-[0.875rem] lg:text-base px-2 lg:px-5 py-2">
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{
                          fontSize: '0.9rem',
                        }}
                      />
                    </div>
                  </div>
                ))} */}
            Loading...
          </>
        ) : (
          marketWrapUpData?.insights?.map(({ attributes }, index) => (
            <InsightCard data={attributes} key={index} />
          ))
        )}
        <ReactPaginate
          onPageChange={({ selected }) => {
            setWrapUpPageNumber(selected + 1);
            wrapUpRef.current.scrollIntoView();
          }}
          pageCount={marketWrapUpData?.pagination?.pageCount as number}
          containerClassName="flex items-center  my-4 gap-4 text-base lg:text-lg capitalize col-span-1 md:col-span-2 lg:col-span-3 lg:justify-end justify-between px-4 pt-2"
          previousClassName={classNames(
            "px-4 py-2 bg-white  rounded-md text-black",
            marketWrapUpData?.pagination?.total && wrapUpPageNumber <= 1
              ? "bg-brandLight cursor-not-allowed"
              : "hover:bg-brand bg-brand cursor-pointer hover:text-white"
          )}
          nextClassName={classNames(
            "px-4 py-2 bg-white rounded-md text-black",
            marketWrapUpData?.pagination?.pageCount &&
              wrapUpPageNumber >= marketWrapUpData?.pagination?.pageCount
              ? "bg-brandLight cursor-not-allowed"
              : "hover:bg-brand bg-brand cursor-pointer hover:text-white"
          )}
          previousLabel="previous"
          nextLabel="next"
          previousLinkClassName={classNames(
            marketWrapUpData?.pagination?.total && wrapUpPageNumber <= 1
              ? "hover:text-black cursor-not-allowed"
              : "hover:text-white cursor-pointer"
          )}
          nextLinkClassName={classNames(
            marketWrapUpData?.pagination?.pageCount &&
              wrapUpPageNumber >= marketWrapUpData?.pagination?.pageCount
              ? "hover:text-black cursor-not-allowed"
              : "hover:text-white cursor-pointer"
          )}
          pageClassName="lg:block "
          breakLinkClassName="lg:block hidden"
          pageLinkClassName="bg-white rounded-md py-2 px-4 hover:bg-brand text-black hover:text-white lg:block hidden"
          activeLinkClassName="!bg-brand  hover:!text-white !text-white hover:!text-black"
        />
      </div>

      <div ref={insightRef}>
        <h3 className="px-4 lg:px-0 py-3 text-3xl mb-3 font-medium lg:font-semibold border-b lg:border-b-0 border-[#EDD5AB] bg-[#FFFDFA] lg:bg-transparent flex items-center justify-between">
          Market Insight
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  place-items-center">
          {isMarketInsightLoading ? (
            <>
              {/* {loadingArr.map((no) => (
                  <div
                    key={no}
                    className="hover:shadow-md  cursor-pointer w-full lg:min-w-[350px] border-brandLight border rounded-md overflow-hidden"
                  >
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="235px"
                    />
                    <div className="flex h items-center gap-x-3 lg:gap-x-5 my-[0.875rem] px-2 lg:px-5 ">
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{ fontSize: '0.9rem' }}
                      />
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{ fontSize: '0.9rem' }}
                      />
                    </div>
                    <p
                      id="text"
                      className="text-[1.35rem] h-[82px]   lg:text-2xl mb-3 lg:mb-4 px-2 lg:px-5 border-t border-brandLight pt-3 lg:pt-4"
                    >
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{
                          fontSize: '0.9rem',
                        }}
                      />
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{
                          fontSize: '0.9rem',
                        }}
                      />
                    </p>
                    <div className="text-brand text-[0.875rem] lg:text-base px-2 lg:px-5 py-2">
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{
                          fontSize: '0.9rem',
                        }}
                      />
                    </div>
                  </div>
                ))} */}
              loading...
            </>
          ) : (
            marketInsightsData?.insights?.map(({ attributes }, index) => (
              <InsightCard data={attributes} key={index} />
            ))
          )}
          <ReactPaginate
            onPageChange={({ selected }) => {
              setInsightPageNumber(selected + 1);
              insightRef.current.scrollIntoView(true);
            }}
            pageCount={marketInsightsData?.pagination?.pageCount as number}
            containerClassName="flex items-center my-4 gap-4 text-base lg:text-lg capitalize col-span-1 md:col-span-2 lg:col-span-3 lg:justify-end justify-between px-4 pt-2"
            previousClassName={classNames(
              "px-4 py-2 bg-white rounded-md text-black",
              marketInsightsData?.pagination?.total && insightPageNumber <= 1
                ? "bg-brandLight cursor-not-allowed"
                : "hover:bg-brand bg-brand cursor-pointer hover:text-white"
            )}
            nextClassName={classNames(
              "px-4 py-2 bg-white rounded-md text-black",
              marketInsightsData?.pagination?.pageCount &&
                insightPageNumber >= marketInsightsData?.pagination?.pageCount
                ? "bg-brandLight cursor-not-allowed"
                : "hover:bg-brand bg-brand cursor-pointer hover:text-white"
            )}
            previousLabel="previous"
            nextLabel="next"
            previousLinkClassName={classNames(
              marketInsightsData?.pagination?.total && insightPageNumber <= 1
                ? "hover:text-black cursor-not-allowed"
                : "hover:text-white cursor-pointer"
            )}
            nextLinkClassName={classNames(
              marketInsightsData?.pagination?.pageCount &&
                insightPageNumber >= marketInsightsData?.pagination?.pageCount
                ? "hover:text-black cursor-not-allowed"
                : "hover:text-white cursor-pointer"
            )}
            pageClassName="lg:block hidden"
            breakLinkClassName="lg:block hidden"
            pageLinkClassName="bg-white rounded-md py-2 px-4 hover:bg-brand text-black hover:text-white lg:block hidden"
            activeLinkClassName="!bg-brand  hover:!text-white !text-white hover:!text-black"
          />
        </div>
      </div>

      <div ref={bitesRef}>
        <h3 className="px-4 lg:px-0 py-3 text-3xl mb-3 font-medium lg:font-semibold border-b lg:border-b-0 border-[#EDD5AB] bg-[#FFFDFA] lg:bg-transparent flex items-center justify-between">
          Market Bites
        </h3>
        {marketBites?.insights && marketBites?.insights?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  place-items-center">
            {isMarketBitesLoading ? (
              <>
                {/* {loadingArr.map((no) => (
                  <div
                    key={no}
                    className="hover:shadow-md  cursor-pointer w-full lg:min-w-[350px] border-brandLight border rounded-md overflow-hidden"
                  >
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="235px"
                    />
                    <div className="flex h items-center gap-x-3 lg:gap-x-5 my-[0.875rem] px-2 lg:px-5 ">
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{ fontSize: '0.9rem' }}
                      />
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{ fontSize: '0.9rem' }}
                      />
                    </div>
                    <p
                      id="text"
                      className="text-[1.35rem] h-[82px]   lg:text-2xl mb-3 lg:mb-4 px-2 lg:px-5 border-t border-brandLight pt-3 lg:pt-4"
                    >
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{
                          fontSize: '0.9rem',
                        }}
                      />
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{
                          fontSize: '0.9rem',
                        }}
                      />
                    </p>
                    <div className="text-brand text-[0.875rem] lg:text-base px-2 lg:px-5 py-2">
                      <Skeleton
                        width="100%"
                        variant="text"
                        sx={{
                          fontSize: '0.9rem',
                        }}
                      />
                    </div>
                  </div>
                ))} */}
                Loading...
              </>
            ) : (
              marketBites?.insights?.map(({ attributes }, index) => (
                <InsightCard data={attributes} key={index} />
              ))
            )}
            <ReactPaginate
              onPageChange={({ selected }) => {
                setBitesPageNumber(selected + 1);
                bitesRef.current.scrollIntoView(true);
              }}
              pageCount={marketBites?.pagination?.pageCount as number}
              containerClassName="flex items-center my-4 gap-4 text-base lg:text-lg capitalize col-span-1 md:col-span-2 lg:col-span-3 lg:justify-end justify-between px-4 pt-2"
              previousClassName={classNames(
                "px-4 py-2 bg-white rounded-md text-black",
                marketBites?.pagination?.total && insightPageNumber <= 1
                  ? "bg-brandLight cursor-not-allowed"
                  : "hover:bg-brand bg-brand cursor-pointer hover:text-white"
              )}
              nextClassName={classNames(
                "px-4 py-2 bg-white rounded-md text-black",
                marketBites?.pagination?.pageCount &&
                  insightPageNumber >= marketBites?.pagination?.pageCount
                  ? "bg-brandLight cursor-not-allowed"
                  : "hover:bg-brand bg-brand cursor-pointer hover:text-white"
              )}
              previousLabel="previous"
              nextLabel="next"
              previousLinkClassName={classNames(
                marketBites?.pagination?.total && insightPageNumber <= 1
                  ? "hover:text-black cursor-not-allowed"
                  : "hover:text-white cursor-pointer"
              )}
              nextLinkClassName={classNames(
                marketBites?.pagination?.pageCount &&
                  insightPageNumber >= marketBites?.pagination?.pageCount
                  ? "hover:text-black cursor-not-allowed"
                  : "hover:text-white cursor-pointer"
              )}
              pageClassName="lg:block hidden"
              breakLinkClassName="lg:block hidden"
              pageLinkClassName="bg-white rounded-md py-2 px-4 hover:bg-brand text-black hover:text-white lg:block hidden"
              activeLinkClassName="!bg-brand  hover:!text-white !text-white hover:!text-black"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
