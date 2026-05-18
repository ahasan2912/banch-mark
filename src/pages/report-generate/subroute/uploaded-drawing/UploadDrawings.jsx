import { useState } from "react";
import ReportGenerationHome from "../../component/ReportGenerationHome";
import DrawingUploadFile from "./DrawingUploadFile";

const UploadDrawings = () => {
    const [projectId, setProjectId] = useState('');
    return (
        <div className="p-4 flex flex-col items-start">
            <div className="w-full relative">
                <ReportGenerationHome setProjectId={setProjectId} />
                <div className="p-3 sm:p-6 flex flex-col items-start">
                    <DrawingUploadFile projectId={projectId} />
                </div>
            </div>
        </div>
    );
};

export default UploadDrawings;