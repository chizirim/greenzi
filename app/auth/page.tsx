// app/auth/page.tsx
// import { auth, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { 
  TbMail, 
  TbLock, 
  TbUser, 
  TbArrowRight, 
  TbPlant, 
  TbStarFilled,
  TbBrandGoogle
} from "react-icons/tb";

export async function Auth() {
  const session = await auth();
  console.log(session);
}

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}) {
  const params = await searchParams;
  const isSignUp = params.mode === "signup";

  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      {/* HEADER / NAVIGATION BAR */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-wider text-slate-900">
          GREENZI<span className="text-[#0D9488]">.</span>
        </Link>
        <Link 
          href="/" 
          className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#0D9488] transition-colors"
        >
          &larr; Back to Home
        </Link>
      </header>

      {/* MAIN AUTH SECTION */}
      <section className="py-8 px-6 max-w-7xl mx-auto w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">

          {/* LEFT COLUMN: BRAND PROMO PANEL */}
          <div className="hidden lg:flex lg:col-span-5 relative bg-slate-900 text-white min-h-[640px] p-12 flex-col justify-between overflow-hidden">
            {/* Background Image & Overlay */}
            <Image 
              src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=1000&auto=format&fit=crop" 
              alt="Botanical green foliage backdrop" 
              fill 
              className="object-cover opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#0D9488]/30 blur-3xl z-10 pointer-events-none" />

            {/* Top Tag */}
            <div className="relative z-20">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 backdrop-blur-sm border border-emerald-200/50">
                <TbPlant className="text-sm" /> Greenzi Community
              </span>
            </div>

            {/* Middle Testimonial */}
            <div className="relative z-20 space-y-4">
              <div className="flex items-center gap-1 text-amber-400 text-sm">
                <TbStarFilled /><TbStarFilled /><TbStarFilled /><TbStarFilled /><TbStarFilled />
              </div>
              <blockquote className="text-2xl font-bold leading-snug text-slate-100">
                &ldquo;Greenzi completely transformed my living space. The care guides and pet safety filters helped me build a thriving indoor jungle safely!&rdquo;
              </blockquote>
              <div className="pt-2">
                <p className="font-bold text-sm text-white">Elena Rostova</p>
                <p className="text-xs text-slate-400">Urban Botanist & Plant Parent</p>
              </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="relative z-20 pt-6 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
              <span>Join over 50,000+ plant lovers</span>
              <span className="text-[#0D9488] font-semibold">100% Free Access</span>
            </div>
          </div>

          {/* RIGHT COLUMN: AUTHENTICATION FORM */}
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-12">

            {/* TAB SWITCHER */}
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {isSignUp ? "Create Your Account" : "Welcome Back"}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {isSignUp 
                    ? "Join Greenzi to save favorite species, track care schedules, and learn." 
                    : "Sign in to access your saved plant collection and care logs."}
                </p>
              </div>

              {/* Mode Toggle Pills */}
              <div className="bg-slate-100 p-1 rounded-full flex gap-1 flex-shrink-0">
                <Link
                  href="/auth"
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    !isSignUp 
                      ? "bg-white text-slate-900 shadow-sm" 
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  href="/auth?mode=signup"
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    isSignUp 
                      ? "bg-[#0D9488] text-white shadow-sm" 
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Register
                </Link>
              </div>
            </div>

            {/* GOOGLE AUTH BUTTON */}
            <div className="space-y-4">
              <form
                action={async () => {
                  "use server";
                  await signIn("google");
                }}
              >
                <button
                  type="submit" 
                  className="w-full py-3.5 px-6 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 transition-all font-semibold text-slate-700 text-sm flex items-center justify-center gap-3 shadow-sm hover:shadow"
                >
                  <TbBrandGoogle className="text-xl text-[#0D9488]" />
                  <span>{isSignUp ? "Sign up with Google" : "Continue with Google"}</span>
                </button>
              </form>

              {/* DIVIDER */}
              <div className="relative flex items-center justify-center my-6">
                <div className="border-t border-slate-200 w-full" />
                <span className="bg-white px-4 text-xs uppercase font-bold text-slate-400 tracking-wider absolute">
                  or email
                </span>
              </div>
            </div>

            {/* EMAIL / PASSWORD FORM */}
            <form method="POST" action={isSignUp ? "/api/auth/register" : "/api/auth/login"} className="space-y-5">

              {/* Name Field (Sign Up Only) */}
              {isSignUp && (
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-600">Full Name</label>
                  <div className="relative flex items-center">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="e.g. Maya Lin"
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D9488] focus:bg-white transition-colors"
                      required
                    />
                    <TbUser className="absolute left-4 text-slate-400 text-base" />
                  </div>
                </div>
              )}

              {/* Email Address */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-600">Email Address</label>
                <div className="relative flex items-center">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="maya@example.com"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D9488] focus:bg-white transition-colors"
                    required
                  />
                  <TbMail className="absolute left-4 text-slate-400 text-base" />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-slate-600">Password</label>
                  {!isSignUp && (
                    <Link href="/forgot-password" className="text-xs font-semibold text-[#0D9488] hover:underline">
                      Forgot Password?
                    </Link>
                  )}
                </div>
                <div className="relative flex items-center">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D9488] focus:bg-white transition-colors"
                    required
                  />
                  <TbLock className="absolute left-4 text-slate-400 text-base" />
                </div>
              </div>

              {/* Terms Checkbox (Sign Up Only) */}
              {isSignUp && (
                <div className="flex items-start gap-2 pt-1">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    name="terms"
                    className="mt-1 rounded border-slate-300 text-[#0D9488] focus:ring-[#0D9488]" 
                    required 
                  />
                  <label htmlFor="terms" className="text-xs text-slate-500 leading-snug">
                    I agree to the <Link href="/terms" className="underline text-slate-800">Terms of Service</Link> and <Link href="/privacy" className="underline text-slate-800">Privacy Policy</Link>.
                  </label>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#0D9488] hover:bg-[#0f766e] text-white font-semibold flex items-center justify-center gap-3 transition-all shadow-md hover:shadow-lg text-sm mt-4"
              >
                <span>{isSignUp ? "Create Free Account" : "Sign In to Greenzi"}</span>
                <TbArrowRight className="text-base" />
              </button>
            </form>

            {/* SWITCH FOOTER LINKS */}
            <div className="text-center mt-8 text-xs text-slate-500">
              {isSignUp ? (
                <p>
                  Already have an account?{" "}
                  <Link 
                    href="/auth" 
                    className="font-bold text-[#0D9488] hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              ) : (
                <p>
                  Don&apos;t have an account yet?{" "}
                  <Link 
                    href="/auth?mode=signup" 
                    className="font-bold text-[#0D9488] hover:underline"
                  >
                    Register for Free
                  </Link>
                </p>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER BAR */}
      <footer className="py-6 px-6 text-center text-xs text-slate-500 border-t border-slate-200/60 bg-white/50">
        <p>&copy; {new Date().getFullYear()} Greenzi. All rights reserved.</p>
      </footer>
    </main>
  );
}