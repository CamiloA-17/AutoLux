import React from 'react';

export function Spinner() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="loader"></div>
            <style jsx>{`
                .loader {
                    border: 16px solid #f3f3f3; 
                    border-top: 16px solid #3498db; 
                    border-radius: 50%;
                    width: 20px; 
                    height: 20px; 
                    animation: spin 2s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
