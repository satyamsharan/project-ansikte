import Link from "next/link";

export function NavItem(props:{linkLabel:String, link:String}){
    return(
        <Link 
                href={`${props.link}`}
                className="p-l-2 p-r-2 rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-1 mt-1 font-semibold text-center`}>
                    {props.linkLabel}
                </h2>
            </Link>
    );
} 