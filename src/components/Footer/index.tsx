import FollowUs from './FollowUs';
import ContactInfo from './ContactInfo';
import QuickLink from './QuickLink';

export default () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Mudgal Tea</h3>
            <p className="text-sm text-amber-200">
              Bringing the finest Indian teas directly from gardens to your cup since 2024.
            </p>
          </div>
          <QuickLink />
          <ContactInfo />
          <FollowUs />
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm">
          <p>© 2024 Mudgal Tea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}