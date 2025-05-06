// components/QuizCategoryCard.tsx
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface QuizCategoryCardProps {
  icon: ReactNode;
  title: string;
  href: string;
}

const QuizCategoryCard = ({ icon, title, href }: QuizCategoryCardProps) => (
  <Card className="w-[300px] text-center border-2 hover:border-violet-500 transition duration-150">
    <CardContent>
      <div className="flex justify-center items-center my-4">
        <div className="scale-200">{icon}</div>
      </div>
      <p className="text-xl">{title}</p>
    </CardContent>
    <CardFooter className="justify-center">
      <Link href={href}>
        <Button className="text-lg cursor-pointer hover:bg-violet-900 transition duration-150">
          ทำข้อสอบ
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export default QuizCategoryCard;
