import {type QueryFunctionContext, useMutation, useQuery } from 'react-query';

import { cmsApiInstance } from './common';
import type { IForm } from '../schemas/shared';
const FORM_DATA_DETAILS = 'FORM_DATA_DETAILS';
export interface ILeads {
  formName: string;
  data: {
    name: string;
    email: string;
    phone: number;
    uploadfile?: string;
    message?: string;
    company?: string;
    mobile: number;
  };
  formOrigin: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
export async function fetchFormDataDetails({
  queryKey,
}: QueryFunctionContext<[string, string | undefined]>) {
  const [, slug] = queryKey;
  const {
    data: { data },
  } = await cmsApiInstance.get<{
    data: {
      attributes: IForm;
    }[];
  }>(`/forms?&filters[$and][0][slug][$eq]=${slug}&populate=deep,5`);
  return data[0]?.attributes;
}

export function useGetFetchFormDataDetails(slug?: string) {
  return useQuery([FORM_DATA_DETAILS, slug], fetchFormDataDetails, {
    enabled: !!slug,
  });
}

async function getLeads({ queryKey }: QueryFunctionContext<[string, string]>) {
  const [, formOrigin] = queryKey;
  const { data } = await cmsApiInstance.get<{
    data: {
      attributes: ILeads;
    }[];
    meta: {
      pagination: IPagination;
    };
  }>(
    `/form-data?populate=deep,5&filters[$and][0][formOrigin][$eq]=${formOrigin}&sort=createdAt:desc`
  );
  return data;
}

export function useGetFetchLeads(formOrigin: string) {
  return useQuery(['FormData', formOrigin], getLeads);
}

export interface IFormData {
  token?: string;
  formName?: string;
  data?: {
    name?: string;
    email?: string;
    phone?: number;
    message?: string;
  };
  formOrigin?:
    | 'contact-us'
    | 'partner-with-us'
    | 'stay-tuned'
    | 'query-support'
    | 'webinar-register'
    | 'request-demo'
    | 'join-us';
}
async function submitFormData(payload: IFormData) {
  const {
    data: { data: response },
  } = await cmsApiInstance.post<{
    data: any;
  }>(`/form-data/`, {
    data: payload,
  });
  return response;
}

export function useSubmitFormData() {
  return useMutation(submitFormData);
}

async function uploadFileOnMediaLibrary(payload: { file: File | '' }) {
  const { file } = payload;
  const formData = new FormData();
  formData.append('files', file);
  const { data } = await cmsApiInstance.post<
    {
      id?: number;
      name?: string;
      alternativeText?: null;
      caption?: null;
      width?: number;
      height?: number;
      formats?: null;
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: null;
      provider?: string;
      provider_metadata?: null;
      createdAt?: Date;
      updatedAt?: Date;
    }[]
  >(`/upload/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  });

  return data[0];
}

export function useUploadFileOnMediaLibrary() {
  return useMutation(uploadFileOnMediaLibrary);
}

async function deleteFileOnMediaLibrary(id?: number) {
  const { data } = await cmsApiInstance.delete<{ data: any }>(
    `/upload/files/${id}`
  );

  return data;
}

export function useDeleteFileOnMediaLibrary() {
  return useMutation(deleteFileOnMediaLibrary);
}
