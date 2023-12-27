import { Card } from "@/app/components/Cards";
import Hero from "./Hero";
export default function Home({searchParams}:any){
    const data = searchParams.search;
    const refine = Card.filter((items:any) => data == items.title)
    // console.log(refine);
    return(
        <>         
        <Hero {...refine} />
        </>
    )
}