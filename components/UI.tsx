import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, to, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-teal-700 text-white hover:bg-teal-600 focus:ring-teal-700 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-teal-700 border border-teal-700 hover:bg-teal-50",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
    ghost: "bg-transparent text-teal-700 hover:bg-teal-50"
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export const SectionHeading: React.FC<{ children: React.ReactNode; className?: string; align?: 'left' | 'center' }> = ({ children, className = '', align = 'center' }) => (
  <h2 className={`text-3xl md:text-5xl font-serif font-medium text-gray-900 mb-6 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
    {children}
  </h2>
);

export const SectionSub: React.FC<{ children: React.ReactNode; className?: string; align?: 'left' | 'center' }> = ({ children, className = '', align = 'center' }) => (
  <p className={`text-lg text-gray-600 max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}>
    {children}
  </p>
);

export const Accordion: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{title}</span>
        <Icons.ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="pb-6 text-gray-600 leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};