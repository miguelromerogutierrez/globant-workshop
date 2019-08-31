import React from 'react'
import ErrorBoundaries from './ErrorBoundaries';
import Excercise1 from './excercises/01';
import Excercise2 from './excercises/02';
import Excercise3 from './excercises/03';
import Excercise4 from './excercises/04';
import Excercise5 from './excercises/05';

import Excercise1Final from './excercisesFinal/01';
import Excercise2Final from './excercisesFinal/02';
import Excercise3Final from './excercisesFinal/03';
import Excercise4Final from './excercisesFinal/04';
import Excercise5Final from './excercisesFinal/05';

import './App.css';

const Components = {
  '01': {
    id: '01',
    title: 'Handling form state',
    next: '02',
    prev: false,
    excercise: Excercise1,
    excerciseFinal: Excercise1Final
  },
  '02': {
    id: '02',
    title: 'Handling form state with reducers',
    next: '03',
    prev: '01',
    excercise: Excercise2,
    excerciseFinal: Excercise2Final
  },
  '03': {
    id: '03',
    title: 'Use Contexts',
    next: '04',
    prev: '02',
    excercise: Excercise3,
    excerciseFinal: Excercise3Final
  },
  '04': {
    id: '04',
    title: 'Calendar custom hook',
    next: '05',
    prev: '03',
    excercise: Excercise4,
    excerciseFinal: Excercise4Final
  },
  '05': {
    id: '05',
    title: 'State form hook',
    next: false,
    prev: '04',
    excercise: Excercise5,
    excerciseFinal: Excercise5Final
  }
};

export default function App() {
  const [component, setComponent] = React.useState(Components['01']);
  const handleNext = () => setComponent(Components[component.next]);
  const handlePrev = () => setComponent(Components[component.prev]);
  return (
    <div>
      <div className="header">
        <h1>React Hooks: {component.title}</h1>
        <div className="navigation">
          {
            component.prev
            ? <button className="navigation-prev" onClick={handlePrev}>{`<=`} Excercise {component.prev}</button>
            : null
          }
          {
            component.next
            ? <button className="navigation-next" onClick={handleNext}>Excercise {component.next} =></button>
            : null
          }
        </div>
      </div>
      <div className="content">
        <div className="content--container">
          <div className="content-subcontainer">{
          <ErrorBoundaries>
            <component.excercise />
          </ErrorBoundaries>
          }</div>
          <div className="content-subcontainer">{<component.excerciseFinal />}</div>
        </div>
      </div>
    </div>
  )
}
