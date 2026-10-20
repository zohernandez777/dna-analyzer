export function cleanSequence(seq){
    const newSeq = seq.replace(/\s/g, '').toUpperCase()
    return newSeq
}
export function isValidDNA(seq){
    const regex = /^[ATGC]+$/
    return regex.test(seq)
}
export function countBases(seq) {
    let numA = 0
    let numT = 0
    let numC = 0
    let numG = 0
    for(const char of seq){
     if (char === 'A') {numA++}
     if (char === 'T') {numT++}
     if (char === 'C') {numC++}
     if (char === 'G') {numG++}
  }
return { A: numA, T: numT, G: numG, C: numC }
}

export function gcContent(seq) {
  let counts = countBases(seq)
  const percent =  ((counts.G + counts.C) / seq.length) * 100
  return percent.toFixed(1)
}
export function reverseComplement(seq) {
  const pairs = { A: 'T', T: 'A', G: 'C', C: 'G' }
  let result = ''
  for (const char of seq) {
    result = pairs[char] + result
  }
  return result
}

export function transcribe(seq) {
  return seq.replace(/T/g, 'U')
}

const CODON_TABLE = {
  TTT: 'F', TTC: 'F', TTA: 'L', TTG: 'L',
  CTT: 'L', CTC: 'L', CTA: 'L', CTG: 'L',
  ATT: 'I', ATC: 'I', ATA: 'I', ATG: 'M',
  GTT: 'V', GTC: 'V', GTA: 'V', GTG: 'V',
  TCT: 'S', TCC: 'S', TCA: 'S', TCG: 'S',
  CCT: 'P', CCC: 'P', CCA: 'P', CCG: 'P',
  ACT: 'T', ACC: 'T', ACA: 'T', ACG: 'T',
  GCT: 'A', GCC: 'A', GCA: 'A', GCG: 'A',
  TAT: 'Y', TAC: 'Y', TAA: '*', TAG: '*',
  CAT: 'H', CAC: 'H', CAA: 'Q', CAG: 'Q',
  AAT: 'N', AAC: 'N', AAA: 'K', AAG: 'K',
  GAT: 'D', GAC: 'D', GAA: 'E', GAG: 'E',
  TGT: 'C', TGC: 'C', TGA: '*', TGG: 'W',
  CGT: 'R', CGC: 'R', CGA: 'R', CGG: 'R',
  AGT: 'S', AGC: 'S', AGA: 'R', AGG: 'R',
  GGT: 'G', GGC: 'G', GGA: 'G', GGG: 'G',
}

export function translate(seq) {
  let protein = ''
  for (let i = 0; i + 3 <= seq.length; i += 3) {
    const codon = seq.slice(i, i + 3)
    const aminoAcid = CODON_TABLE[codon]
    if (aminoAcid === '*') break
    protein += aminoAcid
  }
  return protein
}