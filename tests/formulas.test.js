import test from 'node:test';
import assert from 'node:assert/strict';
import { kcseMean, weightedGpa, dateDifference } from '../src/tools.js';
test('KCSE aggregate conversion follows KNEC published examples',()=>{
 assert.deepEqual(kcseMean(['A','A','A','A','A','A','A']),{points:84,mean:'A'});
 assert.deepEqual(kcseMean(['A','A','A','A-','A-','A-','A-']),{points:80,mean:'A-'});
 assert.deepEqual(kcseMean(['B+','B+','B+','B+','B+','B+','B+']),{points:70,mean:'B+'});
 assert.equal(kcseMean(['A','A','B','B','C','D']),null);
});
test('credit-weighted GPA uses entered values on the 4.0 scale',()=>{
 const result=weightedGpa([[3.7,3],[3.3,4],[4,2]],4);
 assert.equal(result.credits,9);
 assert.equal(result.gpa.toFixed(2),'3.59');
});
test('credit-weighted GPA uses entered values on the 5.0 scale',()=>{
 const result=weightedGpa([[4.5,3],[3.5,3],[4,2]],5);
 assert.equal(result.credits,8);
 assert.equal(result.gpa.toFixed(2),'4.00');
});
test('GPA rejects invalid points, credits, or scale',()=>{
 assert.equal(weightedGpa([[4.1,3]],4),null);
 assert.equal(weightedGpa([[3,0]],4),null);
 assert.equal(weightedGpa([[3,2]],6),null);
});
test('date difference counts elapsed days and rejects impossible ISO dates',()=>{
 assert.deepEqual(dateDifference('2005-10-10','2025-10-24'),{years:20,months:0,days:14,totalDays:7319});
 assert.equal(dateDifference('2025-02-31','2025-03-02'),null);
 assert.equal(dateDifference('10/10/2005','2025-10-24'),null);
});

