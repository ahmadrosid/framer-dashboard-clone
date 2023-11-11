export function TrashIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      className={className}
    >
      <path
        d="M 2 1.75 C 2 1.336 2.336 1 2.75 1 L 11.25 1 C 11.664 1 12 1.336 12 1.75 C 12 2.164 11.664 2.5 11.25 2.5 L 2.75 2.5 C 2.336 2.5 2 2.164 2 1.75 Z M 3 4 C 3 3.724 3.224 3.5 3.5 3.5 L 10.5 3.5 C 10.776 3.5 11 3.724 11 4 L 11 11 C 11 12.105 10.105 13 9 13 L 5 13 C 3.895 13 3 12.105 3 11 Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
