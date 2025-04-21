import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const QuizPage = () => {
    const totalQuestions = 5;
    const buttonsPerRow = 10;
    const currentQuestion = 1;
    
    // Chunk logic
    const rows = Array.from({ length: Math.ceil(totalQuestions / buttonsPerRow) }, (_, rowIndex) =>
      Array.from({ length: buttonsPerRow }, (_, colIndex) => {
        const number = rowIndex * buttonsPerRow + colIndex + 1;
        return number <= totalQuestions ? number : null;
      }).filter(Boolean)
    );

    const choices = [
        "เป็น เพราะกำหนดเรื่องการขึ้นทะเบียน",
        "เป็น เพราะคุ้มครองประโยชน์ของผู้ประกอบวิชาชีพ",
        "ไม่เป็น เพราะคุ้มครองประโยชน์ของประชาชน",
        "ไม่เป็น เพราะไม่สามารถยกเว้นตามกฎหมายอื่นได้",
        "ไม่เป็น เพราะเป็นการควบคุมการประกอบอาชีพ"
    ]
    

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Back button aligned to left */}
      <div className="w-full max-w-2xl mb-4 self-start">
        <Link href="/">
          <Button className="ml-2">
            <ArrowLeft className="mr-2" />
            ย้อนกลับ
          </Button>
        </Link>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl space-y-6">
        {/* Question */}
        <h2 className="text-2xl font-bold text-gray-800 text-center">กฏหมายและจรรยาบรรณ</h2>
        <p className="text-lg text-gray-700 text-center">1. พ.ร.บ. วิชาชีพกายภาพบำบัด 2547 ส่งเสริมเสรีภาพหรือไม่?</p>

        {/* Answers */}
        <div className="space-y-3 text-gray-800">
          {choices.map((choice, index) => (
            <label key={index} className="flex items-center space-x-3">
              <input type="radio" name="answer" className="form-radio text-blue-600" />
              <span>{choice}</span>
            </label>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <Button>ย้อนกลับ</Button>
          <Button>ถัดไป</Button>
        </div>
      </div>

      {/* Pagination (Question Number Buttons) */}
      {/* Pagination (Question Number Buttons) */}
      {rows.map((row, rowIndex) => (
  <div key={rowIndex} className="flex space-x-2 items-center justify-center mt-4">
    {row.map((num) => (
      <Button
        key={num}
        variant={currentQuestion === num ? "default" : "outline"}
        className="rounded-full w-10 h-10 p-0"
      >
        {num}
      </Button>
    ))}
  </div>
))}

    </div>
  );
};

export default QuizPage;
