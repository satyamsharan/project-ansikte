import Image from "next/image";

export default function Page() {
    return(
        <div className="pt-[52px] lg:pt-[64px] flex-col justify-center items-center fade-in">
            
            <Image className="opacity-20 m-auto" src={'/contact.gif'} alt="" width={300} height={225}/>
            <div className="text-center mt-[-150px] mb-[20px]" >Playground</div>
        
            <div className="p-4 m-auto text-xs text-justify max-w-[400px]">
            Here, you can explore a diverse range of content that hasn't found a specific home on any other page. Whether it's a puzzle, an intriguing article, or a captivating video, this is the space where the yet-to-be-discovered resides.
            </div>

            <div className="flex-row lg:flex justify-center items-center">
                <div className="m-auto lg:m-0 max-w-[360px] p-[10px]">
                    
                </div>
                <div className="m-auto lg:m-0 max-w-[360px] p-[10px] pb-[100px]">
                    
                </div>
            </div>
        </div>
    );
}