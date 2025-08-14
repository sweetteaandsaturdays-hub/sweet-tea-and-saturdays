export const metadata = {
  title: 'Sweet Tea & Saturdays — Demo',
  description: 'Handcrafted wreaths & farmhouse florals',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#F7F3EC', color: '#2A2A2A' }}>
        {children}
      </body>
    </html>
  );
}
