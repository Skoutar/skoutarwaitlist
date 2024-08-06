
const Dropdown = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className="w-[400px] p-6 bg-white rounded shadow-md mt-4">
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your full name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your email address"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                        Country
                    </label>
                    <input
                        type="text"
                        id="country"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your country"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activities">
                        Enter Activities
                    </label>
                    <input
                        type="text"
                        id="activities"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter activities"
                    />
                </div>
                <button type="submit" className="w-full p-2 bg-[#6200EE] hover:bg-[#49237e] text-white rounded">
                Join Waitlist                
                </button>
            </form>
        </div>
    );
};

export default Dropdown;
