import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <Card className={cn("relative overflow-hidden group", className)}>
      <CardContent className="p-6">
        <div className="mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
