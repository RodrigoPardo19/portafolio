import Image from "astro/components/Image.astro";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Technology {
  name: string;
  icon: string;
}

interface Props {
  title: string;
  description: string;
  stack: Technology[];
  url?: string;
}

export default function ProjectCard({ title, description, stack, url }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2">
        {
          <ul className="flex gap-2 items-center">
            {stack.map((technology) => (
              <li key={technology.name}>
                <img src={technology.icon} />
              </li>
            ))}
          </ul>
        }
      </CardFooter>
    </Card>
  );
}
