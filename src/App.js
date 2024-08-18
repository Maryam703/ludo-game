import { useEffect, useState } from 'react';
import './App.css';
import Dice from './components/Dice/Dice';
import Token from './components/Token/Token';

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

  const handleDiceRoll = () => {
    const randomNum = Math.ceil(Math.random() * 6);
    setDiceNum(randomNum);
  }
  
  const moveToken = (positionKey) => {
    if (redActive) {
      if (token.red.position1 === null && token.red.position2 === null && token.red.position3 === null && token.red.position4 === null && diceNum !== 6) {
        setRedActive(false)
        setYellowActive(true)
      }
      if (token.red[positionKey] === null && diceNum === 6) {
        setToken(prev => ({
          ...prev,
          red: {
            ...prev.red,
            [positionKey]: 1
          }
        }));
      }
      if (token.red[positionKey] === null && diceNum !== 6) {
        setToken(prev => ({
          ...prev,
        }));
      }
      if (token.red[positionKey] !== null) {
        let Position = token.red[positionKey] + diceNum
        console.log(Position)
        if (Position <= 51) {
          setToken((prev) => ({
            ...prev,
            red: {
              ...prev.red,
              [positionKey]: Position
            }
          }));
        }
        if (Position > token.red.route.max) {
          let newPosition = Position + 49
          setToken((prev) => ({
            ...prev,
            red: {
              ...prev.red,
               [positionKey]: newPosition
            }
          }));
        }
        if (Position > 100 && Position < 106) {
          setToken((prev) => ({
            ...prev,
            red: {
              ...prev.red,
              [positionKey]: Position
            }
          }));
        }
        setRedActive(false)
        setYellowActive(true)
      }
    }


    if (yellowActive) {
      if (token.yellow.position1 === null && token.yellow.position2 === null && token.yellow.position3 === null && token.yellow.position4 === null && diceNum !== 6) {
        setYellowActive(false)
        setBlueActive(true)
      }

      if (token.yellow[positionKey] === null && diceNum === 6) {
        setToken((prev) => ({
          ...prev,
          yellow: { ...prev.yellow, [positionKey]: 40 }
        }));
      }

      if (token.yellow[positionKey] === null && diceNum !== 6) {
        setToken(prev => ({
          ...prev,
        }));
      }

      if (token.yellow[positionKey] !== null) {
        let Position = token.yellow[positionKey] + diceNum;
        if (Position <= 52) {
          setToken((prev) => ({
            ...prev,
            yellow: {
              ...prev.yellow,
              [positionKey]: Position
            }
          }));
        }
        if (Position > 52) {
          let newPosition = Position - 52
          setToken((prev) => ({
            ...prev,
            yellow: {
              ...prev.yellow,
              [positionKey]: newPosition
            }
          }));
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
        }
        if (Position > 400 && Position < 406) {
          setToken((prev) => ({
            ...prev,
            yellow: {
              ...prev.yellow,
              [positionKey]: Position
            }
          }));
        }
        setYellowActive(false)
        setBlueActive(true)
      }

    }


    if (blueActive) {
      if (token.blue.position1 === null && token.blue.position2 === null && token.blue.position3 === null && token.blue.position4 === null && diceNum !== 6) {
        setBlueActive(false)
        setGreenActive(true)
      }

      if (token.blue[positionKey] === null && diceNum === 6) {
        setToken((prev) => ({
          ...prev,
          blue: { ...prev.blue, [positionKey]: 27 }
        }));
      }

      if (token.blue[positionKey] === null && diceNum !== 6) {
        setToken(prev => ({
          ...prev,
        }));
      }

      if (token.blue[positionKey] !== null) {
        let Position = token.blue[positionKey] + diceNum;
        if (Position <= 52) {
          setToken((prev) => ({
            ...prev,
            blue: {
              ...prev.blue,
              [positionKey]: Position
            }
          }));
        }
        if (Position > 52) {
          let newPosition = Position - 52
          setToken((prev) => ({
            ...prev,
            blue: {
              ...prev.blue,
              [positionKey]: newPosition
            }
          }));
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
        }
        if (Position > 300 && Position < 306) {
          setToken((prev) => ({
            ...prev,
            blue: {
              ...prev.blue,
              [positionKey]: Position
            }
          }));
        }
        setBlueActive(false)
        setGreenActive(true)
      }

    }

    if (greenActive) {
      if (token.green.position1 === null && token.green.position2 === null && token.green.position3 === null && token.green.position4 === null && diceNum !== 6) {
        setGreenActive(false)
        setRedActive(true)
      }

      if (token.green[positionKey] === null && diceNum === 6) {
        setToken((prev) => ({
          ...prev,
          green: { ...prev.green,[positionKey]: 14 }
        }));
      }
      if (token.green[positionKey] === null && diceNum !== 6) {
        setToken(prev => ({
          ...prev,
        }));
      }

      if (token.green[positionKey] !== null) {
        let Position = token.green[positionKey] + diceNum;
        if (Position <= 52) {
          setToken((prev) => ({
            ...prev,
            green: {
              ...prev.green,
            [positionKey]: Position
            }
          }));
        }
        if (Position > 52) {
          let newPosition = Position - 52
          setToken((prev) => ({
            ...prev,
            green: {
              ...prev.green,
            [positionKey]: newPosition
            }
          }));
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
        }
        if (Position > 200 && Position < 206) {
          setToken((prev) => ({
            ...prev,
            green: {
              ...prev.green,
            [positionKey]: Position
            }
          }));
        }
        setGreenActive(false)
        setRedActive(true)
      }

    }
  }
  console.log(token)

  return (
    <div className="main-container">
      <div className="left-box">

        <div className="user-info">
          {redActive ? <div className="dice-box"><Dice id="dice1" onRoll={() => handleDiceRoll("dice1")} diceNum={diceNum} /></div> : <div className="dice-box"></div>}
          <div className="user-box">
            <div className="user-dp-box">
              <img className="user-dp" src='https://static.vecteezy.com/system/resources/previews/015/129/999/original/game-user-icon-png.png' />
            </div>
            <div className="userName">userName</div>
          </div>
        </div>

        <div className="user-info">
          {yellowActive ? <div className="dice-box"><Dice id="dice2" onRoll={() => handleDiceRoll("dice2")} diceNum={diceNum} /></div> : <div className="dice-box"></div>}
          <div className="user-box">
            <div className="user-dp-box">
              <img className="user-dp" src='https://static.vecteezy.com/system/resources/previews/015/129/999/original/game-user-icon-png.png' />
            </div>
            <div className="userName">userName</div>
          </div>
        </div>

      </div>
      <div className="ludo-box">
        <div className="upper-container">
          <div className="red-box">
            <div>
              <div id='red1' onClick={() => {moveToken("position1")}}><Token color={token.red.position1 === null ? "red-token" : ""} /></div>
              <div id='red2' onClick={() => {moveToken("position2")}}><Token color={token.red.position2 === null ? "red-token" : ""} /></div>
            </div>
            <div>
              <div id='red3' onClick={() => {moveToken("position3")}}><Token color={token.red.position3 === null ? "red-token" : ""} /></div>
              <div id='red4' onClick={() => {moveToken("position4")}}><Token color={token.red.position4 === null ? "red-token" : ""} /></div>
            </div>
          </div>
          <div className="red-green-middle-area">
            <div className="zone" id='11' >11
              {token.red.position1 === 11 && <Token color={"red-token"} onClick={()=> {moveToken("position1")}} />}
              {token.yellow.position1 === 11 && <Token color={"yellow-token"} onClick={()=> {moveToken("position1")}} />}
              {token.blue.position1 === 11 && <Token color={"blue-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.green.position1 === 11 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 11 && <Token color={"red-token"} onClick={()=> {moveToken("position2")}}/>}
              {token.yellow.position2 === 11 && <Token color={"yellow-token"} onClick={()=> {moveToken("position2")}}/>}
              {token.blue.position2 === 11 && <Token color={"blue-token"} onClick={()=> {moveToken("position2")}}/>}
              {token.green.position2 === 11 && <Token color={"green-token"} onClick={()=> {moveToken("position2")}}/>}

              {token.red.position3 === 11 && <Token color={"red-token"} onClick={()=> {moveToken("position3")}}/>}
              {token.yellow.position3 === 11 && <Token color={"yellow-token"} onClick={()=> {moveToken("position3")}} />}
              {token.blue.position3 === 11 && <Token color={"blue-token"} onClick={()=> {moveToken("position3")}}/>}
              {token.green.position3 === 11 && <Token color={"green-token"} onClick={()=> {moveToken("position3")}}/>}

              {token.red.position4 === 11 && <Token color={"red-token"} onClick={()=> {moveToken("position4")}}/>}
              {token.yellow.position4 === 11 && <Token color={"yellow-token"} onClick={()=> {moveToken("position4")}}/>}
              {token.blue.position4 === 11 && <Token color={"blue-token"} onClick={()=> {moveToken("position4")}}/>}
              {token.green.position4 === 11 && <Token color={"green-token"} onClick={()=> {moveToken("position4")}} />}
            </div>

            <div className="zone" id='12' >12
              {token.red.position1 === 12 && <Token color={"red-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.yellow.position1 === 12 && <Token color={"yellow-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.blue.position1 === 12 && <Token color={"blue-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.green.position1 === 12 && <Token color={"green-token"} onClick={()=> {moveToken("position1")}}/>}

              {token.red.position2 === 12 && <Token color={"red-token"} onClick={()=> {moveToken("position2")}} />}
              {token.yellow.position2 === 12 && <Token color={"yellow-token"} onClick={()=> {moveToken("position2")}} />}
              {token.blue.position2 === 12 && <Token color={"blue-token"} onClick={()=> {moveToken("position2")}} />}
              {token.green.position2 === 12 && <Token color={"green-token"} onClick={()=> {moveToken("position2")}} />}

              {token.red.position3 === 12 && <Token color={"red-token"} onClick={() =>{moveToken("position3")}} />}
              {token.yellow.position3 === 12 && <Token color={"yellow-token"} onClick={() =>{moveToken("position3")}}/>}
              {token.blue.position3 === 12 && <Token color={"blue-token"} onClick={() =>{moveToken("position3")}}/>}
              {token.green.position3 === 12 && <Token color={"green-token"} onClick={() =>{moveToken("position3")}}/>}

              {token.red.position4 === 12 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 12 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 12 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 12 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='13' >13
              {token.red.position1 === 13 && <Token color={"red-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.yellow.position1 === 13 && <Token color={"yellow-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.blue.position1 === 13 && <Token color={"blue-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.green.position1 === 13 && <Token color={"green-token"} onClick={()=> {moveToken("position1")}}/>}

              {token.red.position2 === 13 && <Token color={"red-token"}  onClick={()=> {moveToken("position2")}} />}
              {token.yellow.position2 === 13 && <Token color={"yellow-token"}  onClick={()=> {moveToken("position2")}} />}
              {token.blue.position2 === 13 && <Token color={"blue-token"}  onClick={()=> {moveToken("position2")}} />}
              {token.green.position2 === 13 && <Token color={"green-token"}  onClick={()=> {moveToken("position2")}} />}

              {token.red.position3 === 13 && <Token color={"red-token"}  onClick={() =>{moveToken("position3")}} />}
              {token.yellow.position3 === 13 && <Token color={"yellow-token"}  onClick={() =>{moveToken("position3")}} />}
              {token.blue.position3 === 13 && <Token color={"blue-token"}  onClick={() =>{moveToken("position3")}} />}
              {token.green.position3 === 13 && <Token color={"green-token"}  onClick={() =>{moveToken("position3")}} />}

              {token.red.position4 === 13 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 13 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 13 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 13 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='10' >10
              {token.red.position1 === 10 && <Token color={"red-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.yellow.position1 === 10 && <Token color={"yellow-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.blue.position1 === 10 && <Token color={"blue-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.green.position1 === 10 && <Token color={"green-token"} onClick={()=> {moveToken("position1")}}/>}

              {token.red.position2 === 10 && <Token color={"red-token"} onClick={()=> {moveToken("position2")}} />}
              {token.yellow.position2 === 10 && <Token color={"yellow-token"} onClick={()=> {moveToken("position2")}} />}
              {token.blue.position2 === 10 && <Token color={"blue-token"} onClick={()=> {moveToken("position2")}} />}
              {token.green.position2 === 10 && <Token color={"green-token"} onClick={()=> {moveToken("position2")}} />}

              {token.red.position3 === 10 && <Token color={"red-token"} onClick={() =>{moveToken("position3")}} />}
              {token.yellow.position3 === 10 && <Token color={"yellow-token"} onClick={() =>{moveToken("position3")}} />}
              {token.blue.position3 === 10 && <Token color={"blue-token"} onClick={() =>{moveToken("position3")}} />}
              {token.green.position3 === 10 && <Token color={"green-token"} onClick={() =>{moveToken("position3")}} />}

              {token.red.position4 === 10 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 10 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 10 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 10 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="green-fix-zone" id='201' >201
              {token.green.position1 === 201 && <Token color={"green-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.green.position2 === 201 && <Token color={"green-token"} onClick={()=> {moveToken("position2")}}/>}
              {token.green.position3 === 201 && <Token color={"green-token"} onClick={()=> {moveToken("position3")}}/>}
              {token.green.position4 === 201 && <Token color={"green-token"} onClick={()=> {moveToken("position4")}}/>}
            </div>

            <div className="green-fix-zone" id='14' >14
              {token.red.position1 === 14 && <Token color={"red-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.yellow.position1 === 14 && <Token color={"yellow-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.blue.position1 === 14 && <Token color={"blue-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.green.position1 === 14 && <Token color={"green-token"} onClick={()=> {moveToken("position1")}}/>}

              {token.red.position2 === 14 && <Token color={"red-token"} onClick={()=> {moveToken("position2")}} />}
              {token.yellow.position2 === 14 && <Token color={"yellow-token"} onClick={()=> {moveToken("position2")}} />}
              {token.blue.position2 === 14 && <Token color={"blue-token"} onClick={()=> {moveToken("position2")}} />}
              {token.green.position2 === 14 && <Token color={"green-token"} onClick={()=> {moveToken("position2")}} />}

              {token.red.position3 === 14 && <Token color={"red-token"} onClick={() =>{moveToken("position3")}} />}
              {token.yellow.position3 === 14 && <Token color={"yellow-token"} onClick={() =>{moveToken("position3")}} />}
              {token.blue.position3 === 14 && <Token color={"blue-token"} onClick={() =>{moveToken("position3")}} />}
              {token.green.position3 === 14 && <Token color={"green-token"} onClick={() =>{moveToken("position3")}} />}

              {token.red.position4 === 14 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 14 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 14 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 14 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="red-fix-zone" id='9' >9
              {token.red.position1 === 9 && <Token color={"red-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.yellow.position1 === 9 && <Token color={"yellow-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.blue.position1 === 9 && <Token color={"blue-token"} onClick={()=> {moveToken("position1")}}/>}
              {token.green.position1 === 9 && <Token color={"green-token"} onClick={()=> {moveToken("position1")}}/>}

              {token.red.position2 === 9 && <Token color={"red-token"} onClick={()=> {moveToken("position2")}} />}
              {token.yellow.position2 === 9 && <Token color={"yellow-token"} onClick={()=> {moveToken("position2")}} />}
              {token.blue.position2 === 9 && <Token color={"blue-token"} onClick={()=> {moveToken("position2")}} />}
              {token.green.position2 === 9 && <Token color={"green-token"} onClick={()=> {moveToken("position2")}} />}

              {token.red.position3 === 9 && <Token color={"red-token"} onClick={() =>{moveToken("position3")}} />}
              {token.yellow.position3 === 9 && <Token color={"yellow-token"} onClick={() =>{moveToken("position3")}} />}
              {token.blue.position3 === 9 && <Token color={"blue-token"} onClick={() =>{moveToken("position3")}} />}
              {token.green.position3 === 9 && <Token color={"green-token"} onClick={() =>{moveToken("position3")}} />}

              {token.red.position4 === 9 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 9 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 9 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 9 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="green-fix-zone" id='202' >202
              {token.green.position1 === 202 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position2 === 202 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position3 === 202 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position4 === 202 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='15' >15
              {token.red.position1 === 15 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 15 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 15 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 15 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 15 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 15 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 15 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 15 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 15 && <Token color={"red-token"} onClick={() =>{moveToken("position3")}} />}
              {token.yellow.position3 === 15 && <Token color={"yellow-token"} onClick={() =>{moveToken("position3")}} />}
              {token.blue.position3 === 15 && <Token color={"blue-token"} onClick={() =>{moveToken("position3")}} />}
              {token.green.position3 === 15 && <Token color={"green-token"} onClick={() =>{moveToken("position3")}} />}

              {token.red.position4 === 15 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 15 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 15 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 15 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='8' >8
              {token.red.position1 === 8 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 8 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 8 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 8 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 8 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 8 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 8 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 8 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 8 && <Token color={"red-token"} onClick={() =>{moveToken("position3")}} />}
              {token.yellow.position3 === 8 && <Token color={"yellow-token"} onClick={() =>{moveToken("position3")}} />}
              {token.blue.position3 === 8 && <Token color={"blue-token"} onClick={() =>{moveToken("position3")}} />}
              {token.green.position3 === 8 && <Token color={"green-token"} onClick={() =>{moveToken("position3")}} />}

              {token.red.position4 === 8 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 8 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 8 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 8 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="green-fix-zone" id='203' >203
              {token.green.position1 === 203 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position2 === 203 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position3 === 203 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 203 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='16' >16
              {token.red.position1 === 16 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 16 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 16 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 16 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 16 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 16 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 16 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 16 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 16 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 16 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 16 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 16 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 16 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 16 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 16 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 16 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='7' >7
              {token.red.position1 === 7 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 7 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 7 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 7 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 7 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 7 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 7 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 7 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 7 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 7 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 7 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 7 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 7 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 7 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 7 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 7 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="green-fix-zone" id='204' >204
              {token.green.position1 === 204 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position2 === 204 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position3 === 204 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position4 === 204 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='17'>17
              {token.red.position1 === 17 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 17 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 17 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 17 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 17 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 17 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 17 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 17 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 17 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 17 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 17 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 17 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 17 && <Token color={"red-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 17 && <Token color={"yellow-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 17 && <Token color={"blue-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 17 && <Token color={"green-token"}  onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='6'>6
              {token.red.position1 === 6 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 6 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 6 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 6 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 6 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 6 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 6 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 6 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 6 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 6 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 6 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 6 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 6 && <Token color={"red-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 6 && <Token color={"yellow-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 6 && <Token color={"blue-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 6 && <Token color={"green-token"}  onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="green-fix-zone" id='205' >205
              {token.green.position1 === 205 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position2 === 205 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position3 === 205 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position4 === 205 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='18' >18
              {token.red.position1 === 18 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 18 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 18 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 18 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 18 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 18 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 18 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 18 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 18 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 18 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 18 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 18 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 18 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 18 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 18 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 18 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>
          </div>
          <div className="green-box">
            <div>
              <div onClick={() => {moveToken("position1")}}><Token color={token.green.position1 === null ? "green-token" : ""} /></div>
              <div onClick={() => {moveToken("position2")}}><Token color={token.green.position2 === null ? "green-token" : ""} /></div>
            </div>
            <div>
              <div onClick={() => {moveToken("position3")}}><Token color={token.green.position3 === null ? "green-token" : ""} /></div>
              <div onClick={() => {moveToken("position4")}}><Token color={token.green.position4 === null ? "green-token" : ""} /></div>
            </div>
          </div>
        </div>

        <div className="middle-container">
          <div className="red-yellow-middle-container">
            <div className="zone" id='52' >52
              {token.red.position1 === 52 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 52 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 52 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 52 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 52 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 52 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 52 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 52 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 52 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 52 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 52 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 52 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 52 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 52 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 52 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 52 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='51' >51
              {token.red.position1 === 51 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 51 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 51 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 51 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 51 && <Token color={"red-token"}  onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 51 && <Token color={"yellow-token"}  onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 51 && <Token color={"blue-token"}  onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 51 && <Token color={"green-token"}  onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 51 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 51 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 51 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 51 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 51 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 51 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 51 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 51 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='50' >50
              {token.red.position1 === 50 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 50 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 50 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 50 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 50 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 50 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 50 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 50 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 50 && <Token color={"red-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 50 && <Token color={"yellow-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 50 && <Token color={"blue-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 50 && <Token color={"green-token"}  onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 50 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 50 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 50 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 50 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="red-fix-zone" id='1' >1
              {token.red.position1 === 1 && <Token color={"red-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 1 && <Token color={"yellow-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 1 && <Token color={"blue-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 1 && <Token color={"green-token"}  onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 1 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 1 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 1 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 1 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 1 && <Token color={"red-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 1 && <Token color={"yellow-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 1 && <Token color={"blue-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 1 && <Token color={"green-token"}  onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 1 && <Token color={"red-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 1 && <Token color={"yellow-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 1 && <Token color={"blue-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 1 && <Token color={"green-token"}  onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="red-fix-zone" id='101'>101
              {token.red.position1 === 101 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.red.position2 === 101 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.red.position3 === 101 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.red.position4 === 101 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='49' >49
              {token.red.position1 === 49 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 49 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 49 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 49 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 49 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 49 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 49 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 49 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 49 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 49 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 49 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 49 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 49 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 49 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 49 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 49 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='2' >2
              {token.red.position1 === 2 && <Token color={"red-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 2 && <Token color={"yellow-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 2 && <Token color={"blue-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 2 && <Token color={"green-token"}  onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 2 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 2 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 2 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 2 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 2 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 2 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 2 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 2 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 2 && <Token color={"red-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 2 && <Token color={"yellow-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 2 && <Token color={"blue-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 2 && <Token color={"green-token"}  onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="red-fix-zone" id='102'>102
              {token.red.position1 === 102 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.red.position2 === 102 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.red.position3 === 102 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.red.position4 === 102 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="yellow-fix-zone" id='48' >48
              {token.red.position1 === 48 && <Token color={"red-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 48 && <Token color={"yellow-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 48 && <Token color={"blue-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 48 && <Token color={"green-token"}  onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 48 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 48 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 48 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 48 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 48 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 48 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 48 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 48 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 48 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 48 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 48 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 48 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='3' >3
              {token.red.position1 === 3 && <Token color={"red-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 3 && <Token color={"yellow-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 3 && <Token color={"blue-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 3 && <Token color={"green-token"}  onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 3 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 3 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 3 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 3 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 3 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 3 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 3 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 3 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 3 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 3 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 3 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 3 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="red-fix-zone" id='103'>103
              {token.red.position1 === 103 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.red.position2 === 103 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.red.position3 === 103 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.red.position4 === 103 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='47' >47
              {token.red.position1 === 47 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 47 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 47 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 47 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 47 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 47 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 47 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 47 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 47 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 47 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 47 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 47 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 47 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 47 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 47 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 47 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='4' >4
              {token.red.position1 === 4 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 4 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 4 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 4 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 4 && <Token color={"red-token"}  onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 4 && <Token color={"yellow-token"}  onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 4 && <Token color={"blue-token"}  onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 4 && <Token color={"green-token"}  onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 4 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 4 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 4 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 4 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 4 && <Token color={"red-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 4 && <Token color={"yellow-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 4 && <Token color={"blue-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 4 && <Token color={"green-token"}  onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="red-fix-zone" id='104'>104
              {token.red.position1 === 104 && <Token color={"red-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.red.position2 === 104 && <Token color={"red-token"}  onClick={() => {moveToken("position2")}}/>}
              {token.red.position3 === 104 && <Token color={"red-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.red.position4 === 104 && <Token color={"red-token"}  onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='46' >46
              {token.red.position1 === 46 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 46 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 46 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 46 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 46 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 46 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 46 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 46 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 46 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 46 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 46 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 46 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 46 && <Token color={"red-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 46 && <Token color={"yellow-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 46 && <Token color={"blue-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 46 && <Token color={"green-token"}  onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='5' >5
              {token.red.position1 === 5 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 5 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 5 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 5 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 5 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 5 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 5 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 5 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 5 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 5 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 5 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 5 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 5 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 5 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 5 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 5 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="red-fix-zone" id='105'>105
              {token.red.position1 === 105 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.red.position2 === 105 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.red.position3 === 105 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.red.position4 === 105 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='45' >45
              {token.red.position1 === 45 && <Token color={"red-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 45 && <Token color={"yellow-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 45 && <Token color={"blue-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 45 && <Token color={"green-token"}  onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 45 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 45 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 45 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 45 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 45 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 45 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 45 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 45 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 45 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 45 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 45 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 45 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>
          </div>

          <div className="middle-box-middle-container"></div>

          <div className="green-blue-middle-container">
            <div className="zone" id='19' >19
              {token.red.position1 === 19 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 19 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 19 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 19 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 19 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 19 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 19 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 19 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 19 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 19 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 19 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 19 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 19 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 19 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 19 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 19 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>
            <div className="blue-fix-zone" id='305' >305
              {token.blue.position1 === 305 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position2 === 305 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position3 === 305 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position4 === 305 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='31' >31
              {token.red.position1 === 31 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 31 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 31 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 31 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 31 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 31 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 31 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 31 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 31 && <Token color={"red-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 31 && <Token color={"yellow-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 31 && <Token color={"blue-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 31 && <Token color={"green-token"}  onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 31 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 31 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 31 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 31 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='20' >20
              {token.red.position1 === 20 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 20 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 20 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 20 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 20 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 20 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 20 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 20 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 20 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 20 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 20 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 20 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 20 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 20 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 20 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 20 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="blue-fix-zone" id='304' >304
              {token.blue.position1 === 304 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position2 === 304 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position3 === 304 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position4 === 304 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='30' >30
              {token.red.position1 === 30 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 30 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 30 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 30 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 30 && <Token color={"red-token"}  onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 30 && <Token color={"yellow-token"}  onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 30 && <Token color={"blue-token"}  onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 30 && <Token color={"green-token"}  onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 30 && <Token color={"red-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 30 && <Token color={"yellow-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 30 && <Token color={"blue-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 30 && <Token color={"green-token"}  onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 30 && <Token color={"red-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 30 && <Token color={"yellow-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 30 && <Token color={"blue-token"}  onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 30 && <Token color={"green-token"}  onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='21' >21
              {token.red.position1 === 21 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 21 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 21 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 21 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 21 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 21 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 21 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 21 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 21 && <Token color={"red-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 21 && <Token color={"yellow-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 21 && <Token color={"blue-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 21 && <Token color={"green-token"}  onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 21 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 21 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 21 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 21 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="blue-fix-zone" id='303' >303
              {token.blue.position1 === 303 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position2 === 303 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position3 === 303 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position4 === 303 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='29' >29
              {token.red.position1 === 29 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 29 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 29 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 29 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 29 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 29 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 29 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 29 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 29 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 29 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 29 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 29 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 29 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 29 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 29 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 29 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="green-fix-zone" id='22' >22
              {token.red.position1 === 22 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 22 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 22 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 22 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 22 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 22 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 22 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 22 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 22 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 22 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 22 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 22 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 22 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 22 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 22 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 22 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="blue-fix-zone" id='302' >302
              {token.blue.position1 === 302 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position2 === 302 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position3 === 302 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position4 === 302 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='28' >28
              {token.red.position1 === 28 && <Token color={"red-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 28 && <Token color={"yellow-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 28 && <Token color={"blue-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 28 && <Token color={"green-token"}  onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 28 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 28 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 28 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 28 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 28 && <Token color={"red-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 28 && <Token color={"yellow-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 28 && <Token color={"blue-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 28 && <Token color={"green-token"}  onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 28 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 28 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 28 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 28 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='23' >23
              {token.red.position1 === 23 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 23 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 23 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 23 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 23 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 23 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 23 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 23 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 23 && <Token color={"red-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 23 && <Token color={"yellow-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 23 && <Token color={"blue-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 23 && <Token color={"green-token"}  onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 23 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 23 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 23 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 23 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="blue-fix-zone" id='301' >301
              {token.blue.position1 === 301 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position2 === 301 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position3 === 301 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position4 === 301 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="blue-fix-zone" id='27' >27
              {token.red.position1 === 27 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 27 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 27 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 27 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 27 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 27 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 27 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 27 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 27 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 27 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 27 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 27 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 27 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 27 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 27 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 27 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='24' >24
              {token.red.position1 === 24 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 24 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 24 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 24 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 24 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 24 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 24 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 24 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 24 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 24 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 24 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 24 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 24 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 24 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 24 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 24 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='25' >25
              {token.red.position1 === 25 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 25 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 25 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 25 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 25 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 25 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 25 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 25 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 25 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 25 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 25 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 25 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 25 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 25 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 25 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 25 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='26' >26
              {token.red.position1 === 26 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 26 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 26 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 26 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 26 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 26 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 26 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 26 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 26 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 26 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 26 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 26 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 26 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 26 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 26 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 26 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>
          </div>
        </div>

        <div className="lower-container">
          <div className="yellow-box">
            <div>
              <div onClick={() => {moveToken("position1")}}><Token color={token.yellow.position1 === null ? "yellow-token" : ""} /></div>
              <div onClick={() => {moveToken("position2")}}><Token color={token.yellow.position2 === null ? "yellow-token" : ""} /></div>
            </div>
            <div>
              <div onClick={() => {moveToken("position3")}}><Token color={token.yellow.position3 === null ? "yellow-token" : ""} /></div>
              <div onClick={() => {moveToken("position4")}}><Token color={token.yellow.position4 === null ? "yellow-token" : ""} /></div>
            </div>
          </div>
          <div className="yellow-blue-middle-area">
            <div className="zone" id='44' >44
              {token.red.position1 === 44 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 44 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 44 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 44 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 44 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 44 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 44 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 44 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 44 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 44 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 44 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 44 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 44 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 44 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 44 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 44 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="yellow-fix-zone" id='403' >405
              {token.yellow.position1 === 405 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position2 === 405 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position3 === 405 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position4 === 405 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='32' >32
              {token.red.position1 === 32 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 32 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 32 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 32 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 32 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 32 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 32 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 32 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 32 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 32 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 32 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 32 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 32 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 32 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 32 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 32 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='43' >43
              {token.red.position1 === 43 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 43 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 43 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 43 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 43 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 43 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 43 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 43 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 43 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 43 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 43 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 43 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 43 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 43 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 43 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 43 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="yellow-fix-zone" id='404' >404
              {token.yellow.position1 === 404 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position2 === 404 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position3 === 404 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position4 === 404 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='33' >33
              {token.red.position1 === 33 && <Token color={"red-token"}onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 33 && <Token color={"yellow-token"}onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 33 && <Token color={"blue-token"}onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 33 && <Token color={"green-token"}onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 33 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 33 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 33 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 33 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 33 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 33 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 33 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 33 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 33 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 33 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 33 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 33 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='42' >42
              {token.red.position1 === 42 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 42 && <Token color={"yellow-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 42 && <Token color={"blue-token"}  onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 42 && <Token color={"green-token"}  onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 42 && <Token color={"red-token"}  onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 42 && <Token color={"yellow-token"}  onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 42 && <Token color={"blue-token"}  onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 42 && <Token color={"green-token"}  onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 42 && <Token color={"red-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 42 && <Token color={"yellow-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 42 && <Token color={"blue-token"}  onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 42 && <Token color={"green-token"}  onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 42 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 42 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 42 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 42 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="yellow-fix-zone" id='403' >403
              {token.yellow.position1 === 403 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position2 === 403 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position3 === 403 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position4 === 403 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='34' >34
              {token.red.position1 === 34 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 34 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 34 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 34 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 34 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 34 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 34 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 34 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 34 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 34 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 34 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 34 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 34 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 34 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 34 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 34 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='41' >41
              {token.red.position1 === 41 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 41 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 41 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 41 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 41 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 41 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 41 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 41 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 41 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 41 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 41 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 41 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 41 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 41 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 41 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 41 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="yellow-fix-zone" id='402' >402
              {token.yellow.position1 === 402 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position2 === 402 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position3 === 402 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position4 === 402 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="blue-fix-zone" id='35' >35
              {token.red.position1 === 35 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 35 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 35 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 35 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 35 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 35 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 35 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 35 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 35 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 35 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 35 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 35 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 35 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 35 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 35 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 35 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="yellow-fix-zone" id='40' >40
              {token.red.position1 === 40 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 40 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 40 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 40 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 40 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 40 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 40 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 40 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 40 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 40 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 40 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 40 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 40 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 40 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 40 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 40 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="yellow-fix-zone" id='401' >401
              {token.yellow.position1 === 401 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position2 === 401 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position3 === 401 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position4 === 401 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='36' >36
              {token.red.position1 === 36 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 36 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 36 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 36 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 36 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 36 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 36 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 36 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 36 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 36 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 36 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 36 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 36 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 36 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 36 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 36 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='39' >39
              {token.red.position1 === 39 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 39 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 39 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 39 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 39 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 39 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 39 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 39 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 39 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 39 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 39 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 39 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 39 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 39 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 39 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 39 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='38' >38
              {token.red.position1 === 38 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 38 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 38 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 38 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 38 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 38 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 38 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 38 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 38 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 38 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 38 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 38 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 38 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 38 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 38 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 38 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}
            </div>

            <div className="zone" id='37' >37
              {token.red.position1 === 37 && <Token color={"red-token"} onClick={() => {moveToken("position1")}}/>}
              {token.yellow.position1 === 37 && <Token color={"yellow-token"} onClick={() => {moveToken("position1")}}/>}
              {token.blue.position1 === 37 && <Token color={"blue-token"} onClick={() => {moveToken("position1")}}/>}
              {token.green.position1 === 37 && <Token color={"green-token"} onClick={() => {moveToken("position1")}}/>}

              {token.red.position2 === 37 && <Token color={"red-token"} onClick={() => {moveToken("position2")}}/>}
              {token.yellow.position2 === 37 && <Token color={"yellow-token"} onClick={() => {moveToken("position2")}}/>}
              {token.blue.position2 === 37 && <Token color={"blue-token"} onClick={() => {moveToken("position2")}}/>}
              {token.green.position2 === 37 && <Token color={"green-token"} onClick={() => {moveToken("position2")}}/>}

              {token.red.position3 === 37 && <Token color={"red-token"} onClick={() => {moveToken("position3")}}/>}
              {token.yellow.position3 === 37 && <Token color={"yellow-token"} onClick={() => {moveToken("position3")}}/>}
              {token.blue.position3 === 37 && <Token color={"blue-token"} onClick={() => {moveToken("position3")}}/>}
              {token.green.position3 === 37 && <Token color={"green-token"} onClick={() => {moveToken("position3")}}/>}

              {token.red.position4 === 37 && <Token color={"red-token"} onClick={() => {moveToken("position4")}}/>}
              {token.yellow.position4 === 37 && <Token color={"yellow-token"} onClick={() => {moveToken("position4")}}/>}
              {token.blue.position4 === 37 && <Token color={"blue-token"} onClick={() => {moveToken("position4")}}/>}
              {token.green.position4 === 37 && <Token color={"green-token"} onClick={() => {moveToken("position4")}}/>}

            </div>
          </div>
          <div className="blue-box">
            <div>
              <div onClick={() => {moveToken("position1")}}><Token color={token.blue.position1 === null ? "blue-token" : ""} /></div>
              <div onClick={() => {moveToken("position2")}}><Token color={token.blue.position2 === null ? "blue-token" : ""} /></div>
            </div>
            <div>
              <div onClick={() => {moveToken("position3")}}><Token color={token.blue.position3 === null ? "blue-token" : ""} /></div>
              <div onClick={() => {moveToken("position4")}}><Token color={token.blue.position4 === null ? "blue-token" : ""} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-box">
        <div className="user-info">
          <div className="user-box">
            <div className="user-dp-box">
              <img className="user-dp" src='https://static.vecteezy.com/system/resources/previews/015/129/999/original/game-user-icon-png.png' />
            </div>
            <div className="userName">userName</div>
          </div>
          {greenActive ? <div className="dice-box"><Dice id="dice3" onRoll={() => handleDiceRoll("dice3")} diceNum={diceNum} /></div> : <div className="dice-box"></div>}
        </div>

        <div className="user-info">
          <div className="user-box">
            <div className="user-dp-box">
              <img className="user-dp" src='https://static.vecteezy.com/system/resources/previews/015/129/999/original/game-user-icon-png.png' />
            </div>
            <div className="userName">userName</div>
          </div>
          {blueActive ? <div className="dice-box"><Dice id="dice4" onRoll={() => handleDiceRoll("dice4")} diceNum={diceNum} /></div> : <div className="dice-box"></div>}
        </div>
      </div>
    </div>
  );
}
export default App;