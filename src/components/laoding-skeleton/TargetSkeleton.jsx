import { Pencil, Plus, Trash2 } from 'lucide-react';
import React from 'react';

const TargetSkeleton = () => {
    return (
        <div className="w-1/2 p-4 border-r border-[#d1e4ff] animate-pulse">
            <div className="flex items-center gap-3 text-[#334155] font-bold text-base">
                <span>Target</span>
                <Plus size={21} className="text-[#60a5fa] cursor-pointer" />
                <Pencil size={18} className="text-[#60a5fa] cursor-pointer" />
                <Trash2 size={20} className="text-[#ef4444] cursor-pointer" />
            </div>
            {/* Target List */}
            <div className="space-y-3 mt-4">
                {[...Array(8)].map((_, index) => (
                    <div
                        key={index}
                        className="w-full h-11 rounded-md border border-[#dbeafe] bg-[#eff6ff]"
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default TargetSkeleton;