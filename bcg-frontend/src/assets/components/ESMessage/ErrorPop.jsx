import React, { useEffect } from "react";

function ErrorPop({ errorMessage }) {
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         // Close the popup after 5 seconds
    //         document.getElementById("errorPopup").style.display = "none";
    //     }, 5000);

    //     return () => clearTimeout(timeout); // Cleanup function
    // }, [errorMessage]);

    const handleOKClick = () => {
        document.getElementById("errorPopup").style.display = "none";
        window.location.reload();
    };

    return (
        <div id="errorPopup" className="p-4" style={{
            display: errorMessage ? 'block' : 'none',
            backgroundColor: '#f8d7da', // Red color
            border: '2px solid #f5c6cb', // Border color
            borderRadius: '5px',
            position: 'fixed',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            zIndex: '9999',
            maxWidth: '400px', // Limit width for better readability
            textAlign: 'center', // Center-align content
        }}>
            <p id="errorMessage" style={{ margin: '0', marginBottom: '20px', fontSize: '18px', color: '#721c24' }}>{errorMessage}</p>
            <div className="row justify-content-center">
                <button style={{
                    fontSize: '16px',
                    padding: '10px 20px',
                    backgroundColor: '#dc3545', // Darker red color
                    color: '#fff',
                    border: 'none',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Button shadow
                    transition: 'background 0.3s ease', // Smooth hover transition
                }} onClick={handleOKClick}>OK</button>
            </div>
        </div>
        
    );
}

export default ErrorPop;

