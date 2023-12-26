
import { Disclosure, Tab } from '@headlessui/react';
import classNames from 'classnames';
import type { IColTabs } from '../../../schemas/block';
import { normalizeCmsImage } from '../../../utils/common';
import type { CmsImage } from '../../../schemas/common';


function TabPanelCard({
  data,
}: {
  data: {
    panelImage?: CmsImage;
  };
}) {
  const panelImage = normalizeCmsImage(data?.panelImage);
  return (
    <div className="p-5 lg:p-8 bg-white rounded-lg border flex items-center justify-center">
      <div className="bg-light rounded-lg border h-auto w-full">
        <img
          src={panelImage?.url}
          alt={panelImage?.alternativeText}
          className="p-5 h-full w-full"
        />
      </div>
    </div>
  );
}

export function RColTabs({ data }: { data?: IColTabs }) {
  return (
    <>
        <section className="hidden lg:block">
          <Tab.Group>
            <div className="flex gap-10 items-center">
              <Tab.List
                className={classNames(`flex flex-col order-2 gap-5 w-[40%]`)}
              >
                {data?.tabs?.map((panel, index) => {
                  const panelIcon = normalizeCmsImage(panel?.panelIcon);
                  return (
                    <Tab
                      className="bg-white rounded-lg border bored-brand py-5 px-6 flex flex-col gap-4"
                      key={index}
                    >
                      {({ selected }) => (
                        <>
                          <div className="flex gap-4 items-center">
                            <img
                              src={panelIcon?.url}
                              alt={panelIcon?.alternativeText}
                              className="w-8 h-8 flex-shrink-0"
                            />
                            <p className="text-black font-medium text-xl tracking-[0.02em] text-left">
                              {panel?.panelHeading}
                            </p>
                          </div>
                          {selected && (
                            <p className="text-lightGray font-normal text-lg tracking-[0.02em] text-left">
                              {panel?.panelDescription}
                            </p>
                          )}
                        </>
                      )}
                    </Tab>
                  );
                })}
              </Tab.List>

              <Tab.Panels className="w-3/4">
                {data?.tabs?.map((panel, index) => (
                  <Tab.Panel key={index}>
                    <TabPanelCard data={panel} />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </section>
        <section className="flex flex-col gap-5 lg:hidden">
          {data?.tabs?.map((panel, index) => {
            const panelIcon = normalizeCmsImage(panel?.panelIcon);
            const panelImage = normalizeCmsImage(panel?.panelImage);
            return (
              <Disclosure key={index}>
                {({ open }) => (
                  <section className="border rounded-xl px-5 py-3 flex flex-col gap-4">
                    <Disclosure.Button className="flex justify-between items-center w-full ">
                      <section className="flex items-center gap-4">
                        <img
                          src={panelIcon?.url}
                          alt={panelIcon?.alternativeText}
                          className="w-8 h-8 flex-shrink-0"
                        />
                        <p className="text-black font-medium text-lg tracking-[0.02em] text-left">
                          {panel?.panelHeading}
                        </p>
                      </section>
                      <span
                        className={classNames(
                          'px-2 rounded-full  transition-transform',
                          open ? '-rotate-180' : ''
                        )}
                      >
                        {/* <ChevronCircleArrowIcon className="w-5 h-5" /> */}
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="flex flex-col gap-5">
                      <p className="text-lightGray font-normal text-base tracking-[0.02em] text-left">
                        {panel?.panelDescription}
                      </p>
                      <div className="bg-light rounded-lg border h-auto w-full">
                        <img
                          src={panelImage?.url}
                          alt={panelImage?.alternativeText}
                          className="p-4 h-full w-full"
                        />
                      </div>
                    </Disclosure.Panel>
                  </section>
                )}
              </Disclosure>
            );
          })}
        </section>
     </>
  );
}
