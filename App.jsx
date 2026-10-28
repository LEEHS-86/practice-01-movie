import {useState} from 'react';
import styles from "./App.module.css";

export default function MovieTracker() {
    const [movies, setMovies] = useState([
        {id: 1, title: '위키드 2편', genre: '드라마', rating: 2, watched: false},
        {id: 2, title: '위키드', genre: '드라마', rating: 5, watched: false},
        {id: 3, title: '듄', genre: 'SF', rating: 5, watched: false},
    ]);

    const [titleInput, setTitleInput] = useState('');
    const [genreInput, setGenreInput] = useState('드라마');
    const [ratingInput, setRatingInput] = useState(5);

    const handleDelete = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    };
    const handleToggleWatched = (id) => {
        setMovies(
            movies.map((movie) =>
                movie.id === id ? {...movie, watched: !movie.watched} : movie
            )
        );
    };
    const handleAddMovie = (e) => {
        e.preventDefault();
        if (!titleInput.trim()) return;

        const newMovie = {
            id: Date.now(),
            title: titleInput,
            genre: genreInput,
            rating: Number(ratingInput),
            watched: false,
        };

        setMovies([...movies, newMovie]); // 기존 배열에 새 영화 추가
        setTitleInput(''); // 입력창 초기화
    };

    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    const totalCount = movies.length;
    const watchedCount = movies.filter(m => m.watched).length;

    return (
        <div className={styles.container}>
            <h1>나의 영화 기록장</h1>

            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>영화 추가</legend>
                <form
                    className={styles.form}
                    onSubmit={handleAddMovie}>
                    <input
                        type="text"
                        placeholder="영화 제목"
                        value={titleInput}
                        onChange={e => setTitleInput(e.target.value)} />
                    <select
                        value={genreInput}
                        onChange={e => setGenreInput(e.target.value)}>
                        <option value="드라마">드라마</option>
                        <option value="SF">SF</option>
                        <option value="액션">액션</option>
                        <option value="코미디">코미디</option>
                        <option value="로맨스">로맨스</option>
                    </select>
                    <select
                        value={ratingInput}
                        onChange={e => setRatingInput(e.target.value)}>
                        <option value={5}>별점 5점</option>
                        <option value={4}>별점 4점</option>
                        <option value={3}>별점 3점</option>
                        <option value={2}>별점 2점</option>
                        <option value={1}>별점 1점</option>
                    </select>
                    <button type="submit">
                        추가
                    </button>
                </form>
            </fieldset>

            <h3>
                전체 {totalCount}편 / 감상 완료 {watchedCount}편
            </h3>

            <div className={styles.movieList}>
                {movies.map(movie => (
                    <div key={movie.id} className={styles.movieCard}>
                        <h3 style={{ margin: 0 }}>{movie.title}</h3>
                        <div>장르: {movie.genre}</div>
                        <div style={{ fontSize: "16px" }}>{renderStars(movie.rating)}</div>

                        <label style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}>
                            <input
                                type="checkbox"
                                checked={movie.watched}
                                onChange={() => handleToggleWatched(movie.id)}                            />
                            감상 완료
                        </label>

                        <div>
                            <button
                                className={styles.deleteButton}
                                onClick={() => handleDelete(movie.id)}                            >
                                삭제
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}