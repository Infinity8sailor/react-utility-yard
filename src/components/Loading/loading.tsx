export interface SpinnerProps {
  /** Visual variant */
  variant?: 'circle' | 'dots' | 'orbit' | 'bars' | 'pulse-ring' | 'organic';
  /** Size preset */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Additional class */
  className?: string;

  // Legacy compat
  /** @deprecated Use `size` */
  state?: boolean;
}

export function Spinner({
  variant = 'circle',
  size = 'md',
  className = '',
  state,
}: SpinnerProps) {
  // Legacy: hide if state is explicitly false
  if (state === false) return null;

  const sizeMap: Record<string, number> = { xs: 12, sm: 16, md: 24, lg: 32 };
  const currentSize = typeof size === 'number' ? size : sizeMap[size] || 24;

  if (variant === 'organic') {
    return (
      <span 
        className={`ruy-spinner ruy-spinner-organic ruy-spinner-${size} ${className}`} 
        role="status" 
        aria-label="Loading"
        style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: currentSize, height: currentSize }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes ruy-blob-a {
            0% { transform: translate3d(-10%,-10%,0) scale(1); border-radius: 40% 60% 50% 50%; }
            50% { transform: translate3d(8%,6%,0) scale(1.12); border-radius: 55% 45% 60% 40%; }
            100% { transform: translate3d(-10%,-10%,0) scale(1); border-radius: 40% 60% 50% 50%; }
          }
          @keyframes ruy-blob-b {
            0% { transform: translate3d(6%,8%,0) scale(0.9); border-radius: 60% 40% 50% 50%; }
            50% { transform: translate3d(-6%,-8%,0) scale(1.05); border-radius: 45% 55% 40% 60%; }
            100% { transform: translate3d(6%,8%,0) scale(0.9); border-radius: 60% 40% 50% 50%; }
          }
          .ruy-spinner-organic .ruy-blob {
            position: absolute;
            background: radial-gradient(circle at 30% 20%, rgba(99,102,241,0.95), rgba(139,92,246,0.85) 35%, rgba(236,72,153,0.45) 70%);
            filter: drop-shadow(0 10px 30px rgba(99,102,241,0.12));
          }
          .ruy-spinner-organic .ruy-blob.a {
            width: 80%; height: 80%; opacity: 0.95;
            animation: ruy-blob-a 2.9s cubic-bezier(.2,.9,.3,1) infinite;
          }
          .ruy-spinner-organic .ruy-blob.b {
            width: 60%; height: 60%;
            background: radial-gradient(circle at 60% 60%, rgba(16,185,129,0.9), rgba(6,182,212,0.6));
            mix-blend-mode: screen; opacity: 0.85;
            transform: translate(15%, 15%) scale(0.9);
            animation: ruy-blob-b 3.6s cubic-bezier(.25,.9,.35,1) infinite;
          }
        `}} />
        <span className="ruy-blob a" />
        <span className="ruy-blob b" />
      </span>
    );
  }

  if (variant === 'orbit') {
    return (
      <span 
        className={`ruy-spinner ruy-spinner-orbit ruy-spinner-${size} ${className}`} 
        role="status" 
        aria-label="Loading"
        style={{ position: 'relative', display: 'inline-block', width: currentSize, height: currentSize }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes ruy-orbit-1 { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(180deg) scale(0.6); } 100% { transform: rotate(360deg) scale(1); } }
          @keyframes ruy-orbit-2 { 0% { transform: rotate(360deg) scale(0.6); } 50% { transform: rotate(180deg) scale(1); } 100% { transform: rotate(0deg) scale(0.6); } }
          .ruy-spinner-orbit .ruy-spinner-dot-orbit {
            position: absolute; width: 30%; height: 30%; border-radius: 50%;
            background: currentColor;
            top: 35%; left: 35%;
          }
          .ruy-spinner-orbit .ruy-spinner-dot-orbit:nth-child(1) { transform-origin: 200% 50%; animation: ruy-orbit-1 1.5s infinite linear; }
          .ruy-spinner-orbit .ruy-spinner-dot-orbit:nth-child(2) { transform-origin: -100% 50%; animation: ruy-orbit-2 1.5s infinite linear; opacity: 0.6; }
        `}} />
        <span className="ruy-spinner-dot-orbit" />
        <span className="ruy-spinner-dot-orbit" />
      </span>
    );
  }

  if (variant === 'bars') {
    return (
      <span 
        className={`ruy-spinner ruy-spinner-bars ruy-spinner-${size} ${className}`} 
        role="status" 
        aria-label="Loading"
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', padding: '10%', width: currentSize, height: currentSize }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes ruy-bars { 0%, 100% { transform: scaleY(0.4); opacity: 0.6; } 50% { transform: scaleY(1); opacity: 1; } }
          .ruy-spinner-bars .ruy-spinner-bar {
            width: 20%; height: 100%; border-radius: 2px;
            background: currentColor;
            animation: ruy-bars 1s infinite ease-in-out;
          }
          .ruy-spinner-bars .ruy-spinner-bar:nth-child(1) { animation-delay: -0.3s; }
          .ruy-spinner-bars .ruy-spinner-bar:nth-child(2) { animation-delay: -0.15s; }
        `}} />
        <span className="ruy-spinner-bar" />
        <span className="ruy-spinner-bar" />
        <span className="ruy-spinner-bar" />
      </span>
    );
  }

  if (variant === 'pulse-ring') {
    return (
      <span 
        className={`ruy-spinner ruy-spinner-pulse-ring ruy-spinner-${size} ${className}`} 
        role="status" 
        aria-label="Loading"
        style={{ position: 'relative', display: 'inline-block', width: currentSize, height: currentSize }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes ruy-pulse-ring { 0% { transform: scale(0.1); opacity: 1; } 100% { transform: scale(1); opacity: 0; } }
          .ruy-spinner-pulse-ring::before, .ruy-spinner-pulse-ring::after {
            content: ''; position: absolute; inset: 0; border-radius: 50%;
            border: 2px solid currentColor;
            animation: ruy-pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          }
          .ruy-spinner-pulse-ring::after { animation-delay: -1s; }
        `}} />
      </span>
    );
  }

  if (variant === 'dots') {
    return (
      <span className={`ruy-spinner-dots ${className}`} role="status" aria-label="Loading">
        <span className="ruy-spinner-dot" />
        <span className="ruy-spinner-dot" />
        <span className="ruy-spinner-dot" />
      </span>
    );
  }

  return (
    <span className={`ruy-spinner ruy-spinner-${size} ${className}`} role="status" aria-label="Loading">
      <span className="ruy-spinner-circle" />
    </span>
  );
}

/** @deprecated Use `Spinner` instead */
export const Loading = Spinner;
