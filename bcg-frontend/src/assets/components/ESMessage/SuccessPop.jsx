import React from "react";

function SuccessPop({ successMessage }) {

    const handleOKClick = () => {
        document.getElementById("successPopup").style.display = "none";
        window.location.reload();
    };

    return (
<div id="successPopup" className="p-4" style={{
    display: successMessage ? 'block' : 'none',
    backgroundColor: '#28a745', // Green color
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Shadow
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    zIndex: '9999',
    maxWidth: '400px', // Limit width for better readability
    textAlign: 'center', // Center-align content
}}>
    <p id="successMessage" style={{ margin: '0', marginBottom: '20px', fontSize: '18px', color: '#fff' }}>{successMessage}</p>
    <div className="row justify-content-center">
        <button style={{
            fontSize: '16px',
            padding: '10px 20px',
            backgroundColor: '#218838', // Darker green color
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

export default SuccessPop;

