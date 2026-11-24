import test from 'node:test';
import assert from 'node:assert/strict';
import { kcseMean } from '../src/tools.js';
test('KCSE aggregate conversion follows KNEC published examples',()=>{
 assert.deepEqual(kcseMean(['A','A','A','A','A','A','A']),{points:84,mean:'A'});
 assert.deepEqual(kcseMean(['A','A','A','A-','A-','A-','A-']),{points:80,mean:'A-'});
 assert.deepEqual(kcseMean(['B+','B+','B+','B+','B+','B+','B+']),{points:70,mean:'B+'});
 assert.equal(kcseMean(['A','A','B','B','C','D']),null);
});

