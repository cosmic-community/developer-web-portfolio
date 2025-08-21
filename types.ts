// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Project interface
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_name: string;
    description: string;
    technologies: string;
    project_image?: {
      url: string;
      imgix_url: string;
    };
    live_url?: string;
    github_url?: string;
    status: {
      key: string;
      value: string;
    };
    featured: boolean;
  };
}

// Skill interface
export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    skill_name: string;
    category: {
      key: string;
      value: string;
    };
    proficiency: {
      key: string;
      value: string;
    };
    years_experience?: number;
    icon?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Work Experience interface
export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    job_title: string;
    company_name: string;
    company_website?: string;
    start_date: string;
    end_date?: string | null;
    current: boolean;
    description: string;
    achievements?: string;
    technologies?: string;
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    client_title?: string;
    company_name?: string;
    testimonial: string;
    rating?: {
      key: string;
      value: string;
    };
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    related_project?: Project;
  };
}

// Type literals for select-dropdown values
export type ProjectStatus = 'completed' | 'in_progress' | 'planned';
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'other';
export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type Rating = '1' | '2' | '3' | '4' | '5';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Union type for all cosmic objects
export type CosmicObjectType = Project | Skill | WorkExperience | Testimonial;

// Type constraint for objects with metadata
export type HasMetadata = {
  metadata: Record<string, any>;
};

// Utility function with proper type constraint
export function getMetadata<T extends HasMetadata>(obj: T): T['metadata'] {
  return obj.metadata;
}

// Type guard functions
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type === 'skills';
}

export function isWorkExperience(obj: CosmicObject): obj is WorkExperience {
  return obj.type === 'work-experience';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

// Utility types
export type OptionalMetadata<T extends CosmicObject> = Partial<T['metadata']>;

// Helper type for creating objects with optional metadata
export type CreateCosmicObject<T extends CosmicObject> = Omit<T, 'id' | 'created_at' | 'modified_at'> & {
  metadata: OptionalMetadata<T>;
};