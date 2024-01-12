export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: "My Blog Post",
  };
}
export default function Page({ params }: { params: { id: string } }) {
  return <h1>ID: {params.id}</h1>;
}
