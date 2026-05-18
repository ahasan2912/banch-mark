import TextBox from "./TextBox";
import ReportGenerationHome from "../../component/ReportGenerationHome";
import { useState } from "react";

const AdditionalInfo = () => {
    const [projectId, setProjectId] = useState('');

    return (
        <div className="p-4 flex flex-col items-start">
            <div className="w-full relative">
                <ReportGenerationHome setProjectId={setProjectId} />
                <div className="p-3 sm:p-6 flex flex-col items-start w-full">
                    <TextBox projectId={projectId} />
                </div>
            </div>
        </div>
    );
};

export default AdditionalInfo;