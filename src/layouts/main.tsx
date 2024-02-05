import {
	AboutSection,
	// EarnSection,
	HeroSection,
	StrategySection
} from "../components"

export const Main = () => {
	return (
		<main>
			<HeroSection />
			<div className="container">
				{/* <EarnSection /> */}
				<AboutSection />
				<StrategySection />
			</div>
		</main>
	)
}
