
import classNames from 'classnames';
import { useState } from 'react';
import  ReactMarkdown  from 'react-markdown';
import type { IFAQ } from '../../../schemas/block';

function FaqItem({ question, answer }: Readonly<{ question?: string; answer?: string }>) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="py-4 px-5 border-b last:border-b-0">
      <p
        className="flex group lg:p-2 cursor-pointer text-lightGray items-center hover:text-brand transition"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="flex-grow text-base lg:text-lg">{question}</span>
        <span
          className={classNames(
            'px-2 rounded-full  transition-transform',
            isExpanded ? '-rotate-180' : ''
          )}
        >
          {/* <ChevronCircleArrowIcon className="lg:w-6 lg:h-6 w-5 h-5" /> */}
        </span>
      </p>

      {isExpanded && (
        <div className="markdown-body !bg-white">
          <ReactMarkdown
            className="p-2 text-sm lg:text-base text-lightGray"
            children={answer as string}
            // remarkPlugins={[remarkGfm]}
            // linkTarget="_blank"
          />
        </div>
      )}
    </div>
  );
}

export function RFAQ({ data }: Readonly<{ data?: IFAQ }>) {
  return (
    <div className="border rounded-lg bg-white mx-auto">
    {data?.disclosure?.map((item:any, index:number) => (
      <FaqItem
        key={index}
        question={item?.disclosureHeading}
        answer={item?.disclosureDescription}
      />
    ))}
  </div>
  );
}
