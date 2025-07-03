import React from 'react';
import { Headphones, X } from 'lucide-react';
import graph from '../assets/graph.png';
import speak1 from '../assets/speak1.png';
import speak2 from '../assets/speak2.png';

const DashboardCards = () => {
  return (
    <div className="flex gap-4 p-6 bg-gray-50 w-full">
      {/* Chart Card */}
      <div className="bg-[#55D6C2] rounded-xl p-8 flex items-center justify-center flex-1 max-w-lg">
        <div className="flex items-end gap-2">
          <img src={graph} alt="graph" className='h-56 w-56'/>
        </div>
      </div>

      {/* Right Side Container */}
      <div className="flex flex-col gap-4 flex-1">
        {/* Team Cards Row */}
        <div className="flex gap-4">
          {/* Technical Support Card */}
          <div className="bg-[#55D6C2] rounded-xl p-4 text-center flex-1 min-h-24">
            <div className="flex justify-center mb-2">
              <img src={speak1} alt="speak" />
            </div>
            <div className="text-black font-bold text-xl">3</div>
            <div className="text-black text-sm font-medium">Technical</div>
            <div className="text-black text-sm font-medium">Supports</div>
          </div>

          {/* Operation Team Card */}
          <div className="bg-[#55D6C2] rounded-xl p-4 text-center flex-1 min-h-24">
            <div className="flex justify-center mb-2 relative">
              <div className="relative">
                <img src={speak2} alt="speak" />
              </div>
            </div>
            <div className="text-black font-bold text-xl">4</div>
            <div className="text-black text-sm font-medium">Operation</div>
            <div className="text-black text-sm font-medium">Team</div>
          </div>
        </div>

        {/* Customer Feedback Card */}
        <div className="bg-[#55D6C2] rounded-xl p-4 text-center">
          <div className="text-black font-bold text-base mb-2">Customer Feedback</div>
          <div className="flex justify-center gap-1">
            <span className="text-white text-xl">★</span>
            <span className="text-white text-xl">★</span>
            <span className="text-white text-xl">★</span>
            <span className="text-white text-xl">★</span>
            <span className="text-white text-xl">☆</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;