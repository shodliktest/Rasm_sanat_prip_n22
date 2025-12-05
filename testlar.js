// ==========================================================
// SECTION 1: Data and Global Variables
// Bu bo'limda test savollari ma'lumotlari va veb-sahifa elementlariga bog'langan global o'zgaruvchilar joylashgan.
// ==========================================================

const questionsData = [
  {
    question: "Akvarel bo'yoqlarining afzalligi nimada?",
    options: [
      "Ranglarning yorqinligi va zichligi",
      "Yengil va shaffof bo'yoq qatlamlari yaratish imkoniyati",
      "Uning tez qurishi",
      "Qalin qatlamda ishlatilishi"
    ],
    correctAnswer: "Yengil va shaffof bo'yoq qatlamlari yaratish imkoniyati"
  },
  {
    question: "Rasmning orqa fon qismi nima deb ataladi?",
    options: [
      "Perspektiva",
      "Orqa plan (Fon)",
      "Portret",
      "Blik"
    ],
    correctAnswer: "Orqa plan (Fon)"
  },
  {
    question: "Manzara janri nimani tasvirlaydi?",
    options: [
      "Inson qiyofasi",
      "Jonsiz narsalar",
      "Tabiat va atrof-muhit",
      "Tarixiy voqealar"
    ],
    correctAnswer: "Tabiat va atrof-muhit"
  },
  {
    question: "Rassomlik san’ati qanday tasviriy vositalarni birlashtiradi?",
    options: [
      "Faqat qalam va soya",
      "Chiziq, rang, shakl va kompozitsiya",
      "Marmar va tosh",
      "Faqat naqsh"
    ],
    correctAnswer: "Chiziq, rang, shakl va kompozitsiya"
  },
  {
    question: "Monumental rangtasvirning asosiy turlarini aniqlang?",
    options: [
      "Faqat moyli rasm",
      "Freska, mozaika, panno",
      "Eskiz va illyustratsiya",
      "Faqat akvarel"
    ],
    correctAnswer: "Freska, mozaika, panno"
  },
  {
    question: "Mozaika qanday materiallardan tayyorlanadi?",
    options: [
      "Faqat loy",
      "Rangli tosh, shisha (smalta) bo'laklari",
      "Faqat qog'oz",
      "Yog'och parchalari"
    ],
    correctAnswer: "Rangli tosh, shisha (smalta) bo'laklari"
  },
  {
    question: "Kollaj so'zining ma'nosi nima?",
    options: [
      "Tasvirni o'yib tushirish",
      "Har xil materiallarni (qog'oz, mato) yopishtirib kompozitsiya tuzish",
      "Devorga rasm chizish",
      "Haykaltaroshlik usuli"
    ],
    correctAnswer: "Har xil materiallarni (qog'oz, mato) yopishtirib kompozitsiya tuzish"
  },
  {
    question: "Kulolchilik mahsulotlarini yasash uchun asosiy material nima?",
    options: [
      "Yog'och",
      "Loy (gil)",
      "Marmar",
      "Shisha"
    ],
    correctAnswer: "Loy (gil)"
  },
  {
    question: "Grafikada 'Shtrix'ning ahamiyati nima?",
    options: [
      "Faqat rang berish",
      "Tasvirga hajm, soya va turlicha tus berish vositasi",
      "Qalamni o'tkirlash",
      "Faqat chiziq chizish"
    ],
    correctAnswer: "Tasvirga hajm, soya va turlicha tus berish vositasi"
  },
  {
    question: "Chiziqli perspektivada uzoqlashgan parallel chiziqlar qayerda tutashadi?",
    options: [
      "Ko'z balandligidan pastda",
      "Ufq chizig'ida (g'oyib bo'lish nuqtasida)",
      "Rasmning o'rtasida",
      "Har xil joylarda"
    ],
    correctAnswer: "Ufq chizig'ida (g'oyib bo'lish nuqtasida)"
  },
  {
    question: "Haykaltaroshlikning eng qadimiy turlaridan biri?",
    options: [
      "Loy ishi",
      "Marmar o'ymakorligi",
      "Bronza quyish",
      "Yog'och o'ymakorligi"
    ],
    correctAnswer: "Loy ishi"
  },
  {
    question: "O'zbek xalq amaliy san'atining asosiy turlari?",
    options: [
      "Kandakorlik, kulolchilik, zardo'zlik, o'ymakorlik",
      "Faqat miniatyura",
      "Faqat portret va manzara",
      "Grafika va rangtasvir"
    ],
    correctAnswer: "Kandakorlik, kulolchilik, zardo'zlik, o'ymakorlik"
  },
  {
    question: "Ranglarning tabiiy xususiyatlarini o'rganadigan fan nima?",
    options: [
      "Grafika",
      "Kompozitsiya",
      "Rangshunoslik",
      "Perspektiva"
    ],
    correctAnswer: "Rangshunoslik"
  },
  {
    question: "Deyarli barcha tasviriy faoliyat turlari uchun umumiy bo'lgan asosiy bosqich?",
    options: [
      "Rang berish",
      "Ishni rejalashtirish (eskiz chizish)",
      "Faqat yelimlash",
      "Qaychidan foydalanish"
    ],
    correctAnswer: "Ishni rejalashtirish (eskiz chizish)"
  },
  {
    question: "Tasviriy san'atda 'shrift' deganda nimani tushunasiz?",
    options: [
      "Rasm",
      "Ranglar kombinatsiyasi",
      "Matnning yozilishi uchun foydalaniladigan harflar to'plami",
      "Grafik elementlar"
    ],
    correctAnswer: "Matnning yozilishi uchun foydalaniladigan harflar to'plami"
  },
  {
    question: "Axromatik ranglar qanday turlarni o'z ichiga oladi?",
    options: [
      "Faqat Qizil, sariq, ko'k",
      "Oq, qora, kulrang",
      "Faqat yorqin ranglar",
      "Faqat Issiq ranglar"
    ],
    correctAnswer: "Oq, qora, kulrang"
  },
  {
    question: "Rangni ajratishning asosiy tavsiflari (uchlik) qaysilar?",
    options: [
      "Yorug'lik, hajm, chiziq",
      "Tus, to'yinganlik (zichlik), yorug'lik",
      "Soya, kontrast, blik",
      "Issiqlik, sovuqlik, neytral"
    ],
    correctAnswer: "Tus, to'yinganlik (zichlik), yorug'lik"
  },
  {
    question: "Odamlar va ularning kundalik turmushini aks ettiruvchi janr?",
    options: [
      "Batal janr",
      "Maishiy janr (bytovoy)",
      "Animalistik janr",
      "Mifologik janr"
    ],
    correctAnswer: "Maishiy janr (bytovoy)"
  },
  {
    question: "Kulolchilikda 'sirlash' nima uchun amalga oshiriladi?",
    options: [
      "Loyni yumshatish uchun",
      "Buyumning yuzasini bezash va suv o'tkazmaydigan qilish uchun",
      "Faqat rang berish uchun",
      "Loyni qurib qolmasligi uchun"
    ],
    correctAnswer: "Buyumning yuzasini bezash va suv o'tkazmaydigan qilish uchun"
  },
  {
    question: "Qaysi bo'yoq turi shaffoflik va yengillik xususiyatiga ega?",
    options: [
      "Moybo'yoq",
      "Akvarel",
      "Gouash",
      "Tempera"
    ],
    correctAnswer: "Akvarel"
  },
  {
    question: "Asosiy ranglar aralashmasidan hosil bo'lgan ranglar nima deyiladi?",
    options: [
      "To'q ranglar",
      "Axromatik ranglar",
      "Qo'shimcha (ikkinchi darajali) ranglar",
      "Sovuq ranglar"
    ],
    correctAnswer: "Qo'shimcha (ikkinchi darajali) ranglar"
  },
  {
    question: "Kompozitsiyada 'muvozanat' nimani anglatadi?",
    options: [
      "Faqat bitta narsani tasvirlash",
      "Ranglarning yorqinligi",
      "Tasvir elementlarining o'zaro teng taqsimlanishi va uyg'unligi",
      "Faqat katta hajm"
    ],
    correctAnswer: "Tasvir elementlarining o'zaro teng taqsimlanishi va uyg'unligi"
  },
  {
    question: "Plastilin bilan ishlashning eng oddiy usuli?",
    options: [
      "Yopishtirish",
      "Dumaloqlash (dumalatish)",
      "O'yib ishlash",
      "Kesib ishlash"
    ],
    correctAnswer: "Dumaloqlash (dumalatish)"
  },
  {
    question: "O'zbek xalq amaliy san'atida 'Is'limiy naqsh' nima?",
    options: [
      "Geometrik shakllar",
      "Hayvonlar tasviri",
      "O'simliklar, gullar, yaproqlar motivlari asosidagi bezak",
      "Arab yozuvlari"
    ],
    correctAnswer: "O'simliklar, gullar, yaproqlar motivlari asosidagi bezak"
  },
  {
    question: "Tasviriy san'atda 'perspektiva' nimani o'rgatadi?",
    options: [
      "Ranglarni aralashtirishni",
      "Hajm va fazoning tekislikda qisqarish qoidalarini",
      "Yog'ochga ishlov berishni",
      "Faqat portret chizishni"
    ],
    correctAnswer: "Hajm va fazoning tekislikda qisqarish qoidalarini"
  },
  {
    question: "Grafika san'atida 'illyustratsiya' nima?",
    options: [
      "Tarixiy bino",
      "Kitob yoki matn mazmunini ochib beruvchi tasvir (rasm)",
      "Katta devoriy panno",
      "Jonsiz narsalar tasviri"
    ],
    correctAnswer: "Kitob yoki matn mazmunini ochib beruvchi tasvir (rasm)"
  },
  {
    question: "Haykaltaroshlikda ishlatiladigan vosita - Stek qaysi materiallardan tayyorlanishi mumkin?",
    options: [
      "Faqat metall",
      "Yog'och, suyak, metall, plastmassa",
      "Faqat shisha",
      "Faqat tosh"
    ],
    correctAnswer: "Yog'och, suyak, metall, plastmassa"
  },
  {
    question: "Rasmda eng qorong'u joy nima deb ataladi?",
    options: [
      "Yarim soya",
      "Soya",
      "Blik",
      "Kontrast"
    ],
    correctAnswer: "Soya"
  },
  {
    question: "Moybo'yoq bilan ishlashda qaysi material asosiy bo'yoqni tashkil qiladi?",
    options: [
      "Suv",
      "Yelim",
      "O'simlik moylari (Zig'ir, chigit moylari)",
      "Spirt"
    ],
    correctAnswer: "O'simlik moylari (Zig'ir, chigit moylari)"
  },
  {
    question: "Grafik dizaynda 'Logotip'ning asosiy maqsadi nima?",
    options: [
      "Faqat rang berish",
      "Brend yoki kompaniyani tanituvchi va ifodalovchi yagona belgi yaratish",
      "Tabiatni tasvirlash",
      "Qo'lda rasm chizish"
    ],
    correctAnswer: "Brend yoki kompaniyani tanituvchi va ifodalovchi yagona belgi yaratish"
  },
  {
    question: "Gouash bo'yog'ining asosiy farqi nimada?",
    options: [
      "Suv bilan juda tez yoyiladi",
      "Bo'yoq qatlami oq rang aralashmasi tufayli qalin va qoplovchi (no-shaffof)",
      "Faqat yog'ochda ishlatiladi",
      "Hech qanday rang aralashtirish kerak emas"
    ],
    correctAnswer: "Bo'yoq qatlami oq rang aralashmasi tufayli qalin va qoplovchi (no-shaffof)"
  },
  {
    question: "Rassomlik asarida 'blik' nima?",
    options: [
      "Eng qorong'u qism",
      "Yorug'likning buyumning yaltiroq yuzasidan qaytgan eng yorqin nuqtasi",
      "Fon qismi",
      "Buyumning o'zi"
    ],
    correctAnswer: "Yorug'likning buyumning yaltiroq yuzasidan qaytgan eng yorqin nuqtasi"
  },
  {
    question: "Amaliy san'atda 'Zardo'zlik' nima?",
    options: [
      "Toshga ishlov berish",
      "Ipak yoki boshqa matolarga oltin va kumush iplar bilan kashta tikish",
      "Kulolchilikning bir turi",
      "Yog'ochga naqsh o'yish"
    ],
    correctAnswer: "Ipak yoki boshqa matolarga oltin va kumush iplar bilan kashta tikish"
  },
  {
    question: "Chiziqli perspektivaning asosiy elementlari nima?",
    options: [
      "Faqat blik va soya",
      "Ufq chizig'i, ko'z balandligi va g'oyib bo'lish nuqtasi",
      "Ranglar va naqshlar",
      "Faqat qora va oq chiziqlar"
    ],
    correctAnswer: "Ufq chizig'i, ko'z balandligi va g'oyib bo'lish nuqtasi"
  },
  {
    question: "Qaysi ranglar 'neytral' ranglar deb hisoblanadi?",
    options: [
      "Qizil va ko'k",
      "Oq, qora, kulrang (Axromatik ranglar)",
      "Sariq va yashil",
      "Faqat Binafsha"
    ],
    correctAnswer: "Oq, qora, kulrang (Axromatik ranglar)"
  },
  {
    question: "Maishiy janrda tasvirlashning asosiy maqsadi?",
    options: [
      "Mifologik qahramonlarni ko'rsatish",
      "Oddiy xalqning kundalik turmushini, urf-odatlarini aks ettirish",
      "Faqat toshdan haykal yasash",
      "Tabiatning abstrakt tasviri"
    ],
    correctAnswer: "Oddiy xalqning kundalik turmushini, urf-odatlarini aks ettirish"
  },
  {
    question: "Kulolchilikda 'Angob' nima?",
    options: [
      "Loy buyumining yuzasini qoplash uchun ishlatiladigan suyuq rangli loy qatlami",
      "Loyni pishirish usuli",
      "Loyni quritish usuli",
      "Loyni aralashtirish usuli"
    ],
    correctAnswer: "Loy buyumining yuzasini qoplash uchun ishlatiladigan suyuq rangli loy qatlami"
  },
  {
    question: "Qizil rangga yashil rangni qo'shish qanday rangni beradi (Subtraktiv aralashuvda, bo'yoqda)?",
    options: [
      "Sariq",
      "Ko'k",
      "Jigarrang (Kulrang/Neytralga yaqin rang)",
      "Oq"
    ],
    correctAnswer: "Jigarrang (Kulrang/Neytralga yaqin rang)"
  },
  {
    question: "Tasviriy san'atda 'proporsiya' nima?",
    options: [
      "Faqat rang",
      "Shakl elementlarining o'zaro nisbati va hajmi",
      "Faqat chiziq",
      "Yorug'lik effekti"
    ],
    correctAnswer: "Shakl elementlarining o'zaro nisbati va hajmi"
  },
  {
    question: "Grafika asarlari odatda qanday yuzalarga ishlanadi?",
    options: [
      "Faqat marmar",
      "Qog'oz, karton, metall yoki linoleum (bosma grafika uchun)",
      "Faqat shisha",
      "Devor"
    ],
    correctAnswer: "Qog'oz, karton, metall yoki linoleum (bosma grafika uchun)"
  },
  {
    question: "Haykaltaroshlikda 'kontrrelyef' nima?",
    options: [
      "Butunlay yumaloq haykal",
      "Tasvir yuzaga botirilgan (chuqurlashtirilgan) tasvir",
      "Yuzadan juda oz bo'rttirib chiqarilgan tasvir",
      "Faqat bo'yash"
    ],
    correctAnswer: "Tasvir yuzaga botirilgan (chuqurlashtirilgan) tasvir"
  },
  {
    question: "Portret janrining turlarini aniqlang?",
    options: [
      "Faqat manzara",
      "Individual, guruhli, avtoportret",
      "Faqat natyurmort",
      "Animalistik va batal"
    ],
    correctAnswer: "Individual, guruhli, avtoportret"
  },
  {
    question: "Grafikada qaysi texnikadan ommaviy nusxalash uchun foydalaniladi?",
    options: [
      "Akvarel",
      "Bosma grafika (Gravyura, ofort, litografiya)",
      "Moyli rasm",
      "Freska"
    ],
    correctAnswer: "Bosma grafika (Gravyura, ofort, litografiya)"
  },
  {
    question: "Qaysi ranglar sovuq ranglar guruhiga kiradi?",
    options: [
      "Qizil, sariq, apelsin",
      "Ko'k, yashilning ko'k tusi, binafsha",
      "Oq, qora, kulrang",
      "Faqat jigarrang"
    ],
    correctAnswer: "Ko'k, yashilning ko'k tusi, binafsha"
  },
  {
    question: "Kompozitsiyada 'simmetriya' nimani anglatadi?",
    options: [
      "Tasvirning tartibsiz joylashuvi",
      "Tasvir elementlarining markaziy o'qqa nisbatan teng, oynasimon takrorlanishi",
      "Ranglarning aralashishi",
      "Faqat harakat"
    ],
    correctAnswer: "Tasvir elementlarining markaziy o'qqa nisbatan teng, oynasimon takrorlanishi"
  },
  {
    question: "Haykaltaroshlikda 'Haykal' nima?",
    options: [
      "Faqat bo'yoq",
      "Uch o'lchamli (hajmdor) tasviriy san'at asari",
      "Ikki o'lchamli chizma",
      "Faqat devoriy bezak"
    ],
    correctAnswer: "Uch o'lchamli (hajmdor) tasviriy san'at asari"
  },
  {
    question: "Yashil va qizil ranglarning aralashmasi qanday tus beradi?",
    options: [
      "To'q sariq",
      "Binafsha",
      "Jigarrang (Kulrangga yaqin)",
      "Ko'k"
    ],
    correctAnswer: "Jigarrang (Kulrangga yaqin)"
  },
  {
    question: "Qaysi janr 'tarixiy voqealar, qahramonliklar'ni tasvirlaydi?",
    options: [
      "Natyurmort",
      "Tarixiy janr",
      "Manzara",
      "Maishiy janr"
    ],
    correctAnswer: "Tarixiy janr"
  },
  {
    question: "Kulolchilikda ishlatiladigan 'parlatish' (polirovka) usuli nima uchun kerak?",
    options: [
      "Loyni yumshatish uchun",
      "Loy buyumining sirtini yaltiroq, tekis va zich qilish uchun",
      "Faqat rang berish uchun",
      "Loyni tez quritish uchun"
    ],
    correctAnswer: "Loy buyumining sirtini yaltiroq, tekis va zich qilish uchun"
  },
  {
    question: "Qaysi ranglar 'asosiy' ranglar emas?",
    options: [
      "Qizil, sariq, ko'k",
      "Yashil, binafsha, zarg'aldoq",
      "Qora, oq, kulrang",
      "Faqat ko'k"
    ],
    correctAnswer: "Yashil, binafsha, zarg'aldoq"
  },
  {
    question: "O'zbek miniatyura maktabining eng yorqin namoyandasi?",
    options: [
      "O'rol Tansiqboyev",
      "Kamolliddin Behzod",
      "Cho'lpon",
      "Bobur"
    ],
    correctAnswer: "Kamolliddin Behzod"
  },
  {
    question: "Grafikada 'litografiya' nima?",
    options: [
      "Yog'ochga o'yish",
      "Tosh yuzasiga rasm chizib, undan bosma olish usuli",
      "Moyli rasm",
      "Devorga rasm chizish"
    ],
    correctAnswer: "Tosh yuzasiga rasm chizib, undan bosma olish usuli"
  },
  {
    question: "Yog'och o'ymakorligi qanday asboblar bilan amalga oshiriladi?",
    options: [
      "Mo'yqalam va palitra",
      "Chizg'ich va sirkul",
      "Iskana, pichoq, randa",
      "Faqat qaychi"
    ],
    correctAnswer: "Iskana, pichoq, randa"
  },
  {
    question: "Akvarel bo'yog'i qaysi asosda tayyorlanadi?",
    options: [
      "Moy asosida",
      "Suv asosida",
      "Spirt asosida",
      "Smola asosida"
    ],
    correctAnswer: "Suv asosida"
  },
  {
    question: "Rasmning markaziy qismi nima deb ataladi?",
    options: [
      "Yon plan",
      "Markaziy plan (O'rta plan)",
      "Fon",
      "Soya"
    ],
    correctAnswer: "Markaziy plan (O'rta plan)"
  },
  {
    question: "Ranglarning bir-biriga qarama-qarshi joylashuvi nima deyiladi?",
    options: [
      "Garmoniya",
      "Tus",
      "Kontrast",
      "Analogiya"
    ],
    correctAnswer: "Kontrast"
  },
  {
    question: "Qaysi ranglar guruhida 'och ranglar' mavjud?",
    options: [
      "Faqat Qora",
      "Kulrang turlarida (oq aralashgan)",
      "Faqat ko'k",
      "Faqat qizil"
    ],
    correctAnswer: "Kulrang turlarida (oq aralashgan)"
  },
   {
    question: "Rang tasvirda tasviriy vosita sifatida nima qo'llaniladi?",
    options: [
      "Faqat chiziqlar",
      "Hajm va proporsiya",
      "Rang",
      "Qalam"
    ],
    correctAnswer: "Rang"
  },
  {
    question: "Amaliy san’atda “bodom tasviri” nimani anglatadi?",
    options: [
      "Boylik va shon-shuhrat",
      "Uyg`onish va bahor",
      "Baxt – iqbol va mehr-muhabbat",
      "Umrboqiylik va kuch"
    ],
    correctAnswer: "Baxt – iqbol va mehr-muhabbat"
  },
  {
    question: "Musavvir o`zining tashqi qiyofasini o`zi tasvirlaydigan janr bu...?",
    options: [
      "Manzara janri",
      "Avtoportret janri",
      "Portret janri",
      "Natyurmort janri"
    ],
    correctAnswer: "Avtoportret janri"
  },
  {
    question: "Yog`och o`ymakorligi qaysi san'at turiga kiradi?",
    options: [
      "Haykaltaroshlik turiga",
      "Nafis san'at turiga",
      "Amaliy san'at turiga",
      "Tasviriy san'at turiga"
    ],
    correctAnswer: "Amaliy san'at turiga"
  },
  {
    question: "Rangshunoslik nima?",
    options: [
      "Ranglarning tabiiy xususiyatlarini o’rganadigan fan",
      "Qalamlar bilan ishlash usuli",
      "Tasviriy san'at tarixi",
      "Haykaltaroshlik usullari"
    ],
    correctAnswer: "Ranglarning tabiiy xususiyatlarini o’rganadigan fan"
  },
  {
    question: "Qaysi bo'yoq aralashmasi **oq rang**ni hosil qiladi (yorug'likda)?",
    options: [
      "Qizil + Yashil + Ko'k (RGB asosiy ranglari)",
      "Qizil + Sariq",
      "Ko'k + Yashil",
      "Qizil + Ko'k + Sariq (Subtraktiv asosiy ranglar)"
    ],
    correctAnswer: "Qizil + Yashil + Ko'k (RGB asosiy ranglari)"
  },
  {
    question: "Monumental san’at janriga qanday asarlar kiradi?",
    options: [
      "Katta o’lchamdagi freskalar, mozaikalar va haykallar (binolarga bog'liq)",
      "Kichik formatdagi tasvirlar",
      "Kitob grafikalari",
      "Oddiy qalam tasvirlari"
    ],
    correctAnswer: "Katta o’lchamdagi freskalar, mozaikalar va haykallar (binolarga bog'liq)"
  },
  {
    question: "Loydan ishlangan buyumlar qanday usullar bilan bezatiladi?",
    options: [
      "Gravirovka, tirash",
      "O'ymakorlik, pichoqlash",
      "Angob, sirlash, parlatish, bo'yash",
      "Yelimlash, qirqish"
    ],
    correctAnswer: "Angob, sirlash, parlatish, bo'yash"
  },
  {
    question: "Haykaltaroshlik san’ati qaysi material bilan ishlaydi?",
    options: [
      "Qalam va siyoh",
      "Yelim va qog'oz",
      "Loy, tosh, marmar, plastilin, gips",
      "Faqat rangli bo'yoqlar"
    ],
    correctAnswer: "Loy, tosh, marmar, plastilin, gips"
  },
  {
    question: "Qaysi ranglar asosiy ranglar hisoblanadi?",
    options: [
      "Yashil, ko'k, binafsha",
      "Qizil, sariq, ko'k",
      "Oq, qora, kulrang",
      "Qizil, yashil, ko'k"
    ],
    correctAnswer: "Qizil, sariq, ko'k"
  },
  {
    question: "Rangtasvirda yorug'lik va soyani aniq tasvirlash uchun qanday ranglar birlashadi?",
    options: [
      "Issiq va issiq ranglar",
      "Axromatik va sovuq ranglar",
      "Issiq va sovuq ranglar",
      "Faqat axromatik ranglar"
    ],
    correctAnswer: "Issiq va sovuq ranglar"
  },
  {
    question: "Kontrast so'zining ma'nosi nima?",
    options: [
      "Aralash",
      "Uyg'un",
      "Qarama-qarshilik",
      "Yaqin"
    ],
    correctAnswer: "Qarama-qarshilik"
  },
  {
    question: "Qanday ranglar issiq ranglarga kiradi?",
    options: [
      "Ko'k, yashil, binafsha",
      "Qizil, sariq, apelsin (zarg'aldoq)",
      "Oq, qora, kulrang",
      "Binafsha, kulrang"
    ],
    correctAnswer: "Qizil, sariq, apelsin (zarg'aldoq)"
  },
  {
    question: "Dastgohli rangtasvirda tasvir nimaga chiziladi?",
    options: [
      "Oddiy qog'ozga",
      "Devor yuzasiga",
      "Maxsus gurunt qoplangan matoga (xolst)",
      "Shishaga"
    ],
    correctAnswer: "Maxsus gurunt qoplangan matoga (xolst)"
  },
  {
    question: "Loy bilan ishlashda qaysi usullar qo'llaniladi?",
    options: [
      "Aylantirish, tekislash",
      "Faqat yopishtirish",
      "Dumaloqlash, chimchimlab chiqarish, qo'shish, tekislash",
      "Faqat qirqish"
    ],
    correctAnswer: "Dumaloqlash, chimchimlab chiqarish, qo'shish, tekislash"
  },
  {
    question: "Ranglar garmoniyasi deganda nimani tushunasiz?",
    options: [
      "Ranglarning qora rang bilan aralashishi",
      "Ranglarning o'zaro uyg'unlashuvi va munosabatlari",
      "Faqat yorqin ranglarning ishlatilishi",
      "Faqat sovuq ranglarning ishlatilishi"
    ],
    correctAnswer: "Ranglarning o'zaro uyg'unlashuvi va munosabatlari"
  },
  {
    question: "Rasmda eng yorug` nuqta nima deyiladi?",
    options: [
      "Soya",
      "Yarim soya",
      "Blik",
      "Refleks"
    ],
    correctAnswer: "Blik"
  },
  {
    question: "Pechda pishirilgan loydan yasalgan haykaltaroshlik asari nima deb ataladi?",
    options: [
      "Gips",
      "Plastilin",
      "Terrakota",
      "Bronza"
    ],
    correctAnswer: "Terrakota"
  },
  {
    question: "I.Nyuton yaratgan rang doirasi nechta spektrdan iborat edi?",
    options: [
      "8 ta",
      "5 ta",
      "7 ta",
      "6 ta"
    ],
    correctAnswer: "7 ta"
  },
  {
    question: "Qanday ranglar sovuq ranglarga kiradi?",
    options: [
      "Qizil, sariq, zarg'aldoq",
      "Ko'k, yashil, binafsha (siyohrang)",
      "Oq, qora, kulrang",
      "Malla, qizil"
    ],
    correctAnswer: "Ko'k, yashil, binafsha (siyohrang)"
  },
  {
    question: "Qaysi janr 'tabiatni tasvirlash' san'ati hisoblanadi?",
    options: [
      "Portret",
      "Manzara (Peizaj)",
      "Natyurmort",
      "Batal"
    ],
    correctAnswer: "Manzara (Peizaj)"
  },
  {
    question: "Rangtasvirda yorug'lik effektini yaratishga imkon beruvchi bo'yoq turi?",
    options: [
      "Akvarel",
      "Moybo'yoq",
      "Gouash",
      "Tempera"
    ],
    correctAnswer: "Akvarel"
  },
  {
    question: "Mozaika qanday san'at turi?",
    options: [
      "Rangli shisha yoki toshlardan yuzaga terilgan tasvir",
      "Faqat moybo'yoq bilan devorga ishlash",
      "Yelim va qog'oz bilan ishlash",
      "Qalam bilan chizilgan tasvir"
    ],
    correctAnswer: "Rangli shisha yoki toshlardan yuzaga terilgan tasvir"
  },
  {
    question: "Islimiy naqshlarning asosiy elementi nima?",
    options: [
      "Geometrik shakllar",
      "Hayvon tasvirlari",
      "O'simlik dunyosi (gul, barg, shox)",
      "Odam yuzi"
    ],
    correctAnswer: "O'simlik dunyosi (gul, barg, shox)"
  },
  {
    question: "Relyef haykaltaroshlikning qaysi turiga kiradi?",
    options: [
      "Yumaloq haykaltaroshlik",
      "O'ymakorlik",
      "Yassi haykaltaroshlik",
      "Monumental haykaltaroshlik"
    ],
    correctAnswer: "Yassi haykaltaroshlik"
  },
  {
    question: "Dastgohli rangtasvir nima?",
    options: [
      "Katta devoriy rasm",
      "Eskiz va qoralama",
      "Maxsus matoga (xolstga) ishlanadigan va ko'chirib yurish mumkin bo'lgan rasm",
      "Faqat qalamda ishlangan portret"
    ],
    correctAnswer: "Maxsus matoga (xolstga) ishlanadigan va ko'chirib yurish mumkin bo'lgan rasm"
  },
  {
    question: "Grafikada asosiy tasviriy vosita nima?",
    options: [
      "Rang va yorug'lik",
      "Chiziq, shtrix va dog'",
      "Hajm va soya",
      "Faqat bo'yoq"
    ],
    correctAnswer: "Chiziq, shtrix va dog'"
  },
  {
    question: "Haykaltaroshlikda ishlatiladigan vosita - Stek nima?",
    options: [
      "Bo'yoq aralashtirish uchun taxtacha",
      "Loy yoki plastilinga shakl berish uchun asbob",
      "Qalam bilan rasm chizish uchun asbob",
      "Qog'oz qirqish uchun asbob"
    ],
    correctAnswer: "Loy yoki plastilinga shakl berish uchun asbob"
  },
  {
    question: "Qaysi ranglar 'qo'shimcha ranglar' deb ataladi?",
    options: [
      "Axromatik ranglar",
      "Qizil, sariq, ko'k",
      "Asosiy ranglar aralashmasidan hosil bo'lgan ranglar (yashil, zarg'aldoq, binafsha)",
      "Faqat yorqin ranglar"
    ],
    correctAnswer: "Asosiy ranglar aralashmasidan hosil bo'lgan ranglar (yashil, zarg'aldoq, binafsha)"
  },
  {
    question: "Yog'och o'ymakorligi qanday asboblar bilan amalga oshiriladi?",
    options: [
      "Steklar",
      "Kesuvchi asboblar (pichoq, randalar, iskanalar)",
      "Mo'yqalamlar",
      "Qaychilar"
    ],
    correctAnswer: "Kesuvchi asboblar (pichoq, randalar, iskanalar)"
  },
  {
    question: "Ranglar tabiatda nechta asosiy qismga ajraladi?",
    options: [
      "To'rtta (Qizil, yashil, ko'k, sariq)",
      "Uchta (Xromatik, Axromatik, Spektral)",
      "Ikki qismga (Axromatik va Xromatik)",
      "Besh qismga"
    ],
    correctAnswer: "Ikki qismga (Axromatik va Xromatik)"
  },
  {
    question: "Loy ishi mashg'ulotlarida bolalarda nima rivojlanadi?",
    options: [
      "Faqat xotira",
      "Diqqat, nutq, ijodiy tafakkur, barmoq motorikasi",
      "Faqat yozish qobiliyati",
      "Faqat o'qish qobiliyati"
    ],
    correctAnswer: "Diqqat, nutq, ijodiy tafakkur, barmoq motorikasi"
  },
  {
    question: "Tasviriy san'atda 'shrift' deganda nimani tushunasiz?",
    options: [
      "Rasm chizish usuli",
      "Matnning yozilishi uchun foydalaniladigan harflar to'plami",
      "Ranglar kombinatsiyasi",
      "Haykaltaroshlik materiali"
    ],
    correctAnswer: "Matnning yozilishi uchun foydalaniladigan harflar to'plami"
  },
  {
    question: "Portret asarlarida ko’rsatiladigan asosiy narsa nima?",
    options: [
      "Atrof-muhit",
      "Inson qiyofasi va uning ichki dunyosi",
      "Jonsiz narsalar",
      "Hayvonlar tasviri"
    ],
    correctAnswer: "Inson qiyofasi va uning ichki dunyosi"
  },
  {
    question: "Deyarli barcha tasviriy faoliyat turlari uchun umumiy bo'lgan asosiy bosqich nima?",
    options: [
      "Bo'yoq sotib olish",
      "Savolni yozish",
      "Rasmning xomaki eskizini chizish (qoralama)",
      "Faqat rang berish"
    ],
    correctAnswer: "Rasmning xomaki eskizini chizish (qoralama)"
  },
  {
    question: "Rangtasvirda 'palitra' nima uchun ishlatiladi?",
    options: [
      "Rasm chizish uchun qog'oz",
      "Bo'yoqlarni aralashtirish va kerakli rangni olish uchun taxtacha yoki sirt",
      "Faqat suv uchun idish",
      "Mo'yqalamlarni saqlash uchun quti"
    ],
    correctAnswer: "Bo'yoqlarni aralashtirish va kerakli rangni olish uchun taxtacha yoki sirt"
  },
  {
    question: "Rasmning uzoq qismlari xiralashib, rangi o'zgarib ko'rinishi qanday perspektiva deyiladi?",
    options: [
      "Chiziqli perspektiva",
      "Rang perspektivasi",
      "Havoiy perspektiva",
      "Frontal perspektiva"
    ],
    correctAnswer: "Havoiy perspektiva"
  },
  {
    question: "Gouash bo'yoqlari qanday xususiyatga ega?",
    options: [
      "Juda shaffof",
      "Qalin, qoplovchi (koproq), ranglari kuchli",
      "Faqat mato uchun ishlatiladi",
      "Yelim aralashmasi juda kam"
    ],
    correctAnswer: "Qalin, qoplovchi (koproq), ranglari kuchli"
  },
  {
    question: "Loy ishi mashg'ulotlarida 'silindr yasash' usuli qachon o'rgatiladi?",
    options: [
      "Kichik guruhda",
      "O'rta guruhda",
      "Katta guruh va tayyorlov guruhlarida",
      "Faqat 1-kichik guruhda"
    ],
    correctAnswer: "Katta guruh va tayyorlov guruhlarida"
  },
  {
    question: "Amaliy san'at buyumlariga naqsh solishning asosiy usuli nima?",
    options: [
      "Tasodifiy chiziqlar",
      "Geometrik yoki o'simlik shakllarini simmetrik takrorlash",
      "Faqat yorqin ranglar ishlatish",
      "Faqat hayvonlar tasviri"
    ],
    correctAnswer: "Geometrik yoki o'simlik shakllarini simmetrik takrorlash"
  },
  {
    question: "Qaysi janr 'jang, urush, qahramonlik' mavzularini aks ettiradi?",
    options: [
      "Maishiy janr",
      "Tarixiy janr",
      "Batal janri",
      "Mifologik janr"
    ],
    correctAnswer: "Batal janri"
  },
  {
    question: "Haykaltaroshlikda 'Barelef' nima?",
    options: [
      "Butunlay yumaloq, mustaqil haykal",
      "Yuzadan juda oz bo'rttirib chiqarilgan tasvir",
      "Yuzaga chuqur o'yib tushirilgan tasvir",
      "Faqat rang berish"
    ],
    correctAnswer: "Yuzadan juda oz bo'rttirib chiqarilgan tasvir"
  },
  {
    question: "Amaliy san'atda 'vitraj' nima?",
    options: [
      "Metallga o'yilgan naqsh",
      "Turli rangdagi shisha bo'laklaridan yasalgan kompozitsiya",
      "Qog'ozdan qirqilgan applikatsiya",
      "Devorga chizilgan freska"
    ],
    correctAnswer: "Turli rangdagi shisha bo'laklaridan yasalgan kompozitsiya"
  },
  {
    question: "Odam tasvirlari bilan bir qatorda atrof-muhit, uy-joy ham aks etgan tasvirlar qaysi janrga xos?",
    options: [
      "Manzara",
      "Portret",
      "Maishiy janr (bytovoy)",
      "Natyurmort"
    ],
    correctAnswer: "Maishiy janr (bytovoy)"
  },
  {
    question: "Haykaltaroshlikda 'Gorelef' nima?",
    options: [
      "Tasvir yuzasining yarmi yoki undan ko'proq qismi bo'rttirib chiqarilgan relef",
      "Faqat yuzaga yopishtirilgan narsalar",
      "Butunlay yumaloq haykal",
      "Juda oz bo'rttirib chiqarilgan relef"
    ],
    correctAnswer: "Tasvir yuzasining yarmi yoki undan ko'proq qismi bo'rttirib chiqarilgan relef"
  },
  {
    question: "O'zbek xalq amaliy san'atining eng qadimgi turlaridan biri?",
    options: [
      "Yog'och o'ymakorligi",
      "Kulolchilik",
      "Zargarlik",
      "Kitob grafikalari"
    ],
    correctAnswer: "Kulolchilik"
  },
    {
    question: "Oq va qora ranglarning aralashmasi qaysi rang tusini beradi?",
    options: [
      "Qizil",
      "Kul rang",
      "Yashil",
      "Sariq"
    ],
    correctAnswer: "Kul rang"
  },
  {
    question: "Grafika san'atida asosiy tasviriy vosita nima?",
    options: [
      "Rang",
      "Hajm",
      "Chiziq, shtrix va dog'",
      "Yorug'lik"
    ],
    correctAnswer: "Chiziq, shtrix va dog'"
  },
  {
    question: "Qaysi janr hayvonlarni tasvirlashga ixtisoslashgan?",
    options: [
      "Portret",
      "Manzara",
      "Animalistik janr",
      "Natyurmort"
    ],
    correctAnswer: "Animalistik janr"
  },
  {
    question: "Yog'och o'ymakorligida eng ko'p ishlatiladigan asbob?",
    options: [
      "Mo'yqalam",
      "Stek",
      "Iskana",
      "Qaychi"
    ],
    correctAnswer: "Iskana"
  },
  {
    question: "Rassomlikda 'refleks' nima?",
    options: [
      "Eng qorong'u joy",
      "Qaytarilgan yorug'lik, ya'ni bir buyumning rangi boshqa buyum soyasiga tushishi",
      "Eng yorqin nuqta (Blik)",
      "Orqa fon"
    ],
    correctAnswer: "Qaytarilgan yorug'lik, ya'ni bir buyumning rangi boshqa buyum soyasiga tushishi"
  },
  {
    question: "Kulolchilikda 'terrakota' nima?",
    options: [
      "Metall haykal",
      "Loydan yasalib, pechda pishirilgan sopol buyum",
      "Bo'yalgan rasm",
      "Yog'och o'ymakorligi"
    ],
    correctAnswer: "Loydan yasalib, pechda pishirilgan sopol buyum"
  },
  {
    question: "Yorug'likning buyumning yuzasidan qaytgan eng yorqin nuqtasi nima?",
    options: [
      "Soya",
      "Blik",
      "Kontrast",
      "Refleks"
    ],
    correctAnswer: "Blik"
  },
  {
    question: "Tasviriy san'atda 'proporsiya' nimani anglatadi?",
    options: [
      "Faqat rang berish",
      "Shakl elementlarining o'zaro nisbati va mutanosibligi",
      "Faqat chiziq chizish",
      "Yorug'lik kuchi"
    ],
    correctAnswer: "Shakl elementlarining o'zaro nisbati va mutanosibligi"
  },
  {
    question: "Qaysi ranglar 'issiq' ranglar guruhiga kirmaydi?",
    options: [
      "Qizil",
      "Sariq",
      "Yashilning ko'k tusi",
      "Zarg'aldoq"
    ],
    correctAnswer: "Yashilning ko'k tusi"
  },
  {
    question: "Haykaltaroshlikda 'Gorelef' nima?",
    options: [
      "Faqat devorga bo'yash",
      "Tasvir yuzasining yarmidan ko'pi bo'rttirib chiqarilgan relef",
      "Butunlay tekis tasvir",
      "Juda oz bo'rttirib chiqarilgan relef (Barelef)"
    ],
    correctAnswer: "Tasvir yuzasining yarmidan ko'pi bo'rttirib chiqarilgan relef"
  },
  {
    question: "O'zbek xalq amaliy san'atida 'Is'limiy naqsh' nimaga asoslanadi?",
    options: [
      "Geometrik shakllar",
      "O'simliklar dunyosi (gul, barg, shox)",
      "Hayvon tasvirlari",
      "Arab yozuvlari"
    ],
    correctAnswer: "O'simliklar dunyosi (gul, barg, shox)"
  },
  {
    question: "Qizil va sariq ranglarni aralashtirish qanday rangni hosil qiladi?",
    options: [
      "Yashil",
      "Binafsha",
      "Apelsin (zarg'aldoq)",
      "Ko'k"
    ],
    correctAnswer: "Apelsin (zarg'aldoq)"
  },
  {
    question: "Rasmda 'fon'ning ahamiyati nima?",
    options: [
      "Faqat yorug'lik berish",
      "Tasvirning orqa qismi, kompozitsiyaga chuqurlik va kontekst beradi",
      "Faqat chiziq chizish",
      "Barcha detallarni ko'rsatish"
    ],
    correctAnswer: "Tasvirning orqa qismi, kompozitsiyaga chuqurlik va kontekst beradi"
  },
  {
    question: "Dastgohli rangtasvirda rasm qanday yuzaga ishlanadi?",
    options: [
      "Devor yuzasiga",
      "Oddiy qog'ozga",
      "Maxsus gurunt qoplangan matoga (xolstga)",
      "Shishaga"
    ],
    correctAnswer: "Maxsus gurunt qoplangan matoga (xolstga)"
  },
  {
    question: "Haykaltaroshlikda 'Barelef' nima?",
    options: [
      "Yuzadan juda oz bo'rttirib chiqarilgan tasvir",
      "Butunlay yumaloq haykal",
      "Tasvir yuzaga chuqur o'yib tushirilgan tasvir",
      "Faqat bo'yash"
    ],
    correctAnswer: "Yuzadan juda oz bo'rttirib chiqarilgan tasvir"
  },
  {
    question: "Applikatsiya ishi qanday materiallar bilan amalga oshiriladi?",
    options: [
      "Loy va stek",
      "Mo'yqalam va moybo'yoq",
      "Qog'oz, mato yoki boshqa material bo'laklarini yopishtirish",
      "Marmar va tosh"
    ],
    correctAnswer: "Qog'oz, mato yoki boshqa material bo'laklarini yopishtirish"
  },
  {
    question: "Qaysi janr jonsiz tabiat, ya'ni narsalarni tasvirlashga bag'ishlangan?",
    options: [
      "Manzara",
      "Portret",
      "Natyurmort",
      "Batal"
    ],
    correctAnswer: "Natyurmort"
  },
  {
    question: "Applikatsiya uchun qirqishda asosiy ish vositasi nima?",
    options: [
      "Oddiy qalam",
      "Stek",
      "Qaychi",
      "Mo'yqalam"
    ],
    correctAnswer: "Qaychi"
  },
  {
    question: "Rangtasvirda 'palitra' nima uchun ishlatiladi?",
    options: [
      "Rasm chizish uchun taglik",
      "Bo'yoqlarni aralashtirish va rang tanlash uchun taxtacha yoki sirt",
      "Faqat suv saqlash uchun",
      "Qalamlarni o'tkirlash uchun"
    ],
    correctAnswer: "Bo'yoqlarni aralashtirish va rang tanlash uchun taxtacha yoki sirt"
  },
  {
    question: "Chiziqli perspektivaning asosiy qoidasi?",
    options: [
      "Uzoqdagi narsalar katta ko'rinadi",
      "Narsalar uzoqlashgan sari kichrayadi va ufq chizig'ida tutashadi",
      "Faqat ranglarning o'zgarishi",
      "Barcha chiziqlar parallel"
    ],
    correctAnswer: "Narsalar uzoqlashgan sari kichrayadi va ufq chizig'ida tutashadi"
  },
  {
    question: "Loy bilan ishlashda qaysi usul obyektlarning bo'laklarini biriktirish uchun qo'llaniladi?",
    options: [
      "Dumaloqlash",
      "Yalpoqlash",
      "Yamoqlash (biriktirish)",
      "Chimchimlab chiqarish"
    ],
    correctAnswer: "Yamoqlash (biriktirish)"
  },
  {
    question: "Qaysi janr dengiz manzaralarini tasvirlashga ixtisoslashgan?",
    options: [
      "Manzara",
      "Marinistik janr",
      "Interyer",
      "Animalistik janr"
    ],
    correctAnswer: "Marinistik janr"
  },
  {
    question: "Rang doirasi nechta spektral rangdan iborat?",
    options: [
      "5 ta",
      "7 ta",
      "8 ta",
      "6 ta"
    ],
    correctAnswer: "7 ta"
  },
  {
    question: "Moybo'yoq bilan ishlashda asosiy erituvchi vosita nima?",
    options: [
      "Suv",
      "Skipidar (maxsus moyli erituvchi)",
      "Yelim",
      "Spirt"
    ],
    correctAnswer: "Skipidar (maxsus moyli erituvchi)"
  },
  {
    question: "Kompozitsiyada 'asimmetriya' nima?",
    options: [
      "Tasvirning markaziy o'qqa nisbatan teng, oynasimon takrorlanishi (Simmetriya)",
      "Tasvir elementlarining o'zaro teng bo'lmagan, lekin muvozanatli joylashuvi",
      "Faqat chiziqlar",
      "Barcha ranglarning aralashmasi"
    ],
    correctAnswer: "Tasvir elementlarining o'zaro teng bo'lmagan, lekin muvozanatli joylashuvi"
  },
  {
    question: "Xromatik ranglar qaysilar?",
    options: [
      "Oq, qora, kulrang",
      "Qizil, ko'k, sariq va ulardan hosil bo'lgan barcha ranglar",
      "Faqat issiq ranglar",
      "Faqat sovuq ranglar"
    ],
    correctAnswer: "Qizil, ko'k, sariq va ulardan hosil bo'lgan barcha ranglar"
  },
  {
    question: "Portretda 'Avtoportret' nima?",
    options: [
      "Ikki kishilik portret",
      "Rassomning o'zini tasvirlashi",
      "Manzara ko'rinishi",
      "Jonsiz tabiat"
    ],
    correctAnswer: "Rassomning o'zini tasvirlashi"
  },
  {
    question: "Gouash bo'yog'ining asosiy xususiyati?",
    options: [
      "Juda shaffof",
      "Suvda eruvchan va qoplovchi (no-shaffof)",
      "Faqat moy asosida ishlatiladi",
      "Juda tez qurishi"
    ],
    correctAnswer: "Suvda eruvchan va qoplovchi (no-shaffof)"
  },
  {
    question: "Freska nima?",
    options: [
      "Yog'ochga o'yish",
      "Kitob grafikasining bir turi",
      "Ho'l suvoq ustiga suvda erigan bo'yoqlar bilan devorga ishlangan rasm",
      "Moyli rasm"
    ],
    correctAnswer: "Ho'l suvoq ustiga suvda erigan bo'yoqlar bilan devorga ishlangan rasm"
  },
  {
    question: "Loy ishi mashg'ulotlarida 'silindr yasash' usuli qaysi guruhda o'rgatiladi?",
    options: [
      "Kichik guruh",
      "O'rta guruh",
      "Katta guruh",
      "Tayyorlov guruh"
    ],
    correctAnswer: "Katta guruh"
  },
  {
    question: "Tasviriy san'atda 'stil' so'zi nimani anglatadi?",
    options: [
      "Bo'yoq turi",
      "Rassomning o'ziga xos uslubi, badiiy yondashuvi",
      "Faqat chiziq",
      "Qalam turi"
    ],
    correctAnswer: "Rassomning o'ziga xos uslubi, badiiy yondashuvi"
  },
  {
    question: "Grafikada qaysi texnikada mato yuzasiga rasm o'yiladi va bosma olinadi?",
    options: [
      "Ofort",
      "Litografiya",
      "Ksilografiya (Yog'ochga o'yish)",
      "Linogravyura (Linoleumga o'yish)"
    ],
    correctAnswer: "Linogravyura (Linoleumga o'yish)"
  },
  {
    question: "O'zbek xalq amaliy san'atining asosiy turlaridan biri?",
    options: [
      "Kulolchilik",
      "Kompozitsiya",
      "Perspektiva",
      "Natyurmort"
    ],
    correctAnswer: "Kulolchilik"
  },
  {
    question: "Yashil rangga qizil rangni qo'shish qanday rangni hosil qiladi?",
    options: [
      "Ko'k",
      "To'q sariq",
      "Jigarrang (Kulrang/Neytralga yaqin tus)",
      "Oq"
    ],
    correctAnswer: "Jigarrang (Kulrang/Neytralga yaqin tus)"
  },
  {
    question: "Haykaltaroshlikda 'Loy'dan asar yasashning eng asosiy bosqichi?",
    options: [
      "Bo'yash",
      "Quritish",
      "Shakl berish (modelirovka)",
      "Yelimlash"
    ],
    correctAnswer: "Shakl berish (modelirovka)"
  },
  {
    question: "Qaysi janr harbiy voqealar, jang sahnalari va qahramonliklarni tasvirlaydi?",
    options: [
      "Tarixiy janr",
      "Maishiy janr",
      "Batal janri",
      "Mifologik janr"
    ],
    correctAnswer: "Batal janri"
  },
  {
    question: "Axromatik ranglar qanday ranglarga bo'linadi?",
    options: [
      "Issiq va sovuq",
      "Oq, kulrang, qora",
      "Asosiy va qo'shimcha",
      "Yorqin va xira"
    ],
    correctAnswer: "Oq, kulrang, qora"
  },
  {
    question: "Chiziqli perspektivada narsalar uzoqlashgan sari qanday o'zgaradi?",
    options: [
      "Kattalashadi",
      "Rangini yo'qotadi",
      "Kichrayadi",
      "Yorqinlashadi"
    ],
    correctAnswer: "Kichrayadi"
  },
  {
    question: "Amaliy san'atda 'kandakorlik' nima?",
    options: [
      "Yog'ochga o'yish",
      "Matoga gullar tikish",
      "Metallga (mis, bronza) naqsh o'yish san'ati",
      "Kulolchilik"
    ],
    correctAnswer: "Metallga (mis, bronza) naqsh o'yish san'ati"
  },
  {
    question: "Grafikada 'Litografiya' nima?",
    options: [
      "Yog'ochga bosish",
      "Metallga o'yish (Ofort)",
      "Toshga chizish va undan bosma olish usuli",
      "Faqat qalamda ishlash"
    ],
    correctAnswer: "Toshga chizish va undan bosma olish usuli"
  },
  {
    question: "Rangtasvirda 'svetoten' (yorug'-soya)ning ahamiyati nima?",
    options: [
      "Faqat rang berish",
      "Tasvirga hajm, chuqurlik va realizm berish",
      "Faqat yuzani tekislash",
      "Rasmning yorqinligini oshirish"
    ],
    correctAnswer: "Tasvirga hajm, chuqurlik va realizm berish"
  },
  {
    question: "Qaysi janr turli xil binolarning ichki ko'rinishini tasvirlaydi?",
    options: [
      "Manzara",
      "Natyurmort",
      "Interyer",
      "Portret"
    ],
    correctAnswer: "Interyer"
  },
  {
    question: "Yog'och o'ymakorligida naqsh nima deyiladi?",
    options: [
      "Mozaika",
      "Naqsh",
      "Grafika",
      "O'yma naqsh (o'yma)"
    ],
    correctAnswer: "O'yma naqsh (o'yma)"
  },
  {
    question: "Qizil rangga ko'k rangni qo'shish natijasida qanday rang hosil bo'ladi?",
    options: [
      "Yashil",
      "Binafsha (siyohrang)",
      "Sariq",
      "Zarg'aldoq"
    ],
    correctAnswer: "Binafsha (siyohrang)"
  },
  {
    question: "Amaliy san'atda 'zardo'zlik' nima?",
    options: [
      "Sopol buyumlarni bezash",
      "Mato yoki kiyimga oltin va kumush iplar bilan kashta tikish",
      "Toshga o'yish",
      "Yog'ochga bo'yash"
    ],
    correctAnswer: "Mato yoki kiyimga oltin va kumush iplar bilan kashta tikish"
  },
  {
    question: "Tasviriy san'atning necha turi mavjud?",
    options: [
      "Faqat 2 ta",
      "3 ta (Rangtasvir, Grafika, Haykaltaroshlik)",
      "5 ta",
      "7 ta"
    ],
    correctAnswer: "3 ta (Rangtasvir, Grafika, Haykaltaroshlik)"
  },
  {
    question: "Sariq va ko'k ranglarni aralashtirish qanday rangni hosil qiladi?",
    options: [
      "Qizil",
      "Binafsha",
      "Yashil",
      "Zarg'aldoq"
    ],
    correctAnswer: "Yashil"
  },
  {
    question: "Loydan yasalgan buyumni pishirishdan avval uning yuzasini yaltiroq qilish usuli?",
    options: [
      "Angob",
      "Sirlash",
      "Parlatish (Polirovka)",
      "Bo'yash"
    ],
    correctAnswer: "Parlatish (Polirovka)"
  },
  {
    question: "Miniatyura san'atining asosiy xususiyati nima?",
    options: [
      "Katta devoriy rasm",
      "Kichik o'lchamdagi, aniq detallarga ega tasvir (kitob bezagi)",
      "Faqat qora va oq rang",
      "Abstrakt shakllar"
    ],
    correctAnswer: "Kichik o'lchamdagi, aniq detallarga ega tasvir (kitob bezagi)"
  },
  {
    question: "Amaliy san'atda 'vitraj' nima?",
    options: [
      "Yog'och o'ymakorligi",
      "Loy haykal",
      "Rangli shisha bo'laklaridan yasalgan kompozitsiya",
      "Mato tikish"
    ],
    correctAnswer: "Rangli shisha bo'laklaridan yasalgan kompozitsiya"
  },
  {
    question: "Qaysi janr 'afsonalar, xudolar va qahramonlar' mavzularini aks ettiradi?",
    options: [
      "Maishiy janr",
      "Tarixiy janr",
      "Mifologik janr",
      "Natyurmort"
    ],
    correctAnswer: "Mifologik janr"
  },
  {
    question: "Gips, marmar, tosh kabi qattiq materiallardan ishlash qaysi san'at turiga xos?",
    options: [
      "Rangtasvir",
      "Grafika",
      "Haykaltaroshlik",
      "Applikatsiya"
    ],
    correctAnswer: "Haykaltaroshlik"
  },
  {
    question: "Rasmning orqa fonidagi eng uzoq qism nima deyiladi?",
    options: [
      "Old plan",
      "O'rta plan",
      "Uzoq plan",
      "Markaz"
    ],
    correctAnswer: "Uzoq plan"
  },
  {
    question: "Ranglarning tabiiy tusini o'zgartirmasdan, ularning faqat yorug'lik kuchiga qarab o'zgarishi nima deyiladi?",
    options: [
      "Tus",
      "To'yinganlik",
      "Ochiqlik/To'qlik (Yorug'lik kuchi)",
      "Kontrast"
    ],
    correctAnswer: "Ochiqlik/To'qlik (Yorug'lik kuchi)"
  },
  {
    question: "Soya solishda ko'pincha qaysi ranglardan foydalaniladi?",
    options: [
      "Faqat oq",
      "Asosiy ranglarning to'q tusi va sovuq ranglar",
      "Faqat sariq",
      "Eng yorqin ranglar"
    ],
    correctAnswer: "Asosiy ranglarning to'q tusi va sovuq ranglar"
  },
  {
    question: "Haykaltaroshlikda 'Loy'ni yumshoq va elastik holatda saqlash uchun nima qilish kerak?",
    options: [
      "Quritish",
      "Doim nam mato yoki selofan bilan o'rab qo'yish",
      "Pechda pishirish",
      "Faqat qattiq yuzada saqlash"
    ],
    correctAnswer: "Doim nam mato yoki selofan bilan o'rab qo'yish"
  },
  {
    question: "Qaysi janr insonlarning ichki va tashqi ko'rinishini tasvirlashga qaratilgan?",
    options: [
      "Manzara",
      "Natyurmort",
      "Portret",
      "Batal"
    ],
    correctAnswer: "Portret"
  },
  {
    question: "Rang doirasida bir-biriga qarama-qarshi joylashgan ranglar nima deyiladi?",
    options: [
      "Qo'shimcha ranglar",
      "Yarim ranglar",
      "Kontrast (yoki qo'shimcha) ranglar",
      "Axromatik ranglar"
    ],
    correctAnswer: "Kontrast (yoki qo'shimcha) ranglar"
  },
  {
    question: "Kulolchilikda Loy buyumining yuzasini qoplash uchun ishlatiladigan suyuq rangli loy qatlami nima?",
    options: [
      "Sirlash",
      "Angob",
      "Parlatish",
      "Freska"
    ],
    correctAnswer: "Angob"
  },
  {
    question: "Miniatyura san'atining rivojlanishi qaysi madaniyatga borib taqaladi?",
    options: [
      "Yevropa uyg'onish davri",
      "Uzoq Sharq (Xitoy)",
      "YaQin va O'rta Sharq (O'rta Osiyo, Fors)",
      "Qadimgi Yunoniston"
    ],
    correctAnswer: "YaQin va O'rta Sharq (O'rta Osiyo, Fors)"
  },
  {
    question: "Odam gavdasining nisbatlarini o'rganish nimaga tegishli?",
    options: [
      "Kompozitsiya",
      "Perspektiva",
      "Proporsiya (Anatomiya)",
      "Rangshunoslik"
    ],
    correctAnswer: "Proporsiya (Anatomiya)"
  },
  {
    question: "Grafikada 'bosma' olish uchun tayyorlangan o'yma yuzasi nima deyiladi?",
    options: [
      "Palitra",
      "Matritsa (Klishe)",
      "Molbert",
      "Xolst"
    ],
    correctAnswer: "Matritsa (Klishe)"
  },
  {
    question: "Haykaltaroshlikda 'monumental' asarlar nima?",
    options: [
      "Kichik, nozik asarlar",
      "Katta o'lchamli, ko'pincha jamoat binolari yoki maydonlari uchun mo'ljallangan haykallar",
      "Faqat loydan yasalgan asarlar",
      "Faqat portretlar"
    ],
    correctAnswer: "Katta o'lchamli, ko'pincha jamoat binolari yoki maydonlari uchun mo'ljallangan haykallar"
  },
  {
    question: "Yashil rangga qizil rangni qo'shish natijasida qanday rang hosil bo'ladi?",
    options: [
      "Sariq",
      "Binafsha",
      "Neytral (Kulrang/Jigarrang)",
      "Ko'k"
    ],
    correctAnswer: "Neytral (Kulrang/Jigarrang)"
  },
  {
    question: "Qaysi janr turli davrlarning tarixiy shaxslari yoki voqealarini tasvirlaydi?",
    options: [
      "Maishiy janr",
      "Tarixiy janr",
      "Natyurmort",
      "Manzara"
    ],
    correctAnswer: "Tarixiy janr"
  },
  {
    question: "Rasm chizishda qalamning bosimi orqali nimani o'zgartirish mumkin?",
    options: [
      "Faqat rangni",
      "Chiziqning qalinligi va yorug'lik/to'qlik darajasini",
      "Faqat shaklni",
      "Faqat fonni"
    ],
    correctAnswer: "Chiziqning qalinligi va yorug'lik/to'qlik darajasini"
  },
  {
    question: "Xromatik ranglar qanday ranglarga bo'linadi?",
    options: [
      "Oq va qora",
      "Issiq va sovuq",
      "Neytral va yorqin",
      "Katta va kichik"
    ],
    correctAnswer: "Issiq va sovuq"
  },
  {
    question: "Amaliy san'atda 'shaxsiy' uslub nima?",
    options: [
      "Faqat umumiy qoidalar",
      "Ustaning o'ziga xos, takrorlanmas ishlash uslubi va bezaklari",
      "Faqat rang tanlash",
      "Faqat naqsh o'lchami"
    ],
    correctAnswer: "Ustaning o'ziga xos, takrorlanmas ishlash uslubi va bezaklari"
  },
  {
    question: "Applikatsiyada 'siluet' nima?",
    options: [
      "Buyumning faqat ichki qismi",
      "Buyumning tashqi, yassi ko'rinishi (konturi)",
      "Faqat chiziqlar",
      "Ranglarning aralashmasi"
    ],
    correctAnswer: "Buyumning tashqi, yassi ko'rinishi (konturi)"
  },
  {
    question: "Rasmda 'ton' (tus) nima?",
    options: [
      "Faqat rang",
      "Rangning yorug'lik va soyadan kelib chiqadigan ochlik yoki to'qlik darajasi",
      "Faqat hajm",
      "Faqat chiziq"
    ],
    correctAnswer: "Rangning yorug'lik va soyadan kelib chiqadigan ochlik yoki to'qlik darajasi"
  },
  {
    question: "Grafikada 'o'yma' (gravyura) texnikasining mohiyati?",
    options: [
      "Ho'l suvoq ustiga bo'yash",
      "Qattiq materialga (metall, yog'och) tasvirni o'yib tushirish va undan bosma olish",
      "Faqat moyli rasm",
      "Yelimlash"
    ],
    correctAnswer: "Qattiq materialga (metall, yog'och) tasvirni o'yib tushirish va undan bosma olish"
  },
  {
    question: "Haykaltaroshlikda ishlatiladigan vosita - Stek nima?",
    options: [
      "Qalam turi",
      "Loy yoki plastilinga shakl berish uchun asbob",
      "Bo'yoq aralashtirish uchun asbob",
      "Qog'oz qirqish uchun asbob"
    ],
    correctAnswer: "Loy yoki plastilinga shakl berish uchun asbob"
  },
  {
    question: "Qaysi janr fantastika, ertaklar va xalq dostonlari mavzularini aks ettiradi?",
    options: [
      "Batal janri",
      "Mifologik janr",
      "Manzara",
      "Maishiy janr"
    ],
    correctAnswer: "Mifologik janr"
  },
     {
    question: "Rangtasvirda ranglarning uyg'unlashuvi va o'zaro munosabatlari nima deyiladi?",
    options: [
      "Kontrast",
      "Perspektiva",
      "Ranglar garmoniyasi",
      "Proporsiya"
    ],
    correctAnswer: "Ranglar garmoniyasi"
  },
  {
    question: "Haykaltaroshlik asboblaridan biri bo'lgan Stek nima uchun ishlatiladi?",
    options: [
      "Bo'yoq aralashtirish uchun",
      "Loy yoki plastilinga shakl berish va detallar qo'shish uchun",
      "Qalamni o'tkirlash uchun",
      "Rasmga hajm berish uchun"
    ],
    correctAnswer: "Loy yoki plastilinga shakl berish va detallar qo'shish uchun"
  },
  {
    question: "Qaysi janr mevalar, gul, idishlar, asboblar kabi jonsiz narsalarni tasvirlaydi?",
    options: [
      "Manzara",
      "Natyurmort",
      "Portret",
      "Batal janri"
    ],
    correctAnswer: "Natyurmort"
  },
  {
    question: "Grafikada 'bosma' olish uchun ishlatiladigan texnikalar qanday nomlanadi?",
    options: [
      "Freska",
      "Gravyura (O'yma)",
      "Mozaika",
      "Akvarel"
    ],
    correctAnswer: "Gravyura (O'yma)"
  },
  {
    question: "Issiq ranglarga nimalar kiradi?",
    options: [
      "Ko'k, yashil, binafsha",
      "Qizil, sariq, zarg'aldoq",
      "Oq, qora, kulrang",
      "Faqat kulrang"
    ],
    correctAnswer: "Qizil, sariq, zarg'aldoq"
  },
  {
    question: "Rasmda eng yorug' nuqta (yorug'likning qaytishi) nima deyiladi?",
    options: [
      "Soya",
      "Yarim soya",
      "Blik",
      "Refleks"
    ],
    correctAnswer: "Blik"
  },
  {
    question: "Loydan yasalgan buyumga sirtni bezash va suv o'tkazmaydigan qilish uchun nima qilinadi?",
    options: [
      "Parlatish",
      "Sirlash",
      "Angob solish",
      "Faqat pishirish"
    ],
    correctAnswer: "Sirlash"
  },
  {
    question: "Monumental san’at janriga qanday asarlar kiradi?",
    options: [
      "Kichik chizmalar",
      "Katta o’lchamdagi freskalar, mozaikalar va haykallar",
      "Kitob illyustratsiyalari",
      "Faqat natyurmortlar"
    ],
    correctAnswer: "Katta o’lchamdagi freskalar, mozaikalar va haykallar"
  },
  {
    question: "Portret asarlarida ko’rsatiladigan asosiy narsa nima?",
    options: [
      "Atrof-muhit",
      "Jonsiz narsalar",
      "Inson qiyofasi, uning tashqi va ichki dunyosi",
      "Tarixiy voqealar"
    ],
    correctAnswer: "Inson qiyofasi, uning tashqi va ichki dunyosi"
  },
  {
    question: "Gips, tosh, marmar, plastilin kabi materiallar qaysi san'at turiga xos?",
    options: [
      "Rangtasvir",
      "Grafika",
      "Haykaltaroshlik",
      "Amaliy san'at"
    ],
    correctAnswer: "Haykaltaroshlik"
  },
  {
    question: "Qaysi ranglar asosiy (birlamchi) ranglar hisoblanadi?",
    options: [
      "Yashil, zarg'aldoq, binafsha",
      "Qizil, sariq, ko'k",
      "Oq, qora, kulrang",
      "Faqat issiq ranglar"
    ],
    correctAnswer: "Qizil, sariq, ko'k"
  },
  {
    question: "Amaliy san'atda 'Zardo'zlik' qanday matoga ishlanadi?",
    options: [
      "Faqat paxta",
      "Ipak, baxmal kabi matolarga oltin yoki kumush iplar bilan",
      "Faqat qog'oz",
      "Yog'ochga"
    ],
    correctAnswer: "Ipak, baxmal kabi matolarga oltin yoki kumush iplar bilan"
  },
  {
    question: "Rasmning uzoq qismlari xiralashib, rangi oqarib ketishi qaysi perspektiva qoidasi?",
    options: [
      "Chiziqli perspektiva",
      "Havoiy perspektiva",
      "Rasmning hajm o'zgarishi",
      "Ton perspektivasi"
    ],
    correctAnswer: "Havoiy perspektiva"
  },
  {
    question: "Miniatyura san'atining asosiy xususiyati?",
    options: [
      "Katta devoriy rasm",
      "Kichik o'lchamdagi, nozik detallarga ega bo'lgan tasvirlar",
      "Faqat qora va oq rang",
      "Abstrakt shakllar"
    ],
    correctAnswer: "Kichik o'lchamdagi, nozik detallarga ega bo'lgan tasvirlar"
  },
  {
    question: "Qaysi janr 'jang, urush, qahramonlik' mavzularini aks ettiradi?",
    options: [
      "Manzara",
      "Batal janri",
      "Maishiy janr",
      "Tarixiy janr"
    ],
    correctAnswer: "Batal janri"
  },
  {
    question: "Qizil rangga ko'k rang qo'shilishi qanday rangni hosil qiladi?",
    options: [
      "Yashil",
      "Zarg'aldoq",
      "Binafsha (siyohrang)",
      "Sariq"
    ],
    correctAnswer: "Binafsha (siyohrang)"
  },
  {
    question: "Grafikada asosiy tasviriy vosita nima?",
    options: [
      "Rang",
      "Chiziq, shtrix va dog'",
      "Hajm",
      "Yorug'lik"
    ],
    correctAnswer: "Chiziq, shtrix va dog'"
  },
  {
    question: "Amaliy san'at buyumlariga naqsh solishning asosiy usuli nima?",
    options: [
      "Tasodifiy chiziqlar",
      "Geometrik yoki o'simlik shakllarini simmetrik takrorlash (Ornament)",
      "Faqat yorqin ranglar",
      "Faqat portretlar"
    ],
    correctAnswer: "Geometrik yoki o'simlik shakllarini simmetrik takrorlash (Ornament)"
  },
  {
    question: "Rassomlik asarida 'kontrast' nima?",
    options: [
      "Ranglarning uyg'unligi",
      "Ranglar yoki tonlarning o'zaro qarama-qarshiligi (och-to'q, issiq-sovuq)",
      "Faqat o'rta plan",
      "Faqat chiziq"
    ],
    correctAnswer: "Ranglar yoki tonlarning o'zaro qarama-qarshiligi (och-to'q, issiq-sovuq)"
  },
  {
    question: "Loydan yasalgan buyumlarni pishirishdan avval sirtini maxsus suyuq rangli loy bilan qoplash nima deyiladi?",
    options: [
      "Sirlash",
      "Angob",
      "Parlatish",
      "Pishirish"
    ],
    correctAnswer: "Angob"
  },
  {
    question: "Qaysi janr tabiat ko'rinishlarini, shahar manzaralarini tasvirlaydi?",
    options: [
      "Portret",
      "Manzara (Peizaj)",
      "Interyer",
      "Natyurmort"
    ],
    correctAnswer: "Manzara (Peizaj)"
  },
  {
    question: "Akvarel bo'yoqlari qanday xususiyatga ega?",
    options: [
      "Qalin va qoplovchi",
      "Shaffof va yengil",
      "Faqat moy asosida ishlatiladi",
      "Juda sekin quriydi"
    ],
    correctAnswer: "Shaffof va yengil"
  },
  {
    question: "Relyef haykaltaroshlikning qaysi turiga kiradi?",
    options: [
      "Yumaloq haykaltaroshlik",
      "Yassi haykaltaroshlik",
      "Monumental haykaltaroshlik",
      "Faqat portret"
    ],
    correctAnswer: "Yassi haykaltaroshlik"
  },
  {
    question: "Yog'och o'ymakorligida ishlatiladigan asosiy asbob?",
    options: [
      "Mo'yqalam",
      "Iskana (Kesuvchi asbob)",
      "Palitra",
      "Stek"
    ],
    correctAnswer: "Iskana (Kesuvchi asbob)"
  },
  {
    question: "Kompozitsiyada 'muvozanat' nimani anglatadi?",
    options: [
      "Faqat bir xil ranglar",
      "Tasvir elementlarining o'zaro teng taqsimlanishi va uyg'unligi",
      "Faqat katta hajm",
      "Faqat chiziq"
    ],
    correctAnswer: "Tasvir elementlarining o'zaro teng taqsimlanishi va uyg'unligi"
  },
  {
    question: "Grafikada 'Shtrix'ning ahamiyati nima?",
    options: [
      "Faqat yuzani tekislash",
      "Tasvirga hajm, soya va turli tus berish vositasi",
      "Faqat rang berish",
      "Qalamni o'tkirlash"
    ],
    correctAnswer: "Tasvirga hajm, soya va turli tus berish vositasi"
  },
  {
    question: "Chiziqli perspektivada uzoqlashgan parallel chiziqlar qayerda tutashadi?",
    options: [
      "Rasmning pastida",
      "Ufq chizig'ida (G'oyib bo'lish nuqtasida)",
      "Rasmning markazida",
      "Har xil joylarda"
    ],
    correctAnswer: "Ufq chizig'ida (G'oyib bo'lish nuqtasida)"
  },
  {
    question: "Rangtasvirda rasmning yorug'lik va soyadan kelib chiqadigan ochlik yoki to'qlik darajasi nima deyiladi?",
    options: [
      "Tus (Ton)",
      "Kontrast",
      "To'yinganlik",
      "Yorqinlik"
    ],
    correctAnswer: "Tus (Ton)"
  },
  {
    question: "Oq rangga qora rangni qo'shish qanday rangni hosil qiladi?",
    options: [
      "Yashil",
      "Kul rang",
      "Qizil",
      "Sariq"
    ],
    correctAnswer: "Kul rang"
  },
  {
    question: "Odamlar va ularning kundalik turmushini aks ettiruvchi janr?",
    options: [
      "Tarixiy janr",
      "Maishiy janr (bytovoy)",
      "Animalistik janr",
      "Interyer"
    ],
    correctAnswer: "Maishiy janr (bytovoy)"
  },
  {
    question: "Haykaltaroshlikda 'Barelef' nima?",
    options: [
      "Tasvir yuzaga botirilgan relef",
      "Tasvir yuzadan juda oz bo'rttirib chiqarilgan relef",
      "Yarim tana haykali",
      "Butunlay yumaloq haykal"
    ],
    correctAnswer: "Tasvir yuzadan juda oz bo'rttirib chiqarilgan relef"
  },
  {
    question: "Yog'och o'ymakorligida 'o'yma naqsh' nima?",
    options: [
      "Loy buyum",
      "Yog'och yuzasiga tushirilgan bezak",
      "Matoga tikilgan kashta",
      "Tosh haykal"
    ],
    correctAnswer: "Yog'och yuzasiga tushirilgan bezak"
  },
  {
    question: "Grafikada 'illyustratsiya' nima?",
    options: [
      "Katta devoriy rasm",
      "Kitob yoki matn mazmunini ochib beruvchi tasvir",
      "Haykaltaroshlik asari",
      "Faqat manzara"
    ],
    correctAnswer: "Kitob yoki matn mazmunini ochib beruvchi tasvir"
  },
  {
    question: "Applikatsiya ishi qanday materiallar bilan bajariladi?",
    options: [
      "Moybo'yoq",
      "Loy",
      "Qog'oz, mato yoki boshqa material bo'laklarini yopishtirish",
      "Marmar"
    ],
    correctAnswer: "Qog'oz, mato yoki boshqa material bo'laklarini yopishtirish"
  },
  {
    question: "Loydan yasalib, pechda pishirilgan sopol buyum nima deyiladi?",
    options: [
      "Gips",
      "Plastilin",
      "Terrakota",
      "Bronza"
    ],
    correctAnswer: "Terrakota"
  },
  {
    question: "Qaysi ranglar 'sovuq' ranglar guruhiga kiradi?",
    options: [
      "Qizil, sariq, zarg'aldoq",
      "Ko'k, yashil, binafsha (siyohrang)",
      "Oq, qora, kulrang",
      "Faqat jigarrang"
    ],
    correctAnswer: "Ko'k, yashil, binafsha (siyohrang)"
  },
  {
    question: "Kompozitsiyada 'dinamika' nimani anglatadi?",
    options: [
      "Tinchlik va muvozanat",
      "Harakat, energiya va kuch ifodasi",
      "Faqat bitta rang",
      "Katta hajm"
    ],
    correctAnswer: "Harakat, energiya va kuch ifodasi"
  },
  {
    question: "Akvarel bo'yoqlari qanday asosda tayyorlanadi?",
    options: [
      "Moy asosida",
      "Suv asosida",
      "Spirt asosida",
      "Yelim asosida"
    ],
    correctAnswer: "Suv asosida"
  },
  {
    question: "Rassomlikda 'svetoten' (yorug'-soya) nimani hosil qiladi?",
    options: [
      "Faqat rang",
      "Buyumga hajm va chuqurlik berish",
      "Faqat chiziq",
      "Faqat fon"
    ],
    correctAnswer: "Buyumga hajm va chuqurlik berish"
  },
  {
    question: "Qaysi janr hayvonlarni tasvirlashga ixtisoslashgan?",
    options: [
      "Manzara",
      "Animalistik janr",
      "Portret",
      "Maishiy janr"
    ],
    correctAnswer: "Animalistik janr"
  },
  {
    question: "O'zbek xalq amaliy san'atida 'Naqsh'ning asosiy motivlari?",
    options: [
      "Faqat portretlar",
      "O'simlik, geometrik va hatto ba'zan hayvoniy shakllar",
      "Faqat tarixiy voqealar",
      "Faqat ranglar"
    ],
    correctAnswer: "O'simlik, geometrik va hatto ba'zan hayvoniy shakllar"
  },
  {
    question: "Grafikada 'Linogravyura' nima?",
    options: [
      "Yog'ochga o'yish",
      "Linoleum yuzasiga o'yib, undan bosma olish usuli",
      "Toshga chizish",
      "Moyli rasm"
    ],
    correctAnswer: "Linoleum yuzasiga o'yib, undan bosma olish usuli"
  },
  {
    question: "Qizil va sariq ranglarni aralashtirish qanday rangni hosil qiladi?",
    options: [
      "Yashil",
      "Binafsha",
      "Zarg'aldoq (Apelsin)",
      "Ko'k"
    ],
    correctAnswer: "Zarg'aldoq (Apelsin)"
  },
  {
    question: "Haykaltaroshlikda 'proporsiya' nimani anglatadi?",
    options: [
      "Faqat rang berish",
      "Haykal elementlarining o'zaro nisbati va mutanosibligi",
      "Faqat hajm",
      "Faqat material"
    ],
    correctAnswer: "Haykal elementlarining o'zaro nisbati va mutanosibligi"
  },
  {
    question: "Tasviriy san'atda 'shrift' deganda nimani tushunasiz?",
    options: [
      "Rasm chizish usuli",
      "Matnning yozilishi uchun foydalaniladigan harflar to'plami",
      "Ranglar kombinatsiyasi",
      "Haykaltaroshlik materiali"
    ],
    correctAnswer: "Matnning yozilishi uchun foydalaniladigan harflar to'plami"
  },
  {
    question: "Moybo'yoq bilan ishlashda asosiy bo'yoqni qaysi material tashkil qiladi?",
    options: [
      "Suv",
      "O'simlik moylari (Zig'ir, chigit moylari)",
      "Yelim",
      "Spirt"
    ],
    correctAnswer: "O'simlik moylari (Zig'ir, chigit moylari)"
  },
  {
    question: "Qaysi ranglar qo'shimcha (ikkinchi darajali) ranglar hisoblanadi?",
    options: [
      "Qizil, sariq, ko'k",
      "Yashil, zarg'aldoq, binafsha",
      "Oq, qora, kulrang",
      "Faqat issiq ranglar"
    ],
    correctAnswer: "Yashil, zarg'aldoq, binafsha"
  },
  {
    question: "Rasmda 'ton' nimani belgilaydi?",
    options: [
      "Faqat rang tusini",
      "Rangning och yoki to'qlik darajasini",
      "Faqat chiziqni",
      "Faqat hajm"
    ],
    correctAnswer: "Rangning och yoki to'qlik darajasini"
  },
  {
    question: "Amaliy san'atda 'vitraj' nima?",
    options: [
      "Metallga o'yish",
      "Rangli shisha bo'laklaridan yasalgan kompozitsiya",
      "Matoga tikish",
      "Yog'ochga bezak berish"
    ],
    correctAnswer: "Rangli shisha bo'laklaridan yasalgan kompozitsiya"
  },
  {
    question: "Loydan ishlangan buyumlarni pishirishdan avval sirtini maxsus suyuq rangli loy bilan qoplash nima deyiladi?",
    options: [
      "Sirlash",
      "Angob",
      "Parlatish",
      "Pishirish"
    ],
    correctAnswer: "Angob"
  },
  {
    question: "Grafikada 'Litografiya' nima?",
    options: [
      "Yog'ochga o'yish",
      "Tosh yuzasiga chizish va undan bosma olish usuli",
      "Ho'l suvoq ustiga bo'yash",
      "Moyli rasm"
    ],
    correctAnswer: "Tosh yuzasiga chizish va undan bosma olish usuli"
  },
  {
    question: "Rasmning uzoq qismlari xiralashib, rangi oqarib ketishi qaysi perspektiva qoidasi?",
    options: [
      "Chiziqli perspektiva",
      "Havoiy perspektiva",
      "Rasmning hajm o'zgarishi",
      "Ton perspektivasi"
    ],
    correctAnswer: "Havoiy perspektiva"
  },
  {
    question: "Kulolchilik mahsulotlarini yasash uchun asosiy material nima?",
    options: [
      "Yog'och",
      "Loy (Gil)",
      "Marmar",
      "Shisha"
    ],
    correctAnswer: "Loy (Gil)"
  },
  {
    question: "Gouash bo'yog'ining asosiy xususiyati?",
    options: [
      "Juda shaffof",
      "Qalin va qoplovchi (no-shaffof)",
      "Faqat moy asosida ishlatiladi",
      "Juda sekin quriydi"
    ],
    correctAnswer: "Qalin va qoplovchi (no-shaffof)"
  },
  {
    question: "Kompozitsiyada 'ritm' nima?",
    options: [
      "Faqat bitta nuqta",
      "Tasvir elementlarining ma'lum tartibda takrorlanishi",
      "Faqat katta hajm",
      "Faqat rang"
    ],
    correctAnswer: "Tasvir elementlarining ma'lum tartibda takrorlanishi"
  },
  {
    question: "Qaysi janr 'afsonalar, xudolar va qahramonlar' mavzularini aks ettiradi?",
    options: [
      "Tarixiy janr",
      "Mifologik janr",
      "Manzara",
      "Maishiy janr"
    ],
    correctAnswer: "Mifologik janr"
  },
  {
    question: "Haykaltaroshlikda 'kontrrelyef' nima?",
    options: [
      "Yuzadan bo'rttirib chiqarilgan tasvir",
      "Tasvir yuzaga chuqurlashtirilib o'yib tushirilgan tasvir",
      "Yumaloq haykal",
      "Faqat yuzani tekislash"
    ],
    correctAnswer: "Tasvir yuzaga chuqurlashtirilib o'yib tushirilgan tasvir"
  },
  {
    question: "Oq va qora ranglar qanday ranglar guruhiga kiradi?",
    options: [
      "Xromatik",
      "Issiq",
      "Axromatik",
      "Sovuq"
    ],
    correctAnswer: "Axromatik"
  },
  {
    question: "Qaysi janr dengiz manzaralarini tasvirlashga ixtisoslashgan?",
    options: [
      "Manzara",
      "Marinistik janr",
      "Interyer",
      "Animalistik janr"
    ],
    correctAnswer: "Marinistik janr"
  },
  {
    question: "Yashil rang qaysi asosiy ranglarni aralashtirishdan hosil bo'ladi?",
    options: [
      "Qizil va sariq",
      "Sariq va ko'k",
      "Qizil va ko'k",
      "Oq va qora"
    ],
    correctAnswer: "Sariq va ko'k"
  },
  {
    question: "Grafikada 'o'yma' (gravyura) texnikasining asosiy materiali?",
    options: [
      "Akvarel",
      "Metall, yog'och yoki linoleum",
      "Plastilin",
      "Gips"
    ],
    correctAnswer: "Metall, yog'och yoki linoleum"
  },
  {
    question: "Moybo'yoq bilan ishlashda asosiy erituvchi vosita nima?",
    options: [
      "Suv",
      "Skipidar (maxsus moyli erituvchi)",
      "Yelim",
      "Spirt"
    ],
    correctAnswer: "Skipidar (maxsus moyli erituvchi)"
  },
  {
    question: "Monumental san'atda 'panno' nima?",
    options: [
      "Kichik stol usti rasm",
      "Devorga bevosita o'rnatilgan yoki ishlangan, dekorativ rasm",
      "Faqat haykal",
      "Faqat chizma"
    ],
    correctAnswer: "Devorga bevosita o'rnatilgan yoki ishlangan, dekorativ rasm"
  },
  {
    question: "Inson tanasining nisbatlarini o'rganish nimaga tegishli?",
    options: [
      "Kompozitsiya",
      "Perspektiva",
      "Proporsiya (Anatomiya)",
      "Rangshunoslik"
    ],
    correctAnswer: "Proporsiya (Anatomiya)"
  },
  {
    question: "Qaysi janr turli davrlarning tarixiy shaxslari yoki voqealarini tasvirlaydi?",
    options: [
      "Maishiy janr",
      "Tarixiy janr",
      "Manzara",
      "Natyurmort"
    ],
    correctAnswer: "Tarixiy janr"
  },
  {
    question: "Ranglarning tabiiy tusini o'zgartirmasdan, ularning faqat yorug'lik kuchi (ochiq/to'q) bilan o'zgarishi nima deyiladi?",
    options: [
      "To'yinganlik",
      "Ton (Ochiqlik/To'qlik kuchi)",
      "Kontrast",
      "Tus"
    ],
    correctAnswer: "Ton (Ochiqlik/To'qlik kuchi)"
  },
  {
    question: "Yog'och o'ymakorligida ishlatiladigan asosiy asbob?",
    options: [
      "Mo'yqalam",
      "Kesuvchi asboblar (Iskana, pichoq)",
      "Stek",
      "Qaychi"
    ],
    correctAnswer: "Kesuvchi asboblar (Iskana, pichoq)"
  },
  {
    question: "Sariq va ko'k ranglarni aralashtirish qanday rangni hosil qiladi?",
    options: [
      "Qizil",
      "Binafsha",
      "Yashil",
      "Zarg'aldoq"
    ],
    correctAnswer: "Yashil"
  },
  {
    question: "Kulolchilikda 'sirlash'ning maqsadi?",
    options: [
      "Loyni yumshatish",
      "Buyumning yuzasini bezash va suv o'tkazmaydigan qilish",
      "Faqat rang berish",
      "Loyni tez quritish"
    ],
    correctAnswer: "Buyumning yuzasini bezash va suv o'tkazmaydigan qilish"
  },
  {
    question: "Rasmda 'fon'ning ahamiyati nima?",
    options: [
      "Faqat yorug'lik berish",
      "Tasvirning orqa qismi, kompozitsiyaga chuqurlik va kontekst beradi",
      "Faqat chiziq chizish",
      "Barcha detallarni ko'rsatish"
    ],
    correctAnswer: "Tasvirning orqa qismi, kompozitsiyaga chuqurlik va kontekst beradi"
  },
  {
    question: "Qaysi janr turli xil binolarning ichki ko'rinishini tasvirlaydi?",
    options: [
      "Manzara",
      "Natyurmort",
      "Interyer",
      "Portret"
    ],
    correctAnswer: "Interyer"
  },
  {
    question: "Qizil rangga yashil rangni qo'shish qanday rangni beradi (Bo'yoqda)?",
    options: [
      "Sariq",
      "Ko'k",
      "Jigarrang (Kulrang/Neytralga yaqin rang)",
      "Oq"
    ],
    correctAnswer: "Jigarrang (Kulrang/Neytralga yaqin rang)"
  },
  {
    question: "O'zbek xalq amaliy san'atida 'Is'limiy naqsh' nimaga asoslanadi?",
    options: [
      "Geometrik shakllar",
      "O'simliklar dunyosi (gul, barg, shox)",
      "Hayvon tasvirlari",
      "Arab yozuvlari"
    ],
    correctAnswer: "O'simliklar dunyosi (gul, barg, shox)"
  },
    {
    question: "Kompozitsiya deganda nimani tushunasiz?",
    options: [
      "Mum aralashtirilgan moybo'yoq, qaynoq xolatda,chizaman.",
      "Tuzmoq, uyg'unlashtirish, mutanosiblashtirish",
      "Monumental panno, rangli toshlar",
      "Linogravyura, illustratsiya, rangli toshlar"
    ],
    correctAnswer: "Tuzmoq, uyg'unlashtirish, mutanosiblashtirish"
  },
  {
    question: "Hajmiy kompozitsiyaning turlarini to'g'ri ko'rsating?",
    options: [
      "Qisman chegaralangan ochiq muxitli fazoviy kompozitsiya",
      "O'simliklar shakllarining tuzilishiga monand kompozitsiyalarni",
      "Arxitektura va qurilishdagi shartli bino shakli",
      "Hajmning vertikal va gorizontal yo'nalishlarga bo'laklangan"
    ],
    correctAnswer: "Qisman chegaralangan ochiq muxitli fazoviy kompozitsiya"
  },
  {
    question: "San'at asarida uyg'unlikni yarata turib uning ikki zarur sharti qanday?",
    options: [
      "Joylashtirish, ranlariga, shakllariga, qog'oz turiga",
      "Joylashtirish, ranlariga, shakllariga, qalam turiga",
      "Muvozanat, umumiylik, bir-biriga bo'ysunishlik",
      "Joylashtirish, shakllariga, naturaga va buyumlarga"
    ],
    correctAnswer: "Muvozanat, umumiylik, bir-biriga bo'ysunishlik"
  },
  {
    question: "Asimmetrik kompozitsiya nima?",
    options: [
      "Tomonlari bir-birini takrorlovchi kompozitsiya",
      "Tomonlari bir-biriga teng bo'lmagan kompozitsiya.",
      "Tomonlari bir-birini neytrallovchi yoki teng kompozitsiya.",
      "Tomonlari qismlari teng bo'lgan kompozitsiya."
    ],
    correctAnswer: "Tomonlari bir-biriga teng bo'lmagan kompozitsiya."
  },
  {
    question: "Asosiy ranglar qaysilar?",
    options: [
      "Yashil, zarg'aldoq, binafsha",
      "Qizil, ko'k, sariq",
      "Kul rang, oq, qora",
      "Qizil, sariq, jigarrang"
    ],
    correctAnswer: "Qizil, ko'k, sariq"
  },
  {
    question: "Axromatik ranglar qanday ranglarga bo'linadi?",
    options: [
      "Issiq va sovuq",
      "Oq, kulrang, qora",
      "Asosiy va qo'shimcha",
      "Yorqin va xira"
    ],
    correctAnswer: "Oq, kulrang, qora"
  },
  {
    question: "Qizil va sariq ranglarni aralashtirish qanday rangni hosil qiladi?",
    options: [
      "Yashil",
      "Binafsha",
      "Zarg'aldoq (Apelsin)",
      "Ko'k"
    ],
    correctAnswer: "Zarg'aldoq (Apelsin)"
  },
  {
    question: "Yashil rangni hosil qilgan ranglarni toping?",
    options: [
      "Qizil va sariq",
      "Qizil va ko'k",
      "Sariq va ko'k",
      "Oq va qora"
    ],
    correctAnswer: "Sariq va ko'k"
  },
  {
    question: "Qizil rangga ko'k rangni qo'shish natijasida qanday rang hosil bo'ladi?",
    options: [
      "Yashil",
      "Binafsha (siyohrang)",
      "Sariq",
      "Zarg'aldoq"
    ],
    correctAnswer: "Binafsha (siyohrang)"
  },
  {
    question: "Qaysi ranglar 'issiq' ranglar guruhiga kiradi?",
    options: [
      "Ko'k, yashil, binafsha",
      "Qizil, sariq, zarg'aldoq",
      "Oq, qora, kulrang",
      "Faqat jigarrang"
    ],
    correctAnswer: "Qizil, sariq, zarg'aldoq"
  },
  {
    question: "Qaysi ranglar 'sovuq' ranglar guruhiga kiradi?",
    options: [
      "Qizil, sariq, zarg'aldoq",
      "Ko'k, yashilning ko'k tusi, binafsha",
      "Oq, qora, kulrang",
      "Faqat jigarrang"
    ],
    correctAnswer: "Ko'k, yashilning ko'k tusi, binafsha"
  },
  {
    question: "Rassomlik asarida 'svetoten' (yorug'-soya)ning ahamiyati nima?",
    options: [
      "Faqat rang berish",
      "Tasvirga hajm, chuqurlik va realizm berish",
      "Faqat yuzani tekislash",
      "Rasmning yorqinligini oshirish"
    ],
    correctAnswer: "Tasvirga hajm, chuqurlik va realizm berish"
  },
  {
    question: "Rasmda eng yorug' nuqta (yorug'likning qaytishi) nima deyiladi?",
    options: [
      "Soya",
      "Yarim soya",
      "Blik",
      "Refleks"
    ],
    correctAnswer: "Blik"
  },
  {
    question: "Buyumning yorug'likdan uzoqroq turgan, eng qorong'u joyi nima?",
    options: [
      "Blik",
      "Soya",
      "Yarim soya",
      "Refleks"
    ],
    correctAnswer: "Soya"
  },
  {
    question: "Tasviriy san'atda 'refleks' nima?",
    options: [
      "Eng qorong'u joy",
      "Qaytarilgan yorug'lik, ya'ni bir buyumning rangi boshqa buyum soyasiga tushishi",
      "Eng yorqin nuqta (Blik)",
      "Orqa fon"
    ],
    correctAnswer: "Qaytarilgan yorug'lik, ya'ni bir buyumning rangi boshqa buyum soyasiga tushishi"
  },
  {
    question: "Qaysi janr 'hayvonot dunyosi, qushlar, jonivorlar'ni tasvirlashga ixtisoslashgan?",
    options: [
      "Portret",
      "Manzara",
      "Animalistik janr",
      "Natyurmort"
    ],
    correctAnswer: "Animalistik janr"
  },
  {
    question: "Natyurmort janri nimani tasvirlaydi?",
    options: [
      "Inson qiyofasi",
      "Jonsiz narsalar (mevalar, gullar, buyumlar)",
      "Tabiat manzarasi",
      "Tarixiy voqealar"
    ],
    correctAnswer: "Jonsiz narsalar (mevalar, gullar, buyumlar)"
  },
  {
    question: "Portret janri nimani tasvirlaydi?",
    options: [
      "Narsalar",
      "Tabiat",
      "Inson qiyofasi, uning tashqi va ichki dunyosi",
      "Bino ichki ko'rinishi"
    ],
    correctAnswer: "Inson qiyofasi, uning tashqi va ichki dunyosi"
  },
  {
    question: "Manzara janri nimani tasvirlaydi?",
    options: [
      "Inson qiyofasi",
      "Jonsiz narsalar",
      "Tabiat va atrof-muhit",
      "Tarixiy voqealar"
    ],
    correctAnswer: "Tabiat va atrof-muhit"
  },
  {
    question: "Qaysi janr harbiy voqealar, jang sahnalari va qahramonliklarni tasvirlaydi?",
    options: [
      "Tarixiy janr",
      "Maishiy janr",
      "Batal janri",
      "Mifologik janr"
    ],
    correctAnswer: "Batal janri"
  },
  {
    question: "Maishiy janrda tasvirlashning asosiy maqsadi?",
    options: [
      "Mifologik qahramonlarni ko'rsatish",
      "Oddiy xalqning kundalik turmushini, urf-odatlarini aks ettirish",
      "Faqat toshdan haykal yasash",
      "Tabiatning abstrakt tasviri"
    ],
    correctAnswer: "Oddiy xalqning kundalik turmushini, urf-odatlarini aks ettirish"
  },
  {
    question: "Monumental rangtasvirning asosiy turlari nimalardan iborat?",
    options: [
      "Faqat moyli rasm",
      "Freska, mozaika, panno",
      "Eskiz va illyustratsiya",
      "Faqat akvarel"
    ],
    correctAnswer: "Freska, mozaika, panno"
  },
  {
    question: "Freska nima?",
    options: [
      "Yog'ochga o'yish",
      "Kitob grafikasining bir turi",
      "Ho'l suvoq ustiga suvda erigan bo'yoqlar bilan devorga ishlangan rasm",
      "Moyli rasm"
    ],
    correctAnswer: "Ho'l suvoq ustiga suvda erigan bo'yoqlar bilan devorga ishlangan rasm"
  },
  {
    question: "Mozaika qanday materiallardan tayyorlanadi?",
    options: [
      "Faqat loy",
      "Rangli tosh, shisha (smalta) bo'laklari",
      "Faqat qog'oz",
      "Yog'och parchalari"
    ],
    correctAnswer: "Rangli tosh, shisha (smalta) bo'laklari"
  },
  {
    question: "Rangtasvirda rasm qanday yuzaga ishlanadi?",
    options: [
      "Devor yuzasiga",
      "Oddiy qog'ozga",
      "Maxsus gurunt qoplangan matoga (xolstga)",
      "Shishaga"
    ],
    correctAnswer: "Maxsus gurunt qoplangan matoga (xolstga)"
  },
  {
    question: "Grafika san'atida asosiy tasviriy vosita nima?",
    options: [
      "Rang",
      "Hajm",
      "Chiziq, shtrix va dog'",
      "Yorug'lik"
    ],
    correctAnswer: "Chiziq, shtrix va dog'"
  },
  {
    question: "Grafikada 'illyustratsiya' nima?",
    options: [
      "Tarixiy bino",
      "Kitob yoki matn mazmunini ochib beruvchi tasvir (rasm)",
      "Katta devoriy panno",
      "Jonsiz narsalar tasviri"
    ],
    correctAnswer: "Kitob yoki matn mazmunini ochib beruvchi tasvir (rasm)"
  },
  {
    question: "Grafikada 'Litografiya' nima?",
    options: [
      "Yog'ochga o'yish",
      "Metallga o'yish (Ofort)",
      "Toshga chizish va undan bosma olish usuli",
      "Faqat qalamda ishlash"
    ],
    correctAnswer: "Toshga chizish va undan bosma olish usuli"
  },
  {
    question: "Grafikada qaysi texnikadan ommaviy nusxalash uchun foydalaniladi?",
    options: [
      "Akvarel",
      "Bosma grafika (Gravyura, ofort, litografiya)",
      "Moyli rasm",
      "Freska"
    ],
    correctAnswer: "Bosma grafika (Gravyura, ofort, litografiya)"
  },
  {
    question: "Haykaltaroshlikning asosiy materiallari?",
    options: [
      "Mo'yqalam va bo'yoq",
      "Qalam va qog'oz",
      "Loy, gips, tosh, bronza, marmar",
      "Yog'och va mato"
    ],
    correctAnswer: "Loy, gips, tosh, bronza, marmar"
  },
  {
    question: "Haykaltaroshlikda 'Barelef' nima?",
    options: [
      "Yuzadan juda oz bo'rttirib chiqarilgan tasvir",
      "Butunlay yumaloq haykal",
      "Tasvir yuzaga chuqur o'yib tushirilgan tasvir",
      "Faqat bo'yash"
    ],
    correctAnswer: "Yuzadan juda oz bo'rttirib chiqarilgan tasvir"
  },
  {
    question: "Haykaltaroshlikda 'Gorelef' nima?",
    options: [
      "Faqat devorga bo'yash",
      "Tasvir yuzasining yarmidan ko'pi bo'rttirib chiqarilgan relef",
      "Butunlay tekis tasvir",
      "Juda oz bo'rttirib chiqarilgan relef (Barelef)"
    ],
    correctAnswer: "Tasvir yuzasining yarmidan ko'pi bo'rttirib chiqarilgan relef"
  },
  {
    question: "Haykaltaroshlikda ishlatiladigan vosita - Stek nima?",
    options: [
      "Qalam turi",
      "Loy yoki plastilinga shakl berish uchun asbob",
      "Bo'yoq aralashtirish uchun asbob",
      "Qog'oz qirqish uchun asbob"
    ],
    correctAnswer: "Loy yoki plastilinga shakl berish uchun asbob"
  },
  {
    question: "O'zbek xalq amaliy san'atining asosiy turlari qaysilar?",
    options: [
      "Kandakorlik, kulolchilik, zardo'zlik, o'ymakorlik",
      "Faqat miniatyura",
      "Faqat portret va manzara",
      "Grafika va rangtasvir"
    ],
    correctAnswer: "Kandakorlik, kulolchilik, zardo'zlik, o'ymakorlik"
  },
  {
    question: "Kulolchilik mahsulotlarini yasash uchun asosiy material nima?",
    options: [
      "Yog'och",
      "Loy (gil)",
      "Marmar",
      "Shisha"
    ],
    correctAnswer: "Loy (gil)"
  },
  {
    question: "Amaliy san'atda 'Zardo'zlik' nima?",
    options: [
      "Toshga ishlov berish",
      "Ipak yoki boshqa matolarga oltin va kumush iplar bilan kashta tikish",
      "Kulolchilikning bir turi",
      "Yog'ochga naqsh o'yish"
    ],
    correctAnswer: "Ipak yoki boshqa matolarga oltin va kumush iplar bilan kashta tikish"
  },
  {
    question: "O'zbek xalq amaliy san'atida 'Is'limiy naqsh' nima?",
    options: [
      "Geometrik shakllar",
      "Hayvonlar tasviri",
      "O'simliklar, gullar, yaproqlar motivlari asosidagi bezak",
      "Arab yozuvlari"
    ],
    correctAnswer: "O'simliklar, gullar, yaproqlar motivlari asosidagi bezak"
  },
  {
    question: "Tasviriy san'atda 'proporsiya' nimani anglatadi?",
    options: [
      "Faqat rang berish",
      "Shakl elementlarining o'zaro nisbati va mutanosibligi",
      "Faqat chiziq chizish",
      "Yorug'lik kuchi"
    ],
    correctAnswer: "Shakl elementlarining o'zaro nisbati va mutanosibligi"
  },
  {
    question: "Chiziqli perspektivaning asosiy qoidasi nima?",
    options: [
      "Uzoqdagi narsalar katta ko'rinadi",
      "Narsalar uzoqlashgan sari kichrayadi va ufq chizig'ida tutashadi",
      "Faqat ranglarning o'zgarishi",
      "Barcha chiziqlar parallel"
    ],
    correctAnswer: "Narsalar uzoqlashgan sari kichrayadi va ufq chizig'ida tutashadi"
  },
  {
    question: "Havoiy perspektiva nima?",
    options: [
      "Chiziqlar yordamida chuqurlik yaratish",
      "Uzoqdagi narsalarning rangi oqarib, xiralashib borishi",
      "Faqat soyani ko'rsatish",
      "Rasmga hajm berish"
    ],
    correctAnswer: "Uzoqdagi narsalarning rangi oqarib, xiralashib borishi"
  },
  {
    question: "Tasviriy san'atda 'shrift' deganda nimani tushunasiz?",
    options: [
      "Rasm",
      "Matnning yozilishi uchun foydalaniladigan harflar to'plami",
      "Ranglar kombinatsiyasi",
      "Grafik elementlar"
    ],
    correctAnswer: "Matnning yozilishi uchun foydalaniladigan harflar to'plami"
  },
  {
    question: "Rangshunoslik deganda nimani tushunasiz?",
    options: [
      "Ranglar va ularning xususiyatlarini o'rganadigan fan",
      "Faqat rangli qalamlar bilan ishlash",
      "Rassomchilik texnikasi",
      "Haykaltaroshlik materiallari"
    ],
    correctAnswer: "Ranglar va ularning xususiyatlarini o'rganadigan fan"
  },
  {
    question: "Qaysi bo'yoq turi shaffoflik va yengillik xususiyatiga ega?",
    options: [
      "Moybo'yoq",
      "Akvarel",
      "Gouash",
      "Tempera"
    ],
    correctAnswer: "Akvarel"
  },
  {
    question: "Moybo'yoq bilan ishlashda qaysi material asosiy bo'yoqni tashkil qiladi?",
    options: [
      "Suv",
      "Yelim",
      "O'simlik moylari (Zig'ir, chigit moylari)",
      "Spirt"
    ],
    correctAnswer: "O'simlik moylari (Zig'ir, chigit moylari)"
  },
  {
    question: "Gouash bo'yog'ining asosiy farqi nimada?",
    options: [
      "Suv bilan juda tez yoyiladi",
      "Bo'yoq qatlami oq rang aralashmasi tufayli qalin va qoplovchi (no-shaffof)",
      "Faqat yog'ochda ishlatiladi",
      "Hech qanday rang aralashtirish kerak emas"
    ],
    correctAnswer: "Bo'yoq qatlami oq rang aralashmasi tufayli qalin va qoplovchi (no-shaffof)"
  },
  {
    question: "Kompozitsiyada 'simmetriya' nimani anglatadi?",
    options: [
      "Tasvirning tartibsiz joylashuvi",
      "Ranglarning yorqinligi",
      "Tasvir elementlarining markaziy o'qqa nisbatan teng, oynasimon takrorlanishi",
      "Faqat katta hajm"
    ],
    correctAnswer: "Tasvir elementlarining markaziy o'qqa nisbatan teng, oynasimon takrorlanishi"
  },
  {
    question: "Kompozitsiyada 'ritm' nima?",
    options: [
      "Faqat bitta nuqta",
      "Tasvir elementlarining ma'lum tartibda takrorlanishi",
      "Faqat katta hajm",
      "Faqat rang"
    ],
    correctAnswer: "Tasvir elementlarining ma'lum tartibda takrorlanishi"
  },
  {
    question: "Haykaltaroshlikda ishlatiladigan Stek qaysi materiallardan tayyorlanishi mumkin?",
    options: [
      "Faqat metall",
      "Yog'och, suyak, metall, plastmassa",
      "Faqat shisha",
      "Faqat tosh"
    ],
    correctAnswer: "Yog'och, suyak, metall, plastmassa"
  },
  {
    question: "Qaysi ranglar guruhida 'och ranglar' mavjud?",
    options: [
      "Faqat Qora",
      "Kulrang turlarida (oq aralashgan)",
      "Faqat ko'k",
      "Faqat qizil"
    ],
    correctAnswer: "Kulrang turlarida (oq aralashgan)"
  },
  {
    question: "Soya solishda ko'pincha qaysi ranglardan foydalaniladi?",
    options: [
      "Faqat oq",
      "Asosiy ranglarning to'q tusi va sovuq ranglar",
      "Faqat sariq",
      "Eng yorqin ranglar"
    ],
    correctAnswer: "Asosiy ranglarning to'q tusi va sovuq ranglar"
  },
  {
    question: "Rasmning markaziy qismi nima deb ataladi?",
    options: [
      "Yon plan",
      "Markaziy plan (O'rta plan)",
      "Fon",
      "Soya"
    ],
    correctAnswer: "Markaziy plan (O'rta plan)"
  },
  {
    question: "Haykaltaroshlikda 'Loy'dan asar yasashning eng asosiy bosqichi?",
    options: [
      "Bo'yash",
      "Quritish",
      "Shakl berish (modelirovka)",
      "Yelimlash"
    ],
    correctAnswer: "Shakl berish (modelirovka)"
  },
  {
    question: "Odam gavdasining nisbatlarini o'rganish nimaga tegishli?",
    options: [
      "Kompozitsiya",
      "Perspektiva",
      "Proporsiya (Anatomiya)",
      "Rangshunoslik"
    ],
    correctAnswer: "Proporsiya (Anatomiya)"
  },
  {
    question: "Rang doirasi nechta spektral rangdan iborat?",
    options: [
      "5 ta",
      "7 ta",
      "8 ta",
      "6 ta"
    ],
    correctAnswer: "7 ta"
  },
  {
    question: "Qaysi janr turli xil binolarning ichki ko'rinishini tasvirlaydi?",
    options: [
      "Manzara",
      "Natyurmort",
      "Interyer",
      "Portret"
    ],
    correctAnswer: "Interyer"
  },
  {
    question: "Deyarli barcha tasviriy faoliyat turlari uchun umumiy bo'lgan asosiy bosqich?",
    options: [
      "Rang berish",
      "Ishni rejalashtirish (eskiz chizish)",
      "Faqat yelimlash",
      "Qaychidan foydalanish"
    ],
    correctAnswer: "Ishni rejalashtirish (eskiz chizish)"
  },
  {
    question: "Yog'och o'ymakorligida eng ko'p ishlatiladigan asbob?",
    options: [
      "Mo'yqalam",
      "Stek",
      "Iskana",
      "Qaychi"
    ],
    correctAnswer: "Iskana"
  },
  {
    question: "Plastilin bilan ishlashning eng oddiy usuli?",
    options: [
      "Yopishtirish",
      "Dumaloqlash (dumalatish)",
      "O'yib ishlash",
      "Kesib ishlash"
    ],
    correctAnswer: "Dumaloqlash (dumalatish)"
  },
  {
    question: "Amaliy san'atda 'kandakorlik' nima?",
    options: [
      "Yog'ochga o'yish",
      "Matoga gullar tikish",
      "Metallga (mis, bronza) naqsh o'yish san'ati",
      "Kulolchilik"
    ],
    correctAnswer: "Metallga (mis, bronza) naqsh o'yish san'ati"
  },
  {
    question: "Rasmda 'ton' (tus) nima?",
    options: [
      "Faqat rang",
      "Rangning yorug'lik va soyadan kelib chiqadigan ochlik yoki to'qlik darajasi",
      "Faqat hajm",
      "Faqat chiziq"
    ],
    correctAnswer: "Rangning yorug'lik va soyadan kelib chiqadigan ochlik yoki to'qlik darajasi"
  },
  {
    question: "Kompozitsiyada 'dinamika' nimani anglatadi?",
    options: [
      "Tinchlik va muvozanat",
      "Harakat, energiya va kuch ifodasi",
      "Faqat bitta rang",
      "Katta hajm"
    ],
    correctAnswer: "Harakat, energiya va kuch ifodasi"
  },
  {
    question: "Oq rangga qora rangni qo'shish qanday rangni hosil qiladi?",
    options: [
      "Yashil",
      "Kul rang",
      "Qizil",
      "Sariq"
    ],
    correctAnswer: "Kul rang"
  },
  {
    question: "Qaysi janr dengiz manzaralarini tasvirlashga ixtisoslashgan?",
    options: [
      "Manzara",
      "Marinistik janr",
      "Interyer",
      "Animalistik janr"
    ],
    correctAnswer: "Marinistik janr"
  },
  {
    question: "Portretda 'Avtoportret' nima?",
    options: [
      "Ikki kishilik portret",
      "Rassomning o'zini tasvirlashi",
      "Manzara ko'rinishi",
      "Jonsiz tabiat"
    ],
    correctAnswer: "Rassomning o'zini tasvirlashi"
  },
  {
    question: "Moybo'yoq bilan ishlashda asosiy erituvchi vosita nima?",
    options: [
      "Suv",
      "Skipidar (maxsus moyli erituvchi)",
      "Yelim",
      "Spirt"
    ],
    correctAnswer: "Skipidar (maxsus moyli erituvchi)"
  },
  {
    question: "Rassomlikda 'palitra' nima uchun ishlatiladi?",
    options: [
      "Rasm chizish uchun taglik",
      "Bo'yoqlarni aralashtirish va rang tanlash uchun taxtacha yoki sirt",
      "Faqat suv saqlash uchun",
      "Qalamlarni o'tkirlash uchun"
    ],
    correctAnswer: "Bo'yoqlarni aralashtirish va rang tanlash uchun taxtacha yoki sirt"
  },
  {
    question: "Grafikada 'Shtrix'ning ahamiyati nima?",
    options: [
      "Faqat rang berish",
      "Tasvirga hajm, soya va turlicha tus berish vositasi",
      "Qalamni o'tkirlash",
      "Faqat chiziq chizish"
    ],
    correctAnswer: "Tasvirga hajm, soya va turlicha tus berish vositasi"
  },
  {
    question: "Haykaltaroshlikda 'Loy'ni yumshoq va elastik holatda saqlash uchun nima qilish kerak?",
    options: [
      "Quritish",
      "Doim nam mato yoki selofan bilan o'rab qo'yish",
      "Pechda pishirish",
      "Faqat qattiq yuzada saqlash"
    ],
    correctAnswer: "Doim nam mato yoki selofan bilan o'rab qo'yish"
  },
  {
    question: "O'zbek xalq amaliy san'atida 'Naqsh'ning asosiy motivlari?",
    options: [
      "Faqat portretlar",
      "O'simlik, geometrik va hatto ba'zan hayvoniy shakllar",
      "Faqat tarixiy voqealar",
      "Faqat ranglar"
    ],
    correctAnswer: "O'simlik, geometrik va hatto ba'zan hayvoniy shakllar"
  },
  {
    question: "Tasviriy san'atning necha turi mavjud?",
    options: [
      "Faqat 2 ta",
      "3 ta (Rangtasvir, Grafika, Haykaltaroshlik)",
      "5 ta",
      "7 ta"
    ],
    correctAnswer: "3 ta (Rangtasvir, Grafika, Haykaltaroshlik)"
  },
  {
    question: "Ranglarning bir-biriga qarama-qarshi joylashuvi nima deyiladi?",
    options: [
      "Garmoniya",
      "Tus",
      "Kontrast",
      "Analogiya"
    ],
    correctAnswer: "Kontrast"
  },
  {
    question: "Loydan yasalgan buyumga sirtni bezash va suv o'tkazmaydigan qilish uchun nima qilinadi?",
    options: [
      "Parlatish",
      "Sirlash",
      "Angob solish",
      "Faqat pishirish"
    ],
    correctAnswer: "Sirlash"
  },
  {
    question: "Qaysi janr 'afsonalar, xudolar va qahramonlar' mavzularini aks ettiradi?",
    options: [
      "Maishiy janr",
      "Tarixiy janr",
      "Mifologik janr",
      "Natyurmort"
    ],
    correctAnswer: "Mifologik janr"
  },
  {
    question: "Qizil rangga yashil rangni qo'shish qanday rangni beradi (Bo'yoqda)?",
    options: [
      "Sariq",
      "Ko'k",
      "Jigarrang (Kulrang/Neytralga yaqin rang)",
      "Oq"
    ],
    correctAnswer: "Jigarrang (Kulrang/Neytralga yaqin rang)"
  },
  {
    question: "Rasmning orqa fonidagi eng uzoq qism nima deyiladi?",
    options: [
      "Old plan",
      "O'rta plan",
      "Uzoq plan",
      "Markaz"
    ],
    correctAnswer: "Uzoq plan"
  },
  {
    question: "Qaysi ranglar 'neytral' ranglar deb hisoblanadi?",
    options: [
      "Qizil va ko'k",
      "Oq, qora, kulrang (Axromatik ranglar)",
      "Sariq va yashil",
      "Faqat Binafsha"
    ],
    correctAnswer: "Oq, qora, kulrang (Axromatik ranglar)"
  },
  {
    question: "Chiziqli perspektivada uzoqlashgan parallel chiziqlar qayerda tutashadi?",
    options: [
      "Ko'z balandligidan pastda",
      "Ufq chizig'ida (g'oyib bo'lish nuqtasida)",
      "Rasmning o'rtasida",
      "Har xil joylarda"
    ],
    correctAnswer: "Ufq chizig'ida (g'oyib bo'lish nuqtasida)"
  },
  {
    question: "Qaysi janr turli davrlarning tarixiy shaxslari yoki voqealarini tasvirlaydi?",
    options: [
      "Maishiy janr",
      "Tarixiy janr",
      "Natyurmort",
      "Manzara"
    ],
    correctAnswer: "Tarixiy janr"
  },
  {
    question: "Qaysi ranglar qo'shimcha (ikkinchi darajali) ranglar hisoblanadi?",
    options: [
      "Qizil, sariq, ko'k",
      "Yashil, zarg'aldoq, binafsha",
      "Oq, qora, kulrang",
      "Faqat issiq ranglar"
    ],
    correctAnswer: "Yashil, zarg'aldoq, binafsha"
  },
  {
    question: "Tasviriy san'atda 'stil' so'zi nimani anglatadi?",
    options: [
      "Bo'yoq turi",
      "Rassomning o'ziga xos uslubi, badiiy yondashuvi",
      "Faqat chiziq",
      "Qalam turi"
    ],
    correctAnswer: "Rassomning o'ziga xos uslubi, badiiy yondashuvi"
  },
  {
    question: "Qaysi bo'yoq turi shaffoflik va yengillik xususiyatiga ega?",
    options: [
      "Moybo'yoq",
      "Akvarel",
      "Gouash",
      "Tempera"
    ],
    correctAnswer: "Akvarel"
  },
  {
    question: "Kulolchilikda 'Angob' nima?",
    options: [
      "Loy buyumining yuzasini qoplash uchun ishlatiladigan suyuq rangli loy qatlami",
      "Loyni pishirish usuli",
      "Loyni quritish usuli",
      "Loyni aralashtirish usuli"
    ],
    correctAnswer: "Loy buyumining yuzasini qoplash uchun ishlatiladigan suyuq rangli loy qatlami"
  },
  {
    question: "Rasmning orqa fon qismi nima deb ataladi?",
    options: [
      "Perspektiva",
      "Orqa plan (Fon)",
      "Portret",
      "Blik"
    ],
    correctAnswer: "Orqa plan (Fon)"
  },
  {
    question: "Qaysi janr 'tarixiy voqealar, qahramonliklar'ni tasvirlaydi?",
    options: [
      "Natyurmort",
      "Tarixiy janr",
      "Manzara",
      "Maishiy janr"
    ],
    correctAnswer: "Tarixiy janr"
  },
  {
    question: "Haykaltaroshlikda 'kontrrelyef' nima?",
    options: [
      "Butunlay yumaloq haykal",
      "Tasvir yuzaga botirilgan (chuqurlashtirilgan) tasvir",
      "Yuzadan juda oz bo'rttirib chiqarilgan tasvir",
      "Faqat bo'yash"
    ],
    correctAnswer: "Tasvir yuzaga botirilgan (chuqurlashtirilgan) tasvir"
  },
  {
    question: "Yashil rangga qizil rangni qo'shish qanday rangni hosil qiladi?",
    options: [
      "To'q sariq",
      "Binafsha",
      "Jigarrang (Kulrang/Neytralga yaqin tus)",
      "Ko'k"
    ],
    correctAnswer: "Jigarrang (Kulrang/Neytralga yaqin tus)"
  },
  {
    question: "Yog'och o'ymakorligi qanday asboblar bilan amalga oshiriladi?",
    options: [
      "Mo'yqalam va palitra",
      "Chizg'ich va sirkul",
      "Iskana, pichoq, randa",
      "Faqat qaychi"
    ],
    correctAnswer: "Iskana, pichoq, randa"
  },
  {
    question: "Qaysi ranglar sovuq ranglar guruhiga kiradi?",
    options: [
      "Qizil, sariq, apelsin",
      "Ko'k, yashilning ko'k tusi, binafsha",
      "Oq, qora, kulrang",
      "Faqat jigarrang"
    ],
    correctAnswer: "Ko'k, yashilning ko'k tusi, binafsha"
  },
  {
    question: "Miniatyura san'atining asosiy xususiyati nima?",
    options: [
      "Katta devoriy rasm",
      "Kichik o'lchamdagi, aniq detallarga ega tasvir (kitob bezagi)",
      "Faqat qora va oq rang",
      "Abstrakt shakllar"
    ],
    correctAnswer: "Kichik o'lchamdagi, aniq detallarga ega tasvir (kitob bezagi)"
  },
  {
    question: "Rassomlik - chiziq, rang, shakl",
    options: [
      "Rassomlik - chiziq, rang, shakl",
      "Grafika - faqat chiziq, rang",
      "Haykaltaroshlik - faqat rang",
      "Amaliy san'at - faqat geometrik naqsh"
    ],
    correctAnswer: "Rassomlik - chiziq, rang, shakl"
  },
  {
    question: "Monumental rasm - Freska, mozaika",
    options: [
      "Monumental rasm - Freska, mozaika",
      "Monumental rasm - faqat portret",
      "Monumental rasm - faqat natyurmort",
      "Monumental rasm - faqat eskiz"
    ],
    correctAnswer: "Monumental rasm - Freska, mozaika"
  },
  {
    question: "Mozaika - Tosh, shisha",
    options: [
      "Mozaika - Tosh, shisha",
      "Mozaika - faqat yog'och",
      "Mozaika - faqat loy",
      "Mozaika - faqat qog'oz"
    ],
    correctAnswer: "Mozaika - Tosh, shisha"
  },
  {
    question: "Kolaj - Qog'oz yopishtirish",
    options: [
      "Kolaj - Qog'oz yopishtirish",
      "Kolaj - tosh o'yish",
      "Kolaj - moyli rasm",
      "Kolaj - freska"
    ],
    correctAnswer: "Kolaj - Qog'oz yopishtirish"
  },
  {
    question: "Kulolchilik materiallari - Loy",
    options: [
      "Kulolchilik materiallari - Loy",
      "Kulolchilik materiallari - shisha",
      "Kulolchilik materiallari - metall",
      "Kulolchilik materiallari - plastilin"
    ],
    correctAnswer: "Kulolchilik materiallari - Loy"
  },
  {
    question: "Kvadrat o'rnini bosadi - To'rtburchak",
    options: [
      "Kvadrat o'rnini bosadi - To'rtburchak",
      "Kvadrat o'rnini bosadi - aylana",
      "Kvadrat o'rnini bosadi - uchburchak",
      "Kvadrat o'rnini bosadi - trapezoid"
    ],
    correctAnswer: "Kvadrat o'rnini bosadi - To'rtburchak"
  },
  {
    question: "Grafikada 'litografiya' nima?",
    options: [
      "Yog'ochga o'yish",
      "Tosh yuzasiga rasm chizib, undan bosma olish usuli",
      "Moyli rasm",
      "Devorga rasm chizish"
    ],
    correctAnswer: "Tosh yuzasiga rasm chizib, undan bosma olish usuli"
  },
  {
    question: "Yog'och o'ymakorligi qanday asboblar bilan amalga oshiriladi?",
    options: [
      "Mo'yqalam va palitra",
      "Chizg'ich va sirkul",
      "Iskana, pichoq, randa",
      "Faqat qaychi"
    ],
    correctAnswer: "Iskana, pichoq, randa"
  },
  {
    question: "Akvarel bo'yog'i qaysi asosda tayyorlanadi?",
    options: [
      "Moy asosida",
      "Suv asosida",
      "Spirt asosida",
      "Smola asosida"
    ],
    correctAnswer: "Suv asosida"
  },
  {
    question: "Ranglarning bir-biriga qarama-qarshi joylashuvi nima deyiladi?",
    options: [
      "Garmoniya",
      "Tus",
      "Kontrast",
      "Analogiya"
    ],
    correctAnswer: "Kontrast"
  },
  {
    question: "Qaysi ranglar guruhida 'och ranglar' mavjud?",
    options: [
      "Faqat Qora",
      "Kulrang turlarida (oq aralashgan)",
      "Faqat ko'k",
      "Faqat qizil"
    ],
    correctAnswer: "Kulrang turlarida (oq aralashgan)"
  },
  {
    question: "Haykaltaroshlikda 'Haykal' nima?",
    options: [
      "Faqat bo'yoq",
      "Uch o'lchamli (hajmdor) tasviriy san'at asari",
      "Ikki o'lchamli chizma",
      "Faqat devoriy bezak"
    ],
    correctAnswer: "Uch o'lchamli (hajmdor) tasviriy san'at asari"
  },
  {
    question: "Yashil va qizil ranglarning aralashmasi qanday tus beradi?",
    options: [
      "To'q sariq",
      "Binafsha",
      "Jigarrang (Kulrangga yaqin)",
      "Ko'k"
    ],
    correctAnswer: "Jigarrang (Kulrangga yaqin)"
  },
  {
    question: "Kulolchilikda ishlatiladigan 'parlatish' (polirovka) usuli nima uchun kerak?",
    options: [
      "Loyni yumshatish uchun",
      "Loy buyumining sirtini yaltiroq, tekis va zich qilish uchun",
      "Faqat rang berish uchun",
      "Loyni tez quritish uchun"
    ],
    correctAnswer: "Loy buyumining sirtini yaltiroq, tekis va zich qilish uchun"
  },
  {
    question: "Qaysi ranglar 'asosiy' ranglar emas?",
    options: [
      "Qizil, sariq, ko'k",
      "Yashil, binafsha, zarg'aldoq",
      "Qora, oq, kulrang",
      "Faqat ko'k"
    ],
    correctAnswer: "Yashil, binafsha, zarg'aldoq"
  },
  {
    question: "O'zbek miniatyura maktabining eng yorqin namoyandasi?",
    options: [
      "O'rol Tansiqboyev",
      "Kamolliddin Behzod",
      "Cho'lpon",
      "Bobur"
    ],
    correctAnswer: "Kamolliddin Behzod"
  },
  {
    question: "Grafikada 'litografiya' nima?",
    options: [
      "Yog'ochga o'yish",
      "Tosh yuzasiga rasm chizib, undan bosma olish usuli",
      "Moyli rasm",
      "Devorga rasm chizish"
    ],
    correctAnswer: "Tosh yuzasiga rasm chizib, undan bosma olish usuli"
  },
  {
    question: "Yog'och o'ymakorligi qanday asboblar bilan amalga oshiriladi?",
    options: [
      "Mo'yqalam va palitra",
      "Chizg'ich va sirkul",
      "Iskana, pichoq, randa",
      "Faqat qaychi"
    ],
    correctAnswer: "Iskana, pichoq, randa"
  },
  {
    question: "Akvarel bo'yog'i qaysi asosda tayyorlanadi?",
    options: [
      "Moy asosida",
      "Suv asosida",
      "Spirt asosida",
      "Smola asosida"
    ],
    correctAnswer: "Suv asosida"
  },
  {
    question: "Ranglarning bir-biriga qarama-qarshi joylashuvi nima deyiladi?",
    options: [
      "Garmoniya",
      "Tus",
      "Kontrast",
      "Analogiya"
    ],
    correctAnswer: "Kontrast"
  },
  {
    question: "Qaysi ranglar guruhida 'och ranglar' mavjud?",
    options: [
      "Faqat Qora",
      "Kulrang turlarida (oq aralashgan)",
      "Faqat ko'k",
      "Faqat qizil"
    ],
    correctAnswer: "Kulrang turlarida (oq aralashgan)"
  },
  {
    question: "Haykaltaroshlikda 'Haykal' nima?",
    options: [
      "Faqat bo'yoq",
      "Uch o'lchamli (hajmdor) tasviriy san'at asari",
      "Ikki o'lchamli chizma",
      "Faqat devoriy bezak"
    ],
    correctAnswer: "Uch o'lchamli (hajmdor) tasviriy san'at asari"
  },
  {
    question: "Yashil va qizil ranglarning aralashmasi qanday tus beradi?",
    options: [
      "To'q sariq",
      "Binafsha",
      "Jigarrang (Kulrangga yaqin)",
      "Ko'k"
    ],
    correctAnswer: "Jigarrang (Kulrangga yaqin)"
  },
  {
    question: "Kulolchilikda ishlatiladigan 'parlatish' (polirovka) usuli nima uchun kerak?",
    options: [
      "Loyni yumshatish uchun",
      "Loy buyumining sirtini yaltiroq, tekis va zich qilish uchun",
      "Faqat rang berish uchun",
      "Loyni tez quritish uchun"
    ],
    correctAnswer: "Loy buyumining sirtini yaltiroq, tekis va zich qilish uchun"
  },
  {
    question: "Qaysi ranglar 'asosiy' ranglar emas?",
    options: [
      "Qizil, sariq, ko'k",
      "Yashil, binafsha, zarg'aldoq",
      "Qora, oq, kulrang",
      "Faqat ko'k"
    ],
    correctAnswer: "Yashil, binafsha, zarg'aldoq"
  },
  {
    question: "O'zbek miniatyura maktabining eng yorqin namoyandasi?",
    options: [
      "O'rol Tansiqboyev",
      "Kamolliddin Behzod",
      "Cho'lpon",
      "Bobur"
    ],
    correctAnswer: "Kamolliddin Behzod"
  },
  {
    question: "Grafikada 'litografiya' nima?",
    options: [
      "Yog'ochga o'yish",
      "Tosh yuzasiga rasm chizib, undan bosma olish usuli",
      "Moyli rasm",
      "Devorga rasm chizish"
    ],
    correctAnswer: "Tosh yuzasiga rasm chizib, undan bosma olish usuli"
  },
  {
    question: "Yog'och o'ymakorligi qanday asboblar bilan amalga oshiriladi?",
    options: [
      "Mo'yqalam va palitra",
      "Chizg'ich va sirkul",
      "Iskana, pichoq, randa",
      "Faqat qaychi"
    ],
    correctAnswer: "Iskana, pichoq, randa"
  },
  {
    question: "Akvarel bo'yog'i qaysi asosda tayyorlanadi?",
    options: [
      "Moy asosida",
      "Suv asosida",
      "Spirt asosida",
      "Smola asosida"
    ],
    correctAnswer: "Suv asosida"
  },
  {
    question: "Ranglarning bir-biriga qarama-qarshi joylashuvi nima deyiladi?",
    options: [
      "Garmoniya",
      "Tus",
      "Kontrast",
      "Analogiya"
    ],
    correctAnswer: "Kontrast"
  },
  {
    question: "Qaysi ranglar guruhida 'och ranglar' mavjud?",
    options: [
      "Faqat Qora",
      "Kulrang turlarida (oq aralashgan)",
      "Faqat ko'k",
      "Faqat qizil"
    ],
    correctAnswer: "Kulrang turlarida (oq aralashgan)"
  },
  {
    question: "Haykaltaroshlikda 'Haykal' nima?",
    options: [
      "Faqat bo'yoq",
      "Uch o'lchamli (hajmdor) tasviriy san'at asari",
      "Ikki o'lchamli chizma",
      "Faqat devoriy bezak"
    ],
    correctAnswer: "Uch o'lchamli (hajmdor) tasviriy san'at asari"
  },
  {
    question: "Yashil va qizil ranglarning aralashmasi qanday tus beradi?",
    options: [
      "To'q sariq",
      "Binafsha",
      "Jigarrang (Kulrangga yaqin)",
      "Ko'k"
    ],
    correctAnswer: "Jigarrang (Kulrangga yaqin)"
  },
  {
    question: "Kulolchilikda ishlatiladigan 'parlatish' (polirovka) usuli nima uchun kerak?",
    options: [
      "Loyni yumshatish uchun",
      "Loy buyumining sirtini yaltiroq, tekis va zich qilish uchun",
      "Faqat rang berish uchun",
      "Loyni tez quritish uchun"
    ],
    correctAnswer: "Loy buyumining sirtini yaltiroq, tekis va zich qilish uchun"
  },
  {
    question: "Qaysi ranglar 'asosiy' ranglar emas?",
    options: [
      "Qizil, sariq, ko'k",
      "Yashil, binafsha, zarg'aldoq",
      "Qora, oq, kulrang",
      "Faqat ko'k"
    ],
    correctAnswer: "Yashil, binafsha, zarg'aldoq"
  },
  {
    question: "O'zbek miniatyura maktabining eng yorqin namoyandasi?",
    options: [
      "O'rol Tansiqboyev",
      "Kamolliddin Behzod",
      "Cho'lpon",
      "Bobur"
    ],
    correctAnswer: "Kamolliddin Behzod"
  },
  {
    question: "Grafikada 'litografiya' nima?",
    options: [
      "Yog'ochga o'yish",
      "Tosh yuzasiga rasm chizib, undan bosma olish usuli",
      "Moyli rasm",
      "Devorga rasm chizish"
    ],
    correctAnswer: "Tosh yuzasiga rasm chizib, undan bosma olish usuli"
  },
  {
    question: "Yog'och o'ymakorligi qanday asboblar bilan amalga oshiriladi?",
    options: [
      "Mo'yqalam va palitra",
      "Chizg'ich va sirkul",
      "Iskana, pichoq, randa",
      "Faqat qaychi"
    ],
    correctAnswer: "Iskana, pichoq, randa"
  },
  {
    question: "Akvarel bo'yog'i qaysi asosda tayyorlanadi?",
    options: [
      "Moy asosida",
      "Suv asosida",
      "Spirt asosida",
      "Smola asosida"
    ],
    correctAnswer: "Suv asosida"
  },
  {
    question: "Ranglarning bir-biriga qarama-qarshi joylashuvi nima deyiladi?",
    options: [
      "Garmoniya",
      "Tus",
      "Kontrast",
      "Analogiya"
    ],
    correctAnswer: "Kontrast"
  },
  {
    question: "Qaysi ranglar guruhida 'och ranglar' mavjud?",
    options: [
      "Faqat Qora",
      "Kulrang turlarida (oq aralashgan)",
      "Faqat ko'k",
      "Faqat qizil"
    ],
    correctAnswer: "Kulrang turlarida (oq aralashgan)"
  },
  {
    question: "Haykaltaroshlikda 'Haykal' nima?",
    options: [
      "Faqat bo'yoq",
      "Uch o'lchamli (hajmdor) tasviriy san'at asari",
      "Ikki o'lchamli chizma",
      "Faqat devoriy bezak"
    ],
    correctAnswer: "Uch o'lchamli (hajmdor) tasviriy san'at asari"
  },
  {
    question: "Yashil va qizil ranglarning aralashmasi qanday tus beradi?",
    options: [
      "To'q sariq",
      "Binafsha",
      "Jigarrang (Kulrangga yaqin)",
      "Ko'k"
    ],
    correctAnswer: "Jigarrang (Kulrangga yaqin)"
  },
  {
    question: "Kulolchilikda ishlatiladigan 'parlatish' (polirovka) usuli nima uchun kerak?",
    options: [
      "Loyni yumshatish uchun",
      "Loy buyumining sirtini yaltiroq, tekis va zich qilish uchun",
      "Faqat rang berish uchun",
      "Loyni tez quritish uchun"
    ],
    correctAnswer: "Loy buyumining sirtini yaltiroq, tekis va zich qilish uchun"
  },
  {
    question: "Qaysi ranglar 'asosiy' ranglar emas?",
    options: [
      "Qizil, sariq, ko'k",
      "Yashil, binafsha, zarg'aldoq",
      "Qora, oq, kulrang",
      "Faqat ko'k"
    ],
    correctAnswer: "Yashil, binafsha, zarg'aldoq"
  },
  {
    question: "O'zbek miniatyura maktabining eng yorqin namoyandasi?",
    options: [
      "O'rol Tansiqboyev",
      "Kamolliddin Behzod",
      "Cho'lpon",
      "Bobur"
    ],
    correctAnswer: "Kamolliddin Behzod"
  },
  {
    question: "Grafikada 'litografiya' nima?",
    options: [
      "Yog'ochga o'yish",
      "Tosh yuzasiga rasm chizib, undan bosma olish usuli",
      "Moyli rasm",
      "Devorga rasm chizish"
    ],
    correctAnswer: "Tosh yuzasiga rasm chizib, undan bosma olish usuli"
  },
  {
    question: "Yog'och o'ymakorligi qanday asboblar bilan amalga oshiriladi?",
    options: [
      "Mo'yqalam va palitra",
      "Chizg'ich va sirkul",
      "Iskana, pichoq, randa",
      "Faqat qaychi"
    ],
    correctAnswer: "Iskana, pichoq, randa"
  },
  {
    question: "Akvarel bo'yog'i qaysi asosda tayyorlanadi?",
    options: [
      "Moy asosida",
      "Suv asosida",
      "Spirt asosida",
      "Smola asosida"
    ],
    correctAnswer: "Suv asosida"
  },
  {
    question: "Ranglarning bir-biriga qarama-qarshi joylashuvi nima deyiladi?",
    options: [
      "Garmoniya",
      "Tus",
      "Kontrast",
      "Analogiya"
    ],
    correctAnswer: "Kontrast"
  },
  {
    question: "Qaysi ranglar guruhida 'och ranglar' mavjud?",
    options: [
      "Faqat Qora",
      "Kulrang turlarida (oq aralashgan)",
      "Faqat ko'k",
      "Faqat qizil"
    ],
    correctAnswer: "Kulrang turlarida (oq aralashgan)"
  },
  {
    question: "Haykaltaroshlikda 'Haykal' nima?",
    options: [
      "Faqat bo'yoq",
      "Uch o'lchamli (hajmdor) tasviriy san'at asari",
      "Ikki o'lchamli chizma",
      "Faqat devoriy bezak"
    ],
    correctAnswer: "Uch o'lchamli (hajmdor) tasviriy san'at asari"
  },
  {
    question: "Yashil va qizil ranglarning aralashmasi qanday tus beradi?",
    options: [
      "To'q sariq",
      "Binafsha",
      "Jigarrang (Kulrangga yaqin)",
      "Ko'k"
    ],
    correctAnswer: "Jigarrang (Kulrangga yaqin)"
  },
  {
    question: "Kulolchilikda ishlatiladigan 'parlatish' (polirovka) usuli nima uchun kerak?",
    options: [
      "Loyni yumshatish uchun",
      "Loy buyumining sirtini yaltiroq, tekis va zich qilish uchun",
      "Faqat rang berish uchun",
      "Loyni tez quritish uchun"
    ],
    correctAnswer: "Loy buyumining sirtini yaltiroq, tekis va zich qilish uchun"
  },
  {
    question: "Qaysi ranglar 'asosiy' ranglar emas?",
    options: [
      "Qizil, sariq, ko'k",
      "Yashil, binafsha, zarg'aldoq",
      "Qora, oq, kulrang",
      "Faqat ko'k"
    ],
    correctAnswer: "Yashil, binafsha, zarg'aldoq"
  }
];


