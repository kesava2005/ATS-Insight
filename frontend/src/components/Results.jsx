import React from 'react';
import { useLocation } from 'react-router-dom';
import ScoreComp from './ScoreComp';

// Utility to safely extract JSON string from code block in rawResult
function extractJsonFromMarkdown(raw) {
  if (!raw) return null;
 const start = raw.indexOf('```json');
 if (start === -1) return null;
  const afterStart = raw.slice(start + 7);
  const end = afterStart.indexOf('```');
  if (end === -1) return null;
  return afterStart.slice(0, end).trim();
}

function Results() {
  const { data } = useLocation().state || {};
  const rawResult = data?.result || '';

  const jsonString = extractJsonFromMarkdown(rawResult);

  let score = 0;
  let headings = [];
  let desc = [];

  try {
    if (jsonString) {
      const parsed = JSON.parse(jsonString);
      score = parsed.score || 0;
      headings = Array.isArray(parsed.headings) ? parsed.headings : [];
      desc = Array.isArray(parsed.desc) ? parsed.desc : [];
    }
  } catch (error) {
    console.error('Failed to parse JSON:', error);
  }

  // Combine headings and desc into pairs for display
  const improvements = headings.map((heading, index) => {
    const description = desc[index] || '';
    return { heading, description };
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen text-gray-800">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
          Resume Score
        </h2>

        <div className="flex justify-center my-6">
          <ScoreComp score={score} />
        </div>

        <h3 className="text-xl font-semibold mb-3 text-blue-600">
          Improvement Suggestions:
        </h3>

        <ul className="space-y-2">
          {improvements.length > 0 ? (
            improvements.map(({ heading, description }, idx) => (
              <li key={idx} className="text-gray-700">
                {/* Format as "1 heading description" */}
                <strong>{idx + 1}. </strong>
                <span>{heading} </span>
                <span>{description}</span>
              </li>
            ))
          ) : (
            <li className="text-red-500">No suggestions found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Results;
