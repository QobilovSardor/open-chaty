import assets from "../../assets";
import './strategy-section.css';

export const StrategySection = () => {
	return (
		<div>

			<div className="flex items-end justify-between">
				<div className="max-w-[555px]">
					<h1 className="section-number">02</h1>
					<p className="section-number__info">Strategy</p>
					<h2 className="title-text">Why Openchaty ?</h2>
				</div>
				<div>
					<p className="info max-w-[789px] mb-[-52px]">
						It's very simple. Because each content creator will have their own space, which will be allocated their own chat room. The creator will be able to earn money from their chats and posts thanks to monetization features.
					</p>
				</div>
			</div>


			<div className="video-box flex mt-[126px] items-center justify-center flex-col rounded-[43px] h-[792px] bg-[#EFEFEF] mb-[81px]">
				<button>
					<img className="w-[220px] h-[220px] hover:scale-105 transition-all duration-200" src={assets.playIcon} alt="play icon" />
				</button>
			</div>
		</div>
	)
}
