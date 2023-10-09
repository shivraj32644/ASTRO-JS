import { Tab } from "@headlessui/react";
import classNames from "classnames";
import React from "react";
import { normalizeCmsImage } from "../../../utils/common";

function PanelCard({data}:any) {
  const image = normalizeCmsImage(data?.tabPanelImage);
  return (
    <div className="mt-5 lg:mt-10 p-5 lg:p-10 bg-white flex lg:flex-row flex-col item-center justify-between gap-8 lg:gap-16 rounded-lg border">
      <div className="bg-light rounded-lg border max-w-md lg:max-w-xl h-auto">
        <img
          src={image?.url}
          alt={image?.alternativeText}
          className="p-5 h-full w-auto"
        />
      </div>
      <div>
        <h1 className="font-medium text-lg lg:text-[28px] tracking-[0.02em] text-[#191919] lg:leading-[42px] lg:my-0 my-4">
          {data?.tabPanelCardHeading}
        </h1>
        <div className="flex flex-col gap-4 mb-4 lg:mb-8">
          {data?.productFeatures
            ?.split("\n")
            .map((product: any, index: number) => (
              <div className="flex items-center">
                <span className="text-[#555555] text-base lg:text-xl font-normal tracking-[0.02em] lg:leading-6">
                  {product}
                </span>
              </div>
            ))}
        </div>
        <a
          href={data?.productButton?.href}
          className={classNames(
            data?.buttonTheme === "primary" && "Button",
            data?.buttonTheme === "secondary" && "OutlineButton",
            "uppercase"
          )}
        >
          {data?.productButton?.label}
        </a>
      </div>
    </div>
  );
}

export const OurProductRComponent = ({ data }: any) => {
  return (
    <div>
      <Tab.Group>
        <Tab.List
          className={classNames(
            `Tabs TabsFillOutlined mb-6  text-center border !p-0 grid`,
            data?.productPanel?.length === 4 && `lg:grid-cols-4 grid-cols-1`,
            data?.productPanel?.length === 3 && `lg:grid-cols-3  grid-cols-1`,
            data?.productPanel?.length === 2 && `lg:grid-cols-2  grid-cols-1`,
            data?.productPanel?.length === 1 && `lg:grid-cols-1`
          )}
        >
          {data?.productPanel?.map((product: any, index: number) => (
            <Tab className="uppercase" key={index}>
              {product?.tabPanelHeading}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {data?.productPanel?.map((product: any, index: number) => (
            <Tab.Panel key={index}>
              <PanelCard data={product} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default OurProductRComponent;
