import { MoveRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  arrow?: boolean;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  arrow = true,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-custom-primary 
        text-[#fbfbfb] 
        rounded-full 
        px-6 
        py-2
        text-sm
        hover:bg-opacity-90 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-custom-secondary 
        disabled:opacity-50 
        disabled:cursor-not-allowed
        flex
        items-center
        justify-between
        gap-3
        ${className}
      `}
    >
      {children}
      {arrow && <MoveRight className='w-4' />}
    </button>
  );
}
