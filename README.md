
# Responsive Dashboard with News and Payout Features

This project is a responsive dashboard that integrates news and blog data, includes a payout calculator, and offers features for data export and filtering.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Prateekraj1/responsive-dashboard.git
   cd responsive-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Features

### 1. User Authentication:
- Implement secure login functionality using email-password authentication or third-party tools (e.g., Google, GitHub OAuth).

### 2. News and Blog Data Integration:
- Fetch data from free third-party news APIs (e.g., News API, Guardian API).
- Display article/blog counts with details like author, date, and type.

### 3. Filtering and Search:
- Implement filters to allow users to search by:
  - Author
  - Date range
  - Type (e.g., news, blogs)
- Add a global search bar for quick keyword searches.

### 4. Responsive Design:
- Build a fully responsive UI compatible with both mobile and desktop devices.

### 5. Payout Calculator:
- Allow admins to set a payout per article/blog value.
- Store payout data in local storage.
- Automatically calculate total payouts based on the number of articles/blogs and their rates.

### 6. Export Functionality:
- Enable users to export payout reports as:
  - PDF
  - CSV
  - Google Sheets integration.

## Frontend Frameworks & Tools:
- **React.js** and **Next.js** for development.
- **Tailwind CSS** for styling.
- **Context API** for state management.
- **React hook form** for form management.

## Key Features:
1. **Dashboard**:
   - Overview of total articles/blogs fetched from the API.
   - Visual representation of payouts and filters.

2. **News Analytics**:
   - Graphical charts (e.g., bar, pie, or line charts) showing article trends by author or type.

3. **Payout Details**:
   - A simple table listing authors, articles, and calculated payouts.
   - Inline editing for payout rates.

4. **Export Options**:
   - Export filtered or complete data in PDF/CSV/Google Sheets format.

5. **Error Handling**:
   - Graceful fallback for API failures (e.g., display a message if the news API is unreachable).

## Environment Variables

Set up the following environment variables in your `.env.local` file:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDjDX1jfk9tAQ0_ntUTVXS60pTmCHLu0xI
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=sportsdunia-assignment-2f8d7.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=sportsdunia-assignment-2f8d7
NEXT_PUBLIC_FIREBASE_APP_ID=1:170437865218:web:444298a8b0ab148f425c1b
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=sportsdunia-assignment-2f8d7.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=170437865218
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-TV1PXYNMZ3
NEXT_PUBLIC_NEWS_API_KEY=4d225ed215fd4199ab758dfd61ada101
NODE_ENV='development'
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

