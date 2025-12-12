import { Users } from 'lucide-react';

export default function WhoItsFor() {
  const audience = [
    'Resellers',
    'Affiliate marketers',
    'Product curators',
    'WhatsApp-based sellers',
    'Dropshippers',
    'Anyone who wants a business but hates manual work',
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Users className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Who This Is For
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {audience.map((person, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <p className="text-lg font-semibold text-gray-200">{person}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-950/50 to-red-950/50 border-2 border-orange-600 rounded-2xl p-8 text-center">
          <p className="text-2xl md:text-3xl font-black text-white mb-2">
            If you want to look like you run a massive online store
          </p>
          <p className="text-xl md:text-2xl text-orange-400 font-bold">
            without actually building one — this is for you.
          </p>
        </div>
      </div>
    </section>
  );
}
