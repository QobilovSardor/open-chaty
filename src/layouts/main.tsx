import { AboutSection, EarnSection, HeroSection, StrategySection } from "../components"

export const Main = () => {
	return (
		<main>
			<div className="container">
				<HeroSection />
				<EarnSection />
				<AboutSection />
				<StrategySection />
			</div>
		</main>
	)
}
