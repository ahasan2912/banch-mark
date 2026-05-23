import { Calendar, Download, Eye, FileText, MoreHorizontal, User } from "lucide-react";
import { formatCurrency, formatDate, formatFileSize, formatLabel } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

const ReportCard = ({ report }) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const statusColors = {
        COMPLETED: "text-emerald-400 bg-emerald-400/10",
        PROCESSING: "text-blue-400 bg-blue-400/10",
        FAILED: "text-rose-400 bg-rose-400/10",
    };
    const typeColors = {
        MOVEMENT: "text-emerald-400 bg-emerald-400/10",
    };

    const fileUrl = report.file?.fileUrl;
    const fileName = report.file?.fileName || report.title || "report.pdf";

    const handleDownload = async () => {
        if (!fileUrl || isDownloading) {
            return;
        }

        setIsDownloading(true);

        try {
            const response = await fetch(fileUrl);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");

            link.href = blobUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(blobUrl);
        } catch {
            const link = document.createElement("a");

            link.href = fileUrl;
            link.download = fileName;
            link.target = "_blank";
            document.body.appendChild(link);
            link.click();
            link.remove();
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="bg-[#111827] border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors group">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                    <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border border-current ${statusColors[report.status] || "text-gray-400 bg-gray-400/10"}`}>
                    {formatLabel(report.status)}
                </span>
            </div>

            <div className="mb-4">
                <h3 className="text-gray-100 font-semibold text-lg leading-tight line-clamp-2">{report.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{report.project?.name || "No project"}</p>
            </div>

            <div className="space-y-1 mb-6">
                <div className="flex items-center text-gray-400 text-xs">
                    <User className="w-3 h-3 mr-2" />
                    {report.user?.name || "Unknown user"}
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                    <Calendar className="w-3 h-3 mr-2" />
                    {formatDate(report.createdAt)}
                </div>
                <div className="text-gray-500 text-xs">
                    {formatCurrency(report.amountDisplay, report.currency)} / {formatFileSize(report.file?.fileSize)}
                </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-800/50">
                <span className={`text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-medium ${typeColors[report.type] || "text-blue-400 bg-blue-400/10"}`}>
                    {formatLabel(report.type)}
                </span>

                <div className="flex items-center gap-3 text-gray-500">
                    <Link
                        to={fileUrl || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className={`hover:text-gray-300 transition-colors ${!fileUrl ? "pointer-events-none opacity-40" : ""}`}
                        aria-label="View report"
                    >
                        <Eye size={18} />
                    </Link>
                    <button
                        type="button"
                        onClick={handleDownload}
                        disabled={!fileUrl || isDownloading}
                        className={`hover:text-gray-300 transition-colors disabled:cursor-not-allowed ${!fileUrl ? "opacity-40" : ""}`}
                        aria-label="Download report"
                    >
                        <Download size={18} className={isDownloading ? "animate-pulse" : ""} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReportCard;
