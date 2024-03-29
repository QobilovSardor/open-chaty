import assets from "../../assets"
import './about-section.css'
export const AboutSection = () => {
	return (
		<div>
			<div className="flex lg:flex-row flex-col lg:justify-between lg:items-end">
				<div>
					<h1 className="section-number">02</h1>
					<p className="section-number__info">About</p>
				</div>
				<p className="text-black sm:text-[32px] text-[20px] mb-[22px] font-normal leading-160 lg:max-w-[789px]">
					Not every blockchain will be suitable for implementing the functionality we've written. Let us tell you more about <span className="font-semibold">Blast</span> and the features that made it possible to create <span className="font-semibold">Openchaty.</span>
				</p>
			</div>

			<h2 className="title-text sm:mt-[60px] sm:mb-[48px] my-[30px]">Let’s learn how it works</h2>

			<div className="about-cards">

				<div className="sm:pt-[76px] py-[40px] sm:pb-[55px] rounded-lg sm:px-[45px] px-[20px] bg-[#F4F4F4] hover:bg-black hover:text-white transition-all duration-[0.3s] text-[#ACACAC] border border-solid border-[#E3E3E3]">
					<img className="mx-auto h-[165px]" src={assets.rebasing} alt="rebasing icon" />
					<h3 className="text-[26px] font-bold text-center mb-1 leading-160">Auto rebasing</h3>
					<p className="text-[19px] leading-160">
						Blast has been meticulously crafted to seamlessly integrate ETH at its core, enabling native rebase functionality on the L2.
					</p>
				</div>

				<div className="sm:pt-[76px] py-[40px] sm:pb-[55px] rounded-lg sm:px-[45px] px-[20px] bg-[#F4F4F4] hover:bg-black hover:text-white transition-all duration-[0.3s] text-[#ACACAC] border border-solid border-[#E3E3E3]">
					<img className="mx-auto h-[165px]" src={assets.download} alt="rebasing icon" />
					<h3 className="text-[26px] font-bold text-center mb-1 leading-160">Gas fee revenue</h3>
					<p className="text-[19px] leading-160">
						While other Layer 2 solutions retain the revenue generated from gas fees, Blast takes a different approach by programmatically returning this revenue to developers.
					</p>
				</div>

				<div className="sm:pt-[76px] py-[40px] sm:pb-[55px] rounded-lg sm:px-[45px] px-[20px] bg-[#F4F4F4] hover:bg-black hover:text-white transition-all duration-[0.3s] text-[#ACACAC] border border-solid border-[#E3E3E3]">
					<img className="mx-auto h-[165px]" src={assets.yieldIcon} alt="rebasing icon" />
					<h3 className="text-[26px] font-bold text-center mb-1 leading-160">T-bill yield</h3>
					<p className="text-[19px] leading-160">
						The yield for USDB is generated through MakerDAO's on-chain T-Bill protocol. Users have the option to redeem USDB for USDC when transitioning back to Ethereum.
					</p>
				</div>

			</div>

			<div className="about-cards__two">
				<div className="bg-[#F4F4F4] transition-all duration-200 text-center hover:text-black text-[#9D9D9D] py-[25px] sm:py-[46px] px-[15px] sm:px-[72px] rounded-lg border border-solid border-[#E3E3E3]">
					<h3 className="sm:text-[48px] text-[28px] font-normal leading-160">Secure</h3>
					<p className="sm:text-[24px] text-[18px] leading-160">
						User messages are encrypted and signed using TLS by default.
					</p>
				</div>

				<div className="bg-[#F4F4F4] transition-all duration-200 text-center hover:text-black text-[#9D9D9D] py-[25px] sm:py-[46px] px-[15px] sm:px-[72px] rounded-lg border border-solid border-[#E3E3E3]">
					<h3 className="sm:text-[48px] text-[28px] font-normal leading-160">Fast</h3>
					<p className="sm:text-[24px] text-[18px] leading-160">
						Ably, the leading pub/sub technology, for fast message delivery.
					</p>
				</div>

				<div className="bg-[#F4F4F4] transition-all duration-200 text-center hover:text-black text-[#9D9D9D] py-[25px] sm:py-[46px] px-[15px] sm:px-[72px] rounded-lg border border-solid border-[#E3E3E3]">
					<h3 className="sm:text-[48px] text-[28px] font-normal leading-160">Decentralized</h3>
					<p className="sm:text-[24px] text-[18px] leading-160">
						All your sponsorship activities are recorded on the <span className="font-semibold">Blast</span> blockchain
					</p>
				</div>

			</div>

			<div className="relative sm:mb-[90px] mb-16 overflow-hidden open-chaty__box flex lg-sm:flex-row flex-col justify-between pr-[224px] lg-sm:items-center lg-sm:space-y-0 space-y-[20px] pt-[94px] pb-[90px] pl-[76px] rounded-lg mt-[83px]">
				<div className="open-chaty__content max-w-[591px]">
					<span className="text-[#FFFFFF66] font-semibold sm:text-[38px] text-[25px] leading-160 font-GeneralSans">
						OpenChaty
					</span>
					<h2 className="open-chaty__title text-[68px] text-white font-semibold leading-[150%] font-GeneralSans mt-[23px] mb-[32px]">
						Connect your wallet and earn money with your posts
					</h2>
					<a className="btn text-[32px] text-black bg-white" href="#!">
						Launch app
					</a>
				</div>

				<a
					className="connect-btn flex items-center border border-solid border-[#494949] w-fit py-[26px] px-[42px] rounded-md font-GeneralSans-Regular text-[53px] lg-sm:ml-0 sm:ml-auto text-white bg-transparent leading-160 font-normal"
					href="#!">
					<img className="pr-[16px]" src={assets.connectLightLogo} alt="connect logo" />
					Connect
				</a>

				<div className="hand-box absolute bottom-0 right-0 hidden sm:block">
					<img src={assets.handImg} alt="hand" />
				</div>
			</div>

		</div>
	)
}
