export default function Home() {
  return (
    <h1 className="text-2xl font-bold">
      Vítej v aplikaci Flow List{process.env.API_URL}
    </h1>
  );
}
