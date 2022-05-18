---
id: get-started
title: Get started
description: Install and run RisingWave.
slug: /get-started
sidebar_position: 2
---


This guide will help you get started with RisingWave. We will cover: 

- [Install and run RisingWave](#install-and-run-risingwave)
- [Connect to RisingWave](#connect-to-risingwave)
- [Connect to a streaming source](#connect-to-a-streaming-source)
- [Query and manage data](#query-and-manage-data)

## Install and run RisingWave

You can run RisingWave in three ways:

- Use the pre-built library (only for Linux)
- Install and run from a Docker image (Linux & macOS)
- Build from the source code (Linux & macOS)

### Use the pre-built library (Linux)

1. Download the pre-built library.
 
    ```shell
    wget https://github.com/singularity-data/risingwave/releases/download/v0.1.7/risingwave-v0.1.7-x86_64-unknown-linux.tar.gz
    ```

2. Unzip the library.

    ```shell
    tar xvf risingwave-v0.1.7-x86_64-unknown-linux.tar.gz
    ```

3. Run RisingWave.

    ```shell
    ./risingwave playground
    ```
    RisingWave is now started.




### Install and run from a Docker image (Linux & macOS)

You can install and run RisingWave from a Docker image. Currently, only x86-64 platforms are supported.

Ensure you have Docker intalled on your machine. For installation instructions, see [Install Docker](https://docs.docker.com/get-docker/).

1. Download the docker ccontainer image of the latest nightly build of RisingWave. 
    
    ```sh
    docker pull ghcr.io/singularity-data/risingwave:latest
    ```

2. Run RisingWave from the docker image.
    ```sh
    docker run -it ghcr.io/singularity-data/risingwave:latest playground
    ```

### Build from source (Linux & macOS)

1. Download the source code of RisingWave.

    ```shell
    git clone https://github.com/singularity-data/risingwave.git
    ```

2. Install dependencies.

    RisingWave has the following dependencies. Please ensure all the dependencies have been installed before running RisingWave.

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
    ./risingwave playground
    ```

    All services in RisingWave will be started.



## Connect to RisingWave

After RisingWave is started, you can connect to it via the Postgres interactive terminal `psql`.

```shell
psql -h localhost -p 4566
```

You can now issue SQL queries to manage your streams and data.



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

RisingWave uses Postgres-compatible SQL as the interface to manage and query data.

Before start, ensure that you have connected to RisingWave via `psql`. 

Now let us create a table to store data about taxi trips.

```sql
CREATE TABLE taxi_trips(
    id VARCHAR,
    distance DOUBLE PRECISION,
    duration DOUBLE PRECISION
);
```

We want to create a materialized view to dynamically calculate the average speed of all trips.

```sql
CREATE MATERIALIZED VIEW mv_avg_speed
AS
    SELECT COUNT(id) as no_of_trips,
    SUM(distance) as total_distance,
    SUM(duration) as total_duration,
    SUM(distance) / SUM(duration) as avg_speed,
    FROM taxi_trips;
```

Now let us add some data to the table.

```sql
INSERT INTO taxi_trips
VALUES
    ('1', 4, 10)
```

We can now query the average speed.

```sql
SELECT * FROM mv_avg_speed;
```

Here is the result we get. 

```sql
 no_of_trips | total_distance | total_duration | avg_speed      
-------------+----------------+----------------+------------
           1 |              5 |             10 | 0.4
```

Now let us add a new record.

```sql
INSERT INTO taxi_trips
VALUES
    ('2', 6, 10)
```

As soon as we insert the new record, the materialied view `mv_avg_speed` will be refreshed to re-calculate the results. Let us see if the results are updated.

```sql
SELECT * FROM mv_avg_speed;
```
Here is the result we get. 
```sql
 no_of_trips | total_distance | total_duration | avg_speed      
-------------+----------------+----------------+------------
           2 |             10 |             20 | 0.5

```

You can see that the results are based on the two rows of data. The calculation is performed automatically behind the scene. No matter how many more rows of data we insert, we can always get the latest results by querying the values of the materialized view.

Creating a materialized view from a source is similar. 

```sql title="To create a materialized view from a source:"
CREATE MATERIALIZED VIEW debezium_json_mysql_mv 
AS 
    SELECT COLUMN1, COLUMN2, COLUMN3 FROM debezium_json_mysql_source;
```

With RisingWave, you can also create a materialized view from an existing materialized view. 

```sql title="To create a materialized view from existing materialized views:"
CREATE MATERIALIZED VIEW m3
AS 
    SELECT m1.v1 as m1v1, m1.v2 as m1v2, m2.v1, m2.v2 
    FROM m1 
    INNER JOIN m2 ON m1.v1 = m2.v1;
```


For the complete list of supported SQL statements, see [Statements](Statements.md).






