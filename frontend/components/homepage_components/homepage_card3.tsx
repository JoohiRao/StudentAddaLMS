
type CardItem = {
  title : string;
  description : string;
  action: string;
}

type Card3Props = {
  onlyFirstRow ?: Boolean;
  onlyRemaining ?: Boolean;
}

export default function Card3({ onlyFirstRow = false, onlyRemaining = false }: Card3Props) {
  const cards: CardItem[] = [
    {
      title: "Pomodoro Timer",
      description:
        "Stay focused with structured breaks to boost productivity while studying or working.",
      action: "Learn More",
    },
    {
      title: "Progress Tracker",
      description:
        "Track your daily, weekly, and monthly study goals with visual charts and reminders.",
      action: "Learn More",
    },
    {
      title: "Library Seat Booking",
      description:
        "Book your favorite spot in advance and avoid the hassle of unavailability.",
      action: "Learn More",
    },
    {
      title: "Digital Library",
      description:
        "Access thousands of books, research papers, and resources anytime, anywhere.",
      action: "Learn More",
    },
    {
      title: "Study Planner",
      description:
        "Organize your study sessions effectively with customizable planners.",
      action: "Learn More",
    },
  ];

  // If neither flag is set, show all cards
  const showAll = !onlyFirstRow && !onlyRemaining;
  
  const firstRow = cards.slice(0, 2); // First 2 cards
  const secondRow = cards.slice(2); // Remaining cards

  return (
    <div className="w-full space-y-12">
      {/* First Row - 2 Cards */}
      {(onlyFirstRow || showAll) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {firstRow.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform"
            >
              <div className="w-full h-1 bg-blue-600 rounded-full mb-6"></div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{card.title}</h2>
              <p className="text-gray-600 mb-4 text-sm">{card.description}</p>
              <button className="text-blue-600 font-medium hover:underline cursor-pointer text-sm flex items-center">
                {card.action}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Second Row - Remaining Cards */}
      {(onlyRemaining || showAll) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {secondRow.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform"
            >
              <div className="w-full h-1 bg-blue-600 rounded-full mb-6"></div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{card.title}</h2>
              <p className="text-gray-600 mb-4 text-sm">{card.description}</p>
              <button className="text-blue-600 font-medium hover:underline cursor-pointer text-sm flex items-center">
                {card.action}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
