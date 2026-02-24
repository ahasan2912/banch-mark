/* eslint-disable no-unused-vars */
import { Upload, PlusSquare, Database, ListChecks, FileBarChart, Presentation } from 'lucide-react';
import { tools } from '../../lib/data';

const Card = ({ image, title, description }) => (
  <div className="group relative rounded-lg bg-[#1A2C4D] p-6 hover:border-blue-400/50 transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl">
    
    <div className="flex gap-6 relative z-10">
      <div className="shrink-0 w-32 h-20 rounded-lg border border-blue-400/30 flex items-center justify-center relative shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all">
        <img src={image} alt={`${image}`} />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-[#6994D4] mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-base font-medium text-[#CBD5E1] leading-relaxed max-w-60">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const GuidanceHome = () => {
 
  return (
    <div className="selection:bg-blue-500/15 flex justify-center mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl w-full">
        {tools.map((tool, index) => (
          <Card key={index} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default GuidanceHome;