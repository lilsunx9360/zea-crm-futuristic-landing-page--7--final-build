import React, { forwardRef } from 'react';
import { ServiceCategory } from '../types';

const serviceCategories: ServiceCategory[] = [
  { 
    name: ' Hospitals', 
    heading: '',
    points : [
      { title: 'Doctor Appointment Booking via WhatsApp', description: 'Patients can book appointments directly through WhatsApp, without waiting on long reception calls.', videoId: 'Ig39tkv28Mc' },
      { title: 'Real-Time Schedule Updates', description: 'Doctors’ schedules update in real time → no double booking, smoother OP flow.', videoId: 'Ig39tkv28Mc' },
      { title: 'Digital Prescription', description: 'With one click, doctors issue prescriptions securely.', videoId: 'Ig39tkv28Mc' },
      { title: 'Instant e-Rx Delivery', description: 'Patients receive the e-Rx on WhatsApp or Email, and it’s instantly visible to the hospital pharmacy and laboratory.', videoId: 'Ig39tkv28Mc' },
      { title: 'Seamless Payments', description: 'Patients can settle bills through UPI, QR, or cards directly from their phones.', videoId: 'Ig39tkv28Mc' },
      { title: 'Faster Discharge', description: 'This reduces crowding at the billing counter and speeds up discharge for inpatients.', videoId: 'Ig39tkv28Mc' },
      { title: 'Automated Care Reminders', description: 'After consultation or discharge, Zea CRM sends tailored reminders and care instructions to patients/caretakers (e.g., pill reminders, exercise reminders, recovery tracking).', videoId: 'Ig39tkv28Mc' },
      { title: 'Continuity of Care', description: 'Ensures continuity of care, improves recovery compliance, and strengthens doctor–patient trust.', videoId: 'Ig39tkv28Mc' },
      { title: 'Centralized Patient Records', description: 'Every patient’s history, prescriptions, lab results, and discharge summaries are stored digitally in one place.', videoId: 'Ig39tkv28Mc' },
      { title: 'Quick Access for Doctors', description: 'Doctors can instantly access past medical data during OP or IP care → saves time and reduces errors.', videoId: 'Ig39tkv28Mc' }
    ]
  },
  { 
    name: 'Clinics', 
    heading: '',
    points: [
      { title: 'Doctor Appointment Booking via WhatsApp', description: 'Patients book directly on WhatsApp → no long reception calls, no waiting lines. Real-time updates avoid double bookings and keep OP flow smooth.', videoId: 'Ig39tkv28Mc' },
      { title: 'Digital Prescription Sharing', description: 'Doctors issue prescriptions in one click. Patients receive them instantly on WhatsApp/Email → no lost paper slips, no repeated explanations.', videoId: 'Ig39tkv28Mc' },
      { title: 'Smart Queue Management', description: 'Patients get digital tokens after booking. Doctors see who’s next → no crowding in small clinic waiting areas.', videoId: 'Ig39tkv28Mc' },
      { title: 'Automated Follow-Up Reminders', description: 'Zea CRM reminds patients of review dates. Ensures continuity of care, reduces no-shows, and builds stronger doctor–patient trust.', videoId: 'Ig39tkv28Mc' },
      { title: 'Seamless Payment Collection', description: 'Patients pay consultation fees through UPI/QR directly from their phone. No cash handling, faster checkout, and transparent clinic accounts.', videoId: 'Ig39tkv28Mc' }
    ]
  },
  { 
    name: 'Laboratories', 
    heading: '',
    points: [
      { title: 'Test Booking via WhatsApp', description: 'Patients can book lab tests directly on WhatsApp → no long waiting at the counter. Slots are updated in real time → avoids crowding and confusion.', videoId: 'Ig39tkv28Mc' },
      { title: 'Digital Test Orders from Doctors', description: 'Doctors send lab test requests instantly through Zea CRM. Patients walk in with a digital order → no lost slips, no miscommunication.', videoId: 'Ig39tkv28Mc' },
      { title: 'Smart Report Delivery', description: 'Lab results are auto-delivered to patients via WhatsApp/Email. Doctors also get instant access → faster diagnosis and treatment decisions.', videoId: 'Ig39tkv28Mc' },
      { title: 'Automated Follow-Up Testing Reminders', description: 'Patients get reminders for repeat/monitoring tests (e.g., sugar, thyroid, cholesterol). Improves regular check-ups and builds patient loyalty.', videoId: 'Ig39tkv28Mc' },
      { title: 'Integrated Payments & Billing', description: 'Patients pay via UPI, QR, or cards at the lab. No long billing queues, smooth checkout, and instant receipts.', videoId: 'Ig39tkv28Mc' }
    ]
  },
  { 
    name: 'Equipment Suppliers', 
    heading: '',
    points: [
      { title: 'Smart Order Management', description: 'Hospitals/clinics order via WhatsApp/Email → orders flow directly into CRM. No lost enquiries, no messy spreadsheets.', videoId: 'Ig39tkv28Mc' },
      { title: 'Real-Time Stock Updates', description: 'CRM shows live inventory → prevents overselling or stockouts.', videoId: 'Ig39tkv28Mc' },
      { title: 'Integrated Payments & Invoicing', description: 'Clients pay via UPI/QR link instantly. CRM auto-generates invoices → faster cash cycle.', videoId: 'Ig39tkv28Mc' },
      { title: 'Automated Follow-ups', description: 'Automated WhatsApp/Email follow-ups for maintenance contracts or reorders. Keeps customers buying again & again.', videoId: 'Ig39tkv28Mc' },
      { title: 'Sales Analytics Dashboard', description: 'CRM tracks best-selling equipment & client purchase trends. Helps plan inventory smarter and forecast demand.', videoId: 'Ig39tkv28Mc' }
    ]
  },
  { 
    name: 'Pharma Suppliers & Retailers', 
    heading: '',
    points: [
      { title: 'Digital Ordering & Refills', description: 'Doctors, hospitals, and patients place refill orders directly via WhatsApp. No endless phone calls → faster service.', videoId: 'Ig39tkv28Mc' },
      { title: 'Smart Prescription Integration', description: 'e-Rx from doctors flows directly into pharmacy CRM. Reduces errors, improves efficiency.', videoId: 'Ig39tkv28Mc' },
      { title: 'Integrated Payments', description: 'Payment link via WhatsApp → instant collection. No more waiting at counters.', videoId: 'Ig39tkv28Mc' },
      { title: 'Automated Refill Reminders', description: 'Patients get WhatsApp/SMS reminders when meds are about to run out. Improves patient adherence & repeat sales.', videoId: 'Ig39tkv28Mc' },
      { title: 'Loyalty & Engagement Programs', description: 'CRM sends discount offers, festival deals, or health tips. Builds stronger customer loyalty & drives more sales.', videoId: 'Ig39tkv28Mc' }
    ]
  },
  { 
    name: 'Wellness Centers ', 
    heading: '',
    points: [
      { title: 'Wellness Session Booking via WhatsApp', description: 'Patients/clients can book yoga, physiotherapy, or counseling sessions directly on WhatsApp. No waiting at reception, schedules auto-update in real time.', videoId: 'Ig39tkv28Mc' },
      { title: 'Personalized Care Plans', description: 'Doctors/therapists can share diet charts, exercise routines, or lifestyle plans digitally. Patients receive them instantly on WhatsApp/Email → no lost papers.', videoId: 'Ig39tkv28Mc' },
      { title: 'Automated Reminders & Motivation', description: 'Zea CRM sends pill reminders, therapy follow-up alerts, or motivational health tips. Keeps patients engaged and consistent with their wellness journey.', videoId: 'Ig39tkv28Mc' },
      { title: 'Digital Progress Tracking', description: 'Weight, BP, sugar, or fitness goals are recorded in one place. Doctors and patients can track improvements over time → boosts patient confidence.', videoId: 'Ig39tkv28Mc' },
      { title: 'Seamless Payment & Package Management', description: 'Patients can pay for single sessions or wellness packages via UPI/QR. Transparent billing and easy renewals encourage repeat visits.', videoId: 'Ig39tkv28Mc' }
    ]
  },
  { 
    name: 'Ambulance Services', 
    heading: '',
    points: [
      { title: 'AutoRescue – Smart Ambulance Dispatch', description: 'Automates ambulance booking & dispatch in real time. Example: Family calls at midnight, operator is busy → call missed → ambulance delayed. Automation: WhatsApp/IVR answers instantly → CRM auto-assigns nearest driver via GPS → family gets live tracking + ETA. Result: No missed calls, faster dispatch, lives saved.', videoId: 'Ig39tkv28Mc' },
      { title: 'Auto-Hospital Handover Report', description: 'Creates a digital handover note before the patient reaches the ER. Example: Paramedic collects vitals (BP, SpO₂, ECG) inside the ambulance. Automation: Data syncs with hospital ER dashboard instantly → doctors are ready before arrival. Result: Zero time wasted in emergencies → faster treatment, higher survival rates.', videoId: 'Ig39tkv28Mc' },
      { title: 'Smart Payment & Billing', description: 'Enables instant digital payment for ambulance services. Example: Family struggles to arrange cash at 2 AM. Automation: CRM generates QR/UPI link on WhatsApp → payment completed on the spot. Result: No cash issues, smooth financial process, trust in service.', videoId: 'Ig39tkv28Mc' },
      { title: 'Driver Performance & Route Optimization', description: 'Tracks ambulance speed, routes, and response time. Example: Driver takes longer route due to traffic → patient reaches hospital late. Automation: CRM suggests fastest route via GPS + monitors driver performance. Result: Faster patient arrival, better accountability, improved service ratings.', videoId: 'Ig39tkv28Mc' },
      { title: 'Post-Emergency Patient Care Coordination', description: 'Ensures patients get follow-up care after ambulance use. Example: Accident victim discharged from hospital but misses follow-up visit. Automation: CRM sends reminders for check-ups, physio, or specialist care via WhatsApp/SMS. Result: Better recovery, higher patient trust, stronger hospital-ambulance partnership.', videoId: 'Ig39tkv28Mc' }
    ]
  },
  { 
    name: 'Medical Waste Management', 
    heading: '',
    points: [
      { title: 'Digital Waste Tracking → ZEA BioTrack', description: 'Example: A hospital doubts if biomedical waste is really disposed safely. Automation: Each bag gets a QR code → driver scans → CRM tracks pickup → transport → disposal. Proof sent instantly. Result: Transparent disposal, no disputes, audit-ready records.', videoId: 'Ig39tkv28Mc' },
      { title: 'Proof of Pickup → ZEA ProofScan', description: 'Example: A clinic argues: “Your truck never came yesterday!” → no evidence. Automation: Driver snaps a photo at pickup → CRM stamps date, time & GPS → proof shared with the client. Result: No disputes, higher trust, faster payments.', videoId: 'Ig39tkv28Mc' }
    ]
  },
  { 
    name: 'Staff Onboarding Automation', 
    heading: '',
    points: [
      { title: 'ZEA MedStart', description: 'Example: Junior doctor joins → doesn’t know hospital’s reporting format. Automation: App guides through admission, discharge, and lab request SOPs. Result: Doctor adjusts in 2 days instead of 2 weeks.', videoId: 'Ig39tkv28Mc' },
      { title: 'ZEA CarePath', description: 'Example: New nurse struggles with ward duties → medication errors. Automation: App shows step-by-step duty guide + reminders (“Ward 2 → BP check at 10 AM”). Result: No missed duties, smoother patient care.', videoId: 'Ig39tkv28Mc' },
      { title: 'ZEA HospGuide', description: 'Example: Admin staff joins → confused about billing system & waste segregation. Automation: App explains hospital policies, CRM tracks completion. Result: Compliance-ready staff from day one.', videoId: 'Ig39tkv28Mc' }
    ]
  },
];

interface WhoYouAreProps {
  onCategoryClick: (category: ServiceCategory) => void;
}


const WhoYouAre = forwardRef<HTMLDivElement, WhoYouAreProps>(({ onCategoryClick }, ref) => {
  return (
    <section ref={ref} className="py-12 sm:py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
          Click your <span className="text-[#fbbf24]">business</span>
        </h2>
        <p className="text-base text-gray-400 mb-12">Tailored CRM solutions for businesses of all sizes and sectors.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {serviceCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategoryClick(category)}
              className="group relative w-full h-[60px] sm:h-[70px] flex items-center justify-center p-2 text-center bg-gray-900 border border-gray-700 rounded-xl overflow-hidden
                         transition-all duration-300 hover:border-[#fbbf24] hover:scale-105 hover:shadow-lg hover:shadow-[#fbbf24]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 text-sm sm:text-base font-semibold text-white transition-colors group-hover:text-[#fbbf24]">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
});

WhoYouAre.displayName = 'WhoYouAre';

export default WhoYouAre;