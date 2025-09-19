import React, { forwardRef } from 'react';
import { ServiceCategory } from '../types';

// FIX: The serviceCategories objects did not match the ServiceCategory type.
// Renamed 'name' to 'title' and added the missing properties 'id', 'icon', 'description'
// to align with the interface. Also, populated the 'heading' property from the title
// to prevent an empty heading on the detail page.
const serviceCategories: ServiceCategory[] = [
  {
    id: 'hospitals',
    title: 'Hospitals',
    heading: 'Hospitals',
    icon: () => <></>,
    description: '',
    points: [
  { 
    title: 'Smart Appointment Management', 
    description: 'Patients can book appointments directly through WhatsApp/Mobile, without waiting on long reception calls. Doctors’ schedules update in real time → no double booking, smoother OP flow.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Digital Prescription (e-Rx)', 
    description: 'With one click, doctors issue prescriptions securely. Patients receive the e-Rx on WhatsApp or Email, and it’s instantly visible to the hospital pharmacy and laboratory.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Integrated Payments', 
    description: 'Patients can settle bills through UPI, QR, or cards directly from their phones. This reduces crowding at the billing counter and speeds up discharge for inpatients.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy'  
  },
  { 
    title: 'Post-Care Automation', 
    description: 'After consultation or discharge, Zea CRM sends tailored reminders and care instructions to patients/caretakers. (e.g., pill reminders, exercise reminders, recovery tracking). Ensures continuity of care, improves recovery compliance, and strengthens doctor–patient trust.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Centralized Patient Records (EMR Integration) ', 
    description: 'Every patient’s history, prescriptions, lab results, and discharge summaries are stored digitally in one place. Doctors can instantly access past medical data during OP or IP care → saves time and reduces errors.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
   { 
    title: 'Staff Onboarding Automation', 
    description: ' Junior doctor joins → doesn’t know hospital’s reporting format. Automation: App guides through admission, discharge, and lab request SOPs. Result: Doctor adjusts in 2 days instead of 2 weeks.New nurse struggles with ward duties → medication errors. Automation: App shows step-by-step duty guide + reminders (“Ward 2 → BP check at 10 AM”). Result: No missed duties, smoother patient care.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  }
]
  },
  {
    id: 'clinics',
    title: 'Clinics',
    heading: 'Clinics',
    icon: () => <></>,
    description: '',
    points: [
  { 
    title: 'Smart Appointment Management', 
    description: 'Patients book directly on WhatsApp/Mobile → no long reception calls, no waiting lines. Real-time updates avoid double bookings and keep OP flow smooth.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Digital Prescription Sharing', 
    description: 'Doctors issue prescriptions in one click. Patients receive them instantly on WhatsApp/Email → no lost paper slips, no repeated explanations.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Smart Queue Management', 
    description: 'Patients get digital tokens after booking. Doctors see who’s next → no crowding in small clinic waiting areas.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Automated Follow-Up Reminders', 
    description: 'Zea CRM reminds patients of review dates. Ensures continuity of care, reduces no-shows, and builds stronger doctor–patient trust.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Seamless Payment Collection', 
    description: 'Patients pay consultation fees through UPI/QR directly from their phone. No cash handling, faster checkout, and transparent clinic accounts.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  }
]
  },
  {
    id: 'laboratories',
    title: 'Laboratories',
    heading: 'Laboratories',
    icon: () => <></>,
    description: '',
    points: [
  { 
    title: 'Smart Test Booking', 
    description: 'Patients can book lab tests directly on WhatsApp/Mobile → no long waiting at the counter. Slots are updated in real time → avoids crowding and confusion.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Digital Test Orders from Doctors', 
    description: 'Doctors send lab test requests instantly through Zea CRM. Patients walk in with a digital order → no lost slips, no miscommunication.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Smart Report Delivery', 
    description: 'Lab results are auto-delivered to patients via WhatsApp/Email. Doctors also get instant access → faster diagnosis and treatment decisions.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Automated Follow-Up Testing Reminders', 
    description: 'Patients get reminders for repeat/monitoring tests (e.g., sugar, thyroid, cholesterol). Improves regular check-ups and builds patient loyalty.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Integrated Payments & Billing', 
    description: 'Patients pay via UPI, QR, or cards at the lab. No long billing queues, smooth checkout, and instant receipts.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  }
]
  },
  {
    id: 'medical-equipment-suppliers',
    title: 'Medical Equipment Suppliers',
    heading: 'Medical Equipment Suppliers',
    icon: () => <></>,
    description: '',
    points: [
  { 
    title: 'Smart Order Management', 
    description: 'Hospitals/clinics order via WhatsApp/Email → orders flow directly into CRM. No lost enquiries, no messy spreadsheets.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Real-Time Stock Updates', 
    description: 'CRM shows live inventory → prevents overselling or stockouts.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Integrated Payments & Invoicing', 
    description: 'Clients pay via UPI/QR link instantly. CRM auto-generates invoices → faster cash cycle.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Automated Follow-ups', 
    description: 'Automated WhatsApp/Email follow-ups for maintenance contracts or reorders. Keeps customers buying again & again.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Sales Analytics Dashboard', 
    description: 'CRM tracks best-selling equipment & client purchase trends. Helps plan inventory smarter and forecast demand.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  }
]
  },
  {
    id: 'pharma-suppliers-retailers',
    title: 'Pharma Suppliers & Retailers',
    heading: 'Pharma Suppliers & Retailers',
    icon: () => <></>,
    description: '',
    points: [
  { 
    title: 'Digital Ordering & Refills', 
    description: 'Doctors, hospitals, and patients place refill orders directly via WhatsApp. No endless phone calls → faster service.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Smart Prescription Integration', 
    description: 'e-Rx from doctors flows directly into pharmacy CRM. Reduces errors, improves efficiency.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Integrated Payments', 
    description: 'Payment link via WhatsApp → instant collection. No more waiting at counters.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Automated Refill Reminders', 
    description: 'Patients get WhatsApp/SMS reminders when meds are about to run out. Improves patient adherence & repeat sales.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Loyalty & Engagement Programs', 
    description: 'CRM sends discount offers, festival deals, or health tips. Builds stronger customer loyalty & drives more sales.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  }
]
  },
  {
    id: 'wellness-centers',
    title: 'Wellness Centers',
    heading: 'Wellness Centers',
    icon: () => <></>,
    description: '',
    points: [
  { 
    title: 'Wellness Session Smart Booking', 
    description: 'Patients/clients can book yoga, physiotherapy, or counseling sessions directly on WhatsApp/Mobile. No waiting at reception, schedules auto-update in real time.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Personalized Care Plans', 
    description: 'Doctors/therapists can share diet charts, exercise routines, or lifestyle plans digitally. Patients receive them instantly on WhatsApp/Email → no lost papers.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Automated Reminders & Motivation', 
    description: 'Zea CRM sends pill reminders, therapy follow-up alerts, or motivational health tips. Keeps patients engaged and consistent with their wellness journey.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Digital Progress Tracking', 
    description: 'Weight, BP, sugar, or fitness goals are recorded in one place. Doctors and patients can track improvements over time → boosts patient confidence.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Seamless Payment & Package Management', 
    description: 'Patients can pay for single sessions or wellness packages via UPI/QR. Transparent billing and easy renewals encourage repeat visits.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  }
]
  },
  {
    id: 'ambulance-services',
    title: 'Ambulance Services',
    heading: 'Ambulance Services',
    icon: () => <></>,
    description: '',
    points: [
  { 
    title: 'AutoRescue – Smart Ambulance Dispatch', 
    description: 'What it does: Automates ambulance booking & dispatch in real time. Real Example: Family calls at midnight, operator is busy → call missed → ambulance delayed. Automation: WhatsApp/IVR answers instantly → CRM auto-assigns nearest driver via GPS → family gets live tracking + ETA. Result: No missed calls, faster dispatch, lives saved.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Auto-Hospital Handover Report', 
    description: 'What it does: Creates a digital handover note before the patient reaches the ER. Real Example: Paramedic collects vitals (BP, SpO₂, ECG) inside the ambulance. Automation: Data syncs with hospital ER dashboard instantly → doctors are ready before arrival. Result: Zero time wasted in emergencies → faster treatment, higher survival rates.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Smart Payment & Billing', 
    description: 'What it does: Enables instant digital payment for ambulance services. Real Example: Family struggles to arrange cash at 2 AM. Automation: CRM generates QR/UPI link on WhatsApp → payment completed on the spot. Result: No cash issues, smooth financial process, trust in service.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Driver Performance & Route Optimization', 
    description: 'What it does: Tracks ambulance speed, routes, and response time. Real Example: Driver takes longer route due to traffic → patient reaches hospital late. Automation: CRM suggests fastest route via GPS + monitors driver performance. Result: Faster patient arrival, better accountability, improved service ratings.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Post-Emergency Patient Care Coordination', 
    description: 'What it does: Ensures patients get follow-up care after ambulance use. Real Example: Accident victim discharged from hospital but misses follow-up visit. Automation: CRM sends reminders for check-ups, physio, or specialist care via WhatsApp/SMS. Result: Better recovery, higher patient trust, stronger hospital-ambulance partnership.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  }
]
  },
  {
    id: 'medical-waste-management',
    title: 'Medical Waste Management',
    heading: 'Medical Waste Management',
    icon: () => <></>,
    description: '',
    points: [
  { 
    title: 'Digital Waste Tracking → ZEA BioTrack', 
    description: 'Real Example: A hospital doubts if biomedical waste is really disposed safely. Automation: Each bag gets a QR code → driver scans → CRM tracks pickup → transport → disposal. Proof sent instantly. Result: Transparent disposal, no disputes, audit-ready records.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  },
  { 
    title: 'Proof of Pickup → ZEA ProofScan', 
    description: 'Real Example: A clinic argues: “Your truck never came yesterday!” → no evidence. Automation: Driver snaps a photo at pickup → CRM stamps date, time & GPS → proof shared with the client. Result: No disputes, higher trust, faster payments.', 
    videoId: '1X2wK6MSpvwOGJL9PkflwTZHHhWtVhtZy' 
  }
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
          Click your <span className="text-[#fbbf24]">business</span> Type
        </h2>
        <p className="text-base text-gray-400 mb-12">Tailored CRM solutions for businesses of all sizes and sectors.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {serviceCategories.map((category) => (
            <button
              // FIX: Changed category.name to category.title to match the ServiceCategory type.
              key={category.title}
              onClick={() => onCategoryClick(category)}
              className="group relative w-full h-[60px] sm:h-[70px] flex items-center justify-center p-2 text-center bg-gray-900 border border-gray-700 rounded-xl overflow-hidden
                         transition-all duration-300 hover:border-[#fbbf24] hover:scale-105 hover:shadow-lg hover:shadow-[#fbbf24]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 text-sm sm:text-base font-semibold text-white transition-colors group-hover:text-[#fbbf24]">
                {/* FIX: Changed category.name to category.title to match the ServiceCategory type. */}
                {category.title}
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