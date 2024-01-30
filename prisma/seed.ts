import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//run this in Bash:
//npx ts-node --esm prisma/seed.ts
//then run:
//npx prisma migrate dev
//all will be up to date. 

//array of modules
// CREATE AN ARRAY OF MODULE NAMES HERE
const modules = []

//loop through modules and create f doesn't already exist
async function main() {
    const grdc_seed_db = await prisma.module.upsert({
        where: { moduleName: "FSS project assessment", },
        update: {},
        create: {
            model: {
                "title": "Farming Systems South: Ongoing evaluation",
                "description": "A short questionnaire to provide ongoing evaluation of the Farming Systems South (FSS) project. This questionnaire should take less than 5 minutes to complete.",
                "logoPosition": "right",
                "pages": [
                    {
                        "name": "page1",
                        "elements": [
                            {
                                "type": "html",
                                "name": "Introduction",
                                "html": "<p style=\"margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:107%;\"><span style=\"text-align: start;color: rgb(50, 54, 58);font-size: 19px;\"><strong>Farming Systems South: Short Evaluation Questionnaire</strong></span><br style=\"text-align: start;color: rgb(50, 54, 58);font-size: 18px;\"><br style=\"text-align: start;color: rgb(50, 54, 58);background-color: rgb(255, 255, 255);font-size: 18px;\"><span style=\"text-align: start;color: rgb(50, 54, 58);font-size: 16px;\"><u>About the Farming Systems South project:</u><br>The Farming Systems South (FSS) project is a research project focusing&nbsp;on delivering a better understanding of the drivers of profitability and sustainability in farming systems in southern Australia. The project runs over 5 years covering cropping regions in South Australia, Victoria and Tasmania.<br><br>The project is being led by the University of Adelaide. It is funded by Grains Research and Development Corporation (GRDC) with co-contributions from the University of Adelaide. We are almost 1 year along, with field trials (9 across SA and Vic), modelling and economics workstreams all building momentum.<br><br><u>This questionnaire:</u><br>The questionnaire presented in this survey involves 6 short questions that we expect will take less than 5 minutes to answer.&nbsp;<br><br>This survey is aimed at providing information to the project funder on project impact and learnings. The survey has been developed by the core project team based at the University of Adelaide, with input from GRDC, and is being operated by an external consultant. Project partners (University of Adelaide and GRDC) do not access the raw data associated with this survey.&nbsp;<br><br><u>Confidentiality</u><br>The data collected here is completely confidential. No identifying data is being collected from you (including IP address or any other location data) and all data will be collated without any other identifying information. For example, if you answer this in a workshop setting, those details will not be included in any data used by the consultant. Only the questions you respond to here will be saved - all of which are focused on project outcomes with no identifying data.&nbsp;<br><br><u>Voluntary participation</u><br>Your participation in this survey is completely voluntary. You may choose not to complete this survey. Furthermore, all questions are non-mandatory meaning that you can submit your questionnaire without answering any questions and simply clicking through to the final submission screen.&nbsp;<br><br><u>Data treatment and ownership</u><br>The consultant will collate the data and report to the project team on aggregated responses only based on a standardised reporting format. The data will deleted upon project completion. We are unable to delete your data once it is submitted as we are not able to identify any individual responses.&nbsp;<br><br><u>More information</u><br>If you wish to know more about the project, or have concerns about the conduct of this survey, you can contact the project manager, Dr Matthew Knowling, by email at matthew.knowling@adelaide.edu.au. You can also contact the GRDC project manager XXX at EMAIL.&nbsp;</span><br style=\"text-align: start;color: rgb(50, 54, 58);font-size: 18px;\"><br style=\"text-align: start;color: rgb(50, 54, 58);background-color: rgb(255, 255, 255);font-size: 18px;\"><br style=\"text-align: start;color: rgb(50, 54, 58);font-size: 18px;\"><span style=\"text-align: start;color: rgb(50, 54, 58);font-size: 18px;\">&nbsp;</span></p>"
                            }
                        ]
                    },
                    {
                        "name": "page2",
                        "elements": [
                            {
                                "type": "dropdown",
                                "name": "Q1_WLPP_AWARENESS_UNDERSTANDING",
                                "title": "Please indicate using the scale below your understanding of the term 'Water Limited Production Potential' (WLPP).",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "1 = Not aware of this term at all"
                                    },
                                    {
                                        "value": "3",
                                        "text": "2 = Have slight awareness"
                                    },
                                    {
                                        "value": "4",
                                        "text": "3 = Have a moderate understanding of this term"
                                    },
                                    {
                                        "value": "6",
                                        "text": "4 = A good understanding"
                                    },
                                    {
                                        "value": "7",
                                        "text": "5 = Strong or expert understanding of this term and its implications for farm management"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "page3",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "Q2_SELECT_CORRECT_DEFINITION_WLPP",
                                "title": "Please select the option you think would best describe the term water- limited production potential",
                                "choices": [
                                    {
                                        "value": "MAX_YIELD_FOR_GSR",
                                        "text": "The maximum yield or profit achievable for the amount of growing season rainfall received"
                                    },
                                    {
                                        "value": "MAX_YIELD_FOR_GSR_PLUS_FALLOW_MOISTURE",
                                        "text": "The maximum yield achievable from the water used by a crop, including from growing season rainfall and fallow moisture"
                                    },
                                    {
                                        "value": "MAX_YIELD_FOR_CROP_WATER_USAGE",
                                        "text": "The maximum crop or economic production achievable from the water used by a crop within a season, or by crops across a sequence"
                                    },
                                    {
                                        "value": "MAX_YIELD_FOR_CROP_IN_SEASON",
                                        "text": "The maximum yield obtained by a crop in a given season"
                                    },
                                    {
                                        "value": "MAX_YIELD_WHEN_ALL_RIGHT",
                                        "text": "The yield I achieve when I get everything right"
                                    },
                                    {
                                        "value": "MAX_YIELD_FROM_WUE",
                                        "text": "The yield or profit achieved by maximising water use efficiency"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{Q1_WLPP_AWARENESS_UNDERSTANDING} <> 1"
                    },
                    {
                        "name": "page4",
                        "elements": [
                            {
                                "type": "html",
                                "name": "question2",
                                "html": "<p>THIS SECTION WILL PROVIDE A BRIEF AND SIMPLE EXPLANATION OF WLPP</p>\n<p>Please refer to the WLPP document for a draft of the WLPP description statement that may be used as the basis for this.&nbsp;</p>"
                            }
                        ]
                    },
                    {
                        "name": "page5",
                        "elements": [
                            {
                                "type": "html",
                                "name": "question4",
                                "html": "<p style=\"margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:107%;\"><strong><span style=\"font-size: 20px;\">Considering Water Limited Production Potential and your farm</span></strong></p>\n<p style=\"margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:107%;\">The following ratings questions is focused on how well you think you managed the Water Limited Production Potential (WLPP) on your farm in the past and more recently (e.g. the last year or two).&nbsp;</p>\n<p style=\"margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:107%;\">There is no correct answer for this. Rather you should reflect on how well you think you are managing WLPP relative to the average of similar farms in your area.&nbsp;<br style=\"text-align: start;color: rgb(50, 54, 58);font-size: 18px;\"><br style=\"text-align: start;color: rgb(50, 54, 58);font-size: 18px;\"><span style=\"text-align: start;color: rgb(50, 54, 58);font-size: 18px;\">&nbsp;</span></p>"
                            },
                            {
                                "type": "dropdown",
                                "name": "Q3_HOW_WELL_ACHIEVING_WLPP_HISTORICAL",
                                "title": "How well do you think you have historically achieved your WLPP? (e.g. think about 5 years and longer ago)",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "1 = Not at all well"
                                    },
                                    {
                                        "value": "3",
                                        "text": "2 = Below average"
                                    },
                                    {
                                        "value": "4",
                                        "text": "3 = About average in comparison to peers"
                                    },
                                    {
                                        "value": "5",
                                        "text": "4 = Above average"
                                    },
                                    {
                                        "value": "7",
                                        "text": "5 = Extremely well"
                                    }
                                ]
                            },
                            {
                                "type": "dropdown",
                                "name": "Q4_HOW_WELL_ACHIEVING_WLPP_RECENT",
                                "title": "How well do you think you have RECENTLY achieved your WLPP? (e.g. think about the most recent few years)",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "1 = Not at all well"
                                    },
                                    {
                                        "value": "3",
                                        "text": "2 = Below average"
                                    },
                                    {
                                        "value": "4",
                                        "text": "3 = About average in comparison to peers"
                                    },
                                    {
                                        "value": "5",
                                        "text": "4 = Above average"
                                    },
                                    {
                                        "value": "7",
                                        "text": "5 = Extremely well"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "page8",
                        "elements": [
                            {
                                "type": "html",
                                "name": "question6",
                                "html": "<p style=\"margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:107%;\"><strong><span style=\"font-size: 20px;\">The importance of WLPP for different aspects of your farm planning</span></strong></p>\n<p style=\"margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:107%;\">The following ratings questions are seek to understand where you think management of Water Limited Production Potential (WLPP) matters most for your farm management decisions. &nbsp;</p>\n<p style=\"margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;line-height:107%;\">There is no correct answer for these ratings questions. Rather you should reflect on the relative importance of WLPP for the range of farm management issues shown in the questions below.&nbsp;<br style=\"text-align: start;color: rgb(50, 54, 58);font-size: 18px;\"><span style=\"text-align: start;color: rgb(50, 54, 58);font-size: 18px;\">&nbsp;</span></p>"
                            },
                            {
                                "type": "dropdown",
                                "name": "MGMT_IMPORTANCE_WLPP_CROP_SEQUENCE",
                                "title": "Crop sequence/rotation",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "Not at all important"
                                    },
                                    {
                                        "value": "2",
                                        "text": "Slightly important"
                                    },
                                    {
                                        "value": "3",
                                        "text": "Moderately important"
                                    },
                                    {
                                        "value": "4",
                                        "text": "Quite important"
                                    },
                                    {
                                        "value": "5",
                                        "text": "Extremely important"
                                    }
                                ]
                            },
                            {
                                "type": "dropdown",
                                "name": "MGMT_IMPORTANCE_WLPP_TIME_OF_SOWING",
                                "title": "Time of sowing",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "Not at all important"
                                    },
                                    {
                                        "value": "2",
                                        "text": "Slightly important"
                                    },
                                    {
                                        "value": "3",
                                        "text": "Moderately important"
                                    },
                                    {
                                        "value": "4",
                                        "text": "Quite important"
                                    },
                                    {
                                        "value": "5",
                                        "text": "Extremely important"
                                    }
                                ]
                            },
                            {
                                "type": "dropdown",
                                "name": "MGMT_IMPORTANCE_WLPP_VARIETY_CHOICE",
                                "title": "Choice of variety",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "Not at all important"
                                    },
                                    {
                                        "value": "2",
                                        "text": "Slightly important"
                                    },
                                    {
                                        "value": "3",
                                        "text": "Moderately important"
                                    },
                                    {
                                        "value": "4",
                                        "text": "Quite important"
                                    },
                                    {
                                        "value": "5",
                                        "text": "Extremely important"
                                    }
                                ]
                            },
                            {
                                "type": "dropdown",
                                "name": "MGMT_IMPORTANCE_WLPP_NITROGEN_MGMT",
                                "title": "Nitrogen management",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "Not at all important"
                                    },
                                    {
                                        "value": "2",
                                        "text": "Slightly important"
                                    },
                                    {
                                        "value": "3",
                                        "text": "Moderately important"
                                    },
                                    {
                                        "value": "4",
                                        "text": "Quite important"
                                    },
                                    {
                                        "value": "5",
                                        "text": "Extremely important"
                                    }
                                ]
                            },
                            {
                                "type": "dropdown",
                                "name": "MGMT_IMPORTANCE_WLPP_DISEASE_MANAGEMENT",
                                "title": "Disease management",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "Not at all important"
                                    },
                                    {
                                        "value": "2",
                                        "text": "Slightly important"
                                    },
                                    {
                                        "value": "3",
                                        "text": "Moderately important"
                                    },
                                    {
                                        "value": "4",
                                        "text": "Quite important"
                                    },
                                    {
                                        "value": "5",
                                        "text": "Extremely important"
                                    }
                                ]
                            },
                            {
                                "type": "dropdown",
                                "name": "MGMT_IMPORTANCE_WLPP_WEED_MANAGEMENT",
                                "title": "Weed management",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "Not at all important"
                                    },
                                    {
                                        "value": "2",
                                        "text": "Slightly important"
                                    },
                                    {
                                        "value": "3",
                                        "text": "Moderately important"
                                    },
                                    {
                                        "value": "4",
                                        "text": "Quite important"
                                    },
                                    {
                                        "value": "5",
                                        "text": "Extremely important"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "page6",
                        "elements": [
                            {
                                "type": "checkbox",
                                "name": "Q5_PROJECT_AWARENESS",
                                "title": "Please select all that apply regarding your awareness of, and participation in the GRDC-University of Adelaide 'Farming Systems South' project",
                                "choices": [
                                    {
                                        "value": "HEARD_OF",
                                        "text": "I've heard of it from others"
                                    },
                                    {
                                        "value": "READ_ABOUT",
                                        "text": "I've read about it"
                                    },
                                    {
                                        "value": "ATTENDED_WORKSHOP",
                                        "text": "I've attended a project workshop"
                                    },
                                    {
                                        "value": "PARTICIPATED_FIELD_DAY",
                                        "text": "I've participated in a field day for this project"
                                    }
                                ],
                                "showOtherItem": true
                            }
                        ]
                    },
                    {
                        "name": "page7",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "Q6_OCCUPATION",
                                "title": "What best describes your occupation?",
                                "choices": [
                                    {
                                        "value": "GROWER",
                                        "text": "Grower"
                                    },
                                    {
                                        "value": "ADVISOR",
                                        "text": "Advisor"
                                    },
                                    {
                                        "value": "GROWER_AND_ADVISOR",
                                        "text": "Both"
                                    }
                                ],
                                "showOtherItem": true
                            }
                        ]
                    }
                ]
            },
            moduleName: "FSS project assessment",
            moduleDescription: "A short survey seeking to generate data from cropping enterprise managers participating in the FSS project that provides for a simple but effective assessment of the project in terms of knowledge regarding the concept of 'Water Limited Production Potential' (WLPP)"
        }
    })

    const user = await prisma.user.createMany({
        data: [
            {email: "daniel.gregg@adelaide.edu.au"},
            {email: "matthew.knowling@adelaide.edu.au"}
        ]
    })
}

main();
