
import type { IInsightCard } from '../schemas/shared';


import { cmsApiInstance } from './common';
const INSIGHTS_LISTING = 'INSIGHTS_LISTING';

export async function fetchInsightListing(params:any) {
  const [page, category, limit] = params;
  const pageSize = limit;

  const {
    data: { data, meta },
  } = await cmsApiInstance.get<{
    data: {
      attributes: IInsightCard;
    }[];
    meta?: {
      pagination?: {
        page: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  }>(`/insights`, {
    params: {
      sort: 'createdAt:desc',
      populate: {
        0:"category",
        1:"image"
      },
      pagination: { page, pageSize },
      filters: {
        category: { title: category },
      },
      // fields: ['title', 'image', 'createdAt', 'category', 'slug'],
    },
  });




  return {
    data:{
      pagination: meta?.pagination,
      insights: data,
    }
  };
}

export async function useGetInsightListing(
  page?: number,
  category?: string,
  limit?: number
) {
  const {data} = await fetchInsightListing([page,category,limit]) 
  return data
}






