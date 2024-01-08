import SurveyCoreAll from "survey-core"
const { SurveyModel, StylesManager } = SurveyCoreAll
import UiAll from "survey-react-ui";
const { Survey } = UiAll
import "survey-core/defaultV2.min.css";
import { surveyTheme } from '~/styles/surveyTheme';
import { json } from "@remix-run/node";

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: "https://unpkg.com/survey-core/defaultV2.min.css" },]
      /* {rel: "stylesheet", href: "https://unpkg.com/survey-core/layered-dark-panelless.min.js"}] */
    : []),
  // ...
];

const surveyJson: any = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]
}


function onValueChanged(options: { value: string; }) {
  console.log("New value: " + options.value);
}

function onComplete(survey: { data: JSON; }) {
  console.log("Survey complete! Results: " + JSON.stringify(survey.data));
}

export default function SurveyPage() {
  const survey = new SurveyModel(surveyJson);
  /* survey.applyTheme(); */
  return (
    <div className="container">
      <h1>SurveyJS Library / Runner</h1>
      <Survey
        model={survey}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
      />
    </div>
  );
}