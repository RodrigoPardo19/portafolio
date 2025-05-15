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
    <Card className="border bg-background-2 basis-[48%]">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        {
          <ul className="flex gap-2 flex-wrap">
            <TooltipProvider>
              {stack.map((technology) => (
                <Tooltip key={technology.name}>
                  <TooltipTrigger asChild>
                    <Button className="bg-background border rounded-lg p-3 w-14 h-14 hover:bg-neutral-900">
                      <img src={technology.icon} alt={technology.name} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-white">Hola Mundo</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </ul>
        }
      </CardFooter>
    </Card>
  );
}
