export function leftRotation(a = [], d = 0) {
  if (a === null) {
    throw new Error("A value cannot be NULL");
  }

  if (a.length === 0) {
    throw new Error("A value cannot be []");
  }

  if ([0, null, undefined].includes(d)) {
    throw new Error("D value cannot be NULL");
  }

  let rotations = 0;

  if (d >= a.length) {
    rotations = d % a.length;
  } else {
    rotations = d;
  }

  if (rotations === 0) {
    return a.join(" ");
  }

  const p1 = a.slice(0, rotations);
  const p2 = a.slice(rotations);
  const result = [].concat(p2, p1);

  return result.join(" ");
}
