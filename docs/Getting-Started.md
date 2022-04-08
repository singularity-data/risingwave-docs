---
id: getting-started
title: Getting started
description: Install and start RisingWave.
slug: /getting-started
sidebar_position: 2
---


This guide will walk you through the installation of RisingWave. 

- [Install and start RisingWave](#install-and-start-risingwave)
- [Connect to a streaming source](#connect-to-a-streaming-source)
- [Query and manage data](#query-and-manage-data)

## Install and start RisingWave

### Pre-built library (Linux)

1. Download the pre-built library.
 
    ```
    wget https://github.com/singularity-data/risingwave/releases/download/v0.1.5/risingwave-v0.1.5-x86_64-unknown-linux.tar.gz
    ```

2. Unzip the library.

    ```
    tar xvf risingwave-v0.1.5-x86_64-unknown-linux.tar.gz
    ```

3. Start RisingWave in the test mode.

    ```
    ./risingwave playground
    ```

### Compile from source (Linux & macOS)

1. Download the source code of RisingWave.

    ```
    git clone https://github.com/singularity-data/risingwave.git
    ```

2. Install dependencies.

    RisingWave has the following dependencies. Please ensure all the dependencies have been installed before starting RisingWave.

    * Rust
    * CMake
    * Protocol Buffers
    * OpenSSL
    * PostgreSQL terminal (14.1 or higher)
    * Tmux

    Select your operating system and run the following commands to install the dependencies.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{marginLeft:"2rem"}}>
<Tabs>
<TabItem value="macos" label="macOS" default>


```
brew install cmake protobuf openssl postgresql tmux
```

```
curl -proto '=https' -tlsv1.2 -sSf https://sh.rustup.rs (https://sh.rustup.rs/) | sh
```
</TabItem>
<TabItem value="linux" label="Linux">

```
sudo apt update
```

```
sudo apt upgrade
```

```
sudo apt install make build-essential cmake protobuf-compiler curl openssl libssl-dev pkg-config
```

```
sudo apt install postgresql-client
```

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
</TabItem>
</Tabs>
</div>

3. Start RisingWave.

    To start RisingWave, in the terminal, navigate to the directory where RisingWave is downloaded, and run the following command.
    ```
    ./risedev dev # Starting RisingWave in production mode
    ```
    or
    ```
    ./risedev playground # starting RisingWave in testing mode. 
    ```
    :::tip

    RisingWave has two running modes: testing mode and production mode. In the testing mode, all nodes will be started in one process. Use the testing mode if need to do some quick tests. In the production mode, the meta node, compute node, and the serving node are started in three separate processes. 

    :::

    All services in RisingWave will be started. In the current version, all nodes are hosted in your local environment.

    You can stop RisingWave with the following command.
    ```
    ./risedev kill
    ```

4. After RisingWave services are started, start the PostgreSQL interactive shell.
    ```
    psql -h localhost -p 4566 -d dev
    ```
    You can now issue SQL statements to manage your streams and data. 

## Connect to a streaming source

You use `CREATE SOURCE` statement to connect to a streaming source.

To connect to a Kafka topic: 

```sql
CREATE SOURCE KAFKA_TOPIC_1 (
   COLUMN_NAME DATA_TYPE, ...
)
with (
   'connector'='kafka'
   'kafka.topic'='',
   'kafka.bootstrap.servers'='172.10.1.1:9090,172.10.1.2:9090',
   'kafka.scan.startup.mode'='earliest|latest',
   'kafka.time.offset'='140000000'
   'kafka.consumer.group'='XXX_CONSUMER_NAME'
)
ROW FORMAT 'json' 
[ROW SCHEMA LOCATION 'local_file://path'];
```

For supported streaming sources and SQL examples, please see [Sources](Sources.md).

## Query and manage data

RisingWave uses Postgres-compatible SQL as the interface to manage and query data. Let's see a few examples:

* Create a table
* Create a materialized view from tables
* Create a materialized view from a stream
* Create a materialized view from
* Create a materialized view from an existing materialized view
* Get values of a materialized view


```sql title="To create a table:"
CREATE TABLE t2 (
    v1 INT NOT NULL, 
    v2 INT NOT NULL, 
    v3 INT NOT NULL
);
```


```sql title="To create a materialized view from tables:"
CREATE MATERIALIZED VIEW mv2 
AS 
    SELECT
        (AVG(v1), 1) AS avg_v1, 
        SUM(v2) AS sum_v2, 
        COUNT(v3) AS count_v3 
    FROM t1;
```


```sql title="To create a materialized view from a source:"
CREATE MATERIALIZED VIEW debezium_json_mysql_mv 
AS 
    SELECT * FROM debezium_json_mysql_source;
```


```sql title="To create a materialized view from existing materialized views:"
CREATE MATERIALIZED VIEW m4 
AS 
    SELECT m1.v1, m1.v2, m2.v1, m2.v2 
    FROM m1 
    JOIN m2 ON m1.v1 = m2.v1;
```


```sql title="To get the latest values of a materialized view:"
FLUSH;
SELECT * FROM m4;
```

For the complete list of supported SQL statements, see [Statements](Statements.md).






