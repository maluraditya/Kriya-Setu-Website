import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { toast } from "sonner";

type Ctx = { open: () => void; close: () => void };
const BookDemoCtx = createContext<Ctx | null>(null);

export function useBookDemo() {
  const c = useContext(BookDemoCtx);
  if (!c) throw new Error("useBookDemo must be used inside BookDemoProvider");
  return c;
}

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(6, "Enter a valid phone").max(20),
  institution: z.string().trim().min(2, "Institution name required").max(120),
  role: z.string().trim().min(2, "Role required").max(80),
  message: z.string().trim().max(600).optional(),
});

export function BookDemoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  // Intercept any anchor click pointing at #cta or [data-book-demo]
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = (e.target as HTMLElement | null)?.closest("a,button");
      if (!t) return;
      const href = t.getAttribute("href");
      const isDemo =
        t.hasAttribute("data-book-demo") ||
        href === "#cta" ||
        href === "#book-demo";
      if (!isDemo) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    // Simulated submission (no backend wired yet)
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    toast.success("Thanks! Our team will reach out within 24 hours.");
    setOpen(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <BookDemoCtx.Provider value={{ open, close }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[520px]">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Book a Demo</DialogTitle>
            <DialogDescription>
              See KriyaSetu in action. We'll tailor the walkthrough to your institution.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="grid gap-3 mt-2">
            <div className="grid sm:grid-cols-2 gap-3">
              <Field id="name" label="Full name" placeholder="Jane Doe" />
              <Field id="email" label="Work email" type="email" placeholder="jane@school.edu" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field id="phone" label="Phone" type="tel" placeholder="+91 ..." />
              <Field id="role" label="Your role" placeholder="Principal / Director / Teacher" />
            </div>
            <Field id="institution" label="Institution" placeholder="Name of your school / college" />
            <div className="grid gap-1.5">
              <Label htmlFor="message">What would you like to see? (optional)</Label>
              <Textarea id="message" name="message" rows={3} maxLength={600} placeholder="Subjects, grades, goals..." />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-opacity disabled:opacity-60"
              style={{ background: "var(--brand-orange)", color: "#fff" }}
            >
              {loading ? "Sending…" : "Request my demo →"}
            </button>
            <p className="text-[11px] text-muted-foreground text-center">
              We respect your privacy. No spam — ever.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </BookDemoCtx.Provider>
  );
}

function Field({
  id, label, type = "text", placeholder,
}: { id: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} type={type} placeholder={placeholder} required maxLength={160} />
    </div>
  );
}
