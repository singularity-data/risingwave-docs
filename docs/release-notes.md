---
id: release-notes
title: Release notes
description: New features and important bug fixes in each release of RisingWave.
slug: /release-notes
---

This page summarizes changes in each version of RisingWave, including new features and important bug fixes. 

# v0.1.8

This version was released on May 14, 2022. 

## Main changes

### SQL features

* Support SQL functions: `concat_ws()`, `abs()`, `round()`, `ceil()`, `floor()`. ([#2589](https://github.com/singularity-data/risingwave/pull/2589), [#2531](https://github.com/singularity-data/risingwave/pull/2531), [#2716](https://github.com/singularity-data/risingwave/pull/2716))
* Support casts from number types (`smallint`, `integer`, `bigint`, `numeric`, `real`, and `double precision`) to `varchar` using the `to_string` method. ([#2522](https://github.com/singularity-data/risingwave/pull/2522))
* Support creating a table with nested columns. ([#2434](https://github.com/singularity-data/risingwave/pull/2434)) 
* Supports non-literals in the `IN` operator. ([#2588](https://github.com/singularity-data/risingwave/pull/2588))
* Support the `IS [NOT] DISTINCT FROM` expression. ([#2582](https://github.com/singularity-data/risingwave/pull/2582))
* Support the `UPDATE` command. Subqueries on the right side of multi-value assignments are not supported yet. ([#2602](https://github.com/singularity-data/risingwave/pull/2602))
* Support table alias in window table functions. ([#2633](https://github.com/singularity-data/risingwave/pull/2633))
* Support database user management. ([#2943](https://github.com/singularity-data/risingwave/pull/2943))

### Connectors

Support the Datagen Source Connector, which can be used to generate mock data for testing purposes. ([#2737](https://github.com/singularity-data/risingwave/pull/2737))

### Observability

* Add metrics for these components in Grafana.
    * Compaction and object-store  ([#2573](https://github.com/singularity-data/risingwave/pull/2573), [#2761](https://github.com/singularity-data/risingwave/pull/2761))
    * Iterator and cache ([#2709](https://github.com/singularity-data/risingwave/pull/2709))
    * Streaming exchange service ([#2906](https://github.com/singularity-data/risingwave/pull/2906))


* Support listing KVs by epoch and table in the risectl tool. ([#2640](https://github.com/singularity-data/risingwave/pull/2640))

### Deployment

* RisingWave docker images support the playground mode in the bridge Docker networking mode. ([#2921](https://github.com/singularity-data/risingwave/pull/2921))
* CA certificates are bundled into RisingWave docker images so that docker images can be used with S3. ([#2853](https://github.com/singularity-data/risingwave/pull/2853))

## Assets

* [risingwave-v0.1.8-x86_64-unknown-linux.tar.gz](https://github.com/singularity-data/risingwave/releases/download/v0.1.8/risingwave-v0.1.8-x86_64-unknown-linux.tar.gz) (Linux)
* [Source code](https://github.com/singularity-data/risingwave/archive/refs/tags/v0.1.8.zip) (zip)
* [Source code](https://github.com/singularity-data/risingwave/archive/refs/tags/v0.1.8.tar.gz) (tar.gz)