1. Explain what a token is used for.
A token is used for security purposes to safe-keep your data. It acts like an electronic key to access that data.
2. What steps can you take in your web apps to keep your data secure?
First, we need to create the token that will be securing the file. Then, the token is returned to us by the server after the user properly authenticates. When we login, it will save the token in localstorage. Next, we will make an AJAX request to an endpoint. We can expect to see an authorization token appear in our console. Lastly to make sure we're secured is to add protected routes to each protected page.

3. Describe how web servers work.
Web servers first connect to the internet via the world wide web, then they locate a specific server computer through a url and domain name and lastly, they retrieve information and/or resources from that server. 

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Create - PUT
Read - GET
Update - UPDATE
Delete - DELETE
