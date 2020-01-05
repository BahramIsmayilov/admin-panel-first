// import React from 'react';
// import { URL } from '../../utils/URL';

// export const AuthorContext = React.createContext();

// export function AuthorProvider({ children }) {
//   const [loading, setLoading] = React.useState(false);
//   const [authors, setAuthors] = React.useState([]);

//   React.useEffect(() => {
//     async function getAuthors() {
//       try {
//         setLoading(true);
//         const response = await fetch(`${URL}/authors`);
//         const data = await response.json();
//         const tempAuthors = await data;
//         const tempSort = tempAuthors.slice(0);
//         tempSort.sort((a, b) => {
//           let x = a.fullName.toLowerCase();
//           let y = b.fullName.toLowerCase();
//           return x < y ? -1 : x > y ? 1 : 0;
//         });
//         setAuthors(tempSort);
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     }
//     getAuthors();
//   }, []);
//   // const handleAuthor = () => {
//   //
//   // };
//   console.log(authors);

//   return (
//     <AuthorContext.Provider value={{ loading, authors }}>
//       {children}
//     </AuthorContext.Provider>
//   );
// }
