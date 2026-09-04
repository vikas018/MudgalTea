import { teamMembers } from '../../data/team';

const Team = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-page">
        <div className="text-center mb-14">
          <span className="eyebrow">The people</span>
          <h2 className="section-heading mt-3">Meet our team</h2>
          <p className="mt-4 text-ink-soft max-w-2xl mx-auto">
            Our passionate experts work tirelessly to bring you the finest Indian teas,
            combining centuries of tradition with modern expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                width={176}
                height={176}
                loading="lazy"
                decoding="async"
                className="w-44 h-44 rounded-full mx-auto object-cover ring-4 ring-cream-200 shadow-soft mb-5"
              />
              <h3 className="font-serif text-xl text-amber-900 mb-1">{member.name}</h3>
              <p className="text-amber-700 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-ink-soft text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
