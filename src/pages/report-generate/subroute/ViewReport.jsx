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
            <div className="overflow-x-auto rounded-md border-4 border-[#B7D8FF] shadow-lg">
                <table className="w-full text-left border-collapse overflow-x-auto">
                    <thead>
                        <tr className="bg-[#1e2f4d]">
                            <th className="px-4 py-4 text-base font-semibold text-slate-200 uppercase tracking-wide">
                                Project Name
                            </th>
                            <th className="px-4 py-4 text-base font-semibold text-slate-200 uppercase tracking-wide">
                                Latest Reports
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className="bg-[#eef7ff] border-t border-sky-200 hover:bg-[#e2f0fd] transition-colors"
                            >
                                <td className="px-4 py-3 text-[#1e2f4d] font-medium text-base">
                                    {item.name}
                                </td>
                                <td className="px-4 py-3 text-[#1e2f4d] text-base">
                                    <div className="flex justify-between items-center">
                                        <span>{item.report}</span>
                                        <button className="p-2 bg-[#cce4ff] rounded-sm hover:bg-blue-200 transition-colors cursor-pointer flex items-center justify-center">
                                            <Eye size={20} className="text-blue-600" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewReport;