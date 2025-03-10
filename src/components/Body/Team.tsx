import { teamMembers } from '../../data/team';

export default () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center text-amber-900 mb-4">
          Meet Our Team
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our passionate experts work tirelessly to bring you the finest Indian teas,
          combining centuries of tradition with modern expertise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />  
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {member.name}
              </h3>
              <p className="text-amber-700 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}