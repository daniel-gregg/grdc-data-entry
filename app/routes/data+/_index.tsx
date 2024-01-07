import SurveyCoreAll from "survey-core"
const { SurveyModel } = SurveyCoreAll
import UiAll from "survey-react-ui";
const { Survey } = UiAll
import "survey-core/defaultV2.css";

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
  
const survey = new SurveyModel(surveyJson);

function onValueChanged(options: { value: string; }) {
  console.log("New value: " + options.value);
}

function onComplete(survey: { data: JSON; }) {
  console.log("Survey complete! Results: " + JSON.stringify(survey.data));
}

export default function SurveyPage() {
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