const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('nextBtn');
const questionsPerPage = 1; // SAHIFADA FAQAT BITTA TEST KO'RINIShI UCHUN 1 GA O'ZGARTIRILDI

// Natijalar elementlari: endi bitta span elementiga bog'laymiz
const summaryResultsSpan = document.getElementById('summaryResults');

let currentQuestions = []; // Hozirgi sahifadagi savollar (faqat bitta bo'ladi)
// `answeredQuestions` endi kerak emas, chunki har bir savolga bir marta javob berilgandan keyin yangi savol yuklanadi.

// Barcha savollarni aralashtirish uchun alohida nusxa saqlaymiz
let shuffledAllQuestions = [];

// Hisoblash o'zgaruvchilari
let totalAttempts = 0; // Jami urinishlar (savollar soni)
let correctCount = 0; // To'g'ri javoblar soni
let questionAnsweredThisTurn = false; // Joriy savolga javob berilganligini kuzatish uchun flag

// ==========================================================
// SECTION 2: Helper Functions (Yordamchi Funksiyalar)
// Bu bo'limda umumiy vazifalarni bajaradigan, qayta ishlatiladigan funksiyalar mavjud.
// ==========================================================

// Array elementlarini tasodifiy tartiblash funksiyasi (Fisher-Yates shuffle algoritmi)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Elementlarni almashtirish
    }
}

