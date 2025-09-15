import React from 'react';

export enum Role {
  Owner = "Owner",
  Startup = "Startup Company",
  Manager = "Manager",
  Admin = "Administrator",
  Other = "Other"
}

export enum BusinessCategory {
  Hospitals = "Hospitals",
  Clinics = "Clinics",
  Laboratories = "Laboratories",
  EquipmentSuppliers = "Equipment Suppliers",
  Pharma = "Pharma Suppliers & Retailers",
  Wellness = "Wellness Centers",
  Ambulance = "Ambulance Services",
  WasteManagement = "Medical Waste Management",
  StaffOnboarding = "Staff Onboarding Automation"
}

export interface BenefitPoint {
  title: string;
  description: string;
  videoId: string;
}

export interface ServiceCategory {
  name: string;
  videoType?: 'youtube' | 'mp4';
  heading: string;
  points: BenefitPoint[];
}