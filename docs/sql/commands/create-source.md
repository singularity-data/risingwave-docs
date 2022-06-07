---
id: create-source
title: CREATE SOURCE
description: Supported data sources and how to connect RisingWave to the sources.
slug: /create-source
---

Sources are resources that RisingWave can read data from. You use `CREATE SOURCE` to establish the connection to a source. Once a connection is established, RisingWave will start to process the received data.

## Supported sources

Click the source name to see the SQL syntax, options, and sample statement of connecting RisingWave to the source.

| Source | Version | Data format | Materialized? | Limitations |
|---------|---------|---------|---------|---------|
|[Kafka](create-source-kafka-redpanda.md)|3.1.0 or later versions	|JSON, protobuf|	Materialized & non-materialized|-
|[Redpanda](create-source-kafka-redpanda.md)|Latest|JSON, protobuf	|Materialized & non-materialized|	-
|[Pulsar](create-source-pulsar.md)|	2.8.0 or later versions|	JSON, protobuf|	Materialized & non-materialized|	-
|[Kinesis](create-source-kinesis.md)|	Latest|	JSON, protobuf|	Materialized & non-materialized|	-
|[PostgreSQL CDC](create-source-cdc.md)|	10, 11, 12, 13, 14|Debezium JSON|	Materialized only|	Must have primary key|
|[MySQL CDC](create-source-cdc.md)|	5.7, 8.0|Debezium JSON|	Materialized only|	Must have primary key|
