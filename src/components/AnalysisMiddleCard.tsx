
import AnalysisCard from "./AnalysisCard";

type AnalysisMiddleCardProps = {
  icon: string;
  value: string;
  title: string;
};

function AnalysisMiddleCard({ icon, value, title }: AnalysisMiddleCardProps) {
  return (
    <AnalysisCard>
      <div className="space-y-2 px-4 py-8 min-w-36 ">
        <img src={icon} alt="icon" />

        <p className="text-2xl py-2">{value}</p>
        <p className="text-[14px] text-gray-400 whitespace-nowrap">{title}</p>
        <div className="w-3/4 h-[4px] bg-gray-400 rounded-full"></div>
      </div>
    </AnalysisCard>
  );
}

export default AnalysisMiddleCard;
