
import classNames from 'classnames';
import { useState } from 'react';
import { normalizeCmsImage } from '../../../utils/common';
import type { ICta } from '../../../schemas/block';
import { RRequestDemoModal } from '../react-shared/RRequestDemoModal';

export function Cta({ data }: { data?: ICta }) {
  const backgroundImage = normalizeCmsImage(data?.backgroundImage);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage?.url})` }}
      className="bg-cover bg-center bg-no-repeat bg-opacity-70 flex-1 h-full !mt-0"
    >
      <div className="h-[22.5rem] lg:h-[25rem] flex flex-col justify-end lg:justify-center container mx-auto space-y-8 lg:px-10 px-5 py-8 lg:py-[110px]">
        <p className="text-[2rem] lg:text-4xl tracking-[0.02em] lg:leading-[48px] font-semibold text-white max-w-sm lg:max-w-md mr-auto">
          {data?.content}
        </p>
        <button
          className={classNames(
            'text-base lg:text-lg w-48',
            data?.buttonTheme === 'primary' && 'Button',
            data?.buttonTheme === 'secondary' && 'OutlineButton'
          )}
          onClick={() =>
            // router?.push(`${data?.button?.href}`)
            setIsOpen(true)
          }
        >
          {data?.button?.label}
        </button>
      </div>
      <RRequestDemoModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
}
