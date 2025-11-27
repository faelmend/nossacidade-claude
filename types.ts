
export enum PlanType {
  FREE = 'free',
  BASIC = 'basic',
  ESSENTIAL = 'essential',
  EXCLUSIVE = 'exclusive'
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  subcategories?: string[];
  count?: number;
}

export interface Business {
  id: string;
  name: string;
  categoryId: string;
  categoryName?: string;
  subcategory?: string; // Added specifically for filtering/display
  description: string;
  shortDescription: string;
  address: string;
  phone: string;
  whatsapp: string;
  instagram?: string;
  website?: string;
  logo?: string; // Added logo field
  images: string[];
  rating: number;
  reviewCount: number;
  plan: PlanType;
  isVerified: boolean;
  isMediaPartner?: boolean; // New flag for Media Partners (Radios, Influencers, etc.)
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Plan {
  id: PlanType;
  name: string;
  price: number;
  period: string;
  features: string[];
  isRecommended?: boolean;
  iconName: string;
}

export interface Job {
  id: string;
  title: string;
  companyName: string;
  businessId?: string; // Link to business if it exists
  type: 'Tempo Integral' | 'Meio Período' | 'Estágio' | 'Freelance' | 'PJ' | 'Temporário';
  salary?: string;
  description: string;
  requirements: string[];
  postedAt: string; // Ex: '2023-10-27' for sorting, or relative string
  whatsappContact?: string;
  category?: string; // Added for filtering
  
  // New fields for "Famous Portal" features
  level?: 'Estágio' | 'Júnior' | 'Pleno' | 'Sênior' | 'Especialista' | 'Diretoria';
  modality?: 'Presencial' | 'Híbrido' | 'Remoto';
  source?: 'NossaCidade' | 'LinkedIn' | 'Indeed' | 'Gupy' | 'Empresa'; // Origin of the job
  externalLink?: string; // If it's an external job
  logo?: string; // Specific logo for the job post (if different from business or external)
}