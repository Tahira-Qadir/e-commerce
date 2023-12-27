'use client'
import { useState } from "react";
const GCard = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const handlePost = (event:any) =>{
        event.preventDefault();
        setName(event.target.uname.value);
        setMessage(event.target.umsg.value);    
    }
    // console.log(name);
    // console.log(message);
    return(
        <>
        <div>
            <div className="Heading text-center font-bold font-serif text-xl ml-4 py-2 my-2">
            <span>Write on Our Wall</span>
            </div>
            <div className="form" onSubmit={handlePost}>
                <form>
                    <div className="uname my-12 mx-8 sm:grid">
                        <label className="label-text pb-3">Your Name</label>
                        <input type="text"  placeholder="Your Name here ..." name="uname" className="input input-bordered w-full max-w-xs" autoComplete="off"/>
                    </div>
                    <div className="umsg my-12 mx-8 sm:grid">
                        <label className="label-text pb-3">Your Message</label>
                        <textarea placeholder="Your Message to us ..." name="umsg" className="textarea textarea-bordered h-24 md:w-[75%]" autoComplete="off"></textarea>
                    </div>
                    <div className="mb-4 cursor-pointer text-center font-bold text-lg ml-2 p-1 w-[50%] sm:w-[30%] md:w-[20%] xl:w-[10%] rounded-md hover:text-white bg-gradient-to-r from-teal-400 to-yellow-200 ">
                        <div className="bg-white rounded-md hover:bg-gradient-to-r from-teal-400 to-yellow-200">
                            <input type="submit" className="cursor-pointer" value={'Post'}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default GCard;