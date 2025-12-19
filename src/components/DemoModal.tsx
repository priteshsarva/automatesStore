import { X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const demoSites = [
     {
      title: 'watchpro3',
      url: 'https://watchpro3.vercel.app/',
      color: 'from-purple-600 to-pink-600',
    },
     {
      title: 'omni luxe',
      url: 'https://omniluxe-six.vercel.app/',
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Cynthia Ugwu',
      url: 'https://cynthia-ugwu-fawn.vercel.app/',
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Expert Fabrication',
      url: 'https://expertfabrication.vercel.app/',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Aqua Watch',
      url: 'https://aquawatch-front.vercel.app/',
      color: 'from-cyan-600 to-blue-600',
    },
    {
      title: 'Sole Style',
      url: 'https://sole-style-two.vercel.app/',
      color: 'from-orange-600 to-red-600',
    },
    {
      title: 'Times Keepers',
      url: 'http://timeskeepers.in/',
      color: 'from-amber-600 to-orange-600',
    },
    {
      title: 'Kicks Mania',
      url: 'https://www.kicksmania.co.in/',
      color: 'from-green-600 to-emerald-600',
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      <div className="scrollbar-hide relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-black border-2 border-orange-600 rounded-2xl p-8 md:p-12 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-800 rounded-lg transition-all duration-200"
        >
          <X className="w-8 h-8 text-gray-400 hover:text-white" />
        </button>

        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-black mb-3">Live Demo Sites</h2>
          <p className="text-xl text-gray-400">
            See what your automated store could look like. These are real stores powered by our technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoSites.map((site, index) => (
            <a
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${site.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-transparent p-8 h-full flex flex-col justify-between transition-all duration-300">
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-white transition-colors">
                    {site.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-100 transition-colors mb-4">
                    Click to view live site
                  </p>
                </div>

                <div className="flex items-center gap-2 text-orange-400 group-hover:text-white font-bold transition-colors">
                  Visit <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 p-6 bg-orange-950/30 border border-orange-600/50 rounded-xl">
          <p className="text-center text-gray-300">
            Impressed by these examples?{' '}
            <span className="text-orange-400 font-bold">
              Get your own automated store now by clicking the WhatsApp button below.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
