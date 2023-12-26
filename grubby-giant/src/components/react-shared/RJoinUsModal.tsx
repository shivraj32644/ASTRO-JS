'use client'
import classNames from 'classnames';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import {  Fragment, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';


export function RJoinUsModal({
  isOpen,
  closeModal,
}: Readonly<{
  isOpen: boolean;
  closeModal: () => void;
}>) {
  const fileInputRef = useRef<HTMLInputElement>(null!);
  const { mutate, isLoading } = useSubmitFormData();
  const { data: form } = useGetFetchFormDataDetails('join-us-form');
  const { mutate: deleteFile } = useDeleteFileOnMediaLibrary();
  const {
    mutate: upload,
    isSuccess: isUploadedSuccess,
    data: uploadedFile,
    reset,
  } = useUploadFileOnMediaLibrary();
  const yupSchema = form?.inputs?.reduce(createYupSchema, {});
  const joinUsFormSchema = yup.object().shape(yupSchema);
  type JoinUsFormFields = yup.InferType<typeof joinUsFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset: resetForm,
  } = useForm<JoinUsFormFields>({
    resolver: yupResolver(joinUsFormSchema),
  });

  useEffect(() => {
    if (isOpen === false) {
      resetForm();
      reset();
      return;
    }
  }, [isOpen, resetForm, reset]);

  const handleFormSubmit = (data: any) => {
    const payload: any = {
      token: 'join-us-form',
      formName: 'join-us-form',
      data: data,
      formOrigin: 'join-us',
    };
    mutate(payload, {
      // onSuccess() {
        
      //   notify(toast,"Successfully Submitted Details","success")
      //   closeModal();
      // },
      // onError(err: any) {
        
      //   notify(toast,'Something went wrong! Please try again.',"error")
      // },
    });
  };
  const handleFileUpload = async (file: File, value: string) => {
    try {
      upload(
        { file },
        // {
        //   onSuccess(response) {
        //     setValue(value, response?.url);
            
        //     notify(toast,'SuccessFully Uploaded File',"success")
        //   },
        //   onError(err: any) {
        //     notify(toast,err?.message || 'Failed to upload file! Please try again.',"error")
        //   },
        // }
      );
    } catch (e) {
      console.error(e);
    }
  };

  function onFileInputChange(
    event: ChangeEvent<HTMLInputElement>,
    value: string
  ) {
    const { files } = event.target;
    if (!files) return;
    const filesArr = Array.from(files);
    filesArr.forEach((file) => handleFileUpload(file, value));
  }
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center lg:p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex relative flex-col items-start p-5 lg:p-7 w-full max-w-3xl transform overflow-y-auto rounded-lg bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" tracking-[0.02em] text-2xl lg:text-4xl lg:!leading-[48px] text-[#191919] font-medium flex items-start justify-center mb-3 lg:mb-6"
                  >
                    {form?.title}
                    <BlackCrossCircle
                      className="text-white w-4 h-4 lg:w-8 lg:h-8 flex-shrink-0 cursor-pointer"
                      onClick={closeModal}
                    />
                  </Dialog.Title>

                  <form
                    onSubmit={handleSubmit(handleFormSubmit)}
                    className={classNames(
                      'mx-auto w-full',
                      isLoading ? 'animate-pulse' : ''
                    )}
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {form?.inputs?.map((input, index) => {
                        const name = input?.name;
                        if (input?.type === 'file') {
                          return (
                            <label
                              key={index}
                              className="lg:col-span-1 col-span-2 flex flex-col items-start justify-start"
                            >
                              <span className="Label">{input?.label}</span>
                              {uploadedFile?.url && (
                                <img
                                  src={uploadedFile?.url}
                                  alt={uploadedFile?.name}
                                  className="object-cover min-w-[60px] max-w-full rounded-lg max-h-40 h-auto my-3"
                                />
                              )}
                              <input
                                type="file"
                                className="sr-only"
                                ref={fileInputRef}
                                onChange={(
                                  event: ChangeEvent<HTMLInputElement>
                                ) =>
                                  onFileInputChange(
                                    event,
                                    input?.name as string
                                  )
                                }
                                disabled={isUploadedSuccess}
                                accept=".png, .jpeg, .jpg,.pdf,.doc,.docx"
                              />
                              <div className="flex items-center justify-center gap-5">
                                <label
                                  className={classNames(
                                    'Button lg:py-2 lg:px-4 p-2 text-sm text-lightGray  border border-brand rounded bg-white font-normal cursor-pointer relative',
                                    isUploadedSuccess
                                      ? ' bg-[#D7FFE7] border-[#209E52] text-[#209E52] hover:bg-[#209E52] cursor-not-allowed'
                                      : ''
                                  )}
                                  onClick={handleButtonClick}
                                >
                                  {isUploadedSuccess
                                    ? 'Uploaded'
                                    : input?.placeholder}
                                </label>

                                <span
                                  className={classNames(
                                    'Button lg:py-2 lg:px-4 p-2 text-sm font-normal cursor-pointer relative',
                                    uploadedFile?.url
                                      ? ' bg-red-600 border-red-600 text-white hover:bg-red-500 cursor-not-allowed'
                                      : 'hidden'
                                  )}
                                  onClick={() => {
                                    if (!uploadedFile?.id) return;
                                    deleteFile(uploadedFile?.id);
                                    reset();
                                    fileInputRef.current.value = '';
                                    setValue(input?.name as string, '');
                                    handleButtonClick();
                                  }}
                                >
                                  Delete
                                </span>
                              </div>
                              <span className="FieldError">
                                {!!errors[`${name}`]?.message &&
                                  errors[`${name}`]?.message?.toString()}
                              </span>
                            </label>
                          );
                        }
                        return (
                          <label className="col-span-2" key={index}>
                            <span className="Label">{input?.label}</span>
                            <input
                              type={input?.type}
                              {...register(`${input?.name}`)}
                              placeholder={input?.placeholder}
                              className={classNames(
                                'Input',
                                errors &&
                                  errors[`${name}`] &&
                                  'border-brandError'
                              )}
                            />

                            <span className="FieldError">
                              {!!errors[`${name}`]?.message &&
                                errors[`${name}`]?.message?.toString()}
                            </span>
                          </label>
                        );
                      })}

                      <button
                        className={classNames(
                          'Button col-span-2 uppercase',
                          form?.button?.theme === 'primary' && 'Button',
                          form?.button?.theme === 'secondary' && 'OutlineButton'
                        )}
                        type="submit"
                        disabled={isLoading}
                      >
                        {form?.button?.label}
                        {isLoading && (
                          <SpinnerIcon className="w-6 h-6 text-white animate-spin fill-brand inline-flex ml-2" />
                        )}
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    
  );
}
