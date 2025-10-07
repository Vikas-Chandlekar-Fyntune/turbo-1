import { cn } from "../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const variantStyles = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-light",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
};
