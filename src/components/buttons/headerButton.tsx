import { NextPage } from "next"
import { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
    children: ReactNode;
    link: string;
}

const HeaderButton = ({ children, link }: LayoutProps) => {
    return (
        <Link href={link} className="me-[32px] pt-[2px] pb-[2px] border-b-[2px] border-[#00000000]  hover:border-[#000000ff] duration-300">
            {children}
        </Link>
    )
}

export default HeaderButton