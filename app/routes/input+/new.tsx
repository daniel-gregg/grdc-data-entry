//Survey JS imports
import SurveyCoreAll from "survey-core"
const { SurveyModel, Model } = SurveyCoreAll
import UiAll from "survey-react-ui";
const { Survey } = UiAll
import "survey-core/defaultV2.min.css";

//Basic remix imports
import { cssBundleHref } from "@remix-run/css-bundle";
import type { ActionFunction, ActionFunctionArgs, LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData, useSubmit, useFetcher } from "@remix-run/react";
import { json } from '@remix-run/node'
import { db } from '~/utils/db.server'

//useSubmit is used for handling form changes (before final submit) in remix
//see here for use when linking to DB:
//https://remix.run/docs/en/1.19.3/hooks/use-submit

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: "https://unpkg.com/survey-core/defaultV2.min.css" },]
    : []),
  // ...
];

//Use loader function here and add the model definition (surveyJson) to that
export const loader = async() => {

  //Load module - NOTE need to define moduleName from user selection
  const data = await db.module.findUnique({
    where: { moduleName: "FSS project assessment" },
  });

  //Define the survey model for usage here
  const surveyData = json({ data: data?.model })

  return ( surveyData )
  
}


export async function action({ 
  request 
  }: ActionFunctionArgs) {

    const resultJson = await request.json()
    console.log(resultJson)
    
    //Get the module ID to include in the results
    const data = await db.module.findUnique({
      where: { moduleName: "FSS project assessment" },
    });

    
    //console.log(JSON.stringify(data)) //this is now logging the survey model!!!
    console.log("this is the module id:" + data?.id)
    if(data){
      const result = JSON.stringify(resultJson)
      //Send the data to the server
      await db.result.create({
        data: {
          resultJSON: result,
          resultModuleId: data.id,
        },
      }) 
    }
    
    return null
  }


// Component for rendering
export default function SurveyPage() {

  //Functions to support loading and post

  //Load survey from loader function
  const survey = new SurveyModel( useLoaderData<typeof loader>().data )
  const { submit } = useFetcher();
  /* survey.applyTheme(); */ /* For later when have worked out how to import custom themes */

  // record completion of the survey
  async function onComplete(survey: { data: JSON; }) {
    //get results
    const resultsJson = JSON.stringify(survey.data);
    //console.log("this is the onComplete log of survey results")
    //console.log(resultsJson) //string
    
    //send to action function
    submit(resultsJson,{ 
            method: "post", 
            encType: "application/json",
            action: "/data"
          })
  }


  //Component
  return (
    <div className="container">
      {/* Add a header or navigation in here */}
      {/*<fetcher.Form id="fetch-survey-results" method="post" action="/data"> */}
        <Survey
        model={survey}
        onComplete={onComplete}
        //onValueChanged={onValueChanged}
        />
      {/*</fetcher.Form> */}
    </div>
  );
}