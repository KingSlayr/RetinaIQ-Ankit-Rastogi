import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <div
      onClick={onClick}
      className={`self-center px-4 py-2 font-medium cursor-pointer tracking-widest w-fit text-sm bg-white border rounded-lg`}
    >
      {text}
    </div>
  );
};

export default Button;
