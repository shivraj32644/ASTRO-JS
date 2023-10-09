
import type { CmsImage } from './common';

export interface ILink {
  href?: string;
  label?: string;
  target?: string;
  isExternal?: boolean;
  theme?: 'primary' | 'secondary';
  linkImage?: CmsImage;
}

export interface IArticlesCard {
  Image?: CmsImage;
  buttonText?: string;
  category?: {
    data?: {
      attributes?: {
        title?: string;
        image?: CmsImage;
      };
    };
  };
  content?: string;
  publishAt?: string;
  slug?: string;
  social?: {
    socialNetwork?: string;
    url?: string;
  }[];
  title?: string;
}

export interface IInsightCard {
  image?: CmsImage;
  category?: {
    data?: {
      attributes?: {
        title?: string;
        image?: CmsImage;
      };
    };
  };
  slug?: string;
  content?: string;
  title?: string;
  createdAt?: string;
  related?: {
    data?: { id: string; attributes: IInsightCard }[];
  };
  social?: {
    socialNetwork?: string;
    url?: string;
  }[];
  Blocks?: any;
}

export interface IForm {
  button?: ILink;
  inputs?: {
    label?: string;
    name?: string;
    placeholder?: string;
    type?: 'text' | 'tel' | 'textarea' | 'file';
    validations?: {
      type?: string;
      params?: string[];
    }[];
    validationType?: 'string';
  }[];
  slug?: string;
  title?: string;
}

export interface ITestimony {
  authorDesignation?: string;
  authorImage?: CmsImage;
  authorName?: string;
  comment?: string;
  rating?: number;
}

export interface ICard {
  cardHeading?: string;
  cardDescription?: string;
  cardImage?: CmsImage;
  cardContent?: string;
  Linkedin_Url?: string;
}

export interface ISubHeadingInParts {
  text?: string;
  color?: 'black' | 'white' | 'brand' | 'brandLight';
}

export interface IMiscellaneousFigure {
  alignment?:
    | 'Top-Left'
    | 'Top-Right'
    | 'Bottom-Left'
    | 'Bottom-Right'
    | 'Center-Left'
    | 'Center-Right';
  figure?: CmsImage;
}
