'use client'
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {HiOutlineShoppingBag} from "react-icons/hi";

const Navbar =()=>{
  const [open, isopen] = useState(false);
  return(
    <>
    {/* For Large Screens */}
      <nav className="hidden lg:contents">
        <div className="grid grid-cols-4 bg-gradient-to-r from-teal-400 to-yellow-200 text-white h-[12vh]">
          <div className="logo flex justify-center items-center text-white">
            <Link href="/" className="font-bold">
            E-Commerce Store
            </Link>
          </div>
              <div className={`grid grid-cols-4 gap-4 items-center justify-center  text-white`}>
                {NavItem.map((item:navItem)=>(
                  <>
                  <div key={item.title} className="text-right my-1">
                    <Link href={item.href} className="text-white">{item.title}</Link>
                  </div>
                  </>
                ))}
              </div>
              <div className="flex justify-end">
              <form >
                <div className="my-2">
                  <input className="rounded-full bg-transparent text-white placeholder:text-white p-2 border" type="text"   placeholder="Search here ......."/>
                </div>
              </form>            
              </div>
              <div className="cart flex justify-center items-center">
                <HiOutlineShoppingBag color="white" size={28} />  
              </div>  
          </div>      
      </nav>
      {/* For Small Screens */}
      <nav className="lg:hidden">
        <div className="grid grid-cols-4 bg-gradient-to-r from-teal-400 to-yellow-200 text-white h-[12vh]">
          <div className="logo col-span-2 flex items-center justify-center">
            <Link href="/" className="font-bold">
            E-Commerce Store
            </Link>
          </div>
          <div className="cart flex justify-end items-center">
          <HiOutlineShoppingBag color="white" size={28} />  
          </div>
          <div className="hamburger flex items-center justify-end">
              <Image onClick={()=>isopen(!open)} src={open ? "/img/bars.png" : "/img/manu.png"} className="mr-[13%] cursor-pointer" width={30} height={100} alt="hamburger" color="white"/>
              <div className={`${open ? "grid" : "hidden"} grid-cols-1 bg-gradient-to-r from-teal-400 to-yellow-200 absolute top-[10%] w-[10rem] text-white h-[25vh] overflow-y-scroll`}>
                {NavItem.map((item:any)=>(
                  <>
                  <div key={item.title} className="text-right my-1">
                    <Link href={item.href} className="text-white">{item.title}</Link>
                  </div>
                  </>
                ))}
              <form >
                <div className="my-2">
                  <input className="w-[10rem] text-sm rounded-full bg-transparent text-white placeholder:text-white p-2 border" type="text"   placeholder="Search here ......."/>
                </div>
              </form>
              </div>
          </div>      
        </div>
      </nav>
    </>
  )
}

interface navItem {
  title: string;
  href:string;
}

const NavItem: Array<navItem> = [
  {
    title:"Home",
    href:"/"
  },
  {
    title:"About",
    href:"/about"
  },
  {
    title:"Our Wall",
    href:"/wall"
  },
  {
    title:"Login",
    href:"#"
  },
]

export default Navbar;