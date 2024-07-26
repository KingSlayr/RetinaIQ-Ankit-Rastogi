# Frontend Developer Assignment: UI Implementation

## Overview

This project implements a dynamic table UI as specified in the assignment. Built with Next.js and React, the application provides functionalities to manage state rows, variant columns, and supports drag-and-drop reordering. Local storage is used to persist state and variant information across sessions.

## Demo

You can view the live demo of the project hosted on [Vercel]([https://your-vercel-deployment-url.com](https://retina-iq-ankit-rastogi.vercel.app/)).

## Features

- **Add/Delete State Rows:** Dynamically add and remove rows representing different states.
- **Add/Delete Variant Columns:** Dynamically manage the columns representing various design variants.
- **Row Reordering:** Drag-and-drop functionality to reorder rows.
- **Responsive Design:** The UI adjusts responsively based on the number of variant columns.
- **Local Storage Integration:** Saves and loads state and column configurations from local storage.

## Image

![image](https://github.com/user-attachments/assets/9d001803-e1cb-42cf-9203-0c8037fa9ed6)


## Setup and Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/KingSlayr/RetinaIQ-Ankit-Rastogi.git
   cd RetinaIQ-Ankit-Rastogi
   ```

2. **Install Dependencies:**

   Ensure you have Node.js and npm installed. Run:

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   Start the Next.js development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

4. **Build for Production:**

   To build the project for production, run:

   ```bash
   npm run build
   ```

   And then start the production server:

   ```bash
   npm start
   ```

## Local Storage

The application utilizes local storage to persist the state of the table and columns. Here's a summary of how local storage is used:

- **Saving State:**
  - When the state or columns change (e.g., rows are added or removed, columns are modified), these changes are saved to local storage using `localStorage.setItem()`.

- **Loading State:**
  - On initial load, the application retrieves the saved state and columns from local storage using `localStorage.getItem()`. If no saved data is found, default values are used.

- **Clearing Storage:**
  - You can clear the local storage by deleting the specific items or by manually clearing the browser's local storage.

## Approach

1. **Components:**
   - `TableRow`: Represents a single row in the table.
   - `TableCell`: Represents a cell in the table that can be edited.
   - `DragTable`: The main table component that manages state rows and variant columns.

2. **State Management:**
   - State rows and variant columns are managed using React's `useState` hook.
   - State is synchronized with local storage to ensure data persistence.

3. **Styling:**
   - Tailwind CSS is used for styling the components. Responsive design is handled using Tailwind's utility classes.

4. **Drag-and-Drop:**
   - Implemented using the `react-sortable-hoc` library for row reordering functionality.
