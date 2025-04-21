"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import originalQuizData from "@/app/data/law";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const LawQuiz = () => {




  const [quizData, setQuizData] = useState<typeof originalQuizData>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [finalScore, setFinalScore] = useState(0)


  // Shuffle function
  const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const shuffledQuestions = shuffleArray(originalQuizData).map((q) => {
      const shuffledChoices = shuffleArray(q.choices);
      const correctAnswerIndex = shuffledChoices.findIndex(choice => choice === q.choices[q.correctAnswer]);

      return {
        ...q,
        choices: shuffledChoices,
        correctAnswer: correctAnswerIndex,
      };
    });

    setQuizData(shuffledQuestions);
    setAnswers(Array(shuffledQuestions.length).fill(null));
  }, []);

  const currentQuestion = quizData[currentQuestionIndex];


  if (quizData.length === 0) return null; // or loading spinner


  const handleAnswerChange = (choiceIndex: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = choiceIndex;
    setAnswers(updatedAnswers);
  };

  const goNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };
  const refresh = () => {
    window.location.reload();
  };


  const isLastQuestion = currentQuestionIndex === quizData.length - 1;
  const allAnswered = answers.every((a) => a !== null);

  const handleSubmit = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        score++;
      }
    });
    setFinalScore(score) // ← save score to state
    setShowAlert(true)
  };




  return (
    <div className="flex flex-col items-center justify-center p-4">

      {/* Back button to homepage */}
      <div className="w-full max-w-2xl mb-4 self-start">
        <Link href="/">
          <Button className="ml-2">
            <ArrowLeft className="mr-2" />
            ย้อนกลับ
          </Button>
        </Link>
      </div>
      {showAlert && (
        <Alert className="w-[500px] flex flex-col items-center justify-center mb-4">
          <AlertTitle className="text-2xl">คุณได้คะแนน {finalScore} / {quizData.length} 🎉</AlertTitle>
          <AlertDescription className="text-xl mt-2">ตั้งใจอ่านหนังสือนะ สู้ ๆ 💪📚</AlertDescription>
          <Button className="mt-4" onClick={refresh}>
            <RotateCcw />
            ทำอีกครั้ง
          </Button>
        </Alert>
      )}
      {/* Question card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          กฏหมายและจรรยาบรรณ
        </h2>
        <p className="text-xl  text-gray-700 text-center">
          {currentQuestionIndex + 1}. {currentQuestion.question}
        </p>

        {/* Choices */}
        <div className="space-y-3 text-gray-900">
          <RadioGroup
            value={answers[currentQuestionIndex]?.toString() ?? ""}
            onValueChange={(val) => handleAnswerChange(parseInt(val))}
            className="space-y-3"
          >
            {currentQuestion.choices.map((choice, index) => {
              const selected = answers[currentQuestionIndex] === index;
              const isCorrect = currentQuestion.correctAnswer === index;

              return (
                <div key={index} className="flex items-center space-x-3">
                  <RadioGroupItem
                    value={index.toString()}
                    id={`choice-${index}`}
                    disabled={showAlert}
                    className="w-6 h-6 border-2 border-gray-400 data-[state=checked]:border-violet-600 data-[state=checked]:bg-violet-600"
                  />
                  <Label htmlFor={`choice-${index}`} className="text-lg flex items-center">
                    <span
                      className={`${showAlert
                        ? isCorrect
                          ? "text-green-600 font-semibold"
                          : selected
                            ? "text-red-600"
                            : ""
                        : ""
                        }`}
                    >
                      {choice}
                    </span>

                    {showAlert && selected && (
                      <span className="ml-2 text-xl">{isCorrect ? "✅" : "❌"}</span>
                    )}
                  </Label>
                </div>

              );
            })}
          </RadioGroup>



        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4">
          <Button onClick={goBack} disabled={currentQuestionIndex === 0}>
            ย้อนกลับ
          </Button>

          {isLastQuestion ? (
            <Button onClick={handleSubmit} disabled={!allAnswered}>
              ส่งคำตอบ
            </Button>
          ) : (
            <Button onClick={goNext}>ถัดไป</Button>
          )}
        </div>

      </div>

      {/* Pagination */}
      <div className="flex flex-wrap gap-2 justify-center mt-4 max-w-4xl">
        {quizData.map((_, idx) => (
          <Button
            key={idx}
            onClick={() => setCurrentQuestionIndex(idx)}
            variant={currentQuestionIndex === idx ? "default" : "outline"}
            className="w-[9%] min-w-[40px] h-10 p-0 text-sm rounded-full"
          >
            {idx + 1}
          </Button>
        ))}
      </div>

    </div>
  );
};

export default LawQuiz;
