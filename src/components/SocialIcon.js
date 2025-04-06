import React from "react";
import social1 from "../assets/img/x.png";     
import social2 from "../assets/img/git.png";  
import social3 from "../assets/img/in.png";    

function SocialIcons() {
  return (
    <div className="social-icons">
      {/* رابط حساب Twitter (X) */}
      <a href="https://x.com/diaryasrere" target="_blank" rel="noopener noreferrer">
        <img src={social1} alt="X" className="icon" />
      </a>
      
      {/* رابط حساب GitHub */}
      <a href="https://github.com/Aryamxo" target="_blank" rel="noopener noreferrer">
        <img src={social2} alt="GitHub" className="icon" />
      </a>
      
      {/* رابط حساب LinkedIn */}
      <a href="https://linkedin.com/in/aryam-alsulami-67336a320" target="_blank" rel="noopener noreferrer">
        <img src={social3} alt="LinkedIn" className="icon" />
      </a>
    </div>
  );
}

export default SocialIcons;
