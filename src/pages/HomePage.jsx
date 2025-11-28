import HeroSection from '../components/Home/HeroSection';
import ProductShowcase from '../components/Home/ProductShowcase';
import ProductGrid from '../components/Products/ProductGrid';
import YouMayAlsoLike from '../components/Products/YouMayAlsoLike';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <ProductShowcase />
            <ProductGrid />
            <YouMayAlsoLike />
        </div>
    );
};

export default HomePage;
