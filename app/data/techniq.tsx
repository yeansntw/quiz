const quizData = [
    {
      question: "ความถี่ของคลื่นเหนือเสียงที่เหมาะสมในการรักษา carpal tunnel syndrome?",
      choices: [
        "1 MHz",
        "2 MHz",
        "3 MHz",
        "4 MHz",
        "5 MHz"
      ],
      correctAnswer: 2,
    },
    {
      question: "Thermal and non-themal of US ให้ผลเหมือนกัน?",
      choices: [
        "Micro stream",
        "Stable...",
        "Radiation pr...",
        "Acoustic-stream",
        "Transient..."
      ],
      correctAnswer: 2,
    },
    {
      question: "ข้อใดเป็นการตั้งพารามิเตอร์ที่ถูกต้องของ HVPS",
      choices: [
        "ความถี่สูง hight intensity ลดปวดผ่าน gate control",
        "ความถี่สูง low intensity ลดปวดผ่าน gate control",
        "ความถี่ต่ำ low intensity ลดปวดผ่าน gate control",
        "ความถี่ต่ำ low intensity ลดปวดผ่าน enkephalin",
        "ความถี่สูง high intensity ลดปวดผ่านลดการไหลเวียนของโลหิต"
      ],
      correctAnswer: 0,
    },
    {
      question: "ข้อใดไม่ได้เป็นข้อห้ามในการรักษาด้วยคลื่นเหนือเสียง",
      choices: [
        "บริเวณท้องและหลังของหญิงตั้งครรภ์",
        "ผู้ป่วยแขนกระดูกแขนหักมาแล้ว 3 ปี",
        "บริเวณที่มีการอักเสบเฉียบพลัน",
        "บริเวณที่มีเนื้องอก",
        "จำไม่ได้"
      ],
      correctAnswer: 1,
    },
    {
      question: "ข้อใดผิดหลักการของ supension",
      choices: [
        "ผู้ป่วยทำการเคลื่อนไหวด้วยตนเอง",
        "vertical fixation เคลื่อนที่แบบ pendulum",
        "axial fixation เคลื่อนที่แบบ eliminate gravity",
        "shoulder ad-ab แขวนพยุงแบบ axial fixation ได้",
        "vertical fixation ช่วงการเคลื่อนไหวมากกว่าแบบ axial fixation"
      ],
      correctAnswer: 4,
    },
    {
      question: "ข้อใดไม่ใช่ปัจจัยที่ส่งผลต่อสนามแม่เหล็กไฟฟ้าของการรักษาด้วย SWD",
      choices: [
        "ขนาด electrode",
        "การวาง electrode",
        "ระยะห่างระหว่างผิวหนังและ electrod",
        "สีผิวบริเวณที่รักษา",
        "โครงสร้างเนื้อเยื่อที่รักษา"
      ],
      correctAnswer: 3,
    },
    {
      question: "ข้อใดคือความถี่ของคลื่นเหนือเสียง(US) ที่แทรกผ่านเนื้อเยื่อตื้นที่สุด",
      choices: [
        "0.75",
        "0.8",
        "2.5",
        "1",
        "3"
      ],
      correctAnswer: 4,
    },
    {
      question: "กระแสในข้อใดใช้ในการทำ ionto",
      choices: [
        "micro current",
        "Faradid current",
        "russian current",
        "galvanic current",
        "High voltage current"
      ],
      correctAnswer: 3,
    },
    {
      question: "ข้อใดผิดการเกี่ยวกับ suspension แบบ axial fixation",
      choices: [
        "เคลื่อนไหวได้ในช่วงแคบ",
        "เคลื่อนไหวในแนวระนาบ",
        "ช่วยให้กล้ามเนื้อคลายตัว",
        "จุดแขวนตรงจุดศูนย์ถ่วงของส่วนที่ต้องการเคลื่อนไหว",
        "เคลื่อนไหวคล้ายลูกตุ้มนาฬิกา"
      ],
      correctAnswer: 0,
    },
    {
      question: "ข้อใดบ่งชี้ว่าควรหยุดทันทีเมื่อทดสอบ grade exercise test",
      choices: [
        "เหงื่อไหลมาก",
        "RPE = 9",
        "SBP = 140",
        "DBP = 100",
        "เพิ่มความหนัก HR ไม่เพิ่ม"
      ],
      correctAnswer: 4,
    },
    {
      question: "ข้อใดเป็นผลต่อระบบหายใจในการจัด positioning",
      choices: [
        "เพิ่ม alveolar ไปยังเนื้อปอดส่วนบน",
        "เพิ่มระบบไหลเวียนโลหิตในเนื้อปอดส่วนบน",
        "เพิ่ม ventilation perfusion ในปอดส่วนบน",
        "เพิ่มการขยายตัวของปวดส่วนกลาง",
        "เพิ่ม ventilation ในปอดส่วนบน"
      ],
      correctAnswer: 3,
    },
    {
      question: "ข้อใดควรหลีกเลี่ยงในคนที่โดนตัดขาใต้ต่อข้อเข่า",
      choices: [
        "นอนคว่ำมีถุงทรายทับปลายตอขา",
        "นอนหงายมีหมอนรองใต้เข่า",
        "นอนหงายมีถุงทรายอยู่ที่เข่า",
        "นั่งเก้าอี้โดยมีเก้าอี้อีกตัวรอง",
        "นั่งกับพื้นราบ"
      ],
      correctAnswer: 1,
    },
    {
      question: "ข้อใดไม่ใช่วิธีการทำ vibration",
      choices: [
        "ทำขณะไอ",
        "ทำตามการหายใจออก",
        "ผู้ป่วยทำได้เอง",
        "ทำตรงตำแหน่งมีอุดตัน",
        "ทำตามตำแหน่งการเคลื่อนไหวของ rib"
      ],
      correctAnswer: 2,
    },
    {
      question: "ข้อใดไม่ใช่ Force expiratory technique",
      choices: [
        "Huff",
        "Force expiratory technique",
        "ACBT",
        "Autogenic drainage",
        "Postural drain"
      ],
      correctAnswer: 4,
    },
    {
      question: "ผู้ป่วยมีภาวะหัวใจรุนแรงและมีความดันโลหิตสูงไม่คงที่ ข้อใดถูกต้อง",
      choices: [
        "กล้ามเนื้อหัวใจเกร็งตัว",
        "CO เพิ่มขึ้น",
        "SV ลดลง",
        "Venus return ลดลง",
        "TPR เพิ่มขึ้น"
      ],
      correctAnswer: 0,
    },
    {
      question: "ข้อใดคือความดันในการดูดเสมหะในผู้ใหญ่",
      choices: [
        "40-60 mmHg",
        "60-80 mmHg",
        "80-100 mmHg",
        "100-150 mmHg",
        "150 mmHg ขึ้นไป"
      ],
      correctAnswer: 3,
    },
    {
      question: "ข้อใดเป็นพัฒนาการสมวัย",
      choices: [
        "เด็กคลอดก่อนกำหนด อายุ 8 เดือน สามารถนั่งทรงตัวเองได้แต่ไม่สามารถยืนได้",
        "เด็กอายุ 10 เดือน ตรวจ BBK เป็น + ทุกครั้งที่ถูกเท้า",
        "เด็กอายุ 8 เดือนตรวจ ATNR หันศีรษะมาทางด้านขวาขัดเจน",
        "เด็กอายุ 5 เดือน พลิกตะแคงตัวเองได้ แต่ไม่สามารถใช้มือในแนวกลางได้",
        "เด็กคลอดก่อนกำหนด 32 สัปดาห์ ปัจจุบันอายุ 12 เดือนไม่สามารถยืนได้"
      ],
      correctAnswer: 0,
    },
    {
      question: "ข้อใดควรหลีกเลี่ยงในเด็กที่มีพัฒนาการล่าช้า ที่มีความตึงตัวกล้ามเนื้อต่ำ เพื่อฝึกเดิน",
      choices: [
        "จับมือเด็กทั้งสองข้างดึงขึ้นเหนือศีรษะ",
        "จับทั้งสองข้างให้อยู่ระดับเอวของเด็ก",
        "จับมือเด็กข้างใดข้างหนึ่งให้อยู่ระดับเอวของเด็ก",
        "จับมือทั้งสองข้างให้อยู่ระดับสะโพก",
        "ประคองเด็กโดยมือสอดใต้รักแร้ของเด็ก"
      ],
      correctAnswer: 0,
    },
    {
      question: "ข้อใดผิด การติดเชื้อในระบบประสาทส่วนกลาง",
      choices: [
        "Brain abccss มีไข้สูง",
        "ICP สูง",
        "Tabes dorsalis",
        "CNS focal paleneyna มีการเฉพาะที่",
        "ตัดข้อในระบบประสาทบางมัด"
      ],
      correctAnswer: 4,
    },
]

export default quizData;
