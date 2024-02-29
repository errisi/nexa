import { Catalog } from "./components/Catalog/Catalog";

async function fetchAnimes(url: string) {
  const res = await fetch(`https://shikimori.one/api/animes?limit=48&${url}`);
  const result = await res.json();

  return result;
}

export default async function Home() {
  const animes = await fetchAnimes("");

  return (
    <main>
      <Catalog animes={animes} />
    </main>
  );
}
