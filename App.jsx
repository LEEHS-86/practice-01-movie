import React, { useState } from 'react';

export default function MovieTracker() {
    const [movies, setMovies] = useState([
        { id: 1, title: '위키드 2편', genre: '드라마', rating: 2, watched: false },
        { id: 2, title: '위키드', genre: '드라마', rating: 5, watched: false },
        { id: 3, title: '듄', genre: 'SF', rating: 5, watched: false },
    ]);

    // [추가 1] 영화 삭제 함수
    const handleDelete = (id) => {
        // filter를 사용해 클릭한 id와 다른 항목만 남긴 새 배열을 만듭니다.
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    // [추가 2] 감상 완료 체크박스 토글 함수
    const handleToggleWatched = (id) => {
        // map을 사용해 클릭한 id의 watched 값만 반대로(true <-> false) 바꿔줍니다.
        setMovies(
            movies.map((movie) =>
                movie.id === id ? { ...movie, watched: !movie.watched } : movie
            )
        );
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>나의 영화 기록장</h1>

            <div style={{ display: 'flex', gap: '16px' }}>
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '16px',
                            width: '180px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}
                    >
                        <h3 style={{ margin: 0 }}>{movie.title}</h3>
                        <div>장르: {movie.genre}</div>
                        <div>별점: {movie.rating}점</div>

                        {/* [추가 3] 감상 완료 체크박스 */}
                        <label style={{ cursor: 'pointer' }}>
                            <input
                                type="checkbox"
                                checked={movie.watched}
                                onChange={() => handleToggleWatched(movie.id)}
                            />
                            감상 완료
                        </label>

                        {/* [추가 4] 삭제 버튼 */}
                        <div>
                            <button onClick={() => handleDelete(movie.id)}>삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}