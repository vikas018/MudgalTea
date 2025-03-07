import { Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

export default () => (
   <div className="flex items-center">
      <Link to="/" className="flex items-center space-x-2">
        <Coffee className="h-8 w-8" />
        <span className="font-serif text-xl">Mudgal Tea</span>
      </Link>
    </div>
)