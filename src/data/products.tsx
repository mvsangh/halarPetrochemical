import {
    Flame,
    Fuel,
    Droplets,
    FlaskConical,
    Beaker,
    Cylinder,
    Leaf,
    Factory,
    Layers,
    Utensils,
    Zap,
    Box,
    Waves,
    Grape,
    Wind,
    Pipette,
    Paintbrush,
    Hammer,
    Scissors,
    Microwave,
    Printer
} from 'lucide-react';

// Category Images
import Acetone from "@/assets/products/categories/AcetoneSolvents.jpg";
import LABSA96 from "@/assets/products/categories/LABSA96.png";
import SLES70 from "@/assets/products/categories/SLES70.png"
import Casusticsoda from "@/assets/products/categories/CausticSodaFlakes.png"
import sodaashlight from "@/assets/products/categories/SodaAshLight.png"
import Xylene from "@/assets/products/categories/Xylene.png";
import Toluene from "@/assets/products/categories/Toluene.png";
import MethylEthylKetone from "@/assets/products/categories/MethylEthylKetone.png";
import ButylAcetate from "@/assets/products/categories/ButylAcetate.jpg";
import distillateMarineOil from "@/assets/products/categories/image copy.png";
import whiteoilimge from "@/assets/products/categories/WhiteOilPetrochemicals.jpg";
import rubberOilImg from "@/assets/products/categories/RubberProcessOil.jpg";
import baseoilImg from "@/assets/products/categories/baseoil.jpg";
import petrochemicalsImg from "@/assets/products/categories/petrochemicals.png";
import solventsImg from "@/assets/products/categories/solvents.png";
import Ethylacetate from "@/assets/products/categories/Ethylacetate.jpg";
import rawMaterialsImg from "@/assets/products/categories/raw_materials.png";
import AluminumSulphate from "@/assets/products/categories/AluminumSulphate.png"
import waterTreatmentImg from "@/assets/products/categories/water_treatment.png";
import foodIndustryImg from "@/assets/products/categories/food_industry.png";
import cosmeticsImg from "@/assets/products/categories/cosmetics.png";
import Glycerine from "@/assets/products/categories/Glycerine.jpg"
import paintCoatingsImg from "@/assets/products/categories/paint_coatings.png";
import miningImg from "@/assets/products/categories/mining.png";
import textileImg from "@/assets/products/categories/textile.png";
import foamIndustryImg from "@/assets/products/categories/foam_industry.png";
import printingInkImg from "@/assets/products/categories/printing_ink.png";
import CitricAcid from "@/assets/products/categories/CitricAcidFoodIndustryChemicals.jpg";
import TitaniumDioxide from "@/assets/products/categories/TitaniumDioxide.png"
import SodiumCyanide from "@/assets/products/categories/SodiumCyanide.png"
import HydrogenPeroxide from "@/assets/products/categories/HydrogenPeroxide.png"
import TDI from "@/assets/products/categories/TDI.jpg"
import IsopropylAlcohol from "@/assets/products/categories/IsopropylAlcohol.png"
// Specific Product Images (Existing)
import fuelOilImg from "@/assets/products/categories/Fule.jpg";
import gasOilImg from "@/assets/products/categories/gasoli.jpg";
import naphthaImg from "@/assets/products/categories/naphtha.jpg";
// import rubberOilImg from "@/assets/products/fuelproduct.png";
import whiteSpiritImg from "@/assets/products/white-spirit.png";
import glycolsImg from "@/assets/products/glycols.png";

import lubricantOilImg from "@/assets/products/lubricant-oil.png";
import paraffinOilImg from "@/assets/products/Paraffin Oil.png";

export interface Product {
    name: string;
    description: string;
    href: string;
    backgroundImage: string;
    icon: JSX.Element;
    slug: string;
    category: string;
    fullDescription: string;
    uses: string[];
    // New fields   
    features?: string[];
    specifications?: {
        purity?: string;
        packaging?: string;
        casNumber?: string;
        formula?: string;
        meltingPoint?: string;
        appearance?: string;
        density?: string;
        boilingPoint?: string;
        flashPoint?: string;
        [key: string]: string | undefined;
    };
    certifications?: string[];
    industries?: string[];
    handling?: string;
}

