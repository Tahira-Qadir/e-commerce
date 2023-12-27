import Categories from "../components/Categories"
export default function Category({searchParams}:any){
    const data = searchParams.search;
    // console.log(data);
    return(
        <>
        <Categories />
        <div>{data}</div>
        </>
    )
}