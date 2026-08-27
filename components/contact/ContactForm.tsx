"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  mobile: z.string().optional(),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    // PLACEHOLDER: replace with Resend / Formspree / API route integration
    const msg = encodeURIComponent(
      `Contact from M1 Car Lift Website:\nName: ${data.name}\nEmail: ${data.email}\nMobile: ${data.mobile || "—"}\nSubject: ${data.subject}\nMessage: ${data.message}`
    );
    window.open(`https://wa.me/971565828471?text=${msg}`, "_blank");
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle size={48} className="text-[#C9A227]" />
        <h3 className="text-xl font-bold text-[#EDEDED]">Message Sent!</h3>
        <p className="text-[#8A8A95] max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you within 1 hour during business hours.
        </p>
        <button onClick={() => setSubmitted(false)} className="text-[#C9A227] text-sm underline mt-2">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Contact form" className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input id="contact-name" label="Full Name" placeholder="Your name" required error={errors.name?.message} {...register("name")} />
        <Input id="contact-email" type="email" label="Email" placeholder="your@email.com" required error={errors.email?.message} {...register("email")} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input id="contact-mobile" type="tel" label="Mobile (optional)" placeholder="+971 5X XXX XXXX" error={errors.mobile?.message} {...register("mobile")} />
        <Input id="contact-subject" label="Subject" placeholder="Booking enquiry / Quote / Other" required error={errors.subject?.message} {...register("subject")} />
      </div>
      <Textarea id="contact-message" label="Message" placeholder="Tell us your pick-up area, drop-off, and preferred time..." required rows={5} error={errors.message?.message} {...register("message")} />
      <Button type="submit" size="lg" loading={isSubmitting} className="w-full sm:w-auto self-start">
        <Send size={16} />
        Send Message
      </Button>
    </form>
  );
}
