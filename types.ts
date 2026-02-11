import { LucideIcon } from 'lucide-react';

export interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
}

export interface UseCaseProps {
  title: string;
  description: string;
  outcome: string;
  ctaText: string;
  image: string;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}
