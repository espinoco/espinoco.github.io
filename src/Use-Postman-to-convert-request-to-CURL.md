---
title: Use Postman to convert request to CURL
---

- Create the request in Postman then > Side bar > `</>` (Code) > cURL > Copy snippet
- Pro tip: write the response to a file instaed of the terminal's output
	- append at the end ` > <file name>`
	- This is helpful for two reasons. First, it is faster for the curl command to output the response to the JSON file than printing the entire response to the terminal's output for big responses. Second, it is easier to later open the file with a command line editor and inspect the file.
