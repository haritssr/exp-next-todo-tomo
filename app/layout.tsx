import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>yeah</title>
        <body>
          <h1>Todo App</h1>
          <main>{children}</main>
        </body>
      </head>
    </html>
  );
}
