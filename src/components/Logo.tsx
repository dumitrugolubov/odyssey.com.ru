import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#8B5CF6" }}/>
          <stop offset="100%" style={{ stopColor: "#4F46E5" }}/>
        </linearGradient>
      </defs>
      <path 
        d="M256 64C149.961 64 64 149.961 64 256C64 362.039 149.961 448 256 448C362.039 448 448 362.039 448 256C448 149.961 362.039 64 256 64ZM256 384C185.961 384 128 326.039 128 256C128 185.961 185.961 128 256 128C326.039 128 384 185.961 384 256C384 326.039 326.039 384 256 384Z" 
        fill="url(#logoGradient)"
      />
    </svg>
  );
};

export default Logo;