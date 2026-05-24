import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import HeadingBorder from '../../../../components/shared/HeadingBorder';
import { images } from '../../../../assets/image';

const Reliable = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
            offset: 120,
        });

        AOS.refresh();
    }, []);

    const reliableItems = [
        {
            title: "Data Encryption",
            image: images.encryptionImage,
            alt: "data encryption",
        },
        {
            title: "GDPR Compliant",
            image: images.complaintImage,
            alt: "gdpr compliant",
        },
        {
            title: "Role-Based Access",
            image: images.roleBasedImage,
            alt: "role based access",
        },
        {
            title: "24/7 Support",
            image: images.supportImage,
            alt: "24/7 support",
        },
    ];

    return (
        <div className='max-w-7xl mx-auto px-4 mt-10 sm:mt-32 pb-10 sm:pb-20'>
            <div data-aos="fade-up">
                <HeadingBorder title="Secure & Reliable" />
            </div>
            <div className="mt-5 sm:mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {reliableItems.map((item, index) => (
                    <div
                        key={item.title}
                        data-aos="flip-up"
                        data-aos-delay={index * 120}
                        className="flex flex-col items-center"
                    >
                        <img className="object-fill w-50" src={item.image} alt={item.alt} />
                        <div className="flex items-center gap-2 mt-3">
                            <p className="text-[#CBD5E1] text-xl font-bold">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="mt-10 sm:mt-36 flex flex-col sm:flex-row gap-4 sm:justify-center">
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
