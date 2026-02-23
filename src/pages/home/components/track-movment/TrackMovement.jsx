import { images } from "../../../../assets/image";
import HeadingTitle from "../../../../components/shared/HeadingTitle";

const TrackMovement = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 mt-20 sm:mt-32 pb-10'>
            <HeadingTitle
                title='Track  Movement in  3D: '
                subtitle='E, N, Z'
                description='Monitoring positional change across East, North and Elevation axes'
                maxWidth='max-w-173.75'
                position='mx-auto'
                text='text-center'
            />
            <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* east */}
                <div className="bg-[#1A3155] px-4 pt-4 pb-6 border  rounded-md flex gap-4 items-center border-slate-800 shadow-xl transition-transform hover:scale-105">
                    <div className="max-w-35">
                        <img className="w-full" src={images.eastImage} alt="eastsideImage" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#2a457a] flex items-center justify-center text-white font-bold text-xl">
                                E
                            </div>
                            <h2 className="text-2xl font-bold text-[#6994D4]">East</h2>
                        </div>

                        <div className="mt-2 text-[#CBD5E1] text-base font-medium leading-tight">
                            <p>Horizontal Movement (East-West)</p>
                        </div>
                    </div>
                </div>
                {/* north */}
                <div className="bg-[#1A3155] px-4 pt-4 pb-6 border rounded-md flex gap-4 items-center border-slate-800 shadow-xl transition-transform hover:scale-105">
                    <div className="max-w-35">
                        <img className="w-full" src={images.northImage} alt="eastsideImage" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#2a457a] flex items-center justify-center text-white font-bold text-xl">
                                N
                            </div>
                            <h2 className="text-2xl font-bold text-[#6994D4]">North</h2>
                        </div>

                        <div className="mt-2 text-[#CBD5E1] text-base font-medium leading-tight">
                            <p>Horizontal Movement (North-South)</p>
                        </div>
                    </div>
                </div>
                {/* vertical */}
                <div className="bg-[#1A3155] px-4 pt-4 pb-6 border rounded-md flex gap-4 items-center border-slate-800 shadow-xl transition-transform hover:scale-105">
                    <div className="max-w-35">
                        <img className="w-full" src={images.verticalImage} alt="eastsideImage" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#2a457a] flex items-center justify-center text-white font-bold text-xl">
                                V
                            </div>
                            <h2 className="text-2xl font-bold text-[#6994D4]">Vertical</h2>
                        </div>

                        <div className="mt-2 text-[#CBD5E1] text-base font-medium leading-tight">
                            <p>Horizontal Movement(East-West)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackMovement;