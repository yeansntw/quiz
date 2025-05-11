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
    {
        question: "ในเด็กที่พบว่ามี brain turmor มักพบอาการอะไรร่วมด้วยคือ",
        choices: [
            "Hydrocephalus",
            "Hypertrophy",
            "Hypotonicity",
            "Hypertonicity",
        ],
        correctAnswer: 0,
    },
    {
        question: "จุดกดเจ็บของกล้ามเนื้อใดที่มีอาการร้าวไปบริเวณกลางศีรษะ ท้ายทอย บริเวณในตา หน้าผาก และกกหู",
        choices: [
            "Suboccioital muscle",
            "Sternocleidomastoid muscle",
            "Spenius capitis muscle",
            "Levator scapulae muscle",
        ],
        correctAnswer: 1,
    },
    {
        question: "ใน 1 นาที มีอากาศไหลเข้าสู่ปอดประมาณกี่ลิตรในคนปกติขณะพัก",
        choices: [
            "1L/min",
            "2L/min",
            "15L/min",
            "6L/min",
        ],
        correctAnswer: 3,
    },
    {
        question: "การวินิฉัยโรค MS ในทางคลินิกจะต้องพบว่ามีพยาธิสภาพเกิดขึ้นที่ใด และอย่างน้อยกี่ตำแหน่ง",
        choices: [
            "Gray matter - 1 ตำแหน่ง",
            "White matter - 1 ตำแหน่ง",
            "Gray matter - 2 ตำแหน่ง",
            "White matter - 2 ตำแหน่ง",
        ],
        correctAnswer: 3,
    },
    {
        question: "Mallet finger เกิดขึ้นที่ข้อต่อใด",
        choices: [
            "DIP",
            "PIP",
            "MCP",
            "DIP&PIP",
        ],
        correctAnswer: 0,
    },
    {
        question: "ผู้ป่วยได้รับบาดเจ็บของไขสันหลังระดับ C6 ควบคุมการขับถ่ายไม่ได้ และสูญเสียความรู้สึกทุกชนิด ยกเว้น proprioceptive, vibration และ tactile senses และไม่สามารถควบคุมการทำงานของกล้ามเนื้อทั้งสองซีกของร่างกายในส่วนที่ต่ำกว่ารอยโรค สรุปการวินิฉัยอย่างไร",
        choices: [
            "Incomplete quadriplegia C6 (gr.B)",
            "Incomplete quadriplegia C5 (gr.B)",
            "Incomplete quadriplegia C5 (gr.C)",
            "Incomplete quadriplegia C6 (gr.C)",
        ],
        correctAnswer: 1,
    },
    {
        question: "ข้อใดเป็น red fleg ที่บ่งบอกถึงพัฒนาการล่าช้าในเด็กอายุ 1 ปี 2 เดือน",
        choices: [
            "ไม่เล่นกับเพื่อน",
            "ไม่บอกขับถ่าย",
            "พูดเป็นคำไม่มีความหมาย",
            "สื่อสารภาษากายไม่ได้",
            "เดินไม่ได้",
        ],
        correctAnswer: 3,
    },
    {
        question: "เด็กในข้อใดที่มีความเสี่ยงในพัฒนาการการเคลื่อนไหวล่าช้า",
        choices: [
            "6 เดือน ไม่สามารถนั่งทรงตัวโดยใช้มือยันเพื่อน",
            "3 เดือน ไม่สามารถพลิกคว่ำได้ และไม่สามารถเล่นของแนวกลางลำตัวได้",
            "4 เดือน ไม่สามารถลุกขึ้นมานั่งจากท่านอนหงาย",
            "10 เดือน ไม่สามารถยืนและเดินได้",
            "8 เดือน ไม่สามารถคืบและกลิ้ง",
        ],
        correctAnswer: 4,
    },
    {
        question: "รูปแบบการเดินของผู้ป่วย Pakinson คือข้อใด",
        choices: [
            "ataxic gait",
            "antalgic gait",
            "shuffle gait",
            "circumduction gait",
            "E Trendelenbrug gait",
        ],
        correctAnswer: 2,
    },
    {
        question: "ข้อใดเป็นการรักษา chroinc Peripheral artery disease",
        choices: [
            "ลดบวมโดยถาวร elevation & pumping exercise",
            "เพิ่ม walking capacity by exercise training",
            "เพิ่ม blood circulation โดย superficial heat",
            "ลด claudication by message",
            "Decrease exercise pain ให้ rest",
        ],
        correctAnswer: 1,
    },
     {
        question: "เทคนิคกระตุ้น Brachial plexus injury แบบ complete denervated",
        choices: [
            "Monopolar, supramax intensity เห็นการหดตัวของกล้ามเนื้อ",
            "Bipolar, sub max intensity เห็นการหดตัวของกล้ามเนื้อ",
            "Bipolar, supramax intensity เห็นการหดตัวของกล้ามเนื้อ",
            "Bipolar minimum intensity เห็นการหดตัวของกล้ามเนื้อ",
            "Monopolar, max intensity comfortable เห็นการหดตัวของกล้ามเนื้อ",
        ],
        correctAnswer: 4,
    },
    {
        question: "โรคที่พบโปรตีนในปัสสาวะคือโรคใด",
        choices: [
            "Myotonic Dystrophy (MD)",
            "Guillain-Barre Syndrome (GBS)",
            "Amyotrophic Lateral Sclerosis (ALS)",
            "Myasthenia Gravis (MG)",
            "Multiple Sclerosis (MS)",
        ],
        correctAnswer: 0,
    },
     {
        question: "ข้อใดไม่เหมาะสมในการป้องกันภาวะแทรกซ้อนระบบหายใจในผู้ป่วย myasthenia gravis",
        choices: [
            "การฝึกหายใจเพื่อเพิ่มการระบายอากาศ",
            "การฝึกหายใจแบบห่อปาก",
            "การฝึกเพิ่มความแข็งแรงกล้ามเนื้อหายใจจนรู้สึกล้า",
            "การฝึกไออย่างมีประสิทธิภาพ",
            "การใช้เครื่องช่วยหายใจเมื่อมีอาการเหนื่อย",
        ],
        correctAnswer: 2,
    },
     {
        question: "ข้อใดไม่ถูกต้องในการรักษาเพื่อลดบวมในผู้ป่วยที่มีความผิดปกติของระบบน้ำเหลือง",
        choices: [
            "การออกกำลังกาย แบบ Isotonic pumping exercise",
            "นวดแบบ stationary circles",
            "นวดแบบ scooping ร่วมกับจัดท่าทาง",
            "การออกกำลังกาย แบบ Passive pumping exercise",
            "การใช้เครื่อง intermittent mechanical compression",
        ],
        correctAnswer: 3,
    },
     {
        question: "ข้อใดคือการรักษา ป้องกันที่เหมาะสมสำหรับการหดรั้งที่ ANTERIOR AXILLARY FOLD",
        choices: [
            "shoulder flexion",
            "shoulder adbuction",
            "shoulder extension",
            "shoulder internal rotation",
            "shoulder external rotation",
        ],
        correctAnswer: 2,
    },
    {
        question: "ข้อใดเป็นปัญหาที่พบน้อยในผู้ป่วยที่มีภาวะ adolescent scoliosis",
        choices: [
            "imbalance of muscle",
            "Poor breathing",
            "Postural imbalance",
            "Poor posture",
            "Nerve radicular pain",
        ],
        correctAnswer: 4,
    },
    {
        question: "ข้อใดไม่ใช่การรักษาในผู้ป่วยโรคข้อเสื่อม",
        choices: [
            "เพิ่มความแข็งแรงของกล้ามเนื้อรอบข้อเข่า",
            "ลดการผิดรูปของข้อเข่า",
            "ลดปวดของข้อเข่า",
            "เพิ่มความทนทานของกล้ามเนื้อรอบข้อเข่า",
            "เพิ่มความยืดหยุ่นของกล้ามเนื้อรอบข้อเข่า",
        ],
        correctAnswer: 1,
    },
    {
        question: "ปัญหาในข้อใดพบได้น้อยในผู้ป่วย Adolescent idiopathic scoliosis",
        choices: [
            "Postural imbalance",
            "Breathing problem",
            "Muscle imbalance",
            "Nerve radiated pain",
            "Poor posture",
        ],
        correctAnswer: 3,
    },
     {
        question: "ผู้สูงอายุมีความบกพร่องใดจะพบการเดินแบบ antalgic gait",
        choices: [
            "tightness of hip adductor",
            "weakness of quadriceps",
            "impaired knee proprioception",
            "hip join pain",
            "tightness of hamstring",
        ],
        correctAnswer: 3,
    },
    {
        question: "การฝึกใดในนักกีฬาบาสที่เหมาะกับทักษะการหลบหลีกคู่ต่อสู้",
        choices: [
            "coordination",
            "speed",
            "power",
            "balance",
            "Agility",
        ],
        correctAnswer: 4,
    },
    {
        question: "ข้อใดไม่ถูกต้องเกี่ยวกับการออกกำลังกายหลังผ่าตัด mastectomy",
        choices: [
            "pendulum exercise หลังผ่าตัดทันที",
            "manual resistance exercises หลังผ่าตัด 1 สัปดาห์",
            "AROM exercises หลังผ่าตัด 1 สัปดาห์",
            "ลดบวมด้วย pumping exercises",
            "active exercise ขยับข้อศอกและข้อมือให้เร็วที่สุด",
        ],
        correctAnswer: 0,
    },
]

export default quizData;
