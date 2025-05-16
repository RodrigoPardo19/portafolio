import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

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
    <a href={url} target="_blank">
      <div className="flex flex-col gap-1">
        <img src="/images/soldautos.jpg" alt="soldautos-project" className="rounded-xl" />
        <p className="text-primary font-semibold text-center">{title}</p>
        <p className="text-center">{description}</p>
      </div>
    </a>
  );
}
