import React from 'react';

const teamMembers = [
  {
    name: 'Rajesh Mudgal',
    role: 'Founder & Tea Master',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80',
    bio: 'With over 20 years of experience in tea cultivation and tasting, Rajesh brings his passion for Indian teas to every cup.'
  },
  {
    name: 'Priya Sharma',
    role: 'Tea Sourcing Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    bio: "Priya travels across India's tea regions to select the finest harvests and maintain relationships with our partner gardens."
  },
  {
    name: 'Amit Patel',
    role: 'Quality Control Expert',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'A certified tea taster, Amit ensures that every batch meets our premium quality standards.'
  }
];

export default function Team() {
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