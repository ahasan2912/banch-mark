import { useState } from 'react';
import SurveyTable from '../component/SurveyTable';
import UploadCsvFile from '../modal/UploadCsvFile';
import ReportGenerationHome from '../component/ReportGenerationHome';
import { FileText } from 'lucide-react';

const ViewSurvey = () => {
    const [openCSVFile, setOpenCSVFile] = useState(false);
    return (
        <div className="p-4 flex flex-col items-start">
            <div className="w-full relative">
                <ReportGenerationHome />
                <div className='p-3 sm:p-6 flex flex-col items-start'>
                    <div onClick={() => setOpenCSVFile(true)} className='bg-[#22c55e] hover:bg-[#16a34a] text-white px-3 py-3 rounded-md flex items-center gap-2 transition-all shadow-sm cursor-pointer w-fit'>
                        <FileText />
                        <button className=''>Upload CSV</button>
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