import { useState } from "react";
import { RRequestDemoModal } from "../react-shared/RRequestDemoModal";
import classNames from "classnames";
import type { IHero } from "../../../schemas/block";
import { normalizeCmsImage } from '../../../utils/common';

export function RHero({ data }: { data: IHero }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const backgroundImage = normalizeCmsImage(data?.backgroundImage);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${backgroundImage?.url})`, margin: 0 }}
        className="bg-cover bg-center bg-no-repeat bg-opacity-70 flex-1 max-h-[620px]"
      >
        <div className="lg:h-[520px] flex flex-col justify-end lg:justify-center container mx-auto lg:px-10 px-5 space-y-8 py-8 lg:py-60">
          <p className="text-[2rem] lg:text-5xl tracking-[0.02em] leading-[42px] lg:leading-tight font-semibold text-white max-w-xs lg:max-w-[595px] mr-auto">
            {data?.Content}
          </p>
          <button
            className={classNames(
              "w-44",
              data?.Button?.theme === "primary" && "Button",
              data?.Button?.theme === "secondary" && "OutlineButton"
            )}
            onClick={() => {
              console.log("hello");
              setIsOpen(true);
            }}
          >
            {data?.Button?.link?.label}
          </button>
        </div>
      </div>
      <RRequestDemoModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </>
  );
}
