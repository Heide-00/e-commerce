export default function PageContent({ title, children }) {
  return (
    <section className="text-center py-8">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <div className="text-sm text-gray-600 mt-2">{children}</div>
    </section>
  );
}