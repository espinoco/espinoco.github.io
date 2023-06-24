---
title: Use Postman to convert a request to CURL
---

- Create the request in Postman then go to the Sidebar > `</>` (Code) > cURL > Copy snippet
- To write the response to a file instead of the terminal's output
	- append at the end ` > <file-name>`
	- This is helpful for two reasons. For big responses, it is faster for the curl command to output the response to a file than printing the entire response to the terminal's output. It is easier to later open the file with an editor and inspect the file.
