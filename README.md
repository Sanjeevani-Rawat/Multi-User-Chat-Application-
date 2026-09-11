# Multi-User-Chat-Application 💬
A real-time, multi-user chat application built to support concurrent messaging, user authentication, and active session management.

# Multi-User Chat Application

A lightweight, real-time web application engineered to enable instantaneous, multi-user communication within a shared chat environment. Built using modern web technologies, this project bridges the gap between client-side responsiveness and server-side efficiency to deliver a seamless user experience reminiscent of modern instant messaging platforms. 

At the core of this application is Socket.io, which facilitates low-latency, bidirectional, and event-driven communication between the Node.js server and connected clients. Unlike traditional HTTP requests that rely on constant polling, this architecture utilizes persistent WebSockets. This allows for immediate message broadcasting, ensuring that when a user sends a message, it is instantly distributed to all active participants without perceptible delay. 

---

# Project Interface & Structure

Visual Overviews
Below are structural and interfacial views captured from the live application environment:


<img src="ChatApp Screenshots/3 Interface.jpeg" width="580" alt="ChatApp Screenshots > Screenshot 3"> 

---

# Core Features

* **Instant Messaging:** Uses **Node.js** and **Socket.io** to send messages and updates across the app immediately.
* **Join & Leave Alerts:** Automatically posts a message in the chat room to let everyone know when a user joins or leaves.
* **Auto-Scrolling:** Automatically scrolls down to the newest message so you do not have to scroll by hand during a conversation.
* **Sound Effects:** Plays a clear audio alert when a new message arrives so you never miss a notification.
* **Smart Organization:** Keeps the server files (`nodeServer`) completely separate from the design files (`css`, `js`), making the code clean and professional.
* **Custom Styling:** Features custom chat bubbles and clean fonts to create a modern, user-friendly messaging dashboard.

---

# Tech Stack

* **Frontend:** HTML5, CSS3, Native JavaScript (DOM Manipulation, Socket.io-client)
* **Backend:** Node.js, Express (Routing & Static File Hosting)
* **Real-Time Engine:** Socket.io (WebSocket Protocol Wrapper)

---

# Getting Started

Follow these steps to run the application locally on your device:

# Prerequisites
Make sure you have [Node.js] installed on your machine.

### Installation & Execution
1. Clone this repository down to your computer.
2. Open your terminal and navigate into the `nodeServer` directory:
   ```bash
   cd nodeServer
   ```
3. Install the required Node modules specified in your configuration file:
   ```bash
   npm install
   ```
4. Start your chat server engine:
   ```bash
   npm start
   ```
5. Minimize the terminal, open up your root directory, and launch `index.html` inside any standard browser to start chatting!
