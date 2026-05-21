import { Pencil, Plus, Trash2 } from 'lucide-react';
import React from 'react';

const SectionSkeleton = () => {
    return (
        <div className="w-1/2 p-4 border-r border-[#d1e4ff] animate-pulse">
            <div className="flex items-center gap-3 text-[#334155] font-bold text-base">
                <span>Section</span>
                <Plus size={21} className="text-[#60a5fa] cursor-pointer font-bold" />
                <Pencil size={18} className="text-[#60a5fa] cursor-pointer" />
                <Trash2 size={19} className="text-[#ef4444] cursor-pointer" />
            </div>
            {/* Section List */}
            <div className="mt-4 space-y-2">
                {[...Array(7)].map((_, index) => (
                    <div
                        key={index}
                        className="w-full h-10.5 rounded-md border border-[#d1e4ff] bg-[#eff6ff]"
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default SectionSkeleton;