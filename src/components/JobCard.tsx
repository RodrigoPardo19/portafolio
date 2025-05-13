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
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardContent>
        {Array.isArray(description) ? (<ul className="list-disc pl-4">{description.map(d => (<li key={d}>{d}</li>))}</ul>) : <p>{description}</p>}
      </CardContent>
      <CardFooter className="flex gap-2">
        <p>{startDate}</p>
        <p>-</p>
        <p>{endDate ?? 'Actualidad' }</p>
      </CardFooter>
    </Card>

  )
}
