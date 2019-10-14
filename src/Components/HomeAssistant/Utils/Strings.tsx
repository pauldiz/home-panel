// @flow
type StringItem = {
  [item: string]: any;
};

// Sourced from https://github.com/home-assistant/home-assistant-polymer/blob/master/translations/en.json
const data: StringItem = {
  panel: {
    config: 'Configuration',
    states: 'Overview',
    map: 'Map',
    logbook: 'Logbook',
    history: 'History',
    mailbox: 'Mailbox',
    shopping_list: 'Shopping list',
    'dev-info': 'Info',
    developer_tools: 'Developer Tools',
    calendar: 'Calendar',
    profile: 'Profile'
  },
  state: {
    default: {
      off: 'Off',
      on: 'On',
      unknown: 'Unknown',
      unavailable: 'Unavailable'
    },
    alarm_control_panel: {
      armed: 'Armed',
      disarmed: 'Disarmed',
      armed_home: 'Armed home',
      armed_away: 'Armed away',
      armed_night: 'Armed night',
      pending: 'Pending',
      arming: 'Arming',
      disarming: 'Disarming',
      triggered: 'Triggered',
      armed_custom_bypass: 'Armed custom bypass'
    },
    automation: {
      off: 'Off',
      on: 'On'
    },
    binary_sensor: {
      default: {
        off: 'Off',
        on: 'On'
      },
      moisture: {
        off: 'Dry',
        on: 'Wet'
      },
      gas: {
        off: 'Clear',
        on: 'Detected'
      },
      motion: {
        off: 'Clear',
        on: 'Detected'
      },
      occupancy: {
        off: 'Clear',
        on: 'Detected'
      },
      smoke: {
        off: 'Clear',
        on: 'Detected'
      },
      sound: {
        off: 'Clear',
        on: 'Detected'
      },
      vibration: {
        off: 'Clear',
        on: 'Detected'
      },
      opening: {
        off: 'Closed',
        on: 'Open'
      },
      safety: {
        off: 'Safe',
        on: 'Unsafe'
      },
      presence: {
        off: 'Away',
        on: 'Home'
      },
      battery: {
        off: 'Normal',
        on: 'Low'
      },
      problem: {
        off: 'OK',
        on: 'Problem'
      },
      connectivity: {
        off: 'Disconnected',
        on: 'Connected'
      },
      cold: {
        off: 'Normal',
        on: 'Cold'
      },
      door: {
        off: 'Closed',
        on: 'Open'
      },
      garage_door: {
        off: 'Closed',
        on: 'Open'
      },
      heat: {
        off: 'Normal',
        on: 'Hot'
      },
      window: {
        off: 'Closed',
        on: 'Open'
      },
      lock: {
        off: 'Locked',
        on: 'Unlocked'
      }
    },
    calendar: {
      off: 'Off',
      on: 'On'
    },
    camera: {
      recording: 'Recording',
      streaming: 'Streaming',
      idle: 'Idle'
    },
    climate: {
      off: 'Off',
      on: 'On',
      heat: 'Heat',
      cool: 'Cool',
      idle: 'Idle',
      auto: 'Auto',
      dry: 'Dry',
      fan_only: 'Fan only',
      eco: 'Eco',
      electric: 'Electric',
      performance: 'Performance',
      high_demand: 'High demand',
      heat_pump: 'Heat pump',
      gas: 'Gas',
      manual: 'Manual',
      heat_cool: 'Heat/Cool'
    },
    configurator: {
      configure: 'Configure',
      configured: 'Configured'
    },
    cover: {
      open: 'Open',
      opening: 'Opening',
      closed: 'Closed',
      closing: 'Closing',
      stopped: 'Stopped'
    },
    device_tracker: {
      home: 'Home',
      not_home: 'Away'
    },
    fan: {
      off: 'Off',
      on: 'On'
    },
    group: {
      off: 'Off',
      on: 'On',
      home: 'Home',
      not_home: 'Away',
      open: 'Open',
      opening: 'Opening',
      closed: 'Closed',
      closing: 'Closing',
      stopped: 'Stopped',
      locked: 'Locked',
      unlocked: 'Unlocked',
      ok: 'OK',
      problem: 'Problem'
    },
    input_boolean: {
      off: 'Off',
      on: 'On'
    },
    light: {
      off: 'Off',
      on: 'On'
    },
    lock: {
      locked: 'Locked',
      unlocked: 'Unlocked'
    },
    media_player: {
      off: 'Off',
      on: 'On',
      playing: 'Playing',
      paused: 'Paused',
      idle: 'Idle',
      standby: 'Standby'
    },
    plant: {
      ok: 'OK',
      problem: 'Problem'
    },
    remote: {
      off: 'Off',
      on: 'On'
    },
    scene: {
      scening: 'Scening'
    },
    script: {
      off: 'Off',
      on: 'On'
    },
    sensor: {
      off: 'Off',
      on: 'On'
    },
    sun: {
      above_horizon: 'Above horizon',
      below_horizon: 'Below horizon'
    },
    switch: {
      off: 'Off',
      on: 'On'
    },
    zwave: {
      default: {
        initializing: 'Initializing',
        dead: 'Dead',
        sleeping: 'Sleeping',
        ready: 'Ready'
      },
      query_stage: {
        initializing: 'Initializing ({query_stage})',
        dead: 'Dead ({query_stage})'
      }
    },
    weather: {
      'clear-night': 'Clear, night',
      cloudy: 'Cloudy',
      fog: 'Fog',
      hail: 'Hail',
      lightning: 'Lightning',
      'lightning-rainy': 'Lightning, rainy',
      partlycloudy: 'Partly cloudy',
      pouring: 'Pouring',
      rainy: 'Rainy',
      snowy: 'Snowy',
      'snowy-rainy': 'Snowy, rainy',
      sunny: 'Sunny',
      windy: 'Windy',
      'windy-variant': 'Windy',
      exceptional: 'Exceptional'
    },
    vacuum: {
      cleaning: 'Cleaning',
      docked: 'Docked',
      error: 'Error',
      idle: 'Idle',
      off: 'Off',
      on: 'On',
      paused: 'Paused',
      returning: 'Returning to dock'
    },
    timer: {
      active: 'active',
      idle: 'idle',
      paused: 'paused'
    },
    person: {
      home: 'Home',
      not_home: 'Away'
    }
  },
  state_badge: {
    default: {
      unknown: 'Unk',
      unavailable: 'Unavai',
      error: 'Error',
      entity_not_found: 'Entity Not Found'
    },
    alarm_control_panel: {
      armed: 'Armed',
      disarmed: 'Disarm',
      armed_home: 'Armed',
      armed_away: 'Armed',
      armed_night: 'Armed',
      pending: 'Pend',
      arming: 'Arming',
      disarming: 'Disarm',
      triggered: 'Trig',
      armed_custom_bypass: 'Armed'
    },
    device_tracker: {
      home: 'Home',
      not_home: 'Away'
    },
    person: {
      home: 'Home',
      not_home: 'Away'
    }
  },
  ui: {
    panel: {
      'shopping-list': {
        clear_completed: 'Clear completed',
        add_item: 'Add item',
        microphone_tip:
          'Tap the microphone on the top right and say “Add candy to my shopping list”'
      },
      'developer-tools': {
        tabs: {
          services: {
            title: 'Services'
          },
          states: {
            title: 'States'
          },
          events: {
            title: 'Events'
          },
          templates: {
            title: 'Template'
          },
          mqtt: {
            title: 'MQTT'
          },
          info: {
            title: 'Info'
          },
          logs: {
            title: 'Logs'
          }
        }
      },
      history: {
        showing_entries: 'Showing entries for',
        period: 'Period'
      },
      logbook: {
        showing_entries: 'Showing entries for',
        period: 'Period'
      },
      mailbox: {
        empty: 'You do not have any messages',
        playback_title: 'Message playback',
        delete_prompt: 'Delete this message?',
        delete_button: 'Delete'
      },
      config: {
        header: 'Configure Home Assistant',
        introduction:
          "Here it is possible to configure your components and Home Assistant. Not everything is possible to configure from the UI yet, but we're working on it.",
        core: {
          caption: 'General',
          description: 'Change your general Home Assistant configuration',
          section: {
            core: {
              header: 'General Configuration',
              introduction:
                'Changing your configuration can be a tiresome process. We know. This section will try to make your life a little bit easier.',
              core_config: {
                edit_requires_storage:
                  'Editor disabled because config stored in configuration.yaml.',
                location_name: 'Name of your Home Assistant installation',
                latitude: 'Latitude',
                longitude: 'Longitude',
                elevation: 'Elevation',
                elevation_meters: 'meters',
                time_zone: 'Time Zone',
                unit_system: 'Unit System',
                unit_system_imperial: 'Imperial',
                unit_system_metric: 'Metric',
                imperial_example: 'Fahrenheit, pounds',
                metric_example: 'Celsius, kilograms',
                save_button: 'Save'
              }
            },
            server_control: {
              validation: {
                heading: 'Configuration validation',
                introduction:
                  'Validate your configuration if you recently made some changes to your configuration and want to make sure that it is all valid',
                check_config: 'Check config',
                valid: 'Configuration valid!',
                invalid: 'Configuration invalid'
              },
              reloading: {
                heading: 'Configuration reloading',
                introduction:
                  'Some parts of Home Assistant can reload without requiring a restart. Hitting reload will unload their current configuration and load the new one.',
                core: 'Reload core',
                group: 'Reload groups',
                automation: 'Reload automations',
                script: 'Reload scripts'
              },
              server_management: {
                heading: 'Server management',
                introduction:
                  'Control your Home Assistant server… from Home Assistant.',
                restart: 'Restart',
                stop: 'Stop'
              }
            }
          }
        },
        customize: {
          caption: 'Customization',
          description: 'Customize your entities',
          picker: {
            header: 'Customization',
            introduction:
              'Tweak per-entity attributes. Added/edited customizations will take effect immediately. Removed customizations will take effect when the entity is updated.'
          }
        },
        automation: {
          caption: 'Automation',
          description: 'Create and edit automations',
          picker: {
            header: 'Automation Editor',
            introduction:
              'The automation editor allows you to create and edit automations. Please follow the link below to read the instructions to make sure that you have configured Home Assistant correctly.',
            pick_automation: 'Pick automation to edit',
            no_automations: 'We couldn’t find any editable automations',
            add_automation: 'Add automation',
            learn_more: 'Learn more about automations'
          },
          editor: {
            introduction: 'Use automations to bring your home alive.',
            default_name: 'New Automation',
            save: 'Save',
            unsaved_confirm:
              'You have unsaved changes. Are you sure you want to leave?',
            alias: 'Name',
            triggers: {
              header: 'Triggers',
              introduction:
                'Triggers are what starts the processing of an automation rule. It is possible to specify multiple triggers for the same rule. Once a trigger starts, Home Assistant will validate the conditions, if any, and call the action.',
              add: 'Add trigger',
              duplicate: 'Duplicate',
              delete: 'Delete',
              delete_confirm: 'Sure you want to delete?',
              unsupported_platform: 'Unsupported platform: {platform}',
              type_select: 'Trigger type',
              type: {
                event: {
                  label: 'Event',
                  event_type: 'Event type',
                  event_data: 'Event data'
                },
                state: {
                  label: 'State',
                  from: 'From',
                  to: 'To',
                  for: 'For'
                },
                homeassistant: {
                  label: 'Home Assistant',
                  event: 'Event:',
                  start: 'Start',
                  shutdown: 'Shutdown'
                },
                mqtt: {
                  label: 'MQTT',
                  topic: 'Topic',
                  payload: 'Payload (optional)'
                },
                numeric_state: {
                  label: 'Numeric state',
                  above: 'Above',
                  below: 'Below',
                  value_template: 'Value template (optional)'
                },
                sun: {
                  label: 'Sun',
                  event: 'Event:',
                  sunrise: 'Sunrise',
                  sunset: 'Sunset',
                  offset: 'Offset (optional)'
                },
                template: {
                  label: 'Template',
                  value_template: 'Value template'
                },
                time: {
                  label: 'Time',
                  at: 'At'
                },
                zone: {
                  label: 'Zone',
                  entity: 'Entity with location',
                  zone: 'Zone',
                  event: 'Event:',
                  enter: 'Enter',
                  leave: 'Leave'
                },
                webhook: {
                  label: 'Webhook',
                  webhook_id: 'Webhook ID'
                },
                time_pattern: {
                  label: 'Time Pattern',
                  hours: 'Hours',
                  minutes: 'Minutes',
                  seconds: 'Seconds'
                },
                geo_location: {
                  label: 'Geolocation',
                  source: 'Source',
                  zone: 'Zone',
                  event: 'Event:',
                  enter: 'Enter',
                  leave: 'Leave'
                },
                device: {
                  label: 'Device',
                  extra_fields: {
                    above: 'Above',
                    below: 'Below',
                    for: 'Duration'
                  }
                }
              },
              learn_more: 'Learn more about triggers'
            },
            conditions: {
              header: 'Conditions',
              introduction:
                'Conditions are an optional part of an automation rule and can be used to prevent an action from happening when triggered. Conditions look very similar to triggers but are very different. A trigger will look at events happening in the system while a condition only looks at how the system looks right now. A trigger can observe that a switch is being turned on. A condition can only see if a switch is currently on or off.',
              add: 'Add condition',
              duplicate: 'Duplicate',
              delete: 'Delete',
              delete_confirm: 'Sure you want to delete?',
              unsupported_condition: 'Unsupported condition: {condition}',
              type_select: 'Condition type',
              type: {
                state: {
                  label: 'State',
                  state: 'State'
                },
                numeric_state: {
                  label: 'Numeric state',
                  above: 'Above',
                  below: 'Below',
                  value_template: 'Value template (optional)'
                },
                sun: {
                  label: 'Sun',
                  before: 'Before:',
                  after: 'After:',
                  before_offset: 'Before offset (optional)',
                  after_offset: 'After offset (optional)',
                  sunrise: 'Sunrise',
                  sunset: 'Sunset'
                },
                template: {
                  label: 'Template',
                  value_template: 'Value template'
                },
                time: {
                  label: 'Time',
                  after: 'After',
                  before: 'Before'
                },
                zone: {
                  label: 'Zone',
                  entity: 'Entity with location',
                  zone: 'Zone'
                },
                device: {
                  label: 'Device'
                },
                and: {
                  label: 'And'
                },
                or: {
                  label: 'Or'
                }
              },
              learn_more: 'Learn more about conditions'
            },
            actions: {
              header: 'Actions',
              introduction:
                'The actions are what Home Assistant will do when the automation is triggered.',
              add: 'Add action',
              duplicate: 'Duplicate',
              delete: 'Delete',
              delete_confirm: 'Sure you want to delete?',
              unsupported_action: 'Unsupported action: {action}',
              type_select: 'Action type',
              type: {
                service: {
                  label: 'Call service',
                  service_data: 'Service data'
                },
                delay: {
                  label: 'Delay',
                  delay: 'Delay'
                },
                wait_template: {
                  label: 'Wait',
                  wait_template: 'Wait Template',
                  timeout: 'Timeout (optional)'
                },
                condition: {
                  label: 'Condition'
                },
                event: {
                  label: 'Fire event',
                  event: 'Event:',
                  service_data: 'Service data'
                },
                device_id: {
                  label: 'Device'
                }
              },
              learn_more: 'Learn more about actions'
            },
            load_error_not_editable:
              'Only automations in automations.yaml are editable.',
            load_error_unknown: 'Error loading automation ({err_no}).',
            description: {
              label: 'Description',
              placeholder: 'Optional description'
            }
          }
        },
        script: {
          caption: 'Script',
          description: 'Create and edit scripts'
        },
        zwave: {
          caption: 'Z-Wave',
          description: 'Manage your Z-Wave network',
          network_management: {
            header: 'Z-Wave Network Management',
            introduction:
              "Run commands that affect the Z-Wave network. You won't get feedback on whether most commands succeeded, but you can check the OZW Log to try to find out."
          },
          network_status: {
            network_stopped: 'Z-Wave Network Stopped',
            network_starting: 'Starting Z-Wave Network...',
            network_starting_note:
              'This may take a while depending on the size of your network.',
            network_started: 'Z-Wave Network Started',
            network_started_note_some_queried:
              'Awake nodes have been queried. Sleeping nodes will be queried when they wake.',
            network_started_note_all_queried: 'All nodes have been queried.'
          },
          services: {
            start_network: 'Start Network',
            stop_network: 'Stop Network',
            heal_network: 'Heal Network',
            test_network: 'Test Network',
            soft_reset: 'Soft Reset',
            save_config: 'Save Config',
            add_node_secure: 'Add Node Secure',
            add_node: 'Add Node',
            remove_node: 'Remove Node',
            cancel_command: 'Cancel Command'
          },
          common: {
            value: 'Value',
            instance: 'Instance',
            index: 'Index',
            unknown: 'unknown',
            wakeup_interval: 'Wakeup Interval'
          },
          values: {
            header: 'Node Values'
          },
          node_config: {
            header: 'Node Config Options',
            seconds: 'seconds',
            set_wakeup: 'Set Wakeup Interval',
            config_parameter: 'Config Parameter',
            config_value: 'Config Value',
            true: 'True',
            false: 'False',
            set_config_parameter: 'Set Config Parameter'
          }
        },
        users: {
          caption: 'Users',
          description: 'Manage users',
          picker: {
            title: 'Users'
          },
          editor: {
            rename_user: 'Rename user',
            change_password: 'Change password',
            activate_user: 'Activate user',
            deactivate_user: 'Deactivate user',
            delete_user: 'Delete user',
            caption: 'View user'
          },
          add_user: {
            caption: 'Add user',
            name: 'Name',
            username: 'Username',
            password: 'Password',
            create: 'Create'
          }
        },
        cloud: {
          caption: 'Home Assistant Cloud',
          description_login: 'Logged in as {email}',
          description_not_login: 'Not logged in',
          description_features:
            'Control away from home, integrate with Alexa and Google Assistant.'
        },
        integrations: {
          caption: 'Integrations',
          description: 'Manage and setup integrations',
          discovered: 'Discovered',
          configured: 'Configured',
          new: 'Set up a new integration',
          configure: 'Configure',
          none: 'Nothing configured yet',
          config_entry: {
            no_devices: 'This integration has no devices.',
            no_device: 'Entities without devices',
            delete_confirm: 'Are you sure you want to delete this integration?',
            restart_confirm:
              'Restart Home Assistant to finish removing this integration',
            manuf: 'by {manufacturer}',
            via: 'Connected via',
            firmware: 'Firmware: {version}',
            device_unavailable: 'device unavailable',
            entity_unavailable: 'entity unavailable',
            no_area: 'No Area',
            hub: 'Connected via'
          },
          config_flow: {
            external_step: {
              description:
                'This step requires you to visit an external website to be completed.',
              open_site: 'Open website'
            }
          }
        },
        zha: {
          caption: 'ZHA',
          description: 'Zigbee Home Automation network management',
          services: {
            reconfigure:
              'Reconfigure ZHA device (heal device). Use this if you are having issues with the device. If the device in question is a battery powered device please ensure it is awake and accepting commands when you use this service.',
            updateDeviceName:
              'Set a custom name for this device in the device registry.',
            remove: 'Remove a device from the ZigBee network.'
          },
          device_card: {
            device_name_placeholder: 'User given name',
            area_picker_label: 'Area',
            update_name_button: 'Update Name'
          },
          add_device_page: {
            header: 'Zigbee Home Automation - Add Devices',
            spinner: 'Searching for ZHA Zigbee devices...',
            discovery_text:
              'Discovered devices will show up here. Follow the instructions for your device(s) and place the device(s) in pairing mode.'
          }
        },
        area_registry: {
          caption: 'Area Registry',
          description: 'Overview of all areas in your home.',
          picker: {
            header: 'Area Registry',
            introduction:
              'Areas are used to organize where devices are. This information will be used throughout Home Assistant to help you in organizing your interface, permissions and integrations with other systems.',
            introduction2:
              'To place devices in an area, use the link below to navigate to the integrations page and then click on a configured integration to get to the device cards.',
            integrations_page: 'Integrations page',
            no_areas: 'Looks like you have no areas yet!',
            create_area: 'CREATE AREA'
          },
          no_areas: 'Looks like you have no areas yet!',
          create_area: 'CREATE AREA',
          editor: {
            default_name: 'New Area',
            delete: 'DELETE',
            update: 'UPDATE',
            create: 'CREATE'
          }
        },
        entity_registry: {
          caption: 'Entity Registry',
          description: 'Overview of all known entities.',
          picker: {
            header: 'Entity Registry',
            unavailable: '(unavailable)',
            introduction:
              'Home Assistant keeps a registry of every entity it has ever seen that can be uniquely identified. Each of these entities will have an entity ID assigned which will be reserved for just this entity.',
            introduction2:
              "Use the entity registry to override the name, change the entity ID or remove the entry from Home Assistant. Note, removing the entity registry entry won't remove the entity. To do that, follow the link below and remove it from the integrations page.",
            integrations_page: 'Integrations page',
            show_disabled: 'Show disabled entities'
          },
          editor: {
            unavailable: 'This entity is not currently available.',
            default_name: 'New Area',
            delete: 'DELETE',
            update: 'UPDATE',
            enabled_label: 'Enable entity',
            enabled_cause: 'Disabled by {cause}.',
            enabled_description:
              'Disabled entities will not be added to Home Assistant.',
            confirm_delete: 'Are you sure you want to delete this entry?',
            confirm_delete2:
              "Deleting an entry will not remove the entity from Home Assistant. To do this, you will need to remove the integration '{platform}' from Home Assistant."
          }
        },
        person: {
          caption: 'Persons',
          description: 'Manage the persons that Home Assistant tracks.',
          detail: {
            name: 'Name',
            device_tracker_intro:
              'Select the devices that belong to this person.',
            device_tracker_picked: 'Track Device',
            device_tracker_pick: 'Pick device to track'
          }
        },
        server_control: {
          caption: 'Server Control',
          description: 'Restart and stop the Home Assistant server',
          section: {
            validation: {
              heading: 'Configuration validation',
              introduction:
                'Validate your configuration if you recently made some changes to your configuration and want to make sure that it is all valid',
              check_config: 'Check config',
              valid: 'Configuration valid!',
              invalid: 'Configuration invalid'
            },
            reloading: {
              heading: 'Configuration reloading',
              introduction:
                'Some parts of Home Assistant can reload without requiring a restart. Hitting reload will unload their current configuration and load the new one.',
              core: 'Reload core',
              group: 'Reload groups',
              automation: 'Reload automations',
              script: 'Reload scripts',
              scene: 'Reload scenes'
            },
            server_management: {
              heading: 'Server management',
              introduction:
                'Control your Home Assistant server… from Home Assistant.',
              restart: 'Restart',
              stop: 'Stop',
              confirm_restart:
                'Are you sure you want to restart Home Assistant?',
              confirm_stop: 'Are you sure you want to stop Home Assistant?'
            }
          }
        },
        devices: {
          caption: 'Devices',
          description: 'Manage connected devices',
          automation: {
            triggers: {
              caption: 'Do something when...'
            },
            conditions: {
              caption: 'Only do something if...'
            },
            actions: {
              caption: 'When something is triggered...'
            }
          }
        }
      },
      profile: {
        push_notifications: {
          header: 'Push Notifications',
          description: 'Send notifications to this device.',
          error_load_platform: 'Configure notify.html5.',
          error_use_https: 'Requires SSL enabled for frontend.',
          push_notifications: 'Push notifications',
          link_promo: 'Learn more'
        },
        language: {
          header: 'Language',
          link_promo: 'Help translating',
          dropdown_label: 'Language'
        },
        themes: {
          header: 'Theme',
          error_no_theme: 'No themes available.',
          link_promo: 'Learn about themes',
          dropdown_label: 'Theme'
        },
        refresh_tokens: {
          header: 'Refresh Tokens',
          description:
            'Each refresh token represents a login session. Refresh tokens will be automatically removed when you click log out. The following refresh tokens are currently active for your account.',
          token_title: 'Refresh token for {clientId}',
          created_at: 'Created at {date}',
          confirm_delete:
            'Are you sure you want to delete the refresh token for {name}?',
          delete_failed: 'Failed to delete the refresh token.',
          last_used: 'Last used at {date} from {location}',
          not_used: 'Has never been used',
          current_token_tooltip: 'Unable to delete current refresh token'
        },
        long_lived_access_tokens: {
          header: 'Long-Lived Access Tokens',
          description:
            'Create long-lived access tokens to allow your scripts to interact with your Home Assistant instance. Each token will be valid for 10 years from creation. The following long-lived access tokens are currently active.',
          learn_auth_requests: 'Learn how to make authenticated requests.',
          created_at: 'Created at {date}',
          confirm_delete:
            'Are you sure you want to delete the access token for {name}?',
          delete_failed: 'Failed to delete the access token.',
          create: 'Create Token',
          create_failed: 'Failed to create the access token.',
          prompt_name: 'Name?',
          prompt_copy_token:
            'Copy your access token. It will not be shown again.',
          empty_state: 'You have no long-lived access tokens yet.',
          last_used: 'Last used at {date} from {location}',
          not_used: 'Has never been used'
        },
        current_user: 'You are currently logged in as {fullName}.',
        is_owner: 'You are an owner.',
        change_password: {
          header: 'Change Password',
          current_password: 'Current Password',
          new_password: 'New Password',
          confirm_new_password: 'Confirm New Password',
          error_required: 'Required',
          submit: 'Submit'
        },
        mfa: {
          header: 'Multi-factor Authentication Modules',
          disable: 'Disable',
          enable: 'Enable',
          confirm_disable: 'Are you sure you want to disable {name}?'
        },
        mfa_setup: {
          title_aborted: 'Aborted',
          title_success: 'Success!',
          step_done: 'Setup done for {step}',
          close: 'Close',
          submit: 'Submit'
        },
        logout: 'Log out',
        force_narrow: {
          header: 'Always hide the sidebar',
          description:
            'This will hide the sidebar by default, similar to the mobile experience.'
        },
        vibrate: {
          header: 'Vibrate',
          description:
            'Enable or disable vibration on this device when controlling devices.'
        }
      },
      'page-authorize': {
        initializing: 'Initializing',
        authorizing_client:
          "You're about to give {clientId} access to your Home Assistant instance.",
        logging_in_with: 'Logging in with **{authProviderName}**.',
        pick_auth_provider: 'Or log in with',
        abort_intro: 'Login aborted',
        form: {
          working: 'Please wait',
          unknown_error: 'Something went wrong',
          providers: {
            homeassistant: {
              step: {
                init: {
                  data: {
                    username: 'Username',
                    password: 'Password'
                  }
                },
                mfa: {
                  data: {
                    code: 'Two-factor Authentication Code'
                  },
                  description:
                    'Open the **{mfa_module_name}** on your device to view your two-factor authentication code and verify your identity:'
                }
              },
              error: {
                invalid_auth: 'Invalid username or password',
                invalid_code: 'Invalid authentication code'
              },
              abort: {
                login_expired: 'Session expired, please login again.'
              }
            },
            legacy_api_password: {
              step: {
                init: {
                  data: {
                    password: 'API Password'
                  },
                  description:
                    'Please input the API password in your http config:'
                },
                mfa: {
                  data: {
                    code: 'Two-factor Authentication Code'
                  },
                  description:
                    'Open the **{mfa_module_name}** on your device to view your two-factor authentication code and verify your identity:'
                }
              },
              error: {
                invalid_auth: 'Invalid API password',
                invalid_code: 'Invalid authentication code'
              },
              abort: {
                no_api_password_set:
                  "You don't have an API password configured.",
                login_expired: 'Session expired, please login again.'
              }
            },
            trusted_networks: {
              step: {
                init: {
                  data: {
                    user: 'User'
                  },
                  description: 'Please select a user you want to login as:'
                }
              },
              abort: {
                not_whitelisted: 'Your computer is not whitelisted.'
              }
            },
            command_line: {
              step: {
                init: {
                  data: {
                    username: 'Username',
                    password: 'Password'
                  }
                },
                mfa: {
                  data: {
                    code: 'Two-factor Authentication Code'
                  },
                  description:
                    'Open the **{mfa_module_name}** on your device to view your two-factor authentication code and verify your identity:'
                }
              },
              error: {
                invalid_auth: 'Invalid username or password',
                invalid_code: 'Invalid authentication code'
              },
              abort: {
                login_expired: 'Session expired, please login again.'
              }
            }
          }
        }
      },
      'page-onboarding': {
        intro:
          'Are you ready to awaken your home, reclaim your privacy and join a worldwide community of tinkerers?',
        user: {
          intro: "Let's get started by creating a user account.",
          required_field: 'Required',
          data: {
            name: 'Name',
            username: 'Username',
            password: 'Password',
            password_confirm: 'Confirm Password'
          },
          create_account: 'Create Account',
          error: {
            required_fields: 'Fill in all required fields',
            password_not_match: "Passwords don't match"
          }
        },
        integration: {
          intro:
            'Devices and services are represented in Home Assistant as integrations. You can set them up now, or do it later from the configuration screen.',
          more_integrations: 'More',
          finish: 'Finish'
        },
        'core-config': {
          intro:
            'Hello {name}, welcome to Home Assistant. How would you like to name your home?',
          intro_location:
            'We would like to know where you live. This information will help with displaying information and setting up sun-based automations. This data is never shared outside of your network.',
          intro_location_detect:
            'We can help you fill in this information by making a one-time request to an external service.',
          location_name_default: 'Home',
          button_detect: 'Detect',
          finish: 'Next'
        }
      },
      lovelace: {
        cards: {
          'shopping-list': {
            checked_items: 'Checked items',
            clear_items: 'Clear checked items',
            add_item: 'Add item'
          },
          empty_state: {
            title: 'Welcome Home',
            no_devices:
              'This page allows you to control your devices, however it looks like you have no devices set up yet. Head to the integrations page to get started.',
            go_to_integrations_page: 'Go to the integrations page.'
          },
          'picture-elements': {
            hold: 'Hold:',
            tap: 'Tap:',
            navigate_to: 'Navigate to {location}',
            toggle: 'Toggle {name}',
            call_service: 'Call service {name}',
            more_info: 'Show more-info: {name}',
            url: 'Open window to {url_path}'
          }
        },
        editor: {
          edit_card: {
            header: 'Card Configuration',
            save: 'Save',
            toggle_editor: 'Toggle Editor',
            pick_card: 'Pick the card you want to add.',
            add: 'Add Card',
            edit: 'Edit',
            delete: 'Delete',
            move: 'Move'
          },
          migrate: {
            header: 'Configuration Incompatible',
            para_no_id:
              "This element doesn't have an ID. Please add an ID to this element in 'ui-lovelace.yaml'.",
            para_migrate:
              "Home Assistant can add ID's to all your cards and views automatically for you by pressing the 'Migrate config' button.",
            migrate: 'Migrate config'
          },
          header: 'Edit UI',
          edit_view: {
            header: 'View Configuration',
            add: 'Add view',
            edit: 'Edit view',
            delete: 'Delete view'
          },
          save_config: {
            header: 'Take control of your Lovelace UI',
            para:
              'By default Home Assistant will maintain your user interface, updating it when new entities or Lovelace components become available. If you take control we will no longer make changes automatically for you.',
            para_sure:
              'Are you sure you want to take control of your user interface?',
            cancel: 'Never mind',
            save: 'Take control'
          },
          menu: {
            raw_editor: 'Raw config editor'
          },
          raw_editor: {
            header: 'Edit Config',
            save: 'Save',
            unsaved_changes: 'Unsaved changes',
            saved: 'Saved'
          },
          edit_lovelace: {
            header: 'Title of your Lovelace UI',
            explanation: 'This title is shown above all your views in Lovelace.'
          },
          card: {
            alarm_panel: {
              available_states: 'Available States'
            },
            config: {
              required: 'Required',
              optional: 'Optional'
            },
            entities: {
              show_header_toggle: 'Show Header Toggle?'
            },
            gauge: {
              severity: {
                define: 'Define Severity?',
                green: 'Green',
                red: 'Red',
                yellow: 'Yellow'
              }
            },
            glance: {
              columns: 'Columns'
            },
            generic: {
              aspect_ratio: 'Aspect Ratio',
              camera_image: 'Camera Entity',
              camera_view: 'Camera View',
              entities: 'Entities',
              entity: 'Entity',
              hold_action: 'Hold Action',
              hours_to_show: 'Hours to Show',
              icon: 'Icon',
              icon_height: 'Icon Height',
              image: 'Image Path',
              maximum: 'Maximum',
              minimum: 'Minimum',
              name: 'Name',
              refresh_interval: 'Refresh Interval',
              show_icon: 'Show Icon?',
              show_name: 'Show Name?',
              show_state: 'Show State?',
              tap_action: 'Tap Action',
              title: 'Title',
              theme: 'Theme',
              unit: 'Unit',
              url: 'Url'
            },
            map: {
              geo_location_sources: 'Geolocation Sources',
              dark_mode: 'Dark Mode?',
              default_zoom: 'Default Zoom',
              source: 'Source'
            },
            markdown: {
              content: 'Content'
            },
            sensor: {
              graph_detail: 'Graph Detail',
              graph_type: 'Graph Type'
            }
          }
        },
        menu: {
          configure_ui: 'Configure UI',
          unused_entities: 'Unused entities',
          help: 'Help',
          refresh: 'Refresh'
        },
        warning: {
          entity_not_found: 'Entity not available: {entity}',
          entity_non_numeric: 'Entity is non-numeric: {entity}'
        },
        changed_toast: {
          message:
            'The Lovelace config was updated, would you like to refresh?',
          refresh: 'Refresh'
        },
        reload_lovelace: 'Reload Lovelace'
      },
      'page-demo': {
        cards: {
          demo: {
            demo_by: 'by {name}',
            next_demo: 'Next demo',
            introduction:
              "Welcome home! You've reached the Home Assistant demo where we showcase the best UIs created by our community.",
            learn_more: 'Learn more about Home Assistant'
          }
        },
        config: {
          arsaboo: {
            names: {
              upstairs: 'Upstairs',
              family_room: 'Family Room',
              kitchen: 'Kitchen',
              patio: 'Patio',
              hallway: 'Hallway',
              master_bedroom: 'Master Bedroom',
              left: 'Left',
              right: 'Right',
              mirror: 'Mirror'
            },
            labels: {
              lights: 'Lights',
              information: 'Information',
              morning_commute: 'Morning Commute',
              commute_home: 'Commute to Home',
              entertainment: 'Entertainment',
              activity: 'Activity',
              hdmi_input: 'HDMI Input',
              hdmi_switcher: 'HDMI Switcher',
              volume: 'Volume',
              total_tv_time: 'Total TV Time',
              turn_tv_off: 'Turn Television off',
              air: 'Air'
            },
            unit: {
              watching: 'watching',
              minutes_abbr: 'min'
            }
          }
        }
      }
    },
    sidebar: {
      log_out: 'Log out',
      external_app_configuration: 'App Configuration'
    },
    common: {
      loading: 'Loading',
      cancel: 'Cancel',
      save: 'Save',
      successfully_saved: 'Successfully saved'
    },
    duration: {
      day: '{count} {count, plural,\n  one {day}\n  other {days}\n}',
      week: '{count} {count, plural,\n  one {week}\n  other {weeks}\n}',
      second: '{count} {count, plural,\n  one {second}\n  other {seconds}\n}',
      minute: '{count} {count, plural,\n  one {minute}\n  other {minutes}\n}',
      hour: '{count} {count, plural,\n  one {hour}\n  other {hours}\n}'
    },
    'login-form': {
      password: 'Password',
      remember: 'Remember',
      log_in: 'Log in'
    },
    card: {
      camera: {
        not_available: 'Image not available'
      },
      persistent_notification: {
        dismiss: 'Dismiss'
      },
      scene: {
        activate: 'Activate'
      },
      script: {
        execute: 'Execute'
      },
      weather: {
        attributes: {
          air_pressure: 'Air pressure',
          humidity: 'Humidity',
          temperature: 'Temperature',
          visibility: 'Visibility',
          wind_speed: 'Wind speed'
        },
        cardinal_direction: {
          e: 'E',
          ene: 'ENE',
          ese: 'ESE',
          n: 'N',
          ne: 'NE',
          nne: 'NNE',
          nw: 'NW',
          nnw: 'NNW',
          s: 'S',
          se: 'SE',
          sse: 'SSE',
          ssw: 'SSW',
          sw: 'SW',
          w: 'W',
          wnw: 'WNW',
          wsw: 'WSW'
        },
        forecast: 'Forecast'
      },
      alarm_control_panel: {
        code: 'Code',
        clear_code: 'Clear',
        disarm: 'Disarm',
        arm_home: 'Arm home',
        arm_away: 'Arm away',
        arm_night: 'Arm night',
        armed_custom_bypass: 'Custom bypass',
        arm_custom_bypass: 'Custom bypass'
      },
      automation: {
        last_triggered: 'Last triggered',
        trigger: 'Trigger'
      },
      cover: {
        position: 'Position',
        tilt_position: 'Tilt position'
      },
      fan: {
        speed: 'Speed',
        oscillate: 'Oscillate',
        direction: 'Direction',
        forward: 'Forward',
        reverse: 'Reverse'
      },
      light: {
        brightness: 'Brightness',
        color_temperature: 'Color temperature',
        white_value: 'White value',
        effect: 'Effect'
      },
      media_player: {
        text_to_speak: 'Text to speak',
        source: 'Source',
        sound_mode: 'Sound mode'
      },
      climate: {
        currently: 'Currently',
        on_off: 'On / off',
        target_temperature: 'Target temperature',
        target_humidity: 'Target humidity',
        operation: 'Operation',
        fan_mode: 'Fan mode',
        swing_mode: 'Swing mode',
        away_mode: 'Away mode',
        aux_heat: 'Aux heat',
        preset_mode: 'Preset'
      },
      lock: {
        code: 'Code',
        lock: 'Lock',
        unlock: 'Unlock'
      },
      vacuum: {
        actions: {
          resume_cleaning: 'Resume cleaning',
          return_to_base: 'Return to dock',
          start_cleaning: 'Start cleaning',
          turn_on: 'Turn on',
          turn_off: 'Turn off'
        }
      },
      water_heater: {
        currently: 'Currently',
        on_off: 'On / off',
        target_temperature: 'Target temperature',
        operation: 'Operation',
        away_mode: 'Away mode'
      },
      timer: {
        actions: {
          start: 'start',
          pause: 'pause',
          cancel: 'cancel',
          finish: 'finish'
        }
      }
    },
    components: {
      entity: {
        'entity-picker': {
          entity: 'Entity'
        }
      },
      'service-picker': {
        service: 'Service'
      },
      relative_time: {
        past: '{time} ago',
        future: 'In {time}',
        never: 'Never',
        duration: {
          second:
            '{count} {count, plural,\n  one {second}\n  other {seconds}\n}',
          minute:
            '{count} {count, plural,\n  one {minute}\n  other {minutes}\n}',
          hour: '{count} {count, plural,\n  one {hour}\n  other {hours}\n}',
          day: '{count} {count, plural,\n  one {day}\n  other {days}\n}',
          week: '{count} {count, plural,\n  one {week}\n  other {weeks}\n}'
        }
      },
      history_charts: {
        loading_history: 'Loading state history...',
        no_history_found: 'No state history found.'
      }
    },
    notification_toast: {
      entity_turned_on: 'Turned on {entity}.',
      entity_turned_off: 'Turned off {entity}.',
      service_called: 'Service {service} called.',
      service_call_failed: 'Failed to call service {service}.',
      connection_lost: 'Connection lost. Reconnecting…'
    },
    dialogs: {
      more_info_settings: {
        save: 'Save',
        name: 'Name Override',
        entity_id: 'Entity ID'
      },
      more_info_control: {
        script: {
          last_action: 'Last Action'
        },
        sun: {
          elevation: 'Elevation',
          rising: 'Rising',
          setting: 'Setting'
        },
        updater: {
          title: 'Update Instructions'
        }
      },
      options_flow: {
        form: {
          header: 'Options'
        },
        success: {
          description: 'Options successfully saved.'
        }
      },
      config_entry_system_options: {
        title: 'System Options',
        enable_new_entities_label: 'Enable newly added entities.',
        enable_new_entities_description:
          'If disabled, newly discovered entities will not be automatically added to Home Assistant.'
      },
      zha_device_info: {
        manuf: 'by {manufacturer}',
        no_area: 'No Area',
        services: {
          reconfigure:
            'Reconfigure ZHA device (heal device). Use this if you are having issues with the device. If the device in question is a battery powered device please ensure it is awake and accepting commands when you use this service.',
          updateDeviceName:
            'Set a custom name for this device in the device registry.',
          remove: 'Remove a device from the ZigBee network.'
        },
        zha_device_card: {
          device_name_placeholder: 'User given name',
          area_picker_label: 'Area',
          update_name_button: 'Update Name'
        }
      }
    },
    auth_store: {
      ask: 'Do you want to save this login?',
      decline: 'No thanks',
      confirm: 'Save login'
    },
    notification_drawer: {
      click_to_configure: 'Click button to configure {entity}',
      empty: 'No Notifications',
      title: 'Notifications'
    }
  },
  domain: {
    alarm_control_panel: 'Alarm control panel',
    automation: 'Automation',
    binary_sensor: 'Binary sensor',
    calendar: 'Calendar',
    camera: 'Camera',
    climate: 'Climate',
    configurator: 'Configurator',
    conversation: 'Conversation',
    cover: 'Cover',
    device_tracker: 'Device tracker',
    fan: 'Fan',
    history_graph: 'History graph',
    group: 'Group',
    image_processing: 'Image processing',
    input_boolean: 'Input boolean',
    input_datetime: 'Input datetime',
    input_select: 'Input select',
    input_number: 'Input number',
    input_text: 'Input text',
    light: 'Light',
    lock: 'Lock',
    mailbox: 'Mailbox',
    media_player: 'Media player',
    notify: 'Notify',
    plant: 'Plant',
    proximity: 'Proximity',
    remote: 'Remote',
    scene: 'Scene',
    script: 'Script',
    sensor: 'Sensor',
    sun: 'Sun',
    switch: 'Switch',
    updater: 'Updater',
    weblink: 'Weblink',
    zwave: 'Z-Wave',
    vacuum: 'Vacuum',
    zha: 'ZHA',
    hassio: 'Hass.io',
    homeassistant: 'Home Assistant',
    lovelace: 'Lovelace',
    system_health: 'System Health',
    person: 'Person'
  },
  attribute: {
    weather: {
      humidity: 'Humidity',
      visibility: 'Visibility',
      wind_speed: 'Wind speed'
    }
  },
  state_attributes: {
    climate: {
      fan_mode: {
        off: 'Off',
        on: 'On',
        auto: 'Auto'
      },
      preset_mode: {
        none: 'None',
        eco: 'Eco',
        away: 'Away',
        boost: 'Boost',
        comfort: 'Comfort',
        home: 'Home',
        sleep: 'Sleep',
        activity: 'Activity'
      },
      hvac_action: {
        off: 'Off',
        heating: 'Heating',
        cooling: 'Cooling',
        drying: 'Drying',
        idle: 'Idle',
        fan: 'Fan'
      }
    }
  },
  groups: {
    'system-admin': 'Administrators',
    'system-users': 'Users',
    'system-read-only': 'Read-Only Users'
  },
  config_entry: {
    disabled_by: {
      user: 'User',
      integration: 'Integration',
      config_entry: 'Config Entry'
    }
  }
};

export default data;