// Natijalarni yangilash funksiyasi
function updateResults() {
    let percentage = 0;
    if (totalAttempts > 0) {
        percentage = (correctCount / totalAttempts) * 100; 
    }
    
    // Natijalarni yangi formatda yangilaymiz: "Urinish: X, To'g'ri: Y, Foiz: Z%"
    summaryResultsSpan.textContent = `Urinish: ${totalAttempts}, To'g'ri: ${correctCount}, Foiz: ${percentage.toFixed(0)}%`;
}


// Savollarni veb-sahifaga yuklash va ko'rsatish funksiyasi
function loadQuestions() {
    quizContainer.innerHTML = ''; // Avvalgi savollarni tozalash

    // Joriy savolga javob berilganligini tiklaymiz
    questionAnsweredThisTurn = false; 

    // Agar shuffledAllQuestions bo'sh bo'lsa (yoki barcha savollar ishlatilgan bo'lsa),
    // uni qayta yuklab va aralashtiramiz
    if (shuffledAllQuestions.length === 0) {
        shuffledAllQuestions = [...questionsData]; // questionsData dan nusxa olamiz
        shuffleArray(shuffledAllQuestions); // Nusxani aralashtiramiz
    }

    // Keyingi N ta savolni olamiz (N = questionsPerPage)
    currentQuestions = shuffledAllQuestions.splice(0, questionsPerPage);
    
    // Agar savol qolmagan bo'lsa
    if (currentQuestions.length === 0) {
        quizContainer.innerHTML = "<p style='text-align: center; font-size: 1.5em; color: #555;'>Barcha savollar tugadi! Natijalarni pastda ko'ring.</p>";
        nextButton.disabled = true; // Tugmani o'chiramiz
        return; // Funksiyadan chiqamiz
    }

    // Har safar yangi savol yuklanganda, "Keyingi Savol" tugmasini vaqtincha o'chiramiz
    nextButton.disabled = true;


    currentQuestions.forEach((q, index) => { // Bu yerda index har doim 0 bo'ladi, chunki questionsPerPage = 1
        const questionBlock = document.createElement('div');
        questionBlock.classList.add('question-block');

        const questionText = document.createElement('p');
        questionText.classList.add('question-text');
        // Savol raqamini jami urinishlar asosida ko'rsatamiz
        questionText.textContent = `${totalAttempts + 1}. ${q.question}`; 
        questionBlock.appendChild(questionText);

        const optionsList = document.createElement('ul');
        optionsList.classList.add('options-list');

        // Variantlarni aralashtirish uchun nusxa olamiz va aralashtiramiz
        const shuffledOptions = [...q.options]; 
        shuffleArray(shuffledOptions); // Variantlarni tasodifiy tartiblash

        shuffledOptions.forEach((option, optionIndex) => {
            const listItem = document.createElement('li');
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `question${index}`; // Har bir savol uchun unikal nom (bu yerda index har doim 0)
            radioInput.value = option;
            radioInput.id = `q${index}-option${optionIndex}`;
            
            // Radio tugmasi o'zgarganda foydalanuvchi javobini saqlash va tekshirish
            radioInput.addEventListener('change', (event) => {
                // Agar joriy savolga allaqachon javob berilgan bo'lsa, qayta hisoblamaymiz
                if (questionAnsweredThisTurn) {
                    return; 
                }

                const selectedValue = event.target.value;
                
                const currentQuestion = currentQuestions[index]; // Hozirgi savol ob'ekti (faqat bitta)
                let feedbackDiv = questionBlock.querySelector('.feedback');

                // Agar feedbackDiv mavjud bo'lsa, avvalgisini olib tashlaymiz
                if (feedbackDiv) {
                    feedbackDiv.remove();
                }
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback');
                questionBlock.appendChild(feedbackDiv);

                // Urinish sonini oshiramiz (faqat bir marta)
                totalAttempts++;

                if (selectedValue === currentQuestion.correctAnswer) {
                    feedbackDiv.textContent = 'Toʻgʻri!';
                    feedbackDiv.classList.remove('incorrect');
                    feedbackDiv.classList.add('correct');
                    correctCount++; // To'g'ri javob sonini oshiramiz
                } else {
                    feedbackDiv.textContent = `Notoʻgʻri. To'g'ri javob: "${currentQuestion.correctAnswer}"`;
                    feedbackDiv.classList.remove('correct');
                    feedbackDiv.classList.add('incorrect');
                    // wrongCount o'zgaruvchisi sahifada ko'rsatilmaydi, shuning uchun bu yerda oshirish shart emas
                }

                // Natijalarni yangilaymiz
                updateResults();

                // Shu savolning radio tugmalarini o'chirish (bir marta javob berilgandan so'ng)
                const radioButtons = questionBlock.querySelectorAll('input[type="radio"]');
                radioButtons.forEach(radio => {
                    radio.disabled = true;
                });

                // Savolga javob berilganligini belgilaymiz
                questionAnsweredThisTurn = true;
                // "Keyingi Savol" tugmasini faollashtiramiz
                nextButton.disabled = false;
            });

            const label = document.createElement('label');
            label.htmlFor = `q${index}-option${optionIndex}`;
            label.textContent = option;

            listItem.appendChild(radioInput);
            listItem.appendChild(label);
            optionsList.appendChild(listItem);
        });
        questionBlock.appendChild(optionsList); // optionsListni questionBlockga qo'shish
        quizContainer.appendChild(questionBlock);
    });
}


