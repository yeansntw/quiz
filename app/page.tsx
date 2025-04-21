'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader
} from "@/components/ui/card"
import { Book, HeartHandshake, Scale } from "lucide-react"
import Link from "next/link"

const HomePage = () => {

  const quizCategories = [
    {
      icon: <Scale />,
      title: "กฏหมายและจรรยาบรรณ",
      href: "/quiz/law",
    },
    {
      icon: <Book />,
      title: "เทคนิคและวิธีการ",
      href: "/quiz",
    },
    {
      icon: <HeartHandshake />,
      title: "ความรู้เรื่องโรคต่างๆ",
      href: "/quiz",
    }
  ]
  

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })


  const examDate = new Date("2025-07-18T00:00:00")

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
  
      {/* Card count date */}
      <Card className="w-[1000px] text-center">
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
        {/* <CardFooter className="justify-center">
          <Button className="text-xl" onClick={() => setShowAlert(true)}>
          คลิกเพื่อ พร้อมลุย!
          </Button>
        </CardFooter> */}
      </Card>

      {/* Card quiz  */}
      <div className="flex flex-col">
      <h1 className="text-3xl text-center my-4">หมวดหมู่ข้อสอบ</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {quizCategories.map((category, index) => (
    <Card
      key={index}
      className="w-[300px] text-center border-2 hover:border-violet-500 transition duration-150"
    >
      <CardContent>
        <div className="flex justify-center items-center my-4">
          <div className="scale-200">{category.icon}</div>
        </div>
        <p className="text-xl">{category.title}</p>
      </CardContent>
      <CardFooter className="justify-center">
        <Link href={category.href}>
          <Button className="text-lg cursor-pointer hover:bg-violet-900 transition duration-150">
            ทำข้อสอบ
          </Button>
        </Link>
      </CardFooter>
    </Card>
  ))}
</div>

      </div>
    </div>
  )
}

export default HomePage
