// Spelet har sin egen mörka full-screen-estetik — vi nollar workshop-shellet
// härinne så att inte den varma sandlådan strular med spelets layout.
export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
