import React from "react";

function DataStatics() {
  const stats = [
    { title: "Total Users", value: 1200 },
    { title: "Active Users", value: 860 },
    { title: "New Registrations", value: 45 },
    { title: "Reports Generated", value: 230 },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <div key={index} className="bg-white shadow rounded-xl p-4 text-center">
          <h3 className="text-gray-500 text-sm">{item.title}</h3>
          <p className="text-2xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default DataStatics;
