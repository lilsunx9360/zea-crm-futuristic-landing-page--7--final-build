import * as React from 'react';
import type { JSX } from 'react';

export enum Role {
  Owner = 'Owner/Director',
  Manager = 'Manager',
  Doctor = 'Doctor',
  Staff = 'Staff',
  Other = 'Other',
}

export enum BusinessCategory {
  Hospitals = 'Hospitals',
  Clinics = 'Clinics',
  Labs = 'Diagnostic Labs',
  Pharmacies = 'Pharmacies',
  Other = 'Other',
}

export interface ServicePoint {
  videoId: string;
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  description: string;
  heading: string;
  points: ServicePoint[];
}
