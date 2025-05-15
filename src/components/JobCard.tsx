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
      <div>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-primary">{organization}</CardDescription>
      </div>
      <div className="text-white">
        {Array.isArray(description) ? (<ul className="list-disc pl-4">{description.map(d => (<li className="marker:text-primary" key={d}>{d}</li>))}</ul>) : <p>{description}</p>}
      </div>
      <div className="flex gap-2 w-fit text-primary bg-background border rounded-lg p-2 text-sm absolute top-0 -left-[11.5rem]">
        <p className="">{startDate}</p>
        <p>-</p>
        <p>{endDate ?? 'Actualidad'}</p>
      </div>
    </div>
  )
}
