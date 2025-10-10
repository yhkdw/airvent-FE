import React, { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-[#F9FAFB] px-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
