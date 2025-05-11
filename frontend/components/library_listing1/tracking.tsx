'use client'
import { useState } from 'react'

export default function Tracking(){
    const [selectedStep, setSelectedStep] = useState(1);
    return (
         <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl mx-auto p-4 rounded-lg space-y-4 sm:space-y-0 sm:space-x-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <button
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          selectedStep >= step ? 'bg-[#824800] text-white' : 'bg-gray-200 text-gray-500'
                        }`}
                        onClick={() => {
                          if (step === 1 || selectedStep >= step - 1) {
                            setSelectedStep(step);
                          }
                        }}
                      >
                        {step}
                      </button>
                      <p className={`ml-2 font-urbanist font-semibold text-[20.87px] leading-[24.66px] tracking-[0.17px] ${
                        selectedStep >= step ? 'text-[#824800]' : 'text-gray-500'
                      }`}>
                        {step === 1 ? 'Choose Seat' : step === 2 ? 'Booking Details' : 'Payment'}
                      </p>
        
                      {step !== 3 && (
                        <div className="hidden sm:block flex-1 mx-2">
                          <div className={`h-1 w-full ${selectedStep > step ? 'bg-[#824800]' : 'bg-white'}`} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
    )
}