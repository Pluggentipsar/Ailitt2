"use client";

import { useState, useEffect, useRef } from "react";
import { X, Volume2, Play, RotateCcw, Trash2, ArrowUp, ArrowLeft, ArrowRight, Star, Bot, Flag } from "lucide-react";
import confetti from "canvas-confetti";

interface AiRobotGameProps {
    onClose: () => void;
}

type CommandType = 'FORWARD' | 'LEFT' | 'RIGHT';

interface Command {
    id: string;
    type: CommandType;
    icon: React.ElementType;
    label: string;
    color: string;
}

interface Level {
    id: number;
    gridSize: number;
    robotStart: { x: number; y: number; dir: number }; // dir: 0=Up, 1=Right, 2=Down, 3=Left
    goal: { x: number; y: number };
    obstacles: { x: number; y: number }[];
    maxCommands: number;
}

const COMMANDS: Command[] = [
    { id: 'fwd', type: 'FORWARD', icon: ArrowUp, label: 'Gå Framåt', color: 'bg-blue-500' },
    { id: 'left', type: 'LEFT', icon: ArrowLeft, label: 'Sväng Vänster', color: 'bg-purple-500' },
    { id: 'right', type: 'RIGHT', icon: ArrowRight, label: 'Sväng Höger', color: 'bg-pink-500' },
];

const LEVELS: Level[] = [
    {
        id: 1,
        gridSize: 5,
        robotStart: { x: 0, y: 4, dir: 0 }, // Bottom Left, facing Up
        goal: { x: 0, y: 0 }, // Top Left
        obstacles: [],
        maxCommands: 5
    },
    {
        id: 2,
        gridSize: 5,
        robotStart: { x: 0, y: 4, dir: 1 }, // Bottom Left, facing Right
        goal: { x: 4, y: 4 }, // Bottom Right
        obstacles: [{ x: 2, y: 4 }], // Obstacle in middle
        maxCommands: 8
    },
    {
        id: 3,
        gridSize: 5,
        robotStart: { x: 2, y: 2, dir: 0 }, // Center
        goal: { x: 4, y: 0 }, // Top Right
        obstacles: [{ x: 2, y: 1 }, { x: 3, y: 2 }],
        maxCommands: 10
    }
];

