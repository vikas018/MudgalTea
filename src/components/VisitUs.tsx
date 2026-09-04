import { MapPin, Navigation } from 'lucide-react';
import {
  business,
  addressLine,
  directionsUrl,
  mapEmbedUrl,
  openingHours,
  openingHoursConfirmed,
} from '../data/business';

interface VisitUsProps {
  // On the home page we render a section heading; on /contact the page already has one.
  heading?: boolean;
}

const VisitUs = ({ heading = true }: VisitUsProps) => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-page">
        {heading && (
          <div className="text-center mb-14">
            <span className="eyebrow">Come by</span>
            <h2 className="section-heading mt-3">Visit us in Meerut</h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-amber-900 mb-2">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              {business.name}
            </h3>
            <p className="text-gray-700 mb-4">{addressLine()}</p>

            <a
              href={directionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get directions
            </a>

            <h3 className="font-semibold text-amber-900 mt-8 mb-2">Opening hours</h3>
            {openingHoursConfirmed ? (
              <table className="text-sm text-gray-700">
                <tbody>
                  {openingHours.map((h) => (
                    <tr key={h.day}>
                      <td className="pr-6 py-0.5">{h.day}</td>
                      <td className="py-0.5">
                        <time>{h.opens}</time>–<time>{h.closes}</time>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              // TODO(vikas): set openingHoursConfirmed = true in business.ts once the real
              // hours are filled in; the table above will then render.
              <p className="text-sm text-gray-500 italic">Opening hours coming soon.</p>
            )}
          </div>

          <div className="w-full h-72 md:h-full min-h-[20rem] rounded-2xl overflow-hidden shadow-card ring-1 ring-ink/5">
            {/* Lazy-loaded so it costs nothing on first paint. */}
            <iframe
              title={`Map to ${business.name}`}
              src={mapEmbedUrl()}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
