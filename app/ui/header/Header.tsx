import { NavItem } from "./NavItem";

export function Header(){
    return(
        <div className="absolute inset-x-0 bottom-0 mb-[60px] lg:mb-[120px] z-10 flex items-center justify-center">
            <div className="grid grid-cols-4 text-center">
                <NavItem linkLabel="Home" link="/" />
                <NavItem linkLabel="Portfolio" link="/portfolio" /> 
                <NavItem linkLabel="Playground" link="/playground" /> 
                <NavItem linkLabel="Contact" link="/contact" />
            </div>
        </div>
    );
}