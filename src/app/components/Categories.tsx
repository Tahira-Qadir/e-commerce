import Link from "next/link";
import Image from "next/image";
const Categories = () =>{
    return(
        <>
        <div className="my-12 bg-base-200">
            <div className="heading font-bold font-serif text-xl ml-4 py-2 my-2">
                <span>Categories</span>
            </div>
        <div className="category-container min-w-[320px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 justify-center mt-4 ">
        {Category.map((item:navItem)=>(
          <>
          <Link href={{
            pathname:`/${item.title}`,
            query:{search:item.title},
             }} key={item.title}>
            <div  className="mb-8">
            <div className="bg-gray-200 text-black text-center rounded-lg w-[95%] mx-1 h-[20vh] grid items-center justify-center ">            
              {
                item.icon?
                item.icon:
                <Image src={item.src} className="all icon" width={40} height={40} alt={item.title}/>
              }
              {item.title}
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

interface navItem {
    title: string;
    href:string;
    src:string;
    icon?:JSX.Element;
  }

  const Category:Array<navItem>=[
    {
      title:"Grocery",
      href:"#",
      src:"/img/grc.png"  
    },
    {
      title:"Electronics",
      href:"#",
      src:"/img/elc.png"
    },
    {
      title:"Fashion",
      href:"#",
      src:"/img/fsh.png"
    },
    {
      title:"Watches",
      href:"#",
      src:"/img/watch.png"
    },
    {
      title:"Health Care ",
      href:"#",
      src:"/img/hlt.png"
    },
  ]

export default Categories;