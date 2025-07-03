import React, { useState } from 'react';
import { Paperclip } from 'lucide-react';
import recaptcha from "../assets/reCaptcha.png";
const NewTicket = () => {
    const [ticketNum, setTicketNum] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [dept, setDept] = useState("");
    const [subject, setSubject] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [priority, setPriority] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        console.log({
            ticketNum,
            date,
            name,
            dept,
            subject,
            category,
            type,
            priority,
            description
        });
    };

    return (
        <div className="max-w-7xl mx-auto p-2 px-8 bg-white">
            <h1 className="text-3xl font-bold text-center mb-8">Create New Ticket</h1>
            
            <div className="space-y-6">
                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className='flex flex-row items-center gap-4'>
                        <label className="text-sm font-medium text-gray-700 w-24">
                            Ticket No.
                        </label>
                        <input
                            type="text"
                            value={ticketNum}
                            onChange={(e) => setTicketNum(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <label className="text-sm font-medium text-gray-700 w-[120px]">
                            Date:
                        </label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className='flex flex-row items-center gap-4'>
                        <label className="text-sm font-medium text-gray-700 w-20">
                            Name:
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <label className="text-sm font-medium text-gray-700 w-24">
                            Department:
                        </label>
                        <input
                            type="text"
                            value={dept}
                            onChange={(e) => setDept(e.target.value)}
                            className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Subject Row */}
                <div className='flex flex-col gap-4'>
                    <label className="text-sm font-medium text-gray-700 w-20">
                        Subject:
                    </label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Category and Description Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <div className='flex flex-col gap-4'>
                            <label className="text-sm font-medium text-gray-700 w-20">
                                Category:
                            </label>
                            <input
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        
                        <div className='flex flex-col gap-4'>
                            <label className="text-sm font-medium text-gray-700 w-20">
                                Type:
                            </label>
                            <input
                                type="text"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        
                        <div className='flex flex-col gap-4'>
                            <label className="text-sm font-medium text-gray-700 w-20">
                                Priority:
                            </label>
                            <input
                                type="text"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-4">
                            Description:
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={8}
                            className="w-full px-3 py-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            placeholder="Enter ticket description..."
                        />
                        <button
                            type="button"
                            className="absolute bottom-3 right-3 p-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            <Paperclip size={16} />
                        </button>
                    </div>
                </div>

                {/* reCAPTCHA and Submit */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
                    <div className="flex flex-row justify-between items-center space-x-8 border border-gray-300 p-3 rounded-md">
                        <div className='flex items-center gap-2'>
                            <input
                            type="checkbox"
                            id="notRobot"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="notRobot" className="text-lg font-medium text-gray-700">
                            I'm not a robot
                        </label>
                        </div>
                        
                        <div className="text-xs text-gray-500 flex flex-col items-center">
                            <div>
                                <div><img src={recaptcha} alt="recaptcha" className='h-12'/></div>
                            </div>
                            <div className='text-xs'>Privacy-Terms</div>
                        </div>
                    </div>
                    
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-8 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewTicket;