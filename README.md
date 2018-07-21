Greetings!

This repository contains my NWEA code assessment assignment.  While I originally started in an old development environment I had handy, I eventually moved to a AWS EC2 instance which would also be my recommendation for deployment.

Deployment should be pretty painless, grab a copy off git and assuming you've got node / npm installed you can run server.js in node and use Postman to hit the service (though any REST client should do).

The service will provide you with a list of blogposts if you perform a GET on exampleHost.com:8000/posts.
The service will allow you to submit new blogposts if you perform a POST on exampleHost.com:8000/post.
	+Be sure your POST includes a URLEncoded Key and Value pair, acceptable keys are limited to "title" and "body". Example provided below.
		-key: title value: My First Blog!
		-key: body value: The best blog ever!
