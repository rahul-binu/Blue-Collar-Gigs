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
        <div id="errorPopup" className=" p-4" style={{
            display: errorMessage ? 'block' : 'none',
            backgroundColor: '#f8d7da', border: '2px solid #f5c6cb', borderRadius: '5px', position: 'fixed', top: '50%',
            left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', zIndex: '9999'
        }}>
            <p id="errorMessage" style={{ margin: '0', marginBottom: '10px' }}>{errorMessage}</p>
            <div className="row text-align-end">
                <button style={{
                    fontSize: '16px', padding: '5px 10px', background: '#dc3545', color: '#fff', border: 'none',
                    borderRadius: '3px', cursor: 'pointer'
                }} onClick={handleOKClick}>OK</button>
            </div>
        </div>
    );
}

export default ErrorPop;

