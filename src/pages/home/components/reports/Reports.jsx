import { Check } from "lucide-react";
import { images } from "../../../../assets/image";
import HeadingBorder from "../../../../components/shared/HeadingBorder";

const Reports = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-5 sm:mt-32 pb-10">
            <HeadingBorder title='Detailed Reports & Alerts' />
            <div className="mt-5 sm:mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <img className="object-fill" src={images.deviationImage} alt="deviation" />
                    <div className="flex items-center gap-2 mt-3">
                        <Check className="text-[#CBD5E1] text-xl font-bold" />
                        <p className="text-[#CBD5E1] text-xl font-bold">Automated Comparisons</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img className="object-fill" src={images.analysisImage} alt="deviation" />
                    <div className="flex items-center gap-2 mt-3">
                        <Check className="text-[#CBD5E1] text-xl font-bold" />
                        <p className="text-[#CBD5E1] text-xl font-bold">Graphical Analysis</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img className="object-fill" src={images.alartImage} alt="deviation" />
                    <div className="flex items-center gap-2 mt-3">
                        <Check className="text-[#CBD5E1] text-xl font-bold" />
                        <p className="text-[#CBD5E1] text-xl font-bold">Custom Alerts</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;