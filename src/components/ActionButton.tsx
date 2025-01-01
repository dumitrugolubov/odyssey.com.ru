import React from 'react';

interface ActionButtonProps {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}

const ActionButton = ({ href, children, primary = false }: ActionButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        px-8 py-3 rounded-full font-semibold transition-all duration-300
        ${primary
          ? 'bg-violet-600 hover:bg-violet-700 text-white'
          : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
        }
      `}
    >
      {children}
    </a>
  );
};

export default ActionButton;