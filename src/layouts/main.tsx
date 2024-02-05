import { AboutSection, EarnSection, HeroSection } from "../components"

export const Main = () => {
	return (
		<main>
			<div className="container">
				<HeroSection />
				<EarnSection />
				<AboutSection />
			</div>
		</main>
	)
}
