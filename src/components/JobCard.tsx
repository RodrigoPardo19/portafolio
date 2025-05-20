import DateTag from "./DateTag";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface Props {
  title: string;
  description: string | string[];
  organization: string;
  startDate: string;
  endDate?: string;
}

export default function JobCard({ title, description, organization, startDate, endDate }: Props) {
  return (
    <div className="border-none bg-transparent relative">
      <div className="flex flex-col">
        <div className="flex gap-1 items-center flex-wrap">
          <CardTitle className="text-white">{title}</CardTitle>
          <DateTag start={startDate} end={endDate ?? "Actualidad"} />
        </div>
        <CardDescription className="text-primary">{organization}</CardDescription>
      </div>
      <div className="text-white">
        {Array.isArray(description) ? (
          <ul className="list-disc pl-4">
            {description.map((d) => (
              <li className="marker:text-primary" key={d}>
                {d}
              </li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
}
