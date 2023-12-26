
import classNames from 'classnames';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import type { IJoinOurTeam } from '../../../schemas/block';
import {RJoinUsModal} from '../react-shared/RJoinUsModal';

export function RJoinOurTeam({ data }: { data?: IJoinOurTeam }) {
  const [openedIndex, setOpenedIndex] = useState(
    Array(data?.positions?.length).fill(false)
  );
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="openPosition" className="bg-white relative">
      <div className="flex flex-col gap-y-10">
            {data?.positions?.map((position, index) => {
              return (
                <div
                  key={index}
                  className={classNames(
                    'border border-brand rounded-md p-4 lg:p-8 overflow-hidden',
                    openedIndex[index]
                      ? 'h-[6.75rem] lg:h-[6.5625rem] '
                      : 'h-full'
                  )}
                >
                  <div
                    className="flex justify-between h-[6.75rem] lg:h-[6.5625rem] cursor-pointer"
                    onClick={() =>
                      setOpenedIndex((p) => {
                        const _new = [...p];
                        _new[index] = !p[index];
                        return _new;
                      })
                    }
                  >
                    <h2 className="text-2xl lg:text-[1.75rem] tracking-[0.02em] font-medium">
                      {position?.role}
                    </h2>
                    <span
                      className={classNames(
                        'h-fit px-2 rounded-full  transition-transform',
                        openedIndex[index] ? '-rotate-180' : ''
                      )}
                    >
                      {/* <ChevronCircleArrowIcon className="lg:w-6 lg:h-6 w-5 h-5" /> */}
                    </span>
                  </div>

                  <div className="markdown-body !bg-white">
                    <ReactMarkdown
                      className="text-sm lg:text-base tracking-[0.02em] text-[#555555] "
                      children={position?.description as string}
                     
                    />
                  </div>
                  <button
                    className={classNames(
                      'w-44',
                      position?.applyLink?.theme === 'primary' && 'Button',
                      position?.applyLink?.theme === 'secondary' &&
                        'OutlineButton'
                    )}
                    onClick={() => setIsOpen(true)}
                  >
                    {position?.applyLink?.label}
                  </button>
                </div>
              );
            })}
          </div>
      {/* <RJoinUsModal closeModal={() => setIsOpen(false)} isOpen={isOpen} /> */}
    </div>
  );
}
