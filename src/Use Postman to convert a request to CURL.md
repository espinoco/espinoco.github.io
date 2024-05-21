---
title: Use Postman to convert a request to CURL
published_on: 2023-04-03
updated_on: 2024-05-14
---
- Create the request in Postman then go to the `Sidebar` > `</> (Code)` > `cURL` > `Copy snippet`.
- To write the response to a file instead of the terminal's output
	- Append at the end ` > <file-name>`
	- This is helpful for big responses, it is faster for the `curl` command to output the response to a file than printing the entire response to the terminal's output.
