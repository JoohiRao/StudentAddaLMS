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
    <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-3 sm:px-4 md:px-6 lg:px-8 
                    w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 
                    mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 items-center">
      {feedbackData.map((item, idx) => (
        <div key={idx} className="w-full flex flex-col items-center gap-4 sm:gap-6">
          {/* Feedback Card */}
          <div className="w-full bg-[#EFEAE5] p-4 sm:p-5 md:p-6 rounded-lg shadow-md space-y-3 sm:space-y-4 relative">
            {/* Top Tag */}
            <div className="inline-block border border-black text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium
                          absolute top-2 right-2 ">
              {item.topTag}
            </div>
            
            {/* Title & Description */}
            <div className="pt-2 sm:pt-0">
              <h1 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 pr-20">{item.title}</h1>
              <p className="text-gray-700 text-xs sm:text-sm">{item.description}</p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {item.tags.map((tag, i) => (
                <div
                  key={i}
                  className=" border border-black text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium"
                >
                  {tag}
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center 
                          gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-300">
              <div className="flex items-center gap-2 sm:gap-3">
                <Image 
                  src="/forums/dp.png" 
                  width={28} 
                  height={28} 
                  alt="user" 
                  className="rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" 
                />
                <p className="text-xs sm:text-sm text-gray-600">
                  Asked by <span className="font-medium">{item.username}</span>
                </p>
              </div>
              
              <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Image 
                    src="/forums/message.png" 
                    width={16} 
                    height={16} 
                    alt="answers" 
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4" 
                  />
                  <p>{item.answers} Answers</p>
                </div>
                <div className="flex items-center gap-1">
                  <Image 
                    src="/forums/time.png" 
                    width={16} 
                    height={16} 
                    alt="time" 
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4" 
                  />
                  <p>{item.timeAgo}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Advertisement after the card - Responsive sizing */}
          {idx === 0  && (
            <div className="w-full flex justify-center md:hidden">
              <div className="relative w-full max-w-[300px] h-[50px]">
                <Image 
                  src="/home/adv1.png" 
                  fill
                  alt="Advertisement 1" 
                  className="object-contain"
                />
              </div>
            </div>
          )}
          {idx === 1 && (
            <div className="w-full flex justify-center md:hidden">
              <div className="relative w-full max-w-[300px] h-[50px]">
                <Image 
                  src="/home/adv1.png" 
                  fill
                  alt="Advertisement 1" 
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}