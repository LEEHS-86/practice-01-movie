import React, { useState } from 'react';

export default function MovieTracker() {
    // 1. 초기 영화 목록 데이터 (State)
    const [movies, setMovies] = useState([
        { id: 1, title: '위키드 2편', genre: '드라마', rating: 2, watched: false },
        { id: 2, title: '위키드', genre: '드라마', rating: 5, watched: false },
        { id: 3, title: '듄', genre: 'SF', rating: 5, watched: false },
    ]);

    return (
        <div style={{ padding: '20px' }}>
            <h1>나의 영화 기록장</h1>

            {/* 2. 영화 목록 카드 출력 */}
            <div style={{ display: 'flex', gap: '16px' }}>
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '16px',
                            width: '180px',
                        }}
                    >
                        <h3>{movie.title}</h3>
                        <p>장르: {movie.genre}</p>
                        <p>별점: {movie.rating}점</p>
                    </div>
                ))}
            </div>
        </div>
    );
}