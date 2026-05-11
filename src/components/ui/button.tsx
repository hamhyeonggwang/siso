"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group/button relative isolate inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap font-medium tracking-tight transition-colors outline-none select-none disabled:pointer-events-none disabled:opacity-45 focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--siso-mint)_65%,white)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--siso-bg)]",
  {
    variants: {
      variant: {
        primary:
          "rounded-full border border-white/20 bg-[var(--siso-mint)] px-6 py-3 text-[15px] text-white shadow-md shadow-slate-900/10 hover:brightness-[1.04]",
        secondary:
          "rounded-full border border-[#CBD5E1] bg-white px-6 py-3 text-[15px] text-[var(--siso-text)] shadow-sm hover:border-[var(--siso-mint)]/35 hover:bg-[color-mix(in_srgb,var(--siso-mint)_6%,white)]",
        ghost:
          "rounded-lg px-3 py-2 text-[15px] text-[var(--siso-text)] transition-[color,opacity] hover:text-[var(--siso-mint)]",
        card:
          "rounded-xl border border-[#E2E8F0] bg-white/90 px-4 py-2 text-sm text-[var(--siso-text)] shadow-sm backdrop-blur-sm hover:border-[var(--siso-mint)]/35 hover:bg-white",
        fab: "h-[3.35rem] min-w-[3.35rem] rounded-full border border-white/20 bg-[var(--siso-mint)] px-6 text-sm text-white shadow-2xl shadow-slate-900/20 hover:brightness-[1.04]",
      },
      size: {
        default: "",
        lg: "px-8 py-[0.95rem] text-base",
        sm: "px-4 py-2 text-sm",
        icon: "h-11 w-11 rounded-full px-0",
      },
      glass: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        glass: true,
        class:
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-br before:from-white/[0.14] before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
      },
      {
        variant: "secondary",
        glass: true,
        class:
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-white/48 after:opacity-0 after:backdrop-blur-[2px] after:transition-opacity after:duration-300 hover:after:opacity-90",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
      glass: false,
    },
  },
);

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "href"
> & {
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  loading?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  glass?: boolean;
  motionInteractive?: boolean;
  showArrow?: boolean;
} & VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size,
      glass,
      href,
      loading,
      leadingIcon,
      trailingIcon,
      motionInteractive = true,
      showArrow = false,
      children,
      disabled,
      type = "button",
      target,
      rel,
      onPointerDown: onPointerDownProp,
      ...props
    },
    ref,
  ) => {
    const [ripple, setRipple] = React.useState<{
      x: number;
      y: number;
      id: number;
    } | null>(null);

    const rippleEnabled =
      variant === "primary" || variant === "secondary" || variant === "fab";

    const content = (
      <>
        {loading ? (
          <Loader2 className="h-4 w-4 shrink-0 animate-spin" aria-hidden />
        ) : (
          leadingIcon
        )}
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
          {showArrow ? (
            <motion.span
              aria-hidden
              className="inline-flex shrink-0"
              transition={{ type: "spring", stiffness: 420, damping: 30 }}
              initial={false}
              whileHover={{ x: 3 }}
            >
              {trailingIcon ?? <ArrowRight className="h-4 w-4" />}
            </motion.span>
          ) : (
            trailingIcon
          )}
        </span>

        {(variant === "primary" || variant === "fab") && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 mix-blend-screen transition-opacity duration-300 group-hover/button:opacity-100"
          >
            <span className="absolute inset-[1px] rounded-[inherit] bg-gradient-to-br from-white/35 via-transparent to-transparent" />
          </span>
        )}

        {variant === "ghost" ? (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-2 bottom-[5px] h-px origin-left scale-x-0 rounded-full bg-[var(--siso-mint)]/70 transition-transform duration-300 ease-out group-hover/button:scale-x-100 group-focus-visible/button:scale-x-100"
          />
        ) : null}

        {variant === "secondary" ? (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-4 bottom-[9px] h-px rounded-full bg-[var(--siso-text)]/20 opacity-0 transition-opacity duration-300 group-hover/button:opacity-100"
          />
        ) : null}

        {(variant === "primary" ||
          variant === "secondary" ||
          variant === "card" ||
          variant === "fab") && (
          <span className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/button:opacity-100">
            <span className="absolute inset-[1px] rounded-[inherit] bg-white/[0.07] backdrop-blur-[8px]" />
          </span>
        )}
      </>
    );

    const hoverMotion =
      motionInteractive && !loading
        ? variant === "ghost"
          ? { y: -1, scale: 1.01 }
          : { y: -2, scale: 1.02 }
        : null;

    const motionAllowed = motionInteractive && !loading && !disabled;

    const stretchWrapper = /\bw-full\b/.test(className ?? "");

    const sharedClass = cn(
      buttonVariants({ variant, size, glass }),
      variant === "primary" || variant === "fab"
        ? "shadow-[0_20px_44px_-28px_rgba(15,23,42,0.35)] hover:shadow-[0_24px_50px_-28px_rgba(103,197,184,0.45)]"
        : "",
      variant === "card"
        ? "shadow-[0_16px_32px_-30px_rgba(17,24,39,0.45)] hover:shadow-[0_22px_36px_-30px_rgba(17,24,39,0.35)] motion-safe:hover:-translate-y-px motion-safe:transition-all motion-safe:duration-[250ms]"
        : "",
      className,
    );

    const spawnRipple = (event: React.PointerEvent<Element>) => {
      if (!rippleEnabled || loading) return;
      const rect = event.currentTarget.getBoundingClientRect();
      setRipple({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        id: Date.now(),
      });
    };

    const overlay = (
      <AnimatePresence initial={false} mode="popLayout">
        {ripple ? (
          <motion.span
            key={ripple.id}
            aria-hidden
            className="pointer-events-none absolute h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35 mix-blend-screen"
            style={{ left: ripple.x, top: ripple.y }}
            initial={{ scale: 0.2, opacity: 0.28 }}
            animate={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => setRipple(null)}
          />
        ) : null}
      </AnimatePresence>
    );

    if (href) {
      return (
        <motion.span
          className={cn(
            variant === "fab" ? "fixed bottom-6 right-6 z-40 md:hidden" : "",
            stretchWrapper ? "w-full" : "inline-flex",
          )}
          initial={false}
          whileHover={motionAllowed ? hoverMotion ?? undefined : undefined}
          whileTap={
            motionAllowed && hoverMotion
              ? { scale: Math.max(hoverMotion.scale - 0.04, 0.96) }
              : undefined
          }
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={href}
            prefetch
            className={sharedClass}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : undefined}
            target={target}
            rel={rel}
            onPointerDown={(e) => {
              spawnRipple(e);
              (
                onPointerDownProp as
                  | React.PointerEventHandler<HTMLAnchorElement>
                  | undefined
              )?.(e);
            }}
            {...(props as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}
          >
            {content}
            {overlay}
          </Link>
        </motion.span>
      );
    }

    return (
      <motion.span
        className={cn(
          variant === "fab" ? "fixed bottom-6 right-6 z-40 md:hidden" : "",
          stretchWrapper ? "w-full" : "inline-flex",
        )}
        initial={false}
        whileHover={motionAllowed ? hoverMotion ?? undefined : undefined}
        whileTap={
          motionAllowed && hoverMotion
            ? { scale: Math.max(hoverMotion.scale - 0.05, 0.95) }
            : undefined
        }
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          ref={ref}
          type={type}
          {...props}
          disabled={disabled || loading}
          className={sharedClass}
          onPointerDown={(e) => {
            spawnRipple(e);
            onPointerDownProp?.(e);
          }}
        >
          {content}
          {overlay}
        </button>
      </motion.span>
    );
  },
);
Button.displayName = "Button";
