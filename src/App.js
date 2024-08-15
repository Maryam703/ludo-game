import { useState } from 'react';
import './App.css';
import Dice from './components/Dice/Dice';
import Token from './components/Token/Token';

function App() {
  const [diceNum, setDiceNum] = useState(null)
  const [tokenColor, settokenColor] = useState({
    id: 'red1',
    position: null
  })
  const [redActive, setRedActive] = useState(true)
  const [yellowActive, setYellowActive] = useState(false)
  const [greenActive, setGreenActive] = useState(false)
  const [blueActive, setBlueActive] = useState(false)


  const handleDiceRoll = () => {
    const randomNum = Math.ceil(Math.random() * 6);
    setDiceNum(randomNum);
  }

  const moveToken = () => {
    if ( tokenColor.position === null && diceNum === 6) {
      settokenColor((prev) => ({ ...prev, position: 1 }));
    }
    if (diceNum !== null && tokenColor.position !== null) {
      settokenColor((prev) => ({ ...prev, position: prev.position !== null ? prev.position + diceNum : null}));
      // setRedActive(false)
      // setYellowActive(true)
    }
  }
  console.log(tokenColor)

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
              <div id='red1' onClick={moveToken}><Token color={tokenColor.position !== null ? "" : "red-token"} /></div>
              <div id='red2'> <Token color={"red-token"} /></div>
            </div>
            <div>
              <div id='red3'><Token color={"red-token"} /></div>
              <div id='red4'><Token color={"red-token"} /></div>
            </div>
          </div>
          <div className="red-green-middle-area">
            <div className="zone" id='11' onClick={moveToken} >11{tokenColor.position === 11 && <Token color={"red-token"} />}</div>
            <div className="zone" id='12' onClick={moveToken} >12{tokenColor.position === 12 && <Token color={"red-token"} />}</div>
            <div className="zone" id='13' onClick={moveToken} >13{tokenColor.position === 13 && <Token color={"red-token"} />}</div>
            <div className="zone" id='10' onClick={moveToken} >10{tokenColor.position === 10 && <Token color={"red-token"} />}</div>
            <div className="green-fix-zone" id='g5'>g5<Token /></div>
            <div className="green-fix-zone" id='14' onClick={moveToken} >14{tokenColor.position === 14 && <Token color={"red-token"} />}</div>
            <div className="red-fix-zone" id='9' onClick={moveToken} >9{tokenColor.position === 9 && <Token color={"red-token"} />}</div>
            <div className="green-fix-zone" id='g4'>g4<Token /></div>
            <div className="zone" id='15' onClick={moveToken} >15{tokenColor.position === 15 && <Token color={"red-token"} />}</div>
            <div className="zone" id='8' onClick={moveToken} >8{tokenColor.position === 8 && <Token color={"red-token"} />}</div>
            <div className="green-fix-zone" id='g3'>g3<Token /></div>
            <div className="zone" id='16' onClick={moveToken} >16{tokenColor.position === 16 && <Token color={"red-token"} />}</div>
            <div className="zone" id='7' onClick={moveToken} >7{tokenColor.position === 7 && <Token color={"red-token"} />}</div>
            <div className="green-fix-zone" id='g2'>g2<Token /></div>
            <div className="zone" id='17' onClick={moveToken} >17{tokenColor.position === 17 && <Token color={"red-token"} />}</div>
            <div className="zone" id='6' onClick={moveToken} >6{tokenColor.position === 6 && <Token color={"red-token"} />}</div>
            <div className="green-fix-zone" id='g1'>g1<Token /></div>
            <div className="zone" id='18' onClick={moveToken} >18{tokenColor.position === 18 && <Token color={"red-token"} />}</div>
          </div>
          <div className="green-box">
            <div>
              <div><Token color={"green-token"} /></div>
              <div><Token color={"green-token"} /></div>
            </div>
            <div>
              <div><Token color={"green-token"} /></div>
              <div><Token color={"green-token"} /></div>
            </div>
          </div>
        </div>

        <div className="middle-container">
          <div className="red-yellow-middle-container">
            <div className="zone" id='52' >52{tokenColor.position === 52 && <Token color={"red-token"} />}</div>
            <div className="zone" id='51' onClick={moveToken} >51{tokenColor.position === 51 && <Token color={"red-token"} />}</div>
            <div className="zone" id='50' onClick={moveToken} >50{tokenColor.position === 50 && <Token color={"red-token"} />}</div>
            <div className="red-fix-zone" id='1' onClick={moveToken} >1{tokenColor.position === 1 && <Token color={"red-token"} />}</div>
            <div className="red-fix-zone" id='r5'>r5<Token /></div>
            <div className="zone" id='49' onClick={moveToken} >49{tokenColor.position === 49 && <Token color={"red-token"} />}</div>
            <div className="zone" id='2' onClick={moveToken} >2{tokenColor.position === 2 && <Token color={"red-token"} />}</div>
            <div className="red-fix-zone" id='r4'>r4<Token /></div>
            <div className="yellow-fix-zone" id='48' onClick={moveToken} >48{tokenColor.position === 48 && <Token color={"red-token"} />}</div>
            <div className="zone" id='3' onClick={moveToken} >3{tokenColor.position === 3 && <Token color={"red-token"} />}</div>
            <div className="red-fix-zone" id='r3'>r3<Token /></div>
            <div className="zone" id='47' onClick={moveToken} >47{tokenColor.position === 47 && <Token color={"red-token"} />}</div>
            <div className="zone" id='4' onClick={moveToken} >4{tokenColor.position === 4 && <Token color={"red-token"} />}</div>
            <div className="red-fix-zone" id='r2'>r2<Token /></div>
            <div className="zone" id='46' onClick={moveToken} >46{tokenColor.position === 46 && <Token color={"red-token"} />}</div>
            <div className="zone" id='5' onClick={moveToken} >5{tokenColor.position === 5 && <Token color={"red-token"} />}</div>
            <div className="red-fix-zone" id='r1'>r1<Token /></div>
            <div className="zone" id='45' onClick={moveToken} >45{tokenColor.position === 45 && <Token color={"red-token"} />}</div>
          </div>

          <div className="middle-box-middle-container"></div>

          <div className="green-blue-middle-container">
            <div className="zone" id='19' onClick={moveToken} >19{tokenColor.position === 19 && <Token color={"red-token"} />}</div>
            <div className="blue-fix-zone" id='b1'>b1<Token /></div>
            <div className="zone" id='31' onClick={moveToken} >31{tokenColor.position === 31 && <Token color={"red-token"} />}</div>
            <div className="zone" id='20' onClick={moveToken} >20{tokenColor.position === 20 && <Token color={"red-token"} />}</div>
            <div className="blue-fix-zone" id='b2'>b2<Token /></div>
            <div className="zone" id='30' onClick={moveToken} >30{tokenColor.position === 30 && <Token color={"red-token"} />}</div>
            <div className="zone" id='21' onClick={moveToken} >21{tokenColor.position === 21 && <Token color={"red-token"} />}</div>
            <div className="blue-fix-zone" id='b3'>b3<Token /></div>
            <div className="zone" id='29' onClick={moveToken} >29{tokenColor.position === 29 && <Token color={"red-token"} />}</div>
            <div className="green-fix-zone" id='22' onClick={moveToken} >22{tokenColor.position === 22 && <Token color={"red-token"} />}</div>
            <div className="blue-fix-zone" id='b4'>b4 <Token /></div>
            <div className="zone" id='28' onClick={moveToken} >28{tokenColor.position === 28 && <Token color={"red-token"} />}</div>
            <div className="zone" id='23' onClick={moveToken} >23{tokenColor.position === 23 && <Token color={"red-token"} />}</div>
            <div className="blue-fix-zone" id='b5'>b5<Token /></div>
            <div className="blue-fix-zone" id='27' onClick={moveToken} >27{tokenColor.position === 27 && <Token color={"red-token"} />}</div>
            <div className="zone" id='24' onClick={moveToken} >24{tokenColor.position === 24 && <Token color={"red-token"} />}</div>
            <div className="zone" id='25' onClick={moveToken} >25{tokenColor.position === 25 && <Token color={"red-token"} />}</div>
            <div className="zone" id='26' onClick={moveToken} >26{tokenColor.position === 26 && <Token color={"red-token"} />}</div>
          </div>
        </div>

        <div className="lower-container">
          <div className="yellow-box">
            <div>
              <div><Token color={"yellow-token"} /></div>
              <div><Token color={"yellow-token"} /></div>
            </div>
            <div>
              <div><Token color={"yellow-token"} /></div>
              <div><Token color={"yellow-token"} /></div>
            </div>
          </div>
          <div className="yellow-blue-middle-area">
            <div className="zone" id='44' onClick={moveToken} >44{tokenColor.position === 44 && <Token color={"red-token"} />}</div>
            <div className="yellow-fix-zone" id='y1'>y1<Token /></div>
            <div className="zone" id='32' onClick={moveToken} >32{tokenColor.position === 32 && <Token color={"red-token"} />}</div>
            <div className="zone" id='43' onClick={moveToken} >43{tokenColor.position === 43 && <Token color={"red-token"} />}</div>
            <div className="yellow-fix-zone" id='y2'>y2<Token /></div>
            <div className="zone" id='33' onClick={moveToken} >33{tokenColor.position === 33 && <Token color={"red-token"} />}</div>
            <div className="zone" id='42' onClick={moveToken} >42{tokenColor.position === 42 && <Token color={"red-token"} />}</div>
            <div className="yellow-fix-zone" id='y3'>y3<Token /></div>
            <div className="zone" id='34' onClick={moveToken} >34{tokenColor.position === 34 && <Token color={"red-token"} />}</div>
            <div className="zone" id='41' onClick={moveToken} >41{tokenColor.position === 41 && <Token color={"red-token"} />}</div>
            <div className="yellow-fix-zone" id='y4'>y4<Token /></div>
            <div className="blue-fix-zone" id='33' onClick={moveToken} >33{tokenColor.position === 33 && <Token color={"red-token"} />}</div>
            <div className="yellow-fix-zone" id='40' onClick={moveToken} >40{tokenColor.position === 40 && <Token color={"red-token"} />}</div>
            <div className="yellow-fix-zone" id='y5'>y5<Token /></div>
            <div className="zone" id='36' onClick={moveToken} >36{tokenColor.position === 36 && <Token color={"red-token"} />}</div>
            <div className="zone" id='39' onClick={moveToken} >39{tokenColor.position === 39 && <Token color={"red-token"} />}</div>
            <div className="zone" id='38' onClick={moveToken} >38{tokenColor.position === 38 && <Token color={"red-token"} />}</div>
            <div className="zone" id='37' onClick={moveToken} >37{tokenColor.position === 37 && <Token color={"red-token"} />}</div>
          </div>
          <div className="blue-box">
            <div>
              <div><Token color={"blue-token"} /></div>
              <div><Token color={"blue-token"} /></div>
            </div>
            <div>
              <div><Token color={"blue-token"} /></div>
              <div><Token color={"blue-token"} /></div>
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