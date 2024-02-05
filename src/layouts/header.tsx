import assets from "../assets"

export const Header = () => {
	return (
		<header className="flex items-center justify-between py-[15px] px-[30px] rounded-lg bg-[#252525A1] mx-[38px]">
			<a className="py-[23px] px-[21px] text-[28px] leading-[34px] font-bold text-white" href="#!">OpenChaty</a>

			<div className="flex items-center space-x-[122px]">
				<a href="#!" className="text-white text-[22px] font-semibold leading-160">Demo Chat 👋</a>
				<a href="#!" className="text-white text-[22px] font-semibold leading-160">Roadmap</a>
				<a href="#!" className="text-white text-[22px] font-semibold leading-160">X</a>
			</div>

			<a className="flex items-center px-4 py-[10px] border border-solid border-[#FAFAFB] rounded-md font-GeneralSans-Regular text-[20px] bg-white leading-160 font-normal" href="#!">
				<img className="pr-[6px]" src={assets.connectLogo} alt="connect logo" />
				Connect
			</a>
		</header>
	)
}
