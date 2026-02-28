import { Calendar, Download, Eye, FileText, MoreHorizontal, User } from "lucide-react";

const ReportCard = ({ report }) => {
  const statusColors = {
    COMPLETED: "text-emerald-400 bg-emerald-400/10",
    PROCESSING: "text-blue-400 bg-blue-400/10",
    FAILED: "text-rose-400 bg-rose-400/10",
  };

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <FileText className="w-5 h-5 text-blue-400" />
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border border-current ${statusColors[report.status]}`}>
          {report.status}
        </span>
      </div>

      <div className="mb-4">
        <h3 className="text-gray-100 font-semibold text-lg leading-tight">{report.title}</h3>
        <p className="text-gray-500 text-sm mt-1">{report.project}</p>
      </div>

      <div className="space-y-1 mb-6">
        <div className="flex items-center text-gray-400 text-xs">
          <User className="w-3 h-3 mr-2" />
          {report.author}
        </div>
        <div className="flex items-center text-gray-400 text-xs">
          <Calendar className="w-3 h-3 mr-2" />
          {report.date}
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-800/50">
        <span className={`text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-medium ${report.tagColor}`}>
          {report.tag}
        </span>
        
        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-gray-300 transition-colors"><Eye size={18} /></button>
          <button className="hover:text-gray-300 transition-colors"><Download size={18} /></button>
          <button className="hover:text-gray-300 transition-colors"><MoreHorizontal size={18} /></button>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;