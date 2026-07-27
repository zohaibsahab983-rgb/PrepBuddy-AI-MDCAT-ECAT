import type { QuizQuestion } from '@/types';

export const MDCAT_QUESTIONS: QuizQuestion[] = [
  // ===== Biology =====
  {
    id: 'mdcat-bio-1',
    mode: 'MDCAT',
    subject: 'Biology',
    question: 'Which organelle is known as the "powerhouse of the cell"?',
    options: ['Ribosome', 'Mitochondrion', 'Golgi apparatus', 'Lysosome'],
    correctIndex: 1,
    explanation:
      'The mitochondrion produces ATP through cellular respiration, earning it the name "powerhouse of the cell." It has its own DNA and a double membrane.',
    explanationUrdu:
      'مائٹوکونڈریا سیلولر ریسپئریشن کے ذریعے ATP بناتا ہے، اسی لیے اسے "خلیے کا پاور ہاؤس" کہتے ہیں۔ اس کا اپنا DNA اور دہری جھلی ہوتی ہے۔',
    memoryTip: 'Mitochondrion = "mighty" — it makes the energy (ATP).',
    memoryTipUrdu: 'مائٹوکونڈریا = "طاقتور" — یہی توانائی (ATP) بناتا ہے۔',
  },
  {
    id: 'mdcat-bio-2',
    mode: 'MDCAT',
    subject: 'Biology',
    question: 'How many chromosomes are present in a normal human somatic (body) cell?',
    options: ['23', '46', '48', '44'],
    correctIndex: 1,
    explanation:
      'Human somatic cells are diploid with 46 chromosomes arranged in 23 homologous pairs — one set inherited from each parent. Gametes are haploid with 23.',
    explanationUrdu:
      'انسان کے جسمانی خلیے ڈائپلائڈ ہوتے ہیں جن میں 46 کروموسوم 23 ہومولوگس جوڑوں میں ہوتے ہیں — ایک سیٹ ہر والدین سے آتا ہے۔ گیمیٹس ہیپلائڈ 23 کروموسوم رکھتے ہیں۔',
    memoryTip: '23 pairs = 46 total — half from mother, half from father.',
    memoryTipUrdu: '23 جوڑے = 46 کل — آدھا ماں سے، آدھا باپ سے۔',
  },
  {
    id: 'mdcat-bio-3',
    mode: 'MDCAT',
    subject: 'Biology',
    question: 'In which organelle does photosynthesis occur in plant cells?',
    options: ['Mitochondrion', 'Chloroplast', 'Nucleus', 'Endoplasmic reticulum'],
    correctIndex: 1,
    explanation:
      'Photosynthesis takes place in the chloroplast, which contains the green pigment chlorophyll that captures light energy to convert CO₂ and water into glucose.',
    explanationUrdu:
      'فوٹوسنتھیسس کلوروپلاسٹ میں ہوتا ہے، جس میں سبز کلوروفل ہوتا ہے جو روشنی کی توانائی قبض کرتا ہے اور CO₂ اور پانی کو گلوکوز میں بدلتا ہے۔',
    memoryTip: 'Chloro = green; chloroplast makes food in plants.',
    memoryTipUrdu: 'کلورو = سبز؛ کلوروپلاسٹ پودوں میں خوراک بناتا ہے۔',
  },
  {
    id: 'mdcat-bio-4',
    mode: 'MDCAT',
    subject: 'Biology',
    question: 'Which blood group is known as the "universal donor"?',
    options: ['A', 'B', 'AB', 'O'],
    correctIndex: 3,
    explanation:
      'Type O negative blood lacks A and B antigens and the Rh factor, so it can be donated to any blood type without triggering an immune reaction, making O− the universal donor.',
    explanationUrdu:
      'O نیگیٹو بلڈ گروپ میں A اور B اینٹی جینز اور Rh فیکٹر نہیں ہوتے، اس لیے اسے کسی بھی بلڈ گروپ کو دیا جا سکتا ہے بغیر امیون ردعمل کے، یہی وجہ O− یونیورسل ڈونر ہے۔',
    memoryTip: 'O = "zero antigens" = universal donor. AB+ = universal recipient.',
    memoryTipUrdu: 'O = "صفر اینٹی جینز" = یونیورسل ڈونر۔ AB+ = یونیورسل رسیپینٹ۔',
  },
  {
    id: 'mdcat-bio-5',
    mode: 'MDCAT',
    subject: 'Biology',
    question: 'Which type of cell division produces gametes (sperm and egg cells)?',
    options: ['Mitosis', 'Meiosis', 'Binary fission', 'Budding'],
    correctIndex: 1,
    explanation:
      'Meiosis is a reductional division that produces four haploid gametes from one diploid cell, halving the chromosome number and creating genetic variation through crossing over.',
    explanationUrdu:
      'مائیوسس ایک ریڈکشنل ڈویژن ہے جو ایک ڈائپلائڈ خلیے سے چار ہیپلائڈ گیمیٹس بناتا ہے، کروموسومز کی تعداد آدھی کر دیتا ہے اور کراسنگ اوور سے جینیاتی تنوع پیدا کرتا ہے۔',
    memoryTip: 'Meiosis = "Make gametes & reduce" — halves the chromosomes.',
    memoryTipUrdu: 'مائیوسس = "گیمیٹس بناؤ اور آدھا کرو" — کروموسومز آدھے کرتا ہے۔',
  },
  {
    id: 'mdcat-bio-6',
    mode: 'MDCAT',
    subject: 'Biology',
    question: 'In DNA, adenine (A) always pairs with which nitrogenous base?',
    options: ['Guanine', 'Cytosine', 'Thymine', 'Uracil'],
    correctIndex: 2,
    explanation:
      'In DNA, adenine forms two hydrogen bonds with thymine (A–T pair). In RNA, uracil replaces thymine, so adenine pairs with uracil instead. Guanine always pairs with cytosine via three hydrogen bonds.',
    explanationUrdu:
      'DNA میں ایڈینین تھائمین کے ساتھ دو ہائیڈروجن بانڈ بناتا ہے (A–T جوڑا)۔ RNA میں یوریسل تھائمین کی جگہ لیتا ہے، اس لیے ایڈینین یوریسل کے ساتھ جوڑا بناتا ہے۔ گوانین ہمیشہ سائٹوسین کے ساتھ تین ہائیڈروجن بانڈ بناتا ہے۔',
    memoryTip: 'A–T (2 bonds), C–G (3 bonds). In RNA, U replaces T.',
    memoryTipUrdu: 'A–T (2 بانڈ)، C–G (3 بانڈ)۔ RNA میں U، T کی جگہ لیتا ہے۔',
  },
  {
    id: 'mdcat-bio-7',
    mode: 'MDCAT',
    subject: 'Biology',
    question: 'How many chambers does the human heart have?',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation:
      'The human heart has four chambers: two atria (upper, receiving chambers) and two ventricles (lower, pumping chambers). This separation keeps oxygenated and deoxygenated blood from mixing.',
    explanationUrdu:
      'انسانی دل میں چار کیمر ہوتے ہیں: دو اٹریا (اوپر، قبول کرنے والے) اور دو وینٹریکلز (نیچے، پمپ کرنے والے)۔ یہ علیحدگی آکسیجن والے اور آکسیجن کے بغیر خون کو ملنے سے روکتی ہے۔',
    memoryTip: '4 chambers = 2 atria (top) + 2 ventricles (bottom).',
    memoryTipUrdu: '4 کیمر = 2 اٹریا (اوپر) + 2 وینٹریکلز (نیچے)۔',
  },
  {
    id: 'mdcat-bio-8',
    mode: 'MDCAT',
    subject: 'Biology',
    question: 'The basic structural and functional unit of the kidney is the:',
    options: ['Neuron', 'Nephron', 'Alveolus', 'Glomerulus'],
    correctIndex: 1,
    explanation:
      'The nephron is the structural and functional unit of the kidney. Each kidney contains about a million nephrons that filter blood and form urine through filtration, reabsorption, and secretion.',
    explanationUrdu:
      'نیفران گردے کا ساختی اور فعلی اکائی ہے۔ ہر گردے میں تقریباً دس لاکھ نیفران ہوتے ہیں جو خون کو فلٹر کرتے ہیں اور فلٹریشن، ری ایبسورپشن اور سیکریشن کے ذریعے پیشاب بناتے ہیں۔',
    memoryTip: 'Nephron (kidney) vs Neuron (nerve) — both start with N, different organs.',
    memoryTipUrdu: 'نیفران (گردہ) اور نیوران (نس) — دونوں N سے، مگر مختلف اعضاء۔',
  },
  {
    id: 'mdcat-bio-9',
    mode: 'MDCAT',
    subject: 'Biology',
    question: 'In a food chain, organisms that make their own food are called:',
    options: ['Decomposers', 'Producers', 'Consumers', 'Predators'],
    correctIndex: 1,
    explanation:
      'Producers (autotrophs) like green plants convert sunlight into chemical energy via photosynthesis, forming the base of every food chain and supporting all higher trophic levels.',
    explanationUrdu:
      'پروڈیوسرز (آٹوٹروف) جیسے سبز پودے فوٹوسنتھیسس سے روشنی کو کیمیکل توانائی میں بدلتے ہیں، ہر فوڈ چین کی بنیاد بناتے ہیں اور تمام اعلیٰ ٹرافک لیولز کو سہارا دیتے ہیں۔',
    memoryTip: 'Producers produce their own food — plants are nature\'s "chefs."',
    memoryTipUrdu: 'پروڈیوسرز خود اپنی خوراک بناتے ہیں — پودے قدرت کے "شف" ہیں۔',
  },
  {
    id: 'mdcat-bio-10',
    mode: 'MDCAT',
    subject: 'Biology',
    question: 'According to the "lock and key" model, enzymes are specific because:',
    options: [
      'They are always proteins',
      'Their active site fits only a specific substrate',
      'They work only at high temperature',
      'They are reusable and fast',
    ],
    correctIndex: 1,
    explanation:
      'The lock-and-key model states that an enzyme\'s active site has a rigid, fixed shape that only the matching substrate can fit, like a key in a specific lock. This explains enzyme specificity.',
    explanationUrdu:
      'لاک اینڈ کی ماڈل کے مطابق انزائم کی ایکٹو سائٹ کی شکل فکسڈ ہوتی ہے جس میں صرف میچنگ سبسٹریٹ فٹ ہو سکتا ہے، جیسے مخصوص تالے میں چابی۔ یہ انزائم کی مخصوصیت وضاحت کرتا ہے۔',
    memoryTip: 'Enzyme = lock, substrate = key — one key fits one lock.',
    memoryTipUrdu: 'انزائم = تالا، سبسٹریٹ = چابی — ایک چابی ایک تالے میں فٹ۔',
  },

  // ===== Chemistry =====
  {
    id: 'mdcat-chem-1',
    mode: 'MDCAT',
    subject: 'Chemistry',
    question: "What is the value of Avogadro's number?",
    options: ['6.022 × 10²³', '3.0 × 10⁸', '1.6 × 10⁻¹⁹', '9.8 × 10⁰'],
    correctIndex: 0,
    explanation:
      "Avogadro's number is 6.022 × 10²³ — the number of particles (atoms, molecules, or ions) in exactly one mole of any substance. It links the atomic scale to measurable masses.",
    explanationUrdu:
      'ایوگاڈرو نمبر 6.022 × 10²³ ہے — یعنی بالکل ایک مول میں پارٹیکلز (ایٹمز، مالیکیولز، یا آئنز) کی تعداد۔ یہ ایٹمی پیمانے کو ناپنے قابل کمیت سے جوڑتا ہے۔',
    memoryTip: '"6.02 with a 23" — the mole\'s magic number.',
    memoryTipUrdu: '"6.02 کے ساتھ 23" — مول کا جادوئی نمبر۔',
  },
  {
    id: 'mdcat-chem-2',
    mode: 'MDCAT',
    subject: 'Chemistry',
    question: 'What is the molar mass of water (H₂O)? (H = 1, O = 16)',
    options: ['16 g/mol', '17 g/mol', '18 g/mol', '20 g/mol'],
    correctIndex: 2,
    explanation:
      'Water (H₂O) = 2(1) + 16 = 18 g/mol. Each molecule has two hydrogen atoms and one oxygen atom, so the total molar mass is 18 grams per mole.',
    explanationUrdu:
      'پانی (H₂O) = 2(1) + 16 = 18 g/mol۔ ہر مالیکیول میں دو ہائیڈروجن ایٹمز اور ایک آکسیجن ایٹم ہوتے ہیں، اس لیے کل مولر ماس 18 گرام فی مول ہے۔',
    memoryTip: 'H₂O = 1 + 1 + 16 = 18 — two H plus one O.',
    memoryTipUrdu: 'H₂O = 1 + 1 + 16 = 18 — دو H اور ایک O۔',
  },
  {
    id: 'mdcat-chem-3',
    mode: 'MDCAT',
    subject: 'Chemistry',
    question: 'Which type of bond is formed by the complete transfer of electrons from one atom to another?',
    options: ['Covalent bond', 'Ionic bond', 'Hydrogen bond', 'Metallic bond'],
    correctIndex: 1,
    explanation:
      'An ionic bond forms when one atom donates electrons and another accepts them, creating oppositely charged ions held together by strong electrostatic attraction (e.g., NaCl).',
    explanationUrdu:
      'آئنک بانڈ اس وقت بنتا ہے جب ایک ایٹم الیکٹران دے اور دوسرا لے، مخالف چارج والے آئنز مضبوط الیکٹروسٹیٹک کشش سے جڑ جاتے ہیں (مثلاً NaCl)۔',
    memoryTip: 'Ionic = "I give, you take" — full transfer makes ions.',
    memoryTipUrdu: 'آئنک = "میں دیتا، تو لیتا" — مکمل منتقلی آئن بناتی ہے۔',
  },
  {
    id: 'mdcat-chem-4',
    mode: 'MDCAT',
    subject: 'Chemistry',
    question: 'Which group of the periodic table contains the most reactive metals?',
    options: [
      'Group 1 (Alkali metals)',
      'Group 2 (Alkaline earth metals)',
      'Group 17 (Halogens)',
      'Group 18 (Noble gases)',
    ],
    correctIndex: 0,
    explanation:
      'Group 1 alkali metals (Li, Na, K...) are the most reactive metals because they readily lose their single valence electron to achieve a stable noble-gas configuration.',
    explanationUrdu:
      'گروپ 1 الکلی میٹلز (Li, Na, K...) سب سے زیادہ ری ایکٹو میٹلز ہیں کیونکہ وہ اپنا واحد ویلینس الیکٹران آسانی سے دے کر اسٹیبل نوبل گیس کنفیگریشن حاصل کرتے ہیں۔',
    memoryTip: 'Group 1 = 1 electron to lose = very eager to react.',
    memoryTipUrdu: 'گروپ 1 = 1 الیکٹران دینا = ردعمل کرنے کو بے تاب۔',
  },
  {
    id: 'mdcat-chem-5',
    mode: 'MDCAT',
    subject: 'Chemistry',
    question: 'What is the pH of a neutral solution at 25°C?',
    options: ['0', '7', '14', '1'],
    correctIndex: 1,
    explanation:
      'At 25°C, a neutral solution has pH 7, where [H⁺] = [OH⁻] = 10⁻⁷ M. Below 7 is acidic, above 7 is basic. Pure water is the classic neutral solution.',
    explanationUrdu:
      '25°C پر نیوٹرل سلوشن کا pH 7 ہوتا ہے، جہاں [H⁺] = [OH⁻] = 10⁻⁷ M۔ 7 سے نیچے تیزاب، اوپر کاسٹک۔ خالص پانی کلاسک نیوٹرل سلوشن ہے۔',
    memoryTip: 'pH 7 = neutral; <7 acid, >7 base. 7 is the middle.',
    memoryTipUrdu: 'pH 7 = نیوٹرل؛ 7 سے کم تیزاب، زیادہ کاسٹک۔ 7 درمیان ہے۔',
  },
  {
    id: 'mdcat-chem-6',
    mode: 'MDCAT',
    subject: 'Chemistry',
    question: 'The empirical formula of glucose (C₆H₁₂O₆) is:',
    options: ['CHO', 'CH₂O', 'C₂H₄O₂', 'C₆H₁₂O₆'],
    correctIndex: 1,
    explanation:
      'The empirical formula is the simplest whole-number ratio of atoms. For C₆H₁₂O₆, divide each subscript by the greatest common divisor (6) to get CH₂O.',
    explanationUrdu:
      'ایمپیریکل فارمولا ایٹمز کا سب سے سادہ پورا نمبر تناسب ہے۔ C₆H₁₂O₆ کے ہر سب سکرپٹ کو سب سے بڑے عام مقسوم (6) سے تقسیم کرنے پر CH₂O ملتا ہے۔',
    memoryTip: 'Empirical = simplest ratio — divide all subscripts by their GCD.',
    memoryTipUrdu: 'ایمپیریکل = سب سے سادہ تناسب — تمام سب سکرپٹس کو GCD سے تقسیم کرو۔',
  },
  {
    id: 'mdcat-chem-7',
    mode: 'MDCAT',
    subject: 'Chemistry',
    question: 'Which functional group is present in ethanol (C₂H₅OH)?',
    options: ['Aldehyde (–CHO)', 'Hydroxyl (–OH)', 'Carboxyl (–COOH)', 'Amine (–NH₂)'],
    correctIndex: 1,
    explanation:
      'Ethanol contains a hydroxyl group (–OH) bonded to a carbon chain, which is the defining functional group of alcohols. Methanol, propanol, and phenol all share this –OH group.',
    explanationUrdu:
      'ایتھنول میں ہائیڈروکسائل گروپ (–OH) کاربن چین سے جڑا ہوتا ہے، جو الکحل کا تعریفی فنکشنل گروپ ہے۔ میتھانول، پروپانول اور فینول سب اس –OH گروپ میں شریک ہیں۔',
    memoryTip: 'Alcohol = "–OH" — see "OH" and think alcohol.',
    memoryTipUrdu: 'الکحل = "–OH" — "OH" دیکھو تو الکحل سمجھو۔',
  },
  {
    id: 'mdcat-chem-8',
    mode: 'MDCAT',
    subject: 'Chemistry',
    question: 'Across a period (left to right) and down a group, electronegativity generally:',
    options: [
      'Decreases left to right, increases down a group',
      'Increases left to right, decreases down a group',
      'Increases in both directions',
      'Decreases in both directions',
    ],
    correctIndex: 1,
    explanation:
      'Electronegativity increases across a period because atoms get smaller and pull electrons harder, and decreases down a group because valence electrons are farther from the nucleus. Fluorine is the most electronegative element.',
    explanationUrdu:
      'الیکٹرونیگیٹیویٹی پیریڈ میں بڑھتی ہے کیونکہ ایٹمز چھوٹے ہو کر الیکٹران مضبوط کھینچتے ہیں، اور گروپ میں کم ہوتی ہے کیونکہ ویلینس الیکٹران نیوکلیس سے دور ہوتے ہیں۔ فلورین سب سے زیادہ الیکٹرونیگیٹو عنصر ہے۔',
    memoryTip: 'Electronegativity climbs toward the top-right — fluorine is the champion.',
    memoryTipUrdu: 'الیکٹرونیگیٹیویٹی اوپر دائیں بڑھتی ہے — فلورین چیمپئن ہے۔',
  },
  {
    id: 'mdcat-chem-9',
    mode: 'MDCAT',
    subject: 'Chemistry',
    question: 'In a redox reaction, the substance that loses electrons is said to be:',
    options: ['Reduced', 'Oxidized', 'A catalyst', 'A spectator ion'],
    correctIndex: 1,
    explanation:
      'Oxidation is the loss of electrons (OIL). The substance that loses electrons is oxidized, while the substance that gains electrons is reduced (RIG). Oxidation and reduction always occur together.',
    explanationUrdu:
      'آکسیڈیشن الیکٹرانز کا نقصان ہے (OIL)۔ جو شے الیکٹران دیتی ہے وہ آکسیڈائز ہوتی ہے، جو لیتی ہے وہ ریڈیوس ہوتی ہے (RIG)۔ آکسیڈیشن اور ریڈکشن ہمیشہ ساتھ ہوتے ہیں۔',
    memoryTip: 'OIL RIG — Oxidation Is Loss, Reduction Is Gain.',
    memoryTipUrdu: 'OIL RIG — آکسیڈیشن نقصان، ریڈکشن حاصل۔',
  },
  {
    id: 'mdcat-chem-10',
    mode: 'MDCAT',
    subject: 'Chemistry',
    question: 'What is the hybridization of the carbon atom in methane (CH₄)?',
    options: ['sp', 'sp²', 'sp³', 'sp³d'],
    correctIndex: 2,
    explanation:
      'In methane, carbon forms four equivalent sigma bonds with hydrogen in a tetrahedral geometry (109.5° bond angles), requiring sp³ hybridization of its one s and three p valence orbitals.',
    explanationUrdu:
      'میتھین میں کاربن ہائیڈروجن کے ساتھ چار مساوی سیگما بانڈ ٹیٹراہیڈرل جیومیٹری (109.5° بانڈ اینگلز) میں بناتا ہے، جس کے لیے اس کے ایک s اور تین p ویلینس آربیٹلز کا sp³ ہائبریڈائزیشن ضروری ہے۔',
    memoryTip: '4 sigma bonds → sp³; 3 → sp²; 2 → sp. Count the bonds!',
    memoryTipUrdu: '4 سیگما بانڈ → sp³؛ 3 → sp²؛ 2 → sp۔ بانڈ گنو!',
  },

  // ===== Physics =====
  {
    id: 'mdcat-phy-1',
    mode: 'MDCAT',
    subject: 'Physics',
    question: "Newton's second law of motion is mathematically expressed as:",
    options: ['F = mv', 'F = ma', 'F = m/a', 'F = a/m'],
    correctIndex: 1,
    explanation:
      "Newton's second law states F = ma. The net force on an object equals its mass times its acceleration, so acceleration is directly proportional to force and inversely proportional to mass.",
    explanationUrdu:
      'نیوٹن کا دوسرا قانون کہتا ہے کہ F = ma۔ کسی شے پر نیٹ فورس اس کے ماس اور ایکسلریشن کے حاصل ضرب کے برابر ہوتی ہے، لہذا ایکسلریشن فورس کے براہ راست اور ماس کے بالعکس متناسب ہوتی ہے۔',
    memoryTip: 'F = ma — more force or less mass means more acceleration.',
    memoryTipUrdu: 'F = ma — زیادہ فورس یا کم ماس کا مطلب زیادہ ایکسلریشن۔',
  },
  {
    id: 'mdcat-phy-2',
    mode: 'MDCAT',
    subject: 'Physics',
    question:
      'At what angle should a projectile be launched to achieve maximum range (ignoring air resistance)?',
    options: ['30°', '45°', '60°', '90°'],
    correctIndex: 1,
    explanation:
      'For a given initial speed, range R = (v²sin2θ)/g is maximum when sin2θ = 1, i.e., 2θ = 90°, so θ = 45°. This balances horizontal and vertical velocity components optimally.',
    explanationUrdu:
      'ایک مقررہ ابتدائی رفتار پر رینج R = (v²sin2θ)/g اس وقت سب سے بڑی ہوتی ہے جب sin2θ = 1، یعنی 2θ = 90°، تو θ = 45°۔ یہ افقی اور عمودی ولاسٹی اجزاء کو بہترین توازن دیتا ہے۔',
    memoryTip: '45° gives max range — sin2θ peaks when 2θ = 90°.',
    memoryTipUrdu: '45° پر رینج سب سے زیادہ — جب 2θ = 90° تو sin2θ سب سے بڑا۔',
  },
  {
    id: 'mdcat-phy-3',
    mode: 'MDCAT',
    subject: 'Physics',
    question: "Ohm's law states that the current through a conductor is directly proportional to:",
    options: ['Resistance', 'Voltage', 'Power', 'Temperature'],
    correctIndex: 1,
    explanation:
      "Ohm's law: V = IR, so current I is directly proportional to voltage V and inversely proportional to resistance R, provided temperature and other physical conditions remain constant.",
    explanationUrdu:
      'اوہم کا قانون: V = IR، لہذا کرنٹ I وولٹیج V کے براہ راست اور ریزیسٹنس R کے بالعکس متناسب ہوتا ہے، بشرطیکہ درجہ حرارت اور دیگر طبعی حالات مستقل رہیں۔',
    memoryTip: 'V = IR — more voltage pushes more current; resistance blocks it.',
    memoryTipUrdu: 'V = IR — زیادہ وولٹیج زیادہ کرنٹ دھکتی ہے؛ ریزیسٹنس روکتی ہے۔',
  },
  {
    id: 'mdcat-phy-4',
    mode: 'MDCAT',
    subject: 'Physics',
    question: 'The magnetic force on a charge moving in a magnetic field is given by:',
    options: ['F = qE', 'F = qvB sinθ', 'F = ma', 'F = kq₁q₂/r²'],
    correctIndex: 1,
    explanation:
      'The Lorentz magnetic force is F = qvB sinθ, where q is charge, v is velocity, B is field strength, and θ is the angle between v and B. Force is maximum when motion is perpendicular to the field (θ = 90°).',
    explanationUrdu:
      'لورینٹز میگنیٹک فورس F = qvB sinθ ہے، جہاں q چارج، v ولاسٹی، B فیلڈ کی طاقت، اور θ ولاسٹی اور B کے درمیان زاویہ ہے۔ حرکت عمودی (θ = 90°) ہو تو فورس سب سے زیادہ ہوتی ہے۔',
    memoryTip: 'F = qvB sinθ — perpendicular motion (θ = 90°) gives max force.',
    memoryTipUrdu: 'F = qvB sinθ — عمودی حرکت (θ = 90°) پر فورس سب سے زیادہ۔',
  },
  {
    id: 'mdcat-phy-5',
    mode: 'MDCAT',
    subject: 'Physics',
    question: "Snell's law of refraction is expressed as:",
    options: ['n₁sinθ₁ = n₂sinθ₂', 'n₁ + n₂ = sinθ', 'n = c/v', 'sinθ = cosθ'],
    correctIndex: 0,
    explanation:
      "Snell's law: n₁sinθ₁ = n₂sinθ₂. It relates the angle of incidence (θ₁) and angle of refraction (θ₂) to the refractive indices of the two media. Light bends toward the normal in a denser medium.",
    explanationUrdu:
      'اسنیل کا قانون: n₁sinθ₁ = n₂sinθ₂۔ یہ انڈیڈنس کے زاویے (θ₁) اور ریفرکشن کے زاویے (θ₂) کو دو میڈیا کے ریفریکٹو انڈیکس سے جوڑتا ہے۔ روشنی گنجان میڈیم میں نارمل کی طرف جھکتی ہے۔',
    memoryTip: 'n₁sinθ₁ = n₂sinθ₂ — "n sine theta" equal on both sides.',
    memoryTipUrdu: 'n₁sinθ₁ = n₂sinθ₂ — دونوں طرف "n سائن تھیٹا" برابر۔',
  },
  {
    id: 'mdcat-phy-6',
    mode: 'MDCAT',
    subject: 'Physics',
    question: 'The photoelectric effect (Einstein, 1905) demonstrates which nature of light?',
    options: ['Wave nature', 'Particle nature', 'Both wave and particle nature', 'Neither nature'],
    correctIndex: 1,
    explanation:
      'The photoelectric effect shows that light ejects electrons from a metal as discrete energy packets called photons. This particle behavior (E = hf) cannot be explained by wave theory alone and earned Einstein the 1921 Nobel Prize.',
    explanationUrdu:
      'فوٹو الیکٹرک اثر دکھاتا ہے کہ روشنی دھات سے الیکٹرانز کو فوٹونز (توانائی کے الگ تھلگ پیکٹ) کی طرح نکالتی ہے۔ یہ ذرے کا رویہ (E = hf) صرف ویو تھیوری سے نہیں سمجھا جا سکتا، جس پر آئن اسٹائن کو 1921 کا نوبل ملا۔',
    memoryTip: 'Photoelectric = photons as bullets — particle nature of light.',
    memoryTipUrdu: 'فوٹو الیکٹرک = فوٹونز گولیوں کی طرح — روشنی کی ذرے کی نوعیت۔',
  },
  {
    id: 'mdcat-phy-7',
    mode: 'MDCAT',
    subject: 'Physics',
    question: 'A radioactive isotope has a half-life of 8 years. How much of a 16 g sample remains after 24 years?',
    options: ['8 g', '4 g', '2 g', '1 g'],
    correctIndex: 2,
    explanation:
      '24 years = 3 half-lives (24 ÷ 8 = 3). After each half-life the mass halves: 16 → 8 → 4 → 2 g. So 2 g remains after 24 years.',
    explanationUrdu:
      '24 سال = 3 ہاف لائفز (24 ÷ 8 = 3)۔ ہر ہاف لائف کے بعد ماس آدھا ہوتا ہے: 16 → 8 → 4 → 2 g۔ لہذا 24 سال بعد 2 g باقی رہتا ہے۔',
    memoryTip: 'Count the half-lives, then halve the mass that many times.',
    memoryTipUrdu: 'ہاف لائفز گنو، پھر ماس اتنی مرتبہ آدھا کرو۔',
  },
  {
    id: 'mdcat-phy-8',
    mode: 'MDCAT',
    subject: 'Physics',
    question: 'The SI unit of pressure is the:',
    options: ['Pascal', 'Newton', 'Joule', 'Watt'],
    correctIndex: 0,
    explanation:
      'Pressure is force per unit area (P = F/A). Its SI unit is the Pascal (Pa), defined as 1 N/m². Common multiples include kPa and MPa.',
    explanationUrdu:
      'پریشر فی یونٹ ایریا پر فورس ہے (P = F/A)۔ اس کی SI اکائی پاسکل (Pa) ہے، جو 1 N/m² کے برابر تعریف کی جاتی ہے۔ عام ملٹیپلز میں kPa اور MPa شامل ہیں۔',
    memoryTip: 'Pressure = Pascal = N per m² — "push on a square."',
    memoryTipUrdu: 'پریشر = پاسکل = N فی m² — "چوکائی پر دھکا۔"',
  },
  {
    id: 'mdcat-phy-9',
    mode: 'MDCAT',
    subject: 'Physics',
    question: 'The work-energy theorem states that the net work done on an object equals its change in:',
    options: ['Momentum', 'Kinetic energy', 'Potential energy', 'Velocity'],
    correctIndex: 1,
    explanation:
      'The work-energy theorem: W_net = ΔKE. The total work done by all forces on an object equals the change in its kinetic energy (½mv²_final − ½mv²_initial).',
    explanationUrdu:
      'ورک انرجی تھیورم: W_net = ΔKE۔ کسی شے پر تمام فورسز کا کل ورک اس کی کائینیٹک توانائی میں تبدیلی (½mv²_final − ½mv²_initial) کے برابر ہوتا ہے۔',
    memoryTip: 'Work = ΔKE — work changes kinetic energy directly.',
    memoryTipUrdu: 'ورک = ΔKE — ورک کائینیٹک توانائی بدل دیتا ہے۔',
  },
  {
    id: 'mdcat-phy-10',
    mode: 'MDCAT',
    subject: 'Physics',
    question: 'The SI unit of capacitance is the:',
    options: ['Ohm', 'Farad', 'Henry', 'Tesla'],
    correctIndex: 1,
    explanation:
      'Capacitance (C = Q/V) is measured in Farads (F), named after Michael Faraday. One farad equals one coulomb per volt. Practical capacitors are usually in microfarads (μF) or picofarads (pF).',
    explanationUrdu:
      'کیپیسیٹنس (C = Q/V) کو فیراڈ (F) میں ناپا جاتا ہے، جو مائیکل فیراڈے کے نام پر ہے۔ ایک فیراڈ ایک کولمب فی وولٹ کے برابر ہے۔ عملی کیپیسیٹرز عام طور پر مائیکروفیراڈ (μF) یا پیکوفیراڈ (pF) میں ہوتے ہیں۔',
    memoryTip: 'Capacitance = Farad — "Farad stores charge."',
    memoryTipUrdu: 'کیپیسیٹنس = فیراڈ — "فیراڈ چارج جمع کرتا ہے۔"',
  },

  // ===== English =====
  {
    id: 'mdcat-eng-1',
    mode: 'MDCAT',
    subject: 'English',
    question: 'Choose the correct tense: "She ____ for three hours before the rain stopped."',
    options: ['has been walking', 'had been walking', 'walked', 'is walking'],
    correctIndex: 1,
    explanation:
      'The past perfect continuous ("had been walking") describes an action that was ongoing for a duration before another past event (the rain stopping). "Had been + -ing" + "before + past simple" is the clue.',
    explanationUrdu:
      'پازت پرفیکٹ کانٹینیس ("had been walking") اس ایکشن کے لیے ہے جو کسی دوسرے ماضی کے واقع (بارش کے رکنے) سے پہلے کچھ دورانیے تک جاری تھا۔ "Had been + -ing" اور "before + past simple" اشارہ ہے۔',
    memoryTip: '"before another past event" → past perfect continuous (had been + -ing).',
    memoryTipUrdu: '"کسی دوسرے ماضی کے واقع سے پہلے" → پازت پرفیکٹ کانٹینیس۔',
  },
  {
    id: 'mdcat-eng-2',
    mode: 'MDCAT',
    subject: 'English',
    question: 'Change to passive voice: "The teacher explains the lesson."',
    options: [
      'The lesson is explained by the teacher.',
      'The lesson was explained by the teacher.',
      'The lesson explains the teacher.',
      'The lesson has explained the teacher.',
    ],
    correctIndex: 0,
    explanation:
      'In passive voice, the object ("the lesson") becomes the subject. The present simple active "explains" becomes present simple passive "is explained," keeping the same tense.',
    explanationUrdu:
      'پاسوائس وائس میں آبجیکٹ ("the lesson") سبجیکٹ بن جاتا ہے۔ پریزنٹ سمپل ایکٹو "explains" پریزنٹ سمپل پاسوائس "is explained" بن جاتا ہے، ٹینس ویسا ہی رہتا ہے۔',
    memoryTip: 'Active "explains" → Passive "is explained" — keep the tense matched.',
    memoryTipUrdu: 'ایکٹو "explains" → پاسوائس "is explained" — ٹینس میچ رکھو۔',
  },
  {
    id: 'mdcat-eng-3',
    mode: 'MDCAT',
    subject: 'English',
    question: 'Choose the correct preposition: "He is fond ____ playing cricket."',
    options: ['of', 'in', 'with', 'at'],
    correctIndex: 0,
    explanation:
      'The adjective "fond" always takes the preposition "of" — "fond of something / fond of doing something." This is a fixed collocation in English.',
    explanationUrdu:
      'ایجیکٹو "fond" ہمیشہ پریپوزیشن "of" لیتا ہے — "fond of something / fond of doing something۔" یہ انگریزی میں فکسڈ کولوکیشن ہے۔',
    memoryTip: '"fond of" — fixed collocation, always "of."',
    memoryTipUrdu: '"fond of" — فکسڈ کولوکیشن، ہمیشہ "of"۔',
  },
  {
    id: 'mdcat-eng-4',
    mode: 'MDCAT',
    subject: 'English',
    question: 'Choose the synonym of "Abundant":',
    options: ['Scarce', 'Plentiful', 'Tiny', 'Weak'],
    correctIndex: 1,
    explanation:
      '"Abundant" means existing in large quantities; "plentiful" is its closest synonym. "Scarce" is the antonym (rare, in short supply).',
    explanationUrdu:
      '"Abundant" کا مطلب ہے بڑی مقدار میں موجود؛ "plentiful" اس کا قریب ترین سمانم ہے۔ "Scarce" اینٹونم ہے (نایاب، کمی میں)۔',
    memoryTip: 'Abundant = a big "bun" (bundle) of plenty — think of a large supply.',
    memoryTipUrdu: 'Abundant = کثیر، plentiful = فراوان — بڑے ذخیرے کو سوچو۔',
  },
  {
    id: 'mdcat-eng-5',
    mode: 'MDCAT',
    subject: 'English',
    question: 'Choose the antonym of "Transparent":',
    options: ['Clear', 'Opaque', 'Visible', 'Bright'],
    correctIndex: 1,
    explanation:
      '"Transparent" allows light to pass through so objects behind are clearly seen, while "opaque" blocks light completely so nothing can be seen through it — they are opposites.',
    explanationUrdu:
      '"Transparent" روشنی کو گزرنے دیتا ہے تو پیچھے کی چیزیں صاف دکھتی ہیں، جبکہ "opaque" روشنی کو مکمل روکتا ہے تو کچھ نظر نہیں آتا — دونوں الٹ ہیں۔',
    memoryTip: 'Transparent (see-through) ↔ Opaque (blocks light).',
    memoryTipUrdu: 'Transparent (صاف دکھتا) ↔ Opaque (روشنی روکتا)۔',
  },
  {
    id: 'mdcat-eng-6',
    mode: 'MDCAT',
    subject: 'English',
    question: 'Choose the correct article: "He is ____ honest man."',
    options: ['a', 'an', 'the', 'no article'],
    correctIndex: 1,
    explanation:
      '"An" is used before a word beginning with a vowel sound. Although "honest" starts with the letter h, the h is silent, so the word begins with the vowel sound "o" → "an honest man."',
    explanationUrdu:
      '"An" وائل ساؤنڈ سے شروع ہونے والے لفظ سے پہلے آتا ہے۔ اگرچہ "honest" میں حرف h ہے، وہ خاموش ہے، اس لیے لفظ وائل ساؤنڈ "o" سے شروع ہوتا ہے → "an honest man۔"',
    memoryTip: 'Silent "h" → treat as vowel → "an honest," "an hour."',
    memoryTipUrdu: 'خاموش "h" → وائل سمجھو → "an honest," "an hour۔"',
  },
  {
    id: 'mdcat-eng-7',
    mode: 'MDCAT',
    subject: 'English',
    question: 'Choose the correct verb: "Neither of the boys ____ present."',
    options: ['are', 'were', 'is', 'have'],
    correctIndex: 2,
    explanation:
      '"Neither" is singular and takes a singular verb. "Neither of the boys is present" is correct, even though "boys" is plural — the subject of the verb is "neither," not "boys."',
    explanationUrdu:
      '"Neither" سنگولر ہے اور سنگولر فعل لیتا ہے۔ "Neither of the boys is present" درست ہے، اگرچہ "boys" پلورل ہے — فعل کا سبجیکٹ "neither" ہے، "boys" نہیں۔',
    memoryTip: 'Neither / Either = singular → use "is / was," never "are."',
    memoryTipUrdu: 'Neither / Either = سنگولر → "is / was" استعمال کرو، "are" نہیں۔',
  },
  {
    id: 'mdcat-eng-8',
    mode: 'MDCAT',
    subject: 'English',
    question: 'Identify the correctly punctuated sentence:',
    options: [
      'She said, "I will come tomorrow."',
      'She said "I will come tomorrow".',
      'She said, I will come tomorrow.',
      'She said "I will come, tomorrow"',
    ],
    correctIndex: 0,
    explanation:
      'In direct speech, a comma introduces the quotation, which is enclosed in quotation marks, and the closing quotation mark comes after the sentence\'s final punctuation (a period).',
    explanationUrdu:
      'ڈائریکٹ اسپیچ میں کوما کوٹیشن متعارف کراتا ہے، کوٹیشن کو کوٹیشن مارکس میں بند کیا جاتا ہے، اور کلوزنگ کوٹیشن مارک جملے کے آخری پنکچوئیشن (فل اسٹاپ) کے بعد آتا ہے۔',
    memoryTip: 'Comma before the quote, period inside the closing quote.',
    memoryTipUrdu: 'کوٹیشن سے پہلے کوما، فل اسٹاپ کوٹیشن مارک کے اندر۔',
  },
  {
    id: 'mdcat-eng-9',
    mode: 'MDCAT',
    subject: 'English',
    question: 'Choose the correctly spelled word:',
    options: ['Recieve', 'Receive', 'Receeve', 'Receve'],
    correctIndex: 1,
    explanation:
      '"Receive" follows the classic spelling rule "i before e except after c." Since the letter c comes before, the order is "ei": re-cei-ve. (Note: this rule has exceptions, but receive follows it.)',
    explanationUrdu:
      '"Receive" کلاسک اسپیلنگ رول "i قبل e بجز بعد c" پر عمل کرتا ہے۔ چونکہ حرف c پہلے آتا ہے، ترتیب "ei" ہوتی ہے: re-cei-ve۔ (نوٹ: اس رول کے استثنا ہیں، مگر receive اس پر چلتا ہے۔)',
    memoryTip: '"i before e, except after c" — re-C-ei-Ve.',
    memoryTipUrdu: '"i قبل e، بجز بعد c" — re-C-ei-Ve۔',
  },
  {
    id: 'mdcat-eng-10',
    mode: 'MDCAT',
    subject: 'English',
    question: 'Complete the conditional sentence: "If I ____ rich, I would travel the world."',
    options: ['am', 'was', 'were', 'be'],
    correctIndex: 2,
    explanation:
      'This is a second conditional (hypothetical/unreal present or future). The rule is "If + past simple, ... would + base verb," and with "be" we use the subjunctive "were" for all subjects: "If I were rich."',
    explanationUrdu:
      'یہ سیکنڈ کنڈیشنل (فرضی / غیر حقیقی حالت) ہے۔ رول ہے "If + past simple، ... would + base verb،" اور "be" کے ساتھ سب کے لیے سبجنکٹو "were" استعمال ہوتا ہے: "If I were rich۔"',
    memoryTip: 'Hypothetical "if" → "were" for everyone — "If I were you."',
    memoryTipUrdu: 'فرضی "if" → سب کے لیے "were" — "If I were you۔"',
  },

  // ===== General Knowledge =====
  {
    id: 'mdcat-gk-1',
    mode: 'MDCAT',
    subject: 'General Knowledge',
    question: 'What is the capital city of Pakistan?',
    options: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi'],
    correctIndex: 2,
    explanation:
      'Islamabad became the capital of Pakistan in the 1960s, replacing Karachi. It is a purpose-built, planned city located at the foot of the Margalla Hills in the Potohar region.',
    explanationUrdu:
      'اسلام آباد 1960 کی دہائی میں پاکستان کا دارالحکومت بنا، کراچی کی جگہ۔ یہ ایک منصوبہ بند شہر ہے جو پوٹھوہار علاقے میں مارگلہ کی پہاڑیوں کے دامن میں واقع ہے۔',
    memoryTip: 'Islamabad — capital at the foot of the Margalla Hills.',
    memoryTipUrdu: 'اسلام آباد — مارگلہ کی پہاڑیوں کے دامن میں دارالحکومت۔',
  },
  {
    id: 'mdcat-gk-2',
    mode: 'MDCAT',
    subject: 'General Knowledge',
    question: 'What is the highest mountain peak in Pakistan?',
    options: ['K2', 'Nanga Parbat', 'Tirich Mir', 'Broad Peak'],
    correctIndex: 0,
    explanation:
      'K2 (8,611 m), in the Karakoram range, is the highest peak entirely in Pakistan and the second-highest in the world after Mount Everest. It is also called the "Savage Mountain" for its difficulty.',
    explanationUrdu:
      'K2 (8,611 میٹر)، کراکورام رینج میں، پاکستان میں مکمل طور پر موجود سب سے اونچی چوٹی اور دنیا کی دوسری سب سے اونچی چوٹی ہے (ایورسٹ کے بعد)۔ اسے مشکل کے باعث "سائج ماؤنٹین" بھی کہتے ہیں۔',
    memoryTip: 'K2 = "Savage Mountain" — #2 in the world, #1 in Pakistan.',
    memoryTipUrdu: 'K2 = "سائج ماؤنٹین" — دنیا میں دوسری، پاکستان میں پہلی۔',
  },
  {
    id: 'mdcat-gk-3',
    mode: 'MDCAT',
    subject: 'General Knowledge',
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
    correctIndex: 2,
    explanation:
      'Canberra is the capital of Australia, a purpose-built city chosen as a compromise between the rival cities of Sydney and Melbourne. It is located in the Australian Capital Territory.',
    explanationUrdu:
      'کینبرا آسٹریلیا کا دارالحکومت ہے، ایک منصوبہ بند شہر جو سڈنی اور میلبورن کی آپسی رقابت کے درمیان سمجھوتے کے طور پر چنا گیا۔ یہ آسٹریلین کیپیٹل ٹیریٹری میں واقع ہے۔',
    memoryTip: 'Canberra, not Sydney — built to settle the Sydney–Melbourne rivalry.',
    memoryTipUrdu: 'کینبرا، سڈنی نہیں — سڈنی میلبورن رقابت ختم کرنے کے لیے بنا۔',
  },
  {
    id: 'mdcat-gk-4',
    mode: 'MDCAT',
    subject: 'General Knowledge',
    question: 'Who proposed the theory of general relativity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Niels Bohr', 'Galileo Galilei'],
    correctIndex: 1,
    explanation:
      'Albert Einstein published the theory of general relativity in 1915, describing gravity as the curvature of spacetime caused by mass and energy. It revolutionized modern physics.',
    explanationUrdu:
      'ایلبرٹ آئن اسٹائن نے 1915 میں جنرل ریلیٹیویٹی کا نظریہ پیش کیا، جو کشش ثقل کو ماس اور توانائی کے باعث اسپیس ٹائم کے خم کے طور پر بیان کرتا ہے۔ اس نے جدید فزکس میں انقلاب لایا۔',
    memoryTip: 'Einstein = relativity (E = mc²). Newton = classical gravity.',
    memoryTipUrdu: 'آئن اسٹائن = ریلیٹیویٹی (E = mc²)۔ نیوٹن = کلاسیکی کشش ثقل۔',
  },
  {
    id: 'mdcat-gk-5',
    mode: 'MDCAT',
    subject: 'General Knowledge',
    question: 'At standard atmospheric pressure (1 atm), water boils at:',
    options: ['50°C', '90°C', '100°C', '212°C'],
    correctIndex: 2,
    explanation:
      'At standard atmospheric pressure (1 atm, sea level), water boils at 100°C (which equals 212°F). The boiling point falls at higher altitudes where pressure is lower.',
    explanationUrdu:
      'معیاری atmospheric پریشر (1 atm، سمندر کی سطح) پر پانی 100°C پر ابلتا ہے (جو 212°F کے برابر ہے)۔ زیادہ بلندی پر پریشر کم ہونے سے ابالنے کا نقطہ گر جاتا ہے۔',
    memoryTip: '100°C at sea level — up the mountain, it boils at a lower temperature.',
    memoryTipUrdu: 'سمندر کی سطح پر 100°C — پہاڑ پر کم درجہ حرارت پر ابلتا ہے۔',
  },
  {
    id: 'mdcat-gk-6',
    mode: 'MDCAT',
    subject: 'General Knowledge',
    question: 'Which is the longest river in Pakistan?',
    options: ['Indus River', 'Chenab River', 'Jhelum River', 'Ravi River'],
    correctIndex: 0,
    explanation:
      'The Indus River is the longest river in Pakistan, flowing about 3,180 km from Tibet through Ladakh and Pakistan to the Arabian Sea. It is the lifeline of Pakistan\'s agriculture and gives the country its name.',
    explanationUrdu:
      'دریائے سندھ پاکستان کا سب سے طویل دریا ہے، جو تبت سے لداخ اور پاکستان کے راستے عرب سمندر تک تقریباً 3,180 کلومیٹر بہتا ہے۔ یہ پاکستان کی زراعت کی شہ رگ ہے اور ملک کو نام دیتا ہے۔',
    memoryTip: 'Indus = Pakistan\'s lifeline — the country is named after it.',
    memoryTipUrdu: 'سندھ = پاکستان کی شہ رگ — ملک کا نام اسی پر ہے۔',
  },
  {
    id: 'mdcat-gk-7',
    mode: 'MDCAT',
    subject: 'General Knowledge',
    question: 'What is the capital of Japan?',
    options: ['Osaka', 'Kyoto', 'Tokyo', 'Nagoya'],
    correctIndex: 2,
    explanation:
      'Tokyo is the capital of Japan and one of the world\'s most populous metropolitan areas, serving as the country\'s political, economic, and cultural center. It was formerly known as Edo.',
    explanationUrdu:
      'ٹوکیو جاپان کا دارالحکومت ہے اور دنیا کے سب سے زیادہ آبادی والے میٹروپولیٹن علاقوں میں سے ایک ہے، جو ملک کا سیاسی، اقتصادی اور ثقافتی مرکز ہے۔ پہلے اسے ایڈو کہا جاتا تھا۔',
    memoryTip: 'Tokyo = Japan\'s capital — the main city of the nation.',
    memoryTipUrdu: 'ٹوکیو = جاپان کا دارالحکومت — قوم کا مرکزی شہر۔',
  },
  {
    id: 'mdcat-gk-8',
    mode: 'MDCAT',
    subject: 'General Knowledge',
    question: 'Who is credited with formulating the three laws of motion and universal gravitation?',
    options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Johannes Kepler'],
    correctIndex: 1,
    explanation:
      'Sir Isaac Newton formulated the three laws of motion and the law of universal gravitation, published in his Philosophiæ Naturalis Principia Mathematica (1687). These laid the foundation of classical mechanics.',
    explanationUrdu:
      'سر آئزک نیوٹن نے حرکت کے تین قوانین اور یونیورسل کشش ثقل کا قانون مرتب کیا، جو ان کی Philosophiæ Naturalis Principia Mathematica (1687) میں شائع ہوئے۔ انہوں نے کلاسیکی میکینکس کی بنیاد رکھی۔',
    memoryTip: 'Newton = apple + gravity + three laws of motion.',
    memoryTipUrdu: 'نیوٹن = سیب + کشش ثقل + حرکت کے تین قوانین۔',
  },
  {
    id: 'mdcat-gk-9',
    mode: 'MDCAT',
    subject: 'General Knowledge',
    question: 'Which planet is known as the "Red Planet"?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctIndex: 1,
    explanation:
      'Mars is called the "Red Planet" because its surface is rich in iron oxide (rust), which gives it a reddish-orange appearance. It is the fourth planet from the Sun and a major target for space exploration.',
    explanationUrdu:
      'مریخ کو "ریڈ پلانٹ" کہا جاتا ہے کیونکہ اس کی سطح آئرن آکسائڈ (زنگ) سے بھرپور ہے، جو اسے سرخ مظهر دیتا ہے۔ یہ سورج سے چوتھا سیارہ ہے اور خلائی تحقیق کا بڑا ہدف ہے۔',
    memoryTip: 'Mars = red, like rust (iron oxide) on an old nail.',
    memoryTipUrdu: 'مریخ = سرخ، پرانے ناخن پر زنگ (آئرن آکسائڈ) کی طرح۔',
  },
  {
    id: 'mdcat-gk-10',
    mode: 'MDCAT',
    subject: 'General Knowledge',
    question: 'What is the national flower of Pakistan?',
    options: ['Rose', 'Jasmine', 'Tulip', 'Lily'],
    correctIndex: 1,
    explanation:
      'Jasmine (Chambeli) is the national flower of Pakistan, prized for its small white fragrant blossoms. It grows widely across the country and holds cultural and poetic significance.',
    explanationUrdu:
      'چنبیلی (Jasmine) پاکستان کا قومی پھول ہے، اپنی چھوٹی سفید خوشبودار پھولوں کے لیے مشہور۔ یہ پورے ملک میں بکثرت اگتا ہے اور ثقافتی اور شعری اہمیت رکھتا ہے۔',
    memoryTip: 'Jasmine = Chambeli — Pakistan\'s white, fragrant national flower.',
    memoryTipUrdu: 'چنبیلی = Jasmine — پاکستان کا سفید، خوشبودار قومی پھول۔',
  },
];
