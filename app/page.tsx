'use client'
import QuizCategoryCard from "@/components/Quiz/QuizCategoryCard";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Book, HeartHandshake, Scale } from "lucide-react";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  
  const examDate = new Date("2025-07-20T00:00:00")

  const quizCategories = [
    {
      icon: <Scale />,
      title: "กฏหมายและจรรยาบรรณ",
      href: "/quiz/law",
    },
    {
      icon: <Book />,
      title: "เทคนิคและวิธีการ",
      href: "/quiz/techniq",
    },
    {
      icon: <HeartHandshake />,
      title: "ความรู้เรื่องโรคต่างๆ",
      href: "/quiz/knowledge",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const distance = examDate.getTime() - now.getTime()

      if (distance <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [examDate])

  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      <Card className="w-full max-w-4xl text-center">
        <p className="text-4xl text-left ml-10 mt-4">สวัสดี, สุพิชาภักค์</p>
        <CardHeader>
          <p className="text-2xl">เหลือเวลาอ่านหนังสือสอบอีก</p>
          <CardDescription className="text-lg">เตรียมตัวให้พร้อมก่อนถึงวันสอบ</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-2 text-lg font-semibold">
          <div>
            <p className="text-3xl">{timeLeft.days}</p>
            <p>วัน</p>
          </div>
          <div>
            <p className="text-3xl">{timeLeft.hours}</p>
            <p>ชั่วโมง</p>
          </div>
          <div>
            <p className="text-3xl">{timeLeft.minutes}</p>
            <p>นาที</p>
          </div>
          <div>
            <p className="text-3xl">{timeLeft.seconds}</p>
            <p>วินาที</p>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizCategories.map((category, index) => (
          <QuizCategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            href={category.href}
          />
        ))}
      </div>
    </div>
  );
}
export default HomePage