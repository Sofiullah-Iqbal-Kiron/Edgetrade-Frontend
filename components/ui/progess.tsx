"use client"

export default function RoundProgress({
  percent = 75,
  size = 26,
  strokeWidth = 3,
  color = "#1D6CE9",
  trailColor = "#EAEAEA",
  showLabel = true,
  className = "",
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, percent));
  const offset = circumference * (1 - clamped / 100);

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {/* Trail circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={trailColor}
            strokeWidth={strokeWidth}
            fill="none"
          />

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.6s ease, stroke 0.3s" }}
          />
        </g>
      </svg>

      {showLabel && (
        <div className="absolute text-center pointer-events-none">
        </div>
      )}
    </div>
  );
}
