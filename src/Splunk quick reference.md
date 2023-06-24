---
title: Splunk quick reference
---
- `<query> | timechart [span=<time>] count [by <field>]` - log's count over time.
    - `<time>` examples: `1m`, `1h`, `10d`
- `<query> earliest=-<time>` - query since the last specified amount of `<time>`.
    - `<time>` examples: `1m`, `1h`, `10d`
- `<query> | tail 1` - get the tail event.
- `.` - to concat field values, e.g., `<field0>."-".<field1>`
- `<query> | eval <new-field> = <value>` - create field `<new-field>` with `<value>`.
- Examples to extract custom fields based on regex expression:
    1. `<query> | rex field=<field> "Read Timeout of (?<Timeout>[0-9]+) for (?<Source>[A-Z]+)"`
        - Extracts the new fields `Timeout` and `Source` from the `<field>`'s value.
    2.  `<query> | rex field=<field> ".*\.(?<Value>.*)"`
        - Extracts the new `Value` field from the `<field>`'s value.
    3. `<query> | rex field=_raw "(?<ExceptionType>(com|java|javax|org)\.[\w\.]+StateException)"`
        - Use `_raw` to get the whole log instead of field-specific.