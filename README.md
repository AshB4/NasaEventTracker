🚀 NASA Event Tracker
Real-time insights into Earth's natural events, powered by NASA's EONET API.

🌐 Overview
NASA Event Tracker is a web application that visualizes natural events such as wildfires, storms, and volcanic activities on an interactive map. Leveraging NASA's EONET API, this tool provides users with up-to-date information on significant environmental occurrences worldwide.

🛠️ Features
Interactive Map Interface: Visual representation of natural events with intuitive navigation.

Event Filtering: Toggle between different event types (e.g., wildfires, storms, volcanoes) for focused insights.

Detailed Event Information: Click on event markers to access comprehensive details, including descriptions and sources.

Responsive Design: Optimized for various devices, ensuring accessibility on desktops, tablets, and smartphones.

🧰 Tech Stack
Frontend: React.js
Mapping: Google Maps API
Data Fetching: Axios
Styling: CSS3
Data Source: NASA EONET API

🚀 Getting Started
Clone the Repository:

bash
git clone https://github.com/AshB4/NasaEventTracker.git
cd NasaEventTracker
Install Dependencies:

bash
npm install

Obtain API Keys:

NASA EONET API: No key required.

Google Maps API: Obtain a key from Google Cloud Console.

Configure Environment Variables:

Create a .env file in the root directory and add your Google Maps API key:

env
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
Run the Application:

npm start
The application will be available at http://localhost:3000.

📌 Project Status
The NASA Event Tracker is a work in progress. Upcoming enhancements include:

Enhanced Filtering: Allow users to filter events by date and severity.

User Notifications: Implement alerts for new events in selected regions.

Performance Optimization: Improve loading times and responsiveness.

📄 License
This project is licensed under the MIT License.

🤝 Acknowledgements
NASA EONET API
Google Maps Platform

