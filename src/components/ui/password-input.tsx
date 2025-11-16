import * as React from "react";

import { Input } from "./input";
import { useState } from "react";
import { EyeIcon, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";

export default function PasswordInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  const [isVisible, setIsVisible] = useState(false);
  const Icon = isVisible ? EyeOff : EyeIcon;

  return (
    <div className="relative max-w-[600px]">
      <Input
        className={cn("pr-9", className)}
        {...props}
        type={isVisible ? "text" : "password"}
      />
      <button
        type="button"
        onClick={() => setIsVisible((prev) => !prev)}
        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer "
      >
        <Icon className="size-5 text-seinfra-blue-light-300 transition:150 hover:text-seinfra-blue-light-200" />
      </button>
    </div>
  );
}
