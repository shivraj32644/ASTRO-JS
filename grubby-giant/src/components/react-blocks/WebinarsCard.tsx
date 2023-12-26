import classNames from 'classnames';
import ReactPaginate from 'react-paginate';
import { PreviousWebinarsCard } from '../shared/PreviousWebinarsCard';
import { UpcomingWebinarsCard } from '../shared/UpcomingWebinarsCard';

export function WebinarsCard({
  data,
  pagination,
  webinars,
  pageNumber,
  setPageNumber,
}) {
  return (
    <div className="container mx-auto p-5 lg:p-10">
      {data?.heading && (
        <h2
          className="font-medium text-lg lg:text-xl tracking-[0.02em] text-brand uppercase text-left overflow-hidden before:h-[2px] after:h-[2px] after:bg-brand 
           after:inline-block after:relative after:align-middle after:w-6
           before:bg-brand before:inline-block before:relative before:align-middle 
           before:w-6 before:right-2 after:left-2 p-4"
        >
          {data?.heading}
        </h2>
      )}

      <h1 className="font-medium text-2xl lg:text-4xl tracking-[0.02em] text-[#191919] mb-5 lg:mb-10 text-left">
        {data?.subHeading}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {data?.webinarType === 'upcoming' &&
          webinars?.map(({ attributes, id }, index) => (
            <UpcomingWebinarsCard data={attributes} key={id + index} />
          ))}
        {data?.webinarType === 'previous' &&
          webinars?.map(({ attributes, id }, index) => (
            <PreviousWebinarsCard data={attributes} key={id + index} />
          ))}
        {webinars?.length !== 0 && (
          <ReactPaginate
            onPageChange={({ selected }) => setPageNumber(selected + 1)}
            pageCount={pagination?.pageCount}
            containerClassName="flex items-center my-4 gap-4 text-base lg:text-lg capitalize col-span-1 md:col-span-2 lg:col-span-3 lg:justify-end justify-between px-4 pt-2"
            previousClassName={classNames(
              'px-4 py-2 bg-white rounded-md text-black',
              pageNumber && pageNumber <= pagination?.total
                ? 'bg-brandLight cursor-not-allowed'
                : 'hover:bg-brand cursor-pointer hover:text-white'
            )}
            nextClassName={classNames(
              'px-4 py-2 bg-white rounded-md text-black',
              pageNumber && pageNumber <= pagination?.pageCount
                ? 'bg-brandLight cursor-not-allowed'
                : 'hover:bg-brand cursor-pointer hover:text-white'
            )}
            previousLabel="previous"
            nextLabel="next"
            previousLinkClassName={classNames(
              pageNumber && pageNumber <= pagination?.total
                ? 'hover:text-black cursor-not-allowed'
                : 'hover:text-white'
            )}
            nextLinkClassName={classNames(
              pageNumber && pageNumber <= pagination?.pageCount
                ? 'hover:text-black cursor-not-allowed'
                : 'hover:text-white'
            )}
            pageClassName="lg:block hidden"
            breakLinkClassName="lg:block hidden"
            pageLinkClassName="bg-white rounded-md py-2 px-4 hover:bg-brand text-black hover:text-white lg:block hidden"
            activeLinkClassName="!bg-brand hover:!bg-white !text-white hover:!text-black"
          />
        )}
      </div>
    </div>
  );
}
