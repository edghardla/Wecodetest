import React from 'react';

function NavBarsIcon({ className }) {
  if (className == 'fa-bars') {
    return (
      <svg
        className={className}
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.35 0.622736H19.65V2.49849H0.35V0.622736ZM0.35 7.06213H19.65V8.93789H0.35V7.06213ZM0.35 13.5015H19.65V15.3773H0.35V13.5015Z"
          fill="white"
          stroke="#232323"
          strokeWidth="0.7"
        />
      </svg>
    );
  } else {
    return (
      <svg
        className={className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="20" rx="4" fill="#878787" />
        <path
          d="M7 13.3853L10 10.1927M13 7L9.99943 10.1927M9.99943 10.1927L7 7M10 10.1927L13 13.3853"
          stroke="#232323"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}

export default NavBarsIcon;
