Prepared by Firewatch Labs | September 24, 2024
## **Project Objectives**

Stagehand is a all-in-one tool for processing, analyzing, and archiving artifacts produced by test automation. It aims to enhance Loop Software's services and capabilities. By completing the deliverables in this proposal, we will:

1. Reduce costs to Loop Software by removing dependency on Github Enterprise seats
2. Reduce time spent on manual reporting tasks
3. Improve visibility into test results and trends
4. Reduce maintenance costs by leveraging historical data and improved documentation and status tracking
5. Shorten test cycles and feedback loops
6. Enable data-driven decision making for test strategy and resource allocation
7. Provide a unique differentiator to services rendered by Loop

## **Deliverables and Timeline**

**Primary Goal:** Remove dependency on GitHub enterprise and allow clients to securely access reports using our own infrastructure.

To achieve this goal, we will add the following features to the existing product:

1. Two factor authentication
2. Admin-level accounts for staff to view all reports
3. Project-level accounts for clients, limiting the view to just reports for their project
4. Cold-storage of reports older than 30 days into cost-effective cloud storage
5. Fix broken logo link
6. Custom domain as determined by Loop (ie: `stagehand.workwithloop.com`) 

**Estimated completion date: Three weeks from project onset**

Firewatch Labs will provide updates each week after project kickoff until deliverables are complete and meet the acceptance criteria.

## **Risk and Mitigation**

The primary foreseen risk is data loss or security breaches.

Mitigation: 
- Implement robust backup systems. 
- Conduct security audits. 
- Use encryption for data at rest and in transit.
- Implement two factor authentication and/or social sign on
- Leverage Postgres row-level security and Supabase auth to ensure no sensitive data is exposed to users without adequate privileges

## **Budget and Payment Schedule**

1. Project Management and Planning
   - Requirement gathering and analysis
   - Project planning and scheduling
   - Risk assessment and mitigation planning
   - Subtotal: $1,000

2. Design and Development
   - Two-factor authentication implementation
   - Admin-level account setup and permissions
   - Project-level account setup and permissions
   - Cold storage integration for reports older than 30 days
   - Logo link fix
   - (Optional) Custom domain setup
   - Subtotal: $4,000

3. Testing and Quality
   - Functional testing of implemented features
   - Security testing and vulnerability assessment
   - Performance optimization, logging, and observability
   - User acceptance testing (UAT) support
   - Subtotal: $1,000

4. Documentation and Training
   - User manual and documentation
   - Admin manual and documentation
   - Training materials for Loop staff and clients
   - Subtotal: $500

5. Project Delivery and Closure
   - Final code review and optimization
   - Deployment and production setup
   - Project handover and knowledge transfer
   - Subtotal: $500

Total Development Cost: $7,000

$3,500 invoiced on project kickoff
$3,500 invoiced on project delivery

## **Terms and Conditions**

This list is not comprehensive but rather a suggested set of terms to append to the standard contract:

1. **Warranty**: A 30-day warranty period will be provided beginning after final delivery, during which any bugs or issues will be addressed at no additional cost.
2. **Scope Changes**: Any changes to the project scope must be approved in writing and may affect the timeline and budget.
3. **Payment**: Invoices will be issued according to the payment schedule and are due within 7 days. The initial payment is non-refundable.
4. **Unforeseeable Events**: Neither party will be liable for delays caused by circumstances beyond their reasonable control.
5. **Right to Fork:** Firewatch Labs may create derivative works and/or "fork" the work product.
    Conditions: 
	  - Loop Software retains ownership of the original work product.
	  - Firewatch Labs retains ownership of the derivative work, including any new features, modifications, or improvements made to the original work product. 
	  - The derivative work must be clearly distinguished from the original work product in name, branding, or marketing, must not use or disclose confidential information of Loop.
	  - Firewatch Labs is granted a perpetual, irrevocable, worldwide, royalty-free license to use and modify the elements of the Original Project necessary to create and use the forked project for any purpose, with no royalties or fees due to Loop Software.
	  - Firewatch Labs will provide written notice to Loop Software notifying of the intent to create a derivative work from original work product.
	  - Loop Software and Firewatch Labs agree to conduct additional negotiations arising from the forked project in good faith.
	  - Firewatch Labs will hold Loop Software harmless from any claim arising from the development or use of the derivative work

## **Maintenance and Support (Optional)**

Following the above 30-day warranty period, Loop has the option to engage Firewatch Labs for ongoing maintenance and support of the Stagehand project. 

Maintenance and Support Services:
1. Bug fixes and issue resolution
2. Compatibility updates
3. Minor enhancements and optimizations
4. Integration support for other testing tools and frameworks
5. Ongoing technical guidance and best practices advice

Loop may choose to engage these services on an as-needed basis or negotiate a retainer for an ongoing arrangement.

