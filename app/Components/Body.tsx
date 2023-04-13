
export default function Body(){
    type transaction={
        title:string,
        hash:string
    };
    interface Task{
        Task:string,
        Transactions:transaction[]
    }

    const TaskList:Task[]=[
        {
            Task:'AA Transactions',
            Transactions:[
                {
                    title:'Internal Txns',
                    hash:'0x38873d4ed6b9af5b67beca7c995acf7d93345061a02bfd2043adba90cc480b2f'
                },
                {
                    title:'ERC-20 Token Transfer',
                    hash:'0x28af554a97160b4c30603a7f278323f9d6be612d7ea71daa390ef6f80089c28c'
                },
                {
                    title:'Batch Transfer <Self>',
                    hash:'0xc6a549194bbb656b83083f73c1dd7f25311632244b044a1597d0d606230467c2'
                },
                {
                    title:'ERC-20 Token Batch Transfer',
                    hash:'0x6524c62f92580b2f2c8422f64a7944996cc45a0cef42fb3627b6b3c3e10a735d'
                }
            ]
        },{
            Task:'Minting NFT With AA Account',
            Transactions:[
                {
                    title:'Mint NFT',
                    hash:'0x2525120cd474c2fd2db3275bc6fc4e44dfadb0f44b4d7ede1ad62acea58f4efd'
                },
                {
                    title:'Batch Mint NFT',
                    hash:'0x05005a2ba68b8e695f1c7d323a2bb463f3249445618415cd86842b987f921f11'
                },
            ]
        }
    ]

    return (
        <>
            <div className=" h-[400px] w-full p-5 gap-2 flex justify-around ">
                {
                    TaskList.map((task)=>{
                        return(
                            <>
                                <div className=" h-full w-2/5 p-2 gap-y-2 flex flex-col items-center text-white/80 rounded-md bg-gray-800/70 shadow-gray-300/30 shadow-lg ">
                                    <div className=" mb-3 font-semibold">{task.Task}</div>
                                    {
                                        task.Transactions.map((t)=>
                                            (<div className=" flex break-all">
                                                {t.title} : {t.hash}
                                            </div>)
                                        )
                                    }
                                    
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}