# DailyDose
### A Wsu 2021 Hackathon Project
#### Created by Team Santiago Canyon
---
## Overview 
Hello, our team name is Santiago Canyon. Our teammates are Daniel, Tea, and Spaceman.

***The Problem***\
Close to 80% of healthcare workers believe that patients have a probelm with medical adherence. Medical adherence, or taking medications correctly, is generally defined as the extent to which patients take medication as prescribed by their doctors. This involves factors such as getting prescriptions filled, remembering to take medication on time, and understanding the directions.

A conducted survey shows that healthcare workers believe that patients underestimate medical knowledge and think it would be beneficial to measure a patient’s medical adherence. 

***The App***\
The Daily Dose App aims to fix the problem of medical adherence by allowing physicians to create a treatment plan and share it with their respective patient. Patients can keep track of this medical plan as well, and their app interactions will notify their physician.

***The physician goes through the following process:***
- log in and make an account
- create a treatment plan with the following factors (reccomended by Prescriptions for a Healthy America):
treatment type, prescribed dosage, frequency and additional information 
- plan is saved and physicians can send an access code to their respective patient’s email
---
## Features

-The full application lets users sign up/make an account.
- For physicians 
  - Create new treatment plans and share it with a patient
  - View other treatment plans
  - View a calendar with info
  - Tracking how well patients do with following their prescribed treatment
- For Patients
  - Enter access code to access plans their doctor made
  - View notifications/reminders of when and how to take their medicine
  - View the notifications/reminders on a calendar
  - View other treatment plans they have subscribed to
  - Write reflections/personal notes 

---
## Running the project
  1. Ensure you have node.js as well as mongodb installed and running
  2. Navigate to the backend-api folder
    - Run `npm install`
    - Run `npm start` (This will start the backend server on port: 3001)
  3. Navigate to the frontend folder
    - Run `npm install`
    - Run `npm start` (This will start the frontend ui on port: 3000)
  
  The home page will default to `/patient/home`\
  If you want to access the physician version of the app you must ***MANUALLY*** navigate to `/physician/home\
  This is done because we do not want the physician version to be easily available to the public as that version will be speicifc to health care providers
  
  *Please Note:* Only the physician workflow of creating a new plan is working and the other buttons/features are not yet implemented and may lead to unknown behavior
 ---
 ## Closing Notes, Reflections, and toDo
 
 Overall this experience has been extremly rewarding and challenging trying to bring a full-stack app into creation using the MERN stack in only 48 hours. While I did not finish 
 I would love to keep working on this project and eventually implement all other features.
