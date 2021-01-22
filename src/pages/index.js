import Layout from '../components/layout';
import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Button from '../components/button';

// Goal #1: Display the goals (name, icon) from the data fetched from mocky
/* Part 2:
  - Add input and button
  - Add a goal to the list locally


  Part 3:
  - Add 2 buttons: rotate goals up and down
*/

export default function Home() {
  const [goals, setGoals] = useState([]);
  const [newGoalName, setNewGoalName] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch('https://www.mocky.io/v2/5eb421880e00005000081991');
      const json = await response.json();

      setGoals(json.goals);
    })();
  }, []);

  const handleChange = e => {
    setNewGoalName(e.target.value);
  };

  const handleAdd = () => {
    setGoals([
      ...goals,
      {
        id: Math.random(),
        name: newGoalName,
      },
    ]);

    setNewGoalName('');
  };

  const handleRotateUp = () => {
    // Rotate up = shift -> push
    const goalsCopy = [...goals];
    goalsCopy.push(goalsCopy.shift());
    setGoals(goalsCopy);
  };

  const handleRotateDown = () => {
    // Rotate down = pop -> unshift
    const goalsCopy = [...goals];
    goalsCopy.unshift(goalsCopy.pop());
    setGoals(goalsCopy);
  };

  return (
    <Layout>
      {/* <img className="pitterpatter" src="/pitter_patter.gif" width="100%" height="auto" /> */}

      <div className="goals">
        {goals.map(goal => (
          <div className="goal" key={goal.id}>
            <div className="goalName">{goal.name}</div>
            <div className="goalIcon">{goal.icon}</div>
          </div>
        ))}
      </div>

      <input type="text" placeholder="Goal name" value={newGoalName} onChange={handleChange} />
      <br />
      <Button onClick={handleAdd}>Add</Button>
      <br />
      <Button onClick={handleRotateUp}>Rotate Up</Button>
      <br />
      <Button onClick={handleRotateDown}>Rotate Down</Button>

      <style jsx>{`
        .goals {
        }

        .goal {
          display: flex;
          flex-flow: row no-wrap;
          padding: var(--space-md);
        }

        .goalName {
          flex: 1 1 auto;
        }

        .goalIcon {
          flex: 0 0 auto;
        }

        .pitterpatter {
          display: block;
          margin: 24px auto;
        }
      `}</style>
    </Layout>
  );
}
