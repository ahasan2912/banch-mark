import { images } from "../../../../assets/image";
import HeadingBorder from "../../../../components/shared/HeadingBorder";

const Professionals = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-10 sm:mt-32 pb-10">
            <HeadingBorder title='Trusted by Professionals' />
            <div className="mt-5 sm:mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                    <img className="object-fill w-75.5" src={images.constractImage} alt="deviation" />
                    <div className="flex items-center gap-2 mt-3">
                        <p className="text-[#CBD5E1] text-xl font-bold">Construction Sites</p>
                    </div>
                </div>
                 <div className="flex flex-col items-center">
                    <img className="object-fill w-75.5" src={images.structuralImage} alt="deviation" />
                    <div className="flex items-center gap-2 mt-3">
                        <p className="text-[#CBD5E1] text-xl font-bold">Structural Monitoring</p>
                    </div>
                </div>
                 <div className="flex flex-col items-center">
                    <img className="object-fill w-75.5" src={images.infructuralImage} alt="deviation" />
                    <div className="flex items-center gap-2 mt-3">
                        <p className="text-[#CBD5E1] text-xl font-bold">Infrastructure Projects</p>
                    </div>
                </div>
                 <div className="flex flex-col items-center">
                    <img className="object-fill w-75.5" src={images.geotechnical} alt="deviation" />
                    <div className="flex items-center gap-2 mt-3">
                        <p className="text-[#CBD5E1] text-xl font-bold">Geotechnical Surveys</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Professionals;