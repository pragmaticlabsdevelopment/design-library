export default function ProgressBar({
  percentage,
  size = "md",
  showLabel = true,
}: {
  percentage: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}) {
  const heights = { sm: "h-1.5", md: "h-2", lg: "h-3" };

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex-1 rounded-full bg-border ${heights[size]}`}
      >
        <div
          className={`${heights[size]} rounded-full transition-all duration-500 ${
            percentage === 100 ? "bg-status-complete" : "bg-navy"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span
          className={`text-sm font-semibold tabular-nums ${
            percentage === 100 ? "text-status-complete" : "text-text-secondary"
          }`}
        >
          {percentage}%
        </span>
      )}
    </div>
  );
}
