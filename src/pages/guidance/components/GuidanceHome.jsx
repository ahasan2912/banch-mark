/* eslint-disable no-unused-vars */
import { Upload, PlusSquare, Database, ListChecks, FileBarChart, Presentation } from 'lucide-react';

const Card = ({ icon: Icon, title, description, badgeText }) => (
  <div className="group relative rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 cursor-pointer overflow-hidden">
    
    <div className="flex gap-6 relative z-10">
      <div className="shrink-0 w-32 h-20 rounded-lg border border-blue-400/30 flex items-center justify-center relative shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all">
        {badgeText && (
          <span className="absolute top-2 left-2 text-[10px] font-bold text-blue-100/50 uppercase tracking-widest">
            {badgeText}
          </span>
        )}
        <Icon size={40} className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-blue-100 mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed max-w-60">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const GuidanceHome = () => {
  const tools = [
    {
      title: "Upload Survey via CSV",
      description: "Upload your initial reading in CSV format to establish baseline values (E, N, Z) for fixed point.",
      icon: Upload,
      badgeText: "CSV"
    },
    {
      title: "Project Creation",
      description: "Learn how to create a new monitoring project from scratch.",
      icon: PlusSquare,
      badgeText: "ES"
    },
    {
      title: "Upload Baseline Data",
      description: "Prepare and upload baseline readings to establish initial data.",
      icon: Database,
      badgeText: "CS"
    },
    {
      title: "Submit Monitoring Stages",
      description: "Submit new monitoring stages for analysis and reporting.",
      icon: ListChecks,
    },
    {
      title: "Generate Reports",
      description: "Generate comprehensive PDF reports of monitoring results.",
      icon: FileBarChart,
    },
    {
      title: "Generate Reports",
      description: "Guidance on setting up reports and export monitor.",
      icon: Presentation,
    }
  ];

  return (
    <div className="min-h-screen p-10 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl w-full">
        {tools.map((tool, index) => (
          <Card key={index} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default GuidanceHome;