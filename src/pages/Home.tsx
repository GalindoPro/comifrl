import { HeroCarousel } from "../components/HeroCarousel";
import { Advantages } from "../components/Advantages";
import { HomeIntro } from "../components/HomeIntro";
import { FinancialContributions } from "../components/FinancialContributions";
import { Stats2025 } from "../components/Stats2025";
import { CTASection } from "../components/CTASection";


export function Home() {
    return (
        <>
            <HeroCarousel />
            <HomeIntro />
            <Stats2025 />
            <Advantages />
            <FinancialContributions />
            <CTASection />
        </>
    );
}
