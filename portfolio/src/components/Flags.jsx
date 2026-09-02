export function FlagES({ className }) {
  return (
    <svg className={className} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
      <rect width="3" height="2" fill="#AA151B" />
      <rect y="0.5" width="3" height="1" fill="#F1BF00" />
    </svg>
  );
}

export function FlagCA({ className }) {
  // Senyera: 5 franjas amarillas, 4 rojas
  const stripeHeight = 2 / 9;
  return (
    <svg className={className} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
      <rect width="3" height="2" fill="#FCDD09" />
      {[1, 3, 5, 7].map((i) => (
        <rect
          key={i}
          y={i * stripeHeight}
          width="3"
          height={stripeHeight}
          fill="#DA121A"
        />
      ))}
    </svg>
  );
}

export function FlagGB({ className }) {
  return (
    <svg className={className} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="40" fill="#00247d" />
      <path d="M0,0 60,40 M60,0 0,40" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 60,40 M60,0 0,40" stroke="#cf142b" strokeWidth="4" />
      <path d="M30,0 30,40 M0,20 60,20" stroke="#fff" strokeWidth="12" />
      <path d="M30,0 30,40 M0,20 60,20" stroke="#cf142b" strokeWidth="6" />
    </svg>
  );
}