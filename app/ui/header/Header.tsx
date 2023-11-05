"use client"
import { usePathname } from "next/navigation";
import { NavItem } from "./NavItem";
import { useState } from "react";
import useWindowSize from "../../lib/useWindowSize";

export function Header(){
    const pathname = usePathname();
    const size = useWindowSize();
    
    let isHomePage = false;
    if(pathname == '/'){
        isHomePage = true;
    }else{
        isHomePage = false;
    }

    let width = size.width>1024?610:332;
    let height = size.width>1024?36:24;

    console.log(size);

    return(
        <div className={(!isHomePage?`min-h-[52px] lg:min-h-[64px] headerBackActive`:``)+` headerBack border border-transparent transition-colors`}>
            <div className={'header p-1 b-[40] lg:b-[100]'} style={{transform: isHomePage?'translateY('+(size.height-(height*3))+'px)':'translateX('+((size.width-width)/2)+'px)'}}>
                <div className="flex items-center justify-center">
                    <NavItem linkLabel="Home" link="/" />
                    <NavItem linkLabel="Portfolio" link="/portfolio" /> 
                    <NavItem linkLabel="Playground" link="/playground" /> 
                    <NavItem linkLabel="Contact" link="/contact" />
                </div>
            </div>
        </div>
    );
}