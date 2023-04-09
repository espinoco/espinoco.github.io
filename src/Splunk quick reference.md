---
title: Splunk quick reference
---

- `<query> | timechart count` - visualize graph count of logs
- `<query> | timechart span=<time> count` - same as above but with time span specified, e.g., `span=1m` to get time span of 1 minute
- `<query> | timechart count by <field>`  - visualize graph count of events by some specific field
- `<query> earliest=-<time>` - query from the last specified amount of time, e.g., `earliest=-14d` to query from the last 14 days
- `<query> | tail 1` - get first event
- `<query> | rex field=<field> "(?<<new-field-name><regex-exp>)" ` - extract custom value based on the regex expression `<regex-exp>`, assign a new name to the field to be extracted with `<new-field-name>`. Run the regex on the `<field>`, use `_raw`  as `<field>` value to get the whole raw data event.