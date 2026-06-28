export type ProductCategory = 'racks' | 'trolleys' | 'cupboards' | 'pallets';

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  category: ProductCategory;
  name: string;
  description: string;
  image: string;
  specs: ProductSpecification[];
  features: string[];
}

export interface ConfigOptions {
  category: ProductCategory;
  grade: 'SS 304' | 'SS 316' | 'SS 202';
  width: number; // in mm
  depth: number; // in mm
  height: number; // in mm
  shelvesCount: number; // For racks, trolleys, cupboards
  heavyDutyPUCasters: boolean; // Wheels (Racks, Trolleys)
  lockableDoors: boolean; // For cupboards
  reinforcementRibs: boolean; // Support reinforcement
  laserEngravedLogo: boolean; // Custom marking
  quantity: number;
  customNotes: string;
}

export interface QuoteCartItem {
  id: string;
  config: ConfigOptions;
  estimatedWeight: number; // in kg
  loadCapacity: number; // in kg
  dateAdded: string;
}

export interface ContactInquiry {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  gstNumber?: string;
  urgency: 'routine' | 'urgent' | 'immediate';
  message: string;
}
