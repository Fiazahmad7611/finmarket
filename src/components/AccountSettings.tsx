import { CameraIcon, CheckCircle2Icon } from "lucide-react";

export function AccountSettings() {
  return (
    <div className="w-full flex-1 space-y-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant/10 pb-6">
        <div>
          <h2 className="font-heading text-2xl text-on-surface">Account Settings</h2>
          <p className="font-sans text-base text-on-surface-variant">Manage your profile, security preferences, and integrations.</p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary px-6 py-2 rounded font-mono text-xs uppercase tracking-wider">Discard Changes</button>
          <button className="btn-primary px-6 py-2 rounded font-mono text-xs uppercase tracking-wider flex items-center gap-2">
            <span className="material-symbols-outlined text-base">save</span> Save Changes
          </button>
        </div>
      </header>

      <section>
        <h3 className="font-heading text-2xl text-on-surface mb-6">Profile Information</h3>
        <div className="glass-panel p-8 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="flex flex-col items-center gap-4 w-full md:w-auto">
              <div className="relative group cursor-pointer w-32 h-32">
                <img alt="Executive User Profile Large" className="w-full h-full rounded-full object-cover border-2 border-surface-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSkuayMlPN8YREan9m4PnhPkP-UabRwYYakQ6CG5Ec3fKlp8joIuU_U1jI-zRGJuDw-np_BYACmUnEeQ0z2_XUPzOmGGtd9oLqX08OSKpicy9KnhvvjgzfyzdEzQ37sfae0aQO_2X6TrrmwzzF-IQDxKJ5G2fs4KB2NiIhm_JKuDY7AbT_AaHCLWdUYbyOcAvmSzpK7H2VTZ4f-4x2FWMnDbZJoYtKrA0PH_QH98w9pQkpVI6lZ5impeZODL-7Nqw-9BcCnpk73qM" />
                <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <CameraIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <button className="btn-secondary px-4 py-1.5 rounded font-mono text-xs uppercase">Change Photo</button>
            </div>

            {/* Form */}
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">Full Name</label>
                <input className="input-field rounded px-4 py-3 font-sans text-base text-on-surface w-full" type="text" defaultValue="Jameson Sterling" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">Email Address</label>
                <input className="input-field rounded px-4 py-3 font-sans text-base text-on-surface w-full" readOnly type="email" defaultValue="j.sterling@aureus-capital.com" />
                <span className="font-mono text-xs text-primary-fixed-dim mt-1 flex items-center gap-1">
                  <CheckCircle2Icon className="w-3 h-3" /> Verified
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">Phone Number</label>
                <input className="input-field rounded px-4 py-3 font-sans text-base text-on-surface w-full" type="tel" defaultValue="+1 (555) 019-8234" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">Timezone</label>
                <select className="input-field rounded px-4 py-3 font-sans text-base text-on-surface w-full appearance-none">
                  <option>(UTC-05:00) Eastern Time (US & Canada)</option>
                  <option>(UTC+00:00) Greenwich Mean Time</option>
                  <option>(UTC+01:00) Central European Time</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">Company / Entity</label>
                <input className="input-field rounded px-4 py-3 font-sans text-base text-on-surface w-full opacity-70 cursor-not-allowed" disabled type="text" defaultValue="Aureus Capital Partners LLC" />
                <p className="font-mono text-xs text-on-surface-variant mt-1">Contact support to change your registered entity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
