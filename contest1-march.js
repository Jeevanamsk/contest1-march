function OpeningCeremony() {
    console.log("Let the games begin");
    const score = { red: 0, blue: 0, green: 0, yellow: 0 };
    setTimeout(() => {
      Race100M(score, (newScore) => {
        console.log("New Score after Race100M: ", newScore);
        LongJump(newScore, (newScore) => {
          console.log("New Score after LongJump: ", newScore);
          HighJump(newScore, (newScore) => {
            console.log("New Score after HighJump: ", newScore);
            AwardCeremony(newScore);
          });
        });
      });
    }, 1000);
  }
  
  function Race100M(score, callback) {
    const timeRed = Math.floor(Math.random() * 6) + 10;
    const timeBlue = Math.floor(Math.random() * 6) + 10;
    const timeGreen = Math.floor(Math.random() * 6) + 10;
    const timeYellow = Math.floor(Math.random() * 6) + 10;
    const times = { red: timeRed, blue: timeBlue, green: timeGreen, yellow: timeYellow };
    const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
    const newScore = { ...score };
    newScore[sortedColors[0]] += 50;
    newScore[sortedColors[1]] += 25;
    callback(newScore, (newNewScore) => {
      console.log("New Score after callback from Race100M: ", newNewScore);
    });
  }
  
  function LongJump(score, callback) {
    const colors = ["red", "yellow", "green", "blue"];
    const winningColor = colors[Math.floor(Math.random() * 4)];
    const newScore = { ...score };
    newScore[winningColor] += 150;
    callback(newScore, (newNewScore) => {
      console.log("New Score after callback from LongJump: ", newNewScore);
    });
  }
  
  function HighJump(score, callback) {
    const input = prompt("What colour secured the highest jump?");
    let color = "";
    if (input === null || input === "") {
      console.log("Event was cancelled");
    } else {
      color = input.toLowerCase();
      if (["red", "yellow", "green", "blue"].includes(color)) {
        const newScore = { ...score };
        newScore[color] += 100;
        callback(newScore, (newNewScore) => {
          console.log("New Score after callback from HighJump: ", newNewScore);
        });
        return;
      } else {
        console.log("Invalid color input. Event was cancelled");
      }
    }
    callback(score, (newNewScore) => {
      console.log("New Score after callback from HighJump: ", newNewScore);
    });
  }
  
  function AwardCeremony(score) {
    console.log(`Yellow came first with ${score.yellow} points.`);
    console.log(`Red came second with ${score.red} points.`);
    console.log(`Green came third with ${score.green} points.`);
  }
  
  OpeningCeremony();
  