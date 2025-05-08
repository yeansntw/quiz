const quizData = [
    {
        question: "ภาวะแทรกซ้อนของผู้ป่วยที่ถูกตัดแขนและขามีอะไรบ้าง ยกเว้นข้อใด",
        choices: [
            "แผลติดเชื้อ",
            "แขนขาหลอน",
            "ข้อติด",
            "ปวด",
        ],
        correctAnswer: 3,
    },
    {
        question: "Ligament ใดเป็นตัวสำคัญในการบ่งชี้ว่าเป็น unstable fracture of spine",
        choices: [
            "Interspinous ligament",
            "Ligamentom flavum",
            "Suprasinous ligament",
            "Posterior ligament",
        ],
        correctAnswer: 3,
    },
    {
        question: "ข้อใดเป็นอาการของ myositis",
        choices: [
            "อาการชา",
            "อาการสั่นร่วมกับอาการอ่อนแรง",
            "อาการปวด บวม แดง ร้อน",
            "ไม่มีข้อใดถูก",
        ],
        correctAnswer: 2,
    },
    {
        question: "ข้อใดเป็นสาเหตุของการเกิดโรคเก๊าท์",
        choices: [
            "ร่างกายมีกรดยูริกมากเกินไป",
            "อายุมากกว่า 50 ปี",
            "ร่างกายสะสมแคลเซียมมากเกินไป",
            "พันธุกรรม",
        ],
        correctAnswer: 0,
    },
    {
        question: "ข้อใดกล่าวถูกต้องเกี่ยวกับ muscle strain",
        choices: [
            "กล้ามเนื้อถูกหรือได้รับ overstretched",
            "มากเกินไปหรือมีการฉีกขาดหรือถูกกระแทก",
            "การวินิฉัยของหมอจะทำการตรวจในระยะ painful area",
            "การรักษาต้องยึดหลักการ RICE",
        ],
        correctAnswer: 3,
    },
    {
        question: "อาการใดไม่ใช่อาการของ capsulitis",
        choices: [
            "Pain",
            "Stiffness ของทุก direction",
            "Atrophy of muscle",
            "Abduct แขนจะมี pain ระหว่าง 60-120 องศา",
        ],
        correctAnswer: 3,
    },
    {
        question: "ข้อใดไม่ใช่อาการของ RSD",
        choices: [
            "ปวดแสบ-ปวดร้อนที่นิ้วมือ",
            "มีภาวะ การอักเสบ",
            "มีภาวะชาที่ปลายเท้า",
            "รับความรู้สึก (touch, temperature) ไวกว่าปกติ",
        ],
        correctAnswer: 2,
    },
    {
        question: "ผู้ป่วยไวรัสตับอักเสบบีจะมีอาการแสดงอย่างไร",
        choices: [
            "อาการไข้ ปวดเมื่อยตามตัว อ่อนเพลีย เบื่ออาหาร คลื่นไส้ อาเจียน ตาเหลือง",
            "ข้อยึด อาการเหลือง ไข้สูง",
            "ไม่เหลือง ปวดข้อ ปวดกล้ามเนื้อคอ",
            "ปวดข้อและผื่นแดงที่แก้ม ปวดเมื่อยตามตัว",
        ],
        correctAnswer: 0,
    },
    {
        question: "ข้อใดคือปัญหาของผู้ป่วยทางคลินิกที่สำคัญของผู้ป่วย myositis",
        choices: [
            "Swelling และ muscle weakness",
            "Numbness และ atrophy",
            "Limit ROM และ abnormal function",
            "ข้อ ก. และ ค.",
        ],
        correctAnswer: 0,
    },
    {
        question: "ข้อใดไม่ใช่ลักษณะของ rheumatoid arthiritis",
        choices: [
            "เป็น sympathetic disease",
            "วินิฉัยโดยการตรวจ serum",
            "พบ subcutaneous granuloma และ central areas of fibrinoid necrpsos",
            "พบ juxta and loss",
        ],
        correctAnswer: 3,
    },
    {
        question: "ข้อใดผิดในการแบ่งระดับโรคข้ออักเสบรูมาตอยด์ตามหลัก American rheumatology association",
        choices: [
            "ระดับ 1 ใช้ชีวิตได้ตามปกติ",
            "ระดับ 2 ทำกิจวัตรประจำวันได้ ใกล้เคียงปกติ แม้ว่ามีความผิดปกติที่ข้อ",
            "ระดับ 3 ไม่สามารถทำกิจวัตรประจำวันได้",
            "ไม่มีข้อใดผิด",
        ],
        correctAnswer: 2,
    },
    {
        question: "TB spine มักจะพบที่ตำแหน่งใดบ้าง",
        choices: [
            "Cervical, upper thoracic",
            "Upper thoracic, lower thoracic",
            "Lower thoracic, upper lumbar",
            "Lower lumbar, sacrum",
        ],
        correctAnswer: 2,
    },
    {
        question: "ผลการตรวจทางห้องปฏิบัติการที่อาจพบได้ในฝีในสมอง ได้แก่ข้อใด",
        choices: [
            "มี leukocytosis พบได้ 2 ใน 3 ของผู้ป่วย มีเพียงร้อยละ 10 ของผู้ป่วยที่มีเม็ดเลือดขาวสูงมากกว่า 10,000 เซลล์/ลูกบาศก์มิลลิเมตร",
            "Erythrocyte sedimentation rate (ESR) มักสูงร้อยละ 60-90 ของผู้ป่วย ESR อาจมีประโยชน์ในกรณีที่ผู้ป่วยมีไข้สูง",
            "การตรวจน้ำไขสันหลัง จะพบความดันเลือดสูง มีเม็ดเลือดขาวสูงเล็กน้อย ระดับโปรตีนอาจปกติหรือสูงกว่าเล็กน้อยและระดับน้ำตาลปกติ",
            "การตรวจเพื่อหาจุดเริ่มต้นของการติดเชื้อ เช่น การทำ chest, x-ray, Flim paranasal sinus, Flim mastoid",
        ],
        correctAnswer: 2,
    },
    {
        question: "ผู้ป่วย muscular dystrophy มักมีปัญหาข้อใดมากที่สุด",
        choices: [
            "Muscle weakness",
            "Muscle tightness",
            "Bed sore",
            "Respiratory failure",
        ],
        correctAnswer: 0,
    },
    {
        question: "อาการของ meningitis คือข้อใด",
        choices: [
            "ปวดศีรษะ ปวดหลัง คอแข็ง อาเจียน มีไข้",
            "คอแข็ง อาเจียน ตัวบวม น้ำหนักเพิ่ม มีไข้",
            "ปวดศีรษะ มีไข้ น้ำหนักลด ระดับการรับรู้สติปกติ",
            "ข้อ ก. และ ค.",
        ],
        correctAnswer: 0,
    },
]

export default quizData;
