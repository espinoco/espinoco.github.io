---
title: Splunk quick reference
---

- `<query> | timechart count` - visualize graph count of logs.
- `<query> | timechart span=<time> count` - same as above but with time span specified, e.g., `span=1m` to get time span of 1 minute.
- `<query> | timechart count by <field>`  - visualize graph count of events by some specific field.
- `<query> earliest=-<time>` - query from the last specified amount of time, e.g., `earliest=-10d` to query from the last 10 days.
- `<query> | tail 1` - get first event.
- `<query> | rex field=<field> "(?<<new-field-name><regex-exp>)" ` - extract custom field value based on the regex expression `<regex-exp>` match, assign a new name to the field to be extracted with `<new-field-name>`. Run the regex on the `<field>`, use `_raw`  as `<field>` value to get the whole raw data event, e.g.
    - `<query> | rex field=_raw "Read Timeout of (?<Timeout>[0-9]+) for (?<Source>[A-Z]+)" | <use-Timeout-or-Source-vars>`
- `<query> | eval <new-custom-field> = <existing-fields>` - create new custom field based on existing fields `<existing-field-0>` and `<existing-field-1>`.
- `<query> | eval <new-custom-field-name> = <existing-field-0>."-".<existing-field-1>` - concatenate two fields into a string.
- ` ```<comment>``` ` - add `<comment>` to the search query.
- To quickly add a field to the search, hover over the field and click the highlighted portion you need, a pop up will appear with options including adding the field to your search query.