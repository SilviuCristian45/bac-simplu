import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 6.5C10.3 5.2 8 4.5 5 4.5H3.5v14H5c3 0 5.3.7 7 2" />
      <path d="M12 6.5c1.7-1.3 4-2 7-2h1.5v14H19c-3 0-5.3.7-7 2" />
      <path d="M12 6.5v14" />
    </Icon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </Icon>
  );
}
