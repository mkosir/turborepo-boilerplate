export type ButtonProps = {
  text: string;
  className?: string;
  onClick: () => void;
};

export const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
      ${className ?? ''}
      px-6 py-2.5 
      bg-gradient-to-r 
    from-brandBlue 
    to-brandGreen 
    text-white 
      font-medium 
      text-xs 
      leading-tight 
      rounded 
      shadow-md
    hover:from-primary-600 hover:to-green-500
    focus:bg-blue-700
    active:bg-blue-800 
     hover:shadow-lg  
     focus:shadow-lg
     focus:outline-none 
     focus:ring-0  
     active:shadow-lg 
     hover:scale-110
     transition ease-in-out
     duration-200`}
    >
      {text}
    </button>
  );
};