export interface ISurveyDefinition {
    id: string,
    name: string,
    json: any
}

export const defaultJSON = {
    id: '',
    name: 'New Survey',
    json: {
        elements: [
            { type: 'radiogroup', name: 'question1', choices: [ '1', '2', '3' ] }
        ]
    }
}

export const survey1Json = {
  id: "1",
  name: "Product Feedback Survey",
  json: {
    "title": "Product Feedback Survey",
    "description": "Your opinion matters to us!",
    // "logo": "logo1000.png",
    "logoFit": "cover",
    "logoPosition": "right",
    "logoHeight": "100px",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "What is your gender?",
        "isRequired": true,
        "choices": [
         {
          "value": "Image 1",
          "text": "Male"
         },
         {
          "value": "Image 2",
          "text": "Female"
         }
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "Which age group do belong to?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "18-29"
         },
         {
          "value": "Item 2",
          "text": "30-44"
         },
         {
          "value": "Item 3",
          "text": "45-59"
         },
         {
          "value": "Item 4",
          "text": "60 over"
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
        "name": "question3",
        "title": "Choose religion Question for statistical purposes only",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Druze"
         },
         {
          "value": "Item 2",
          "text": "Christian"
         },
         {
          "value": "Item 3",
          "text": "Muslim"
         },
         {
          "value": "Item 4",
          "text": "I refuse to answer"
         }
        ]
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "dropdown",
        "name": "question4",
        "title": "4  If Knesset elections are held in the near future?",
        "defaultValue": "Item 2",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "I don't know / I  haven't decided yet"
         },
         {
          "value": "Item 2",
          "text": "I will vote"
         },
         {
          "value": "Item 3",
          "text": "I will not vote"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question5",
        "title": "If the Knesset elections were held today, who would you vote for",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "I haven't decided yet"
         },
         {
          "value": "Item 2",
          "text": "Kahol Lavan"
         },
         {
          "value": "Item 3",
          "text": "The party  of  Gideon Saar and  Gadi Eisenkot"
         },
         {
          "value": "Item 4",
          "text": "Likud"
         },
         {
          "value": "Item 5",
          "text": "The last party"
         },
         {
          "value": "Item 6",
          "text": "Yesh come back"
         },
         {
          "value": "Item 7",
          "text": "work or merits"
         },
         {
          "value": "Item 8",
          "text": "The joint list"
         }
        ]
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question6",
        "title": " Did you vote in the last Knesset elections?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "I refuse to answer"
         },
         {
          "value": "Item 2",
          "text": "Yes, I voted"
         },
         {
          "value": "Item 3",
          "text": "No, I didn't vote"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question7",
        "title": " Who did you vote for in the last Knesset elections?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "I voted the another party"
         },
         {
          "value": "Item 2",
          "text": "I voted for Labor, Meretz Gesher"
         },
         {
          "value": "Item 3",
          "text": "I voted  for the Join List"
         },
         {
          "value": "Item 4",
          "text": "I voted for alcohol lavan"
         }
        ]
       }
      ]
     },
     {
      "name": "page6",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question8",
        "title": "Choose your region",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Galilee"
         },
         {
          "value": "Item 2",
          "text": "Mixied cities"
         },
         {
          "value": "Item 3",
          "text": "Nothern triangle"
         },
         {
          "value": "Item 4",
          "text": "Negev"
         },
         {
          "value": "Item 5",
          "text": "Southern triangle"
         }
        ]
       }
      ]
     },
     {
      "name": "page7",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question9",
        "title": "Among the four parties that make up the Joint List, who is closest today to your principles and opinions?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Islamic-Unified Arabic "
         },
         {
          "value": "Item 2",
          "text": "front"
         },
         {
          "value": "Item 3",
          "text": "the gathering"
         },
         {
          "value": "Item 4",
          "text": "Arabic for change"
         },
         {
          "value": "Item 5",
          "text": "No one"
         }
        ]
       }
      ]
     },
     {
      "name": "page8",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question10",
        "title": " How close or far are you from the views and orientations of the United Arab List - the Islamic Movement?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Tool close"
         },
         {
          "value": "Item 2",
          "text": "Close"
         },
         {
          "value": "Item 3",
          "text": "far"
         },
         {
          "value": "Item 4",
          "text": "So far"
         }
        ]
       }
      ]
     },
     {
      "name": "page9",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question11",
        "title": " How do you identify yourself?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Secular"
         },
         {
          "value": "Item 2",
          "text": "I refuse to answer"
         },
         {
          "value": "Item 3",
          "text": "Religious"
         },
         {
          "value": "Item 4",
          "text": "Governor"
         }
        ]
       }
      ]
     },
     {
      "name": "page10",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question12",
        "title": "What do you think of the approach of Representative Mansour Abbas, which raises the possibility of dealing with the prime minister and the right in exchange for rights for Arab citizens?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "I don't know / I refuse to answer"
         },
         {
          "value": "Item 2",
          "text": "I support this approach"
         },
         {
          "value": "Item 3",
          "text": "I oppose this approach"
         }
        ]
       }
      ]
     },
     {
      "name": "page11",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question13",
        "title": " How close or far are you from the views and orientations of Representative Mansour Abbas?",
        "choices": [
         {
          "value": "Item 1",
          "text": "Too close"
         },
         {
          "value": "Item 2",
          "text": "Close"
         },
         {
          "value": "Item 3",
          "text": "Far"
         },
         {
          "value": "Item 4",
          "text": "So far"
         }
        ]
       }
      ]
     },
     {
      "name": "page12",
      "elements": [
       {
        "type": "imagepicker",
        "name": "question14",
        "choices": [
         {
          "value": "Image 1",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
         },
         {
          "value": "Image 2",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
         },
         {
          "value": "Image 3",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
         },
         {
          "value": "Image 4",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
         }
        ]
       },
       {
        "type": "rating",
        "name": "question16"
       }
      ]
     }
    ]
   }
};

