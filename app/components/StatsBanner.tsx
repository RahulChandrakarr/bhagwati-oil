export default function StatsBanner() {
  const stats = [
    {
      number: "40+",
      text: "Years of Excellence",
    },
    {
      number: "5M+",
      text: "Happy Families",
    },
    {
      number: "100%",
      text: "Natural & Pure",
    },
    {
      number: "15+",
      text: "Industry Awards",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div
          className="rounded-xl shadow-lg p-8 md:p-12 lg:p-16"
          style={{ backgroundColor: "#556B2F" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <span className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-2">
                  {stat.number}
                </span>
                <span className="text-white text-base md:text-lg lg:text-xl font-normal">
                  {stat.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

