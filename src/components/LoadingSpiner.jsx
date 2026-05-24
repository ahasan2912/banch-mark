import React from 'react';

const LoadingSpiner = () => {
    return (
        <div
            className="h-screen flex flex-col justify-center items-center w-full gap-6"
            style={{
                background: 'radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)'
            }}
        >
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>
                <div
                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500"
                    style={{
                        animation: 'spin 1s linear infinite'
                    }}
                ></div>
            </div>
            <p className="text-white text-lg font-medium">Loading...</p>
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default LoadingSpiner;