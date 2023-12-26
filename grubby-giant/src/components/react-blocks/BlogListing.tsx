'use client'
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { notify } from '../../../utils/notify';
import { cmsApiInstance } from '../../../api-requests/common';
import type { IArticlesCard } from '../../../schemas/shared';
import { ArticlesCard } from '../react-shared/ArticlesCard';

export const BlogListing = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
    const [articles,setArticles] = useState<{
        data: {
          attributes: IArticlesCard;
        }[];
        meta?: {
          pagination?: {
            page: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
          };
        };
      }>()
    
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)

    
    useEffect(()=>{
        setIsLoading(true)
        cmsApiInstance.get<{
            data: {
              attributes: IArticlesCard;
            }[];
            meta?: {
              pagination?: {
                page: number;
                pageSize?: number;
                pageCount?: number;
                total?: number;
              };
            };
          }>(`/articles?populate[0]=Image&pagination[page]=${pageNumber}&pagination[pageSize]=${12}&pagination[withCount]=true`).then((result)=>{
            setArticles(result.data)
          }).catch(()=>{
            setIsError(true)
          }).finally(()=>{
            setIsLoading(false)
          })
    },[pageNumber])
   
  useEffect(() => {
    if (isError) {
      notify(toast,'Something went wrong! Please try again.',"error")
    }
  }, [isError]);
  return (
      <div className="container mx-auto lg:px-10 px-5 py-16 lg:py-[80px]">
        {isLoading || isError || articles?.meta?.pagination?.total === 0 ? (
          <div className="flex justify-center  items-center h-full">
            <div role="status" className="relative">
              <svg
                aria-hidden="true"
                className="mr-2 w-8 h-8 text-white animate-spin  fill-brand"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
            {articles?.data?.map(({ attributes }, index) => (
              <ArticlesCard data={attributes} key={index} />
            ))}
            <ReactPaginate
              onPageChange={({ selected }) => setPageNumber(selected + 1)}
              pageCount={articles?.meta?.pagination?.pageCount as number}
              containerClassName="flex items-center my-4 gap-4 text-base lg:text-lg capitalize col-span-1 md:col-span-2 lg:col-span-3 lg:justify-end justify-between px-4 pt-2"
              previousClassName={classNames(
                'px-4 py-2 bg-white rounded-md text-black',
                articles?.meta?.pagination?.total &&
                  pageNumber <= articles?.meta?.pagination?.total
                  ? 'bg-brandLight cursor-not-allowed'
                  : 'hover:bg-brand cursor-pointer hover:text-white'
              )}
              nextClassName={classNames(
                'px-4 py-2 bg-white rounded-md text-black',
                articles?.meta?.pagination?.pageCount &&
                  pageNumber <= articles?.meta?.pagination?.pageCount
                  ? 'bg-brandLight cursor-not-allowed'
                  : 'hover:bg-brand cursor-pointer hover:text-white'
              )}
              previousLabel="previous"
              nextLabel="next"
              previousLinkClassName={classNames(
                articles?.meta?.pagination?.total &&
                  pageNumber <= articles?.meta?.pagination?.total
                  ? 'hover:text-black cursor-not-allowed'
                  : 'hover:text-white'
              )}
              nextLinkClassName={classNames(
                articles?.meta?.pagination?.pageCount &&
                  pageNumber <= articles?.meta?.pagination?.pageCount
                  ? 'hover:text-black cursor-not-allowed'
                  : 'hover:text-white'
              )}
              pageClassName="lg:block hidden"
              breakLinkClassName="lg:block hidden"
              pageLinkClassName="bg-white rounded-md py-2 px-4 hover:bg-brand text-black hover:text-white lg:block hidden"
              activeLinkClassName="!bg-brand hover:!bg-white !text-white hover:!text-black"
            />
          </div>
        )}
      </div>
 
  );
};


