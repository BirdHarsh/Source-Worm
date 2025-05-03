import React from "react";
import Link from "next/link";

const categories = [
  {
    title: "News",
    description: "Stay updated with trusted news outlets and reports.",
    slug: "news",
    color: "bg-blue-100 text-blue-800"
  },
  {
    title: "Academic",
    description: "Peer-reviewed journals and research papers.",
    slug: "academic",
    color: "bg-green-100 text-green-800"
  },
  {
    title: "Opinions",
    description: "Editorials, blogs, and expert commentary.",
    slug: "opinions",
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    title: "Videos",
    description: "Documentaries, lectures, and educational videos.",
    slug: "videos",
    color: "bg-red-100 text-red-800"
  },
  {
    title: "Podcasts",
    description: "Expert discussions and topic deep-dives.",
    slug: "podcasts",
    color: "bg-purple-100 text-purple-800"
  },
  {
    title: "Data Sources",
    description: "Raw datasets, statistics, and government records.",
    slug: "data-sources",
    color: "bg-gray-100 text-gray-800"
  },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore Source Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.slug} href={`/explore/${category.slug}`}>
            <div
              className={`rounded-2xl shadow-md p-6 hover:shadow-xl transition-all cursor-pointer ${category.color}`}
            >
              <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
              <p className="text-sm">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;