// ==========================================================
// SECTION 3: Event Handlers (Hodisalarni Boshqaruvchi Funksiyalar)
// Bu bo'limda tugmalar bosilganda yoki boshqa hodisalar yuz berganda bajariladigan funksiyalar mavjud.
// ==========================================================

// Keyingi savollar tugmasi bosilganda bajariladigan funksiya
function handleNextQuestions() {
    loadQuestions(); // Yangi savol to'plamini yuklash
}


// ==========================================================
// SECTION 4: Event Listeners (Hodisa Tinglovchilar)
// Bu bo'limda HTML elementlariga hodisa tinglovchilari biriktirilgan.
// ==========================================================

nextButton.addEventListener('click', handleNextQuestions);


// ==========================================================
// SECTION 5: Initial Load (Dastlabki Yuklanish)
// Bu bo'limda sahifa to'liq yuklanganda bajariladigan funksiyalar joylashgan.
// ==========================================================

// Sahifa to'liq yuklanganda savollarni yuklashni boshlash
document.addEventListener('DOMContentLoaded', () => {
    updateResults(); // Sahifa yuklanganda natijalarni boshlang'ich holatga keltirish
    loadQuestions();
});

// --- TAYMER LOGIKASI ---

let startTime;
let timerInterval;

/**
 * Taymerni ishga tushiradi va sanashni boshlaydi.
 */
function startTimer() {
    // Agar taymer allaqachon ishlayotgan bo'lsa, avval to'xtatiladi
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    startTime = Date.now();
    // Har 1000 millisekund (1 soniya)da updateTimer funksiyasini chaqirish
    timerInterval = setInterval(updateTimer, 1000); 
}

/**
 * O'tgan vaqtni hisoblaydi va HTML elementiga joylaydi.
 */
function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Vaqtni "MM:SS" formatida ko'rsatish
    const formattedTime = 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');

    document.getElementById('timer').textContent = formattedTime;
}

// Sahifa yuklanganda taymerni avtomatik ishga tushirish
window.onload = function() {
    startTimer();
    
    // Agar bu yerda testlar.js ga tegishli boshqa funksiyalar bo'lsa, ularni ham chaqiring
    // Masalan: loadQuestions();
}; 
