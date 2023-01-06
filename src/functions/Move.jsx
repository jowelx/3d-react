import { MaxPositions } from "../constants/data";
 
function Move(key, setAnimate, animate, setSpawnCube) {
 
  if (key === 'up' && animate === false) {
 setAnimate(true);
  const interval = setInterval(() => {
    setSpawnCube(prevSpawnCube => {
      const newSpawnCube = [...prevSpawnCube];
      let shouldClearInterval = true; // asumimos que todos los elementos del array han alcanzado el límite inferior

      newSpawnCube.forEach((item, index) => {
        if (item.y < MaxPositions.top + 0.5) {
          item.y = MaxPositions.top;
        } else {
          item.y -= 0.2;
          shouldClearInterval = false; // si al menos un elemento del array aún no ha alcanzado el límite inferior, entonces no deberíamos detener el interval
        }
      });

      if (shouldClearInterval) {
        setAnimate(false);
        clearInterval(interval);
      }

      return newSpawnCube;
    });
  }, 0.1);
  }
 if (key === 'down' && animate === false) {
  setAnimate(true);

  const interval = setInterval(() => {
    setSpawnCube(prevSpawnCube => {
      const newSpawnCube = [...prevSpawnCube];
      let shouldClearInterval = true; // asumimos que todos los elementos del array han alcanzado el límite inferior

      newSpawnCube.forEach((item, index) => {
        if (item.y > MaxPositions.bottom - 0.5) {
          item.y = MaxPositions.bottom;
        } else {
          item.y += 0.2;
          shouldClearInterval = false; // si al menos un elemento del array aún no ha alcanzado el límite inferior, entonces no deberíamos detener el interval
        }
      });

      if (shouldClearInterval) {
        setAnimate(false);
        clearInterval(interval);
      }

      return newSpawnCube;
    });
  }, 0.1);
}
  if (key === 'left' && animate ===false) {
     setAnimate(true);

  const interval = setInterval(() => {
    setSpawnCube(prevSpawnCube => {
      const newSpawnCube = [...prevSpawnCube];
      let shouldClearInterval = true; // asumimos que todos los elementos del array han alcanzado el límite inferior

      newSpawnCube.forEach((item, index) => {
        if (item.x < MaxPositions.left + 0.5) {
          item.x = MaxPositions.left;
        } else {
          item.x -= 0.2;
          shouldClearInterval = false; // si al menos un elemento del array aún no ha alcanzado el límite inferior, entonces no deberíamos detener el interval
        }
      });

      if (shouldClearInterval) {
        setAnimate(false);
        clearInterval(interval);
      }

      return newSpawnCube;
    });
  }, 0.1);
  }
  if (key === 'right' && animate ===false) {
        setAnimate(true);

  const interval = setInterval(() => {
    setSpawnCube(prevSpawnCube => {
      const newSpawnCube = [...prevSpawnCube];
      let shouldClearInterval = true; // asumimos que todos los elementos del array han alcanzado el límite inferior

      newSpawnCube.forEach((item, index) => {
        if (item.x > MaxPositions.right - 0.5) {
          item.x = MaxPositions.right;
        } else {
          item.x += 0.2;
          shouldClearInterval = false; // si al menos un elemento del array aún no ha alcanzado el límite inferior, entonces no deberíamos detener el interval
        }
      });

      if (shouldClearInterval) {
        setAnimate(false);
        clearInterval(interval);
      }

      return newSpawnCube;
    });
  }, 0.1);
}
  return () => {
    clearInterval();
  };
}
export default Move;