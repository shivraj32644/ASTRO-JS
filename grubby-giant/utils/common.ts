import type { Image } from "../schemas/common";

export const CMS_API_BASE= 'https://dev-cms.corpcare.co.in/api'


export function normalizeCmsImage(image:any) {
    if (!image || !image.data)
      return { url: '', alternativeText: '', small: '', thumbnail: '' };
    const {
      data: {
        attributes: { url, alternativeText, formats },
      },
    } = image;
    return {
      url:
        url?.split('/uploads/')?.length === 1
          ? url
          : CMS_API_BASE?.replace('/api', '') + url,
      alternativeText,
      small:
        url?.split('/uploads/')?.length === 1
          ? formats?.small?.url || url
          : CMS_API_BASE?.replace('/api', '') + (formats?.small?.url || url),
      thumbnail:
        url?.split('/uploads/')?.length === 1
          ? formats?.thumbnail?.url || url
          : CMS_API_BASE?.replace('/api', '') + (formats?.thumbnail?.url || url),
    };
  }

  export function normalizeMultipleCmsImage(image?: Image) {
    if (!image) return { url: '', alternativeText: '', small: '', thumbnail: '' };
  
    const {
      attributes: { url, alternativeText, formats },
    } = image;
  
    return {
      url:
        url?.split('/uploads/')?.length === 1
          ? url
          : CMS_API_BASE?.replace('/api', '') + url,
      alternativeText,
      small:
        url?.split('/uploads/')?.length === 1
          ? formats?.small?.url || url
          : CMS_API_BASE?.replace('/api', '') + (formats?.small?.url || url),
      thumbnail:
        url?.split('/uploads/')?.length === 1
          ? formats?.thumbnail?.url || url
          : CMS_API_BASE?.replace('/api', '') + (formats?.thumbnail?.url || url),
    };
  }