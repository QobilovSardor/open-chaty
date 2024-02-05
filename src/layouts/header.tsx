import { useState } from "react";
import assets from "../assets"
import './layout.css';

export const Header = () => {
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(!show)
	}

	return (
		<header className="flex items-center justify-between py-[15px] px-[30px] rounded-lg bg-[#252525A1] md:mx-[62px]">
			<a className="md:py-[23px] md:px-[21px] md:text-[28px] text-[20px] leading-normal md:leading-[34px] font-bold text-white" href="#!">OpenChaty</a>
			<button className="lg-sm:hidden" onClick={handleShow}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
					<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
				</svg>
			</button>
			<div className={`media-menu ${show ? 'left-0' : 'left-[-100%]'}`}>
				<button className="lg-sm:hidden absolute top-4 right-4" onClick={handleShow}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
				<div className="flex lg-sm:items-center lg-sm:flex-row flex-col xl:space-x-[122px] lg:space-x-[80px] lg-sm:space-y-0 space-y-[20px] lg-sm:space-x-[30px]">
					<a href="#!" className="text-white md:text-[22px] text-[16px] font-semibold leading-160">Demo Chat 👋</a>
					<a href="#!" className="text-white md:text-[22px] text-[16px] font-semibold leading-160">Roadmap</a>
					<a href="#!" className="text-white md:text-[22px] text-[16px] font-semibold leading-160">X</a>
				</div>

				<a className="lg-sm:hidden flex items-center md:px-4 px-[10px] md:py-[10px] py-[8px] border border-solid border-[#FAFAFB] rounded-md font-GeneralSans-Regular text-[18px] text-black w-fit mt-[20px] md:text-[20px] bg-white leading-160 font-normal" href="#!">
					<img className="pr-[6px]" src={assets.connectLogo} alt="connect logo" />
					Connect
				</a>
			</div>

			<a className="lg-sm:flex hidden items-center md:px-4 px-[10px] md:py-[10px] py-[8px] border border-solid border-[#FAFAFB] rounded-md font-GeneralSans-Regular text-[18px] md:text-[20px] bg-white leading-160 font-normal" href="#!">
				<img className="pr-[6px]" src={assets.connectLogo} alt="connect logo" />
				Connect
			</a>
		</header>
	)
}
