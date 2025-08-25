const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

export default function ServicesPageCardsSection(theme) {
  const ThemeSet = theme.theme;
  return (
    <>
      <div
        className={`py-15 sm:py-20 Exo ${
          ThemeSet === "dark" ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt
                  className={` text-lg ${
                    ThemeSet === "dark" ? "text-white" : "text-gray-600"
                  }`}
                >
                  {stat.name}
                </dt>
                <dd
                  className={`order-first text-3xl font-semibold tracking-tight sm:text-5xl ${
                    ThemeSet === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
