import { Eye } from "lucide-react";

const ViewReport = () => {
    const data = [
        {
            name: "London Bridge, London, UK",
            report: "London bridge, Uk abcd 1233456a alnbo.pdf",
        },
        {
            name: "London Bridge, London, UK",
            report: "London bridge, Uk abcd 1233456a alnbo.pdf",
        },
    ];
    return (
        <div className="p-4">
            <div className="overflow-hidden rounded-md border-4 border-[#B7D8FF] shadow-lg">
                <div className="grid grid-cols-2 bg-[#1e2f4d] px-4 py-4">
                    <span className="text-base font-semibold text-slate-200 uppercase tracking-wide">
                        Project Name
                    </span>
                    <span className="text-base font-semibold text-slate-200 uppercase tracking-wide">
                        Latest Reports
                    </span>
                </div>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-2 items-center bg-[#eef7ff] px-4 py-3 border-t border-sky-200"
                    >
                        <div className="text-[#1e2f4d] font-medium text-base">
                            {item.name}
                        </div>

                        <div className="flex justify-between items-center text-[#1e2f4d] text-base">
                            <span>{item.report}</span>
                            <button className="px-2 py-1 bg-[#cce4ff] rounded-sm hover:bg-blue-200 transition-colors cursor-pointer">
                                <Eye size={20} className="text-blue-600" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewReport;