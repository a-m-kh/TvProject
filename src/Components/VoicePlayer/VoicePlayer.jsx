import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.esm.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.esm.js';

const audioUrl = 'https://cdn.musicgitar.ir/Music/Shadmehr%20Aghili/320/Shadmehr%20Aghili%20-%20Chera%20Too%20Jangi%20[320].mp3';

const random = (min, max) => Math.random() * (max - min) + min;
const randomColor = () => `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.5)`;

const VoicePlayer = () => {
    const containerRef = useRef(null);
    const wavesurferRef = useRef(null);
    const [isLooping, setIsLooping] = useState(true);
    const [activeRegion, setActiveRegion] = useState(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const wavesurfer = WaveSurfer.create({
            container: containerRef.current,
            height: 100,
            waveColor: 'rgb(200, 0, 200)',
            progressColor: 'rgb(100, 0, 100)',
            url: audioUrl,
            plugins: [
                TimelinePlugin.create({
                    container: '#timeline'
                }),
                RegionsPlugin.create()
            ]
        });

        wavesurferRef.current = wavesurfer;

        const createRegions = () => {
            wavesurfer.addRegion({
                start: 0,
                end: 8,
                content: 'Resize me',
                color: randomColor(),
                drag: false,
                resize: true,
            });
            wavesurfer.addRegion({
                start: 9,
                end: 10,
                content: 'Cramped region',
                color: randomColor(),
                minLength: 1,
                maxLength: 10,
            });
            wavesurfer.addRegion({
                start: 12,
                end: 17,
                content: 'Drag me',
                color: randomColor(),
                resize: false,
            });
            wavesurfer.addRegion({
                start: 19,
                content: 'Marker',
                color: randomColor(),
            });
            wavesurfer.addRegion({
                start: 20,
                content: 'Second marker',
                color: randomColor(),
            });
        };

        wavesurfer.on('ready', createRegions);

        const regionInHandler = (region) => {
            setActiveRegion(region);
        };

        const regionOutHandler = (region) => {
            if (activeRegion === region) {
                if (isLooping) {
                    region.play();
                } else {
                    setActiveRegion(null);
                }
            }
        };

        const regionClickHandler = (region, e) => {
            e.stopPropagation();
            setActiveRegion(region);
            region.play();
            region.setOptions({ color: randomColor() });
        };

        wavesurfer.on('region-in', regionInHandler);
        wavesurfer.on('region-out', regionOutHandler);
        wavesurfer.on('region-click', regionClickHandler);

        return () => {
            wavesurfer.destroy();
        };
    }, [isLooping]);

    const onPlayPause = useCallback(() => {
        wavesurferRef.current && wavesurferRef.current.playPause();
    }, []);

    const onLoopChange = useCallback((e) => {
        setIsLooping(e.target.checked);
    }, []);

    const onZoomChange = useCallback((e) => {
        const minPxPerSec = Number(e.target.value);
        wavesurferRef.current && wavesurferRef.current.zoom(minPxPerSec);
    }, []);

    return (
        <>
            <div ref={containerRef} />
            <div id="timeline" />
            <p>Current time: {wavesurferRef.current?.getCurrentTime() || 0}</p>
            <div style={{ margin: '1em 0', display: 'flex', gap: '1em' }}>
                <button onClick={onPlayPause} style={{ minWidth: '5em' }}>
                    {wavesurferRef.current?.isPlaying() ? 'Pause' : 'Play'}
                </button>
            </div>
            <p>
                <label>
                    <input type="checkbox" checked={isLooping} onChange={onLoopChange} />
                    Loop regions
                </label>
                <label style={{ marginLeft: '2em' }}>
                    Zoom: <input type="range" min="10" max="1000" defaultValue="10" onInput={onZoomChange} />
                </label>
            </p>
        </>
    );
};

export default VoicePlayer;
