// import assets from "../../assets";
import './strategy-section.css';

export const StrategySection = () => {
	return (
		<div>

			<div className="flex lg:flex-row flex-col lg:items-end lg:justify-between">
				<div className="max-w-[555px]">
					<h1 className="section-number">03</h1>
					<p className="section-number__info">Strategy</p>
					<h2 className="title-text">Why Openchaty ?</h2>
				</div>
				<div>
					<p className="info max-w-[789px] mb-[-52px] ">
						It's very simple. Because each content creator will have their own space, which will be allocated their own chat room. The creator will be able to earn money from their chats and posts thanks to monetization features.
					</p>
				</div>
			</div>


			<div className="video-box overflow-hidden flex md:mt-[126px] mt-[100px] items-center justify-center flex-col lg:rounded-[43px] sm:rounded-3xl rounded-2xl lg:h-[792px] lg-sm:h-[500px] sm:h-[400px] h-[300px] bg-[#EFEFEF] md:mb-[81px] mb-[50px]">
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/KJwYBJMSbPI?si=5G-eHtVVngboK5gt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
				</iframe>
				{/* <button>
						<img className="w-[220px] h-[220px] hover:scale-105 transition-all duration-200" src={assets.playIcon} alt="play icon" />
					</button> */}
			</div>
		</div>
	)
}
