import { X } from 'lucide-react';

export default function WhyItBeats() {
  const eliminated = [
    'No inventory',
    'No payment gateway headaches',
    'No coding',
    'No tech team needed',
    'No constant product uploads',
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          Why This Beats Traditional eCommerce
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {eliminated.map((item, index) => (
            <div
              key={index}
              className="bg-red-950/30 border-2 border-red-600/50 rounded-xl p-6 flex items-center gap-4"
            >
              <X className="w-8 h-8 text-red-500 flex-shrink-0" />
              <span className="text-xl font-bold text-gray-300 line-through">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-950/50 to-emerald-950/50 border-2 border-green-600 rounded-2xl p-12 text-center">
          <p className="text-3xl md:text-4xl font-black mb-4">
            Just <span className="text-green-400">traffic</span> → <span className="text-blue-400">clicks</span> → <span className="text-orange-400">WhatsApp</span> → <span className="text-yellow-400">sales</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
