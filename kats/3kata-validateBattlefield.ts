// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript

const validateBattlefield = (field: number[][]) => {
    const NOT_FILLED = 0;
    const shipMap = {
      4: 1,
      3: 2,
      2: 3,
      1: 4,
    };
  
    let knownCoordinates: string[] = [];
  
    const checkCoordinate = (y: number, x: number) => {
      const yMax = field.length - 1;
      const xMax = field[0].length - 1;
  
      const yNotValid = y < 0 || y > yMax;
      const xNotValid = x < 0 || x > xMax;
  
      if (yNotValid || xNotValid) {
        return NOT_FILLED;
      }
  
      return field[y][x];
    };
  
    const diagonalCheck = (y: number, x: number) => {
      const upperLeft = checkCoordinate(y - 1, x - 1);
      const upperRight = checkCoordinate(y - 1, x + 1);
      const bottomLeft = checkCoordinate(y + 1, x - 1);
      const bottomRight = checkCoordinate(y + 1, x + 1);
  
      return !upperLeft && !upperRight && !bottomLeft && !bottomRight;
    };
  
    const getNeighbors = (y: number, x: number) => {
      const top = checkCoordinate(y - 1, x);
      const right = checkCoordinate(y, x + 1);
      const bottom = checkCoordinate(y + 1, x);
      const left = checkCoordinate(y, x - 1);
  
      const notValid =
        (top && right) || (right && bottom) || (bottom && left) || (left && top);
  
      if (notValid) {
        return false;
      }
      const neighbors = [top, right, bottom, left];
      const coordinates = [
        [y - 1, x],
        [y, x + 1],
        [y + 1, x],
        [y, x - 1],
      ]
        .filter((_, index) => !!neighbors[index])
        .map(([y, x]) => `${y},${x}`);
  
      return coordinates;
    };
  
    const identifyShip = (y: number, x: number, cache: string[] = []) => {
      const coordinates = getNeighbors(y, x);
      const isNewCoordinates = knownCoordinates.every(
        (item) => !cache.includes(item)
      );
  
      if (!isNewCoordinates) {
        cache = [];
      }
  
      if (!coordinates || cache.length > 4) {
        return false;
      }
  
      if (!field[y][x] && isNewCoordinates) {
        if (cache.length) {
          shipMap[cache.length] -= 1;
          knownCoordinates = [...new Set([...knownCoordinates, ...cache])];
        }
  
        return true;
      }
  
      const horizontalDirection =
        coordinates.length && y === +coordinates[0].split(",")[0];
  
      const yNew = horizontalDirection ? y : y + 1;
      const xNew = horizontalDirection ? x + 1 : x;
  
      return identifyShip(yNew, xNew, [...new Set([...cache, ...coordinates])]);
    };
  
    for (let y = 0; y < field.length; y++) {
      for (let x = 0; x < field[y].length; x++) {
        const cell = field[y][x];
  
        if (cell) {
          if (!diagonalCheck(y, x)) {
            return false;
          }
          const valid = identifyShip(y, x, [`${y},${x}`]);
  
          if (!valid) {
            return false;
          }
        }
      }
    }
  
    return Object.keys(shipMap).every((key) => !shipMap[key]);
  };
  
  console.log(
    validateBattlefield([
      [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])
  ); // false
  
  console.log(
    validateBattlefield([
      [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])
  ); // true
  