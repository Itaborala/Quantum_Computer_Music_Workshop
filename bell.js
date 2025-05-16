// Clock Speed
z.bpm.set(135)

// Canvas Size
z.s=4

// Alternative plot - B&W quantum measurements (qms)
// z.grid.qms().fn(a => [a])


// --------- Quantum Circuit Here ---------
q0.h().cx(1)
q1.ry($saw(0, 0.5),2) // <<<==== Change the 1st parameter!



// Distributing the Streams in the canvas
s1.x.set(0.4)
s2.x.set(0.7)
s3.x.set(0.9)


s0.y.set(s0.e).mul(0.99)
s1.y.set(s1.e).mul(0.99)
s2.y.set(s2.e).mul(0.99)
s3.y.set(s3.e).mul(0.99)

// Bass
s0.set({inst: 'sampler', bank: 'cpu2',
  vol: 1, d: 1, s:0.3, dur:ms(2), vol:0.5})
s0.e.qm(0)

// Hi-Hat
s1.set({inst: 'sampler', bank: 'hh', dur:ms(0.5), 
  cut:[0,2], dist:0.5, s: 0.25, vol:0.25})
s1.e.qm(1)

// Bass Counterpoint
s2.set({inst: 'sampler', bank: 'bd', snap:2,
  vol: 1, s:0.3, vol:0.5})
s2.e.every(3).and($not(s1.e))

// // 'Gypsy Woman' Chords
s3.set({inst: 'synth', cut:3, reverb:0.5, vol: 0.20, modi:6.25, mods:0.1})
// s3.p.n.set('Flyd | F#lyd%16..?*16 | Clyd%16..?*16').sub(12).add($qpb(0).mul(12))
s3.p.n.set('Flyd | F#lyd%16..?*16 | Clyd%16..?*16').sub(12).add($qpb(0).mul(12))
s3.e.every(4).or($not(s0.e.and(s1.e)))

// Print Sample banks
samples()
