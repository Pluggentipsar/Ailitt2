import { useState } from 'react';
import { ArrowLeft, CheckCircle2, XCircle, Trophy, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Question {
    id: number;
    text: string;
    options: { id: string; text: string }[];
    correctId: string;
    explanation: string;
    difficulty: 'Lätt' | 'Medel' | 'Svår';
}

const questions: Question[] = [
    {
        id: 1,
        text: "Katten är svart. Den sover på en kudde. Den är fluffig.",
        options: [
            { id: 'A', text: "Beskriv en katt" },
            { id: 'B', text: "Beskriv en hund" },
            { id: 'C', text: "Beskriv ett husdjur" }
        ],
        correctId: 'A',
        explanation: "Den enkla prompten 'Beskriv en katt' ger en kort och enkel beskrivning som fokuserar på kattens utseende och vad den gör.",
        difficulty: 'Lätt'
    },
    {
        id: 2,
        text: "Solen lyser starkt idag. Himlen är blå utan moln. Det är varmt ute och fåglarna kvittrar.",
        options: [
            { id: 'A', text: "Beskriv regn" },
            { id: 'B', text: "Beskriv molnig himmel" },
            { id: 'C', text: "Beskriv en solig dag" }
        ],
        correctId: 'C',
        explanation: "Texten beskriver typiska kännetecken för en solig dag, vilket matchar prompten 'Beskriv en solig dag'.",
        difficulty: 'Lätt'
    },
    {
        id: 3,
        text: "En stor röd drake sprutar eld. Den flyger över ett slott. Riddarna på marken ser rädda ut.",
        options: [
            { id: 'A', text: "Rita en drake" },
            { id: 'B', text: "Rita en drake som anfaller ett slott" },
            { id: 'C', text: "Rita en glad drake" }
        ],
        correctId: 'B',
        explanation: "Texten innehåller specifika detaljer om ett slott och rädda riddare, vilket kräver en mer specifik prompt än bara 'Rita en drake'.",
        difficulty: 'Lätt'
    },
    {
        id: 4,
        text: "Det var en gång en robot som älskade att baka. Varje morgon gjorde den bullar av muttrar och skruvar. Men ingen ville äta dem för de var för hårda.",
        options: [
            { id: 'A', text: "Skriv en saga om en robot" },
            { id: 'B', text: "Skriv en saga om en robot som bakar" },
            { id: 'C', text: "Skriv ett recept på bullar" }
        ],
        correctId: 'B',
        explanation: "Berättelsen handlar specifikt om bakning, så prompten måste innehålla den instruktionen.",
        difficulty: 'Medel'
    },
    {
        id: 5,
        text: "Planeten Mars är röd. Den kallas ofta för den röda planeten. Det finns inget liv där som vi vet om, men forskare letar efter spår av vatten.",
        options: [
            { id: 'A', text: "Berätta en saga om rymden" },
            { id: 'B', text: "Skriv fakta om Mars" },
            { id: 'C', text: "Beskriv jorden" }
        ],
        correctId: 'B',
        explanation: "Texten innehåller fakta, inte en saga, och handlar specifikt om Mars.",
        difficulty: 'Medel'
    },
    {
        id: 6,
        text: "En futuristisk stad med flygande bilar i neonfärger. Skyskraporna är gjorda av glas och lyser i lila och blått. Det regnar, men regnet lyser också.",
        options: [
            { id: 'A', text: "En stad" },
            { id: 'B', text: "En framtidsstad med flygande bilar och neonljus" },
            { id: 'C', text: "En gammal stad" }
        ],
        correctId: 'B',
        explanation: "De specifika detaljerna om neon, flygande bilar och färger kräver en detaljerad prompt.",
        difficulty: 'Medel'
    },
    {
        id: 7,
        text: "Hej! Jag kan hjälpa dig med matteläxan. Vad vill du börja med? Vi kan räkna plus, minus eller gånger.",
        options: [
            { id: 'A', text: "Låtsas vara en mattelärare" },
            { id: 'B', text: "Låtsas vara en pirat" },
            { id: 'C', text: "Låtsas vara en katt" }
        ],
        correctId: 'A',
        explanation: "Stilen och innehållet i svaret visar att AI:n har fått instruktionen att agera som en lärare.",
        difficulty: 'Medel'
    },
    {
        id: 8,
        text: "Ärade rektor, jag skriver till er för att formellt ansöka om förlängd rast. Enligt mina beräkningar skulle detta öka elevernas prestationer med 15%.",
        options: [
            { id: 'A', text: "Fråga rektorn om längre rast" },
            { id: 'B', text: "Skriv ett formellt brev till rektorn med argument" },
            { id: 'C', text: "Skriv ett argt meddelande till skolan" }
        ],
        correctId: 'B',
        explanation: "Texten är mycket hövlig och använder svåra ord ('formellt', 'prestationer'), vilket betyder att prompten bad om en 'formell' stil.",
        difficulty: 'Svår'
    },
    {
        id: 9,
        text: "Sol. Varm. Bad. Glass. Glad.",
        options: [
            { id: 'A', text: "Beskriv sommaren" },
            { id: 'B', text: "Beskriv sommaren med bara ett ord per mening" },
            { id: 'C', text: "Lista fem saker som är gula" }
        ],
        correctId: 'B',
        explanation: "Här är begränsningen 'ett ord per mening' den viktiga delen av prompten. En vanlig beskrivning hade haft längre meningar.",
        difficulty: 'Svår'
    },
    {
        id: 10,
        text: "Jag var gul och fin en gång / nu är dagen grå och lång / bruna fläckar har jag fått / mitt liv är inte flott",
        options: [
            { id: 'A', text: "Skriv en dikt om en banan" },
            { id: 'B', text: "Skriv en sorglig dikt på rim om en banan som blir gammal" },
            { id: 'C', text: "Berätta varför bananer blir bruna" }
        ],
        correctId: 'B',
        explanation: "Alternativ B är den enda prompten som fångar allt: att det är en dikt, att den rimmar, att den är sorglig och handlar om åldrande.",
        difficulty: 'Svår'
    }
];

interface PromptGuessingGameProps {
    onClose: () => void;
}

export function PromptGuessingGame({ onClose }: PromptGuessingGameProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [gameComplete, setGameComplete] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleOptionClick = (optionId: string) => {
        if (selectedOption) return; // Prevent changing answer
        setSelectedOption(optionId);

        if (optionId === currentQuestion.correctId) {
            setScore(score + 1);
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#4ADE80', '#22C55E', '#16A34A']
            });
        }

        setShowExplanation(true);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setShowExplanation(false);
        } else {
            setGameComplete(true);
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });
        }
    };

    if (gameComplete) {
        return (
            <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-4 animate-in fade-in duration-300">
                <div className="max-w-2xl w-full bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[3rem] p-12 text-center shadow-2xl border-4 border-indigo-100">
                    <Trophy className="w-32 h-32 mx-auto text-yellow-500 mb-6 drop-shadow-lg animate-bounce" />
                    <h2 className="text-5xl font-fredoka font-bold text-indigo-900 mb-6">Bra jobbat!</h2>
                    <p className="text-2xl text-indigo-700 font-medium mb-8">
                        Du fick {score} av {questions.length} poäng!
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={onClose}
                            className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full text-xl shadow-lg hover:bg-gray-50 transition-all border-2 border-indigo-100"
                        >
                            Avsluta
                        </button>
                        <button
                            onClick={() => {
                                setCurrentQuestionIndex(0);
                                setScore(0);
                                setGameComplete(false);
                                setSelectedOption(null);
                                setShowExplanation(false);
                            }}
                            className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full text-xl shadow-lg hover:bg-indigo-700 transition-all hover:-translate-y-1"
                        >
                            Spela igen
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 bg-slate-50 flex flex-col animate-in fade-in duration-300 overflow-y-auto">
            {/* Header */}
            <div className="bg-white shadow-sm p-4 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <ArrowLeft className="w-8 h-8 text-gray-600" />
                    </button>
                    <div className="flex items-center gap-4">
                        <div className="bg-indigo-100 px-4 py-2 rounded-full font-bold text-indigo-700">
                            Fråga {currentQuestionIndex + 1} av {questions.length}
                        </div>
                        <div className="bg-yellow-100 px-4 py-2 rounded-full font-bold text-yellow-700 flex items-center gap-2">
                            <Trophy className="w-5 h-5" />
                            {score} poäng
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-8 pb-32">
                <div className="bg-white rounded-[2.5rem] shadow-xl border-4 border-indigo-50 overflow-hidden">
                    {/* Question Header */}
                    <div className="bg-indigo-600 p-8 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-bold mb-4 backdrop-blur-sm">
                            Nivå: {currentQuestion.difficulty}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold font-fredoka relative z-10">
                            Gissa vilken prompt som skapade texten
                        </h2>
                    </div>

                    <div className="p-8 sm:p-12 space-y-8">
                        {/* The Text to Analyze */}
                        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-200 relative">
                            <div className="absolute -top-4 left-8 bg-slate-200 text-slate-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                AI-genererad text
                            </div>
                            <p className="text-2xl sm:text-3xl font-medium text-slate-800 leading-relaxed text-center font-nunito">
                                "{currentQuestion.text}"
                            </p>
                        </div>

                        <div className="text-center text-gray-500 font-medium text-lg">
                            Vilken prompt skapade texten ovan?
                        </div>

                        {/* Options */}
                        <div className="grid gap-4">
                            {currentQuestion.options.map((option) => {
                                const isSelected = selectedOption === option.id;
                                const isCorrect = option.id === currentQuestion.correctId;
                                const showResult = showExplanation;

                                let buttonStyle = "bg-white border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50";
                                if (showResult) {
                                    if (isCorrect) buttonStyle = "bg-green-100 border-green-500 text-green-800";
                                    else if (isSelected && !isCorrect) buttonStyle = "bg-red-100 border-red-500 text-red-800";
                                    else buttonStyle = "bg-gray-50 border-gray-200 opacity-50";
                                } else if (isSelected) {
                                    buttonStyle = "bg-indigo-100 border-indigo-500 text-indigo-800";
                                }

                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => handleOptionClick(option.id)}
                                        disabled={showExplanation}
                                        className={`
                                            p-6 rounded-2xl text-left text-xl font-bold transition-all duration-200 flex items-center justify-between group
                                            ${buttonStyle}
                                        `}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className={`
                                                w-10 h-10 rounded-full flex items-center justify-center text-lg border-2
                                                ${showResult && isCorrect ? 'bg-green-500 border-green-500 text-white' :
                                                    showResult && isSelected && !isCorrect ? 'bg-red-500 border-red-500 text-white' :
                                                        'bg-white border-gray-300 text-gray-500 group-hover:border-indigo-400 group-hover:text-indigo-600'}
                                            `}>
                                                {option.id}
                                            </span>
                                            <span>{option.text}</span>
                                        </div>
                                        {showResult && isCorrect && <CheckCircle2 className="w-8 h-8 text-green-600" />}
                                        {showResult && isSelected && !isCorrect && <XCircle className="w-8 h-8 text-red-600" />}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Explanation */}
                        {showExplanation && (
                            <div className="animate-in slide-in-from-bottom-4 duration-500">
                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4 items-start mb-6">
                                    <div className="bg-blue-100 p-2 rounded-full shrink-0">
                                        <HelpCircle className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-1">Förklaring</h4>
                                        <p className="text-blue-800 text-lg">{currentQuestion.explanation}</p>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        onClick={nextQuestion}
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
                                    >
                                        {currentQuestionIndex < questions.length - 1 ? 'Nästa fråga' : 'Se resultat'}
                                        <ArrowRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
