<h1 style="text-align: center; color: darkred">Deprecation notice</h1>

<p style="text-align: center">
<b>Notice</b>: this repository is soon going to be archived. Going forward all Backstage Plugins for PagerDuty will be 
developed and maintained in a monorepo. You can find the mentioned monorepo 
<a href="https://github.com/PagerDuty/backstage-plugin-monorepo">here</a>. All the issues opened by the community will 
be moved and addressed in the new Github repository.
</p>

<br>

# PagerDuty plugin for Backstage - Common

[![Release](https://github.com/PagerDuty/backstage-plugin-common/actions/workflows/on_release_created.yml/badge.svg)](https://github.com/PagerDuty/backstage-plugin-common/actions/workflows/on_release_created.yml)
[![npm version](https://badge.fury.io/js/@pagerduty%2Fbackstage-plugin-common.svg)](https://badge.fury.io/js/@pagerduty%2Fbackstage-plugin-common)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

**Bring the power of PagerDuty to Backstage!**
The PagerDuty plugin reduces the cognitive load on developers responsible for maintaining services in production. Instead of having to go to PagerDuty's console, you can now access the necessary information directly within Backstage. This includes finding active incidents or opening a new incident, reviewing recent changes made to the service, and checking who is on-call.

## Getting Started

Find the complete project's documentation [here](https://pagerduty.github.io/backstage-plugin-docs/).

### Installation

The installation of the PagerDuty plugin for Backstage is done with *yarn* as all other plugins in Backstage. This plugin follows a modular approach which means that every individual component will be a separate package (e.g. frontend, backend, common).

To install this plugin run the following command from the Backstage root folder.

```bash
yarn add --cwd packages/app @pagerduty/backstage-plugin-common
yarn add --cwd packages/backend @pagerduty/backstage-plugin-common
```

### Configuration

To configure this frontend plugin follow the instructions on the `Getting Started` section of the project's documentation [here](https://pagerduty.github.io/backstage-plugin-docs/).

## Support

If you need help with this plugin, please open an issue in [GitHub](https://github.com/PagerDuty/backstage-plugin-common), reach out on the [Backstage Discord server](https://discord.gg/backstage-687207715902193673) or [PagerDuty's community forum](https://community.pagerduty.com).

## Contributing

If you are interested in contributing to this project, please refer to our [Contributing Guidelines](https://github.com/PagerDuty/backstage-plugin/blob/main/CONTRIBUTING.md).
