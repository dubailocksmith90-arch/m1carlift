import { Star, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/utils";

// Add real Google reviews here as clients provide them
const reviews = [
  {
    name: "Rachelle Santiago",
    reviewerMeta: "14 reviews · 3 photos",
    date: "a year ago",
    rating: 5,
    text: "Good service from M1 Carlift ☺ Thank you",
    source: "Google Review",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-[#C9A227] fill-[#C9A227]" : "text-[#2A2A2E] fill-[#2A2A2E]"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#151517] border-y border-[#2A2A2E]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">Customer Reviews</p>
          <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold text-[#EDEDED] mb-2">
            What Our Passengers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <StarRating count={5} />
            <span className="text-[#EDEDED] font-bold">5.0</span>
            <span className="text-[#8A8A95] text-sm">on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Real reviews */}
          {reviews.map((review) => (
            <blockquote
              key={review.name}
              className="md:col-span-2 bg-[#0A0A0B] rounded-xl p-6 border border-[#C9A227]/20 hover:border-[#C9A227]/40 transition-colors duration-300"
              itemScope
              itemType="https://schema.org/Review"
              itemProp="review"
            >
              <meta itemProp="reviewRating" content={String(review.rating)} />
              <div className="flex items-start justify-between gap-4 mb-4">
                <StarRating count={review.rating} />
                <span className="text-[#8A8A95] text-xs shrink-0">{review.date}</span>
              </div>

              <p
                className="text-[#C0C0C8] text-base leading-relaxed mb-6"
                itemProp="reviewBody"
              >
                &ldquo;{review.text}&rdquo;
              </p>

              <footer className="flex items-center justify-between border-t border-[#2A2A2E] pt-4">
                <cite className="not-italic flex items-center gap-3">
                  {/* Avatar initial */}
                  <div className="w-9 h-9 rounded-full bg-[#1E1E21] border border-[#2A2A2E] flex items-center justify-center text-[#C9A227] font-bold text-sm shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-[#EDEDED] font-semibold text-sm" itemProp="author">
                      {review.name}
                    </span>
                    <span className="block text-[#8A8A95] text-xs">{review.reviewerMeta} · {review.source}</span>
                  </div>
                </cite>
                {/* Google G mark */}
                <svg aria-label="Google" width="18" height="18" viewBox="0 0 24 24" className="opacity-40 shrink-0">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </footer>
            </blockquote>
          ))}

          {/* Leave-a-review CTA */}
          <a
            href={BUSINESS.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-4 bg-[#0A0A0B] rounded-xl p-6 border border-[#2A2A2E] hover:border-[#C9A227]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,39,0.08)] text-center cursor-pointer min-h-[180px]"
            aria-label="Leave a review on Google Maps"
          >
            <div className="w-12 h-12 rounded-full bg-[#1E1E21] border border-[#2A2A2E] group-hover:border-[#C9A227]/30 flex items-center justify-center transition-colors">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84z"/>
              </svg>
            </div>
            <div>
              <p className="text-[#EDEDED] font-semibold text-sm mb-1">Happy with your ride?</p>
              <p className="text-[#8A8A95] text-xs leading-relaxed">
                Leave us a review on Google — it takes 30 seconds and helps other commuters find us.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[#C9A227] text-xs font-semibold group-hover:gap-2.5 transition-all">
              Write a Review <ExternalLink size={11} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
