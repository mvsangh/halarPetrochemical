import { Flame, Fuel, Droplets, FlaskConical, Beaker, Cylinder, Leaf, Factory, Layers, Utensils } from 'lucide-react';
import fuelOilImg from "@/assets/products/fuel-oil.png";
import gasOilImg from "@/assets/products/gas-oil.png";
import naphthaImg from "@/assets/products/naphtha.png";
import rubberOilImg from "@/assets/products/fuelproduct.png";
import whiteSpiritImg from "@/assets/products/white-spirit.png";
import glycolsImg from "@/assets/products/glycols.png";
import lubricantOilImg from "@/assets/products/lubricant-oil.png";
import paraffinOilImg from "@/assets/products/Paraffin Oil.png";
import usedCookingOilImg from "@/assets/products/used-cooking-oil.png.png";

export interface Product {
    name: string;
    description: string;
    href: string;
    backgroundImage: string;
    icon: JSX.Element;
    slug: string;
    category: 'Oil' | 'Chemical' | string;
    fullDescription: string;
    uses: string[];
}

export const products: Product[] = [
    {
        name: 'Fuel Oil',
        description: 'High-quality fuel oils for industrial power generation, marine applications, and commercial heating systems.',
        href: '/products/fuel-oil',
        backgroundImage: fuelOilImg,
        icon: <Flame className="w-6 h-6" />,
        slug: 'fuel-oil',
        category: 'Oil',
        fullDescription: 'Fuel oil is a fraction obtained from petroleum distillation, widely used as a fuel source in industrial and marine applications. Our fuel oils meet international quality standards and are available in various grades to suit different requirements.',
        uses: ['Power generation plants', 'Marine vessel engines', 'Industrial boilers', 'Commercial heating systems', 'Manufacturing facilities']
    },
    {
        name: 'Gas Oil',
        description: 'Premium gas oil products meeting international specifications for diesel engines and industrial heating.',
        href: '/products/gas-oil',
        icon: <Fuel className="w-6 h-6" />,
        slug: 'gas-oil',
        category: 'Oil',
        backgroundImage: gasOilImg,
        fullDescription: 'Gas oil, also known as diesel fuel, is a middle distillate petroleum product used primarily in diesel engines and industrial heating applications. We supply high-quality gas oil that meets stringent international specifications.',
        uses: ['Diesel engines and vehicles', 'Industrial machinery', 'Agricultural equipment', 'Construction machinery', 'Heating systems']
    },
    {
        name: 'Mix Hydrocarbon Oil',
        description: 'Blended hydrocarbon products for various industrial applications and processing requirements.',
        href: '/products/mix-hydrocarbon-oil',
        icon: <Layers className="w-6 h-6" />,
        slug: 'mix-hydrocarbon-oil',
        category: 'Oil',
        backgroundImage: rubberOilImg,
        fullDescription: 'Mix Hydrocarbon Oil is a versatile petroleum product consisting of various hydrocarbon compounds. It serves as a valuable feedstock for numerous industrial processes and can be further refined or used directly in specific applications.',
        uses: ['Petrochemical feedstock', 'Industrial processing', 'Fuel blending', 'Chemical manufacturing', 'Energy production']
    },
    {
        name: 'Naphtha',
        description: 'Versatile petrochemical feedstock for plastics, synthetic fibers, and chemical manufacturing.',
        href: '/products/naphtha',
        icon: <Droplets className="w-6 h-6" />,
        slug: 'naphtha',
        category: 'Chemical',
        backgroundImage: naphthaImg,
        fullDescription: 'Naphtha is a highly versatile petroleum product that serves as a crucial feedstock in the petrochemical industry. It is essential for producing plastics, synthetic fibers, and various chemical compounds.',
        uses: ['Petrochemical production', 'Plastics manufacturing', 'Synthetic fiber production', 'Solvent applications', 'Gasoline blending']
    },
    {
        name: 'Rubber Process Oil',
        description: 'Specialized oils for rubber manufacturing, enhancing elasticity and processing characteristics.',
        href: '/products/rubber-process-oil',
        icon: <Factory className="w-6 h-6" />,
        slug: 'rubber-process-oil',
        category: 'Oil',
        backgroundImage: rubberOilImg,
        fullDescription: 'Rubber Process Oils are specialty petroleum products designed specifically for the rubber manufacturing industry. They improve the processing characteristics of rubber compounds and enhance the physical properties of finished products.',
        uses: ['Tire manufacturing', 'Rubber goods production', 'Industrial rubber products', 'Automotive components', 'Consumer rubber products']
    },
    {
        name: 'White Spirit',
        description: 'Industrial-grade solvent for paints, coatings, cleaning agents, and degreasing applications.',
        href: '/products/white-spirit',
        icon: <FlaskConical className="w-6 h-6" />,
        slug: 'white-spirit',
        category: 'Chemical',
        backgroundImage: whiteSpiritImg,
        fullDescription: 'White Spirit is a petroleum-derived clear liquid commonly used as a solvent in the paint and coatings industry. Our white spirit meets international purity standards and is ideal for thinning paints, cleaning brushes, and industrial degreasing.',
        uses: ['Paint thinning', 'Surface cleaning', 'Degreasing applications', 'Coating production', 'Industrial cleaning']
    },
    {
        name: 'Glycols',
        description: 'Essential chemicals for antifreeze, coolants, and various industrial chemical processes.',
        href: '/products/glycols',
        icon: <Beaker className="w-6 h-6" />,
        slug: 'glycols',
        category: 'Chemical',
        backgroundImage: glycolsImg,
        fullDescription: 'Glycols are essential industrial chemicals with excellent thermal properties and versatility. We supply both Mono Ethylene Glycol (MEG) and Diethylene Glycol (DEG) for various industrial applications.',
        uses: ['Antifreeze production', 'Coolant manufacturing', 'Polyester fiber production', 'PET resin manufacturing', 'Industrial processes']
    },
    {
        name: 'Lubricant Oil',
        description: 'High-performance lubricants for machinery, engines, and industrial equipment maintenance.',
        href: '/products/lubricant-oil',
        icon: <Cylinder className="w-6 h-6" />,
        slug: 'lubricant-oil',
        category: 'Oil',
        backgroundImage: lubricantOilImg,
        fullDescription: 'Lubricant oils are essential for the smooth operation and longevity of machinery and engines. Our range includes high-quality base oils and finished lubricants suitable for various industrial and automotive applications.',
        uses: ['Engine lubrication', 'Industrial machinery', 'Hydraulic systems', 'Gear systems', 'Automotive applications']
    },
    {
        name: 'Paraffin Oil',
        description: 'Refined mineral oils for pharmaceutical, cosmetic, and industrial applications.',
        href: '/products/paraffin-oil',
        icon: <Leaf className="w-6 h-6" />,
        slug: 'paraffin-oil',
        category: 'Oil',
        backgroundImage: paraffinOilImg,
        fullDescription: 'Paraffin oil is a highly refined mineral oil with excellent purity and stability. It finds applications across various industries including pharmaceuticals, cosmetics, and industrial manufacturing.',
        uses: ['Pharmaceutical formulations', 'Cosmetic products', 'Candle manufacturing', 'Food processing', 'Industrial applications']
    },
    {
        name: 'Used Cooking Oil',
        description: 'Recycled cooking oils for biodiesel production and sustainable energy applications.',
        href: '/products/used-cooking-oil',
        icon: <Utensils className="w-6 h-6" />,
        slug: 'used-cooking-oil',
        category: 'Oil',
        backgroundImage: usedCookingOilImg,
        fullDescription: 'Used Cooking Oil (UCO) is collected and processed for recycling into biodiesel and other sustainable applications. This eco-friendly resource contributes to circular economy initiatives and renewable energy production.',
        uses: ['Biodiesel production', 'Renewable energy', 'Animal feed production', 'Industrial oleochemicals', 'Sustainable fuel alternatives']
    },
];
