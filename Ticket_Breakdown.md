# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
Ticket 1: Add custom id field to Agent table
Description: Add a new field to the Agent table in the database to allow Facilities to save their own custom ids for each Agent they work with.

Acceptance Criteria:

A new field named "custom_id" is added to the Agent table in the database
The custom_id field is editable by Facilities through the platform
The custom_id field is displayed on the Shifts and Reports pages for Facilities to easily identify Agents
Time/Effort Estimate: 2 hours

Implementation Details:

Add a new column named "custom_id" to the Agent table in the database
Update the Agent model to include the new custom_id field
Add a new input field for custom_id on the Agent edit page in the platform
Update the Shifts and Reports pages to display the custom_id field for each Agent
Ticket 2: Update getShiftsByFacility function to include custom_id
Description: Update the getShiftsByFacility function to include the custom_id field for each Agent in the Shifts list.

Acceptance Criteria:

The getShiftsByFacility function returns a list of Shifts worked that quarter, including the custom_id field for each Agent assigned to each Shift.
Time/Effort Estimate: 1 hour

Implementation Details:

Update the getShiftsByFacility function to include the custom_id field in the query to the database
Update the Shifts model to include the custom_id field
Ticket 3: Update generateReport function to use custom_id
Description: Update the generateReport function to use the custom_id field instead of the internal database id when generating reports for Facilities.

Acceptance Criteria:

The generateReport function uses the custom_id field instead of the internal database id when generating reports for Facilities.
Time/Effort Estimate: 1 hour

Implementation Details:

Update the generateReport function to use the custom_id field instead of the internal database id when generating reports
Update the PDF template to display the custom_id field instead of the internal database id
Ticket 4: Add custom_id field to Reports table
Description: Add a new field to the Reports table in the database to store the custom_id for each Agent on the report.

Acceptance Criteria:

A new field named "custom_id" is added to the Reports table in the database
The custom_id field is populated with the custom_id for each Agent on the report
Time/Effort Estimate: 1 hour

Implementation Details:

Add a new column named "custom_id" to the Reports table in the database
Update the Reports model to include the new custom_id field
Update the generateReport function to save the custom_id for each Agent on the report
Ticket 5: Update Reports page to display custom_id
Description: Update the Reports page to display the custom_id field for each Agent on the report.

Acceptance Criteria:

The Reports page displays the custom_id field for each Agent on the report.
Time/Effort Estimate: 1 hour

Implementation Details:

Update the Reports page to display the custom_id field for each Agent on the report
Update the Reports model to include the custom_id field in the query to the database
