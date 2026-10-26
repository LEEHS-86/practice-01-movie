import React, { useState } from 'react';

export default function MovieTracker() {
    const [movies, setMovies] = useState([
        { id: 1, title: '위키드 2편', genre: '드라마', rating: 2, watched: false },
        { id: 2, title: '위키드', genre: '드라마', rating: 5, watched: false },
        { id: 3, title: '듄', genre: 'SF', rating: 5, watched: false },
    ]);

    const handleDelete = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    const handleToggleWatched = (id) => {
        setMovies(
            movies.map((movie) =>
                movie.id === id ? { ...movie, watched: !movie.watched } : movie
            )
        );
    };

    // [추가 1] 별점 숫자를 받아 '★'과 '☆' 문자로 바꿔주는 함수
    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    // [추가 2] 전체 영화 수와 감상 완료된 영화 수 계산
    const totalCount = movies.length;
    const watchedCount = movies.filter((m) => m.watched).length;

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>나의 영화 기록장</h1>

            {/* [추가 3] 상단 요약 카운터 출력 */}
            <h3>전체 {totalCount}편 / 감상 완료 {watchedCount}편</h3>

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

                        {/* [수정 4] 별점 표기를 숫자가 아닌 별 모양으로 변경 */}
                        <div style={{ fontSize: '16px' }}>{renderStars(movie.rating)}</div>

                        <label style={{ cursor: 'pointer' }}>
                            <input
                                type="checkbox"
                                checked={movie.watched}
                                onChange={() => handleToggleWatched(movie.id)}
                            />
                            감상 완료
                        </label>

                        <div>
                            <button onClick={() => handleDelete(movie.id)}>삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}