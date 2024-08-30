import React, { useState, useEffect } from 'react'
import './Ludo.css'
import Dice from '../Dice/Dice'
import Token from '../Token/Token'
import Win from '../Win/Win'
import ActiveToken from '../ActiveToken/ActiveToken'
import { useParams } from 'react-router-dom'

export default function Ludo() {
  const { param } = useParams()
  const [diceNum, setDiceNum] = useState(null)
  const [token, setToken] = useState({
    red: {
      position1: null,
      position2: null,
      position3: null,
      position4: null,
    },
    yellow: {
      position1: null,
      position2: null,
      position3: null,
      position4: null,
    },
    blue: {
      position1: null,
      position2: null,
      position3: null,
      position4: null,
    },
    green: {
      position1: null,
      position2: null,
      position3: null,
      position4: null,
    }
  })
  const [redActive, setRedActive] = useState(true)
  const [yellowActive, setYellowActive] = useState(false)
  const [greenActive, setGreenActive] = useState(false)
  const [blueActive, setBlueActive] = useState(false)

  let activeColor = (() => {
    if (redActive) {
      return "red-token"
    }
    if (yellowActive) {
      return "yellow-token"
    }
    if (blueActive) {
      return "blue-token"
    }
    if (greenActive) {
      return "green-token"
    }
  })()

  useEffect(() => {
    if (param === '2player') {
      console.log("i am in effect")
      if (redActive) {
        let hasCompletedPath = Object.values(token.red).filter((val) => val === 106)
        let nullPositions = Object.values(token.red).filter((val) => val === null)
        let otherPos = Object.values(token.red).filter((val) => val !== null && val !== 106)
        if (token.red.position1 === null && token.red.position2 === null && token.red.position3 === null && token.red.position4 === null && diceNum !== 6 && diceNum !== null
          || hasCompletedPath && nullPositions && otherPos.length === 0 && diceNum !== 6 && diceNum !== null) {
          setTimeout(() => {
            setDiceNum(null)
            setRedActive(false);
            setBlueActive(true);
          }, 1300)
        }
      }
      if (blueActive) {
        let hasCompletedPath = Object.values(token.blue).filter((val) => val === 306)
        let nullPositions = Object.values(token.blue).filter((val) => val === null)
        let otherPos = Object.values(token.blue).filter((val) => val !== null && val !== 306)
        if (token.blue.position1 === null && token.blue.position2 === null && token.blue.position3 === null && token.blue.position4 === null && diceNum !== 6 && diceNum !== null
          || hasCompletedPath && nullPositions && otherPos.length === 0 && diceNum !== 6 && diceNum !== null) {
          setTimeout(() => {
            setDiceNum(null)
            setBlueActive(false)
            setRedActive(true)
          }, 1300)
        }
      }
    }
    if (param === '4player') {
      if (redActive) {
        let hasCompletedPath = Object.values(token.red).filter((val) => val === 106)
        let nullPositions = Object.values(token.red).filter((val) => val === null)
        let otherPos = Object.values(token.red).filter((val) => val !== null && val !== 106)
        if (token.red.position1 === null && token.red.position2 === null && token.red.position3 === null && token.red.position4 === null && diceNum !== 6 && diceNum !== null
          || hasCompletedPath && nullPositions && otherPos.length === 0 && diceNum !== 6 && diceNum !== null) {
          setTimeout(() => {
            setDiceNum(null)
            setRedActive(false);
            setYellowActive(true);
          }, 1300)
        }
      }
      if (yellowActive) {
        let hasCompletedPath = Object.values(token.yellow).filter((val) => val === 406)
        let nullPositions = Object.values(token.yellow).filter((val) => val === null)
        let otherPos = Object.values(token.yellow).filter((val) => val !== null && val !== 406)
        if (token.yellow.position1 === null && token.yellow.position2 === null && token.yellow.position3 === null && token.yellow.position4 === null && diceNum !== 6 && diceNum !== null
          || hasCompletedPath && nullPositions && otherPos.length === 0 && diceNum !== 6 && diceNum !== null) {
          setTimeout(() => {
            setDiceNum(null)
            setYellowActive(false)
            setBlueActive(true)
          }, 1300)
        }
      }
      if (blueActive) {
        let hasCompletedPath = Object.values(token.blue).filter((val) => val === 306)
        let nullPositions = Object.values(token.blue).filter((val) => val === null)
        let otherPos = Object.values(token.blue).filter((val) => val !== null && val !== 306)
        if (token.blue.position1 === null && token.blue.position2 === null && token.blue.position3 === null && token.blue.position4 === null && diceNum !== 6 && diceNum !== null
          || hasCompletedPath && nullPositions && otherPos.length === 0 && diceNum !== 6 && diceNum !== null) {
          setTimeout(() => {
            setDiceNum(null)
            setBlueActive(false)
            setGreenActive(true)
          }, 1300)
        }
      }
      if (greenActive) {
        let hasCompletedPath = Object.values(token.green).filter((val) => val === 206)
        let nullPositions = Object.values(token.green).filter((val) => val === null)
        let otherPos = Object.values(token.green).filter((val) => val !== null && val !== 206)
        if (token.green.position1 === null && token.green.position2 === null && token.green.position3 === null && token.green.position4 === null && diceNum !== 6 && diceNum !== null
          || hasCompletedPath && nullPositions && otherPos.length === 0 && diceNum !== 6 && diceNum !== null) {
          setTimeout(() => {
            setDiceNum(null)
            setGreenActive(false)
            setRedActive(true)
          }, 1300)
        }
      }
    }
  }, [diceNum, token, param])

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

        if (Position >= 1 && Position <= 51) {
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
        if (Position > 51 && Position < 100) {
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
        if (Position > 106) {
          setToken((prev) => ({
            ...prev,
          }));
          setDiceNum(null)
        }
        setRedActive(false)
        param === '2player' ? setBlueActive(true) : setYellowActive(true)
      }

      if (token.red[positionKey] !== null && diceNum === 6) {
        let Position = token.red[positionKey] + diceNum

        if (Position >= 1 && Position <= 51) {
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
        if (Position > 52 && Position < 100) {
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
        if (Position >= 101) {
          setToken((prev) => ({
            ...prev,
          }));
          setDiceNum(null)
        }
      }
    }
    // yellow

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
        let prevPos = token.yellow[positionKey]
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
              yellow: {
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
        if (Position > 52 && Position < 400) {
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
              yellow: {
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
        //new conditions
        if (prevPos === 34 && diceNum === 5) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 362
          setToken((prev) => ({
            ...prev,
            yellow: {
              ...prev.yellow,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (prevPos === 35 && diceNum >= 4) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 362
          setToken((prev) => ({
            ...prev,
            yellow: {
              ...prev.yellow,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (prevPos === 36 && diceNum >= 3) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 362
          setToken((prev) => ({
            ...prev,
            yellow: {
              ...prev.yellow,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (prevPos === 37 && diceNum >= 2) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 362
          setToken((prev) => ({
            ...prev,
            yellow: {
              ...prev.yellow,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (prevPos === 38 && diceNum >= 1) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 362
          setToken((prev) => ({
            ...prev,
            yellow: {
              ...prev.yellow,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        setYellowActive(false)
        setBlueActive(true)
      }
      // when dice number equal to 6

      if (token.yellow[positionKey] !== null && diceNum === 6) {
        let prevPos = token.yellow[positionKey]
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
              yellow: {
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
        if (Position > 52 && Position < 400) {
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
              yellow: {
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
        //new conditions
        if (prevPos >= 33 && prevPos <= 38) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 362
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
      if (token.yellow[positionKey] > 400 && diceNum < 6 && diceNum !== null) {
        let Position = token.yellow[positionKey] + diceNum
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
        if (Position > 406) {
          setToken((prev) => ({
            ...prev,
          }));
          setDiceNum(null)
        }
        setYellowActive(false)
        setBlueActive(true)
      }
      if (token.yellow[positionKey] >= 401 && diceNum === 6) {
        setToken((prev) => ({
          ...prev,
        }));
        setDiceNum(null)
      }


    }
    //blue

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
        let prevPos = token.blue[positionKey]
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
        if (Position > 52 && Position < 300) {
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
        //new conditions
        if (prevPos === 21 && diceNum === 5) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 275
          setToken((prev) => ({
            ...prev,
            blue: {
              ...prev.blue,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (prevPos === 22 && diceNum >= 4) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 275
          setToken((prev) => ({
            ...prev,
            blue: {
              ...prev.blue,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (prevPos === 23 && diceNum >= 3) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 275
          setToken((prev) => ({
            ...prev,
            blue: {
              ...prev.blue,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (prevPos === 24 && diceNum >= 2) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 275
          setToken((prev) => ({
            ...prev,
            blue: {
              ...prev.blue,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (prevPos === 25 && diceNum >= 1) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 275
          setToken((prev) => ({
            ...prev,
            blue: {
              ...prev.blue,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        setBlueActive(false)
        param === '2player' ? setRedActive(true) : setGreenActive(true)
      }
      // when dice number equal to 6

      if (token.blue[positionKey] !== null && diceNum === 6) {
        console.log("inside blue")
        let prevPos = token.blue[positionKey]
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
        if (Position > 52 && Position < 300) {
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
        //new conditions
        if (prevPos >= 20 && prevPos <= 25) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 275
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
      if (token.blue[positionKey] > 300 && diceNum < 6 && diceNum !== null) {
        let Position = token.blue[positionKey] + diceNum
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
        if (Position > 306) {
          setToken((prev) => ({
            ...prev,
          }));
          setDiceNum(null)
        }
        setBlueActive(false)
        param === '2player' ? setRedActive(true) : setGreenActive(true)
      }
      if (token.blue[positionKey] >= 301 && diceNum === 6) {
        setToken((prev) => ({
          ...prev,
        }));
        setDiceNum(null)
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
        let prevPos = token.green[positionKey]
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
        if (Position > 52 && Position < 200) {
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
        //new conditions
        if (prevPos === 8 && diceNum === 5) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 188
          setToken((prev) => ({
            ...prev,
            green: {
              ...prev.green,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (prevPos === 9 && diceNum >= 4) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 188
          setToken((prev) => ({
            ...prev,
            green: {
              ...prev.green,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (prevPos === 10 && diceNum >= 3) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 188
          setToken((prev) => ({
            ...prev,
            green: {
              ...prev.green,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (prevPos === 11 && diceNum >= 2) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 188
          setToken((prev) => ({
            ...prev,
            green: {
              ...prev.green,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        if (prevPos === 12 && diceNum >= 1) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 188
          setToken((prev) => ({
            ...prev,
            green: {
              ...prev.green,
              [positionKey]: newPosition
            }
          }));
          setDiceNum(null)
        }
        setGreenActive(false)
        setRedActive(true)
      }

      //when 6 but run from game token 
      if (token.green[positionKey] !== null && diceNum === 6) {
        console.log("inside green")
        let prevPos = token.green[positionKey]
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
        if (Position > 52 && Position < 200) {
          console.log("inside green > 52")
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
        //new conditions
        if (prevPos >= 7 && prevPos <= 12) {
          let nextPosition = prevPos + diceNum
          let newPosition = nextPosition += 188
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
      if (token.green[positionKey] > 200 && diceNum < 6 && diceNum !== null) {
        let Position = token.green[positionKey] + diceNum
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
        if (Position > 206) {
          setToken((prev) => ({
            ...prev,
          }));
          setDiceNum(null)
        }
        setGreenActive(false)
        setRedActive(true)
      }
      if (token.blue[positionKey] >= 201 && diceNum === 6) {
        setToken((prev) => ({
          ...prev,
        }));
        setDiceNum(null)
      }

    }
  }

  const getTokens = (pos) => {
    const activeTokens = []
    if (token.red.position1 === pos) {
      activeTokens.push({ styleClass: "red-token", token: "position1" })
    }
    if (token.red.position2 === pos) {
      activeTokens.push({ styleClass: "red-token", token: "position2" })
    }
    if (token.red.position3 === pos) {
      activeTokens.push({ styleClass: "red-token", token: "position3" })
    }
    if (token.red.position4 === pos) {
      activeTokens.push({ styleClass: "red-token", token: "position4" })
    }
    if (token.yellow.position1 === pos) {
      activeTokens.push({ styleClass: "yellow-token", token: "position1" })
    }
    if (token.yellow.position2 === pos) {
      activeTokens.push({ styleClass: "yellow-token", token: "position2" })
    }
    if (token.yellow.position3 === pos) {
      activeTokens.push({ styleClass: "yellow-token", token: "position3" })
    }
    if (token.yellow.position4 === pos) {
      activeTokens.push({ styleClass: "yellow-token", token: "position4" })
    }
    if (token.blue.position1 === pos) {
      activeTokens.push({ styleClass: "blue-token", token: "position1" })
    }
    if (token.blue.position2 === pos) {
      activeTokens.push({ styleClass: "blue-token", token: "position2" })
    }
    if (token.blue.position3 === pos) {
      activeTokens.push({ styleClass: "blue-token", token: "position3" })
    }
    if (token.blue.position4 === pos) {
      activeTokens.push({ styleClass: "blue-token", token: "position4" })
    }
    if (token.green.position1 === pos) {
      activeTokens.push({ styleClass: "green-token", token: "position1" })
    }
    if (token.green.position2 === pos) {
      activeTokens.push({ styleClass: "green-token", token: "position2" })
    }
    if (token.green.position3 === pos) {
      activeTokens.push({ styleClass: "green-token", token: "position3" })
    }
    if (token.green.position4 === pos) {
      activeTokens.push({ styleClass: "green-token", token: "position4" })
    }
    return activeTokens
  }

  return (
    <div className="main-container">
      <div className="upper-box">
        <div className="user-info">
          <div className="user-box">
            <div className="user-dp-box">
              {token.red.position1 && token.red.position2 && token.red.position3 && token.red.position4 === 106 ? <Win /> :
                <img className="user-dp" src='https://static.vecteezy.com/system/resources/previews/015/129/999/original/game-user-icon-png.png' />}
            </div>
            <div className="userName">userName</div>
          </div>
          {redActive ? <div className={diceNum ? "disable-dice" : "dice-box"}><Dice id="dice1" onRoll={() => handleDiceRoll("dice1")} diceNum={diceNum} /></div> : <div className="dice-box"></div>}
        </div>

        <div className="user-info">
          {greenActive ? <div className={diceNum ? "disable-dice" : "dice-box"}><Dice id="dice3" onRoll={() => handleDiceRoll("dice3")} diceNum={diceNum} /></div> : <div className="dice-box"></div>}
          <div className="user-box">
            <div className="user-dp-box">
              {token.green.position1 && token.green.position2 && token.green.position3 && token.green.position4 === 206 ? <Win /> :
                <img className="user-dp" src='https://static.vecteezy.com/system/resources/previews/015/129/999/original/game-user-icon-png.png' />}
            </div>
            <div className="userName">userName</div>
          </div>
        </div>

      </div>
      <div className="ludo-box">
        <div className="upper-container">
          <div className="red-box">
            <div className='inner-box-token1'><div id='red1' onClick={() => { moveToken("position1") }}><div className={redActive && diceNum === 6 ? 'blink' : ""}><Token color={token.red.position1 === null ? "red-token" : ""} /></div></div>
            </div>
            <div className='inner-box-token2'><div id='red2' onClick={() => { moveToken("position2") }}><div className={redActive && diceNum === 6 ? 'blink' : ""}><Token color={token.red.position2 === null ? "red-token" : ""} /></div></div>
            </div>
            <div className='inner-box-token3'><div id='red3' onClick={() => { moveToken("position3") }}><div className={redActive && diceNum === 6 ? 'blink' : ""}><Token color={token.red.position3 === null ? "red-token" : ""} /></div></div>
            </div>
            <div className='inner-box-token4'><div id='red4' onClick={() => { moveToken("position4") }}><div className={redActive && diceNum === 6 ? 'blink' : ""}><Token color={token.red.position4 === null ? "red-token" : ""} /></div></div>
            </div>
          </div>
          <div className="red-green-middle-area">
            <div className="ver-zone">
              <div className='ver-inner-zone' id='11'>
                {getTokens(11).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className='ver-inner-zone' id='12' >
                {getTokens(12).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className='ver-inner-zone' id='13' >
                {getTokens(13).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className="ver-zone">
              <div className='ver-inner-zone' id='10' >
                {getTokens(10).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-fix-green-zone" id='201' >
                {getTokens(201).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-fix-green-zone" id='14' >
                {getTokens(14).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className="ver-zone">
              <div className="ver-fix-red-zone" id='9' >
                {getTokens(9).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-fix-green-zone" id='202' >
                {getTokens(202).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>

              <div className="ver-inner-zone" id='15' >
                {getTokens(15).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className="ver-zone">
              <div className="ver-inner-zone" id='8' >
                {getTokens(8).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-fix-green-zone" id='203' >
                {getTokens(203).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-inner-zone" id='16' >
                {getTokens(16).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className="ver-zone">
              <div className="ver-inner-zone" id='7' >
                {getTokens(7).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-fix-green-zone" id='204' >
                {getTokens(204).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>

              <div className="ver-inner-zone" id='17'>
                {getTokens(17).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className="ver-zone">
              <div className="ver-inner-zone" id='6'>
                {getTokens(6).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-fix-green-zone" id='205' >
                {getTokens(205).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-inner-zone" id='18' >
                {getTokens(18).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
          </div>
          <div className="green-box">
            <div className='inner-box-token1'><div onClick={() => { moveToken("position1") }}><div className={greenActive && diceNum === 6 ? "blink" : ""}><Token color={token.green.position1 === null ? "green-token" : ""} /></div></div>
            </div>
            <div className='inner-box-token2'><div onClick={() => { moveToken("position2") }}><div className={greenActive && diceNum === 6 ? "blink" : ""}><Token color={token.green.position2 === null ? "green-token" : ""} /></div></div>
            </div>
            <div className='inner-box-token3'><div onClick={() => { moveToken("position3") }}><div className={greenActive && diceNum === 6 ? "blink" : ""}><Token color={token.green.position3 === null ? "green-token" : ""} /></div></div>
            </div>
            <div className='inner-box-token4'><div onClick={() => { moveToken("position4") }}><div className={greenActive && diceNum === 6 ? "blink" : ""}><Token color={token.green.position4 === null ? "green-token" : ""} /></div></div>
            </div>
          </div>
        </div>

        <div className="middle-container">
          <div className="red-yellow-middle-container">
            <div className='horizontal-zone'>
              <div className="horizontal-inner-zone" id='52' >
                {getTokens(52).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-fix-red-zone" id='1' >
                {getTokens(1).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='2' >
                {getTokens(2).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='3' >
                {getTokens(3).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='4' >
                {getTokens(4).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='5' >
                {getTokens(5).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className='horizontal-zone'>
              <div className="horizontal-inner-zone" id='51' >
                {getTokens(51).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-fix-red-zone" id='101'>
                {getTokens(101).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-fix-red-zone" id='102'>
                {getTokens(102).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-fix-red-zone" id='103'>
                {getTokens(103).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>

              <div className="horizontal-fix-red-zone" id='104'>
                {getTokens(104).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-fix-red-zone" id='105'>
                {getTokens(105).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className='horizontal-zone'>
              <div className="horizontal-inner-zone" id='50' >
                {getTokens(50).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='49' >
                {getTokens(49).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-fix-yellow-zone" id='48' >
                {getTokens(48).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='47' >
                {getTokens(47).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='46' >
                {getTokens(46).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='45' >
                {getTokens(45).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
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
            <div className='horizontal-zone'>
              <div className="horizontal-inner-zone" id='19' >
                {getTokens(19).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='20' >
                {getTokens(20).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='21' >
                {getTokens(21).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-fix-green-zone" id='22' >
                {getTokens(22).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='23' >
                {getTokens(23).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='24' >
                {getTokens(24).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className='horizontal-zone'>
              <div className="horizontal-fix-blue-zone" id='305' >
                {getTokens(305).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-fix-blue-zone" id='304' >
                {getTokens(304).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-fix-blue-zone" id='303' >
                {getTokens(303).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-fix-blue-zone" id='302' >
                {getTokens(302).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-fix-blue-zone" id='301' >
                {getTokens(301).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='25' >
                {getTokens(25).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className='horizontal-zone'>
              <div className="horizontal-inner-zone" id='31' >
                {getTokens(31).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='30' >
                {getTokens(30).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='29' >
                {getTokens(29).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='28' >
                {getTokens(28).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-fix-blue-zone" id='27' >
                {getTokens(27).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="horizontal-inner-zone" id='26' >
                {getTokens(26).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="lower-container">
          <div className="yellow-box">
            <div className='inner-box-token1'><div onClick={() => { moveToken("position1") }}><div className={yellowActive && diceNum === 6 ? 'blink' : ""}><Token color={token.yellow.position1 === null ? "yellow-token" : ""} /></div></div>
            </div>
            <div className='inner-box-token2'><div onClick={() => { moveToken("position2") }}><div className={yellowActive && diceNum === 6 ? 'blink' : ""}><Token color={token.yellow.position2 === null ? "yellow-token" : ""} /></div></div>
            </div>
            <div className='inner-box-token3'><div onClick={() => { moveToken("position3") }}><div className={yellowActive && diceNum === 6 ? 'blink' : ""}><Token color={token.yellow.position3 === null ? "yellow-token" : ""} /></div></div>
            </div>
            <div className='inner-box-token4'><div onClick={() => { moveToken("position4") }}><div className={yellowActive && diceNum === 6 ? 'blink' : ""}><Token color={token.yellow.position4 === null ? "yellow-token" : ""} /></div></div>
            </div>
          </div>
          <div className="yellow-blue-middle-area">
            <div className='ver-zone'>
              <div className="ver-inner-zone" id='44' >
                {getTokens(44).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-fix-yellow-zone" id='403' >
                {getTokens(405).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-inner-zone" id='32' >
                {getTokens(32).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className='ver-zone'>
              <div className="ver-inner-zone" id='43' >
                {getTokens(43).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-fix-yellow-zone" id='404' >
                {getTokens(404).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-inner-zone" id='33' >
                {getTokens(33).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className='ver-zone'>
              <div className="ver-inner-zone" id='42' >
                {getTokens(42).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-fix-yellow-zone" id='403' >
                {getTokens(403).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-inner-zone" id='34' >
                {getTokens(34).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className='ver-zone'>
              <div className="ver-inner-zone" id='41' >
                {getTokens(41).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-fix-yellow-zone" id='402' >
                {getTokens(402).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-fix-blue-zone" id='35' >
                {getTokens(35).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className='ver-zone'>
              <div className="ver-fix-yellow-zone" id='40' >
                {getTokens(40).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-fix-yellow-zone" id='401' >
                {getTokens(401).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-inner-zone" id='36' >
                {getTokens(36).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
            <div className='ver-zone'>
              <div className="ver-inner-zone" id='39' >
                {getTokens(39).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-inner-zone" id='38' >
                {getTokens(38).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
              <div className="ver-inner-zone" id='37' >
                {getTokens(37).map((val, index) => {
                  return (
                    <ActiveToken activeColor={activeColor} tokenColor={val.styleClass} token={val.token} diceNum={diceNum} positionsIdx={index} moveToken={() => moveToken(val.token)} />
                  )
                })}
              </div>
            </div>
          </div>
          <div className="blue-box">
            <div className='inner-box-token1'><div onClick={() => { moveToken("position1") }}><div className={blueActive && diceNum === 6 ? 'blink' : ""}><Token color={token.blue.position1 === null ? "blue-token" : ""} /></div></div>
            </div>
            <div className='inner-box-token2'><div onClick={() => { moveToken("position2") }}><div className={blueActive && diceNum === 6 ? 'blink' : ""}><Token color={token.blue.position2 === null ? "blue-token" : ""} /></div></div>
            </div>
            <div className='inner-box-token3'><div onClick={() => { moveToken("position3") }}><div className={blueActive && diceNum === 6 ? 'blink' : ""}><Token color={token.blue.position3 === null ? "blue-token" : ""} /></div></div>
            </div>
            <div className='inner-box-token4'><div onClick={() => { moveToken("position4") }}><div className={blueActive && diceNum === 6 ? 'blink' : ""}><Token color={token.blue.position4 === null ? "blue-token" : ""} /></div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-box">
        <div className="user-info">
          <div className="user-box">
            <div className="user-dp-box">
              {token.yellow.position1 && token.yellow.position2 && token.yellow.position3 && token.yellow.position4 === 406 ? <Win /> :
                <img className="user-dp" src='https://static.vecteezy.com/system/resources/previews/015/129/999/original/game-user-icon-png.png' />}
            </div>
            <div className="userName">userName</div>
          </div>
          {yellowActive ? <div className={diceNum ? "disable-dice" : "dice-box"}><Dice id="dice2" onRoll={() => handleDiceRoll("dice2")} diceNum={diceNum} /></div> : <div className="dice-box"></div>}
        </div>

        <div className="user-info">
          {blueActive ? <div className={diceNum ? "disable-dice" : "dice-box"}><Dice id="dice4" onRoll={() => handleDiceRoll("dice4")} diceNum={diceNum} /></div> : <div className="dice-box"></div>}
          <div className="user-box">
            <div className="user-dp-box">
              {token.blue.position1 && token.blue.position2 && token.blue.position3 && token.blue.position4 === 306 ? <Win /> :
                <img className="user-dp" src='https://static.vecteezy.com/system/resources/previews/015/129/999/original/game-user-icon-png.png' />}
            </div>
            <div className="userName">userName</div>
          </div>
        </div>
      </div>
    </div>
  )
}
