import { NextPage } from "next"
import HeaderButton from "../buttons/headerButton"

const Header: NextPage = () => {
    return (
        <div className="w-full flex justify-center fixed">
            <div className="w-full max-w-[1650px] ps-[24px] pe-[24px] flex flex-row items-center h-[70px] bg-[#faf3ea] font-[FoundersGrotesk] text-[15px] font-medium  rounded-bl-[10px] rounded-br-[10px]">
                <div className="flex-1 flex justify-start">
                    <HeaderButton link="#">left1</HeaderButton>
                    <HeaderButton link="#">left2</HeaderButton>
                    <HeaderButton link="#">left3</HeaderButton>
                </div>
                <a href="#" className="w-[120px] text-[30px] flex items-center font-bold">
                    Yappy
                </a>
                <div className="flex-1 flex justify-end">
                    <HeaderButton link="#">right1</HeaderButton>
                    <HeaderButton link="#">right2</HeaderButton>
                </div>
            </div>
        </div>
    )
}

export default Header