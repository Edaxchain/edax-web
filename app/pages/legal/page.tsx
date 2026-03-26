import { ShieldCheck, Scale, FileText, Lock } from 'lucide-react';

const LegalComingSoon = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-8">
        <div className="bg-foreground/10 p-5 rounded-3xl">
          <ShieldCheck className="w-14 h-14 text-done-status" />
        </div>
        <div className="absolute -bottom-2 -right-2 border-2 border-done-status rounded-full p-1.5 shadow-sm">
          <Lock className="w-4 h-4 text-done-status" />
        </div>
      </div>

      <h1 className="text-4xl font-extrabold text-text-main mb-4 tracking-tight">
        Legal & Compliance
      </h1>
      <p className="text-text-main max-w-lg mb-10 leading-relaxed mx-auto text-lg">
        EDAX is committed to the highest standards of regulatory compliance. 
        Our governance frameworks are currently being finalized by our legal experts.
      </p>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-2xl mx-auto mb-12">
        <div className="flex items-center space-x-3 text-text-main justify-center">
          <FileText className="w-5 h-5 text-done-status" />
          <span className="text-sm font-bold uppercase tracking-wider">Terms of Service</span>
        </div>

        <div className="flex items-center space-x-3 text-text-main justify-center">
          <Scale className="w-5 h-5 text-done-status" />
          <span className="text-sm font-bold uppercase tracking-wider">Privacy Policy</span>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <div className="inline-flex items-center px-4 py-1.5 bg-progress-status/50 text-text-main rounded-full text-xs font-bold uppercase tracking-[0.2em]">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-progress-status/70"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-progress-status"></span>
          </span>
          Under Legal Review
        </div>
        <p className="text-slate-400 text-xs italic">Estimated Release: Q3 2026</p>
      </div>
    </div>
  );
};

export default LegalComingSoon;