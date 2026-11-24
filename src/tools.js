// KCSE grade values and the seven-subject mean selection follow KNEC's 2024
// Regulations, sections 17.1 and 17.6: https://knec.ac.ke/wp-content/uploads/2026/01/KCSE_Regulations_2024.pdf
export const GRADES = [['A',12],['A-',11],['B+',10],['B',9],['B-',8],['C+',7],['C',6],['C-',5],['D+',4],['D',3],['D-',2],['E',1]];
export function kcseMean(subjects) {
  const list = subjects.map(s => GRADES.find(g => g[0] === s)?.[1]).filter(Number.isFinite).sort((a,b)=>b-a).slice(0,7);
  if (list.length !== 7) return null;
  const points=list.reduce((a,b)=>a+b,0);
  // KNEC result guide's aggregate conversion table (official worked ranges):
  // https://www.knec.ac.ke/wp-content/uploads/2024/10/USER-GUIDE-FOR-KCSE-EXAMINATION-2024-EDITION-23rd-Oct_2.pdf
  const ranges=[[81,'A'],[74,'A-'],[67,'B+'],[60,'B'],[53,'B-'],[46,'C+'],[39,'C'],[32,'C-'],[25,'D+'],[18,'D'],[11,'D-'],[7,'E']];
  return {points, mean:ranges.find(([floor])=>points>=floor)?.[1] || 'E'};
}
export function weightedGpa(entries, maximum = 4) {
  if (![4, 5].includes(Number(maximum)) || !entries.length) return null;
  let weighted = 0, credits = 0;
  for (const [rawPoints, rawCredits] of entries) {
    const points = Number(rawPoints), units = Number(rawCredits);
    if (!Number.isFinite(points) || points < 0 || points > maximum || !Number.isFinite(units) || units <= 0) return null;
    weighted += points * units;
    credits += units;
  }
  return { gpa: weighted / credits, credits };
}
export function dateDifference(from, to) {
  const parse = value => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return null;
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
    return date;
  };
  let start = parse(from), end = parse(to);
  if (!start || !end) return null;
  if (start > end) [start, end] = [end, start];
  const days = Math.floor((Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) - Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) / 86400000);
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let remaining = end.getDate() - start.getDate();
  if (remaining < 0) { months--; remaining += new Date(end.getFullYear(), end.getMonth(), 0).getDate(); }
  if (months < 0) { years--; months += 12; }
  return { years, months, days: remaining, totalDays: days };
}
export const TOOLS = [
 ['kcse-mean','KCSE mean grade calculator','Estimate a seven-subject mean using KNEC grade points.'],
 ['gpa-cgpa','GPA and CGPA calculator','Calculate a credit-weighted GPA on a 4.0 or 5.0 scale.'],
 ['attachment-letter','Attachment application letter','Draft a first-person industrial attachment application letter.'],
 ['cv-word-counter','CV and cover letter word counter','Check word, character and sentence counts in application documents.'],
 ['json-formatter','JSON formatter and validator','Format JSON and catch syntax errors in your browser.'],
 ['image-compressor','Image compressor','Resize and compress an image locally in your browser.'],
 ['qr-generator','QR code generator','Create a QR code for text or a web address.'],
 ['word-counter','Word and character counter','Count words, characters, sentences and paragraphs.'],
 ['unit-converter','Unit converter','Convert common length, weight and decimal data units.'],
 ['password-generator','Password generator','Create a random password locally on this device.'],
 ['age-date-difference','Age and date difference','Calculate age or the time between two dates.'],
 ['percentage-calculator','Percentage calculator','Calculate a percentage of an amount.']
].map(([slug,title,short])=>({slug,title,short,explanation:TOOL_DETAILS[slug]+' '+TOOL_DETAIL_EXAMPLES[slug]}));
// KUCCPS advises candidates to use cluster weights displayed in their portal.
// Their official FAQ states PI data is required and unavailable to candidates:
// https://www.kuccps.net/node/139. No unofficial formula is presented here.
import { TOOL_DETAILS, TOOL_DETAIL_EXAMPLES } from './toolDetails.js';
