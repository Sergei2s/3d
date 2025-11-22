import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description?: string;
}

export interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
}