import Link from "next/link";
import Image from "next/image";
import { Card } from "./Cards";
import { productType } from "./Cards";
const Products = () =>{
   
    return(
        <>
        
        <div className="my-32">
            <div className="heading text-black  font-bold font-serif text-xl ml-4">
                <span>Products</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-2 gap-1 max-1">
{Card.map((items:productType)=>(
        <>
        <Link href={{
            pathname:`details/${items.title}`,
            query:{search:items.title}
        }} key={items.title}>
        <div className="card-compact lg:card-normal w-[9.6rem] xs:w-[11rem] ms:[13rem] md:w-[15.5rem] xl:[16rem] bg-base-100 shadow-xl mb-4" key={items.title}>
  <figure><Image src={items.src} width={300} height={100} alt={items.title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{items.title}</h2>
    <p>{items.para}</p>
    <div className="card-actions text-sm flex justify-center items-end">
      <button className="btn-sm w-full rounded-md btn-primary text-white">Add to Cart</button>
    </div>
  </div>
</div>
</Link>
    </>
))}
            </div>       
        </div>
        </>
    )
}
export default Products;