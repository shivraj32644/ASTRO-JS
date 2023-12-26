import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { PdfIcon } from '@corpcare/web/ui';
export interface IAdvisoryDescriptionSchema {
  id: number;
  description: string;
}

const AdvisoryDescription = ({
  data,
}: {
  data: IAdvisoryDescriptionSchema;
}) => {
  
  return (
    <>
      <div
        className="bg-[#191919] text-xl px-4 lg:px-32 py-10 border-b border-secondaryColor text-white"
        style={{ margin: 0 }}
      >
        <h4 className="text-base lg:text-xl font-semibold text-white">
          Corpcare Advisory Private Limited{' '}
        </h4>

        <p className="text-sm lg:text-base text-white mt-1">
          SEBI registered Investment Adviser, Registration no: INA000018249
          (registration from July 21 2023 - perpetual)
        </p>

        <h4 className="text-white text-base lg:text-xl font-semibold mt-4">
          Type of registration – Non-Individual
        </h4>

        <p className="text-sm lg:text-base text-white mt-1">
          Registered Office: 12th Floor, Parinee Crescenzo, Block G, Next to
          Kautilya Bhawan – 2, Bandra Kurla Complex, Bandra East, Mumbai –
          400051, Maharashtra
        </p>

        <p className="text-sm lg:text-base text-white mt-1">
          Corresponding SEBI regional/local office address – Plot no C 4-A, G
          Block, Near Bank of India, Bandra Kurla Complex, Bandra East, Mumbai,
          Maharashtra – 400051
        </p>

        <p className="text-sm lg:text-base text-white mt-1">
          In case of grievances, clients can e-mail Corpcare Advisory Private
          Limited at admin@corpcare.co.in
        </p>

        <h4 className="text-white text-base lg:text-xl font-semibold mt-4">
          Disclaimer:
        </h4>

        <p className="text-sm lg:text-base text-white mt-1">
          Registration granted by SEBI, membership of BASL and certification
          from NISM in no way guarantee performance of the IA or provide any
          assurance of returns to investors.
        </p>

        <a
          target="_blank"
          className="OutlineButton inline-flex gap-2 mt-8"
          href="https://corpcare-cms-assets-dev.s3.ap-south-1.amazonaws.com/Corpcare_Investor_charter_0644fb8242.pdf"
        >
          {' '}
          <PdfIcon /> Investment charter
        </a>
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default AdvisoryDescription;
