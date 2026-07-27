import type { QuizQuestion } from '@/types';

export const ECAT_QUESTIONS: QuizQuestion[] = [
  // ============ MATHEMATICS (10) ============
  {
    id: 'ecat-math-1',
    mode: 'ECAT',
    subject: 'Mathematics',
    question: 'What is the derivative of f(x) = ln(x)?',
    options: ['1/x', '1/x²', 'x', 'e^x'],
    correctIndex: 0,
    explanation:
      'The derivative of the natural logarithm is d/dx[ln(x)] = 1/x for x > 0. It follows from the inverse relationship between e^x and ln(x).',
    explanationUrdu:
      'نیچرل لاگارتھم کا ڈیریویٹو d/dx[ln(x)] = 1/x ہے (x > 0 کے لیے)۔ یہ e^x اور ln(x) کے الٹے رشتے سے ملتا ہے۔',
    memoryTip: 'ln(x) differentiates to 1/x — the reciprocal of the argument.',
    memoryTipUrdu: 'ln(x) کا ڈیریویٹو 1/x ہوتا ہے — ارگیومنٹ کا اِنورس۔',
  },
  {
    id: 'ecat-math-2',
    mode: 'ECAT',
    subject: 'Mathematics',
    question: 'What is ∫ cos(x) dx?',
    options: ['sin(x) + C', '-sin(x) + C', '-cos(x) + C', 'tan(x) + C'],
    correctIndex: 0,
    explanation:
      'The integral of cos(x) is sin(x) + C, because the derivative of sin(x) is cos(x). Integration reverses differentiation.',
    explanationUrdu:
      'cos(x) کا اِنٹیگرل sin(x) + C ہے، کیونکہ sin(x) کا ڈیریویٹو cos(x) ہوتا ہے۔ اِنٹیگریشن ڈفرینشیئیشن کا الٹا ہے۔',
    memoryTip: 'Integration reverses differentiation — since sin′ = cos, ∫cos = sin.',
    memoryTipUrdu: 'اِنٹیگریشن ڈفرینشیئیشن کا الٹا ہے — چونکہ sin′ = cos، لہذا ∫cos = sin۔',
  },
  {
    id: 'ecat-math-3',
    mode: 'ECAT',
    subject: 'Mathematics',
    question: 'What is the value of i⁴, where i = √−1?',
    options: ['1', '−1', 'i', '−i'],
    correctIndex: 0,
    explanation:
      'Since i² = −1, then i⁴ = (i²)² = (−1)² = 1. The powers of i cycle every four: i, −1, −i, 1.',
    explanationUrdu:
      'چونکہ i² = −1، تو i⁴ = (i²)² = (−1)² = 1۔ i کی پاورز ہر چار پر دہراتی ہیں: i، −1، −i، 1۔',
    memoryTip: 'Powers of i cycle: i¹=i, i²=−1, i³=−i, i⁴=1 — repeat every four.',
    memoryTipUrdu: 'i کی پاورز چکر لگاتی ہیں: i¹=i، i²=−1، i³=−i، i⁴=1 — ہر چار پر دہرائو۔',
  },
  {
    id: 'ecat-math-4',
    mode: 'ECAT',
    subject: 'Mathematics',
    question: 'What is the determinant of the matrix [[3, 4], [2, 5]]?',
    options: ['7', '15', '8', '23'],
    correctIndex: 0,
    explanation:
      'For a 2×2 matrix [[a,b],[c,d]], det = ad − bc = (3)(5) − (4)(2) = 15 − 8 = 7.',
    explanationUrdu:
      '2×2 میٹرکس [[a,b],[c,d]] کے لیے det = ad − bc = (3)(5) − (4)(2) = 15 − 8 = 7۔',
    memoryTip: 'Main diagonal minus off-diagonal: (3×5) − (4×2).',
    memoryTipUrdu: 'مین ڈائیگونل منفس آف ڈائیگونل: (3×5) − (4×2)۔',
  },
  {
    id: 'ecat-math-5',
    mode: 'ECAT',
    subject: 'Mathematics',
    question: 'What is the exact value of sin(30°)?',
    options: ['1/2', '√3/2', '√2/2', '1'],
    correctIndex: 0,
    explanation:
      'sin(30°) = 1/2. It comes from splitting an equilateral triangle in half, giving a 30-60-90 triangle whose opposite side is half the hypotenuse.',
    explanationUrdu:
      'sin(30°) = 1/2۔ یہ ایک مساوی الاضلاع تکونے کو آدھا کرنے سے ملتا ہے، جو 30-60-90 تکونا بنتا ہے جس کا مخالف ضلع ہائیپوٹینوس کا آدھا ہے۔',
    memoryTip: '30° → half: sin 30 = 1/2, cos 30 = √3/2.',
    memoryTipUrdu: '30° → آدھا: sin 30 = 1/2، cos 30 = √3/2۔',
  },
  {
    id: 'ecat-math-6',
    mode: 'ECAT',
    subject: 'Mathematics',
    question: 'If vectors a = (1, 2) and b = (3, 4), what is a · b?',
    options: ['11', '10', '14', '7'],
    correctIndex: 0,
    explanation:
      'The dot product is a·b = (1)(3) + (2)(4) = 3 + 8 = 11. Dot products sum the products of corresponding components.',
    explanationUrdu:
      'ڈاٹ پراڈکٹ a·b = (1)(3) + (2)(4) = 3 + 8 = 11۔ ڈاٹ پراڈکٹ متعلقہ کمپوننٹس کے حاصلِ ضرب کو جمع کرتا ہے۔',
    memoryTip: 'Dot product = multiply matching components, then add.',
    memoryTipUrdu: 'ڈاٹ پراڈکٹ = متعلقہ کمپوننٹس ضرب، پھر جمع۔',
  },
  {
    id: 'ecat-math-7',
    mode: 'ECAT',
    subject: 'Mathematics',
    question: 'What is lim(x→0) (1 − cos x) / x²?',
    options: ['1/2', '1', '0', 'undefined'],
    correctIndex: 0,
    explanation:
      'Using 1 − cos x = 2 sin²(x/2) and the standard limit sin u/u → 1, the limit equals 1/2. It also follows from applying L’Hôpital’s rule twice.',
    explanationUrdu:
      '1 − cos x = 2 sin²(x/2) اور معیاری حد sin u/u → 1 استعمال کرتے ہوئے، حد 1/2 ہوتی ہے۔ یہ L’Hôpital رول دو بار استعمال کرنے سے بھی ملتی ہے۔',
    memoryTip: '(1 − cos x)/x² → 1/2 — the "half" companion to sin x/x → 1.',
    memoryTipUrdu: '(1 − cos x)/x² → 1/2 — sin x/x → 1 کا "آدھا" ساتھی۔',
  },
  {
    id: 'ecat-math-8',
    mode: 'ECAT',
    subject: 'Mathematics',
    question: 'What are the roots of x² − 5x + 6 = 0?',
    options: ['2 and 3', '−2 and −3', '1 and 6', '−1 and −6'],
    correctIndex: 0,
    explanation:
      'Factoring: x² − 5x + 6 = (x − 2)(x − 3) = 0, so x = 2 or x = 3. Sum of roots = 5, product = 6.',
    explanationUrdu:
      'فیکٹر کرنے پر: x² − 5x + 6 = (x − 2)(x − 3) = 0، تو x = 2 یا x = 3۔ جذر کا جمع = 5، حاصلِ ضرب = 6۔',
    memoryTip: 'Find two numbers that multiply to 6 and add to 5: 2 and 3.',
    memoryTipUrdu: 'ایسے دو عدد تلاش کرو جو 6 پر ضرب اور 5 پر جمع ہوں: 2 اور 3۔',
  },
  {
    id: 'ecat-math-9',
    mode: 'ECAT',
    subject: 'Mathematics',
    question: 'What is the derivative of tan(x)?',
    options: ['sec²(x)', 'sec(x)tan(x)', '−sec²(x)', 'cos²(x)'],
    correctIndex: 0,
    explanation:
      'd/dx[tan(x)] = sec²(x). It follows from tan = sin/cos and the quotient rule, simplifying to 1/cos² = sec².',
    explanationUrdu:
      'd/dx[tan(x)] = sec²(x)۔ یہ tan = sin/cos اور کوٹینٹ رول سے ملتا ہے، جو 1/cos² = sec² تک سادھ ہوتا ہے۔',
    memoryTip: "tan's derivative is sec² — 'secant squared'.",
    memoryTipUrdu: "tan کا ڈیریویٹو sec² ہے — 'سیکنٹ اسکوائرڈ'۔",
  },
  {
    id: 'ecat-math-10',
    mode: 'ECAT',
    subject: 'Mathematics',
    question: 'What is the modulus of the complex number 3 + 4i?',
    options: ['5', '7', '25', '1'],
    correctIndex: 0,
    explanation:
      'The modulus |a + bi| = √(a² + b²) = √(9 + 16) = √25 = 5. It is the distance from the origin in the complex plane.',
    explanationUrdu:
      'ماڈیولس |a + bi| = √(a² + b²) = √(9 + 16) = √25 = 5۔ یہ کمپلیکس پلین میں مبدأ سے فاصلہ ہے۔',
    memoryTip: '3-4-5 right triangle: |3+4i| = √(3²+4²) = 5.',
    memoryTipUrdu: '3-4-5 قائمہ تکونا: |3+4i| = √(3²+4²) = 5۔',
  },

  // ============ PHYSICS (10) ============
  {
    id: 'ecat-phy-1',
    mode: 'ECAT',
    subject: 'Physics',
    question:
      'At what angle of projection is the horizontal range of a projectile maximum (for a fixed initial speed)?',
    options: ['30°', '45°', '60°', '90°'],
    correctIndex: 1,
    explanation:
      'Range R = v²sin(2θ)/g, which is maximum when sin(2θ) = 1, i.e. 2θ = 90° or θ = 45°.',
    explanationUrdu:
      'رینج R = v²sin(2θ)/g، جو زیادہ سے زیادہ ہوتی ہے جب sin(2θ) = 1، یعنی 2θ = 90° یا θ = 45°۔',
    memoryTip: 'Range formula has sin(2θ) — max when 2θ = 90°, so θ = 45°.',
    memoryTipUrdu: 'رینج فارمولے میں sin(2θ) ہے — زیادہ سے زیادہ جب 2θ = 90°، تو θ = 45°۔',
  },
  {
    id: 'ecat-phy-2',
    mode: 'ECAT',
    subject: 'Physics',
    question:
      'A charge q moves with velocity v perpendicular to a magnetic field B. The magnitude of the magnetic force is:',
    options: ['qvB', 'qB/v', 'qv/B', 'q/(vB)'],
    correctIndex: 0,
    explanation:
      'The Lorentz force magnitude is F = qvB sinθ. When v is perpendicular to B, sinθ = 1, so F = qvB.',
    explanationUrdu:
      'لورنٹس فورس کی مقدار F = qvB sinθ ہے۔ جب v، B کے عمود پر ہو تو sinθ = 1، لہذا F = qvB۔',
    memoryTip: 'F = qvB when perpendicular — drop the sinθ (it is 1).',
    memoryTipUrdu: 'عمود پر F = qvB — sinθ کو چھوڑ دو (یہ 1 ہے)۔',
  },
  {
    id: 'ecat-phy-3',
    mode: 'ECAT',
    subject: 'Physics',
    question:
      'Light travels from air (n₁ = 1) into glass (n₂ = 1.5) with an angle of incidence 30°. What does Snell’s law give for sin r?',
    options: ['sin r = 1/3', 'sin r = 1/2', 'sin r = 1/4', 'sin r = 2/3'],
    correctIndex: 0,
    explanation:
      "Snell's law: n₁ sin i = n₂ sin r, so 1·sin 30° = 1.5·sin r → 0.5 = 1.5 sin r → sin r = 1/3.",
    explanationUrdu:
      'اسنیل کا قانون: n₁ sin i = n₂ sin r، تو 1·sin 30° = 1.5·sin r → 0.5 = 1.5 sin r → sin r = 1/3۔',
    memoryTip: 'n₁ sin i = n₂ sin r — the product stays constant across the boundary.',
    memoryTipUrdu: 'n₁ sin i = n₂ sin r — حاصلِ ضرب سرحد کے پار مستقل رہتا ہے۔',
  },
  {
    id: 'ecat-phy-4',
    mode: 'ECAT',
    subject: 'Physics',
    question: 'The first law of thermodynamics is essentially a statement of the conservation of:',
    options: ['Energy', 'Momentum', 'Mass', 'Charge'],
    correctIndex: 0,
    explanation:
      'The first law, ΔU = Q − W, states that energy is conserved: heat added equals the change in internal energy plus work done by the system.',
    explanationUrdu:
      'پہلا قانون ΔU = Q − W، توانائی کے بقا کو بیان کرتا ہے: دیا گیا حرارت اندرونی توانائی کی تبدیلی plus سسٹم کا کیا گیا کام ہے۔',
    memoryTip: 'ΔU = Q − W — energy in equals energy stored plus energy out as work.',
    memoryTipUrdu: 'ΔU = Q − W — اندر آنے والی توانائی ذخیرہ plus کام کی صورت میں نکلنے والی توانائی۔',
  },
  {
    id: 'ecat-phy-5',
    mode: 'ECAT',
    subject: 'Physics',
    question: 'The de Broglie wavelength of a particle is given by:',
    options: ['λ = h/p', 'λ = hp', 'λ = p/h', 'λ = h/mc'],
    correctIndex: 0,
    explanation:
      "de Broglie postulated λ = h/p, where h is Planck's constant and p = mv is the momentum. It links the wave and particle natures of matter.",
    explanationUrdu:
      'ڈی بروگلی نے λ = h/p پیش کیا، جہاں h پلانک کا مستقل اور p = mv مومنٹم ہے۔ یہ مادے کی لہر اور ذرے کی فطرت کو جوڑتا ہے۔',
    memoryTip: 'λ = h over p — Planck’s constant divided by momentum.',
    memoryTipUrdu: 'λ = h کو p پر تقسیم — پلانک مستقل کو مومنٹم پر۔',
  },
  {
    id: 'ecat-phy-6',
    mode: 'ECAT',
    subject: 'Physics',
    question: 'A 2 kg ball moving at 5 m/s has a momentum of:',
    options: ['10 kg·m/s', '7 kg·m/s', '2.5 kg·m/s', '25 kg·m/s'],
    correctIndex: 0,
    explanation:
      'Momentum p = mv = (2 kg)(5 m/s) = 10 kg·m/s. It is a vector pointing in the direction of velocity.',
    explanationUrdu:
      'مومنٹم p = mv = (2 kg)(5 m/s) = 10 kg·m/s۔ یہ ولاسٹی کی سمت میں ایک ویکٹر ہے۔',
    memoryTip: 'p = mv — just mass times velocity, keep the units.',
    memoryTipUrdu: 'p = mv — بس ماس کو ولاسٹی سے ضرب دو، اکائیاں یاد رکھو۔',
  },
  {
    id: 'ecat-phy-7',
    mode: 'ECAT',
    subject: 'Physics',
    question: "Lenz's law states that the induced current will flow in a direction that:",
    options: [
      'Opposes the change in flux that produced it',
      'Aids the change in flux',
      'Is always clockwise',
      'Is always anticlockwise',
    ],
    correctIndex: 0,
    explanation:
      "Lenz's law: the induced current's direction opposes the change in magnetic flux that caused it — a consequence of conservation of energy.",
    explanationUrdu:
      'لینز کا قانون: پیدا ہونے والی کرنٹ کی سمت اس فلیکس کی تبدیلی کی مخالف ہوتی ہے جس نے اسے پیدا کیا — یہ توانائی کے بقا کا نتیجہ ہے۔',
    memoryTip: 'Lenz = nature resists change — induced current fights the cause.',
    memoryTipUrdu: 'لینز = فطرت تبدیلی کی مخالف ہے — پیدا ہونے والی کرنٹ وجہ سے لڑتی ہے۔',
  },
  {
    id: 'ecat-phy-8',
    mode: 'ECAT',
    subject: 'Physics',
    question:
      'Total internal reflection occurs when light travels from a denser to a rarer medium and the angle of incidence exceeds the:',
    options: ['Critical angle', 'Angle of refraction', 'Polarizing angle', 'Right angle'],
    correctIndex: 0,
    explanation:
      'Beyond the critical angle, light cannot refract into the rarer medium and is totally reflected back. The critical angle satisfies sin c = n₂/n₁.',
    explanationUrdu:
      'کریٹیکل اینگل سے آگے، روشنی کم کثافت والے میڈیم میں ریفریکٹ نہیں ہو سکتی اور مکمل طور پر ریفلیکٹ ہو جاتی ہے۔ کریٹیکل اینگل sin c = n₂/n₁ سے ملتا ہے۔',
    memoryTip: 'Denser → rarer + angle > critical = light bounces back entirely.',
    memoryTipUrdu: 'زیادہ کثیف → کم کثیف + زاویہ > کریٹیکل = روشنی مکمل واپس چھلانگ لگاتی ہے۔',
  },
  {
    id: 'ecat-phy-9',
    mode: 'ECAT',
    subject: 'Physics',
    question:
      'A Carnot engine operates between a hot reservoir at 400 K and a cold reservoir at 300 K. Its maximum efficiency is:',
    options: ['25%', '75%', '33%', '50%'],
    correctIndex: 0,
    explanation:
      'Carnot efficiency η = 1 − T_c/T_h = 1 − 300/400 = 1 − 0.75 = 0.25 = 25%. Temperatures must be in kelvin.',
    explanationUrdu:
      'کارنوٹ کارکردگی η = 1 − T_c/T_h = 1 − 300/400 = 1 − 0.75 = 0.25 = 25%۔ درجہ حرارت کیلون میں ہونے چاہئیں۔',
    memoryTip: 'η = 1 − (cold/hot) in kelvin — the "one minus the ratio".',
    memoryTipUrdu: 'η = 1 − (سرد/گرم) کیلون میں — "ایک منفس تناسب"۔',
  },
  {
    id: 'ecat-phy-10',
    mode: 'ECAT',
    subject: 'Physics',
    question: 'In the photoelectric effect, the maximum kinetic energy of an emitted electron depends mainly on the:',
    options: [
      'Frequency of the incident light',
      'Intensity of the light',
      'Number of photons only',
      'Angle of incidence',
    ],
    correctIndex: 0,
    explanation:
      'Each photon carries E = hf, so the electron’s kinetic energy depends on the light’s frequency, not its intensity. Intensity only changes the number of ejected electrons.',
    explanationUrdu:
      'ہر فوٹون E = hf توانائی رکھتا ہے، تو الیکٹران کی کائنیٹک توانائی روشنی کی فریکوئنسی پر منحصر ہے، اس کی شدت پر نہیں۔ شدت صرف نکلنے والے الیکٹرانوں کی تعداد بدلتی ہے۔',
    memoryTip: 'E = hf — energy tracks frequency; intensity only affects the count.',
    memoryTipUrdu: 'E = hf — توانائی فریکوئنسی پر منحصر؛ شدت صرف تعداد بدلتی ہے۔',
  },

  // ============ CHEMISTRY (10) ============
  {
    id: 'ecat-chem-1',
    mode: 'ECAT',
    subject: 'Chemistry',
    question: 'How many moles are present in 36 g of water (H₂O, molar mass = 18 g/mol)?',
    options: ['2 mol', '1 mol', '0.5 mol', '18 mol'],
    correctIndex: 0,
    explanation:
      'Moles = mass / molar mass = 36 g / 18 g·mol⁻¹ = 2 mol. Each mole of water contains Avogadro’s number of molecules.',
    explanationUrdu:
      'مولز = ماس / مولر ماس = 36 g / 18 g·mol⁻¹ = 2 mol۔ ہر مول پانی میں ایوگاڈرو کے عدد کے برابر مالیکیولز ہوتے ہیں۔',
    memoryTip: 'Moles = mass ÷ molar mass — just divide.',
    memoryTipUrdu: 'مولز = ماس ÷ مولر ماس — بس تقسیم کر دو۔',
  },
  {
    id: 'ecat-chem-2',
    mode: 'ECAT',
    subject: 'Chemistry',
    question: 'What is the hybridization of the carbon atom in methane (CH₄)?',
    options: ['sp³', 'sp²', 'sp', 'sp³d'],
    correctIndex: 0,
    explanation:
      "Methane's carbon forms four equivalent C–H bonds in a tetrahedral geometry, requiring four hybrid orbitals: sp³ hybridization (bond angle 109.5°).",
    explanationUrdu:
      'میثین کا کاربن چار مساوی C–H بانڈز ٹیٹراہیڈرل جیومیٹری میں بناتا ہے، جس کے لیے چار ہائبرڈ آر بٹلز چاہئیں: sp³ ہائبرڈائزیشن (بانڈ اینگل 109.5°)۔',
    memoryTip: '4 sigma bonds → sp³ (tetrahedral, 109.5°).',
    memoryTipUrdu: '4 سگما بانڈز → sp³ (ٹیٹراہیڈرل، 109.5°)۔',
  },
  {
    id: 'ecat-chem-3',
    mode: 'ECAT',
    subject: 'Chemistry',
    question: 'What is the IUPAC name of CH₃–CH₂–CH₂–OH?',
    options: ['1-Propanol', 'Propan-2-ol', 'Propanal', 'Propanoic acid'],
    correctIndex: 0,
    explanation:
      'The three-carbon chain with an –OH on an end carbon is propan-1-ol (1-propanol). Numbering starts from the OH end to give it the lowest locant.',
    explanationUrdu:
      'تین کاربن کی چین جس کے ایک سرے پر –OH ہو، وہ propan-1-ol (1-propanol) ہے۔ نمبرنگ OH والے سرے سے شروع ہوتی ہے تاکہ سب سے چھوٹا لوکنٹ ملے۔',
    memoryTip: 'OH on carbon-1 of a 3-carbon chain = propan-1-ol.',
    memoryTipUrdu: '3-کاربن چین پر کاربن-1 پر OH = propan-1-ol۔',
  },
  {
    id: 'ecat-chem-4',
    mode: 'ECAT',
    subject: 'Chemistry',
    question:
      'Moving from left to right across a period in the periodic table, the atomic radius generally:',
    options: ['Decreases', 'Increases', 'Stays constant', 'Doubles'],
    correctIndex: 0,
    explanation:
      'Nuclear charge increases across a period while electrons enter the same shell, pulling electrons closer, so atomic radius decreases.',
    explanationUrdu:
      'کسی پیریڈ میں بائیں سے دائیں جاتے ہوئے نیوکلیئر چارج بڑھتا ہے جبکہ الیکٹران اسی شیل میں آتے ہیں، جو الیکٹرانوں کو قریب کھینچتا ہے، لہذا ایٹمی رداس کم ہوتا ہے۔',
    memoryTip: 'More protons, same shell → tighter pull → smaller radius.',
    memoryTipUrdu: 'زیادہ پروٹان، اسی شیل → مضبوط کھینچ → چھوٹا رداس۔',
  },
  {
    id: 'ecat-chem-5',
    mode: 'ECAT',
    subject: 'Chemistry',
    question: 'What is the standard electrode potential of the standard hydrogen electrode (SHE)?',
    options: ['0.00 V', '+1.00 V', '−0.41 V', '+0.34 V'],
    correctIndex: 0,
    explanation:
      'The SHE is the universal reference and is defined to have a potential of exactly 0.00 V under standard conditions (1 M H⁺, 1 atm H₂, 298 K).',
    explanationUrdu:
      'SHE عالمی ریفرنس ہے اور اس کی پوٹینشل معیاری حالات (1 M H⁺، 1 atm H₂، 298 K) میں بالکل 0.00 V طے کی گئی ہے۔',
    memoryTip: 'SHE = 0.00 V — it is the zero all other potentials are measured against.',
    memoryTipUrdu: 'SHE = 0.00 V — یہ وہ صفر ہے جس کے مقابلے میں باقی پوٹینشلز ناپی جاتی ہیں۔',
  },
  {
    id: 'ecat-chem-6',
    mode: 'ECAT',
    subject: 'Chemistry',
    question: 'What is the molar mass of CaCO₃? (Ca = 40, C = 12, O = 16)',
    options: ['100 g/mol', '84 g/mol', '56 g/mol', '68 g/mol'],
    correctIndex: 0,
    explanation: 'Molar mass = 40 (Ca) + 12 (C) + 3×16 (O) = 40 + 12 + 48 = 100 g/mol.',
    explanationUrdu: 'مولر ماس = 40 (Ca) + 12 (C) + 3×16 (O) = 40 + 12 + 48 = 100 g/mol۔',
    memoryTip: '40 + 12 + 48 = 100 — Ca, C, and three oxygens.',
    memoryTipUrdu: '40 + 12 + 48 = 100 — Ca، C، اور تین آکسیجن۔',
  },
  {
    id: 'ecat-chem-7',
    mode: 'ECAT',
    subject: 'Chemistry',
    question: 'Which type of bond is present in sodium chloride (NaCl)?',
    options: ['Ionic bond', 'Covalent bond', 'Metallic bond', 'Hydrogen bond'],
    correctIndex: 0,
    explanation:
      'NaCl is ionic: sodium donates an electron to chlorine, forming Na⁺ and Cl⁻ ions held together by electrostatic attraction.',
    explanationUrdu:
      'NaCl آئونک ہے: سوڈیم کلورین کو الیکٹران دیتا ہے، جس سے Na⁺ اور Cl⁻ آئن بنتے ہیں جو الیکٹروسٹیٹک کشش سے جڑے ہوتے ہیں۔',
    memoryTip: 'Metal + nonmetal (especially group 1 + group 17) = ionic.',
    memoryTipUrdu: 'دھات + غیر دھات (خاص طور پر گروپ 1 + گروپ 17) = آئونک۔',
  },
  {
    id: 'ecat-chem-8',
    mode: 'ECAT',
    subject: 'Chemistry',
    question: 'Which of the following pairs are structural isomers?',
    options: [
      'Ethanol (C₂H₅OH) and dimethyl ether (CH₃OCH₃)',
      'Ethane and ethene',
      'Methane and methanol',
      'Benzene and cyclohexane',
    ],
    correctIndex: 0,
    explanation:
      'Ethanol and dimethyl ether share the molecular formula C₂H₆O but differ in connectivity (–OH vs –O–), making them structural (constitutional) isomers.',
    explanationUrdu:
      'ایتھینول اور ڈائمتھائل ایتھر کا مالیکیولر فارمولا C₂H₆O ایک جیسا ہے مگر کنیکٹیوٹی (–OH بمقابلہ –O–) مختلف ہے، جو انہیں ساختی آئسومر بناتا ہے۔',
    memoryTip: 'Same formula, different connectivity = structural isomers.',
    memoryTipUrdu: 'ایک فارمولا، مختلف کنیکٹیوٹی = ساختی آئسومر۔',
  },
  {
    id: 'ecat-chem-9',
    mode: 'ECAT',
    subject: 'Chemistry',
    question: 'Which element has the highest electronegativity on the Pauling scale?',
    options: ['Fluorine', 'Oxygen', 'Chlorine', 'Nitrogen'],
    correctIndex: 0,
    explanation:
      'Fluorine has the highest electronegativity at 3.98 on the Pauling scale. It sits at the top-right of the periodic table (excluding noble gases).',
    explanationUrdu:
      'فلورین کی سب سے زیادہ الیکٹرونیگیٹیویٹی 3.98 ہے پالینگ سکیل پر۔ یہ پیریڈک ٹیبل کے اوپر-دائیں (نوبل گیسوں کے سوا) پر ہے۔',
    memoryTip: 'Fluorine = top-right (excl. noble gases) = most electronegative.',
    memoryTipUrdu: 'فلورین = اوپر-دائیں (نوبل گیسوں کے سوا) = سب سے زیادہ الیکٹرونیگیٹو۔',
  },
  {
    id: 'ecat-chem-10',
    mode: 'ECAT',
    subject: 'Chemistry',
    question:
      "According to Faraday's first law of electrolysis, the mass of substance deposited is proportional to the:",
    options: [
      'Quantity of charge passed',
      'Resistance of the cell',
      'Concentration of electrolyte only',
      'Temperature of the bath',
    ],
    correctIndex: 0,
    explanation:
      "Faraday's first law: m = ZQ, where Z is the electrochemical equivalent and Q = It is the charge passed. So mass deposited is proportional to the charge passed.",
    explanationUrdu:
      'فیراڈے کا پہلا قانون: m = ZQ، جہاں Z الیکٹرو کیمیکل ایکویولنٹ اور Q = It گزرنے والا چارج ہے۔ لہذا جمے ہوئے ماس، گزرنے والے چارج کے متناسب ہے۔',
    memoryTip: 'More charge → more deposit: m ∝ Q (m = ZIt).',
    memoryTipUrdu: 'زیادہ چارج → زیادہ جمع: m ∝ Q (m = ZIt)۔',
  },

  // ============ ENGLISH (10) ============
  {
    id: 'ecat-eng-1',
    mode: 'ECAT',
    subject: 'English',
    question: "Choose the correct verb form: 'She ___ in Lahore for five years.'",
    options: ['has lived', 'lived', 'is living', 'lives'],
    correctIndex: 0,
    explanation:
      "The present perfect 'has lived' is used for an action that began in the past and continues to the present, often with 'for' or 'since'.",
    explanationUrdu:
      "پریزنٹ پرفیکٹ 'has lived' اس عمل کے لیے استعمال ہوتا ہے جو ماضی میں شروع ہوا اور حال تک جاری ہے، اکثر 'for' یا 'since' کے ساتھ۔",
    memoryTip: "'for/since' + still happening → present perfect (has/have + V3).",
    memoryTipUrdu: "'for/since' + ابھی جاری → پریزنٹ پرفیکٹ (has/have + V3)۔",
  },
  {
    id: 'ecat-eng-2',
    mode: 'ECAT',
    subject: 'English',
    question: "Choose the correct passive form of: 'The mechanic repaired the car.'",
    options: [
      'The car was repaired by the mechanic.',
      'The car is repaired by the mechanic.',
      'The car has repaired the mechanic.',
      'The car repaired.',
    ],
    correctIndex: 0,
    explanation:
      "Simple past active 'repaired' becomes 'was repaired' in the passive. The object 'the car' becomes the subject.",
    explanationUrdu:
      "سادہ ماضی ایکٹو 'repaired' پاسو میں 'was repaired' بن جاتا ہے۔ آبجیکٹ 'the car' سبجیکٹ بن جاتا ہے۔",
    memoryTip: 'Active → passive: object becomes subject, verb → be + V3.',
    memoryTipUrdu: 'ایکٹو → پاسو: آبجیکٹ سبجیکٹ بنتا ہے، ورب → be + V3۔',
  },
  {
    id: 'ecat-eng-3',
    mode: 'ECAT',
    subject: 'English',
    question: "Choose the correct preposition: 'He is good ___ mathematics.'",
    options: ['at', 'in', 'on', 'with'],
    correctIndex: 0,
    explanation:
      "'Good at' is the fixed collocation for skill or ability in a subject or activity. We say 'good at mathematics', not 'good in'.",
    explanationUrdu:
      "'Good at' کسی مہارت یا صلاحیت کے لیے مستقل کولوکیشن ہے۔ ہم 'good at mathematics' کہتے ہیں، 'good in' نہیں۔",
    memoryTip: "Skill → 'good at'; stick with 'at' for abilities.",
    memoryTipUrdu: "مہارت → 'good at'؛ صلاحیتوں کے لیے 'at' استعمال کرو۔",
  },
  {
    id: 'ecat-eng-4',
    mode: 'ECAT',
    subject: 'English',
    question: "Choose the word most nearly the SAME in meaning as 'BENEVOLENT':",
    options: ['Kind', 'Cruel', 'Selfish', 'Hostile'],
    correctIndex: 0,
    explanation:
      "'Benevolent' means kind, generous, and well-meaning. The prefix 'bene-' means good (as in benefit), the opposite of malevolent.",
    explanationUrdu:
      "'Benevolent' کا مطلب ہے مہربان، سخاوت کرنے والا، نیک نیتی۔ 'bene-' کا مطلب اچھا ہے (جیسے benefit میں)، malevolent کے الٹ۔",
    memoryTip: "'bene-' = good → benevolent = kind; 'male-' = bad.",
    memoryTipUrdu: "'bene-' = اچھا → benevolent = مہربان؛ 'male-' = برا۔",
  },
  {
    id: 'ecat-eng-5',
    mode: 'ECAT',
    subject: 'English',
    question: "Choose the word most nearly OPPOSITE in meaning to 'TRANSPARENT':",
    options: ['Opaque', 'Clear', 'Visible', 'Bright'],
    correctIndex: 0,
    explanation:
      "'Transparent' allows light to pass through so objects behind are clearly seen; 'opaque' blocks light completely, so nothing is seen through it.",
    explanationUrdu:
      "'Transparent' روشنی کو گزرنے دیتا ہے تو پیچھے کی چیزیں صاف نظر آتی ہیں؛ 'opaque' روشنی کو مکمل روکتا ہے، تو کچھ نظر نہیں آتا۔",
    memoryTip: 'Transparent = see-through; opaque = blocks light.',
    memoryTipUrdu: 'Transparent = دیکھنے کے قابل؛ opaque = روشنی روکتا ہے۔',
  },
  {
    id: 'ecat-eng-6',
    mode: 'ECAT',
    subject: 'English',
    question: 'Identify the error-free sentence:',
    options: [
      'Neither of the boys was present.',
      'Neither of the boys were present.',
      'Neither of the boy was present.',
      'Neither of the boys are present.',
    ],
    correctIndex: 0,
    explanation:
      "'Neither of' takes a singular verb, so 'was' is correct. Also, the noun after 'neither of' must be plural ('boys').",
    explanationUrdu:
      "'Neither of' کے ساتھ واحد ورب آتا ہے، تو 'was' صحیح ہے۔ نیز 'neither of' کے بعد noun جمع ('boys') ہونا چاہیے۔",
    memoryTip: "'Neither/either of + plural noun' → singular verb.",
    memoryTipUrdu: "'Neither/either of + جمع noun' → واحد ورب۔",
  },
  {
    id: 'ecat-eng-7',
    mode: 'ECAT',
    subject: 'English',
    question: "Choose the correct verb form: 'By the time we arrived, the train ___.'",
    options: ['had left', 'left', 'has left', 'leaves'],
    correctIndex: 0,
    explanation:
      "The past perfect 'had left' describes an action completed before another past action ('arrived'). It shows the earlier of two past events.",
    explanationUrdu:
      "پاست پرفیکٹ 'had left' اس عمل کو بیان کرتا ہے جو کسی دوسرے ماضی کے عمل ('arrived') سے پہلے مکمل ہو چکا تھا۔ یہ دو ماضی واقعات میں پہلے والا ظاہر کرتا ہے۔",
    memoryTip: 'Past before past → had + V3 (past perfect).',
    memoryTipUrdu: 'ماضی سے پہلے ماضی → had + V3 (پاست پرفیکٹ)۔',
  },
  {
    id: 'ecat-eng-8',
    mode: 'ECAT',
    subject: 'English',
    question: "Choose the correct passive form of: 'They speak English all over the world.'",
    options: [
      'English is spoken all over the world.',
      'English was spoken all over the world.',
      'English is speaking all over the world.',
      'English has spoken all over the world.',
    ],
    correctIndex: 0,
    explanation:
      "Simple present 'speak' becomes 'is spoken' in the passive. The object 'English' becomes the subject; 'by them' is optional and often omitted.",
    explanationUrdu:
      "سادہ حال 'speak' پاسو میں 'is spoken' بن جاتا ہے۔ آبجیکٹ 'English' سبجیکٹ بن جاتا ہے؛ 'by them' اختیاری ہے اور اکثر چھوڑ دیا جاتا ہے۔",
    memoryTip: 'Simple present passive → is/am/are + V3.',
    memoryTipUrdu: 'سادہ حال پاسو → is/am/are + V3۔',
  },
  {
    id: 'ecat-eng-9',
    mode: 'ECAT',
    subject: 'English',
    question: "Choose the correct preposition: 'I have been waiting ___ 9 o’clock.'",
    options: ['since', 'for', 'from', 'at'],
    correctIndex: 0,
    explanation:
      "Use 'since' with a point in time (9 o’clock, Monday, 2010) and 'for' with a duration (two hours, five years). Here 9 o’clock is a point, so 'since'.",
    explanationUrdu:
      "وقت کے نقطے (9 o’clock، Monday، 2010) کے ساتھ 'since' استعمال کرو اور مدت (two hours، five years) کے ساتھ 'for'۔ یہاں 9 o’clock ایک نقطہ ہے، تو 'since'۔",
    memoryTip: 'Point in time → since; duration → for.',
    memoryTipUrdu: 'وقت کا نقطہ → since؛ مدت → for۔',
  },
  {
    id: 'ecat-eng-10',
    mode: 'ECAT',
    subject: 'English',
    question: "Choose the word most nearly OPPOSITE in meaning to 'ABUNDANT':",
    options: ['Scarce', 'Plentiful', 'Ample', 'Numerous'],
    correctIndex: 0,
    explanation:
      "'Abundant' means existing in large quantities; the opposite is 'scarce', meaning in short supply. Plentiful, ample, and numerous are all synonyms.",
    explanationUrdu:
      "'Abundant' کا مطلب ہے کثرت سے موجود؛ اس کا الٹ 'scarce' ہے، یعنی کمی سے۔ Plentiful، ample اور numerous سب اس کے مترادف ہیں۔",
    memoryTip: 'Abundant = lots; scarce = hard to find.',
    memoryTipUrdu: 'Abundant = کثرت؛ scarce = ڈھونڈنا مشکل۔',
  },

  // ============ LOGICAL REASONING (10) ============
  {
    id: 'ecat-lr-1',
    mode: 'ECAT',
    subject: 'Logical Reasoning',
    question: 'Find the next number in the series: 2, 6, 12, 20, 30, ?',
    options: ['42', '40', '44', '36'],
    correctIndex: 0,
    explanation:
      'The differences are 4, 6, 8, 10, increasing by 2 each time. The next difference is 12, so 30 + 12 = 42. Equivalently, the nth term is n(n+1).',
    explanationUrdu:
      'فرق 4، 6، 8، 10 ہیں، ہر بار 2 بڑھتے ہیں۔ اگلا فرق 12 ہے، تو 30 + 12 = 42۔ یا nواں عدد n(n+1) ہے۔',
    memoryTip: 'Gaps 4, 6, 8, 10, 12 — even numbers climbing → 42.',
    memoryTipUrdu: 'فرق 4، 6، 8، 10، 12 — جفت عدد چڑھتے ہوئے → 42۔',
  },
  {
    id: 'ecat-lr-2',
    mode: 'ECAT',
    subject: 'Logical Reasoning',
    question: 'Book is to Author as Painting is to ___?',
    options: ['Painter', 'Canvas', 'Gallery', 'Brush'],
    correctIndex: 0,
    explanation:
      'The relationship is creator-to-creation. An author creates a book; a painter creates a painting.',
    explanationUrdu:
      'رشتہ پیدا کرنے والے سے پیدا کردہ ہے۔ مصنف کتاب بناتا ہے؛ پینٹر پینٹنگ بناتا ہے۔',
    memoryTip: 'Creator → creation: author/book, painter/painting.',
    memoryTipUrdu: 'پیدا کرنے والا → پیدا کردہ: author/book، painter/painting۔',
  },
  {
    id: 'ecat-lr-3',
    mode: 'ECAT',
    subject: 'Logical Reasoning',
    question: "If 'CAT' is coded as 'DBU', how is 'DOG' coded?",
    options: ['EPH', 'DPH', 'EPG', 'EOH'],
    correctIndex: 0,
    explanation:
      'Each letter is shifted forward by one: C→D, A→B, T→U. Applying the same rule to DOG: D→E, O→P, G→H, giving EPH.',
    explanationUrdu:
      'ہر حرف کو ایک آگے شفٹ کرو: C→D، A→B، T→U۔ اسی رول سے DOG پر: D→E، O→P، G→H، جو EPH دیتا ہے۔',
    memoryTip: '+1 shift each letter: next letter in the alphabet.',
    memoryTipUrdu: 'ہر حرف +1 شفٹ: حرفِ تہجی میں اگلا حرف۔',
  },
  {
    id: 'ecat-lr-4',
    mode: 'ECAT',
    subject: 'Logical Reasoning',
    question:
      "Pointing to a man, Priya said, 'He is the son of my grandfather's only son.' How is the man related to Priya?",
    options: ['Brother', 'Father', 'Uncle', 'Cousin'],
    correctIndex: 0,
    explanation:
      "Grandfather's only son is Priya's father. The son of Priya's father is Priya's brother (the word 'man' confirms brother rather than Priya herself).",
    explanationUrdu:
      "دادا کا اکلوتا بیٹا پریا کا والد ہے۔ پریا کے والد کا بیٹا پریا کا بھائی ہے ('man' سے بھائی تصدیق ہوتی ہے)۔",
    memoryTip: "Grandfather's only son = father; father's son = brother.",
    memoryTipUrdu: 'دادا کا اکلوتا بیٹا = والد؛ والد کا بیٹا = بھائی۔',
  },
  {
    id: 'ecat-lr-5',
    mode: 'ECAT',
    subject: 'Logical Reasoning',
    question: 'A man walks 3 km north, then turns right and walks 4 km. How far is he from the start?',
    options: ['5 km', '7 km', '1 km', '12 km'],
    correctIndex: 0,
    explanation:
      'The two legs form a right triangle with sides 3 and 4. Distance from start = √(3² + 4²) = √25 = 5 km (a 3-4-5 triangle).',
    explanationUrdu:
      'دونوں قدم 3 اور 4 کے قائمہ تکونے بناتے ہیں۔ شروع سے فاصلہ = √(3² + 4²) = √25 = 5 km (3-4-5 تکونا)۔',
    memoryTip: '3-4-5 right triangle → resultant is 5.',
    memoryTipUrdu: '3-4-5 قائمہ تکونا → نتیجہ 5۔',
  },
  {
    id: 'ecat-lr-6',
    mode: 'ECAT',
    subject: 'Logical Reasoning',
    question: 'Find the next term in the series: A, C, E, G, ?',
    options: ['I', 'H', 'J', 'K'],
    correctIndex: 0,
    explanation:
      'The series skips one letter each time: A (+2)→C (+2)→E (+2)→G (+2)→I. These are consecutive odd-position letters of the alphabet.',
    explanationUrdu:
      'سیریز ہر بار ایک حرف چھوڑتی ہے: A (+2)→C (+2)→E (+2)→G (+2)→I۔ یہ حرفِ تہجی کے مسلسل طاق پوزیشن کے حروف ہیں۔',
    memoryTip: '+2 in alphabet: A, C, E, G, I…',
    memoryTipUrdu: 'حرفِ تہجی میں +2: A، C، E، G، I…',
  },
  {
    id: 'ecat-lr-7',
    mode: 'ECAT',
    subject: 'Logical Reasoning',
    question: 'Thermometer is to Temperature as Barometer is to ___?',
    options: ['Pressure', 'Humidity', 'Wind', 'Rainfall'],
    correctIndex: 0,
    explanation:
      'A thermometer measures temperature; a barometer measures atmospheric pressure. The relation is instrument-to-what-it-measures.',
    explanationUrdu:
      'تھرمامیٹر درجہ حرارت ناپتا ہے؛ بارومیٹر atm دباؤ ناپتا ہے۔ رشتہ آلے سے جو وہ ناپتا ہے۔',
    memoryTip: 'Barometer → bar (pressure); thermometer → thermo (heat/temperature).',
    memoryTipUrdu: 'Barometer → bar (دباؤ)؛ thermometer → thermo (حرارت)۔',
  },
  {
    id: 'ecat-lr-8',
    mode: 'ECAT',
    subject: 'Logical Reasoning',
    question: "If 'DELHI' is coded as 'CDKGH', how is 'PARIS' coded?",
    options: ['OZQHR', 'OZQGR', 'OZPHR', 'OZQHG'],
    correctIndex: 0,
    explanation:
      'Each letter is shifted back by one: D→C, E→D, L→K, H→G, I→H. Applying to PARIS: P→O, A→Z, R→Q, I→H, S→R, giving OZQHR.',
    explanationUrdu:
      'ہر حرف ایک پیچھے شفٹ ہوتا ہے: D→C، E→D، L→K، H→G، I→H۔ PARIS پر: P→O، A→Z، R→Q، I→H، S→R، جو OZQHR دیتا ہے۔',
    memoryTip: '−1 shift each letter (previous letter in the alphabet).',
    memoryTipUrdu: 'ہر حرف −1 شفٹ (حرفِ تہجی میں پچھلا حرف)۔',
  },
  {
    id: 'ecat-lr-9',
    mode: 'ECAT',
    subject: 'Logical Reasoning',
    question:
      "Introducing Sana, Ali said, 'She is the wife of my mother's only son.' Who is Sana to Ali?",
    options: ['Wife', 'Sister', 'Daughter', 'Mother'],
    correctIndex: 0,
    explanation:
      "Ali's mother's only son is Ali himself. The wife of Ali is his wife. So Sana is Ali's wife.",
    explanationUrdu:
      'علی کی والدہ کا اکلوتا بیٹا علی خود ہے۔ علی کی بیوی اس کی بیوی ہے۔ تو سنا علی کی بیوی ہے۔',
    memoryTip: "'my mother's only son' = me (the speaker).",
    memoryTipUrdu: "'میری والدہ کا اکلوتا بیٹا' = میں خود۔",
  },
  {
    id: 'ecat-lr-10',
    mode: 'ECAT',
    subject: 'Logical Reasoning',
    question:
      'Facing north, Ravi turns 90° clockwise, then 180°, then 90° anti-clockwise. Which direction is he now facing?',
    options: ['South', 'North', 'East', 'West'],
    correctIndex: 0,
    explanation:
      'Start facing north. 90° clockwise → east. 180° turn → west. 90° anti-clockwise → south. Net rotation: +90 +180 −90 = +180° clockwise from north = south.',
    explanationUrdu:
      'شمال کی طرف منہ کر کے: 90° گھڑی وار → مشرق۔ 180° → مغرب۔ 90° ضد گھڑی وار → جنوب۔ خالص گھوماآ: 90+180−90 = 180° گھڑی وار = جنوب۔',
    memoryTip: 'Net = +90 +180 −90 = +180° from north = south.',
    memoryTipUrdu: 'خالص = +90 +180 −90 = +180° شمال سے = جنوب۔',
  },
];
