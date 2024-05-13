import { useState } from 'react'

import { EXAMPLES } from "./data.js"

import reactImg from "./assets/react-core-concepts.png"
import componentsImg from "./assets/components.png"
import { CORE_CONCEPTS } from "./data.js"
import Header from "./Header.jsx"
import CoreConcepts from "./Concepts.jsx"
import TabButton from "./TabButton.jsx"
import React from "react"

console.log(componentsImg)

const descriptions = ['fundamental', 'core', 'crucial']

function random(max) {
  return Math.floor(Math.random() * (max + 1))
}


function App() {

  const [sTopic, ssTopic] = useState('');

  function handleSelect(selected) {
    ssTopic(selected)
  }


  return (
    <div>
      <Header></Header>
      <main>
        <h2>Core Concepts</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcepts

              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}>

            </CoreConcepts>

            <CoreConcepts
              {...CORE_CONCEPTS[1]}>
            </CoreConcepts>

            <CoreConcepts
              {...CORE_CONCEPTS[2]}>
            </CoreConcepts>

            <CoreConcepts
              {...CORE_CONCEPTS[3]}>
            </CoreConcepts>
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          {!sTopic && <p>select a topic</p>}

          {sTopic && <div id="tab-content">


            <h3>{EXAMPLES[sTopic].title}</h3>
            <p >{EXAMPLES[sTopic].description}</p>

            <pre>

              <code >

                {EXAMPLES[sTopic].code}

              </code>

            </pre>


          </div>}
        </section>

      </main>
    </div>
  );
}

export default App;
