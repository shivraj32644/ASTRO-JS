import type { IArticlesCard } from "../schemas/shared";
import { cmsApiInstance } from "./common";


export async function fetchBlogDetails( queryKey:[string | undefined]) {
    const [slug] = queryKey;
    const {
      data: { data },
    } = await cmsApiInstance.get<{
      data: {
        attributes: IArticlesCard & { Blocks: any };
      }[];
    }>(`/articles?filters[slug]=${slug}&populate=deep,5`);
    return data[0]?.attributes;
  }
  
  export function getValue(slug?: string) {
        useGetFetchBlogDetails(true,null,false)
        fetchBlogDetails([slug]).then((res)=>{
            useGetFetchBlogDetails(false,res,false)
        }).catch((err)=>{
            useGetFetchBlogDetails(false,err,true)
        })
  }
  

  function useGetFetchBlogDetails(isLoading:boolean,val:any,isError:boolean){
    console.log(val)
    
  }