---
title: Splunk quick reference
published_on: 2023-04-09
updated_on: 2024-05-15
---
- Log's count over time. Replace `<TIME>` with `1m`, `1h`, `10d`, etc.
    ```
    <QUERY> | timechart [span=<TIME>] count [by <FIELD>]
    ```
- Query since the last specified amount of `<TIME>`. Replace `<TIME>` with `-1h`, `-1d`, etc.
    ```
    <QUERY> earliest=-<TIME>
    ```
- Get the tail event.
    ```
    <QUERY> | tail 1
    ```
- Concat field values with `.`.
    ```
    <FIELD-X>."-".<FIELD-Y>
    ```
- Create field `<NEW-FIELD>` with `<VALUE>`.
    ```
    <QUERY> | eval <NEW-FIELD> = <VALUE>
    ```
- Extract custom fields based on regex expressions:
    - Example to extract the new fields `Timeout` and `Source` from the `<FIELD>`'s value.
        ```
        <QUERY> | rex field=<FIELD> "Read Timeout of (?<Timeout>[0-9]+) for (?<Source>[A-Z]+)"
        ```
    - Example to extract the new `Value` field from the `<FIELD>`'s value.
        ```
        <QUERY> | rex field=<FIELD> ".*\.(?<Value>.*)"
        ```
    - Example to use `_raw` to get the whole log instead of field-specific.
        ```
        <QUERY> | rex field=_raw "(?<ExceptionType>(com|java|javax|org)\.[\w\.]+StateException)"
        ```
