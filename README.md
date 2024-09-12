
# parcelLab Delivery Tracking Application

This is a **parcelLab** application built with **React** and **TypeScript** that allows users to track the delivery status of an order. It displays various details such as delivery status, associated articles, checkpoints, and more. The API is mocked using **Node.js** and **Express**, which provides the data for the app.

## Features
- Track orders by order number and zip code.
- Displays various order details such as delivery status, checkpoints, and articles.
- Responsive UI built using **Tailwind CSS**.
- Error handling for invalid order numbers or zip codes.
- Mocked API using **Express** to simulate real-world delivery tracking.

## Technologies Used
- **React** (with TypeScript) for the frontend.
- **Node.js** and **Express** for the backend (mocked API).
- **Tailwind CSS** for styling.
- **Jest** and **React Testing Library** for testing.

## Setup Instructions

To run this application locally, you will need to set up and run both the **Node.js (Express)** server and the **React** frontend. Follow these steps:

### Prerequisites
- Ensure you have **Node.js** and **npm** installed on your machine. You can download them from [Node.js official site](https://nodejs.org/).

### Step 1: Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/samimagine/parcellab.git
cd parcellab
```

### Step 2: Set Up and Run the Node.js API

1. Navigate to the `api` folder:
   ```bash
   cd src/api
   ```

2. Install the necessary dependencies for the Node.js API:
   ```bash
   npm install
   ```

3. Start the mocked API server:
   ```bash
   npm start-api
   ```

   The Express server will start on **http://localhost:3003**, serving mocked order data for the React app to consume.

### Step 3: Set Up and Run the React App

1. Navigate to the `parcellab` folder.

2. Install the dependencies for the React app:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

   The React app will now run on **http://localhost:3000**.

### Step 4: Access the App

1. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

2. Enter an **Order Number** and **Zip Code** to track the order's status.

    - If the order exists, the app will display the details of the delivery, including delivery status, articles, and checkpoints.
    - If no match is found, an error page will show informing the user of the issue.

### Step 5: EXTRA

- If running the API server is not possible, it will make a fallback call to the mock data stored in the `src/api/orders.json` file.


## API Overview

The mock API simulates basic order tracking data and is accessible at **http://localhost:3003**. Below are the key endpoints:

- **GET /orders/:orderNumber?zip=:zipCode**: Fetches the order details based on the provided order number and zip code.

### Sample Response:
```json
{
  "_id": "1",
  "courier": "dhl",
  "tracking_number": "AB20221219",
  "created": "2023-01-01T08:20:30Z",
  "updated": "2023-01-02T14:10:30Z",
  "checkpoints": [
    {
      "status_details": "Your package was registered in our system by the sender.",
      "event_timestamp": "2023-01-02T14:10:30Z",
      "status": "Registered",
      "country_iso3": "USA",
      "city": "Knoxville"
    }
  ],
  "delivery_info": {
    "articles": [
      {
        "articleNo": "AB20224",
        "articleName": "iPhone Pro 128GB",
        "articleImageUrl": "https://images.unsplash.com/photo-1603625953304-97b6e41336b5",
        "quantity": 1,
        "price": 1299.00
      }
    ],
    "orderNo": "0000RTAB1",
    "order_date": "2023-01-01",
    "recipient": "Ollie Wright",
    "recipient_notification": "Ollie",
    "email": "oliver.wright@parcellab.com",
    "street": "14 Buck Way",
    "city": "Horsham",
    "region": "US-IL",
    "timezone": "America/Chicago",
    "announced_delivery_date": "2023-01-05"
  },
  "destination_country_iso3": "USA",
  "zip_code": "60156"
}
```

## Running Tests

The app includes unit tests to ensure the components work as expected. To run the tests, use the following command in the `parcellab` or `react-app` folder:

```bash
npm test
```

## Project Structure

```bash
parcellab/
│   ├── public/                  # Public assets
│   ├── src/   
│   │   ├── api/                 # Node.js Express server for mocked API
│   │   │   ├── orders.json      # Mock data for orders
│   │   │   ├── server.js        # Express server configuration# Node.js Express server for mocked API
│   │   ├── components/          # Reusable components (e.g., Button, Card, etc.)
│   │   ├── pages/               # React pages (TrackingFormPage, ErrorPage, etc.)
│   │   ├── App.tsx              # Main app component with routing
│   │   └── index.tsx            # Entry point for React
│   └── package.json             # Frontend dependencies
├── README.md                    # Project instructions
├── tailwind.config.js           # Tailwind CSS configuration
└── .gitignore                   # Git ignore configuration
```

## Conclusion

This parcelLab delivery tracking app provides a user-friendly way to track orders by leveraging a mocked API. The project is built with a scalable architecture using React and TypeScript, making it easy to extend and maintain.

Feel free to reach out for questions or contributions!