export function AiRobotGame({ onClose }: AiRobotGameProps) {
    const [gameStarted, setGameStarted] = useState(false);
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const [program, setProgram] = useState<Command[]>([]);
    const [robotState, setRobotState] = useState(LEVELS[0].robotStart);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [message, setMessage] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [showTutorial, setShowTutorial] = useState(true);

    const currentLevel = LEVELS[currentLevelIndex];
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Reset robot when level changes
    useEffect(() => {
        setRobotState(currentLevel.robotStart);
        setProgram([]);
        setShowSuccess(false);
        setMessage("");
        // Only show tutorial on level 1
        setShowTutorial(currentLevel.id === 1);
    }, [currentLevelIndex]);

    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'sv-SE';
            utterance.rate = 0.9;
            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
        }
    };

    const stopSpeaking = () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    };

    const addCommand = (cmd: Command) => {
        if (isPlaying) return;
        if (program.length >= currentLevel.maxCommands) {
            speak("Programmet är fullt!");
            return;
        }
        setProgram([...program, { ...cmd, id: Math.random().toString() }]);
    };

    const removeCommand = (index: number) => {
        if (isPlaying) return;
        const newProgram = [...program];
        newProgram.splice(index, 1);
        setProgram(newProgram);
    };

    const runProgram = async () => {
        if (isPlaying || program.length === 0) return;
        setIsPlaying(true);
        setMessage("Kör program...");
        setShowTutorial(false); // Hide tutorial when running

        // Reset to start first
        let currentX = currentLevel.robotStart.x;
        let currentY = currentLevel.robotStart.y;
        let currentDir = currentLevel.robotStart.dir;
        setRobotState({ x: currentX, y: currentY, dir: currentDir });

        await new Promise(r => setTimeout(r, 500));

        for (let i = 0; i < program.length; i++) {
            const cmd = program[i];

            if (cmd.type === 'FORWARD') {
                // 0=Up (y-1), 1=Right (x+1), 2=Down (y+1), 3=Left (x-1)
                let nextX = currentX;
                let nextY = currentY;

                if (currentDir === 0) nextY--;
                if (currentDir === 1) nextX++;
                if (currentDir === 2) nextY++;
                if (currentDir === 3) nextX--;

                // Check bounds and obstacles
                if (
                    nextX < 0 || nextX >= currentLevel.gridSize ||
                    nextY < 0 || nextY >= currentLevel.gridSize ||
                    currentLevel.obstacles.some(o => o.x === nextX && o.y === nextY)
                ) {
                    setMessage("Ouch! Krockade!");
                    speak("Ouch! Jag krockade!");
                    setIsPlaying(false);
                    return;
                }

                currentX = nextX;
                currentY = nextY;
            } else if (cmd.type === 'LEFT') {
                currentDir = (currentDir - 1 + 4) % 4;
            } else if (cmd.type === 'RIGHT') {
                currentDir = (currentDir + 1) % 4;
            }

            setRobotState({ x: currentX, y: currentY, dir: currentDir });
            await new Promise(r => setTimeout(r, 800)); // Wait for animation
        }

        // Check goal
        if (currentX === currentLevel.goal.x && currentY === currentLevel.goal.y) {
            setMessage("Hurra! Framme!");
            setShowSuccess(true);
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#60A5FA', '#A78BFA', '#F472B6']
            });
            speak("Bra jobbat! Jag kom fram!");
        } else {
            setMessage("Hmm, kom inte riktigt fram.");
            speak("Jag kom inte riktigt fram. Försök igen!");
        }
        setIsPlaying(false);
    };

    const resetRobot = () => {
        setRobotState(currentLevel.robotStart);
        setIsPlaying(false);
        setMessage("");
        setShowSuccess(false);
    };

    const nextLevel = () => {
        if (currentLevelIndex < LEVELS.length - 1) {
            setCurrentLevelIndex(prev => prev + 1);
        } else {
            speak("Du har klarat alla banor! Du är en mäster-programmerare!");
            onClose();
        }
    };

    // Intro Screen
    if (!gameStarted) {
        return (
            <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4 animate-in fade-in duration-500 font-fredoka">
                <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] max-w-4xl w-full p-12 shadow-2xl border border-white/20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10" />

                    <div className="relative z-10">
                        <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(59,130,246,0.4)] animate-bounce">
                            <Bot className="w-20 h-20 text-white" />
                        </div>

                        <h2 className="font-black text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-cyan-200 mb-6 drop-shadow-sm">
                            Robot-programmering
                        </h2>

                        <p className="text-2xl text-white/90 mb-10 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md font-nunito">
                            Hjälp roboten att hitta till målet!
                            <br />
                            Ge den exakta instruktioner. Roboten gör BARA det du säger.
                        </p>

                        <div className="flex gap-6 justify-center">
                            <button
                                onClick={() => speak("Hjälp roboten att hitta till målet! Ge den exakta instruktioner. Roboten gör bara det du säger.")}
                                className={`
                                    px-8 py-5 rounded-2xl font-bold text-xl transition-all flex items-center gap-3
                                    ${isSpeaking
                                        ? 'bg-white/20 text-white ring-2 ring-blue-400'
                                        : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
                                    }
                                `}
                            >
                                <Volume2 className={`w-7 h-7 ${isSpeaking ? 'animate-pulse' : ''}`} />
                                Lyssna
                            </button>

                            <button
                                onClick={() => {
                                    stopSpeaking();
                                    setGameStarted(true);
                                }}
                                className="px-12 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-2xl hover:from-blue-400 hover:to-cyan-400 shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] hover:scale-105 transition-all flex items-center gap-4 group"
                            >
                                <span>Starta</span>
                                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:rotate-90"
                    >
                        <X className="w-8 h-8" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[9999] bg-slate-900 flex flex-col animate-in fade-in duration-300 font-fredoka">
            {/* Header */}
            <div className="bg-slate-800/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-slate-700 shadow-lg z-20">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white shadow-lg">
                        <Bot className="w-7 h-7" />
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl text-white tracking-wide">Robot-programmering</h2>
                        <p className="text-blue-300 font-medium font-nunito">Nivå {currentLevel.id} av {LEVELS.length}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => speak("Använd knapparna till vänster för att bygga ett program. Tryck på Play för att köra.")}
                        className={`
                            p-3 rounded-full transition-all
                            ${isSpeaking ? 'bg-blue-500/20 text-blue-300 ring-2 ring-blue-500' : 'bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white'}
                        `}
                    >
                        <Volume2 className="w-7 h-7" />
                    </button>
                    <button
                        onClick={onClose}
                        className="p-3 rounded-full bg-slate-700 hover:bg-red-500/20 hover:text-red-400 text-slate-400 transition-all"
                    >
                        <X className="w-7 h-7" />
                    </button>
                </div>
            </div>

            {/* Game Content */}
            <div className="flex-1 flex overflow-hidden">

                {/* Sidebar: Commands */}
                <div className="w-80 bg-slate-800 border-r border-slate-700 p-6 flex flex-col gap-6 z-10 relative">
                    {/* Tutorial Pointer for Commands */}
                    {showTutorial && program.length === 0 && (
                        <div className="absolute top-24 -right-12 z-50 flex items-center animate-bounce">
                            <div className="bg-white text-slate-900 px-4 py-2 rounded-xl font-bold shadow-lg mr-2 whitespace-nowrap">
                                1. Klicka här!
                            </div>
                            <ArrowLeft className="w-12 h-12 text-white drop-shadow-lg" />
                        </div>
                    )}

                    <div className="bg-slate-700/50 p-4 rounded-2xl border border-slate-600">
                        <h3 className="text-slate-400 font-bold uppercase tracking-wider text-sm mb-4">Kommandon</h3>
                        <div className="space-y-3">
                            {COMMANDS.map(cmd => (
                                <button
                                    key={cmd.id}
                                    onClick={() => addCommand(cmd)}
                                    disabled={isPlaying}
                                    className={`
                                        w-full p-4 rounded-xl flex items-center gap-4 font-bold text-white shadow-md transition-all
                                        ${cmd.color}
                                        ${isPlaying ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg active:scale-95'}
                                    `}
                                >
                                    <cmd.icon className="w-6 h-6" />
                                    {cmd.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 bg-slate-900/50 rounded-2xl border border-slate-700 p-4 flex flex-col overflow-hidden">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-slate-400 font-bold uppercase tracking-wider text-sm">Ditt Program</h3>
                            <button
                                onClick={() => setProgram([])}
                                disabled={isPlaying || program.length === 0}
                                className="text-red-400 hover:text-red-300 disabled:opacity-30"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-slate-600">
                            {program.map((cmd, idx) => (
                                <div key={cmd.id} className="flex items-center gap-2 animate-in slide-in-from-left-2 duration-200">
                                    <span className="text-slate-500 font-mono text-sm w-6">{idx + 1}.</span>
                                    <div className={`flex-1 p-3 rounded-lg flex items-center gap-3 text-sm font-bold text-white ${cmd.color}`}>
                                        <cmd.icon className="w-4 h-4" />
                                        {cmd.label}
                                    </div>
                                    <button
                                        onClick={() => removeCommand(idx)}
                                        disabled={isPlaying}
                                        className="text-slate-500 hover:text-red-400 disabled:opacity-0"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                            {program.length === 0 && (
                                <div className="text-slate-600 text-center italic mt-10">
                                    Programmet är tomt...
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Tutorial Pointer for Play Button */}
                        {showTutorial && program.length > 0 && (
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center animate-bounce">
                                <div className="bg-white text-slate-900 px-4 py-2 rounded-xl font-bold shadow-lg mb-2 whitespace-nowrap">
                                    2. Tryck här!
                                </div>
                                <ArrowUp className="w-8 h-8 text-white drop-shadow-lg" />
                            </div>
                        )}

                        <button
                            onClick={runProgram}
                            disabled={isPlaying || program.length === 0}
                            className={`
                                w-full py-4 rounded-xl font-bold text-xl shadow-lg transition-all flex items-center justify-center gap-3
                                ${isPlaying
                                    ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                                    : 'bg-green-500 hover:bg-green-400 text-white hover:scale-105'
                                }
                            `}
                        >
                            {isPlaying ? (
                                <>Kör...</>
                            ) : (
                                <>
                                    <Play className="w-6 h-6 fill-current" />
                                    Kör Program
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Main Area: Grid */}
                <div className="flex-1 bg-slate-900 relative flex flex-col items-center justify-center p-8">
                    {/* Grid Background */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                    {/* Message Toast */}
                    {message && (
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full font-bold text-xl border border-white/20 shadow-xl animate-in fade-in slide-in-from-top-4 z-50">
                            {message}
                        </div>
                    )}

                    {/* The Grid */}
                    <div
                        className="relative bg-slate-800 rounded-xl shadow-2xl border-4 border-slate-700 p-2"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(${currentLevel.gridSize}, 1fr)`,
                            gap: '8px',
                            width: 'min(600px, 80vh)',
                            aspectRatio: '1/1'
                        }}
                    >
                        {Array.from({ length: currentLevel.gridSize * currentLevel.gridSize }).map((_, idx) => {
                            const x = idx % currentLevel.gridSize;
                            const y = Math.floor(idx / currentLevel.gridSize);
                            const isGoal = x === currentLevel.goal.x && y === currentLevel.goal.y;
                            const isObstacle = currentLevel.obstacles.some(o => o.x === x && o.y === y);

                            return (
                                <div
                                    key={idx}
                                    className={`
                                        rounded-lg relative flex items-center justify-center
                                        ${isObstacle ? 'bg-slate-700 border-2 border-slate-600' : 'bg-slate-700/30 border-2 border-slate-700/50'}
                                    `}
                                >
                                    {isGoal && (
                                        <>
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full font-bold text-xs shadow-lg animate-bounce">
                                                MÅL
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                                                <Star className="w-10 h-10 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                                            </div>
                                        </>
                                    )}
                                    {isObstacle && (
                                        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-50" />
                                    )}
                                </div>
                            );
                        })}

                        {/* The Robot */}
                        <div
                            className="absolute transition-all duration-500 ease-in-out z-20 flex items-center justify-center"
                            style={{
                                width: `calc(100% / ${currentLevel.gridSize} - 8px)`,
                                height: `calc(100% / ${currentLevel.gridSize} - 8px)`,
                                left: `calc(${robotState.x} * (100% / ${currentLevel.gridSize}) + 4px)`,
                                top: `calc(${robotState.y} * (100% / ${currentLevel.gridSize}) + 4px)`,
                                transform: `rotate(${robotState.dir * 90}deg)`
                            }}
                        >
                            <div className="w-3/4 h-3/4 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center relative border-2 border-blue-300">
                                <Bot className="w-2/3 h-2/3 text-white" />
                                {/* Eyes indicating direction */}
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_5px_rgba(239,68,68,1)]" />
                            </div>
                            {/* Start Label */}
                            {program.length === 0 && !isPlaying && (
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full font-bold text-xs shadow-lg whitespace-nowrap">
                                    START
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Success Modal */}
                    {showSuccess && (
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-[2rem] p-8 shadow-2xl border-4 border-green-400 flex flex-col items-center gap-6 animate-in zoom-in slide-in-from-bottom-10 z-50">
                            <h3 className="text-3xl font-black text-green-600">Bra jobbat!</h3>
                            <div className="flex gap-4">
                                <button
                                    onClick={resetRobot}
                                    className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-colors flex items-center gap-2"
                                >
                                    <RotateCcw className="w-5 h-5" />
                                    Kör igen
                                </button>
                                <button
                                    onClick={nextLevel}
                                    className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                                >
                                    Nästa Nivå
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
