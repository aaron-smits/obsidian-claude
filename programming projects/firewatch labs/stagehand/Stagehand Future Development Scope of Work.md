Prepared by Aaron Smits, Firewatch Labs | September 24, 2024
### Future Scope Proposal
#### Phase 3
1. User management and access control directly within the application for admins (Loop Staff)
	1. Create Settings panel
	2. Create Users tab
	3. Send invites, view invite status, resend invites, 
	4. (Optional) view access data
2. Tooling for processing and triaging test results
	- Automated report compilation and summarization (potentially leveraging LLMs)
	- Cycle through each test and mark status, comment, and file issues to the client or to ourselves directly in the application.
	- Understand expected fails, skip reasons, repeated fails, shared error signatures with broader context from historical results and commentary.
	- Shorten timelines and reduce noise by streamlining the triage and maintenance process
	- Generate a summary of a test run to send to customers
#### Phase 4
1. Integration with our other test automation frameworks and tools (ie: pytest)
2. Automated test suite documentation
	- Based on the reports generated from test runs, create and index of tests, their status, and allow comments/descriptions/custom fields to be added.
3. Two-way integration with GitHub Actions and other task runners
	- Trigger test runs within the application
	- Stream results in real time back to the application (similar to Allure testops)
#### Phase 5
1. Allow users to request changes to test cases
	- Skip
	- Remove
	- Update
2. Allow users to request new test cases
	- Create a form that includes
		- Act/Arrange/Assert (or simply expected behavior)
		- Link to relevant section
		- Optional Video or Screenshot
3. Custom report generation and export capabilities
	- For both clients and admins
	- Gather data about issues found, total tests run, bug fix turnaround time, etc
	- Historical data tracking and trend analysis
	- Cross-project comparison for admins
### Estimated Timeline
- Phase 3: 6 weeks
- Phase 4: 4 weeks
- Phase 5: 4 weeks
