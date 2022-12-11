import AboutUs from "./AboutUs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AboutUs />

      {/* <Search /> */}
      <div>{children}</div>
    </div>
  );
}
