import React from 'react';

const BackArrowIcon = () => (
    <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

interface CureBotPageProps {
  onBack: () => void;
}

const CureBotPage: React.FC<CureBotPageProps> = ({ onBack }) => {
    const SectionTitle: React.FC<{children: React.ReactNode}> = ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-[#fbbf24] mt-10 mb-5">{children}</h2>
    );

    const Quote: React.FC<{children: React.ReactNode}> = ({ children }) => (
        <p className="mt-2 border-l-4 border-gray-600 pl-4 italic text-gray-400">{children}</p>
    );

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 animate-fade-in">
        <div className="max-w-4xl mx-auto">
            <button
                onClick={onBack}
                className="flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-8 group font-semibold"
            >
                <BackArrowIcon />
                Back to Home
            </button>
            
            <header className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                    CureBot – Your AI FAQ Assistant for Health Questions
                </h1>
                <p className="text-lg text-gray-400 mt-2">Powered by Zea PRM</p>
            </header>

            <div className="mb-12 text-center">
                <a
                    href="https://n8n.urlfactory.website/webhook/7e6e9599-401f-4ae1-be8e-c1b6e39acf72/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-400 focus:ring-opacity-50"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    Chat with CureBot
                </a>
            </div>

            <main className="text-gray-300 text-base sm:text-lg leading-relaxed space-y-6">
                <section>
                    <SectionTitle>👋 Welcome to CureBot</SectionTitle>
                    <p>Healthcare can feel overwhelming when you have basic questions. That’s why we built CureBot, a simple FAQ handler that helps patients get quick answers and guides them on when to take care at home and when to see a doctor.</p>
                    <p className="mt-2">CureBot is available 24/7, in your language, and works directly on your phone or clinic website.</p>
                </section>

                <section>
                    <SectionTitle>🛠️ How to Use CureBot</SectionTitle>
                    <ol className="list-decimal list-inside space-y-4">
                        <li>
                            <strong className="text-white">Ask Your Question:</strong> Type in your concern (example: “I have fever since last night, what should I do?”).
                        </li>
                        <li>
                            <strong className="text-white">Get Instant Answers:</strong> CureBot replies with clear, simple guidance. It also explains what a doctor would typically consider.
                        </li>
                        <li>
                            <strong className="text-white">Know When to Act:</strong> CureBot highlights “self-care advice” vs “red-flag symptoms.”
                        </li>
                        <li>
                            <strong className="text-white">Escalation to Doctor (Safety Net):</strong> If your query goes beyond general FAQs or includes urgent symptoms, CureBot escalates the case to a doctor automatically. You’ll get a message like: <Quote>“This seems important. Please consult a doctor immediately. Would you like me to help you connect?”</Quote>
                        </li>
                        <li>
                            <strong className="text-white">Continue the Conversation:</strong> For general issues, you can keep asking follow-ups. For escalated issues, the conversation will safely shift towards a doctor consultation.
                        </li>
                    </ol>
                </section>

                <section>
                    <SectionTitle>🔍 Example FAQs</SectionTitle>
                    <ul className="space-y-6">
                        <li>
                            <h3 className="font-bold text-xl text-white mb-2">Fever</h3>
                            <p><strong className="text-gray-100">You ask:</strong> “I have fever since last night, should I be worried?”</p>
                            <p><strong className="text-gray-100">CureBot replies:</strong> <Quote>“Drink fluids, rest, and monitor your temperature. If fever persists &gt;2 days or crosses 102°F, consult a doctor.”</Quote></p>
                            <p className="mt-2"><strong className="text-gray-100">Doctor’s view:</strong> <Quote>“Most fevers are viral, but persistent fever may need tests. CureBot helps you decide when to seek care.”</Quote></p>
                        </li>
                        <li>
                            <h3 className="font-bold text-xl text-white mb-2">Stomach Pain</h3>
                            <p><strong className="text-gray-100">You ask:</strong> “I have stomach pain after meals. Is it serious?”</p>
                            <p><strong className="text-gray-100">CureBot replies:</strong> <Quote>“Mild pain may be due to indigestion. Try light meals and hydration. Sharp or recurring pain → see a doctor immediately.”</Quote></p>
                            <p className="mt-2"><strong className="text-gray-100">Escalation:</strong> <Quote>If pain is severe or includes vomiting/blood → “This seems urgent. Please consult a doctor now. Would you like me to connect you?”</Quote></p>
                        </li>
                    </ul>
                </section>

                <section>
                    <SectionTitle>🚀 Why CureBot + Zea PRM Matter</SectionTitle>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong className="text-white">For Patients</strong> – Quick answers + safety net for escalations.</li>
                        <li><strong className="text-white">For Doctors</strong> – Reduces repetitive queries, but ensures serious cases reach them.</li>
                        <li><strong className="text-white">For Clinics/Hospitals</strong> – Builds patient trust with an AI assistant that knows when to stop and escalate.</li>
                    </ul>
                </section>

                <section>
                    <SectionTitle>📱 Try CureBot Today</SectionTitle>
                    <p>Open chat → Ask question → Get guidance → Escalate to doctor if needed. No downloads, no technical knowledge required. Works seamlessly on mobile, desktop, or WhatsApp integration.</p>
                </section>

                <section className="text-center pt-8">
                     <p className="text-xl font-bold text-white border-t border-b border-gray-700 py-6">
                        👉 “CureBot, powered by Zea PRM, makes healthcare conversations safe and simple. Ask, understand, act – and if needed, connect with a doctor right away.”
                     </p>
                </section>
            </main>
        </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CureBotPage;