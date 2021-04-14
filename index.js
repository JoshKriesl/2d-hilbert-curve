export function point(size, d) {
  var rx, ry, cell = 1, x = 0, y = 0;
  while(cell < size) {
    rx = 1 & (d / 2);
    ry = 1 & (d ^ rx);
    let r = rotate(size, x, y, rx, ry);
    x = r[0], y = r[1];
    x += cell * rx;
    y += cell * ry;
    d /= 4;
    cell *= 2;
  }
  return [x, y];
}

export function index(order, x, y) {
  var rx, ry, cell = 2 ** order / 2, distance = 0;
  while(cell >= 1) {
    rx = x >= cell;
    ry = y >= cell;
    distance += cell ** 2 * ((3 * rx) ^ ry);
    let r = rotate(cell, x, y, rx, ry);
    x = r[0], y = r[1];
    cell /= 2;
  }
  return distance;
}

function rotate(n, x, y, rx, ry) {
  if (!ry) {
      if (rx) {
          x = n - 1 - x;
          y = n - 1 - y;
      }

      return [y, x]
  }
  return [x, y]
}
