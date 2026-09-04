import vikas from '../images/vikas.jpg';
import dheeraj from '../images/dheeraj.jpg';

// TODO(vikas): supply 400x400 replacements for vikas.jpg / dheeraj.jpg.
// Both are currently 150x150 but render at 192x192, so they look soft.

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Dheeraj Sharma',
    role: 'Chief Executive Officer',
    image: dheeraj,
    bio: 'With over 12 years of experience in tea cultivation and tasting, Dheeraj brings his passion for Indian teas to every cup.'
  },
  {
    name: 'Vikas Yadav',
    role: 'Chief Commercial Officer',
    image: vikas,
    bio: "Vikas travels across India's tea regions to select the finest harvests and maintain relationships with our partner gardens."
  },
];
