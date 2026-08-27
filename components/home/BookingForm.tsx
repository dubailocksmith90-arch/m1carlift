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
import { ROUTES } from "@/lib/utils";

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

const routeOptions = ROUTES.map((r) => ({ value: r, label: r }));

const timeOptions = [
  "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM",
  "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM",
  "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM",
].map((t) => ({ value: t, label: t }));

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
        label="Pick-up Location"
        placeholder="Select area"
        required
        options={routeOptions}
        error={errors.pickup?.message}
        {...register("pickup")}
      />
      <Select
        id="dropoff"
        label="Drop-off Location"
        placeholder="Select area"
        required
        options={routeOptions}
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
