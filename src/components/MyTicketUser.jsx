import React, { useState } from 'react';
import { Search, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const MyTicketUser = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Sample ticket data
    const tickets = [
        {
            id: 1234,
            subject: 'Login issue',
            status: 'In Progress',
            supportBy: 'Tech support',
            date: '13/08/21',
            rate: 0,
            name: 'John Doe',
            dept: 'IT Department',
            title: 'Cannot access user account',
            description: 'User unable to login to the system after password reset',
            category: 'Technical',
            type: 'Bug',
            priority: 'High',
            attachment: 'screenshot.png'
        },
        {
            id: 1124,
            subject: 'New ticket issue',
            status: 'On hold',
            supportBy: 'Operation Team',
            date: '14/08/21',
            rate: 0,
            name: 'Jane Smith',
            dept: 'HR Department',
            title: 'System access request',
            description: 'New employee needs system access permissions',
            category: 'Access',
            type: 'Request',
            priority: 'Medium',
            attachment: 'none'
        },
        {
            id: 1224,
            subject: 'New request',
            status: 'Closed',
            supportBy: 'Tech support',
            date: '13/08/21',
            rate: 4,
            name: 'Mike Johnson',
            dept: 'Finance Department',
            title: 'Software installation',
            description: 'Request for new software installation on workstation',
            category: 'Software',
            type: 'Request',
            priority: 'Low',
            attachment: 'requirements.pdf'
        },
        {
            id: 1244,
            subject: 'Ticket submission',
            status: 'In Progress',
            supportBy: 'Operation Team',
            date: '14/08/21',
            rate: 0,
            name: 'Sarah Wilson',
            dept: 'Marketing Department',
            title: 'Email configuration',
            description: 'Need help configuring email client settings',
            category: 'Configuration',
            type: 'Support',
            priority: 'Medium',
            attachment: 'config_details.txt'
        },
        {
            id: 1114,
            subject: 'Login issue',
            status: 'In Progress',
            supportBy: 'Tech support',
            date: '3/08/21',
            rate: 0,
            name: 'David Brown',
            dept: 'Sales Department',
            title: 'Password reset required',
            description: 'User forgot password and needs reset assistance',
            category: 'Account',
            type: 'Support',
            priority: 'High',
            attachment: 'none'
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'In Progress':
                return 'bg-green-500 text-white';
            case 'On hold':
                return 'bg-blue-800 text-white';
            case 'Closed':
                return 'bg-gray-600 text-white';
            default:
                return 'bg-gray-500 text-white';
        }
    };

    const renderStars = (rating) => {
        return (
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        size={16}
                        className={rating >= star ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}
                    />
                ))}
            </div>
        );
    };

    const handleTicketClick = (ticket) => {
        setSelectedTicket(ticket);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedTicket(null);
    };

    const filteredTickets = tickets.filter(ticket =>
        ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.id.toString().includes(searchTerm)
    );

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white">
            <h1 className="text-3xl font-bold text-center mb-8">List of Ticket</h1>
            
            {/* Search and Controls */}
            <div className="flex items-center justify-between mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Find ticket"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-4 pr-10 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                    />
                    <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
                </div>
                
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">Show:</span>
                    <select
                        value={entriesPerPage}
                        onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}
                        className="px-3 py-1 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                    <span className="text-sm text-gray-700">Entries</span>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="text-left p-3 font-medium text-gray-700 border-b">Ticket No.</th>
                            <th className="text-left p-3 font-medium text-gray-700 border-b">Subject</th>
                            <th className="text-left p-3 font-medium text-gray-700 border-b">Status</th>
                            <th className="text-left p-3 font-medium text-gray-700 border-b">Support by</th>
                            <th className="text-left p-3 font-medium text-gray-700 border-b">Date</th>
                            <th className="text-left p-3 font-medium text-gray-700 border-b">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTickets.map((ticket, index) => (
                            <tr 
                                key={ticket.id} 
                                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 cursor-pointer`}
                                onClick={() => handleTicketClick(ticket)}
                            >
                                <td className="p-3 border-b">
                                    <span className="text-blue-600 underline">{ticket.id}</span>
                                </td>
                                <td className="p-3 border-b">{ticket.subject}</td>
                                <td className="p-3 border-b">
                                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(ticket.status)}`}>
                                        {ticket.status}
                                    </span>
                                </td>
                                <td className="p-3 border-b text-center">{ticket.supportBy}</td>
                                <td className="p-3 border-b">{ticket.date}</td>
                                <td className="p-3 border-b">{renderStars(ticket.rate)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-700">
                    Showing 1 to {filteredTickets.length} of {filteredTickets.length} entries
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 flex items-center">
                        <ChevronLeft size={16} />
                        <ChevronLeft size={16} className="-ml-2" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                        <ChevronLeft size={16} />
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                        <ChevronRight size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 flex items-center">
                        <ChevronRight size={16} />
                        <ChevronRight size={16} className="-ml-2" />
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && selectedTicket && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-2xl mx-4">
                        <h2 className="text-xl font-bold text-center mb-6">Ticket Details</h2>
                        
                        <div className="space-y-3">
                            <div>
                                <span className="font-medium">Ticket No:</span> {selectedTicket.id}
                            </div>
                            <div>
                                <span className="font-medium">Date:</span> {selectedTicket.date}
                            </div>
                            <div>
                                <span className="font-medium">Name:</span> {selectedTicket.name}
                            </div>
                            <div>
                                <span className="font-medium">Dept:</span> {selectedTicket.dept}
                            </div>
                            <div>
                                <span className="font-medium">Title:</span> {selectedTicket.title}
                            </div>
                            <div>
                                <span className="font-medium">Description:</span> {selectedTicket.description}
                            </div>
                            <div>
                                <span className="font-medium">Category:</span> {selectedTicket.category}
                            </div>
                            <div>
                                <span className="font-medium">Type:</span> {selectedTicket.type}
                            </div>
                            <div>
                                <span className="font-medium">Priority:</span> {selectedTicket.priority}
                            </div>
                            <div>
                                <span className="font-medium">Status:</span> {selectedTicket.status}
                            </div>
                            <div>
                                <span className="font-medium">Attachment:</span> {selectedTicket.attachment}
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            
                            <button
                                onClick={closeModal}
                                className="px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyTicketUser;