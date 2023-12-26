
import { Fragment, useEffect, useState } from 'react';
import { cmsApiInstance } from '../../../api-requests/common';
import type { IArticlesCard } from '../../../schemas/shared';
import { FaFacebookSquare,FaTwitter,FaLinkedin } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { normalizeCmsImage } from '../../../utils/common';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogDetails = ({slug}:{slug?:string}) => {
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)
    const [pageData,setPageData]= useState<IArticlesCard & { Blocks: any }>()
  useEffect(() => {
    console.log("use effect entry")
    setIsLoading(true)
   cmsApiInstance.get<{
      data: {
        attributes: IArticlesCard & { Blocks: any };
      }[];
    }>(`/articles?filters[slug]=${slug}&populate=deep,5`).then((res)=>{
        setPageData(res?.data?.data[0]?.attributes)
        console.log("res",res)
    }).catch((error)=>{
        setIsError(true)
        console.log("catch",error)
    }).finally(()=>{
        setIsLoading(false)
        console.log("final")
    })
  }, [slug]);
  const icon = normalizeCmsImage(pageData?.category?.data?.attributes?.image);
  const image = normalizeCmsImage(pageData?.Image);
  console.log("pageData",pageData)
  console.log("blogId",slug)
  return (
    <div>
      {isLoading || isError || !pageData?.slug ? (
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
        <>
          <div className="container mx-auto flex lg:flex-row flex-col lg:gap-[90px] py-10 lg:py-[80px] lg:px-10 px-5">
            <div className="flex-col gap-6 items-center lg:flex hidden">
              {pageData?.social?.map((_social, index) => {
                const type = _social?.socialNetwork || "";
                return (
                  <Fragment key={type + index}>
                    {type === "Facebook" && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={_social?.url}
                        
                      >
                        <FaFacebookSquare className="w-8 text-brand h-8 flex-shrink-0  cursor-pointer" />
                      </a>
                    )}
                    {type === "Twitter" && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={_social?.url}
                      
                      >
                        <FaTwitter className="w-8 h-8 flex-shrink-0 text-brand cursor-pointer" />
                      </a>
                    )}
                    {type === "Linkedin" && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={_social?.url}
                       
                      >
                        <FaLinkedin className="w-8 h-8 flex-shrink-0 text-brand cursor-pointer" />
                      </a>
                    )}
                  </Fragment>
                );
              })}
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#191919] font-medium text-xl lg:text-4xl tracking-[0.02em]">
                {pageData?.title}
              </h1>
              <div className="flex items-center gap-5 pt-4 mb-8 lg:mb-10">
               
                <div className="flex items-center gap-[6px]">
                  <CiCalendar className="w-5 h-5 text-brand" />
                  <div
                    suppressHydrationWarning
                    className="text-lighterGray tracking-[0.02em] font-normal text-base"
                  >
                    {new Date(pageData?.publishAt as string).toLocaleDateString(
                      undefined,
                      {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-5 items-center pt-4 mb-5 lg:hidden">
                {pageData?.social?.map((_social, index) => {
                  const type = _social?.socialNetwork || "";
                  return (
                    <Fragment key={type + index}>
                      {type === "Facebook" && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={_social?.url}
                        >
                          <FaFacebookSquare className="w-6 h-6 flex-shrink-0  cursor-pointer" />
                        </a>
                      )}
                      {type === "Twitter" && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={_social?.url}
                          
                        >
                          <FaTwitter className="w-6 h-6 flex-shrink-0  cursor-pointer" />
                        </a>
                      )}
                      {type === "Linkedin" && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={_social?.url}
                          
                        >
                          <FaLinkedin className="w-6 h-6 flex-shrink-0  cursor-pointer" />
                        </a>
                      )}
                    </Fragment>
                  );
                })}
              </div>
              <section className="flex flex-col bg-white border rounded-lg border-brandLight p-5 lg:p-10 ">
                <img
                  src={image?.url}
                  alt={image?.alternativeText}
                  className="h-40 lg:h-[450px] object-cover w-auto self-center mb-6 lg:mb-8"
                />
                <div className="markdown-body !bg-white">
                  {/* <MarkdownPreviewer
                    className="text-base lg:text-lg font-medium tracking-[0.02em] text-lightGray"
                    data={pageData?.content}
                    // remarkPlugins={[remarkGfm]}
                    // linkTarget="_blank"
                  /> */}
                  <Markdown 
                  className="text-base lg:text-lg font-medium tracking-[0.02em] text-lightGray"
                  remarkPlugins={[remarkGfm]}>{pageData?.content ||""}</Markdown>
                </div>
              </section>
            </div>
          </div>
          {/* {pageData?.Blocks?.length !== 0 && (
            <BlockManager blocks={pageData?.Blocks} />
          )} */}
        </>
      )}
    </div>
  );
};

export default BlogDetails;
