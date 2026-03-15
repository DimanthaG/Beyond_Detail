'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import './YouTubeEmbed.scss';

function YouTubeEmbed({ videoId, title = 'Video' }) {
    const [loaded, setLoaded] = useState(false);

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    if (!loaded) {
        return (
            <div
                className="youtube-embed"
                onClick={() => setLoaded(true)}
                role="button"
                tabIndex={0}
                aria-label={`Play ${title}`}
                onKeyDown={(e) => e.key === 'Enter' && setLoaded(true)}
            >
                <img
                    className="youtube-embed__thumbnail"
                    src={thumbnailUrl}
                    alt={title}
                    loading="lazy"
                />
                <div className="youtube-embed__overlay">
                    <div className="youtube-embed__play-button">
                        <Play size={32} fill="white" />
                    </div>
                    <span className="youtube-embed__title">{title}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="youtube-embed youtube-embed--active">
            <iframe
                className="youtube-embed__iframe"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
}

export default YouTubeEmbed;
