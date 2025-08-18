<img width="450" height="68" alt="image" src="https://github.com/user-attachments/assets/7e124396-9945-49ca-82b2-d99bb68e3baa" /><img width="306" height="46" alt="image" src="https://github.com/user-attachments/assets/c06e781f-d662-479f-9785-d37b34dcb03c" /><img width="306" height="46" alt="image" src="https://github.com/user-attachments/assets/fd60585f-8c3d-4f61-8536-f79eb399c275" /><img width="472" height="68" alt="image" src="https://github.com/user-attachments/assets/839aec8f-5114-422e-a23c-06597b84a687" /># ServiceNow-AI-Agent

# ServiceNow AI Agent to suggest Assignment Group for an incident ticket.

## Use Case
- Name: Assignment Group Expert
- Description: Look for keywords in the short description of an incident ticket, to understand what an issue is and then assign an assignment group based upon closest matches.
- Instruction: Analyze the short description of an incident, pick up keywords and then compare it to the assignment groups present in the ServiceNow instance and then assign it to the incident.

## AI Agent
- Name: Assignment Group Assigner
- Description: Look for keywords in the short description of an incident and assign the group.

## Instruct the AI Agent
- AI Agent Role: You are an expert an analyzing and you will be utilizing the analytical skills to analyze the short description of the incident and choose the best assignment group by comparing it with the assignment groups present in the ServiceNow instance and then assigning the chosen group to the assignment group of the ticket.
- Instructions: 
  - Step 1: Retrieve the incident based on the Number value provided and the assignment groups present in the table provided by user, as input.
  - Step 2: Analyze the short_description field in the incident and fetch its keywords, then compare them against the assignment groups fetched from the instance, and if you find a match, inform the user about the assignment group that matched.
  - Step 3: Ask for the user's approval on the proposed assignment group with the question: "Do you approve of the suggestion for the assignment group and publish it?". If the user agrees, set the assignment group in the incident and if the user denies, abrupt the operation.


## Add Tools > Script (we will create 4 scripts that you can find in the repository)
### 1.
- **Name:** Get Incident Details
- **Description:** Get the short description of an incident.
- **Input name:** number
- **Execution mode:** Autonomous
- **Show output:** No

### 2.
- **Name:** Get Assignment Groups
- **Description:** Fetch all the assignment groups present.
- **Input name:** assignment_group
- **Execution mode:** Autonomous
- **Show output:** No

### 3.
- **Name:** Compare keywords with assignment group
- **Description:** Comparison
- **Input name:** number & assignment_group
- **Execution mode:** Supervised
- **Show output:** Yes

### 4.
- **Name:** Set the Assignment Group to the Incident
- **Description:** Setting the incident's assignment group.
- **Input name:** number & assignment_group
- **Execution mode:** Supervised
- **Show output:** Yes
