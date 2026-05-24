import { Search, BarChart3, Archive, Globe2 } from "lucide-react";

const ProjectCard = ({ project }) => {

    return (
        <div className="bg-[#111827] border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors group">
            <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#223a5f] bg-[#101c2d]">
                    <span
                        className={`absolute bottom-1 right-0 h-2 w-2 rounded-full bg-emerald-400`}
                    />
                </div>

                <div>
                    <h3 className="text-gray-100 font-semibold text-lg leading-tight line-clamp-2">{project.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{project.email}</p>
                </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-[#163765] py-3 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-sm text-[#6fa7e8]">
                        <Globe2 size={10} />
                        <span>Live</span>
                    </div>
                    <p className="mt-1 text-[15px] font-bold text-white">
                        {project.live}
                    </p>
                </div>

                <div className="rounded-lg bg-[#163765] py-3 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-sm text-[#63758d]">
                        <Archive size={10} />
                        <span>Archive</span>
                    </div>
                    <p className="mt-1 text-[15px] font-bold text-white">
                        {project.archive}
                    </p>
                </div>
            </div>

            {/* Reports */}
            <div className="mt-6 flex items-center justify-between rounded-lg bg-[#12213a] px-4 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#173967]">
                        <BarChart3 size={13} className="text-[#5ca3ff]" />
                    </div>
                    <span className="text-[12px] text-[#b1bfd0]">Project Reports</span>
                </div>

                <span className="text-[14px] font-bold text-white">
                    {project.reports}
                </span>
            </div>

            {/* Button */}
            <button className="mt-6 py-4 w-full rounded-lg border border-[#2e4565] bg-[#1a2f4f] text-[12px] font-semibold text-white transition hover:bg-[#24446f]">
                Project Detail <span className="ml-2">›</span>
            </button>
        </div>
    );
};

export default ProjectCard;