export const products: Product[] = [
    // Petrochemicals
    {
        name: 'Fuel Oil',
        description: 'Premium-grade fuel oils engineered for reliable performance in industrial power generation, marine propulsion, and heavy-duty thermal systems.',
        href: '/products/fuel-oil',
        backgroundImage: fuelOilImg,
        icon: <Flame className="w-6 h-6" />,
        slug: 'fuel-oil',
        category: 'Petrochemicals',

        fullDescription:
            'Fuel oil is a heavy distillate derived from crude oil refining, specifically formulated for high-energy output and operational efficiency. It is extensively used in large-scale industrial boilers, power generation units, and marine engines. Our fuel oil portfolio complies with international standards such as ISO 8217 and is supplied in multiple grades including Light Fuel Oil (LFO) and Heavy Fuel Oil (HFO), ensuring optimal combustion, reduced emissions, and long-term equipment protection.',

        uses: [
            'Thermal and captive power generation plants',
            'Marine propulsion and auxiliary vessel engines',
            'Industrial boilers and furnaces',
            'Heavy industrial heating and processing systems'
        ],

        features: [
            'High calorific value ensuring maximum energy efficiency',
            'Available in low sulfur variants (LSFO) to meet emission norms',
            'Stable viscosity for smooth pumping and consistent combustion',
            'Excellent oxidation resistance and long-term storage stability'
        ],

        specifications: {
            purity: '99.5% minimum hydrocarbon content',
            packaging: 'Bulk tanker supply, ISO tanks, steel drums',
            casNumber: '68476-30-2'
        },

        certifications: [
            'ISO 8217 Marine Fuel Compliance',
            'REACH Regulatory Compliance',
            'International Marine Fuel Standards'
        ],

        industries: [
            'Maritime & Shipping',
            'Power Generation & Utilities',
            'Heavy Manufacturing & Processing'
        ],

        handling:
            'Store in a cool, dry, and well-ventilated area away from open flames and ignition sources. Ensure proper grounding during transfer operations. Personnel should use appropriate PPE including flame-resistant clothing, chemical-resistant gloves, and safety goggles.'
    },
    {
        name: 'Gas Oil',
        description: 'High-performance gas oil engineered for diesel engines, heavy-duty industrial machinery, and efficient heating applications.',
        href: '/products/gas-oil',
        backgroundImage: gasOilImg,
        icon: <Fuel className="w-6 h-6" />,
        slug: 'gas-oil',
        category: 'Petrochemicals',

        fullDescription:
            'Gas oil is a refined middle-distillate petroleum product commonly known as diesel fuel. It is widely used in automotive diesel engines, industrial equipment, agricultural machinery, and commercial heating systems. Our gas oil is refined under strict quality control procedures to deliver consistent performance, improved fuel efficiency, and reduced emissions while meeting major international fuel specifications such as EN 590 and ASTM standards.',

        uses: [
            'Automotive and commercial diesel engines',
            'Heavy industrial and construction machinery',
            'Industrial and commercial heating systems',
            'Agricultural tractors and farm equipment'
        ],

        features: [
            'High cetane number ensuring smooth ignition and efficient combustion',
            'Excellent cold flow characteristics for reliable operation in low temperatures',
            'Low sulfur formulation to meet emission and environmental regulations',
            'Enhanced lubricity to reduce engine wear and extend component life'
        ],

        specifications: {
            purity: '99.0% minimum hydrocarbon content',
            packaging: 'Bulk tanker supply, flexitanks, sealed steel drums',
            casNumber: '68334-30-5'
        },

        certifications: [
            'EN 590 Diesel Fuel Standard',
            'ASTM D975 Diesel Fuel Specification',
            'ISO 8217 Distillate Fuel Compliance'
        ],

        industries: [
            'Transportation & Logistics',
            'Agriculture & Farming',
            'Construction & Infrastructure',
            'Industrial & Commercial Heating'
        ],

        handling:
            'Store in approved, properly grounded containers away from heat and ignition sources. Avoid inhalation of vapors and prolonged skin contact. Ensure adequate ventilation during handling and transfer. Use appropriate personal protective equipment including gloves and safety eyewear.'
    },

    {
        name: 'Hydrocarbon Oil',
        description: 'Refined hydrocarbon oil used as an industrial feedstock, process oil, and blending component across chemical and energy sectors.',
        href: '/products/hydrocarbon-oil',
        backgroundImage: petrochemicalsImg,
        icon: <Layers className="w-6 h-6" />,
        slug: 'hydrocarbon-oil',
        category: 'Petrochemicals',

        fullDescription:
            'Hydrocarbon oil is a petroleum-derived product composed mainly of paraffinic and naphthenic hydrocarbons, obtained during crude oil refining. It is widely used as a feedstock and functional process oil in chemical manufacturing, fuel blending, rubber processing, and lubricant formulation. Our hydrocarbon oils are produced under controlled refining conditions to ensure stable composition, low impurities, and reliable performance in continuous industrial operations.',

        uses: [
            'Feedstock for petrochemical and chemical manufacturing units',
            'Process oil in rubber, plastic, and polymer industries',
            'Blending component in industrial fuels and energy products',
            'Base material for lubricant oils and specialty industrial fluids'
        ],

        features: [
            'Stable hydrocarbon composition suitable for continuous industrial processes',
            'Low sulfur, moisture, and ash content to protect equipment',
            'Good thermal stability under elevated operating temperatures',
            'Consistent viscosity and flash point across supplied batches'
        ],

        specifications: {
            purity: '98.5% minimum hydrocarbon content',
            packaging: 'Bulk tanker supply, ISO tanks, steel drums',
            casNumber: '64742-46-7'
        },

        certifications: [
            'ISO 9001 Quality Management System',
            'REACH Regulatory Compliance'
        ],

        industries: [
            'Petrochemical & Chemical Manufacturing',
            'Rubber & Polymer Processing',
            'Energy & Fuel Blending',
            'Industrial Lubricants & Fluids'
        ],

        handling:
            'Store in tightly closed containers in a cool, dry, and well-ventilated area. Keep away from open flames, sparks, and strong oxidizing agents. Use proper grounding during transfer operations and wear appropriate PPE including gloves, protective clothing, and eye protection.'
    },

    {
        name: 'Naphtha',
        description: 'Refined petroleum naphtha used as a primary feedstock for petrochemical production, fuel blending, and industrial solvent applications.',
        href: '/products/naphtha',
        backgroundImage: naphthaImg,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'naphtha',
        category: 'Petrochemicals',

        fullDescription:
            'Naphtha is a light to intermediate petroleum distillate obtained during crude oil refining. It serves as a critical feedstock in steam cracking units for the production of olefins such as ethylene and propylene, which are the building blocks of plastics, synthetic fibers, and resins. Naphtha is also used in catalytic reforming to produce high-octane blending components and aromatics. Supplied in both light and heavy grades, our naphtha is refined to deliver consistent composition, controlled boiling range, and reliable processing performance.',

        uses: [
            'Feedstock for steam cracking units producing ethylene and propylene',
            'Raw material for plastics, polymers, and synthetic fiber manufacturing',
            'Catalytic reforming feed for aromatics and high-octane components',
            'Industrial solvent and fuel blending applications'
        ],

        features: [
            'High paraffinic content for efficient petrochemical cracking',
            'Low benzene grades available to meet regulatory requirements',
            'Controlled and consistent boiling range for stable processing',
            'High cracking efficiency with predictable yield performance'
        ],

        specifications: {
            purity: '99.0% minimum hydrocarbon content',
            packaging: 'Bulk vessel supply, ISO tanks, rail cars',
            casNumber: '8030-30-6',
            formula: 'C6H14 – C12H26'
        },

        certifications: [
            'ASTM D3735 Naphtha Specification',
            'Petrochemical Feedstock Grade'
        ],

        industries: [
            'Petrochemical & Refining',
            'Plastics & Polymer Manufacturing',
            'Rubber & Synthetic Materials',
            'Industrial Solvents & Fuel Blending'
        ],

        handling:
            'Highly flammable liquid. Store in approved, bonded containers away from heat, sparks, and open flames. Use explosion-proof electrical equipment and ensure proper grounding during transfer. Handle only in well-ventilated areas with appropriate personal protective equipment.'
    }
    ,
    {
        name: 'Base Oil',
        description: 'Refined mineral base oils used as the primary raw material for automotive, industrial, and marine lubricant formulations.',
        href: '/products/base-oil',
        backgroundImage: baseoilImg,
        icon: <Cylinder className="w-6 h-6" />,
        slug: 'base-oil',
        category: 'Petrochemicals',

        fullDescription:
            'Base oil is the fundamental component used in the formulation of lubricants, greases, and specialty industrial fluids. Produced through solvent refining, hydrocracking, or severe hydroprocessing, base oils determine the performance characteristics of finished lubricants. Our product range includes Group I, Group II, and Group III base oils, available in multiple viscosity grades, designed to meet the requirements of automotive engines, industrial machinery, marine equipment, and metalworking applications.',

        uses: [
            'Manufacturing of automotive engine oils and transmission fluids',
            'Production of industrial and automotive greases',
            'Formulation of hydraulic oils, gear oils, and compressor oils',
            'Metalworking fluids, cutting oils, and process lubricants'
        ],

        features: [
            'High oxidation and thermal stability for extended service life',
            'High viscosity index ensuring stable performance across temperature ranges',
            'Low volatility to minimize oil consumption and evaporation losses',
            'Good demulsibility for effective water separation in industrial systems'
        ],

        specifications: {
            purity: '99.5% minimum base oil content',
            packaging: 'Bulk tanker supply, flexitanks, sealed steel drums',
            casNumber: '64742-54-7'
        },

        certifications: [
            'API Base Oil Group Classification (Group I, II, III)',
            'ISO 6743 Lubricant Classification',
            'DIN 51517 Industrial Gear Oil Standard'
        ],

        industries: [
            'Automotive & Commercial Vehicles',
            'Industrial Manufacturing & Machinery',
            'Marine & Offshore Operations',
            'Aviation & Specialty Lubricants'
        ],

        handling:
            'Store in clean, dry, and dedicated tanks or containers to prevent contamination. Avoid contact with water, dust, and foreign materials. Maintain recommended storage temperatures and ensure proper filtration during transfer and blending operations.'
    },

    {
        name: 'Rubber Process Oil',
        description: 'Specialized hydrocarbon oils designed to improve the processing and physical properties of rubber compounds.',
        href: '/products/rubber-process-oil',
        backgroundImage: rubberOilImg,
        icon: <Factory className="w-6 h-6" />,
        slug: 'rubber-process-oil',
        category: 'Petrochemicals',
        fullDescription: 'Our Rubber Process Oils (RPO) serve as essential plasticizers. They facilitate the incorporation of fillers, improve flow during extrusion, and enhance the elasticity of the final vulcanizate. Available in high-aromatic (TDAE), naphthenic, and paraffinic grades.',
        uses: [
            'High-performance Tire Treads',
            'EPDM Rubber Profiles',
            'Molded Industrial Parts',
            'Conveyor Belting & Hoses'
        ],
        features: [
            'High Solvency & Elastomer Compatibility',
            'Low Volatility for High-Temp Processing',
            'Optimized Viscosity-Gravity Constant (VGC)',
            'Superior Thermal and UV Stability'
        ],
        specifications: {
            purity: 'Compliant with PCA < 3% (EU Standards)',
            packaging: 'Flexitanks, ISO Tanks, 200L Steel Drums',
            casNumber: '64742-52-5 / 64742-04-7',
        },
        certifications: ['ISO 9001:2015', 'ASTM D2226', 'REACH Compliant', 'EU 1907/2006'],
        industries: ['Automotive', 'Construction', 'Aerospace', 'Consumer Goods'],
        handling: 'Store in a cool, dry place. Avoid heat and open flames. Use oil-resistant gloves for handling.'
    },
    {
        name: 'White Spirit',
        description: 'Refined hydrocarbon solvent widely used in paints, coatings, surface cleaning, and industrial degreasing applications.',
        href: '/products/white-spirit',
        backgroundImage: whiteSpiritImg,
        icon: <FlaskConical className="w-6 h-6" />,
        slug: 'white-spirit',
        category: 'Petrochemicals',

        fullDescription:
            'White Spirit is a petroleum-derived aliphatic solvent obtained from refined distillate fractions. It is extensively used as a thinner and solvent in the paints and coatings industry due to its controlled evaporation rate and strong solvency characteristics. Available in regular, low-aromatic, and low-odor grades, our white spirit is produced to meet strict quality standards, ensuring consistent performance in coating formulations, cleaning processes, and surface preparation applications.',

        uses: [
            'Thinning and formulation of paints, enamels, and varnishes',
            'Degreasing and cleaning of metal surfaces and mechanical parts',
            'Industrial and commercial cleaning applications',
            'Manufacturing of varnishes, sealers, and protective coatings'
        ],

        features: [
            'Low aromatic content options to reduce odor and health impact',
            'Controlled and consistent evaporation rate for uniform coating finish',
            'Strong solvency power for oils, greases, and resins',
            'Good color stability ensuring no discoloration in finished products'
        ],

        specifications: {
            purity: '99.0% minimum hydrocarbon content',
            packaging: 'Bulk supply, IBCs, steel drums, cans',
            casNumber: '64742-82-1'
        },

        certifications: [
            'ASTM D235 Mineral Spirits Specification',
            'BS 245 White Spirit Standard',
            'REACH Regulatory Compliance'
        ],

        industries: [
            'Paints & Coatings Manufacturing',
            'Printing Inks & Surface Treatments',
            'Industrial & Commercial Cleaning',
            'Adhesives & Sealants'
        ],

        handling:
            'Flammable liquid. Store in approved containers away from heat, sparks, and open flames. Ensure proper grounding during transfer operations. Use only in well-ventilated areas and wear appropriate personal protective equipment to avoid inhalation and prolonged skin contact.'
    }
    ,
    {
        name: 'White Oil',
        description: 'Highly refined mineral oil for pharmaceutical and cosmetic use.',
        href: '/products/white-oil',
        backgroundImage: whiteoilimge,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'white-oil',
        category: 'Petrochemicals',
        fullDescription: 'White oils are highly refined mineral oils that are extremely pure, stable, colorless, odorless, and chemically inert. Our pharmaceutical and technical grade white oils meet the most stringent purity requirements.',
        uses: ['Pharmaceuticals', 'Cosmetics', 'Food processing', 'Plastics lubrication'],
        features: [
            'Food grade available (USP/NF)',
            'Completely odorless and tasteless',
            'Excellent oxidation stability',
            'FDA compliant grades'
        ],
        specifications: {
            purity: '99.9% min',
            packaging: 'Bulk, IBCs, Drums',
            casNumber: '8042-47-5'
        },
        certifications: ['USP', 'NF', 'EP', 'JP', 'FDA 21 CFR 172.878'],
        industries: ['Pharmaceutical', 'Cosmetics', 'Food & Beverage', 'Medical Devices'],
        handling: 'Store in clean, dry conditions. Protect from extreme temperatures. Use food-grade handling equipment for food applications.'
    },
    {
        name: 'Distillate Marine Oil',
        description: 'Low-sulfur distillate marine fuel formulated for reliable performance in modern and legacy marine diesel engines.',
        href: '/products/distillate-marine-oil',
        backgroundImage: distillateMarineOil,
        icon: <Waves className="w-6 h-6" />,
        slug: 'distillate-marine-oil',
        category: 'Petrochemicals',

        fullDescription:
            'Distillate Marine Oil is a refined petroleum distillate fuel specifically produced for use in marine diesel engines and auxiliary power systems. Commonly supplied as marine gas oil (MGO) or marine diesel oil (MDO), it offers clean combustion, stable ignition quality, and compliance with international maritime emission regulations. Our distillate marine fuels are blended and tested to meet ISO 8217 specifications and IMO 2020 sulfur limits, ensuring operational reliability, reduced emissions, and engine protection across a wide range of marine applications.',

        uses: [
            'Main propulsion fuel for marine diesel engines',
            'Fuel for auxiliary engines and onboard generators',
            'Offshore vessels and support craft operations',
            'Naval, fishing, and coastal marine vessels'
        ],

        features: [
            'Low sulfur content compliant with IMO 2020 regulations (<0.50% m/m)',
            'High cetane number for reliable ignition and smooth engine operation',
            'Good oxidation stability for safe storage and onboard fuel systems',
            'Suitable for use in modern and conventional marine diesel engines'
        ],

        specifications: {
            purity: '98.5% minimum distillate fuel content',
            packaging: 'Bunker barge supply, bulk delivery',
            casNumber: '68334-30-5'
        },

        certifications: [
            'ISO 8217:2017 Marine Distillate Fuel Standard',
            'IMO 2020 Sulfur Regulation Compliance',
            'MARPOL Annex VI Emission Requirements'
        ],

        industries: [
            'Commercial Shipping & Logistics',
            'Offshore Energy & Support Vessels',
            'Naval & Defense Fleets',
            'Fishing & Coastal Marine Operations'
        ],

        handling:
            'Handle strictly in accordance with marine bunkering procedures. Ensure proper filtration during transfer to prevent contamination. Avoid spills and discharge into the marine environment. Follow shipboard fuel management and safety guidelines at all times.'
    }
    ,

    // Solvents
    {
        name: 'Butyl Glycol (EGBE)',
        description: 'High-purity glycol ether solvent used in coatings, industrial cleaners, inks, and specialty chemical formulations.',
        href: '/products/butyl-glycol',
        backgroundImage: solventsImg,
        icon: <Beaker className="w-6 h-6" />,
        slug: 'butyl-glycol',
        category: 'Solvents',

        fullDescription:
            'Butyl Glycol, also known as Ethylene Glycol Monobutyl Ether (EGBE), is a clear, colorless liquid glycol ether with a mild odor, high boiling point, and excellent solvency characteristics. It is widely used as a solvent and coupling agent in water-based and solvent-based formulations. Due to its ability to dissolve both hydrophilic and hydrophobic substances, EGBE is an essential component in surface coatings, industrial and household cleaners, inks, and textile processing chemicals.',

        uses: [
            'Solvent and coalescing agent in water-based and solvent-based surface coatings',
            'Formulation of industrial, institutional, and household cleaning products',
            'Solvent for printing inks, dyes, and pigments',
            'Textile dyeing, finishing, and processing applications'
        ],

        features: [
            'Excellent coupling ability between water and organic components',
            'Slow and controlled evaporation rate for smooth film formation',
            'Good miscibility with water and most organic solvents',
            'Readily biodegradable under standard environmental conditions'
        ],

        specifications: {
            purity: '99.5% minimum assay',
            packaging: 'Bulk supply, IBCs, sealed steel drums',
            casNumber: '111-76-2',
            formula: 'C6H14O2'
        },

        certifications: [
            'Technical Grade Industrial Solvent',
            'REACH Registered Substance'
        ],

        industries: [
            'Paints & Coatings Manufacturing',
            'Industrial & Institutional Cleaning Products',
            'Textiles & Dye Processing',
            'Printing Inks & Pigment Formulations'
        ],

        handling:
            'Handle with adequate ventilation and avoid inhalation of vapors. Prevent prolonged or repeated skin contact by using appropriate protective gloves. Store in tightly closed containers in a cool, well-ventilated area away from incompatible materials.'
    }
    ,
    {
        name: 'Ethyl Acetate',
        description: 'High-purity ester solvent widely used in coatings, printing inks, adhesives, pharmaceuticals, and food-related applications.',
        href: '/products/ethyl-acetate',
        backgroundImage: Ethylacetate,
        icon: <FlaskConical className="w-6 h-6" />,
        slug: 'ethyl-acetate',
        category: 'Solvents',

        fullDescription:
            'Ethyl acetate is a colorless, volatile organic ester with a characteristic mild fruity odor. It is produced through the esterification of ethanol and acetic acid and is extensively used as a fast-evaporating solvent across multiple industries. Due to its excellent solvency for resins, polymers, and oils, ethyl acetate is a preferred solvent in coatings, inks, adhesives, and pharmaceutical processes. It is also widely accepted in food and flavor applications when supplied in food-grade quality.',

        uses: [
            'Primary solvent in surface coatings, lacquers, and varnishes',
            'Manufacturing of printing inks and packaging inks',
            'Solvent for adhesive formulations and laminating systems',
            'Extraction and purification processes in pharmaceutical and food industries'
        ],

        features: [
            'Fast evaporation rate enabling quick drying and high productivity',
            'Excellent solvency for a wide range of resins and polymers',
            'Relatively low toxicity compared to many hydrocarbon solvents',
            'Readily biodegradable under normal environmental conditions'
        ],

        specifications: {
            purity: '99.8% minimum assay',
            packaging: 'Bulk supply, IBCs, sealed steel drums',
            casNumber: '141-78-6',
            formula: 'C4H8O2'
        },

        certifications: [
            'Food Grade Quality',
            'Technical Grade Industrial Solvent',
            'USP / NF Pharmaceutical Compliance'
        ],

        industries: [
            'Printing Inks & Packaging',
            'Pharmaceutical Manufacturing',
            'Food & Flavor Industry',
            'Paints, Coatings & Adhesives'
        ],

        handling:
            'Highly flammable liquid. Keep away from heat, sparks, and open flames. Use grounded and explosion-proof equipment during transfer. Ensure adequate ventilation and avoid prolonged inhalation of vapors.'
    }
    ,
    {
        name: 'Butyl Acetate',
        description: 'Medium-evaporating ester solvent widely used in lacquers, enamels, printing inks, and high-performance coating systems.',
        href: '/products/butyl-acetate',
        backgroundImage: ButylAcetate,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'butyl-acetate',
        category: 'Solvents',

        fullDescription:
            'Butyl acetate is a clear, colorless ester solvent with a characteristic mild fruity odor, produced by the esterification of n-butanol and acetic acid. It is extensively used in solvent-based coatings due to its balanced evaporation rate, strong solvency for resins, and excellent flow and leveling properties. These characteristics make it a preferred solvent in automotive, wood, and industrial coatings, as well as printing inks and specialty finishes.',

        uses: [
            'Solvent in lacquers, enamels, and industrial coating formulations',
            'Dissolution and processing of resins and polymers',
            'Surface finishing applications in leather and synthetic materials',
            'Printing inks and specialty film and coating applications'
        ],

        features: [
            'Controlled evaporation rate providing smooth film formation and leveling',
            'Excellent flow promotion and gloss development in coatings',
            'Good blush resistance in high-humidity application conditions',
            'High dilution ratio allowing efficient resin solubilization'
        ],

        specifications: {
            purity: '99.5% minimum assay',
            packaging: 'Bulk supply, IBCs, sealed steel drums',
            casNumber: '123-86-4',
            formula: 'C6H12O2'
        },

        certifications: [
            'ASTM D3130 Solvent Specification',
            'Technical Grade Industrial Solvent'
        ],

        industries: [
            'Automotive & Industrial Coatings',
            'Wood Finishes & Furniture',
            'Printing Inks & Packaging',
            'Leather & Synthetic Materials'
        ],

        handling:
            'Flammable liquid. Store in a cool, well-ventilated area away from ignition sources. Use spark-proof and grounded equipment during handling and transfer. Avoid prolonged inhalation of vapors and direct skin contact.'
    }
    ,
    {
        name: 'Methyl Ethyl Ketone (MEK)',
        description: 'High-purity ketone solvent widely used for resins, adhesives, coatings, and industrial chemical processes.',
        href: '/products/mek',
        backgroundImage: MethylEthylKetone,
        icon: <Zap className="w-6 h-6" />,
        slug: 'mek',
        category: 'Solvents',

        fullDescription:
            'Methyl Ethyl Ketone (MEK), also known as 2-butanone, is a colorless, volatile ketone solvent characterized by its strong solvency power and rapid evaporation rate. It is extensively used in the formulation of surface coatings, adhesives, and printing inks, particularly for dissolving gums, resins, cellulose acetate, and nitrocellulose systems. MEK is also employed as a process solvent and chemical intermediate in various industrial manufacturing operations.',

        uses: [
            'Solvent for surface coatings, lacquers, and industrial paints',
            'Formulation of solvent-based adhesives and sealants',
            'Manufacturing of printing inks and packaging inks',
            'Process solvent and intermediate in chemical manufacturing'
        ],

        features: [
            'Fast evaporation rate enabling quick drying and high throughput',
            'Strong solvency for a wide range of resins and polymers',
            'Low boiling point supporting efficient solvent recovery',
            'Excellent compatibility with nitrocellulose and acrylic resin systems'
        ],

        specifications: {
            purity: '99.7% minimum assay',
            packaging: 'Bulk supply, IBCs, sealed steel drums',
            casNumber: '78-93-3',
            formula: 'C4H8O'
        },

        certifications: [
            'Technical Grade Industrial Solvent',
            'ASTM D740 Specification Compliance'
        ],

        industries: [
            'Adhesives & Sealants',
            'Paints & Industrial Coatings',
            'Printing Inks & Packaging',
            'Chemical Processing & Manufacturing'
        ],

        handling:
            'Extremely flammable liquid. Enforce strict no-smoking policies and eliminate all ignition sources. Ground and bond all containers during transfer operations. Use explosion-proof electrical equipment and ensure adequate ventilation to prevent vapor accumulation.'
    }
    ,
    {
        name: 'Toluene',
        description: 'High-purity aromatic hydrocarbon solvent and chemical feedstock used in coatings, adhesives, and petrochemical processing.',
        href: '/products/toluene',
        backgroundImage: Toluene,
        icon: <Wind className="w-6 h-6" />,
        slug: 'toluene',
        category: 'Solvents',

        fullDescription:
            'Toluene is a colorless, volatile aromatic hydrocarbon derived from petroleum refining and catalytic reforming processes. It is insoluble in water and has a characteristic aromatic odor commonly associated with paint thinners. Due to its strong solvency and chemical stability, toluene is extensively used as a solvent in paints, coatings, adhesives, and printing inks. It also serves as an important chemical feedstock in the production of benzene derivatives, explosives, and various specialty chemicals.',

        uses: [
            'Solvent in paints, coatings, and industrial finishing systems',
            'Chemical feedstock for synthesis of benzene derivatives and intermediates',
            'Component in adhesive, rubber, and sealant formulations',
            'Octane-enhancing blending component in gasoline formulations'
        ],

        features: [
            'High solvency power for resins, rubbers, and polymers',
            'Fast evaporation rate suitable for quick-drying applications',
            'Excellent dissolving capacity across a wide range of materials',
            'Good chemical and storage stability under normal conditions'
        ],

        specifications: {
            purity: '99.5% minimum assay',
            packaging: 'Bulk supply, ISO tanks, sealed steel drums',
            casNumber: '108-88-3',
            formula: 'C7H8'
        },

        certifications: [
            'Nitration Grade',
            'Industrial Grade',
            'ASTM D841 Aromatic Hydrocarbon Specification'
        ],

        industries: [
            'Paints & Coatings Manufacturing',
            'Pharmaceutical & Fine Chemicals',
            'Adhesives & Rubber Processing',
            'Petrochemical & Refining Industry'
        ],

        handling:
            'Highly flammable liquid. Handle with strict safety protocols. Avoid inhalation of vapors and prolonged skin contact. Use only in well-ventilated areas and ensure containers are properly grounded during storage and transfer operations.'
    }
    ,
    {
        name: 'Xylene',
        description: 'A widely used aromatic hydrocarbon solvent for industrial and laboratory applications.',
        href: '/products/xylene',
        backgroundImage: Xylene,
        icon: <Box className="w-6 h-6" />,
        slug: 'xylene',
        category: 'Solvents',

        fullDescription:
            'Xylene is a colorless, flammable aromatic hydrocarbon consisting of a mixture of ortho-, meta-, and para-xylene isomers. It is produced mainly from petroleum refining and catalytic reforming processes. Xylene is extensively used as an industrial solvent due to its strong dissolving power for resins, inks, rubber compounds, and adhesives.',

        uses: [
            'Solvent for paints and coatings',
            'Printing ink solvent',
            'Rubber processing solvent',
            'Leather treatment solvent',
            'Laboratory reagent',
            'Cleaning agent for industrial equipment'
        ],

        features: [
            'Excellent solvency for organic materials',
            'Stable aromatic hydrocarbon structure',
            'Moderate evaporation rate',
            'Consistent performance in industrial applications',
            'Available as mixed or individual isomers'
        ],

        specifications: {
            purity: '99.0% min (Mixed Xylenes)',
            // // appearance: 'Clear, colorless liquid',
            // odor: 'Sweet aromatic odor',
            // boilingPoint: '137–144 °C',
            // density: '0.86 g/cm³ at 20 °C',
            packaging: 'Bulk, ISO Tank, IBC, HDPE Drums',
            casNumber: '1330-20-7',
            formula: 'C8H10'
        },

        certifications: [
            'Technical Grade',
            'Industrial Grade',
            'ASTM D843',
            'ISO 9001 Manufacturing'
        ],

        industries: [
            'Paints & Coatings',
            'Printing & Packaging',
            'Rubber & Tyre Manufacturing',
            'Leather Processing',
            'Petrochemicals',
            'Laboratories'
        ],

        handling:
            'Highly flammable liquid. Vapors may form explosive mixtures with air. Avoid inhalation and skin contact. Use only in well-ventilated areas. Wear appropriate PPE including gloves, goggles, and respirators if required. Store away from heat, sparks, and open flames.'
    }
    ,
    {
        name: 'Acetone',
        description: 'High-purity ketone solvent widely used for cleaning, extraction, and chemical manufacturing.',
        href: '/products/acetone',
        backgroundImage: Acetone,
        icon: <Pipette className="w-6 h-6" />,
        slug: 'acetone',
        category: 'Solvents',

        fullDescription:
            'Acetone (propanone) is a colorless, volatile, and highly flammable organic solvent and the simplest ketone. It is completely miscible with water and most organic solvents. Due to its strong solvency, rapid evaporation, and low residue, acetone is extensively used in chemical synthesis, pharmaceutical processing, surface cleaning, and cosmetics manufacturing.',

        uses: [
            'Industrial and laboratory cleaning solvent',
            'Chemical intermediate in pharmaceuticals',
            'Paint, resin, and coating solvent',
            'Cosmetics and nail polish remover base',
            'Degreasing agent for metal surfaces',
            'Extraction solvent in laboratories'
        ],

        features: [
            '100% water miscible',
            'Very fast evaporation rate',
            'Excellent degreasing and cleaning ability',
            'Low residue after evaporation',
            'Available in multiple purity grades'
        ],

        specifications: {
            purity: '99.8% min',
            // appearance: 'Clear, colorless liquid',
            // odor: 'Characteristic sweet odor',
            // boilingPoint: '56 °C',
            // meltingPoint: '-95 °C',
            // density: '0.79 g/cm³ at 20 °C',
            // flashPoint: '-20 °C (closed cup)',
            packaging: 'Bulk, ISO Tank, IBC, HDPE Drums',
            casNumber: '67-64-1',
            formula: 'C3H6O'
        },

        certifications: [
            'ACS Reagent Grade',
            'USP / NF',
            'Pharmacopoeia Grade',
            'Technical Grade',
            'ISO 9001 Certified Supply'
        ],

        industries: [
            'Pharmaceuticals',
            'Cosmetics & Personal Care',
            'Paints & Coatings',
            'Chemical Manufacturing',
            'Laboratories',
            'Electronics Cleaning'
        ],

        handling:
            'Extremely flammable liquid and vapor. Keep away from heat, sparks, and open flames. Use only in well-ventilated areas. Avoid inhalation of vapors and prolonged skin contact. Ground and bond containers during transfer. Store in tightly closed containers in a cool, dry place.'
    }
    ,
    {
        name: 'Glycols',
        description: 'High-purity glycols used in antifreeze, polyester manufacturing, and industrial heat-transfer applications.',
        href: '/products/glycols',
        backgroundImage: glycolsImg,
        icon: <Beaker className="w-6 h-6" />,
        slug: 'glycols',
        category: 'Solvents',

        fullDescription:
            'Glycols such as Monoethylene Glycol (MEG) and Diethylene Glycol (DEG) are widely used industrial chemicals known for their excellent thermal stability, hygroscopic nature, and low freezing points. These glycols are essential raw materials in antifreeze formulations, polyester fiber and resin production, heat transfer fluids, and industrial humectants.',

        uses: [
            'Antifreeze and engine coolants',
            'Polyester fiber and PET resin manufacturing',
            'Heat transfer fluids',
            'Industrial humectants and dehydrating agents'
        ],

        features: [
            'High purity industrial-grade glycols',
            'Excellent heat transfer efficiency',
            'Low freezing point characteristics',
            'Consistent quality for polymer applications'
        ],

        specifications: {
            purity: '99.9% min (MEG), 99.5% min (DEG)',
            packaging: 'Bulk, ISO Tanks, IBCs, Drums',
            casNumber: '107-21-1 (MEG), 111-46-6 (DEG)',
            formula: 'C2H6O2 (MEG), C4H10O3 (DEG)'
        },

        certifications: [
            'Industrial Grade',
            'Fiber Grade',
            'Antifreeze Grade'
        ],

        industries: [
            'Automotive',
            'Textiles',
            'Packaging (PET)',
            'HVAC',
            'Chemical Manufacturing'
        ],

        handling:
            'Hygroscopic material. Store in tightly sealed containers to prevent moisture absorption. Avoid prolonged skin contact and inhalation of vapors or mists. Use in well-ventilated areas and follow standard industrial safety procedures.'
    }
    ,

    // Detergent & Chemical Raw Materials
    {
        name: 'LABSA 96%',
        description: 'Linear Alkyl Benzene Sulphonic Acid used as a primary surfactant in detergent formulations.',
        href: '/products/labsa',
        backgroundImage: LABSA96,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'labsa',
        category: 'Detergent & Chemical Raw Materials',

        fullDescription:
            'LABSA 96% (Linear Alkyl Benzene Sulphonic Acid) is a high-activity anionic surfactant extensively used in the manufacture of household and industrial detergents. It offers excellent detergency, high foaming capacity, and effective soil removal. Due to its cost efficiency and biodegradability, LABSA remains the backbone raw material for detergent and cleaning product formulations worldwide.',

        uses: [
            'Laundry washing powders and liquids',
            'Dishwashing liquids',
            'Household surface cleaners',
            'Industrial and institutional cleaning products'
        ],

        features: [
            'High active matter content (96%)',
            'Strong detergency and emulsifying properties',
            'Excellent foaming performance',
            'Biodegradable under aerobic conditions'
        ],

        specifications: {
            purity: '96% min active matter',
            packaging: 'Bulk, IBCs, HDPE Drums',
            casNumber: '27176-87-0',
            formula: 'C18H30O3S'
        },

        certifications: [
            'ISO 9001 Certified Manufacturing',
            'REACH Compliant'
        ],

        industries: [
            'Detergent Manufacturing',
            'Household Cleaning Products',
            'Industrial Cleaning Chemicals',
            'Personal Care Formulations'
        ],

        handling:
            'Corrosive acidic material. Handle with chemical-resistant gloves, goggles, and protective clothing. Store in acid-resistant containers away from moisture and incompatible materials. Avoid direct contact with skin and eyes.'
    }
    ,
    {
        name: 'SLES 70%',
        description: 'Sodium Lauryl Ether Sulfate widely used as a primary surfactant in personal care and cleaning formulations.',
        href: '/products/sles',
        backgroundImage: SLES70,
        icon: <Beaker className="w-6 h-6" />,
        slug: 'sles',
        category: 'Detergent & Chemical Raw Materials',

        fullDescription:
            'SLES 70% (Sodium Lauryl Ether Sulfate) is an anionic surfactant supplied as a high-active viscous paste. It provides excellent foaming, detergency, and wetting performance while remaining relatively mild to skin when properly formulated. SLES 70% is a core ingredient in shampoos, liquid soaps, body washes, and household cleaning products.',

        uses: [
            'Shampoos and hair cleansers',
            'Liquid hand soaps',
            'Body wash and shower gels',
            'Household liquid detergents'
        ],

        features: [
            'High active matter (70%)',
            'Rich and stable foam',
            'Good skin compatibility when diluted',
            'Readily biodegradable'
        ],

        specifications: {
            purity: '70% active matter',
            packaging: 'Bulk, IBCs, HDPE Drums',
            casNumber: '68585-34-2',
            formula: 'C12H25(OCH2CH2)nOSO3Na'
        },

        certifications: [
            'Cosmetic Grade',
            'REACH Registered',
            'ISO 22716 (GMP Cosmetics)'
        ],

        industries: [
            'Personal Care Products',
            'Cosmetics Manufacturing',
            'Household Cleaning Products',
            'Industrial Liquid Detergents'
        ],

        handling:
            'Store in tightly sealed containers away from direct sunlight. Avoid freezing or overheating. Use appropriate PPE when handling concentrated material to prevent irritation.'
    }
    ,
    {
        name: 'Caustic Soda Flakes',
        description: 'Highly corrosive alkali used widely in soap, paper, textile, and chemical industries.',
        href: '/products/caustic-soda',
        backgroundImage: Casusticsoda,
        icon: <Box className="w-6 h-6" />,
        slug: 'caustic-soda',
        category: 'Detergent & Chemical Raw Materials',

        fullDescription:
            'Caustic Soda Flakes (Sodium Hydroxide) are a strong inorganic alkali produced by the electrolysis of sodium chloride brine. Supplied in solid white flakes, it is highly soluble in water and releases heat during dissolution. It is a critical raw material in soap and detergent manufacturing, pulp and paper processing, textiles, water treatment, and various chemical reactions.',

        uses: [
            'Soap and detergent manufacturing',
            'Pulp and paper processing',
            'Textile scouring and dyeing',
            'Water treatment and pH control'
        ],

        features: [
            'High chemical purity (≥99%)',
            'Low carbonate and chloride levels',
            'Rapid solubility in water',
            'Stable quality for industrial use'
        ],

        specifications: {
            purity: '99% min',
            packaging: '25 kg HDPE bags, Jumbo bags, Bulk',
            casNumber: '1310-73-2',
            formula: 'NaOH'
        },

        certifications: [
            'Technical Grade',
            'Food Grade (as per application)',
            'Pharma Grade (controlled use)'
        ],

        industries: [
            'Soap & Detergent Manufacturing',
            'Pulp & Paper',
            'Textiles',
            'Water Treatment'
        ],

        handling:
            'Extremely corrosive material. Use chemical-resistant gloves, goggles, and protective clothing. Store in airtight containers in a dry area away from moisture and acids. In case of skin or eye contact, rinse immediately with plenty of water and seek medical attention.'
    }
    ,
    {
        name: 'Soda Ash Light',
        description: 'Light-density sodium carbonate used in glass, detergents, and chemical processing.',
        href: '/products/soda-ash-light',
        backgroundImage: sodaashlight,
        icon: <Layers className="w-6 h-6" />,
        slug: 'soda-ash-light',
        category: 'Detergent & Chemical Raw Materials',

        fullDescription:
            'Soda Ash Light (Sodium Carbonate) is a white, odorless, free-flowing powder with lower bulk density than dense soda ash. It is produced via the Solvay process and is widely used as an alkaline agent in glass manufacturing, detergent formulation, paper processing, and water treatment. Its light density makes it especially suitable for detergent blending and chemical reactions requiring fast dissolution.',

        uses: [
            'Glass manufacturing',
            'Detergent and soap production',
            'Paper and pulp processing',
            'Water softening and pH adjustment'
        ],

        features: [
            'High chemical purity',
            'Low iron content suitable for clear glass',
            'Good solubility in water',
            'Uniform particle size'
        ],

        specifications: {
            purity: '99.2% min',
            packaging: '25 kg bags, Jumbo bags, Bulk',
            casNumber: '497-19-8',
            formula: 'Na2CO3'
        },

        certifications: [
            'ISO 9001',
            'Technical Grade',
            'Glass Grade'
        ],

        industries: [
            'Glass Manufacturing',
            'Detergents & Soaps',
            'Water Treatment',
            'Metallurgy'
        ],

        handling:
            'Store in a cool, dry place away from moisture. Avoid dust generation during handling. Use appropriate PPE such as gloves and dust masks. Hygroscopic material—keep containers tightly closed.'
    }
    ,

    // Water Treatment Chemicals
    {
        name: 'Aluminum Sulphate',
        description: 'Widely used inorganic coagulant for water and wastewater treatment.',
        href: '/products/aluminum-sulphate',
        backgroundImage: AluminumSulphate,
        icon: <Waves className="w-6 h-6" />,
        slug: 'aluminum-sulphate',
        category: 'Water Treatment Chemicals',

        fullDescription:
            'Aluminum Sulphate is an inorganic salt commonly used as a primary coagulant in drinking water purification and wastewater treatment. It reacts with alkalinity in water to form aluminum hydroxide flocs, which effectively trap suspended solids, organic matter, and turbidity. It is supplied in solid (lumps or powder) and liquid forms for municipal and industrial applications.',

        uses: [
            'Drinking water treatment',
            'Wastewater and effluent treatment',
            'Paper sizing and paper manufacturing',
            'pH control and clarification processes'
        ],

        features: [
            'Fast and efficient coagulation',
            'Effective turbidity and color removal',
            'Reliable performance in neutral pH range',
            'Economical and widely accepted treatment chemical'
        ],

        specifications: {
            purity: '17% Al2O3 min',
            packaging: 'Bulk, IBCs, 25 kg bags',
            casNumber: '10043-01-3',
            formula: 'Al2(SO4)3'
        },

        certifications: [
            'NSF/ANSI 60',
            'Drinking Water Grade',
            'Technical Grade'
        ],

        industries: [
            'Municipal Water Treatment',
            'Wastewater Treatment',
            'Paper & Pulp Industry',
            'Industrial Water Processing'
        ],

        handling:
            'Store in a dry, well-ventilated area away from alkaline substances. Avoid contact with skin and eyes. Use appropriate PPE such as gloves, goggles, and protective clothing. In case of spillage, contain and clean using approved procedures.'
    }
    ,
    {
        name: 'PAC (Polyaluminium Chloride)',
        description: 'High-efficiency inorganic coagulant for municipal and industrial water treatment.',
        href: '/products/pac',
        backgroundImage: waterTreatmentImg,
        icon: <FlaskConical className="w-6 h-6" />,
        slug: 'pac',
        category: 'Water Treatment Chemicals',

        fullDescription:
            'Polyaluminium Chloride (PAC) is a pre-hydrolyzed aluminum-based coagulant widely used in drinking water, wastewater, and industrial effluent treatment. Due to its polymeric structure and high charge density, PAC provides faster floc formation, improved turbidity removal, and stable performance even in cold water and low-alkalinity conditions compared to conventional alum.',

        uses: [
            'Drinking water clarification',
            'Municipal and industrial wastewater treatment',
            'Industrial water recycling systems',
            'Paper and pulp processing'
        ],

        features: [
            'High basicity and polymerized structure',
            'Effective at low and high turbidity levels',
            'Lower dosage compared to alum',
            'Reduced sludge generation'
        ],

        specifications: {
            purity: '28–30% Al2O3',
            packaging: 'Bulk, IBCs, Drums',
            casNumber: '1327-41-9',
            formula: '[Al2(OH)nCl6−n]m'
        },

        certifications: [
            'NSF/ANSI 60',
            'EN 883',
            'Drinking Water Grade'
        ],

        industries: [
            'Municipal Water Treatment',
            'Wastewater Treatment',
            'Industrial Processing',
            'Paper Industry'
        ],

        handling:
            'Store in corrosion-resistant containers in a cool, dry place. Avoid contact with skin and eyes. Use appropriate PPE including gloves, goggles, and protective clothing. Prevent mixing with strong alkalis.'
    }
    ,

    // Food Industry Chemicals
    {
        name: 'Citric Acid',
        description: 'Food-grade organic acid used for acidity regulation, preservation, and flavor enhancement.',
        href: '/products/citric-acid',
        backgroundImage: CitricAcid,
        icon: <Grape className="w-6 h-6" />,
        slug: 'citric-acid',
        category: 'Food Industry Chemicals',

        fullDescription:
            'Citric Acid is a naturally occurring weak organic acid produced commercially by fermentation of carbohydrates using Aspergillus niger. It is widely used in the food and beverage industry as an acidulant, preservative, flavor enhancer, and chelating agent. It is also used extensively in pharmaceuticals, cosmetics, and cleaning formulations. Available in anhydrous and monohydrate forms to suit different processing requirements.',

        uses: [
            'Food preservative and acidulant',
            'Flavor enhancement in beverages and confectionery',
            'Food stabilizer and pH regulator',
            'Chelating agent in food and pharmaceutical formulations'
        ],

        features: [
            'High food-grade purity',
            'Excellent buffering and chelating properties',
            'Natural fermentation-derived product',
            'Available in anhydrous and monohydrate grades'
        ],

        specifications: {
            purity: '99.5% min',
            packaging: '25 kg bags, 1000 kg jumbo bags',
            casNumber: '77-92-9',
            formula: 'C6H8O7'
        },

        certifications: [
            'Food Grade',
            'USP',
            'FCC',
            'Kosher',
            'Halal'
        ],

        industries: [
            'Food & Beverage',
            'Pharmaceuticals',
            'Cosmetics',
            'Cleaning Products'
        ],

        handling:
            'Store in a cool, dry place away from moisture. Use clean, food-grade handling equipment. Avoid contamination. Ensure containers are tightly sealed to maintain product quality.'
    }
    ,
    {
        name: 'Acetic Acid',
        description: 'High-purity organic acid used in food, pharmaceutical, and industrial applications.',
        href: '/products/acetic-acid',
        backgroundImage: foodIndustryImg,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'acetic-acid',
        category: 'Food Industry Chemicals',

        fullDescription:
            'Acetic Acid is a clear, colorless organic acid with a pungent odor and is the principal component of vinegar. Commercially, it is produced via methanol carbonylation or fermentation routes. It is supplied in food-grade, pharmaceutical-grade, and technical-grade forms and is widely used as an acidity regulator, preservative, chemical intermediate, and processing aid in multiple industries.',

        uses: [
            'Vinegar and food acidulant production',
            'Acidity regulation and preservation',
            'Chemical synthesis and intermediates',
            'Textile processing and dyeing'
        ],

        features: [
            'High purity food and pharma grades available',
            'Available in multiple concentrations including glacial',
            'Clear, colorless liquid with consistent quality',
            'Excellent chemical reactivity'
        ],

        specifications: {
            purity: '99.8% min for glacial',
            packaging: 'Bulk, IBCs, Drums',
            casNumber: '64-19-7',
            formula: 'CH3COOH'
        },

        certifications: [
            'Food Grade',
            'Technical Grade',
            'Pharma Grade'
        ],

        industries: [
            'Food Industry',
            'Chemical Manufacturing',
            'Textiles',
            'Pharmaceuticals'
        ],

        handling:
            'Corrosive material—use acid-resistant gloves, goggles, and protective clothing. Store in dedicated corrosion-resistant containers in a well-ventilated area. Emergency showers and eyewash stations should be available.'
    }
    ,

    // Cosmetics & Personal Care
    {
        name: 'Glycerine (USP Grade)',
        description: 'High-purity USP grade glycerine suitable for cosmetic, pharmaceutical, and personal care formulations.',
        href: '/products/glycerine',
        backgroundImage: Glycerine,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'glycerine',
        category: 'Cosmetics & Personal Care Chemicals',

        fullDescription:
            'Glycerine (also known as glycerol) is a clear, colorless, odorless, and viscous liquid with excellent hygroscopic and humectant properties. Our USP Grade Glycerine complies with United States Pharmacopeia standards and is manufactured under strict quality controls to ensure consistent purity and performance. It is widely used in cosmetic, pharmaceutical, food, and personal care applications for moisture retention, texture enhancement, and product stability.',

        uses: [
            'Skin and hair moisturizers',
            'Soaps and liquid cleansers',
            'Creams and lotions',
            'Oral care products such as toothpaste and mouthwash',
            'Pharmaceutical syrups and topical formulations'
        ],

        features: [
            'USP-compliant pharmaceutical grade',
            'High purity and clarity',
            'Excellent moisturizing and humectant properties',
            'Non-toxic and non-irritating',
            'Suitable for cosmetic and food contact applications'
        ],

        specifications: {
            purity: '≥ 99.7%',
            packaging: 'HDPE drums, IBC totes, bulk supply',
            casNumber: '56-81-5',
            formula: 'C3H8O3'
        },

        certifications: [
            'USP',
            'EP',
            'JP',
            'Kosher',
            'Halal',
            'Non-GMO'
        ],

        industries: [
            'Cosmetics & Personal Care',
            'Pharmaceuticals',
            'Food & Beverages',
            'Oral Care'
        ],

        handling:
            'Store in tightly closed containers in a cool, dry, and well-ventilated area. Glycerine is hygroscopic and readily absorbs moisture from the air. Use clean, dedicated equipment to prevent contamination, especially for cosmetic and pharmaceutical applications.'
    }
    ,
    {
        name: 'Propylene Glycol',
        description: 'High-purity propylene glycol used as a humectant, solvent, and carrier in cosmetic, pharmaceutical, food, and industrial formulations.',
        href: '/products/propylene-glycol',
        backgroundImage: cosmeticsImg,
        icon: <Beaker className="w-6 h-6" />,
        slug: 'propylene-glycol',
        category: 'Cosmetics & Personal Care Chemicals',
        fullDescription: 'Propylene Glycol (PG) is a colorless, odorless, hygroscopic liquid widely used as a humectant, solvent, and formulation stabilizer. It effectively retains moisture, enhances product texture, and improves the solubility of active ingredients in cosmetic and personal care products. It is also extensively used in pharmaceutical syrups, food processing, and industrial applications due to its low toxicity and excellent compatibility profile.',
        uses: [
            'Humectant for moisture retention',
            'Solvent for active ingredients and fragrances',
            'Carrier in pharmaceutical syrups and injectables',
            'Food additive (E1520)',
            'Antifreeze and coolant base (industrial grade)'
        ],
        features: [
            'Available in USP, EP, and Food Grade',
            'Excellent hygroscopic and solvent properties',
            'Chemically stable and low volatility',
            'Low toxicity and skin-compatible',
            'Miscible with water, alcohol, and many organic solvents'
        ],
        specifications: {
            purity: '99.5% – 99.9%',
            packaging: '215 kg HDPE Drums, 1000 kg IBC Totes, Bulk Tanker',
            casNumber: '57-55-6',
            formula: 'C3H8O2'
        },
        certifications: ['USP', 'EP', 'FCC', 'Kosher', 'Halal'],
        industries: ['Cosmetics & Personal Care', 'Pharmaceuticals', 'Food & Beverage', 'Industrial Manufacturing'],
        handling: 'Store in tightly closed containers in a cool, dry, and well-ventilated area. Avoid contamination with moisture or foreign materials. Use appropriate PPE during handling. Keep away from strong oxidizing agents.'
    },

    // Paint & Coatings
    {
        name: 'Titanium Dioxide',
        description: 'High-performance white pigment (TiO2) widely used for opacity, brightness, and UV resistance in paints, coatings, plastics, and specialty applications.',
        href: '/products/titanium-dioxide',
        backgroundImage: TitaniumDioxide,
        icon: <Paintbrush className="w-6 h-6" />,
        slug: 'titanium-dioxide',
        category: 'Paint & Coatings Chemicals',
        fullDescription: 'Titanium Dioxide (TiO2) is a naturally occurring oxide of titanium and the most important white inorganic pigment used globally. It provides exceptional opacity, high refractive index, superior brightness, and excellent UV resistance. Rutile grade TiO2 is primarily used in paints, coatings, and plastics due to its superior durability and weather resistance, while anatase grade is used in paper, inks, and specialty applications. It enhances hiding power, improves color retention, and increases product lifespan.',
        uses: [
            'Architectural and industrial paints',
            'Powder and protective coatings',
            'Masterbatches and plastic compounding',
            'Paper coating and filling',
            'Printing inks',
            'Cosmetic and personal care formulations (select grades)'
        ],
        features: [
            'High refractive index for superior hiding power',
            'Excellent brightness and whiteness',
            'Outstanding UV resistance and weather durability',
            'Available in Rutile and Anatase grades',
            'Surface-treated grades for enhanced dispersion'
        ],
        specifications: {
            purity: '≥ 94% TiO2 (Rutile grade typically 94–96%, Anatase up to 98%)',
            packaging: '25 kg multi-wall paper bags, 500 kg / 1000 kg jumbo bags',
            casNumber: '13463-67-7',
            formula: 'TiO2'
        },
        certifications: ['ISO 591-1 (Rutile/Anatase classification)', 'ASTM D476', 'REACH Registered'],
        industries: ['Paints & Coatings', 'Plastics & Polymers', 'Paper & Pulp', 'Printing Inks', 'Cosmetics (Approved Grades)'],
        handling: 'Avoid dust formation during handling. Use local exhaust ventilation in enclosed areas. Wear suitable respiratory protection if exposure limits are exceeded. Store in a dry area away from moisture and contamination.'
    },
    {
        name: 'Zinc Oxide',
        description: 'High-purity inorganic white pigment offering UV protection, corrosion resistance, and antimicrobial performance for coatings, rubber, cosmetics, and pharmaceutical applications.',
        href: '/products/zinc-oxide',
        backgroundImage: paintCoatingsImg,
        icon: <Box className="w-6 h-6" />,
        slug: 'zinc-oxide',
        category: 'Paint & Coatings Chemicals',
        fullDescription: 'Zinc Oxide (ZnO) is an inorganic compound appearing as a fine white powder, insoluble in water but soluble in acids and alkalis. It is widely used for its excellent UV absorption, antimicrobial properties, and corrosion resistance. In coatings, it improves mildew resistance and durability. In the rubber industry, it acts as a key activator in the vulcanization process. Cosmetic and pharmaceutical grades are used in sunscreens, ointments, and skin protectants due to their skin-soothing and protective properties.',
        uses: [
            'Anti-corrosive pigment in paints and primers',
            'UV absorber in sunscreens and coatings',
            'Activator in rubber vulcanization',
            'Skin protectant in ointments and creams',
            'Ceramic glazes and glass manufacturing'
        ],
        features: [
            'Available in Technical, Rubber, and Pharma/Cosmetic grades',
            'Excellent UV absorption capability',
            'Natural antimicrobial and antifungal properties',
            'High thermal stability',
            'Good dispersion characteristics in formulations'
        ],
        specifications: {
            purity: '99.0% – 99.9% (depending on grade)',
            packaging: '25 kg HDPE or paper bags, 500 kg / 1000 kg jumbo bags',
            casNumber: '1314-13-2',
            formula: 'ZnO'
        },
        certifications: ['USP (Pharmaceutical Grade)', 'FCC (Food Grade)', 'REACH Registered'],
        industries: ['Paints & Coatings', 'Rubber & Tyre Manufacturing', 'Cosmetics & Personal Care', 'Pharmaceuticals', 'Ceramics & Glass'],
        handling: 'Avoid formation and inhalation of dust. Use appropriate ventilation and respiratory protection where necessary. Store in tightly sealed containers in a cool, dry area away from moisture and strong acids.'
    },

    // Mining
    {
        name: 'Sodium Cyanide',
        description: 'Highly toxic inorganic compound primarily used in gold and silver extraction through cyanidation processes in the mining industry.',
        href: '/products/sodium-cyanide',
        backgroundImage: SodiumCyanide,
        icon: <Hammer className="w-6 h-6" />,
        slug: 'sodium-cyanide',
        category: 'Mining Industry Chemicals',
        fullDescription: 'Sodium Cyanide (NaCN) is a white, water-soluble, highly toxic inorganic compound extensively used in the mining industry for the extraction of gold and silver via the cyanidation process. It forms stable complexes with precious metals, enabling efficient recovery from ore. It is supplied in solid briquettes, powder form, or aqueous solution, manufactured under strict quality and safety standards. Due to its extreme toxicity, production, transport, storage, and use are subject to rigorous international safety regulations.',
        uses: [
            'Gold extraction by heap leaching and tank leaching',
            'Silver recovery processes',
            'Electroplating and metal finishing',
            'Chemical intermediate in specialty synthesis'
        ],
        features: [
            'High purity mining grade material',
            'Rapid dissolution in water',
            'Efficient metal complexing capability',
            'Available in solid briquettes and liquid solution',
            'Manufactured under strict quality and safety controls'
        ],
        specifications: {
            purity: '≥ 98% (solid briquettes), typically 30% solution for liquid grade',
            packaging: 'Steel drums, wooden boxes with polyethylene liners, ISO tank containers (solution)',
            casNumber: '143-33-9',
            formula: 'NaCN'
        },
        certifications: ['ISO 9001 Manufacturing', 'ICMC Compliant (International Cyanide Management Code)'],
        industries: ['Gold & Silver Mining', 'Metallurgy', 'Electroplating', 'Chemical Manufacturing'],
        handling: 'EXTREMELY TOXIC AND FATAL IF INGESTED, INHALED, OR ABSORBED THROUGH SKIN. Handle only in controlled industrial environments by trained personnel. Use full PPE including chemical-resistant gloves, protective clothing, and respiratory protection. Store in dry, secure, well-ventilated areas away from acids and moisture. Emergency response procedures and cyanide antidote kits must be readily available.'
    },
    {
        name: 'Activated Carbon',
        description: 'High-surface-area porous carbon specifically engineered for gold recovery, water purification, and industrial adsorption applications.',
        href: '/products/activated-carbon',
        backgroundImage: miningImg,
        icon: <Box className="w-6 h-6" />,
        slug: 'activated-carbon',
        category: 'Mining Industry Chemicals',
        fullDescription: 'Activated Carbon is a highly porous form of carbon produced from coconut shell, coal, or wood and processed to develop an extensive internal pore structure. It provides exceptional adsorption capacity due to its large surface area (typically 900–1200 m²/g). In the mining industry, it is widely used in Carbon-in-Pulp (CIP), Carbon-in-Leach (CIL), and Carbon-in-Column (CIC) processes for efficient gold recovery. It is also used in water and air purification systems to remove organic compounds, chlorine, and contaminants.',
        uses: [
            'Gold recovery in CIP, CIL, and CIC processes',
            'Drinking water and wastewater treatment',
            'Air and gas purification systems',
            'Decolorization and purification in chemical processing',
            'Food and beverage purification applications'
        ],
        features: [
            'High surface area (900–1200 m²/g)',
            'Excellent gold adsorption efficiency',
            'High hardness and low attrition loss',
            'Controlled particle size distribution',
            'Thermally regenerable for multiple reuse cycles'
        ],
        specifications: {
            purity: 'Fixed carbon typically ≥ 85%',
            packaging: '25 kg HDPE bags, 500 kg / 1000 kg jumbo bags',
            casNumber: '7440-44-0',
            formula: 'C'
        },
        certifications: ['ISO 9001 Manufacturing', 'NSF/ANSI 61 (Water Treatment Grade)'],
        industries: ['Gold Mining', 'Water & Wastewater Treatment', 'Air & Gas Purification', 'Food & Beverage Processing'],
        handling: 'Avoid dust generation and inhalation. Use local exhaust ventilation where necessary. Store in a dry, well-ventilated area away from moisture and strong oxidizing agents. Spent carbon may contain adsorbed hazardous materials and should be handled according to environmental regulations.'
    },

    // Textile
    {
        name: 'Hydrogen Peroxide',
        description: 'Strong oxidizing agent widely used for textile bleaching, pulp processing, water treatment, and disinfection applications.',
        href: '/products/hydrogen-peroxide',
        backgroundImage: HydrogenPeroxide,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'hydrogen-peroxide',
        category: 'Textile Industry Chemicals',
        fullDescription: 'Hydrogen Peroxide (H2O2) is a clear, colorless liquid with strong oxidizing properties. In the textile industry, it is extensively used for cotton and blended fabric bleaching due to its ability to remove natural pigments without causing significant fiber damage when properly stabilized. It decomposes into water and oxygen, making it an environmentally preferred bleaching agent. It is also widely used in pulp and paper bleaching, wastewater treatment, chemical synthesis, and surface disinfection.',
        uses: [
            'Cotton and blended fabric bleaching',
            'Pulp and paper bleaching',
            'Industrial and municipal water treatment',
            'Surface disinfection and sterilization',
            'Chemical oxidation processes'
        ],
        features: [
            'Available in stabilized industrial grades',
            'Common concentrations: 35%, 50%, and higher on request',
            'Decomposes into water and oxygen (environmentally compatible)',
            'Strong oxidizing efficiency',
            'Low residue after bleaching process'
        ],
        specifications: {
            purity: '35%, 50% w/w aqueous solutions (industrial grades)',
            packaging: 'HDPE drums, IBC totes, ISO tankers (bulk)',
            casNumber: '7722-84-1',
            formula: 'H2O2'
        },
        certifications: ['ISO 9001 Manufacturing', 'Food Grade (Codex/FCC where applicable)', 'Electronic Grade (High Purity)'],
        industries: ['Textiles', 'Pulp & Paper', 'Water & Wastewater Treatment', 'Electronics Manufacturing', 'Chemical Processing'],
        handling: 'Store in vented, approved containers away from heat, direct sunlight, and contaminants. Keep away from organic materials, metals, and reducing agents. Causes severe burns—use full PPE including gloves, goggles, and protective clothing. Ensure proper ventilation during handling.'
    },
    {
        name: 'Sodium Hydrosulphite',
        description: 'Powerful reducing agent used primarily in textile vat dyeing, bleaching, and industrial decolorization processes.',
        href: '/products/sodium-hydrosulphite',
        backgroundImage: textileImg,
        icon: <Beaker className="w-6 h-6" />,
        slug: 'sodium-hydrosulphite',
        category: 'Textile Industry Chemicals',
        fullDescription: 'Sodium Hydrosulphite (Sodium Dithionite, Na2S2O4) is a white to off-white crystalline powder with strong reducing properties. It is widely used in the textile industry for vat dyeing, indigo dye reduction, and bleaching processes. It is also used in paper pulp bleaching and as a reducing agent in chemical synthesis. The product is sensitive to air and moisture and decomposes upon exposure to heat and humidity, requiring controlled storage conditions.',
        uses: [
            'Vat and sulfur dye reduction in textile dyeing',
            'Indigo dyeing processes',
            'Pulp and paper bleaching',
            'Chemical reduction reactions',
            'Decolorization in specialty chemical processing'
        ],
        features: [
            'High reducing strength',
            'Fast dissolution and reaction rate',
            'Available in textile and industrial grades',
            'Low residue formation when properly applied',
            'Consistent particle size for controlled performance'
        ],
        specifications: {
            purity: '≥ 88% (standard industrial grade), higher grades up to 90%+ available',
            packaging: '50 kg steel drums with polyethylene liner',
            casNumber: '7775-14-6',
            formula: 'Na2S2O4'
        },
        certifications: ['ISO 9001 Manufacturing', 'Textile Grade', 'REACH Registered (where applicable)'],
        industries: ['Textile Dyeing & Processing', 'Pulp & Paper', 'Chemical Manufacturing', 'Mineral Processing'],
        handling: 'Store in tightly sealed containers in a cool, dry, and well-ventilated area. Protect from moisture, air, and heat sources. Avoid contact with acids and oxidizing agents. Use protective gloves and eye protection during handling.'
    },

    // Foam Industry
    {
        name: 'TDI (Toluene Diisocyanate)',
        description: 'Aromatic diisocyanate primarily used in the production of flexible polyurethane foams for furniture, bedding, and automotive applications.',
        href: '/products/tdi',
        backgroundImage: TDI,
        icon: <Microwave className="w-6 h-6" />,
        slug: 'tdi',
        category: 'Foam Industry Chemicals',
        fullDescription: 'Toluene Diisocyanate (TDI) is an aromatic diisocyanate mainly supplied as an 80/20 mixture of the 2,4-TDI and 2,6-TDI isomers. It is a key raw material in the manufacture of flexible polyurethane foams used in furniture, mattresses, automotive seating, and cushioning products. TDI reacts with polyols to form polyurethane polymers, providing elasticity, resilience, and durability to finished foam products. Due to its high reactivity and volatility, it must be handled under strictly controlled industrial conditions.',
        uses: [
            'Flexible polyurethane foam production',
            'Furniture cushions and mattresses',
            'Automotive seating and interior components',
            'Carpet underlay and packaging foam',
            'Adhesives, sealants, and elastomers (limited applications)'
        ],
        features: [
            'Typical 80/20 isomer ratio (2,4-/2,6-TDI)',
            'High purity ≥ 99.5%',
            'Low hydrolyzable chlorine content',
            'High reactivity with polyols',
            'Consistent quality for foam density control'
        ],
        specifications: {
            purity: '≥ 99.5%',
            packaging: 'Steel drums (~250 kg), IBCs, bulk ISO tankers',
            casNumber: '584-84-9',
            formula: 'C9H6N2O2'
        },
        certifications: ['ISO 9001 Manufacturing', 'REACH Registered'],
        industries: ['Flexible Foam Manufacturing', 'Furniture & Bedding', 'Automotive Interiors', 'Adhesives & Sealants'],
        handling: 'Moisture sensitive and toxic by inhalation. Store in dry conditions under nitrogen blanket at controlled temperature (typically 15–25°C). Use full PPE including respirators, chemical-resistant gloves, and protective clothing. Ensure proper ventilation and emergency safety equipment availability.'
    },
    {
        name: 'MDI (Methylene Diphenyl Diisocyanate)',
        description: 'Aromatic diisocyanate used in the production of rigid polyurethane foams, insulation materials, and structural polyurethane systems.',
        href: '/products/mdi',
        backgroundImage: foamIndustryImg,
        icon: <Box className="w-6 h-6" />,
        slug: 'mdi',
        category: 'Foam Industry Chemicals',
        fullDescription: 'Methylene Diphenyl Diisocyanate (MDI) is an aromatic diisocyanate available in pure (4,4’-MDI) and polymeric (pMDI) forms. It is widely used in the production of rigid polyurethane foams for thermal insulation in construction, refrigeration, and cold storage applications. MDI provides excellent mechanical strength, dimensional stability, and superior thermal insulation performance. Compared to TDI, MDI has lower vapor pressure, making it less volatile but still requiring strict industrial safety controls.',
        uses: [
            'Rigid polyurethane insulation panels',
            'Refrigerator and cold storage insulation',
            'Spray polyurethane foam systems',
            'Automotive structural components',
            'Binders for wood composites (OSB, MDF)'
        ],
        features: [
            'Available in pure (4,4’-MDI) and polymeric grades',
            'Low vapor pressure compared to TDI',
            'High functionality for rigid foam systems',
            'Excellent thermal insulation performance',
            'Strong mechanical strength in cured products'
        ],
        specifications: {
            purity: 'Varies by grade (Pure MDI ≥ 99%; Polymeric MDI functionality 2.7–3.0)',
            packaging: 'Steel drums (~250 kg), IBCs, bulk tankers',
            casNumber: '101-68-8',
            formula: 'C15H10N2O2'
        },
        certifications: ['ISO 9001 Manufacturing', 'REACH Registered'],
        industries: ['Construction & Insulation', 'Refrigeration Industry', 'Automotive Manufacturing', 'Wood Composite Production'],
        handling: 'Moisture sensitive and hazardous by inhalation and skin contact. Store in sealed containers under dry nitrogen atmosphere at recommended temperatures (typically 15–30°C). Use full PPE and ensure adequate ventilation. Avoid exposure to moisture to prevent pressure buildup.'
    },

    // Printing Ink
    {
        name: 'Isopropyl Alcohol (IPA)',
        description: 'High-purity, fast-evaporating solvent widely used in printing inks, surface cleaning, pharmaceuticals, and electronic applications.',
        href: '/products/ipa',
        backgroundImage: IsopropylAlcohol,
        icon: <Printer className="w-6 h-6" />,
        slug: 'ipa',
        category: 'Printing Ink Chemicals',
        fullDescription: 'Isopropyl Alcohol (IPA), also known as 2-Propanol, is a clear, colorless, highly flammable liquid with a characteristic odor. It is widely used as a solvent due to its excellent solvency power and rapid evaporation rate. In the printing industry, IPA is commonly used in offset printing dampening solutions to control ink-water balance, improve wetting, and enhance drying performance. It is also extensively used for precision cleaning in electronics, pharmaceuticals, and industrial maintenance applications.',
        uses: [
            'Offset printing dampening solution solvent',
            'Flexographic and gravure ink solvent',
            'Electronics and precision cleaning',
            'Surface disinfectant and sanitizing agent',
            'Pharmaceutical intermediate and solvent'
        ],
        features: [
            'High purity grades up to 99.9%',
            'Rapid evaporation rate',
            'Excellent solvency for oils and resins',
            'Low residue after evaporation',
            'Miscible with water and many organic solvents'
        ],
        specifications: {
            purity: '99% and 99.9% (anhydrous grades available)',
            packaging: 'MS drums (~160 kg), IBC totes, bulk tankers',
            casNumber: '67-63-0',
            formula: 'C3H8O'
        },
        certifications: ['ACS Grade', 'USP/NF Grade', 'Technical Grade', 'Electronic Grade'],
        industries: ['Printing & Packaging', 'Electronics Manufacturing', 'Pharmaceuticals', 'Industrial Cleaning'],
        handling: 'Highly flammable liquid and vapor. Keep away from heat, sparks, and open flames. Use explosion-proof equipment and proper grounding during transfer. Store in tightly closed containers in a cool, well-ventilated area. Use appropriate PPE including gloves and eye protection.'
    },
    {
        name: 'Nitrocellulose',
        description: 'Fast-drying film-forming resin used extensively in printing inks, wood coatings, and industrial lacquers.',
        href: '/products/nitrocellulose',
        backgroundImage: printingInkImg,
        icon: <Layers className="w-6 h-6" />,
        slug: 'nitrocellulose',
        category: 'Printing Ink Chemicals',
        fullDescription: 'Nitrocellulose (Cellulose Nitrate) is a nitrated derivative of cellulose produced by treating cellulose with nitric acid. It is supplied in alcohol-wet or water-wet form to reduce flammability risk. Nitrocellulose is widely used as a primary resin in flexographic and gravure printing inks due to its excellent film-forming properties, rapid solvent release, strong pigment adhesion, and good gloss characteristics. It is also used in wood finishes, automotive refinishing coatings, and specialty lacquers.',
        uses: [
            'Flexographic printing inks',
            'Gravure printing inks',
            'Wood lacquers and furniture coatings',
            'Automotive refinishing coatings',
            'Leather finishes and specialty coatings'
        ],
        features: [
            'Available in multiple viscosity grades',
            'Typically supplied 25–35% alcohol wet for safety',
            'Fast drying and excellent film formation',
            'Good pigment wetting and dispersion',
            'High gloss and strong adhesion properties'
        ],
        specifications: {
            purity: 'Nitrogen content typically 10.7% – 12.2% (depending on grade)',
            packaging: 'Fiber drums with polyethylene liner, cartons',
            casNumber: '9004-70-0'
        },
        certifications: ['Industrial Ink Grade', 'Coating Grade', 'ISO 9001 Manufacturing'],
        industries: ['Printing Inks', 'Wood & Furniture Coatings', 'Automotive Refinishing', 'Leather Finishing'],
        handling: 'Highly flammable solid. Always store in alcohol-wet form (typically 25–35%) to reduce explosion risk. Keep away from heat, sparks, and oxidizing agents. Use non-sparking tools and explosion-proof ventilation systems. Follow strict flammable material handling procedures.'
    }
];