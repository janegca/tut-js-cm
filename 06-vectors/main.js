var v1 = vector.create(10, 5);

console.log(v1.getX());
console.log(v1.getY());
console.log(v1.getAngle());
console.log(v1.getLength());

/* v1.setAngle(Math.PI / 6);   // 30 degrees
v1.setLength(100);

console.log(v1.getX());
console.log(v1.getY()); */

var v2 = vector.create(3, 4),
	v3 = v1.add(v2);

console.log(v3.getX(), v3.getY()); // s/b 13, 9

var v4 = v1.multiply(2);
console.log(v1.getLength());
console.log(v4.getLength());  // s/b twice as long as v1.length

v1.addTo(v2);
console.log(v1.getX(), v1.getY());