---
id: getting-started
title: Getting started
description: Install and start RisingWave.
slug: /getting-started
sidebar_position: 2
---


This guide will help you get started with RisingWave. We will cover: 

- [Install and run RisingWave](#install-and-run-risingwave)
- [Connect to a streaming source](#connect-to-a-streaming-source)
- [Query and manage data](#query-and-manage-data)

## Install and run RisingWave

### Use the pre-built library (Linux)

1. Download the pre-built library.
 
    ```shell
    wget https://github.com/singularity-data/risingwave/releases/download/v0.1.5/risingwave-v0.1.5-x86_64-unknown-linux.tar.gz
    ```

2. Unzip the library.

    ```shell
    tar xvf risingwave-v0.1.5-x86_64-unknown-linux.tar.gz
    ```

3. Start RisingWave in the light mode.

    ```shell
    ./risingwave playground
    ```
4. Connect to the PostgreSQL interactive terminal.

    ```sh
    psql -h localhost -p 4566 -d dev

### Install and run from a docker container

You can use Docker and Docker Compose to set up a local cluster of RisingWave.

#### Prerequisites

    Ensure you have Docker and Docker Compose intalled on your machine. For installation instructions, see [Install Docker](https://docs.docker.com/get-docker/) and [Install Docker-Compose](https://docs.docker.com/compose/install/).

1. Download the `docker-compose.yml` file.

    ```sh
    wget https://raw.githubusercontent.com/singularity-data/risingwave/main/docker/docker-compose.yml
    ```

2. Start a RisingWave cluster.

    ```sh
    docker-compose up -d
    ```

    By default this command will start these components:
    - [MinIO](https://min.io/): Used as a local S3 service.
    - 1 metadata server node
    - 1 compute node
    - 1 frontend node
    - 1 Redpanda instance

3. Connect to the PostgreSQL interactive terminal.

    ```sh
    psql -h localhost -p 4566 -d dev
    ```

    If you want to change the parameters of the cluster, please edit the docker-compose file and run `docker-compose up -d` again.


### Build from source (Linux & macOS)

1. Download the source code of RisingWave.

    ```shell
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


```shell
brew install cmake protobuf openssl postgresql tmux
```
Run one of the following cammands to install [rustup](https://rustup.rs):
```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
or
```shell
brew install rustup-init && rustup-init
```
</TabItem>
<TabItem value="linux" label="Linux">

```shell
sudo apt update
```

```shell
sudo apt upgrade
```

```shell
sudo apt install make build-essential cmake protobuf-compiler curl openssl libssl-dev pkg-config
```

```shell
sudo apt install postgresql-client
```

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
</TabItem>
</Tabs>
</div>

3. Run RisingWave.

    To run RisingWave, in the terminal, navigate to the directory where RisingWave is downloaded, and run the following command.
    ```shell
    ./risedev dev # Running RisingWave in the standard mode
    ```
    or
    ```shell
    ./risedev playground # Running RisingWave in the light mode. 
    ```
    :::tip

    RisingWave has two running modes: standard mode and light mode. In the light mode, all nodes will be started in one process. If you need to do some quick tests, use the light mode. In the standard mode, the meta node, compute node, and the frontend node are started in three separate processes. 

    :::

    All services in RisingWave will be started. In the current version, all nodes are hosted in your local environment.

    :::info

    The default stream connector frontend has a temporary limitation. It only accepts Amazon Kinesis. To connect to other sources, you need to use the legacy stream connector frontend. To run RisingWave with the legacy stream connector frontend, ensure that you have Java 11 installed in your environment, and run the following command in your terminal:
    ```shell
    ./risedev configure enable legacy-frontend
    ```

    :::

    You can stop RisingWave with the following command.
    ```shell
    ./risedev kill
    ```

4. Connect to the PostgreSQL interactive terminal.

    ```shell
    psql -h localhost -p 4566 -d dev
    ```
    You can now issue SQL statements to manage your streams and data. 

## Connect to a streaming source

Use `CREATE SOURCE` statement to connect to a streaming source.

To connect to a Kafka topic: 

```sql
CREATE SOURCE KAFKA_TOPIC_1 (
   COLUMN_NAME DATA_TYPE, ...
)
with (
   'connector'='kafka',
   'kafka.topic'='demo_topic',
   'kafka.brokers'='172.10.1.1:9090,172.10.1.2:9090',
   'kafka.scan.startup.mode'='earliest|latest',
   'kafka.time.offset'='140000000',
   'kafka.consumer.group'='XXX_CONSUMER_NAME'
)
ROW FORMAT 'json' 
[ROW SCHEMA LOCATION 's3://path'];
```

For supported streaming sources and SQL examples, please see [Sources](Sources.md).

## Query and manage data

RisingWave uses Postgres-compatible SQL as the interface to manage and query data. Let's see a few examples:

* Create a table
* Create a materialized view from tables
* Create a materialized view from a source
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
        ROUND(AVG(v1), 1) AS avg_v1, 
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
    SELECT m1.v1 as m1v1, m1.v2 as m1v2, m2.v1, m2.v2 
    FROM m1 
    JOIN m2 ON m1.v1 = m2.v1;
```


```sql title="To get the latest values of a materialized view:"
FLUSH;
SELECT * FROM m4;
```

For the complete list of supported SQL statements, see [Statements](Statements.md).






