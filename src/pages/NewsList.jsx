import React from "react";
import logo6 from "../images/ProvincialDevelpmentCouncil.png";

const newsData = [
  {
    id: 1,
    title: "Community Event 2026",
    date: "2026-01-28",
    image: logo6,
    link: "https://www.facebook.com/share/p/1KueBcFPb8/",
  },
  {
    id: 2,
    title: "New Development Updates",
    date: "2026-01-27",
    image: logo6,
    link: "https://example.com/news2",
  },
  {
    id: 3,
    title: "Local Project Announcements",
    date: "2026-01-26",
    image: logo6,
    link: "https://example.com/news3",
  },
  {
    id: 4,
    title: "Local Project Announcements",
    date: "2026-01-26",
    image: logo6,
    link: "https://example.com/news3",
  },
  {
    id: 5,
    title: "Local Project Announcements",
    date: "2026-01-26",
    image: logo6,
    link: "https://example.com/news3",
  },
  {
    id: 6,
    title: "Local Project Announcements",
    date: "2026-01-26",
    image: logo6,
    link: "https://example.com/news3",
  },
];

const NewsList = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
      {newsData.slice(0, 3).map((news) => (
        <div
          key={news.id}
          className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
        >
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-lg mb-2">{news.title}</h2>
            <p className="text-gray-500 text-sm mb-2">{news.date}</p>
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
