
import classNames from "classnames";
import { Disclosure } from "@headlessui/react";

import { globalData } from "../../../../../data/global";
import { normalizeCmsImage } from "../../../../../utils/common";
const RFooter = () => {
    const footerImage = normalizeCmsImage(globalData?.attributes?.footer?.footerImage);
  return (
    <div>
      <div className="flex flex-col">
        <section className="lg:flex justify-between flex-wrap container mx-auto hidden lg:p-10 p-5">
          {globalData?.attributes?.footer?.footerColumns?.map((item, index) => {
            return (
              <div key={index} className="space-y-5">
                <h1 className="text-lg text-white  tracking-[0.02em] font-normal leading-7 overflow-hidden after:h-[2px] after:bg-white after:flex after:relative after:w-6 after:right-0">
                  {item?.title}
                </h1>
                <div className="flex flex-col  item-center justify-between flex-wrap max-w-[260px] gap-3">
                  {item?.links?.map((link, index) => {
                    const icon = !link?.linkImage?.data
                      ? null
                      : normalizeCmsImage(link?.linkImage);
                    return (
                      <div key={index} className="flex  items-start gap-3">
                        {!!link?.linkImage?.data && (
                          <img
                            src={icon?.url}
                            alt={icon?.alternativeText}
                            className="flex-shrink-0"
                          />
                        )}
                        {typeof link?.href === "string" &&
                        link?.href === "#" ? (
                          <>
                            <h4 className="text-base  text-[#CCCCCC] tracking-[0.02em] font-normal leading-6">
                              {link?.label}
                            </h4>
                          </>
                        ) : (
                          <>
                            <a
                              href={
                                link?.isExternal ? link?.href : `${link?.href}`
                              }
                              target={link?.target||"_blank"}
                              className="text-base text-[#CCCCCC] tracking-[0.02em] font-normal leading-6"
                            >
                              {link?.label}
                            </a>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
        <section className="lg:hidden flex flex-col justify-between flex-wrap lg:p-10 p-5 container mx-auto gap-6">
          {globalData?.attributes?.footer?.footerColumns?.map((item, index) => {
            return (
              <Disclosure  key={index} >
                {({ open }: { open: boolean }) => (
                  <>
                    <Disclosure.Button className="flex  justify-between items-center">
                      <h1 className="text-lg text-white tracking-[0.02em] font-normal leading-7 overflow-hidden after:h-[2px] after:bg-white after:flex after:relative after:w-6 after:right-0">
                        {item?.title || ""}
                      </h1>
                      <span
                        className={classNames(
                          "px-2 rounded-full  transition-transform",
                          open ? "-rotate-180" : ""
                        )}
                      >
                        icon
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="flex flex-col">
                      <div className="flex flex-col item-center justify-between flex-wrap max-w-[260px] gap-3">
                        {item?.links?.map((link, index) => {
                          const icon = !link?.linkImage?.data
                            ? null
                            : normalizeCmsImage(link?.linkImage);
                          return (
                            <div key={index} className="flex  items-start gap-3">
                              {!!link?.linkImage?.data && (
                                <img
                                  src={icon?.url}
                                  alt={icon?.alternativeText}
                                  className="flex-shrink-0"
                                />
                              )}
                              {typeof link?.href === "string" &&
                              link?.href === "#" ? (
                                <>
                                  <h4 className="text-base  text-[#CCCCCC] tracking-[0.02em] font-normal leading-6">
                                    {link?.label}
                                  </h4>
                                </>
                              ) : (
                                <>
                                  <a
                                    href={
                                      link?.isExternal
                                        ? link?.href
                                        : `${link?.href}`
                                    }
                                    target={link?.target||"_blank"}
                                    className="text-base text-[#CCCCCC] tracking-[0.02em] font-normal leading-6"
                                  >
                                    {link?.label}
                                  </a>
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </section>
        <section
          style={{
            boxShadow:
              "0px -1px 0px rgba(241, 236, 229, 0.2), 0px 1px 0px rgba(241, 236, 229, 0.2)",
          }}
        >
          <div className="flex justify-between mx-auto container py-5 px-5 lg:px-10">
            <div className="flex justify-start flex-1">
              <a href="/">
                <img
                  className="h-5 lg:h-9 w-auto"
                  src={footerImage?.url}
                  alt={footerImage?.alternativeText}
                />
              </a>
            </div>
            <div className="flex justify-between gap-6">
              {globalData?.attributes?.footer?.socialNetworks?.map(
                (item, index) => {
                  const socialImage = normalizeCmsImage(item?.socialImage);
                  return (
                    <a key={index} href={item?.url} target="_blank">
                      <img
                        className="h-5 lg:h-8 w-auto"
                        src={socialImage?.url}
                        alt={socialImage?.alternativeText}
                      />
                    </a>
                  );
                }
              )}
            </div>
          </div>
        </section>
        <section className="flex lg:flex-row flex-col justify-between pt-5 lg:py-5 container mx-auto gap-3 lg:items-start items-center lg:px-10 px-5">
          <p className="text-base font-normal tracking-[0.02em] leading-6 text-[#CCCCCC]">
            {globalData?.attributes?.footer?.footerLabel}
          </p>
          <div className="flex justify-between gap-6 lg:gap-[42px] flex-wrap">
            {globalData?.attributes?.footer?.footerBottomLinks?.map(
              (item, index) => (
                <a key={index}
                  href={item?.isExternal ? item?.href : `${item?.href}`}
                  target={item?.target||"_blank"}
                  className="text-base font-normal tracking-[0.02em] leading-6 text-[#CCCCCC]"
                >
                  {item?.label}
                </a>
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RFooter;
