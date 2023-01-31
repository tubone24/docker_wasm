// 円周率を計算するだけの関数
export function pi(seg: f64): f64 {
  let sum = 0.0;
  for (let i = 0; i <= seg; i++) {
    const x = (1.0 / seg) * i;
    const k = 1.0 / (x * x + 1);
    sum += k / seg;
  }

  const pi = sum * 4;
  console.log(pi.toString());
  return pi;
}
