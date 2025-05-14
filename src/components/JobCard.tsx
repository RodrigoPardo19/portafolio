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
    <Card className="border bg-background-2">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-primary">{organization}</CardDescription>
      </CardHeader>
      <CardContent className="text-white">
        {Array.isArray(description) ? (<ul className="list-disc pl-4">{description.map(d => (<li className="marker:text-primary" key={d}>{d}</li>))}</ul>) : <p>{description}</p>}
      </CardContent>
      <CardFooter className="flex gap-2 w-fit text-primary bg-background border rounded-lg p-2 ml-6 text-sm">
        <p className="">{startDate}</p>
        <p>-</p>
        <p className="">{endDate ?? 'Actualidad'}</p>
      </CardFooter>
    </Card>
  )
}
