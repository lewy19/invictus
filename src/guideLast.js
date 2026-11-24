export const ARTICLE_LAST = {
'json-basics': [
{h:'Test boundaries in the sample data',p:'For a student course list, test an empty array, a course with zero credits and a record with an unknown grade value. These inputs reveal whether the application distinguishes missing data from ordinary values. Avoid letting example records contain real names, passwords or student identifiers when they are posted publicly. A small invented sample is easier to share and reproduce. When a result is unexpected, reduce the data to one object and add fields back until the behavior changes.'}
],
'compress-image': [
{h:'Size down before quality tweaking',p:'If an image is destined for a 600-pixel card, exporting a 4000-pixel file at lower quality may waste bytes. Resizing to the intended display width first removes pixels that cannot be seen in that layout. Keep enough resolution for high-density screens and any zoom behavior the page offers. Use the same image dimensions when comparing encoders, and do not judge only by the download size.'}
],
'qr-codes': [
{h:'Offer a fallback to scanning',p:'A printed code should sit beside a short instruction and, when possible, a readable domain or contact route. Some readers cannot scan because of camera limitations, lighting, disability or workplace policy. Provide the destination as ordinary text or a short accessible link too. This also gives people a chance to inspect the destination before opening it. A QR code is one entry point, not the only route to the information.'}
],
'password-rules': [
{h:'Protect recovery access',p:'Email often resets other accounts, so secure the recovery mailbox before relying on a password manager. Keep recovery methods current and store backup codes away from the device they unlock. If a service supports passkeys, read its account recovery instructions before switching. A strong unique password reduces reuse risk, but phishing can still trick a person into giving it away. Check the site address before signing in and do not approve unexpected authentication prompts.'}
],
'gpa-cgpa': [
{h:'Do not convert scales by proportion alone',p:'A student with 3.2 on a 4.0 scale cannot safely assume that multiplying by 1.25 gives an equivalent 4.0 or 5.0 result. The grade distributions and conversion rules may not be linear. If an application requests another scale, use its published conversion table or request an official conversion from the institution. Keep the original scale visible when sharing an estimate so a reader does not mistake the value for an official transcript.'}
],
'word-count': [
{h:'A count cannot replace revision',p:'After reaching a limit, check whether every sentence contributes evidence, explanation or a transition. Remove repeated context, not a necessary qualification. For example, a project claim may need a short sentence explaining that it was a classroom prototype rather than a live service. Cutting that distinction might save words but could mislead a reader. A count is a boundary check; accuracy and clarity remain the writer’s responsibility. Read the final version once for meaning and again for spelling.'}
],
'unit-conversion': [
{h:'Check the conversion direction',p:'When converting a small unit to a larger one, the numeric value usually gets smaller. For example, 850 grams becomes 0.85 kilograms. Converting 0.85 kilograms to grams returns 850. This round-trip check is a simple way to spot a factor applied in the wrong direction. It does not prove every constant is correct, so compare critical results with a reliable specification or measurement reference.'}
],
'percentages': [
{h:'Explain the denominator',p:'A percentage is meaningful only when the base is clear. “The result improved by 10 percent” should identify the starting measure and the new measure. If a class has 20 students and 5 submit a project, the submission share is 5 divided by 20, or 25 percent. If 5 more students submit later, the share becomes 10 divided by 20, or 50 percent: an increase of 25 percentage points and a 100 percent relative increase from the initial share. Those statements describe different comparisons.'}
],
'date-difference': [
{h:'Use ISO dates when sharing inputs',p:'The format YYYY-MM-DD makes the year, month and day order explicit. For example, 2026-11-24 is unambiguous, while 11/12/2026 can mean different dates in different conventions. Verify the value against the original source before entering it. The calculator accepts calendar dates, not a time of day, and reports an elapsed date interval. If your task uses a named timezone or a precise deadline hour, retain that information separately.'}
]
};
