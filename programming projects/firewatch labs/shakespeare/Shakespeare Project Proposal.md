Prepared by Firewatch Labs | September 24, 2024
## **Project Objectives**

Shakespeare is an extension to the capabilities of Playwright's code generation features, giving automation engineers more tools to pick and chain locators, and produce reusable extensible test code. 

1. Improve speed and efficiency of generating test code for Playwright
2. Make automated testing more accessible to Loop staff
3. Provide a seamless upgrade to Playwright's existing features

## **Deliverables and Timeline**

**Architectural Planning Phase**

Given the complexity of the project, it is prudent to examine the technical implementation details. Firewatch Labs will:

1. Conduct thorough research on integration approaches (fork vs. separate package/CLI, VS Code Extension vs Playwright Inspector, etc)
2. Produce an architectural design document outlining the chosen approach and its rationale
3. Present findings and recommendations to Loop stakeholders for approval before core development work begins.

**Development Phase**

Upon approval of architectural design document, expand the Playwright inspector's functionality with these additional features:

1. Locator picker shows several possible matches (as many as possible)
2. Ability to select parent or child elements and generate code that chains them together. 
    - User can walk up or down the element tree with the keyboard and/or buttons in the UI 
    - Upon walking up or down the tree, display any locator that matches as described in point 1 above.
3. For each locator provided in the above steps, add a button to copy them
4. Table Mode
     - User can enter a specific mode for generating locators for a table.
     - Prompt user to select the following:
	     - The parent table element
	     - A locator that matches each row in the table
	     - Pick an action to perform on the table, row, or element within a row (ie click, check, select an option, fill, clear, etc)
	     - Allow a filter to be chained 
	 - Generate code for a page object class including the locators described above, and class methods to perform the action.

**Estimated Architectural Design timeline: One week from project start**

**Estimated completion date: Four weeks from approval of architectural design document** 

Firewatch Labs will provide updates each week after project kickoff until deliverables are complete and meet the acceptance criteria.

## **Risk and Mitigation**

1. Maintenance and compatibility 
	- Unforeseen issues with forked version vs upstream version
	- Potential to extend timeline to upgrade to newer features of Playwright

Mitigation: Regular syncing with upstream Playwright repository and thorough testing of each new feature against the latest Playwright version.

2. Integration challenges with existing Loop systems
	- Potential conflicts with current test suites

Mitigation: Conduct a thorough analysis of Loop's current testing tools and design Shakespeare to be as modular and non-intrusive as possible. Justify architectural choices up front to ensure we avoid conflicts and have a seamless experience.

## **Budget and Payment Schedule**

1. Project Management and Planning
   - Requirement gathering and analysis
   - Project planning and scheduling
   - Risk assessment and mitigation planning
   - Subtotal: $500

2.  Architecture and Technical Planning
   - Research and prototyping
   - Analyze integration points with existing Playwright architecture
   - Create high-level architectural design document
   - Review and finalize technical approach with stakeholders
   - Subtotal: $1,500

4. Development
   - Development of locator picker enhancements
   - Development of parent/child element selection feature
   - Development of Table Mode functionality
   - Integration with existing Playwright inspector and/or Playwright VS Code Extension
   - Code optimization and refactoring
   - Subtotal: $5,000

5. Testing and Quality
   - Functional testing of implemented features
   - User acceptance testing (UAT) support
   - Subtotal: $1,000

6. Documentation and Training
   - User manual and documentation
   - Training materials and demos
   - Subtotal: $500

7. Project Delivery and Closure
   - Final code review and optimization
   - Deployment and production setup
   - Project handover and knowledge transfer
   - Subtotal: $500

Total Development Cost: $9,000

$2,000 invoiced on project kickoff
$2,500 invoiced on architectural design document delivery
$4,500 invoiced on project delivery

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

Following the above 30-day warranty period, Loop has the option to engage Firewatch Labs for ongoing maintenance and support of the project. 

Maintenance and Support Services:
1. Bug fixes and issue resolution
2. Compatibility updates
3. Minor enhancements and optimizations
4. Integration support for other testing tools and frameworks
5. Ongoing technical guidance and best practices advice

Loop may choose to engage these services on an as-needed basis or negotiate a retainer for an ongoing arrangement.
