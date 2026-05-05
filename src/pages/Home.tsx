import { HeroCarousel } from "../components/HeroCarousel";
import { FinancialContributions } from "../components/FinancialContributions";
import { Stats2025 } from "../components/Stats2025";
import { CTASection } from "../components/CTASection";


export function Home() {
    return (
        <>
            <HeroCarousel />
            <Stats2025 />
            <FinancialContributions />
            <CTASection />
        </>
    );
}
