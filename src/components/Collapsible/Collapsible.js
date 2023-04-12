import React, { useState } from 'react'
import ExpandablePanel from '../Accordion/ExpandablePanel';
import HighlightWithinTextarea from 'react-highlight-within-textarea';

import './Collapsible.css';

export default function Collapsible() {
  const [text, setText] = useState('');
  const [testText, setTestText] = useState();
  const [showHighlightedText, setShowHighlightedText] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if(!showHighlightedText) {
      setShowHighlightedText(true);
    }
  }


  const renderTextForm = () => (
    <div>
      <label>Regex :</label>
      <br />
      <textarea
        rows={4}
        cols={40}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
    </div>
  )

  const renderTestTextForm = () => (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1.2rem"}}>
      <label>Test Text :</label>
      <br />
      <textarea
        rows={4}
        cols={40}
        value={testText}
        onChange={(e) => setTestText(e.target.value)}
      />
      <br />
      <button
        type='submit'
      >
        Apply Regex
      </button>
    </form>
  )

  const renderHighlightedText = () => (
    <div>
      <label>Regex Matches Highlighted Text :</label>
      <div className='area'>
        <HighlightWithinTextarea
          highlight={text}
          value={testText}
        />
      </div>
      
    </div>
  )

  return (
    <>
      {renderTextForm()}
      <div>
        <ExpandablePanel panelname={"Simple Text"}>
         {renderTestTextForm()}
         {showHighlightedText && renderHighlightedText()}
        </ExpandablePanel>

        <ExpandablePanel panelname={"Use Notes"}>
          This will contain some use notes.
        </ExpandablePanel>

        <ExpandablePanel panelname={"Search Regression Notes"}>
          This will contain some search regression notes
        </ExpandablePanel>
      </div>
    </>
  )
}
