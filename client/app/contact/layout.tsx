// import Search from "./Contact";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <Search /> */}
      <div>{children}</div>
    </div>
  );
}
