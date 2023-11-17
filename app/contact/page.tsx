import Image from "next/image";
import ContactCard from "../ui/ContactCard";
import Link from "next/link";


export default function Page() {
    return(
        <div className="pt-[52px] lg:pt-[64px] flex-col justify-center items-center fade-in">
            
            <Image className="opacity-20 m-auto" src={'/contact.gif'} alt="" width={300} height={225}/>
            <div className="text-center mt-[-150px] mb-[20px]" >Contact Me</div>
        
            <div className="p-4 m-auto text-xs text-justify max-w-[400px]">
                Thank you for your interest in getting in touch with me. Whether you have questions, feedback, business inquiries, or just want to say hello, I&apos;d love to hear from you and here is how you can reach me.
            </div>

            <div className="flex-row lg:flex justify-center items-center">
                <div className="m-auto lg:m-0 max-w-[360px] p-[10px]">
                    <ContactCard className="mt-10" accentColor={1} icon="github" reversed={false} title="Fork on GitHub" link="https://github.com/satyamsharan/" text="Chech out some of my exciting projects and contributions on GtHub." />
                    <ContactCard className="mt-10" accentColor={2} icon="linkedin" reversed={true} title="Connect on LinkedIn" link="https://www.linkedin.com/in/satyamsharan/" text="For connecting and getting my professional updates ping me on LinkedIn."/>
                    <ContactCard className="mt-10" accentColor={3} icon="email" reversed={false} title="Write an email" link="mailto:satyam.sharan@gmail.com" text="You can email me at 'satyam.sharan@gmail.com' to start a conversation." />
                    <ContactCard className="mt-10" accentColor={4} icon="phone" reversed={true} title="Call or WhatsApp" link="https://wa.me/46722060706?text=Hi+Satyam%21+I+am+..." text="You can also reach me at +46(0)722060706 via phone or WhatsApp." />
                </div>
                <div className="m-auto lg:m-0 max-w-[360px] p-[10px] pb-[100px]">
                    <div className="p-4 m-auto text-xs text-justify">
                        You can often find me at the Espresso House in Gamla Stan, Stockholm. It&apos;s a cafe I frequently visit, whether it&apos;s for a cup of coffee, a quick meeting, or some quiet time to work on my projects. If you ever find yourself in the area, feel free to drop by, and maybe we can catch up over a cup of coffee.
                    </div>
                    <Link href={`https://maps.app.goo.gl/heftvzGRi3snH9r38`} target="_blank">
                        <Image className="m-auto rounded-full" src={'/map.png'} alt="" width={340} height={340}/>
                    </Link>
                    <div className="p-4 m-auto text-xs text-center">
                        <Link href={`https://maps.app.goo.gl/heftvzGRi3snH9r38`} target="_blank">
                            Espresso House, Västerlånggatan 57, 111 29 Stockholm, Sweden
                        </Link>
                    </div>
                    <div className="p-4 m-auto text-xs text-center">
                        Tack &nbsp;| &nbsp; ध्न्यावाद &nbsp;| &nbsp; Thank You
                    </div>
                </div>
            </div>
        </div>
    );
}