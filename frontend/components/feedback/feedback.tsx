import Image from 'next/image';

// Sample feedback data
const feedbackData = [
  {
    title: "How to effectively use the Pomodoro Technique for long study sessions?",
    description: "Pomodoro is a time management method that can help you maintain focus and stamina during study marathons...",
    tags: ["#StreakGoals", "#PomodoroWins"],
    username: "@rahulsharma",
    answers: 8,
    timeAgo: "2h ago",
    topTag: "Trending",
  },
  {
    title: "Best tools to track daily study habits?",
    description: "Explore tools like Notion, Habitica, or Forest to track and gamify your study goals efficiently.",
    tags: ["#StudyTools", "#TrackProductivity"],
    username: "@ananyaverma",
    answers: 5,
    timeAgo: "1d ago",
    topTag: "Hot",
  },
  {
    title: "How to stay consistent during exam season?",
    description: "Staying consistent is key during exams. Break your schedule into realistic targets and track small wins.",
    tags: ["#ExamPrep", "#Consistency"],
    username: "@yusufali",
    answers: 12,
    timeAgo: "3h ago",
    topTag: "Popular",
  },
];

export default function FeedbackList() {
  return (
    <div className="mt-20 px-4  sm:px-6 lg:px-8 w-[80%] flex flex-col gap-10 items-center">
      {feedbackData.map((item, idx) => (
        <div key={idx} className="w-full  md:w-[90%] bg-[#EFEAE5]  p-6 rounded-lg shadow-md space-y-4 relative">
          {/* Top Tag */}
          <div className="inline-block  border absolute right-2 border-black text-sm px-3 py-1 rounded-full font-medium">
            {item.topTag}
          </div>

          {/* Title & Description */}
          <div>
            <h1 className="text-lg font-semibold mb-2">{item.title}</h1>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <div
                key={i}
                className="bg-white border border-black text-sm px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-gray-300">
            <div className="flex items-center gap-3">
              <Image src="/forums/dp.png" width={28} height={28} alt="user" className="rounded-full" />
              <p className="text-sm text-gray-600">
                Asked by <span className="font-medium">{item.username}</span>
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Image src="/forums/message.png" width={16} height={16} alt="answers" />
                <p>{item.answers} Answers</p>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/forums/time.png" width={16} height={16} alt="time" />
                <p>{item.timeAgo}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
