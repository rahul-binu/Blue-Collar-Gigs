import { useNavigate } from "react-router-dom";

const ProfileSide = () => {

    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/profile');
    }

    const handleSkillClick = () => {
        navigate('/skill');
    }

    const handleEducationClick = () => {
        navigate('/education');
    }

    const handleCertificationClick = () => {
        navigate('/certification');
    }

    return (
        <div className="col-3 text-start list-group" id='sideBar'>

            <a
                className="list-group-item py-3"
                style={{
                    background: window.location.pathname === "/profile" ? "#ccc" : "white",
                    color: window.location.pathname === "/profile" ? "green" : "black"
                }}
                onClick={handleProfileClick}
            >
                <strong>Profile</strong>
            </a>

            <a className="list-group-item py-3"
                style={{
                    background: window.location.pathname === "/skill" ? "#ccc" : "white",
                    color: window.location.pathname === "/skill" ? "green" : "black"
                }}
                onClick={handleSkillClick}> <strong>Professional data</strong></a>

            {/* <a className="list-group-item py-3"
                onClick={handleEducationClick}> <strong>Education</strong></a>

            <a className="list-group-item py-3"
                onClick={handleCertificationClick}> <strong>Certification</strong></a> */}

        </div>
    );

}

export default ProfileSide;