import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="px-4 py-2 bg-black text-white rounded">
      {children}
    </button>
  );
}