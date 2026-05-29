export function HippoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ears */}
      <ellipse cx="20" cy="16" rx="6" ry="7" fill="currentColor" />
      <ellipse cx="44" cy="16" rx="6" ry="7" fill="currentColor" />
      <ellipse cx="20" cy="16" rx="2.4" ry="3" fill="#16308a" />
      <ellipse cx="44" cy="16" rx="2.4" ry="3" fill="#16308a" />
      {/* head */}
      <path
        d="M14 30c0-9 8-15 18-15s18 6 18 15c0 6-2 10-6 13-3 2.4-7 3.6-12 3.6s-9-1.2-12-3.6c-4-3-6-7-6-13Z"
        fill="currentColor"
      />
      {/* eyes */}
      <circle cx="24" cy="27" r="3.1" fill="#14213d" />
      <circle cx="40" cy="27" r="3.1" fill="#14213d" />
      <circle cx="25" cy="26" r="1" fill="#ffffff" />
      <circle cx="41" cy="26" r="1" fill="#ffffff" />
      {/* muzzle */}
      <ellipse cx="32" cy="42" rx="14" ry="10" fill="currentColor" />
      <ellipse cx="32" cy="42" rx="14" ry="10" fill="#000" opacity="0.08" />
      {/* nostrils */}
      <ellipse cx="26" cy="41" rx="2.6" ry="3.4" fill="#16308a" />
      <ellipse cx="38" cy="41" rx="2.6" ry="3.4" fill="#16308a" />
    </svg>
  );
}
