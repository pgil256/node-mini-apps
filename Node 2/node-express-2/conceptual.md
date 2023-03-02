### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  JSON Web Token. It's a means of authentication in Node apps.

- What is the signature portion of the JWT?  What does it do?
  It is a datum attached to the JWT that verifies the legitimacy of the sender
  and that the message was not tampered with.
  
- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes. JWT is primarily concerned with validation and the payload is easily viewed. Other means of encryption and security must be used if sensitive information is transferred.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  When a user signs up, that individual will have to provide various means of credentials (e.g. a password) to validate themselves. Whenever they sign in or make any kind of RESTful request, they will be assigned a JWT designed specifically for that user. This token is a short-lived means of validation that cannot be tampered with without interfering with the architecture of the JWT, thus ensuring only those with valid credentials can perform actions permitted to them specifically as set by the paramaters of the application and API.

- Compare and contrast unit, integration and end-to-end tests.
  Unit test check the functionality of an individual piece of code. Integration tests are used to check an application and require mock data for testing API requests. End-to-end tests check things from the user's perspective and are most comprehensive. In terms of comprehensiveness, time to write and implement, and number of dependencies, they would rank 1. end to end test 2. unit test 3. integration test.

- What is a mock? What are some things you would mock?
  A "mock" is a simulated datum or request response that is hard coded for testing purposes. A mock might be used to test an API in an integration test.

- What is continuous integration?
- A model of development that involves a team of developers regular submitting new code      	with tests assigned to it. It is a way to limit bugs as individual contributions are 	tested for feasibility as they are contributed to the code base.

- What is an environment variable and what are they used for?

 Variables that describe the local enviornment of your system. They allow for the  execution of various functionalities in the CLI.

- What is TDD? What are some benefits and drawbacks?
  Test Driven Development. It is useful because it forces developers to anticipate various issues and edge cases and to develop around them. It reduces the amount of debugging because code is written more securely and better thought out. The drawback is that it is time-intensive and may be less pragmatic for small-time applications.

- What is the value of using JSONSchema for validation?
  It ensures the validity of JSON coursing throughout the application by ensuring the validity of its structure. If invalid JSON is being transferred because of faulty submission or issues with the code block, JSONSchema will intercept it.

- What are some ways to decide which code to test?
  Figure out where code could break, where edge cases could arises, where requests could fall through, etc. and test based of that. Any new piece of functionality should have some unit test tied to it unless it is a so small, immutable, and inconsequential it couldn't possibly falter or break.

- What does `RETURNING` do in SQL? When would you use it?
  Returning allows you to have to write another SELECT query after a DML statement if you are trying to check the proper execution of the DML statement. This allows for more efficient interaction with the database.

- What are some differences between Web Sockets and HTTP?
  Web sockets are bidirectional, require continuous connect between the server and client, and are useful in applications where live interaction with the server are needed (e.g. only gaming). HTTP is unidirectional, connection ceases after a request is fulfilled, and is useful for asynchronous-type applications where live interaction is not necessary (e.g. a message board or forum like reddit). 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I enjoyed working with Express because I already had experience in implementing back-end framework after doing so much with Flask. However I do think Python/flask win in terms of readability and initial learning curve for new users.