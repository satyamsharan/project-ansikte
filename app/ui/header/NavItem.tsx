import Link from "next/link";

export function NavItem(props:{linkLabel:String, link:String}){
    return(
        <Link 
                href={`${props.link}`}
                className="min-w-[80px] text-xs lg:min-w-[150px] lg:text-xl rounded-lg border border-transparent transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-1 mt-1 font-semibold text-center`}>
                    {props.linkLabel}
                </h2>
            </Link>
    );
} 