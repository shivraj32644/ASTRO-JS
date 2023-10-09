export interface Image {
    id: number;
    attributes: {
      alternativeText: string;
      url: string;
      formats: null | {
        small?: { url: string };
        thumbnail?: { url: string };
      };
    };
  }
  export interface CmsImage {
    data: Image;
  }
  