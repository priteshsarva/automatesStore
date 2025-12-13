import { Zap, RefreshCw, TrendingUp, Star, Search } from 'lucide-react';

export default function WhyYouNeed() {
  const benefits = [
    { icon: Zap, text: 'Pull thousands of products automatically' },
    { icon: RefreshCw, text: 'Update every minute' },
    { icon: TrendingUp, text: 'Show fresh stock, fresh prices, fresh content' },
    { icon: Star, text: 'Impress customers and Google (SEO boost)' },
    { icon: Search, text: 'Look like a full-scale marketplace — without the cost' },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Why You Need This
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            Because doing everything manually is <span className="text-red-500 font-bold">killing your time</span> and <span className="text-red-500 font-bold">killing your sales</span>.
          </p>
          <p className="text-lg text-orange-400 font-semibold">
            Your competitors already automate — that's why they look bigger, fresher, and more legit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <benefit.icon className="w-12 h-12 text-orange-500 mb-4" />
              <p className="text-lg font-semibold text-gray-200">{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-orange-600/20 to-red-600/20 border-2 border-orange-500 rounded-2xl px-8 py-6">
            <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              You want an unfair advantage? This is it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
