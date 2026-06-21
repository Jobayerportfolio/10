"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  icon?: ReactNode;
};

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  icon,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium text-sm tracking-wide transition-all duration-300 focus-visible:outline-cyan";

  const primary =
    "bg-gradient-to-r from-cyan to-violet text-white shadow-[0_0_30px_-8px_rgba(0,212,255,0.6)] hover:shadow-[0_0_45px_-5px_rgba(124,58,237,0.7)] hover:scale-[1.03]";

  const secondary =
    "glass glass-hover text-white hover:text-cyan";

  const classes = `${base} ${variant === "primary" ? primary : secondary} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  const motionProps = {
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps}>
      {content}
    </motion.button>
  );
}
