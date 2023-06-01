class Point {
  constructor(public x: number, public y: number) {}

  distanceTo(other: Point): number {
    return Math.abs(this.x - other.x) + Math.abs(this.y - other.y);
  }
}

// Exemple d'utilisation
const point1 = new Point(1, 2);
const point2 = new Point(4, 6);
const distance = point1.distanceTo(point2);
console.log(`La distance de Manhattan entre les points est : ${distance}`);
