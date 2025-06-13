import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        primary:
          "main-btn ml-4 flex-shrink-0 flex-nowrap font-semibold text-white",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        navlink:
          "group inline-flex w-max items-center cursor-default focus:outline-none focus:ring-0 bg-transparent hover:bg-transparent justify-center py-3 text-sm font-medium transition-colors text-gray-500 hover:text-gray-300 disabled:pointer-events-none disabled:opacity-50 data-[active]:text-gray-200 dark:text-gray-50 dark:hover:text-gray-100 dark:data-[active]:text-gray-100 group",
        def: "secondary-btn border border-transparent bg-transparent text-gray-500 shadow-none hover:bg-gray-100/60 dark:text-gray-100 dark:hover:border-gray-600/30 dark:hover:bg-gray-700/30",
        icon: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-750 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-750/40",
        smIcon:
          "inline-flex items-center justify-center text-gray-200 border rounded-full main-transition h-9 w-9 border-gray-100/60 bg-gray-50 hover:bg-gray-100/60 dark:border-gray-750/60 dark:bg-gray-800 dark:hover:bg-gray-700",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
