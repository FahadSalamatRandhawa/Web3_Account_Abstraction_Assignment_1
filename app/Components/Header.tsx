
export default function Header(){
    type margins={
        ml:string,
        mt:string,
    }
    const marginList:margins[]=[];
    return (
        <>
            <div className=" h-20 flex justify-around items-center">
                <div className=" mt-10 w-20 h-1 bg-neutral-200 z-10"></div>
                <div className=" mb-5 w-20 h-1 bg-white z-10"></div>
                <div className=" text-2xl text-white ">Assignment 1 PSMFA</div>
                <div className=" mb-10  w-20 h-1 bg-white z-10"></div>
                <div className=" mt-5 w-20 h-1 bg-white z-10"></div>
            </div>
        </>
    )
}