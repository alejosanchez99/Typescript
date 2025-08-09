type Loc = {
  lat: number;
  long: number;
};

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 321, y: 23.334 });
