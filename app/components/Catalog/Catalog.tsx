"use client";

import { Anime } from "@/types/Anime";
import { AnimeCard } from "../Card";
import styles from "./Catalog.module.scss";
import { FC, useEffect, useState } from "react";
import { CatalogFilter } from "./Filter/CatalogFilter";
import { AnimeGenre } from "@/types/AnimeGenre";
import { ThemeProvider, createTheme } from "@mui/material";

type Props = {
  animes: Anime[];
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#f50057",
    },
    mode: "dark",
  },
});

export const Catalog: FC<Props> = ({ animes }) => {
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [score, setScore] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [genresList, setGenresList] = useState<string[]>([]);

  const fetchGenresList = async () => {
    try {
      const response = await fetch("https://shikimori.one/api/genres");
      if (!response.ok) {
        throw new Error("Failed to fetch genres list");
      }
      const genresFromServer = await response.json();
      return genresFromServer
        .filter((g: AnimeGenre) => g.entry_type === "Anime")
        .map((genre: AnimeGenre) => genre.russian);
    } catch (error) {
      setTimeout(() => {
        fetchGenresList();
      }, 3000);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const genres = await fetchGenresList();
      setGenresList(genres);
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentYear = new Date().getFullYear();

  const statusesList = ["Анонс", "Вышел", "Онгоинг"];
  const typesList = ["Аниме Сериал", "Аниме Фильм", "OVA", "ONA", "Спешл"];
  const yearsList = Array.from(
    { length: currentYear - 1958 },
    (_, index) => currentYear - index
  ).map(String);
  const sortByList = ["Рейтингу", "Популярности", "Названию", "Дате выхода"];
  const scoresList = ["Выше 9", "Выше 8", "Выше 7", "Выше 6", "Выше 5"];

  return (
    <ThemeProvider theme={theme}>
      <CatalogFilter
        genresList={genresList}
        genre={genre}
        setGenre={setGenre}
        statusesList={statusesList}
        status={status}
        setStatus={setStatus}
        typesList={typesList}
        type={type}
        setType={setType}
        yearsList={yearsList}
        year={year}
        setYear={setYear}
        scoresList={scoresList}
        score={score}
        setScore={setScore}
        sortByList={sortByList}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div className={styles.catalog}>
        {animes.map((anime: any) => (
          <AnimeCard anime={anime} key={anime.id} />
        ))}
      </div>
    </ThemeProvider>
  );
};
