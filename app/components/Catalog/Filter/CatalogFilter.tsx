import { FC } from "react";
import { CatalogFilterSelector } from "./Selector/CatalogFilterSelector";
import styles from "./CatalogFilter.module.scss";

type Props = {
  genresList: string[];
  genre: string;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
  statusesList: string[];
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  typesList: string[];
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  yearsList: string[];
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  scoresList: string[];
  score: string;
  setScore: React.Dispatch<React.SetStateAction<string>>;
  sortByList: string[];
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

export const CatalogFilter: FC<Props> = ({
  genresList,
  genre,
  setGenre,
  statusesList,
  status,
  setStatus,
  typesList,
  type,
  setType,
  yearsList,
  year,
  setYear,
  scoresList,
  score,
  setScore,
  sortByList,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className={styles.filter}>
      <CatalogFilterSelector
        label="Жанр"
        list={genresList}
        value={genre}
        setValue={setGenre}
      />
      <CatalogFilterSelector
        label="Статус"
        list={statusesList}
        value={status}
        setValue={setStatus}
      />
      <CatalogFilterSelector
        label="Тип"
        list={typesList}
        value={type}
        setValue={setType}
      />
      <CatalogFilterSelector
        label="Год"
        list={yearsList}
        value={year}
        setValue={setYear}
      />
      <CatalogFilterSelector
        label="Рейтинг"
        list={scoresList}
        value={score}
        setValue={setScore}
      />
      <CatalogFilterSelector
        label="Сортировать"
        list={sortByList}
        value={sortBy}
        setValue={setSortBy}
      />
    </div>
  );
};
