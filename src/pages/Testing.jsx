import React from 'react';
import { LayoutGrid, FileUp, Database, FileText } from 'lucide-react';

const StepCard = ({ number, title, description, icon: Icon, isOffset }) => (
  <div className={`relative flex flex-col p-8 rounded-2xl bg-[#0a0f1e] border border-slate-800 w-full max-w-xs shadow-2xl transition-transform hover:scale-105 ${isOffset ? 'mt-12' : ''}`}>
    {/* Decorative Icon Section */}
    <div className="mb-6 flex items-center justify-center h-24 w-full bg-[#161d31] rounded-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/5 opacity-20 blur-xl"></div>
      <Icon className="w-12 h-12 text-blue-400 relative z-10" />
    </div>

    {/* Content */}
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-slate-600 text-sm font-semibold text-white">
        {number}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Testing = () => {
  const steps = [
    {
      number: 1,
      title: "Create a project",
      description: "Define monitoring for your project and set specific parameters.",
      icon: LayoutGrid,
      isOffset: false
    },
    {
      number: 2,
      title: "Upload Baseline Data",
      description: "Upload your initial reading in CSV format to establish baseline values (E, N, Z) for fixed point.",
      icon: Database,
      isOffset: true
    },
    {
      number: 3,
      title: "Submit Monitoring Stages",
      description: "Periodically upload new readings (e.g. weekly) for comparison against baseline data.",
      icon: FileUp,
      isOffset: false
    },
    {
      number: 4,
      title: "Generate Reports",
      description: "The platform compares new data with the baseline and generates detailed PDF reports.",
      icon: FileText,
      isOffset: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] p-12 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {steps.map((step) => (
          <StepCard key={step.number} {...step} />
        ))}
      </div>
    </div>
  );
};

export default Testing;