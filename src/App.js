import { useEffect, useState } from 'react';
import './App.css';
import Dice from './components/Dice/Dice';
import Token from './components/Token/Token';
import Win from './components/Win/Win';

function App() {
  const [diceNum, setDiceNum] = useState(null)
  const [token, setToken] = useState({
    red: {
      position1: null,
      position2: null,
      position3: null,
      position4: null,
      route: {
        min: 1,
        max: 51,
      }
    },
    yellow: {
      position1: null,
      position2: null,
      position3: null,
      position4: null,
      route: {
        min: 40,
        max: 38,
      }
    },
    blue: {
      position1: null,
      position2: null,
      position3: null,
      position4: null,
      route: {
        min: 27,
        max: 25,
      }
    },
    green: {
      position1: null,
      position2: null,
      position3: null,
      position4: null,
      route: {
        min: 14,
        max: 12,
      }
    }
  })
  const [redActive, setRedActive] = useState(true)
  const [yellowActive, setYellowActive] = useState(false)
  const [greenActive, setGreenActive] = useState(false)
  const [blueActive, setBlueActive] = useState(false)

  useEffect(() => {
    if (redActive) {
      if (token.red.position1 === null && token.red.position2 === null && token.red.position3 === null && token.red.position4 === null && diceNum !== 6 && diceNum !== null) {
        setTimeout(() => {
          setDiceNum(null)
          setRedActive(false);
          setYellowActive(true);
        }, 1300)
      }
    }
    if (yellowActive) {
      if (token.yellow.position1 === null && token.yellow.position2 === null && token.yellow.position3 === null && token.yellow.position4 === null && diceNum !== 6 && diceNum !== null) {
        setTimeout(() => {
          setDiceNum(null)
          setYellowActive(false)
          setBlueActive(true)
        }, 1300)
      }
    }
    if (blueActive) {
      if (token.blue.position1 === null && token.blue.position2 === null && token.blue.position3 === null && token.blue.position4 === null && diceNum !== 6 && diceNum !== null) {
        setTimeout(() => {
          setDiceNum(null)
          setBlueActive(false)
          setGreenActive(true)
        }, 1300)
      }
    }
    if (greenActive) {
      if (token.green.position1 === null && token.green.position2 === null && token.green.position3 === null && token.green.position4 === null && diceNum !== 6 && diceNum !== null) {
        setTimeout(() => {
          setDiceNum(null)
          setGreenActive(false)
          setRedActive(true)
        }, 1300)
      }
    }
  }, [diceNum])

  useEffect(() => {
    if (token.red.position1 === 106 && token.red.position2 === 106 && token.red.position3 === 106 && token.red.position4 === 106) {
      setRedActive(false)
      setYellowActive(true)
    }
    if (token.yellow.position1 === 406 && token.yellow.position2 === 406 && token.yellow.position3 === 406 && token.yellow.position4 === 406) {
      setYellowActive(false)
      setBlueActive(true)
    }
    if (token.blue.position1 === 306 && token.blue.position2 === 306 && token.blue.position3 === 306 && token.blue.position4 === 306) {
      setBlueActive(false)
      setGreenActive(true)
    }
    if (token.green.position1 === 206 && token.green.position2 === 206 && token.green.position3 === 206 && token.green.position4 === 206) {
      setGreenActive(false)
      setRedActive(true)
    }
  }, [redActive, yellowActive, blueActive, greenActive])

  const handleDiceRoll = () => {
    const randomNum = Math.ceil(Math.random() * 6);
    setDiceNum(randomNum);
  }

  const moveToken = (positionKey) => {
    if (redActive) {
      if (token.red[positionKey] === null && diceNum === 6) {
        setToken(prev => ({
          ...prev,
          red: {
            ...prev.red,
            [positionKey]: 1
          }
        }));
        setDiceNum(null)
      }
      if (token.red[positionKey] === null && diceNum !== 6 && diceNum !== null) {
        setToken(prev => ({
          ...prev,
        }));
      }
      if (token.red[positionKey] !== null && diceNum !== 6 && diceNum !== null) {
        let Position = token.red[positionKey] + diceNum

        if (Position <= 51) {
          if (Position === 1 || Position === 9 || Position === 14 || Position === 22 || Position === 27 || Position === 35 || Position === 40 || Position === 48) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              }
            }));
          } else if (Position === token.yellow.position1) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position1: null
              }
            }));
          } else if (Position === token.yellow.position2) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position2: null
              }
            }));
          } else if (Position === token.yellow.position3) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position3: null
              }
            }));
          } else if (Position === token.yellow.position4) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position4: null
              }
            }));
          } else if (Position === token.blue.position1) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position1: null
              }
            }));
          } else if (Position === token.blue.position2) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position2: null
              }
            }));
          } else if (Position === token.blue.position3) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position3: null
              }
            }));
          } else if (Position === token.blue.position4) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position4: null
              }
            }));
          } else if (Position === token.green.position1) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position1: null
              }
            }));
          } else if (Position === token.green.position2) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position2: null
              }
            }));
          } else if (Position === token.green.position3) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position3: null
              }
            }));
          } else if (Position === token.green.position4) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position > 51) {
          let newPosition = Position + 49
          setToken((prev) => ({
            ...prev,
            red: {
              ...prev.red,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (Position > 100 && Position <= 106) {
          setToken((prev) => ({
            ...prev,
            red: {
              ...prev.red,
              [positionKey]: Position
            }
          }));
          setDiceNum(null)
        }
        setRedActive(false)
        setYellowActive(true)
      }

      if (token.red[positionKey] !== null && diceNum === 6) {
        let Position = token.red[positionKey] + diceNum

        if (Position <= 51) {
          if (Position === 1 || Position === 9 || Position === 14 || Position === 22 || Position === 27 || Position === 35 || Position === 40 || Position === 48) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              }
            }));
          } else if (Position === token.yellow.position1) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position1: null
              }
            }));
          } else if (Position === token.yellow.position2) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position2: null
              }
            }));
          } else if (Position === token.yellow.position3) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position3: null
              }
            }));
          } else if (Position === token.yellow.position4) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position4: null
              }
            }));
          } else if (Position === token.blue.position1) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position1: null
              }
            }));
          } else if (Position === token.blue.position2) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position2: null
              }
            }));
          } else if (Position === token.blue.position3) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position3: null
              }
            }));
          } else if (Position === token.blue.position4) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position4: null
              }
            }));
          } else if (Position === token.green.position1) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position1: null
              }
            }));
          } else if (Position === token.green.position2) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position2: null
              }
            }));
          } else if (Position === token.green.position3) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position3: null
              }
            }));
          } else if (Position === token.green.position4) {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              red: {
                ...prev.red,
                [positionKey]: Position
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position > 51) {
          let newPosition = Position + 49
          setToken((prev) => ({
            ...prev,
            red: {
              ...prev.red,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
      }
    }


    if (yellowActive) {
      if (token.yellow[positionKey] === null && diceNum === 6) {
        setToken((prev) => ({
          ...prev,
          yellow: { ...prev.yellow, [positionKey]: 40 }
        }));
        setDiceNum(null)
      }

      if (token.yellow[positionKey] === null && diceNum !== 6 && diceNum !== null) {
        setToken(prev => ({
          ...prev,
        }));
      }

      if (token.yellow[positionKey] !== null && diceNum !== 6 && diceNum !== null) {
        let Position = token.yellow[positionKey] + diceNum;
        if (Position <= 52) {
          if (Position === 40 || Position === 48) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              }
            }));
          } else if (Position === token.red.position1) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position1: null
              }
            }));
          } else if (Position === token.red.position2) {
            setToken((prev) => ({
              ...prev,
              yelllow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position2: null
              }
            }));
          } else if (Position === token.red.position3) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position3: null
              }
            }));
          } else if (Position === token.red.position4) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position4: null
              }
            }));
          } else if (Position === token.blue.position1) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position1: null
              }
            }));
          } else if (Position === token.blue.position2) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position2: null
              }
            }));
          } else if (Position === token.blue.position3) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position3: null
              }
            }));
          } else if (Position === token.blue.position4) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position4: null
              }
            }));
          } else if (Position === token.green.position1) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position1: null
              }
            }));
          } else if (Position === token.green.position2) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position2: null
              }
            }));
          } else if (Position === token.green.position3) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position3: null
              }
            }));
          } else if (Position === token.green.position4) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position > 52) {
          let newPosition = Position - 52

          if (newPosition === 1 || newPosition === 9 || newPosition === 14 || newPosition === 22 || newPosition === 27 || newPosition === 35) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              }
            }));
          } else if (newPosition === token.red.position1) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position1: null
              }
            }));
          } else if (newPosition === token.red.position2) {
            setToken((prev) => ({
              ...prev,
              yelllow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position2: null
              }
            }));
          } else if (newPosition === token.red.position3) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position3: null
              }
            }));
          } else if (newPosition === token.red.position4) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position4: null
              }
            }));
          } else if (newPosition === token.blue.position1) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position1: null
              }
            }));
          } else if (newPosition === token.blue.position2) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position2: null
              }
            }));
          } else if (newPosition === token.blue.position3) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position3: null
              }
            }));
          } else if (newPosition === token.blue.position4) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position4: null
              }
            }));
          } else if (newPosition === token.green.position1) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position1: null
              }
            }));
          } else if (newPosition === token.green.position2) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position2: null
              }
            }));
          } else if (newPosition === token.green.position3) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position3: null
              }
            }));
          } else if (newPosition === token.green.position4) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position === 39) {
          let newPosition = Position += 362
          setToken((prev) => ({
            ...prev,
            yellow: {
              ...prev.yellow,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (Position > 400 && Position <= 406) {
          setToken((prev) => ({
            ...prev,
            yellow: {
              ...prev.yellow,
              [positionKey]: Position
            }
          }));
          setDiceNum(null)
        }
        setYellowActive(false)
        setBlueActive(true)
      }

      //when dice number is 6 and not from home 

      if (token.yellow[positionKey] !== null && diceNum === 6) {
        let Position = token.yellow[positionKey] + diceNum;
        if (Position <= 52) {
          if (Position === 40 || Position === 48) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              }
            }));
          } else if (Position === token.red.position1) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position1: null
              }
            }));
          } else if (Position === token.red.position2) {
            setToken((prev) => ({
              ...prev,
              yelllow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position2: null
              }
            }));
          } else if (Position === token.red.position3) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position3: null
              }
            }));
          } else if (Position === token.red.position4) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position4: null
              }
            }));
          } else if (Position === token.blue.position1) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position1: null
              }
            }));
          } else if (Position === token.blue.position2) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position2: null
              }
            }));
          } else if (Position === token.blue.position3) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position3: null
              }
            }));
          } else if (Position === token.blue.position4) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position4: null
              }
            }));
          } else if (Position === token.green.position1) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position1: null
              }
            }));
          } else if (Position === token.green.position2) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position2: null
              }
            }));
          } else if (Position === token.green.position3) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position3: null
              }
            }));
          } else if (Position === token.green.position4) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: Position
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position > 52) {
          let newPosition = Position - 52

          if (newPosition === 1 || newPosition === 9 || newPosition === 14 || newPosition === 22 || newPosition === 27 || newPosition === 35) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              }
            }));
          } else if (newPosition === token.red.position1) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position1: null
              }
            }));
          } else if (newPosition === token.red.position2) {
            setToken((prev) => ({
              ...prev,
              yelllow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position2: null
              }
            }));
          } else if (newPosition === token.red.position3) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position3: null
              }
            }));
          } else if (newPosition === token.red.position4) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position4: null
              }
            }));
          } else if (newPosition === token.blue.position1) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position1: null
              }
            }));
          } else if (newPosition === token.blue.position2) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position2: null
              }
            }));
          } else if (newPosition === token.blue.position3) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position3: null
              }
            }));
          } else if (newPosition === token.blue.position4) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position4: null
              }
            }));
          } else if (newPosition === token.green.position1) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position1: null
              }
            }));
          } else if (newPosition === token.green.position2) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position2: null
              }
            }));
          } else if (newPosition === token.green.position3) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position3: null
              }
            }));
          } else if (newPosition === token.green.position4) {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              yellow: {
                ...prev.yellow,
                [positionKey]: newPosition
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position === 39) {
          let newPosition = Position += 362
          setToken((prev) => ({
            ...prev,
            yellow: {
              ...prev.yellow,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
      }

    }


    if (blueActive) {
      if (token.blue[positionKey] === null && diceNum === 6) {
        setToken((prev) => ({
          ...prev,
          blue: { ...prev.blue, [positionKey]: 27 }
        }));
        setDiceNum(null)
      }

      if (token.blue[positionKey] === null && diceNum !== 6 && diceNum !== null) {
        setToken(prev => ({
          ...prev,
        }));
      }

      if (token.blue[positionKey] !== null && diceNum !== 6 && diceNum !== null) {
        let Position = token.blue[positionKey] + diceNum;
        if (Position <= 52) {
          if (Position === 27 || Position === 35 || Position === 40 || Position === 48) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              }
            }));
          } else if (Position === token.red.position1) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position1: null
              }
            }));
          } else if (Position === token.red.position2) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position2: null
              }
            }));
          } else if (Position === token.red.position3) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position3: null
              }
            }));
          } else if (Position === token.red.position4) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position4: null
              }
            }));
          } else if (Position === token.yellow.position1) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position1: null
              }
            }));
          } else if (Position === token.yellow.position2) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position2: null
              }
            }));
          } else if (Position === token.yellow.position3) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position3: null
              }
            }));
          } else if (Position === token.yellow.position4) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position4: null
              }
            }));
          } else if (Position === token.green.position1) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position1: null
              }
            }));
          } else if (Position === token.green.position2) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position2: null
              }
            }));
          } else if (Position === token.green.position3) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position3: null
              }
            }));
          } else if (Position === token.green.position4) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position > 52) {
          let newPosition = Position - 52

          if (newPosition === 1 || newPosition === 9 || newPosition === 14 || newPosition === 22) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              }
            }));
          } else if (newPosition === token.red.position1) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position1: null
              }
            }));
          } else if (newPosition === token.red.position2) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position2: null
              }
            }));
          } else if (newPosition === token.red.position3) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position3: null
              }
            }));
          } else if (newPosition === token.red.position4) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position4: null
              }
            }));
          } else if (newPosition === token.yellow.position1) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position1: null
              }
            }));
          } else if (newPosition === token.yellow.position2) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position2: null
              }
            }));
          } else if (newPosition === token.yellow.position3) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position3: null
              }
            }));
          } else if (newPosition === token.yellow.position4) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position4: null
              }
            }));
          } else if (newPosition === token.green.position1) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position1: null
              }
            }));
          } else if (newPosition === token.green.position2) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position2: null
              }
            }));
          } else if (newPosition === token.green.position3) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position3: null
              }
            }));
          } else if (newPosition === token.green.position4) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position === 26) {
          let newPosition = Position += 275
          setToken((prev) => ({
            ...prev,
            blue: {
              ...prev.blue,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (Position > 300 && Position <= 306) {
          setToken((prev) => ({
            ...prev,
            blue: {
              ...prev.blue,
              [positionKey]: Position
            }
          }));
          setDiceNum(null)
        }
        setBlueActive(false)
        setGreenActive(true)
      }
      // when dice number equal to 6

      if (token.blue[positionKey] !== null && diceNum === 6) {
        let Position = token.blue[positionKey] + diceNum;
        if (Position <= 52) {
          if (Position === 27 || Position === 35 || Position === 40 || Position === 48) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              }
            }));
          } else if (Position === token.red.position1) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position1: null
              }
            }));
          } else if (Position === token.red.position2) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position2: null
              }
            }));
          } else if (Position === token.red.position3) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position3: null
              }
            }));
          } else if (Position === token.red.position4) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position4: null
              }
            }));
          } else if (Position === token.yellow.position1) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position1: null
              }
            }));
          } else if (Position === token.yellow.position2) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position2: null
              }
            }));
          } else if (Position === token.yellow.position3) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position3: null
              }
            }));
          } else if (Position === token.yellow.position4) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position4: null
              }
            }));
          } else if (Position === token.green.position1) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position1: null
              }
            }));
          } else if (Position === token.green.position2) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position2: null
              }
            }));
          } else if (Position === token.green.position3) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position3: null
              }
            }));
          } else if (Position === token.green.position4) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              },
              green: {
                ...prev.green,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: Position
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position > 52) {
          let newPosition = Position - 52

          if (newPosition === 1 || newPosition === 9 || newPosition === 14 || newPosition === 22) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              }
            }));
          } else if (newPosition === token.red.position1) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position1: null
              }
            }));
          } else if (newPosition === token.red.position2) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position2: null
              }
            }));
          } else if (newPosition === token.red.position3) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position3: null
              }
            }));
          } else if (newPosition === token.red.position4) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position4: null
              }
            }));
          } else if (newPosition === token.yellow.position1) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position1: null
              }
            }));
          } else if (newPosition === token.yellow.position2) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position2: null
              }
            }));
          } else if (newPosition === token.yellow.position3) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position3: null
              }
            }));
          } else if (newPosition === token.yellow.position4) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position4: null
              }
            }));
          } else if (newPosition === token.green.position1) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position1: null
              }
            }));
          } else if (newPosition === token.green.position2) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position2: null
              }
            }));
          } else if (newPosition === token.green.position3) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position3: null
              }
            }));
          } else if (newPosition === token.green.position4) {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              },
              green: {
                ...prev.green,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              blue: {
                ...prev.blue,
                [positionKey]: newPosition
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position === 26) {
          let newPosition = Position += 275
          setToken((prev) => ({
            ...prev,
            blue: {
              ...prev.blue,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
      }

    }

    if (greenActive) {
      if (token.green[positionKey] === null && diceNum === 6) {
        setToken((prev) => ({
          ...prev,
          green: { ...prev.green, [positionKey]: 14 }
        }));
        setDiceNum(null)
      }
      if (token.green[positionKey] === null && diceNum !== 6 && diceNum !== null) {
        setToken(prev => ({
          ...prev,
        }));
      }

      if (token.green[positionKey] !== null && diceNum !== 6 && diceNum !== null) {
        let Position = token.green[positionKey] + diceNum;
        if (Position <= 52) {
          if (Position === 14 || Position === 22 || Position === 27 || Position === 35 || Position === 40 || Position === 48) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              }
            }));
          } else if (Position === token.red.position1) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position1: null
              }
            }));
          } else if (Position === token.red.position2) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position2: null
              }
            }));
          } else if (Position === token.red.position3) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position3: null
              }
            }));
          } else if (Position === token.red.position4) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position4: null
              }
            }));
          } else if (Position === token.yellow.position1) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position1: null
              }
            }));
          } else if (Position === token.yellow.position2) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position2: null
              }
            }));
          } else if (Position === token.yellow.position3) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position3: null
              }
            }));
          } else if (Position === token.yellow.position4) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position4: null
              }
            }));
          } else if (Position === token.blue.position1) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position1: null
              }
            }));
          } else if (Position === token.blue.position2) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position2: null
              }
            }));
          } else if (Position === token.blue.position3) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position3: null
              }
            }));
          } else if (Position === token.blue.position4) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position > 52) {
          let newPosition = Position - 52

          if (newPosition === 1 || newPosition === 9) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              }
            }));
          } else if (newPosition === token.red.position1) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position1: null
              }
            }));
          } else if (newPosition === token.red.position2) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position2: null
              }
            }));
          } else if (newPosition === token.red.position3) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position3: null
              }
            }));
          } else if (newPosition === token.red.position4) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position4: null
              }
            }));
          } else if (newPosition === token.yellow.position1) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position1: null
              }
            }));
          } else if (newPosition === token.yellow.position2) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position2: null
              }
            }));
          } else if (newPosition === token.yellow.position3) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position3: null
              }
            }));
          } else if (newPosition === token.yellow.position4) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position4: null
              }
            }));
          } else if (newPosition === token.blue.position1) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position1: null
              }
            }));
          } else if (newPosition === token.blue.position2) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position2: null
              }
            }));
          } else if (newPosition === token.blue.position3) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position3: null
              }
            }));
          } else if (newPosition === token.blue.position4) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position === 13) {
          let newPosition = Position += 188
          setToken((prev) => ({
            ...prev,
            green: {
              ...prev.green,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (Position > 200 && Position <= 206) {
          setToken((prev) => ({
            ...prev,
            green: {
              ...prev.green,
              [positionKey]: Position
            }
          }));
          setDiceNum(null)
        }
        setGreenActive(false)
        setRedActive(true)
      }

      //when 6 but run from game token 
      if (token.green[positionKey] !== null && diceNum === 6) {
        let Position = token.green[positionKey] + diceNum;
        if (Position <= 52) {
          if (Position === 14 || Position === 22 || Position === 27 || Position === 35 || Position === 40 || Position === 48) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              }
            }));
          } else if (Position === token.red.position1) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position1: null
              }
            }));
          } else if (Position === token.red.position2) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position2: null
              }
            }));
          } else if (Position === token.red.position3) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position3: null
              }
            }));
          } else if (Position === token.red.position4) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              red: {
                ...prev.red,
                position4: null
              }
            }));
          } else if (Position === token.yellow.position1) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position1: null
              }
            }));
          } else if (Position === token.yellow.position2) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position2: null
              }
            }));
          } else if (Position === token.yellow.position3) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position3: null
              }
            }));
          } else if (Position === token.yellow.position4) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              yellow: {
                ...prev.yellow,
                position4: null
              }
            }));
          } else if (Position === token.blue.position1) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position1: null
              }
            }));
          } else if (Position === token.blue.position2) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position2: null
              }
            }));
          } else if (Position === token.blue.position3) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position3: null
              }
            }));
          } else if (Position === token.blue.position4) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              },
              blue: {
                ...prev.blue,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: Position
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position > 52) {
          let newPosition = Position - 52

          if (newPosition === 1 || newPosition === 9) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              }
            }));
          } else if (newPosition === token.red.position1) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position1: null
              }
            }));
          } else if (newPosition === token.red.position2) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position2: null
              }
            }));
          } else if (newPosition === token.red.position3) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position3: null
              }
            }));
          } else if (newPosition === token.red.position4) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              red: {
                ...prev.red,
                position4: null
              }
            }));
          } else if (newPosition === token.yellow.position1) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position1: null
              }
            }));
          } else if (newPosition === token.yellow.position2) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position2: null
              }
            }));
          } else if (newPosition === token.yellow.position3) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position3: null
              }
            }));
          } else if (newPosition === token.yellow.position4) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              yellow: {
                ...prev.yellow,
                position4: null
              }
            }));
          } else if (newPosition === token.blue.position1) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position1: null
              }
            }));
          } else if (newPosition === token.blue.position2) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position2: null
              }
            }));
          } else if (newPosition === token.blue.position3) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position3: null
              }
            }));
          } else if (newPosition === token.blue.position4) {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              },
              blue: {
                ...prev.blue,
                position4: null
              }
            }));
          } else {
            setToken((prev) => ({
              ...prev,
              green: {
                ...prev.green,
                [positionKey]: newPosition
              }
            }))
          }
          setDiceNum(null)
        }
        if (Position === 13) {
          let newPosition = Position += 188
          setToken((prev) => ({
            ...prev,
            green: {
              ...prev.green,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
      }

    }
  }

  return (
    <div className="main-container">
      <div className="left-box">

        <div className="user-info">
          {redActive ? <div className={diceNum ? "disable-dice" : "dice-box"}><Dice id="dice1" onRoll={() => handleDiceRoll("dice1")} diceNum={diceNum} /></div> : <div className="dice-box"></div>}
          <div className="user-box">
            <div className="user-dp-box">
              {token.red.position1 && token.red.position2 && token.red.position3 && token.red.position4 === 106 ? <Win /> :
                <img className="user-dp" src='https://static.vecteezy.com/system/resources/previews/015/129/999/original/game-user-icon-png.png' />}
            </div>
            <div className="userName">userName</div>
          </div>
        </div>

        <div className="user-info">
          {yellowActive ? <div className={diceNum ? "disable-dice" : "dice-box"}><Dice id="dice2" onRoll={() => handleDiceRoll("dice2")} diceNum={diceNum} /></div> : <div className="dice-box"></div>}
          <div className="user-box">
            <div className="user-dp-box">
              {token.yellow.position1 && token.yellow.position2 && token.yellow.position3 && token.yellow.position4 === 406 ? <Win /> :
                <img className="user-dp" src='https://static.vecteezy.com/system/resources/previews/015/129/999/original/game-user-icon-png.png' />}
            </div>
            <div className="userName">userName</div>
          </div>
        </div>

      </div>
      <div className="ludo-box">
        <div className="upper-container">
          <div className="red-box">
            <div>
              <div id='red1' onClick={() => { moveToken("position1") }}><div className={redActive && diceNum === 6 ? 'blink' : ""}><Token color={token.red.position1 === null ? "red-token" : ""} /></div></div>
              <div id='red2' onClick={() => { moveToken("position2") }}><div className={redActive && diceNum === 6 ? 'blink' : ""}><Token color={token.red.position2 === null ? "red-token" : ""} /></div></div>
            </div>
            <div>
              <div id='red3' onClick={() => { moveToken("position3") }}><div className={redActive && diceNum === 6 ? 'blink' : ""}><Token color={token.red.position3 === null ? "red-token" : ""} /></div></div>
              <div id='red4' onClick={() => { moveToken("position4") }}><div className={redActive && diceNum === 6 ? 'blink' : ""}><Token color={token.red.position4 === null ? "red-token" : ""} /></div></div>
            </div>
          </div>
          <div className="red-green-middle-area">
            <div className="zone" id='11' >11
              {token.red.position1 === 11 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 11 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 11 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 11 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 11 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 11 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 11 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 11 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 11 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 11 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 11 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 11 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 11 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 11 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 11 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 11 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='12' >12
              {token.red.position1 === 12 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 12 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 12 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 12 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 12 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 12 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 12 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 12 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 12 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 12 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 12 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 12 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 12 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 12 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 12 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 12 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='13' >13
              {token.red.position1 === 13 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 13 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 13 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 13 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 13 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 13 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 13 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 13 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 13 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 13 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 13 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 13 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 13 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 13 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 13 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 13 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='10' >10
              {token.red.position1 === 10 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 10 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 10 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 10 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 10 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 10 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 10 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 10 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 10 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 10 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 10 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 10 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 10 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 10 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 10 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 10 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="green-fix-zone" id='201' >201
              {token.green.position1 === 201 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position2 === 201 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position3 === 201 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position4 === 201 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="green-fix-zone" id='14' >14
              {token.red.position1 === 14 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 14 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 14 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 14 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 14 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 14 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 14 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 14 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 14 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 14 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 14 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 14 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 14 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 14 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 14 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 14 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="red-fix-zone" id='9' >9
              {token.red.position1 === 9 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 9 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 9 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 9 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 9 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 9 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 9 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 9 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 9 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 9 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 9 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 9 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 9 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 9 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 9 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 9 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="green-fix-zone" id='202' >202
              {token.green.position1 === 202 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position2 === 202 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position3 === 202 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position4 === 202 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='15' >15
              {token.red.position1 === 15 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 15 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 15 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 15 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 15 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 15 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 15 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 15 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 15 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 15 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 15 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 15 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 15 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 15 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 15 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 15 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='8' >8
              {token.red.position1 === 8 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 8 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 8 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 8 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 8 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 8 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 8 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 8 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 8 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 8 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 8 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 8 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 8 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 8 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 8 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 8 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="green-fix-zone" id='203' >203
              {token.green.position1 === 203 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position2 === 203 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position3 === 203 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 203 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='16' >16
              {token.red.position1 === 16 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 16 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 16 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 16 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 16 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 16 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 16 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 16 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 16 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 16 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 16 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 16 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 16 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 16 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 16 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 16 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='7' >7
              {token.red.position1 === 7 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 7 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 7 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 7 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 7 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 7 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 7 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 7 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 7 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 7 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 7 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 7 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 7 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 7 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 7 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 7 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="green-fix-zone" id='204' >204
              {token.green.position1 === 204 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position2 === 204 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position3 === 204 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position4 === 204 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='17'>17
              {token.red.position1 === 17 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 17 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 17 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 17 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 17 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 17 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 17 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 17 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 17 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 17 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 17 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 17 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 17 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 17 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 17 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 17 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='6'>6
              {token.red.position1 === 6 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 6 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 6 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 6 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 6 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 6 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 6 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 6 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 6 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 6 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 6 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 6 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 6 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 6 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 6 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 6 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="green-fix-zone" id='205' >205
              {token.green.position1 === 205 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position2 === 205 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position3 === 205 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position4 === 205 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='18' >18
              {token.red.position1 === 18 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 18 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 18 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 18 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 18 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 18 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 18 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 18 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 18 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 18 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 18 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 18 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 18 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 18 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 18 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 18 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>
          </div>
          <div className="green-box">
            <div>
              <div onClick={() => { moveToken("position1") }}><div className={greenActive && diceNum === 6 ? "blink" : ""}><Token color={token.green.position1 === null ? "green-token" : ""} /></div></div>
              <div onClick={() => { moveToken("position2") }}><div className={greenActive && diceNum === 6 ? "blink" : ""}><Token color={token.green.position2 === null ? "green-token" : ""} /></div></div>
            </div>
            <div>
              <div onClick={() => { moveToken("position3") }}><div className={greenActive && diceNum === 6 ? "blink" : ""}><Token color={token.green.position3 === null ? "green-token" : ""} /></div></div>
              <div onClick={() => { moveToken("position4") }}><div className={greenActive && diceNum === 6 ? "blink" : ""}><Token color={token.green.position4 === null ? "green-token" : ""} /></div></div>
            </div>
          </div>
        </div>

        <div className="middle-container">
          <div className="red-yellow-middle-container">
            <div className="zone" id='52' >52
              {token.red.position1 === 52 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 52 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 52 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 52 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 52 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 52 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 52 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 52 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 52 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 52 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 52 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 52 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 52 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 52 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 52 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 52 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='51' >51
              {token.red.position1 === 51 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 51 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 51 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 51 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 51 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 51 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 51 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 51 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 51 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 51 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 51 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 51 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 51 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 51 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 51 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 51 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='50' >50
              {token.red.position1 === 50 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 50 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 50 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 50 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 50 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 50 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 50 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 50 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 50 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 50 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 50 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 50 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 50 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 50 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 50 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 50 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="red-fix-zone" id='1' >1
              {token.red.position1 === 1 && <div className={redActive && diceNum !== null ? "blink first-base-token" : "first-base-token"}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 1 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 1 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 1 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 1 && <div className={redActive && diceNum !== null ? "blink sec-base-token" : "sec-base-token"}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 1 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 1 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 1 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 1 && <div className={redActive && diceNum !== null ? "blink third-base-token" : "third-base-token"}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 1 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 1 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 1 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 1 && <div className={redActive && diceNum !== null ? "blink fourth-base-token" : "fourth-base-token"}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 1 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 1 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 1 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="red-fix-zone" id='101'>101
              {token.red.position1 === 101 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.red.position2 === 101 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.red.position3 === 101 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.red.position4 === 101 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='49' >49
              {token.red.position1 === 49 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 49 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 49 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 49 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 49 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 49 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 49 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 49 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 49 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 49 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 49 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 49 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 49 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 49 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 49 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 49 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='2' >2
              {token.red.position1 === 2 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 2 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 2 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 2 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 2 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 2 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 2 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 2 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 2 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 2 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 2 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 2 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 2 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 2 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 2 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 2 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="red-fix-zone" id='102'>102
              {token.red.position1 === 102 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.red.position2 === 102 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.red.position3 === 102 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.red.position4 === 102 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="yellow-fix-zone" id='48' >48
              {token.red.position1 === 48 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 48 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 48 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 48 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 48 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 48 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 48 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 48 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 48 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 48 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 48 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 48 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 48 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 48 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 48 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 48 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='3' >3
              {token.red.position1 === 3 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 3 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 3 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 3 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 3 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 3 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 3 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 3 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 3 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 3 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 3 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 3 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 3 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 3 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 3 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 3 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="red-fix-zone" id='103'>103
              {token.red.position1 === 103 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.red.position2 === 103 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.red.position3 === 103 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.red.position4 === 103 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='47' >47
              {token.red.position1 === 47 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 47 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 47 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 47 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 47 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 47 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 47 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 47 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 47 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 47 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 47 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 47 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 47 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 47 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 47 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 47 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='4' >4
              {token.red.position1 === 4 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 4 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 4 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 4 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 4 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 4 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 4 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 4 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 4 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 4 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 4 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 4 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 4 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 4 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 4 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 4 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="red-fix-zone" id='104'>104
              {token.red.position1 === 104 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.red.position2 === 104 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.red.position3 === 104 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.red.position4 === 104 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='46' >46
              {token.red.position1 === 46 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 46 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 46 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 46 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 46 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 46 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 46 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 46 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 46 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 46 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 46 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 46 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 46 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 46 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 46 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 46 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='5' >5
              {token.red.position1 === 5 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 5 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 5 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 5 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 5 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 5 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 5 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 5 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 5 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 5 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 5 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 5 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 5 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 5 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 5 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 5 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="red-fix-zone" id='105'>105
              {token.red.position1 === 105 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.red.position2 === 105 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.red.position3 === 105 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.red.position4 === 105 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='45' >45
              {token.red.position1 === 45 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 45 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 45 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 45 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 45 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 45 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 45 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 45 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 45 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 45 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 45 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 45 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 45 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 45 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 45 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 45 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>
          </div>

          <div className="middle-box-middle-container">
            <div className='upper-res-box'>
              {token.green.position1 === 206 && <div className='green-res-token'></div>}
              {token.green.position2 === 206 && <div className='green-res-token'></div>}
              {token.green.position3 === 206 && <div className='green-res-token'></div>}
              {token.green.position4 === 206 && <div className='green-res-token'></div>}
            </div>
            <div className='mid-res-box'>
              <div className='right-mid'>
                {token.red.position1 === 106 && <div className='red-res-token'></div>}
                {token.red.position2 === 106 && <div className='red-res-token'></div>}
                {token.red.position3 === 106 && <div className='red-res-token'></div>}
                {token.red.position4 === 106 && <div className='red-res-token'></div>}
              </div>
              <div className='left-mid'>
                {token.blue.position1 === 306 && <div className='blue-res-token'></div>}
                {token.blue.position2 === 306 && <div className='blue-res-token'></div>}
                {token.blue.position3 === 306 && <div className='blue-res-token'></div>}
                {token.blue.position4 === 306 && <div className='blue-res-token'></div>}

              </div>
            </div>
            <div className='lower-res-box'>
              {token.yellow.position1 === 406 && <div className='yellow-res-token'></div>}
              {token.yellow.position2 === 406 && <div className='yellow-res-token'></div>}
              {token.yellow.position3 === 406 && <div className='yellow-res-token'></div>}
              {token.yellow.position4 === 406 && <div className='yellow-res-token'></div>}
            </div>
          </div>

          <div className="green-blue-middle-container">
            <div className="zone" id='19' >19
              {token.red.position1 === 19 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 19 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 19 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 19 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 19 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 19 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 19 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 19 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 19 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 19 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 19 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 19 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 19 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 19 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 19 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 19 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>
            <div className="blue-fix-zone" id='305' >305
              {token.blue.position1 === 305 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position2 === 305 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position3 === 305 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position4 === 305 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='31' >31
              {token.red.position1 === 31 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 31 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 31 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 31 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 31 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 31 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 31 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 31 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 31 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 31 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 31 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 31 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 31 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 31 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 31 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 31 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='20' >20
              {token.red.position1 === 20 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 20 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 20 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 20 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 20 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 20 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 20 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 20 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 20 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 20 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 20 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 20 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 20 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 20 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 20 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 20 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="blue-fix-zone" id='304' >304
              {token.blue.position1 === 304 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position2 === 304 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position3 === 304 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position4 === 304 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='30' >30
              {token.red.position1 === 30 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 30 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 30 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 30 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 30 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 30 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 30 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 30 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 30 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 30 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 30 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 30 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 30 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 30 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 30 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 30 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='21' >21
              {token.red.position1 === 21 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 21 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 21 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 21 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 21 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 21 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 21 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 21 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 21 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 21 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 21 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 21 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 21 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 21 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 21 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 21 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="blue-fix-zone" id='303' >303
              {token.blue.position1 === 303 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position2 === 303 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position3 === 303 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position4 === 303 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='29' >29
              {token.red.position1 === 29 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 29 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 29 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 29 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 29 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 29 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 29 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 29 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 29 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 29 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 29 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 29 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 29 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 29 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 29 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 29 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="green-fix-zone" id='22' >22
              {token.red.position1 === 22 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 22 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 22 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 22 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 22 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 22 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 22 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 22 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 22 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 22 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 22 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 22 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 22 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 22 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 22 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 22 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="blue-fix-zone" id='302' >302
              {token.blue.position1 === 302 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position2 === 302 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position3 === 302 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position4 === 302 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='28' >28
              {token.red.position1 === 28 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 28 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 28 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 28 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 28 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 28 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 28 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 28 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 28 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 28 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 28 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 28 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 28 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 28 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 28 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 28 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='23' >23
              {token.red.position1 === 23 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 23 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 23 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 23 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 23 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 23 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 23 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 23 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 23 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 23 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 23 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 23 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 23 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 23 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 23 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 23 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="blue-fix-zone" id='301' >301
              {token.blue.position1 === 301 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position2 === 301 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position3 === 301 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position4 === 301 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="blue-fix-zone" id='27' >27
              {token.red.position1 === 27 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 27 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 27 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 27 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 27 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 27 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 27 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 27 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 27 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 27 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 27 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 27 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 27 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 27 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 27 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 27 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='24' >24
              {token.red.position1 === 24 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 24 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 24 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 24 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 24 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 24 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 24 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 24 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 24 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 24 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 24 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 24 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 24 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 24 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 24 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 24 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='25' >25
              {token.red.position1 === 25 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 25 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 25 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 25 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 25 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 25 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 25 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 25 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 25 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 25 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 25 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 25 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 25 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 25 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 25 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 25 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='26' >26
              {token.red.position1 === 26 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 26 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 26 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 26 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 26 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 26 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 26 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 26 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 26 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 26 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 26 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 26 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 26 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 26 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 26 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 26 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>
          </div>
        </div>

        <div className="lower-container">
          <div className="yellow-box">
            <div>
              <div onClick={() => { moveToken("position1") }}><div className={yellowActive && diceNum === 6 ? 'blink' : ""}><Token color={token.yellow.position1 === null ? "yellow-token" : ""} /></div></div>
              <div onClick={() => { moveToken("position2") }}><div className={yellowActive && diceNum === 6 ? 'blink' : ""}><Token color={token.yellow.position2 === null ? "yellow-token" : ""} /></div></div>
            </div>
            <div>
              <div onClick={() => { moveToken("position3") }}><div className={yellowActive && diceNum === 6 ? 'blink' : ""}><Token color={token.yellow.position3 === null ? "yellow-token" : ""} /></div></div>
              <div onClick={() => { moveToken("position4") }}><div className={yellowActive && diceNum === 6 ? 'blink' : ""}><Token color={token.yellow.position4 === null ? "yellow-token" : ""} /></div></div>
            </div>
          </div>
          <div className="yellow-blue-middle-area">
            <div className="zone" id='44' >44
              {token.red.position1 === 44 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 44 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 44 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 44 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 44 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 44 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 44 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 44 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 44 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 44 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 44 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 44 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 44 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 44 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 44 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 44 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="yellow-fix-zone" id='403' >405
              {token.yellow.position1 === 405 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position2 === 405 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position3 === 405 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position4 === 405 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='32' >32
              {token.red.position1 === 32 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 32 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 32 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 32 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 32 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 32 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 32 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 32 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 32 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 32 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 32 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 32 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 32 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 32 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 32 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 32 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='43' >43
              {token.red.position1 === 43 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 43 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 43 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 43 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 43 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 43 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 43 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 43 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 43 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 43 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 43 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 43 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 43 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 43 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 43 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 43 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="yellow-fix-zone" id='404' >404
              {token.yellow.position1 === 404 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position2 === 404 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position3 === 404 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position4 === 404 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='33' >33
              {token.red.position1 === 33 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 33 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 33 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 33 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 33 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 33 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 33 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 33 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 33 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 33 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 33 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 33 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 33 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 33 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 33 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 33 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='42' >42
              {token.red.position1 === 42 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 42 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 42 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 42 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 42 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 42 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 42 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 42 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 42 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 42 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 42 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 42 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 42 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 42 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 42 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 42 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="yellow-fix-zone" id='403' >403
              {token.yellow.position1 === 403 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position2 === 403 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position3 === 403 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position4 === 403 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='34' >34
              {token.red.position1 === 34 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 34 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 34 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 34 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 34 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 34 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 34 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 34 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 34 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 34 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 34 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 34 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 34 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 34 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 34 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 34 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='41' >41
              {token.red.position1 === 41 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 41 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 41 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 41 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 41 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 41 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 41 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 41 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 41 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 41 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 41 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 41 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 41 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 41 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 41 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 41 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="yellow-fix-zone" id='402' >402
              {token.yellow.position1 === 402 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position2 === 402 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position3 === 402 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position4 === 402 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="blue-fix-zone" id='35' >35
              {token.red.position1 === 35 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 35 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 35 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 35 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 35 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 35 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 35 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 35 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 35 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 35 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 35 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 35 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 35 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 35 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 35 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 35 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="yellow-fix-zone" id='40' >40
              {token.red.position1 === 40 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 40 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 40 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 40 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 40 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 40 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 40 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 40 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 40 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 40 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 40 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 40 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 40 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 40 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 40 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 40 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="yellow-fix-zone" id='401' >401
              {token.yellow.position1 === 401 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position2 === 401 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position3 === 401 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position4 === 401 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='36' >36
              {token.red.position1 === 36 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 36 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 36 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 36 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 36 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 36 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 36 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 36 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 36 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 36 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 36 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 36 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 36 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 36 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 36 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 36 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='39' >39
              {token.red.position1 === 39 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 39 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 39 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 39 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 39 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 39 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 39 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 39 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 39 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 39 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 39 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 39 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 39 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 39 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 39 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 39 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='38' >38
              {token.red.position1 === 38 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 38 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 38 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 38 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 38 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 38 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 38 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 38 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 38 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 38 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 38 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 38 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 38 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 38 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 38 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 38 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}
            </div>

            <div className="zone" id='37' >37
              {token.red.position1 === 37 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.yellow.position1 === 37 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.blue.position1 === 37 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position1") }} /></div>}
              {token.green.position1 === 37 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position1") }} /></div>}

              {token.red.position2 === 37 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.yellow.position2 === 37 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.blue.position2 === 37 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position2") }} /></div>}
              {token.green.position2 === 37 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position2") }} /></div>}

              {token.red.position3 === 37 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.yellow.position3 === 37 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.blue.position3 === 37 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position3") }} /></div>}
              {token.green.position3 === 37 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position3") }} /></div>}

              {token.red.position4 === 37 && <div className={redActive && diceNum !== null ? "blink" : ""}><Token color={"red-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.yellow.position4 === 37 && <div className={yellowActive && diceNum !== null ? "blink" : ""}><Token color={"yellow-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.blue.position4 === 37 && <div className={blueActive && diceNum !== null ? "blink" : ""}><Token color={"blue-token"} onClick={() => { moveToken("position4") }} /></div>}
              {token.green.position4 === 37 && <div className={greenActive && diceNum !== null ? "blink" : ""}><Token color={"green-token"} onClick={() => { moveToken("position4") }} /></div>}

            </div>
          </div>
          <div className="blue-box">
            <div>
              <div onClick={() => { moveToken("position1") }}><div className={blueActive && diceNum === 6 ? 'blink' : ""}><Token color={token.blue.position1 === null ? "blue-token" : ""} /></div></div>
              <div onClick={() => { moveToken("position2") }}><div className={blueActive && diceNum === 6 ? 'blink' : ""}><Token color={token.blue.position2 === null ? "blue-token" : ""} /></div></div>
            </div>
            <div>
              <div onClick={() => { moveToken("position3") }}><div className={blueActive && diceNum === 6 ? 'blink' : ""}><Token color={token.blue.position3 === null ? "blue-token" : ""} /></div></div>
              <div onClick={() => { moveToken("position4") }}><div className={blueActive && diceNum === 6 ? 'blink' : ""}><Token color={token.blue.position4 === null ? "blue-token" : ""} /></div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-box">
        <div className="user-info">
          <div className="user-box">
            <div className="user-dp-box">
              {token.green.position1 && token.green.position2 && token.green.position3 && token.green.position4 === 206 ? <Win /> :
                <img className="user-dp" src='https://static.vecteezy.com/system/resources/previews/015/129/999/original/game-user-icon-png.png' />}
            </div>
            <div className="userName">userName</div>
          </div>
          {greenActive ? <div className={diceNum ? "disable-dice" : "dice-box"}><Dice id="dice3" onRoll={() => handleDiceRoll("dice3")} diceNum={diceNum} /></div> : <div className="dice-box"></div>}
        </div>

        <div className="user-info">
          <div className="user-box">
            <div className="user-dp-box">
              {token.blue.position1 && token.blue.position2 && token.blue.position3 && token.blue.position4 === 306 ? <Win /> :
                <img className="user-dp" src='https://static.vecteezy.com/system/resources/previews/015/129/999/original/game-user-icon-png.png' />}
            </div>
            <div className="userName">userName</div>
          </div>
          {blueActive ? <div className={diceNum ? "disable-dice" : "dice-box"}><Dice id="dice4" onRoll={() => handleDiceRoll("dice4")} diceNum={diceNum} /></div> : <div className="dice-box"></div>}
        </div>
      </div>
    </div>
  );
}
export default App;