import { ReactElement } from "react";

type AnalysisCardProps = {
  children: ReactElement;
};

function AnalysisCard({ children }: AnalysisCardProps) {
  return <div className="bg-secondary900 shadow-sm rounded-lg">{children}</div>;
}

export default AnalysisCard;
