import { Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business } from '../../data/business';

const Title = () => (
  <div className="flex items-center">
    <Link
      to="/"
      className="flex items-center space-x-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
    >
      <Coffee className="h-8 w-8" aria-hidden="true" />
      <span className="font-serif text-xl">{business.name}</span>
    </Link>
  </div>
);

export default Title;
