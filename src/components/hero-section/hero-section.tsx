import assets from "../../assets"
import { Header } from "../../layouts"

export const HeroSection = () => {
	return (
		<div className="bg-[#111] pt-[38px] rounded-b-[60px] mb-[160px]">
			<Header />
			<div className="flex items-center pl-[113px] pr-[113px]">
				<div className="text-white w-[494px]">
					<h2 className="big-title__text">OpenChaty</h2>
					<p className="leading-160 text-2xl mt-[13px] mb-[27px]">A project on the Blast L2 blockchain where creators share content and interact with users in creative spaces</p>
					<a className="btn bg-white text-2xl text-black" href="#!">Launch app</a>
					<a className="text-2xl leading-160 ml-[29px]" href="#!">Learn more</a>
				</div>
				<div>
					<img className="w-[718px]" src={assets.laptop} alt="" />
				</div>
			</div>
		</div>
	)
}
