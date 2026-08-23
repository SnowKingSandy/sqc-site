import { Card, CardContent } from "@/components/ui/card";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  icon: React.ReactNode;
  compact?: boolean;
}

export default function TeamCard({ name, role, bio, icon, compact = false }: TeamMemberProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="bg-surface-card border-border-subtle hover:border-primary/50 transition-all duration-300 hover:translate-y-[-2px]">
          <CardContent className={`${compact ? 'p-4' : 'p-6'} text-center`}>
            <div className={`${compact ? 'w-14 h-14' : 'w-20 h-20'} mx-auto mb-3 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center`}>
              {icon}
            </div>
            <h3 className={`font-title ${compact ? 'text-base' : 'text-xl'} font-medium text-text-primary`}>{name}</h3>
            <p className="text-primary mb-2 font-display">{role}</p>
            {bio && (
              <p className={`${compact ? 'text-xs' : 'text-sm'} font-display text-text-secondary line-clamp-2`}>{bio}</p>
            )}
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-surface-card border-border-subtle">
        <div className="flex flex-col space-y-2">
          <h4 className="text-lg font-title font-semibold text-text-primary">{name}</h4>
          <p className="text-primary font-display">{role}</p>
          <p className="text-sm text-text-secondary font-display">{bio || "No bio available."}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}