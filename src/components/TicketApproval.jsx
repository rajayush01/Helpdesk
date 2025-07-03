import React, { useState } from 'react';
import { Search, Check, X, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

const TicketApproval = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [entriesPerPage, setEntriesPerPage] = useState(10);

    // Sample ticket data matching the image
    const tickets = [
        {
            id: 1234,
            subject: 'Login issue',
            category: 'Access Issue',
            priority: 'High',
            date: '13/08/21',
            approved: true,
            rejected: false
        },
        {
            id: 1124,
            subject: 'New ticket issue',
            category: 'Access Issue',
            priority: 'Medium',
            date: '14/08/21',
            approved: true,
            rejected: false
        },
        {
            id: 1224,
            subject: 'New request',
            category: 'Feedback',
            priority: 'Low',
            date: '13/08/21',
            approved: true,
            rejected: false
        },
        {
            id: 1244,
            subject: 'Ticket submission',
            category: 'Ticketing',
            priority: 'High',
            date: '14/08/21',
            approved: true,
            rejected: false
        },
        {
            id: 1114,
            subject: 'Login issue',
            category: 'Access Issue',
            priority: 'High',
            date: '3/08/21',
            approved: true,
            rejected: false
        }
    ];

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High':
                return 'text-red-600 font-medium';
            case 'Medium':
                return 'text-orange-600 font-medium';
            case 'Low':
                return 'text-green-600 font-medium';
            default:
                return 'text-gray-600';
        }
    };

    const filteredTickets = tickets.filter(ticket =>
        ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.id.toString().includes(searchTerm)
    );

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white">
            <h1 className="text-2xl font-bold mb-8">Ticket Approval</h1>
            
            {/* Search and Controls */}
            <div className="flex items-center justify-between mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Find ticket"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-4 pr-10 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                    />
                    <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
                </div>
                
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">Show:</span>
                    <select
                        value={entriesPerPage}
                        onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}
                        className="px-3 py-1 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                    <span className="text-sm text-gray-700">Entries</span>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="text-left p-4 font-medium text-gray-700">Ticket No.</th>
                            <th className="text-left p-4 font-medium text-gray-700">Subject</th>
                            <th className="text-left p-4 font-medium text-gray-700">Category</th>
                            <th className="text-left p-4 font-medium text-gray-700">Priority</th>
                            <th className="text-left p-4 font-medium text-gray-700">Date</th>
                            <th className="text-left p-4 font-medium text-gray-700">Action</th>
                            <th className="text-left p-4 font-medium text-gray-700">Assign to</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTickets.map((ticket, index) => (
                            <tr 
                                key={ticket.id} 
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 border-b border-gray-200`}
                            >
                                <td className="p-4">
                                    <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
                                        {ticket.id}
                                    </span>
                                </td>
                                <td className="p-4 text-gray-700">{ticket.subject}</td>
                                <td className="p-4 text-gray-700">{ticket.category}</td>
                                <td className="p-4">
                                    <span className={getPriorityColor(ticket.priority)}>
                                        {ticket.priority}
                                    </span>
                                </td>
                                <td className="p-4 text-gray-700">{ticket.date}</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <button className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                                            <Check size={16} className="text-white" />
                                        </button>
                                        <button className="w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                                            <X size={16} className="text-white" />
                                        </button>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <button className="w-8 h-8 bg-gray-500 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors">
                                        <Mail size={16} className="text-white" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-700">
                    Showing 1 to 5 of 5 entries
                </div>
                <div className="flex items-center gap-1">
                    <button className="px-3 py-1 text-gray-400 hover:text-gray-600 flex items-center">
                        <ChevronLeft size={16} />
                        <ChevronLeft size={16} className="-ml-2" />
                    </button>
                    <button className="px-3 py-1 text-gray-400 hover:text-gray-600">
                        <ChevronLeft size={16} />
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                    <button className="px-3 py-1 text-gray-400 hover:text-gray-600">
                        <ChevronRight size={16} />
                    </button>
                    <button className="px-3 py-1 text-gray-400 hover:text-gray-600 flex items-center">
                        <ChevronRight size={16} />
                        <ChevronRight size={16} className="-ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketApproval;