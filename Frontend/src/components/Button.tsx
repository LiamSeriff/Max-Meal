import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  className: string;
  color?: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
