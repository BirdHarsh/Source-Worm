// app/feed/page.tsx
'use client';

const sources = [
  {
    id: 1,
    title: 'BBC News',
    category: 'News',
    description: 'Reliable global news coverage with minimal bias.',
    bias: 'Neutral',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Harvard Research Portal',
    category: 'Academic',
    description: 'Peer-reviewed papers from Harvard University.',
    bias: 'Academic-leaning',
    rating: 4.9,
  },
  {
    id: 3,
    title: 'YouTube: Kurzgesagt',
    category: 'Video',
    description: 'Animated explainers on science and philosophy.',
    bias: 'Informational',
    rating: 4.7,
  },
];

export default function SourceFeed() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-10">Source Feed</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sources.map((source) => (
          <div key={source.id} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-all">
            <h2 className="text-xl font-semibold mb-2">{source.title}</h2>
            <span className="text-sm text-blue-600 font-medium">{source.category}</span>
            <p className="text-sm text-gray-700 mt-2">{source.description}</p>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <span>Bias: {source.bias}</span>
              <span>⭐ {source.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
