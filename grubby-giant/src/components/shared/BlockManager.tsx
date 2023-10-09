import Cta from "../Home/Cta.astro";
import Hero from "../Home/Hero.astro";
import HowWeAreDifferent from "../Home/HowWeAreDifferent.astro";
import OurClients from "../Home/OurClients.astro";
import OurProducts from "../Home/OurProducts.astro";
import ProductFeatures from "../Home/ProductFeatures.astro";
import Recognization from "../Home/Recognization.astro";
import RelatedInsights from "../Home/RelatedInsights.astro";
import ServicesWeOffer from "../Home/ServicesWeOffer.astro";
import WhyCorpcareIsDifferent from "../Home/WhyCorpcareIsDifferent.astro";

type IComponent =
  | "block.our-partners"
  | "block.hero"
  | "block.our-clients"
  | "block.product-features"
  | "block.why-corpcare-is-different"
  | "block.our-products"
  | "block.cta"
  | "block.corpcare-team"
  | "block.faq"
  | "block.services-we-offer"
  | "block.col-tabs"
  | "block.about-hero"
  | "block.the-way-it-works"
  | "block.how-we-are-different"
  | "block.related-articles"
  | "block.values-we-live-by"
  | "block.rich-content"
  | "block.benefits"
  | "block.whom-we-serve"
  | "block.how-can-we-help-you"
  | "block.about-card"
  | "block.other-services"
  | "block.fund-managers"
  | "block.why-corp-care-for-fixed-income"
  | "block.news"
  | "block.careers-hero"
  | "block.work-life-at-corp-care"
  | "block.be-the-part-of-corp-care-team"
  | "block.join-our-team"
  | "block.treasury-management"
  | "block.who-we-are"
  | "block.contact-us-cards"
  | "block.partner-with-us-hero"
  | "block.upcoming-webinars"
  | "block.stay-tuned"
  | "block.related-insights"
  | "block.browse-help-topics"
  | "block.contact-us-form"
  | "block.partner-with-us-form"
  | "block.related-insights"
  | "block.the-process-we-follow"
  | "block.query-support"
  | "block.explore-mutual-funds"
  | "block.recognizations"
  | "block.explore-aif-and-pms-funds"
  | "block.thank-you"
  | "block.advisory-description";

const getBlockComponent: (
  {
    __component,
    ...rest
  }: {
    [x: string]: any;
    __component: IComponent;
  },
  index: number
) => JSX.Element | null = ({ __component, ...data }, index) => {
  let Block;

  switch (__component) {
    case "block.hero":
      Block = Hero;
      break;
    case "block.cta":
      Block = Cta;
      break;
    case "block.our-clients":
      Block = OurClients;
      break;
    case "block.product-features":
      Block = ProductFeatures;
      break;
    case "block.why-corpcare-is-different":
      Block = WhyCorpcareIsDifferent;
      break;
    case "block.our-products":
      Block = OurProducts;
      break;

    case "block.services-we-offer":
      Block = ServicesWeOffer;
      break;

    case "block.how-we-are-different":
      Block = HowWeAreDifferent;
      break;

    case "block.related-insights":
      Block = RelatedInsights;
      break;

    case "block.recognizations":
      Block = Recognization;
      break;
  }
  return Block ? <Block key={`index-${index}`} data={data} /> : null;
};

const BlockManager = (data:any) => {
 
  return <>{data?.blocks?.map((block:any)=>getBlockComponent(block?.__component,block))}</>;
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;
