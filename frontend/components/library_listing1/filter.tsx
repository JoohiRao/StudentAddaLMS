export default function Filter(){
    return (

        <div className="p-4 w-full lg:w-[30%] space-y-6">
            <div className="flex justify-between items-center">
              <div className="text-lg md:text-[19.65px] font-urbanist font-medium">
                Filter
              </div>
              <div className="hidden">Map</div>
            </div>

            {/* Location */}
            
            <div>
              <h1 className="font-urbanist font-medium text-[18px] mb-2">Location</h1>
              <input
                type="text"
                placeholder="All location"
                className="w-full px-3 py-2 rounded border border-black"
              />
            </div>

            {/* Seats */}
            <div>
              <h1 className="font-urbanist font-medium text-[18px] mb-2">Available Seats</h1>
              <div className="space-y-2">
                {["5+ seats", "10+ seats", "20+ seats"].map((seat, index) => (
                  <label key={index} className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-black rounded-sm appearance-none checked:bg-transparent checked:border-black"
                    />
                    <span className="text-sm font-urbanist">{seat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Membership */}
            <div>
              <h1 className="font-urbanist font-medium text-[18px] mb-2">Membership</h1>
              <div className="space-y-2">
                {["Free", "Paid"].map((type, index) => (
                  <label key={index} className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-black rounded-sm appearance-none checked:bg-transparent checked:border-black"
                    />
                    <span className="text-sm font-urbanist">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <h1 className="font-urbanist font-medium text-[18px] mb-2">Rating</h1>
              <div className="space-y-1">
                {["3+", "4+"].map((rating, index) => (
                  <label key={index} className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-black rounded-sm appearance-none checked:bg-transparent checked:border-black"
                    />
                    <span className="text-sm font-urbanist">{rating}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>


    )
}