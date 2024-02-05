import assets from "../../assets"
import { Header } from "../../layouts"

export const HeroSection = () => {
	return (
		<div className="container md:px-[30px] px-0 bg-[#111] md:pt-[38px] pt-[20px] sm:rounded-b-[40px] rounded-b-[30px] md:rounded-b-[60px] lg-sm:mb-[106px] sm:mb-[80px] mb-[50px]">
			<Header />
			<div className="flex lg-sm:items-center lg-sm:pt-0 pt-10 flex-col lg-sm:flex-row lg:px-[113px] md:px-[62px]">
				<div className="text-white md:w-[494px]">
					<h2 className="big-title__text">OpenChaty</h2>
					<p className="leading-160 lg:text-2xl md:text-[18px] text-[16px] mt-[13px] mb-[27px]">A project on the Blast L2 blockchain where creators share content and interact with users in creative spaces</p>
					<a className="btn bg-white text-2xl text-black" style={{ paddingLeft: '14px', paddingRight: '14px' }} href="#!">Launch app</a>
					<a className="xl:text-2xl md:text-[18px] text-[16px] leading-160 ml-[29px]" href="#!">Learn more</a>
				</div>
				<div>
					<img className="lg-sm:w-[718px] w-[80%] md:mt-0 mt-[20px] lg-sm:mx-0 mx-auto" src={assets.laptop} alt="laptop img" />
				</div>
			</div>
		</div>
	)
}
