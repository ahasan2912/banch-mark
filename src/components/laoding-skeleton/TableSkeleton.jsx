import React from 'react';

const TableSkeleton = () => {
    return (
        <div className="w-full pt-7">
            <div className="overflow-x-auto rounded-lg border-4 border-[#E9F6FF] shadow-2xl">
                <table className="w-full border-collapse">
                    <thead className="bg-[#1e2f56] text-sm uppercase tracking-wider text-slate-300">
                        <tr>
                            <th className="p-4 border-b border-slate-700 text-left">
                                Survey Date
                            </th>

                            <th
                                colSpan="3"
                                className="p-4 border-b border-l border-slate-700 text-center"
                            >
                                Base Readings
                            </th>

                            <th
                                colSpan="3"
                                className="p-4 border-b border-l border-slate-700 text-center"
                            >
                                Survey Readings
                            </th>

                            <th
                                colSpan="3"
                                className="p-4 border-b border-l border-slate-700 text-center"
                            >
                                Movement From Base (m)
                            </th>
                        </tr>

                        <tr className="bg-[#162447] text-slate-400 text-xs">
                            <th className="p-3 border-b border-slate-700"></th>

                            <th className="p-3 border-b border-l border-slate-700">
                                E
                            </th>
                            <th className="p-3 border-b border-slate-700">
                                N
                            </th>
                            <th className="p-3 border-b border-slate-700">
                                Z
                            </th>

                            <th className="p-3 border-b border-l border-slate-700">
                                E
                            </th>
                            <th className="p-3 border-b border-slate-700">
                                N
                            </th>
                            <th className="p-3 border-b border-slate-700">
                                Z
                            </th>

                            <th className="p-3 border-b border-l border-slate-700">
                                E
                            </th>
                            <th className="p-3 border-b border-slate-700">
                                N
                            </th>
                            <th className="p-3 border-b border-slate-700">
                                Z
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-[#dfe7f1]">
                        {[...Array(1)].map((_, index) => (
                            <tr
                                key={index}
                                className="border-b border-slate-300"
                            >
                                {[...Array(10)].map((_, tdIndex) => (
                                    <td
                                        key={tdIndex}
                                        className="p-4"
                                    >
                                        <div className="flex justify-center items-center">
                                            <div className="h-auto w-full rounded bg-slate-300/80 animate-pulse"></div>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}

                        {/* Spinner Loader Row */}
                        <tr>
                            <td
                                colSpan="10"
                                className="py-8"
                            >
                                <div className="flex items-center justify-center">
                                    <div className="h-10 w-10 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableSkeleton;