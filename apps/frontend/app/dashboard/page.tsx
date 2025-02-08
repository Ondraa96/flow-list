export type Moment = {
  id: string;
  timestamp: number;
  message: string;
};

export default async function Dashboard() {
  const moments: Array<Moment> = await fetch("http://localhost:8000/").then(
    (response) => response.json()
  );
  return (
    <>
      <h1 className="text-2xl font-bold">Tvoje zápisy</h1>
      <ul>
        {moments.map((moment) => (
          <li key={moment.id}>{moment.message}</li>
        ))}
      </ul>
    </>
  );
}
