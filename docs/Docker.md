---
id: docker
title: Using Docker
description: Set up a Docker cluster of RisingWave
slug: /docker
---

To set up a local cluster of RisingWave, you can use Docker and Docker Compose to run RisingWave
in containers with several necessary components.

0. Prerequists

    If you don't have Docker and Docker Compose installed, please follow the steps:

    - [Install Docker](https://docs.docker.com/get-docker/)
    - [Install Docker-Compose](https://docs.docker.com/compose/install/)

1. Download the `docker-compose.yml` file

    ```sh
    wget https://raw.githubusercontent.com/singularity-data/risingwave/main/docker/docker-compose.yml
    ```

2. Start the cluster

    ```sh
    docker-compose up -d
    ```

    By default this command will run multiple containers including:
    - [MinIO](https://min.io/): Used as a local S3 service.
    - 1 MetaNode
    - 1 ComputeNode
    - 1 Frontend
    - 1 Redpanda instance

    You can test the connection to the cluster via psql:

    ```sh
    psql -h localhost -p 4566 -d dev
    ```

    If you want to change the parameters of the cluster, please edit the docker-compose file and run `docker-compose up -d` again.
