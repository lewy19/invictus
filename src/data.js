import { ARTICLE_CONTENT } from './guideContent.js';
import { ARTICLE_EXTRA } from './guideExtra.js';
import { ARTICLE_MORE } from './guideMore.js';
import { ARTICLE_FINAL } from './guideFinal.js';
import { ARTICLE_FINAL_TWO } from './guideFinalTwo.js';
import { ARTICLE_LAST } from './guideLast.js';
// Kenyan source references used by these articles:
// KNEC grading: https://www.knec.ac.ke/wp-content/uploads/2024/10/USER-GUIDE-FOR-KCSE-EXAMINATION-2024-EDITION-23rd-Oct_2.pdf
// Current KCSE 2025 grade table: https://knec.ac.ke/wp-content/uploads/2026/01/CIRCULAR-ON-THE-2025-KCSE-EXAMINATION-RESULTS.pdf
// KUCCPS candidate guidance: https://kuccps.net/frequently-asked-questions
// KUCCPS placement: https://kuccps.net/placem
// JSON syntax: https://www.rfc-editor.org/rfc/rfc8259
// Browser image formats: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types
// QR error correction: https://www.qrcode.com/en/about/error_correction.html
// Current password guidance: https://pages.nist.gov/800-63-4/sp800-63b.html
const guideMetadata = [
 {slug:"understanding-kcse-mean-grade",title:"How to understand your KCSE mean grade",summary:"What the mean grade represents and how KNEC selects grades.",tool:"kcse-mean",date:'2026-11-24'},
 {slug:"kuccps-cluster-points",title:"Why you should use the KUCCPS cluster weight in your portal",summary:"What cluster weight means and why a home-made formula can mislead.",tool:"",date:'2026-11-24'},
 {slug:"choosing-degree-course",title:"How to compare degree courses before applying",summary:"A practical way to compare course requirements, campuses and options.",tool:"",date:'2026-11-24'},
 {slug:"attachment-letter",title:"How to write an industrial attachment application letter",summary:"A clear structure for a respectful first-person attachment request.",tool:"attachment-letter",date:'2026-11-24'},
 {slug:"attachment-email",title:"How to ask for an attachment by email",summary:"Subject lines, concise introductions and useful attachments.",tool:"attachment-letter",date:'2026-11-24'},
 {slug:"it-student-cv",title:"CV tips for IT students in Kenya",summary:"Show coursework, projects and skills with concrete evidence.",tool:"cv-word-counter",date:'2026-11-24'},
 {slug:"cv-bullets",title:"How to write stronger CV bullet points",summary:"Turn responsibilities into clear, specific statements.",tool:"cv-word-counter",date:'2026-11-24'},
 {slug:"cover-letter",title:"How to draft a focused cover letter",summary:"Connect the role requirements to examples from your experience.",tool:"cv-word-counter",date:'2026-11-24'},
 {slug:"json-errors",title:"How to read a JSON error",summary:"Find the line, column and character that caused a parse failure.",tool:"json-formatter",date:'2026-11-24'},
 {slug:"json-basics",title:"JSON syntax: objects, arrays and values",summary:"Recognise valid JSON and common punctuation mistakes.",tool:"json-formatter",date:'2026-11-24'},
 {slug:"image-formats",title:"Image formats and when to use each",summary:"Compare JPEG, PNG, WebP and SVG for common tasks.",tool:"image-compressor",date:'2026-11-24'},
 {slug:"compress-image",title:"How image compression affects quality",summary:"Choose dimensions and a format that fit your use case.",tool:"image-compressor",date:'2026-11-24'},
 {slug:"qr-codes",title:"How QR codes store information",summary:"What a QR code can encode and how to check it safely.",tool:"qr-generator",date:'2026-11-24'},
 {slug:"password-rules",title:"How to make a strong password",summary:"Use unique passwords and a password manager for accounts.",tool:"password-generator",date:'2026-11-24'},
 {slug:"gpa-cgpa",title:"GPA and CGPA explained",summary:"Understand weighted averages and why university rules differ.",tool:"gpa-cgpa",date:'2026-11-24'},
 {slug:"word-count",title:"How to edit a document to a word limit",summary:"Use counts as a guide while preserving meaning and evidence.",tool:"word-counter",date:'2026-11-24'},
 {slug:"unit-conversion",title:"A practical guide to unit conversion",summary:"Check units before comparing measurements or entering data.",tool:"unit-converter",date:'2026-11-24'},
 {slug:"percentages",title:"How to calculate percentages",summary:"Work through percentage-of and percentage-change examples.",tool:"percentage-calculator",date:'2026-11-24'},
 {slug:"date-difference",title:"How to calculate a date difference",summary:"Count elapsed days and check inclusive versus exclusive dates.",tool:"age-date-difference",date:'2026-11-24'},
];
const sources = {
 'understanding-kcse-mean-grade': [['KNEC KCSE examination guide','https://www.knec.ac.ke/wp-content/uploads/2024/10/USER-GUIDE-FOR-KCSE-EXAMINATION-2024-EDITION-23rd-Oct_2.pdf'],['KNEC 2025 results circular','https://knec.ac.ke/wp-content/uploads/2026/01/CIRCULAR-ON-THE-2025-KCSE-EXAMINATION-RESULTS.pdf']],
 'kuccps-cluster-points': [['KUCCPS frequently asked questions','https://kuccps.net/frequently-asked-questions'],['KUCCPS placement information','https://kuccps.net/placem']],
 'choosing-degree-course': [['KUCCPS placement information','https://kuccps.net/placem'],['KUCCPS frequently asked questions','https://kuccps.net/frequently-asked-questions']],
 'json-errors': [['RFC 8259: JSON grammar','https://www.rfc-editor.org/rfc/rfc8259']],
 'json-basics': [['RFC 8259: JSON grammar','https://www.rfc-editor.org/rfc/rfc8259']],
 'image-formats': [['MDN image format guide','https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types']],
 'qr-codes': [['DENSO WAVE error correction','https://www.qrcode.com/en/about/error_correction.html']],
 'password-rules': [['NIST SP 800-63B Revision 4','https://pages.nist.gov/800-63-4/sp800-63b.html']],
};
export const GUIDES = guideMetadata.map(g=>({...g,body:[...(ARTICLE_CONTENT[g.slug]||[]),...(ARTICLE_EXTRA[g.slug]||[]),...(ARTICLE_EXTRA[g.slug+'-more']||[]),...(ARTICLE_MORE[g.slug]||[]),...(ARTICLE_LAST[g.slug]||[]),...(ARTICLE_FINAL[g.slug]||[]),...(ARTICLE_FINAL_TWO[g.slug]||[])],sources:sources[g.slug]||[]}));


