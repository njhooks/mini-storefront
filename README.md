# Mini Storefront

This project is a basic storefront built with React (Next.js) for ISM3232.  
It demonstrates core React concepts such as state management, component communication, and data filtering.  
The structure and functionality follow the examples shown in the Module 9 lecture slides.

---

## How to Run Locally
```bash
npm install
npm run dev
```
Then open your browser and go to:
```
http://localhost:3000
```

---

## How to Build for Production
```bash
npm run build
npm start
```

---

## Project Structure
src/
 ├── app/
 │   ├── page.jsx              // Server Component
 │   ├── api/
 │   │   └── products/route.js // API route returning JSON
 │   └── components/
 │       ├── Catalog.jsx
 │       ├── ProductList.jsx
 │       ├── ProductCard.jsx
 │       ├── CategoryFilter.jsx
 │       ├── PriceFilter.jsx
 │       ├── CartSummary.jsx
 │       └── StatusMessage.jsx

---

## Features Implemented
- Displays a list of products using `.map()`
- Category and price filters for user selection
- Cart summary with add, remove, and reset functions
- API route that returns sample product data
- Status messages for loading, error, and empty results
- State updates handled immutably with React hooks
- Basic inline styling for layout

---

## Concepts Demonstrated
- State management with `useState`
- Component communication through props
- Derived values using `map()` and `reduce()`
- Controlled inputs and form handling
- Lifting state up between components
- useEffect for fetching data and cleanup
- Conditional rendering for user feedback

---

## Notes
- Built with Next.js and React
- Product data is static and returned from an API route
- Styling is done inline for simplicity
- The code and structure follow the Module 9 rubric
- No known issues or errors at this time