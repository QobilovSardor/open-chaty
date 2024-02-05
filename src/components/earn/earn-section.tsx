import assets from "../../assets"
import './earn-section.css'

export const EarnSection = () => {
	return (
		<div className="earn-section flex justify-between mb-[78px]">
			<div className="max-w-[628px] earn-content">
				<h1 className="section-number">01</h1>
				<p className="section-number__info">Earn</p>

				<h2 className="title-text">How to earn ?</h2>
				<p className="info mt-[14px] md:mb-[115px] mb-[40px]">Authors receive tokens for every like and comment left by sponsors, thus creating an ecosystem of mutually beneficial interaction. This encourages quality creativity and active interaction between platform participants.</p>
				<a className="btn bg-black text-white text-[32px]" href="#!">Launch app</a>
				<a className="pl-[30px] md:text-[32px] sm:text-[20px] text-[18px] leading-160 font-normal" href="#!">Learn more</a>
			</div>

			<div className="earn-cards mt-[93px] ">

				<div className="transition-all duration-200">
					<div className="border border-solid h-[434px] border-[#E3E3E3] rounded-lg bg-[#f4f4f4] pt-[67px] pb-[50px] pl-[28px] pr-[20px] hover:bg-[#111] transition-all duration-[0.2s]">
						<img className="mx-auto mb-[25px] h-[130px]" src={assets.sponsr} alt="sponsr icon" />
						<h3 className="text-[24px] font-bold leading-160 text-[#ACACAC]">
							Sponsored like
						</h3>
						<p className="leading-160 text-[17px] text-[#ACACAC]">
							If the reader of your post liked the information you wrote, then he can thank you with a sponsored like
						</p>
					</div>
				</div>

				<div className="transition-all duration-200">
					<div className="border border-solid h-[434px] border-[#E3E3E3] rounded-lg bg-[#f4f4f4] pt-[67px] pb-[50px] pl-[28px] pr-[20px] hover:bg-[#111] transition-all duration-[0.2s]">
						<img className="mx-auto mb-[25px] h-[130px]" src={assets.pinned} alt="sponsr icon" />
						<h3 className="text-[24px] font-bold leading-160 text-[#ACACAC]">
							Pinned messages
						</h3>
						<p className="leading-160 text-[17px] text-[#ACACAC]">
							The chat user can pin his message in the general chat for a separate donation. For example, for advertising
						</p>
					</div>
				</div>

				<div className="transition-all duration-200">
					<div className="border border-solid h-[434px] border-[#E3E3E3] rounded-lg bg-[#f4f4f4] pt-[67px] pb-[50px] pl-[28px] pr-[20px] hover:bg-[#111] transition-all duration-[0.2s]">
						<img className="mx-auto mb-[25px] h-[130px]" src={assets.comment} alt="sponsr icon" />
						<h3 className="text-[24px] font-bold leading-160 text-[#ACACAC]">
							Sponsor comment
						</h3>
						<p className="leading-160 text-[17px] text-[#ACACAC]">
							A reader of your post can take their comment above and highlight it by submitting a transaction
						</p>
					</div>
				</div>

				<div className="transition-all duration-200">
					<div className="border border-solid h-[434px] border-[#E3E3E3] rounded-lg bg-[#f4f4f4] pt-[67px] pb-[50px] pl-[28px] pr-[20px] hover:bg-[#111] transition-all duration-[0.2s]">
						<img className="mx-auto mb-[25px] h-[130px]" src={assets.message} alt="sponsr icon" />
						<h3 className="text-[24px] font-bold leading-160 text-[#ACACAC]">
							Message Highlight
						</h3>
						<p className="leading-160 text-[17px] text-[#ACACAC]">
							A user who is in the chat of your space can highlight his message by sending a transaction
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
