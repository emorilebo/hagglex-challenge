import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from "react-apollo";


// const client = new ApolloClient({
//   uri: "https://api-staging.hagglex.com/graphql",
// })

// ReactDOM.render(
//   <ApolloProvider client={client} >
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </ApolloProvider>,
//   document.getElementById("root")
// );

import ApolloProvider from './ApolloProvider';

ReactDOM.render(ApolloProvider, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
