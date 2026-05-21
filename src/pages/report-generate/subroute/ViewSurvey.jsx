import { useState } from 'react';
import SurveyTable from '../component/SurveyTable';
import UploadCsvFile from '../modal/UploadCsvFile';
import ReportGenerationHome from '../component/ReportGenerationHome';
import { FileText } from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ViewSurvey = () => {
    const [openCSVFile, setOpenCSVFile] = useState(false);
    const { target } = useSelector((state => state?.target));

    const handleAddSurvey = () => {
        if (!target) {
            toast.error('Please select a target');
            return;
        }
        setOpenCSVFile(true);
    };

    return (
        <div className="p-4 flex flex-col items-start">
            <div className="w-full relative">
                <ReportGenerationHome />
                <div className='p-3 sm:p-6 flex flex-col items-start'>
                    <div
                        onClick={!target ? undefined : handleAddSurvey}
                        className={`px-3 py-3 rounded-md flex items-center gap-2 transition-all shadow-sm w-fit text-white ${!target
                                ? "bg-gray-400 cursor-not-allowed opacity-60"
                                : "bg-[#22c55e] hover:bg-[#16a34a] cursor-pointer"
                            }`}
                    >
                        <FileText />
                        Upload CSV
                    </div>
                    {
                        openCSVFile && <UploadCsvFile setIsOpen={setOpenCSVFile} />
                    }
                    <SurveyTable />
                </div>
            </div>
        </div>
    );
};

export default ViewSurvey;