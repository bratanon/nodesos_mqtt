# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- .`nvmrc` file.
- Enforce node 20+.

### Changed
- Dependabot uses node version from `.nvmrc`.
- Dependabot updates GitHub actions.

### Fixed
- RSSI sensors `device_class` should be `signal_strength`.
- Graceful shutdown on adapter start error.

## [2.0.1] - 2023-12-16

### Fixed
- Log4js is configured all the time.
- Handle MQTT client close when it is reconnecting.
- Logger should show category.

### Changed
- Bumped nodesos to 1.0.2.
