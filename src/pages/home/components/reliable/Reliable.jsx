import HeadingBorder from '../../../../components/shared/HeadingBorder';
import { images } from '../../../../assets/image';

const Reliable = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 mt-20 sm:mt-32 pb-20'>
            <HeadingBorder title='Secure & Reliable' />
            <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                    <img className="object-fill w-50" src={images.encryptionImage} alt="deviation" />
                    <div className="flex items-center gap-2 mt-3">
                        <p className="text-[#CBD5E1] text-xl font-bold">Data Encryption</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img className="object-fill w-50" src={images.complaintImage} alt="deviation" />
                    <div className="flex items-center gap-2 mt-3">
                        <p className="text-[#CBD5E1] text-xl font-bold">GDPR  Compliant</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img className="object-fill w-50" src={images.roleBasedImage} alt="deviation" />
                    <div className="flex items-center gap-2 mt-3">
                        <p className="text-[#CBD5E1] text-xl font-bold">Role-Based Access</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img className="object-fill w-50" src={images.supportImage} alt="deviation" />
                    <div className="flex items-center gap-2 mt-3">
                        <p className="text-[#CBD5E1] text-xl font-bold">24/7 Support</p>
                    </div>
                </div>
            </div>
            <div className="mt-36 flex flex-col sm:flex-row gap-4 sm:justify-center">
                <button className="bg-[#1A3155]/80 text-white backdrop-blur-md 
                            px-6 py-3 rounded-md font-semibold 
                            border border-white/20 
                            hover:scale-105 transition-all duration-300 cursor-pointer">
                    Start Monitoring
                </button>
                <button className="bg-[#B7D8FF]/90 text-[#1A3155] 
                            px-6 py-3 rounded-md font-bold 
                            hover:scale-105 transition-all duration-300 cursor-pointer">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default Reliable;