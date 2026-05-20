// Workshops-parent-layout — passar igenom barn-layouten.
// Varje workshop får sin egen identitet i sin under-mapp.
export default function WorkshopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
