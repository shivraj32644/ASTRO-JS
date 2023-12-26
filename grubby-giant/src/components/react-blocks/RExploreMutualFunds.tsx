
import classNames from "classnames";
import { useEffect, useState } from "react";
import RequestDemoModal from "../shared/RequestDemoModal";
import axios from "axios";
import {PublicMutualFundCard} from '../react-shared/PublicMutualFundCard'
export function RExploreMutualFunds({
  data,
}: Readonly<{
  data: { heading?: string; subHeading?: string };
}>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [schema, setSchema] = useState<any>();
  useEffect(() => {
    setIsLoading(true);
    axios
      .post(`https://api.corpcare.co.in/mfschemes/products-listing`)
      .then((data) => {
        setSchema(data?.data);
      })
      .catch((error) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    // if (isError) {
    //   toast.custom((t) => (
    //     <CustomToast
    //       t={t}
    //       message={'Something went wrong! Please try again.'}
    //       type="error"
    //     />
    //   ));
    // }
  }, [isError]);
  return (
    <div className="bg-white ">
      <div className="container mx-auto lg:p-10 p-5">
        <h2
          className="font-medium text-lg lg:text-xl tracking-[0.02em] text-brand uppercase text-left overflow-hidden before:h-[2px] after:h-[2px] after:bg-brand 
           after:inline-block after:relative after:align-middle after:w-6
           before:bg-brand before:inline-block before:relative before:align-middle 
           before:w-6 before:right-2 after:left-2 p-4"
        >
          {data?.heading}
        </h2>
        <h1 className="font-medium text-2xl lg:text-4xl tracking-[0.02em] text-[#191919] text-left max-w-lg">
          {data?.subHeading}
        </h1>
        <div
          className={classNames(
            "grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6 lg:mt-[41px]",
            schema?.length !== 0 && !isLoading && !isError
              ? ""
              : "animate-pulse relative"
          )}
        >
          {schema?.length !== 0 && !isLoading && !isError ? (
            <>
              {schema?.map((mf:any, index:number) => (
                <PublicMutualFundCard
                  key={mf?.scheme_name}
                  heading={mf?.scheme_name}
                  category={mf?.category}
                  data={mf?.p2p_returns}
                  logo={
                    !mf?.amc_logo_url ? "/images/favicon.png" : mf?.amc_logo_url
                  }
                  alternativeText={mf?.amc}
                  onAddToCart={() => {
                    setIsOpen(true);
                  }}
                />
              ))}
            </>
          ) : (
            <>
              <div className="h-full bg-gray-200 rounded-lg min-h-[224px] lg:min-h-[280px]" />
              <div className="h-full bg-gray-200 rounded-lg min-h-[224px] lg:min-h-[280px]" />
              <div className="h-full bg-gray-200 rounded-lg min-h-[224px] lg:min-h-[280px]" />
              <div className="h-full bg-gray-200 rounded-lg min-h-[224px] lg:min-h-[280px]" />
              <span className="sr-only">Loading...</span>
            </>
          )}
        </div>
      </div>
      <RequestDemoModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
}
