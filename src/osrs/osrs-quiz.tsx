import { useRef, useState } from 'react';
import { ratio } from 'fuzzball';

import { Skill, skillDefinitions } from "./skills/skill-definition";
import './osrs-quiz.scss';

type Fields = { [key in Skill]?: string };
type Results = { [key in Skill]: boolean };

const ANSWER_MIN_RATIO_CORRECT = 80;

export function OsrsQuiz() {
    const textInputFields = useRef<Fields>({});
    const dropdownInputFields = useRef<Fields>({});
    const [isAssisted, setIsAssisted] = useState(false);
    const [results, setResults] = useState<Results>();

    function calculateResults() {
        const fields = isAssisted ? dropdownInputFields.current : textInputFields.current;
        const newResults: Partial<Results> = {};
        Object.values(Skill).forEach(skill => {
            const answer = fields[skill] || '';
            let isCorrect = ratio(answer, skill) >= ANSWER_MIN_RATIO_CORRECT;
            skillDefinitions[skill].allowed?.forEach(allowed => {
                const isAllowed = ratio(answer, allowed) >= ANSWER_MIN_RATIO_CORRECT;
                if (isAllowed) {
                    isCorrect = true;
                }
            });

            newResults[skill] = isCorrect;
        });

        setResults(newResults as Results);
    }

    function renderTextInput(skill: Skill) {
        return (
            <input
                disabled={Boolean(results)}
                key={skill}
                className="skill-input skill-input__text"
                type='text'
                defaultValue={textInputFields.current[skill]}
                onChange={(e) => textInputFields.current[skill] = e.target.value}
            />
        );
    }

    function renderDropdownInput(skill: Skill) {
        return (
            <select
                disabled={Boolean(results)}
                className="skill-input skill-input__dropdown"
                onChange={e => dropdownInputFields.current[skill] = e.target.value}
                defaultValue={dropdownInputFields.current[skill]}
            >
                <option value={undefined}> ------- </option>
                {Object.values(Skill).map(opt => {
                    return (
                        <option value={opt}>{opt}</option>
                    );
                })}
            </select>
        );
    }

    function renderScore() {
        if (!results) {
            return;
        }

        const total = Object.values(Skill).length;
        const correct = Object.values(results).filter(res => res).length;
        return (
            <div className='score'>
                Score: {correct}/{total}
            </div>
        );
    }

    return (
        <div className="osrs-quiz">
            <div className="osrs-quiz__title">OSRS</div>
            <div className="osrs-quiz__subtitle">Guess The Skills</div>
            <div className="option-assisted">
                <div className='option-assisted__input'>
                    <input type='checkbox' checked={isAssisted} onChange={e => setIsAssisted(e.target.checked)} />
                    Assisted
                </div>
                <div className='option-assisted__description'>
                    Assisted mode will provide dropdown inputs instead of textboxes.
                </div>
            </div>
            <div className="skills-grid">
                {Object.values(Skill).map(skill => {
                    let answerClasses = 'answer';
                    if (results) {
                        if (results[skill]) {
                            answerClasses += ' answer--correct'
                        } else {
                            answerClasses += ' answer--incorrect'
                        }
                    } else {
                        answerClasses += ' answer--hidden'
                    }

                    return (
                        <div className="skill">
                            <div className="skill-image-container"><img src={skillDefinitions[skill].image} /></div>
                            {isAssisted ? renderDropdownInput(skill) : renderTextInput(skill)}
                            <div className={answerClasses}>{skill}</div>
                        </div>
                    );
                })}
            </div>
            <div className='submit'>
                <button onClick={() => calculateResults()}>Submit!</button>
            </div>
            {renderScore()}
        </div>
    );
}
