import { useState, useRef, useEffect } from "react";
import { ShieldCheckIcon, InfoIcon, UnlockIcon, HeadsetIcon } from "lucide-react";

export function SecurityVerification({ onVerify }: { onVerify: () => void }) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value && !/^\d+$/.test(value)) return;
    
    if (value.length > 1) {
      value = value.slice(-1);
    }
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/\D/g, '').slice(0, 6);
    if (!pastedData) return;

    const newCode = [...code];
    for (let i = 0; i < pastedData.length; i++) {
        newCode[i] = pastedData[i];
    }
    setCode(newCode);

    const focusIndex = Math.min(pastedData.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = () => {
    if (code.every(c => c !== "")) {
      onVerify();
    }
  };

  useEffect(() => {
    if (code.every(c => c !== "")) {
      const timer = setTimeout(() => {
        handleVerify();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [code]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface flex items-center justify-center relative overflow-hidden font-sans w-full">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="w-full max-w-md px-4 relative z-10 animate-in fade-in zoom-in duration-700">
        <div className="glass-panel border-t-2 border-t-primary-fixed rounded-xl p-8 md:p-12 flex flex-col items-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-center">
          
          <div className="mb-6 text-primary-fixed flex justify-center items-center">
             <ShieldCheckIcon className="w-12 h-12 stroke-[1.5]" />
          </div>

          <div className="mb-8">
            <h1 className="font-heading text-[24px] text-on-surface mb-2">Two-Step Verification</h1>
            <p className="text-on-surface-variant font-sans">Verification required for institutional access.</p>
          </div>

          <div className="bg-primary-fixed-dim/10 rounded-lg p-4 mb-8 w-full border border-primary-fixed-dim/20 flex items-start gap-3 text-left">
            <InfoIcon className="w-5 h-5 text-primary-fixed-dim shrink-0 mt-0.5" />
            <p className="text-primary-fixed-dim/90 text-sm font-medium">
              Enter the 6-digit code from your authenticator app or security token.
            </p>
          </div>

          <div className="flex justify-between w-full gap-2 mb-8">
            {code.map((digit, i) => (
              <input
                key={i}
                ref={el => { if (el) inputRefs.current[i] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                placeholder="•"
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onPaste={handlePaste}
                className="w-10 h-14 sm:w-12 sm:h-16 text-center font-bold text-xl rounded border border-outline-variant bg-surface-container text-on-surface focus:border-primary-fixed-dim focus:ring-2 focus:ring-primary-fixed-dim/10 outline-none transition-all duration-200"
              />
            ))}
          </div>

          <button 
            onClick={handleVerify}
            disabled={!code.every(c => c !== "")}
            className="w-full bg-gradient-to-r from-primary-fixed to-primary-fixed-dim text-on-primary-fixed font-bold py-3 px-6 rounded transition-colors duration-200 flex justify-center items-center gap-2 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-[inset_0_1px_4px_rgba(255,255,255,0.3)] text-[12px] uppercase tracking-widest mb-8"
          >
            <UnlockIcon className="w-5 h-5" />
            Authenticate
          </button>

          <div className="flex flex-col items-center gap-3 w-full">
            <button className="text-primary-fixed hover:text-primary-fixed-dim text-sm transition-colors underline decoration-primary-fixed-dim/30 underline-offset-4">
              Try another way
            </button>
            <div className="w-full border-t border-outline-variant/30 my-2"></div>
            <button className="text-on-surface-variant hover:text-on-surface text-sm transition-colors flex items-center gap-2">
              <HeadsetIcon className="w-4 h-4" />
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
