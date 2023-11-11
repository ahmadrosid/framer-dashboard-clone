export function FramerIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 15"
      width="10"
      height="15"
      className={className}
    >
      <path
        d="M 0 0 L 10 0 L 10 5 L 5 5 Z M 0 5 L 5 5 L 10 10 L 0 10 Z M 5 10 L 5 15 L 0 10 Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
