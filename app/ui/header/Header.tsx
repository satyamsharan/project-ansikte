import { NavItem } from "./NavItem";

export function Header(){
    return(
        <div className="grid grid-cols-4 text-center">
            <NavItem linkLabel="Home" link="/" />
            <NavItem linkLabel="Portfolio" link="/portfolio" /> 
            <NavItem linkLabel="Playground" link="/playground" /> 
            <NavItem linkLabel="Contact" link="/contact" />
        </div>
    );
}