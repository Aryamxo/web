import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import './SocialIcon.css'; // Reuse your hover styles!

function SocialIcons() {
  return (
    <div className="social-icons">
      {/* X (Twitter) */}
      <a href="https://x.com/diaryasrere" target="_blank" rel="noopener noreferrer" className="icon">
        <i className="bi bi-twitter-x text-dark fs-1 "></i>
      </a>

      {/* GitHub */}
      <a href="https://github.com/Aryamxo" target="_blank" rel="noopener noreferrer" className="icon">
        <i className="bi bi-github text-dark fs-1"></i>
      </a>

      {/* LinkedIn */}
      <a href="https://linkedin.com/in/aryam-alsulami-67336a320" target="_blank" rel="noopener noreferrer" className="icon">
        <i className="bi bi-linkedin text-dark fs-1"></i>
      </a>
    </div>
  );
}

export default SocialIcons;