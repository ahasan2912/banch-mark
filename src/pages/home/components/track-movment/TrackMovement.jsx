import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { images } from "../../../../assets/image";
import HeadingTitle from "../../../../components/shared/HeadingTitle";

const TrackMovement = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
            offset: 120,
        });

        AOS.refresh();
    }, []);

    const cards = [
        {
            axis: "E",
            title: "East",
            description: "Horizontal Movement (East-West)",
            image: images.eastImage,
            alt: "east movement",
            animation: "fade-right",
        },
        {
            axis: "N",
            title: "North",
            description: "Horizontal Movement (North-South)",
            image: images.northImage,
            alt: "north movement",
            animation: "fade-up",
        },
        {
            axis: "V",
            title: "Vertical",
            description: "Horizontal Movement(East-West)",
            image: images.verticalImage,
            alt: "vertical movement",
            animation: "fade-left",
        },
    ];

    return (
        <div className='max-w-7xl mx-auto px-4 mt-12 sm:mt-32 pb-10'>
            <div data-aos="fade-up">
                <HeadingTitle
                    title='Track  Movement in  3D: '
                    subtitle='E, N, Z'
                    description='Monitoring positional change across East, North and Elevation axes'
                    maxWidth='max-w-173.75'
                    position='mx-auto'
                    text='text-center'
                />
            </div>
            <div className="mt-5 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={card.axis}
                        data-aos={card.animation}
                        data-aos-delay={index * 150}
                        className="bg-[#1A3155] px-4 pt-4 pb-6 border rounded-md flex gap-4 items-center border-slate-800 shadow-xl transition-transform hover:scale-105"
                    >
                        <div className="max-w-35">
                            <img className="w-full" src={card.image} alt={card.alt} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#2a457a] flex items-center justify-center text-white font-bold text-xl">
                                    {card.axis}
                                </div>
                                <h2 className="text-2xl font-bold text-[#6994D4]">{card.title}</h2>
                            </div>

                            <div className="mt-2 text-[#CBD5E1] text-base font-medium leading-tight">
                                <p>{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrackMovement;
