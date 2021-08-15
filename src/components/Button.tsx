import { ReactNode } from "react";

export default function Button(props: {
  children: ReactNode;
  onClick: () => void;
  size?: string;
  theme?: { default: string; hover: string; ring: string };
  className?: string;
}) {
  const size = props.size ? props.size : BUTTON_SIZE.MEDIUM;
  const theme = props.theme ? props.theme : BUTTON_THEME.PRIMARY;

  return (
    <button
      onClick={props.onClick}
      className={`${theme.default} ${theme.hover} ${theme.ring} ${size} ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export const BUTTON_SIZE = {
  SMALL: "px-4 py-1 rounded",
  MEDIUM: "px-4 py-3 rounded-md",
  LARGE: "px-6 py-4 rounded-lg",
};

export const BUTTON_THEME = {
  DANGOR: {
    default: "text-white bg-red-600",
    hover: "hover:bg-red-700",
    ring: "focus:ring-red-500",
  },
  PRIMARY: {
    default: "text-white bg-blue-600",
    hover: "hover:bg-blue-700",
    ring: "focus:ring-blue-500",
  },
  SUCCESS: {
    default: "text-white bg-green-600",
    hover: "hover:bg-green-700",
    ring: "focus:ring-green-500",
  },
  WARNING: {
    default: "text-white bg-yellow-600",
    hover: "hover:bg-yellow-700",
    ring: "focus:ring-yellow-500",
  },
};