export const survey1Results = [
    {'Quality':{'affordable':'5','better then others':'5','does what it claims':'5','easy to use':'5'},'satisfaction':5,'recommend friends':5,'suggestions':'I am happy!','price to competitors':'Not sure','price':'low','pricelimit':{'mostamount':'100','leastamount':'100'}},
    {'Quality':{'affordable':'3','does what it claims':'2','better then others':'2','easy to use':'3'},'satisfaction':3,'suggestions':'better support','price to competitors':'Not sure','price':'high','pricelimit':{'mostamount':'60','leastamount':'10'}}
];

export const survey2Json = {
  id: "2",
  name: "Customer and their partner income survey",
  json: {
    completeText: "Finish",
    pageNextText: "Continue",
    pagePrevText: "Previous",
    pages: [{
      elements: [{
        type: "panel",
        elements: [{
          type: "html",
          name: "income_intro",
          html:
            "Income. In this section, you will be asked about your current employment status and other ways you and your partner receive income. It will be handy to have the following in front of you: payslip (for employment details), latest statement from any payments (from Centrelink or other authority), a current Centrelink Schedule for any account-based pension from super, annuities, or other income stream products that you may own. If you don't have a current one, you can get these schedules by contacting your income stream provider."
        }],
        name: "panel1"
      }],
      name: "page0"
    }, {
      elements: [{
        type: "panel",
        elements: [{
          type: "radiogroup",
          choices: [
            "Married",
            "In a registered relationship",
            "Living with my partner",
            "Widowed",
            "Single"
          ],
          name: "maritalstatus_c",
          title: " "
        }],
        name: "panel13",
        title: "What is your marital status?"
      }],
      name: "page1"
    }, {
      elements: [{
        type: "panel",
        elements: [{
          type: "panel",
          elements: [{
            type: "radiogroup",
            choices: [{
              value: "1",
              text: "Yes"
            }, {
              value: "0",
              text: "No"
            }],
            colCount: 2,
            isRequired: true,
            name: "member_receives_income_from_employment",
            title: " "
          }, {
            type: "checkbox",
            name: "member_type_of_employment",
            visible: false,
            visibleIf: "{member_receives_income_from_employment} =1",
            title: "  ",
            isRequired: true,
            choices: [
              "Self-employed",
              "Other types of employment"
            ]
          }],
          name: "panel2",
          title: "You"
        }, {
          type: "panel",
          elements: [{
            type: "radiogroup",
            choices: [{
              value: "1",
              text: "Yes"
            }, {
              value: "0",
              text: "No"
            }],
            colCount: 2,
            isRequired: true,
            name: "partner_receives_income_from_employment",
            title: " "
          }, {
            type: "checkbox",
            name: "partner_type_of_employment",
            visible: false,
            visibleIf: "{partner_receives_income_from_employment} =1",
            title: " ",
            isRequired: true,
            choices: [
              "Self-employed",
              "Other types of employment"
            ]
          }],
          name: "panel1",
          startWithNewLine: false,
          title: "Your Partner",
          visibleIf:
            "{maritalstatus_c} = 'Married' or {maritalstatus_c} = 'In a registered relationship' or {maritalstatus_c} = 'Living with my partner'"
        }],
        name: "panel5",
        title: "Do you and/or your partner currently receive income from employment?"
      }],
      name: "page2"
    }, {
      elements: [{
        type: "panel",
        elements: [{
          type: "panel",
          elements: [{
            type: "paneldynamic",
            minPanelCount: 1,
            name: "member_array_employer_names",
            valueName: "member_array_employer",
            title: "Enter information about your employers",
            panelAddText: "Add another employer",
            panelCount: 1,
            templateElements: [{
              type: "text",
              name: "member_employer_name",
              valueName: "name",
              title: "Employer name"
            }]
          }],
          name: "panel2",
          title: "You",
          visible: false,
          visibleIf: "{member_type_of_employment} contains 'Other types of employment'"
        }, {
          type: "panel",
          elements: [{
            type: "paneldynamic",
            minPanelCount: 1,
            name: "partner_array_employer_names",
            valueName: "partner_array_employer",
            title: "Enter information about employers of your partner",
            panelAddText: "Add another employer",
            panelCount: 1,
            templateElements: [{
              type: "text",
              name: "partner_employer_name",
              valueName: "name",
              title: "Employer name"
            }]
          }],
          name: "panel8",
          startWithNewLine: false,
          title: "Your Partner",
          visible: false,
          visibleIf:
            "{partner_type_of_employment} contains 'Other types of employment'"
        }],
        name: "panel6",
        title: "Employers"
      }],
      name: "page3.1",
      visible: false,
      visibleIf:
        "{member_type_of_employment} contains 'Other types of employment' or {partner_type_of_employment} contains 'Other types of employment'"
    }, {
      elements: [{
        type: "panel",
        elements: [{
          type: "panel",
          elements: [{
            type: "paneldynamic",
            renderMode: "progressTop",
            allowAddPanel: false,
            allowRemovePanel: false,
            name: "member_array_employer_info",
            title: "Your employers",
            valueName: "member_array_employer",
            panelCount: 1,
            templateElements: [{
              type: "panel",
              name: "panel_member_employer_address",
              title: "Contacts",
              elements: [{
                type: "text",
                name: "member_employer_address",
                valueName: "address",
                title: "Address:"
              }, {
                type: "text",
                name: "member_employer_phone",
                valueName: "phone",
                title: "Phone number:"
              }, {
                type: "text",
                name: "member_employer_abn",
                valueName: "abn",
                title: "ABN:"
              }]
            }, {
              type: "panel",
              name: "panel_member_employer_role",
              title: "Are you a full time worker?",
              elements: [{
                type: "radiogroup",
                choices: [
                  "Full-time",
                  "Part-time",
                  "Casual",
                  "Seasonal"
                ],
                name: "member_employer_role",
                title: " ",
                valueName: "role"
              }]
            }, {
              type: "panel",
              name: "panel_member_employer_hours_work",
              title: "How many hours do you work?",
              elements: [{
                type: "text",
                inputType: "number",
                name: "member_employer_hours_worked",
                valueName: "hours_worked",
                title: "Hours:"
              }, {
                type: "dropdown",
                name: "member_employer_hours_worked_frequency",
                title: "Work frequency:",
                valueName: "hours_worked_frequency",
                startWithNewLine: false,
                defaultValue: "Day",
                choices: [
                  "Day",
                  "Week",
                  "Fortnight",
                  "Month",
                  "Year"
                ]
              }]
            }, {
              type: "panel",
              name: "panel_member_employer_income",
              title: "What is your income?",
              elements: [{
                type: "text",
                inputType: "number",
                name: "member_employer_income",
                valueName: "income",
                title: "Income:"
              }, {
                type: "dropdown",
                name: "member_employer_income_frequency",
                title: "Income frequency:",
                valueName: "income_frequency",
                startWithNewLine: false,
                defaultValue: "Month",
                choices: [
                  "Day",
                  "Week",
                  "Fortnight",
                  "Month",
                  "Year"
                ]
              }]
            }],
          templateTitle: "Employer name: {panel.name}"
        }],
        name: "panel17",
        title: "You",
        visibleIf: "{member_type_of_employment} contains 'Other types of employment'"
      }, {
        type: "panel",
        elements: [{
          type: "paneldynamic",
          renderMode: "progressTop",
          allowAddPanel: false,
          allowRemovePanel: false,
          name: "partner_array_employer_info",
          title: "Employers",
          valueName: "partner_array_employer",
          panelCount: 1,
          templateElements: [{
            type: "panel",
            name: "panel_partner_employer_address",
            title: "Contacts",
            elements: [{
              type: "text",
              name: "partner_employer_address",
              valueName: "address",
              title: "Address:"
            }, {
              type: "text",
              name: "partner_employer_phone",
              valueName: "phone",
              title: "Phone number:"
            }, {
              type: "text",
              name: "partner_employer_abn",
              valueName: "abn",
              title: "ABN:"
            }]
          }, {
            type: "panel",
            name: "panel_partner_employer_role",
            title: "Are you a full time worker?",
            elements: [{
              type: "radiogroup",
              choices: [
                "Full-time",
                "Part-time",
                "Casual",
                "Seasonal"
              ],
              name: "partner_employer_role",
              title: "Your role",
              valueName: "role"
            }]
          }, {
            type: "panel",
            name: "panel_partner_employer_hours_work",
            title: "How many hours do you work?",
            elements: [{
              type: "text",
              inputType: "number",
              name: "partner_employer_hours_worked",
              valueName: "hours_worked",
              title: "Hours:"
            }, {
              type: "dropdown",
              name: "partner_employer_hours_worked_frequency",
              valueName: "hours_worked_frequency",
              title: "Work frequency:",
              startWithNewLine: false,
              defaultValue: "Day",
              choices: [
                "Day",
                "Week",
                "Fortnight",
                "Month",
                "Year"
              ]
            }]
          }, {
            type: "panel",
            name: "panel_partner_employer_income",
            title: "What is your income?",
            elements: [{
              type: "text",
              inputType: "number",
              name: "partner_employer_income",
              valueName: "income",
              title: "Income:"
            }, {
              type: "dropdown",
              name: "partner_employer_income_frequency",
              valueName: "income_frequency",
              title: "Income frequency:",
              startWithNewLine: false,
              defaultValue: "Month",
              choices: [
                "Day",
                "Week",
                "Fortnight",
                "Month",
                "Year"
              ]
            }]
          }],
          templateTitle: "Employer name: {panel.name}"
        }],
        name: "panel18",
        startWithNewLine: false,
        title: "You partner",
        visibleIf: "{partner_type_of_employment} contains 'Other types of employment'"
      }],
      name: "panel16",
      title: "Enter information about your employers"
    }],
    name: "page3.2",
    visibleIf:
      "{member_type_of_employment} contains 'Other types of employment' or {partner_type_of_employment} contains 'Other types of employment'"
  }, {
    elements: [{
      type: "panel",
      elements: [{
        type: "panel",
        elements: [{
          type: "radiogroup",
          choices: [{
            value: "1",
            text: "Yes"
          }, {
            value: "0",
            text: "No"
          }],
          colCount: 2,
          isRequired: true,
          name: "member_receive_fringe_benefits",
          title: " "
        }, {
          type: "panel",
          elements: [{
            type: "text",
            name: "member_fringe_benefits_type"
          }, {
            type: "text",
            name: "member_fringe_benefits_value"
          }, {
            type: "radiogroup",
            choices: ["Grossed up", "Not grossed up"],
            name: "member_fringe_benefits_grossing"
          }],
          name: "panel11",
          visible: false,
          visibleIf: "{member_receive_fringe_benefits} = 1"
        }],
        name: "panel2",
        title: "You",
        visible: false,
        visibleIf: "{member_type_of_employment} contains 'Other types of employment'"
      }, {
        type: "panel",
        elements: [{
          type: "radiogroup",
          choices: [{
            value: "1",
            text: "Yes"
          }, {
            value: "0",
            text: "No"
          }],
          colCount: 2,
          isRequired: true,
          name: "partner_receive_fringe_benefits",
          title: " "
        }, {
          type: "panel",
          elements: [{
            type: "text",
            name: "partner_fringe_benefits_type"
          }, {
            type: "text",
            name: "partner_fringe_benefits_value"
          }, {
            type: "radiogroup",
            choices: ["Grossed up", "Not grossed up"],
            name: "partner_fringe_benefits_grossing"
          }],
          name: "panel12",
          visible: false,
          visibleIf: "{partner_receive_fringe_benefits} = 1"
        }],
        name: "panel1",
        startWithNewLine: false,
        title: "Your Partner",
        visible: false,
        visibleIf: "{partner_type_of_employment} contains 'Other types of employment'"
      }],
      name: "panel9",
      title: "Do any of your employers provide you with fringe benefits?"
    }],
      name: "page4",
      visible: false,
      visibleIf:
        "{member_type_of_employment} contains 'Other types of employment' or {partner_type_of_employment} contains 'Other types of employment'"
    }, {
      elements: [{
        type: "panel",
        elements: [{
          type: "panel",
          elements: [{
            type: "radiogroup",
            choices: [{
              value: "1",
              text: "Yes"
            }, {
              value: "0",
              text: "No"
            }],
            colCount: 2,
            isRequired: true,
            name: "member_seasonal_intermittent_or_contract_work",
            title: " "
          }],
          name: "panel2",
          title: "You",
          visible: false,
          visibleIf: "{member_receives_income_from_employment} = 1"
        }, {
          type: "panel",
          elements: [{
            type: "radiogroup",
            choices: [{
              value: "1",
              text: "Yes"
            }, {
              value: "0",
              text: "No"
            }],
            colCount: 2,
            isRequired: true,
            name: "partner_seasonal_intermittent_or_contract_work",
            title: " "
          }],
          name: "panel1",
          startWithNewLine: false,
          title: "Your Partner",
          visible: false,
          visibleIf: "{partner_receives_income_from_employment} =1 "
        }],
        name: "panel10",
        title: "In the last 6 months, have you done any seasonal, intermittent or contract work?"
      }],
      name: "page5",
      visible: false,
      visibleIf: "{member_receives_income_from_employment} = 1 or {partner_receives_income_from_employment} =1 "
    }],
    requiredText: "",
    showQuestionNumbers: "off",
    storeOthersAsComment: false
  }
};

export const survey2Results = [
    {'member_array_employer':[{}],'partner_array_employer':[{}],'maritalstatus_c':'Married','member_receives_income_from_employment':'0','partner_receives_income_from_employment':'0'},
    {'member_array_employer':[{}],'partner_array_employer':[{}],'maritalstatus_c':'Single','member_receives_income_from_employment':'1','member_type_of_employment':['Self employment'],'member_seasonal_intermittent_or_contract_work':'0'}
];

export var apiBaseAddress = '/api';