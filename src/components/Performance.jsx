import React, { useState } from 'react';
import { User, Star } from 'lucide-react';
import profile from '../assets/profile.png';

const Performance = () => {
    const operations = [
        { id: 1, name: 'Operation Name 1' },
        { id: 2, name: 'Operation Name 2' },
        { id: 3, name: 'Operation Name 3' }
    ];

    return (
        <div className="p-6 ">
            <h1 className="text-2xl font-bold mb-6 text-black">Performance</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="bg-white rounded-lg p-6 flex items-center space-x-4 shadow-sm">
                        <div className="w-40 h-40 bg-[#6A6767] bg-opacity-30 rounded-2xl flex items-center justify-center">
                            <img src={profile} alt="profile" className='h-24' />
                        </div>
                        <div>
                            <div className="font-semibold text-2xl text-black">Operation Name</div>
                            <div className='bg-[#6A6767] bg-opacity-30 text-black rounded-2xl p-5 px-10 mt-10'>
                                <p className="text-sm">Contact No: 0123456789</p>
                                <p className="text-sm">Department: ABC</p>
                            </div>

                        </div>
                    </div>

                    {/* Performance Stats */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="font-semibold mb-4 text-black">Total Ticket Handle</h4>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Total</span>
                                <span className="text-2xl font-bold text-black">5</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Ticket Closed</span>
                                <span className="text-2xl font-bold text-black">2</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Ticket Pending</span>
                                <span className="text-2xl font-bold text-black">1</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Ticket in progress</span>
                                <span className="text-2xl font-bold text-black">2</span>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="mt-6">
                            <div className="text-sm text-gray-600 mb-2">Rating</div>
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Operation List */}
                <div className="space-y-3">
                    {operations.map((operation) => (
                        <div key={operation.id} className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm">
                            <div className="flex items-center space-x-3">
                                <div className="w-20 h-20 bg-[#6A6767] bg-opacity-30 rounded-2xl flex items-center justify-center">
                                    <img src={profile} alt="profile" className='h-12' />
                                </div>
                                <span className="font-medium text-black">{operation.name}</span>
                            </div>
                            <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                View details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Performance;