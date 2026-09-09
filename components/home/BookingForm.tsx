"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { PICKUP_POINTS, DROPOFF_POINTS } from "@/lib/routes";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  mobile: z
    .string()
    .min(9, "Enter a valid UAE mobile number")
    .regex(/^[\d\s+\-()]+$/, "Enter a valid phone number"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  pickup: z.string().min(1, "Please select a pick-up location"),
  dropoff: z.string().min(1, "Please select a drop-off location"),
  note: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const pickupOptions = PICKUP_POINTS.map((p) => ({ value: p.name, label: `${p.name}, Sharjah` }));
const dropoffOptions = DROPOFF_POINTS.map((d) => ({ value: d.fullName, label: `${d.fullName}, Dubai` }));

const timeOptions = [
  { value: "08:00 AM", label: "Morning — 08:00 AM" },
  { value: "09:00 AM", label: "Morning — 09:00 AM" },
  { value: "10:00 AM", label: "Morning — 10:00 AM" },
  { value: "05:00 PM", label: "Evening — 05:00 PM" },
  { value: "06:00 PM", label: "Evening — 06:00 PM" },
  { value: "07:00 PM", label: "Evening — 07:00 PM" },
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({ resolver: zodResolver(bookingSchema) });

  const onSubmit = async (data: BookingFormData) => {
    // PLACEHOLDER: wire up to an email API (Resend, Formspree, etc.) or backend route
    // For now, send to WhatsApp prefilled message as a fallback
    const message = encodeURIComponent(
      `New Booking Request from M1 Car Lift Website:\n` +
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Mobile: ${data.mobile}\n` +
        `Date: ${data.date}\n` +
        `Time: ${data.time}\n` +
        `Pickup: ${data.pickup}\n` +
        `Drop-off: ${data.dropoff}\n` +
        `Note: ${data.note || "—"}`
    );
    window.open(`https://wa.me/971565828471?text=${message}`, "_blank");
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle size={48} className="text-[#C9A227]" />
        <h3 className="text-xl font-bold text-[#EDEDED]">Booking Request Sent!</h3>
        <p className="text-[#8A8A95] max-w-sm">
          We&apos;ve received your request and will confirm your seat via WhatsApp or email shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[#C9A227] text-sm underline mt-2"
        >
          Make another booking
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Car lift booking form"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <Input
        id="name"
        label="Full Name"
        placeholder="Ahmed Al Mansouri"
        required
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        id="email"
        type="email"
        label="Email Address"
        placeholder="ahmed@example.com"
        required
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        id="mobile"
        type="tel"
        label="Mobile / WhatsApp"
        placeholder="+971 5X XXX XXXX"
        required
        error={errors.mobile?.message}
        {...register("mobile")}
      />
      <Input
        id="date"
        type="date"
        label="Travel Date"
        required
        error={errors.date?.message}
        min={new Date().toISOString().split("T")[0]}
        {...register("date")}
      />
      <Select
        id="time"
        label="Preferred Time"
        placeholder="Select time"
        required
        options={timeOptions}
        error={errors.time?.message}
        {...register("time")}
      />
      <Select
        id="pickup"
        label="Pick-up Location (Sharjah)"
        placeholder="Select Sharjah area"
        required
        options={pickupOptions}
        error={errors.pickup?.message}
        {...register("pickup")}
      />
      <Select
        id="dropoff"
        label="Drop-off Location (Dubai)"
        placeholder="Select Dubai destination"
        required
        options={dropoffOptions}
        error={errors.dropoff?.message}
        {...register("dropoff")}
      />
      <div className="sm:col-span-2">
        <Textarea
          id="note"
          label="Additional Note (optional)"
          placeholder="e.g. I need an early morning pickup near Al Nahda Mall"
          {...register("note")}
        />
      </div>
      <div className="sm:col-span-2">
        <Button
          type="submit"
          size="lg"
          loading={isSubmitting}
          className="w-full"
        >
          <Send size={16} />
          Request Booking
        </Button>
        <p className="text-xs text-[#8A8A95] text-center mt-2">
          We&apos;ll confirm your seat via WhatsApp or email within 1 hour.
        </p>
      </div>
    </form>
  );
}
