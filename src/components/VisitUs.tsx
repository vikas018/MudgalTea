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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2 className="text-3xl font-serif text-center text-amber-900 mb-12">Visit Us</h2>
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
              className="inline-flex items-center gap-2 bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get Directions
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

          <div className="w-full h-72 md:h-full min-h-[18rem] rounded-lg overflow-hidden shadow">
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
