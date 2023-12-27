import Image from "next/image";
import { productType } from "./Cards";
const Latest =() =>{
    const Card:Array<productType>= [
        {
            title:"Formal Blue Suite",
            para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, laborum?",
            src:"/img/trendy/img1.png"
        },
        {
            title:"Laptop",
            para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, laborum?",
            src:"/img/trendy/img2.png"
        },
        {
            title:"Watch",
            para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, laborum?",
            src:"/img/trendy/img3.png"
        },
        {
            title:"Surf Excel",
            para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, laborum?",
            src:"/img/trendy/img4.png"
        },
        {
            title:"Medicine",
            para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, laborum?",
            src:"/img/trendy/img5.png"
        },
        {
            title:"Gaming PC",
            para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, laborum?",
            src:"/img/trendy/img6.png"
        },
        {
            title:"Iphone 14 pro max",
            para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, laborum?",
            src:"/img/trendy/img7.png"
        },      
    ]
    return(
        <>
        <div className="Latest bg-base-200 my-4">
                <div className="heading font-bold font-serif text-xl ml-4 py-2 my-2">
                    <span>Latest</span>
                </div>
            <div className="carousel carousel-center w-ful p-4 space-x-4">
                {Card.map((items:productType)=>(
                    <>
<div className="carousel-item relative group hover:cursor-pointer" key={items.title}>                 
        <Image src={items.src} width={300} height={250} alt={items.title}  className="rounded-box" /> 
<div className="rounded-box lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-100 z-10 absolute bottom-0 right-0 left-0 px-2 py-1 bg-neutral-500/40 text-white">                 
    <span className="text-center w-full">{items.title}</span>
</div>              
</div>
                    </>
                ))}
            </div>       
        </div>
        </>
    ) 
}

export default Latest;
