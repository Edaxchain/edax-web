
import { Code2, Terminal, Braces } from 'lucide-react';

export default function DocsComingSoon() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-foreground/10 p-4 rounded-full mb-6">
        <Terminal className="w-12 h-12 text-primary" />
      </div>
      <h1 className="text-4xl font-bold text-text-main mb-4 tracking-tight">Developer Portal</h1>
      <p className="text-text-main max-w-md mb-8 leading-relaxed">
        Building the infrastructure for Smart Cities. Our SDKs, API documentation, and Sandbox environments are currently under internal testing.
      </p>
      
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-md mx-auto">
        <div className="flex items-center space-x-2 text-text-sub">
          <Code2 className="w-4 h-4" /> <span className="text-sm font-medium">Smart SDK</span>
        </div>
        <div className="flex items-center space-x-2 text-text-sub">
          <Braces className="w-4 h-4" /> <span className="text-sm font-medium">REST API</span>
        </div>
      </div>
      
      <div className="mt-10 px-8 py-2 bg-progress-status/70 text-text-main rounded-full text-sm font-bold uppercase tracking-widest animate-pulse">
        Coming soon
      </div>
    </div>
  );
};

