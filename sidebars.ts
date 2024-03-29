import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guide: [
    {
      type: 'category',
      label: '指南',
      collapsible: false,
      items: [
        'guide/README',
        'guide/quickStart',
        'guide/addInstance',
        {
          type: 'category',
          label: '组成',
          link: {
            type: 'doc',
            id: 'guide/composition/README',
          },
          items: [
            {
              type: 'category',
              label: '后端-命令行控制台',
              collapsible: false,
              link: {
                type: 'doc',
                id: 'guide/composition/backend/README',
              },
              items: [
                'guide/composition/backend/command',
                'guide/composition/backend/setting',
                'guide/composition/backend/debug',
                'guide/composition/backend/toPublic',
              ],
            },
            {
              type: 'category',
              label: '前端-网页控制台',
              collapsible: false,
              link: {
                type: 'doc',
                id: 'guide/composition/frontend/README',
              },
              items: [
                'guide/composition/frontend/config',
                'guide/composition/frontend/theme',
              ],
            },
            {
              type: 'category',
              label: '实例插件',
              collapsible: false,
              link: {
                type: 'doc',
                id: 'guide/composition/instance/README',
              },
              items: [
                'guide/composition/instance/config',
                'guide/composition/instance/Serein',
                'guide/composition/instance/MCDReforged',
                'guide/composition/instance/EQ-BDS',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '用户系统',
          link: {
            type: 'doc',
            id: 'guide/user/README',
          },
          items: [
            'guide/user/userObj',
            'guide/user/data',
            'guide/user/manageOnConsole',
            'guide/user/manageOnWeb',
          ],
        },
      ],
    },
  ],
  development: [
    {
      type: 'category',
      label: '开发',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'development/README',
      },
      items: [
        'development/quickStart',
        {
          type: 'category',
          label: '数据结构',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'development/struct',
            },
          ],
        },

        {
          type: 'category',
          label: 'Api',
          link: {
            type: 'doc',
            id: 'development/api/README',
          },
          items: [
            'development/api/root',
            'development/api/version',
            {
              type: 'category',
              label: '用户',
              link: {
                type: 'generated-index',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'development/api/users',
                },
              ],
            },
            {
              type: 'category',
              label: '实例',
              link: {
                type: 'generated-index',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'development/api/instances',
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'WebSocket',
          link: {
            type: 'doc',
            id: 'development/webSocket/README',
          },
          items: [
            'development/webSocket/packet',

            {
              type: 'category',
              label: '请求',
              link: {
                type: 'generated-index',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'development/webSocket/request',
                },
              ],
            },
            {
              type: 'category',
              label: '事件',
              link: {
                type: 'generated-index',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'development/webSocket/event',
                },
              ],
            },
            {
              type: 'category',
              label: '广播',
              link: {
                type: 'generated-index',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'development/webSocket/broadcast',
                },
              ],
            },
            {
              type: 'category',
              label: '返回',
              link: {
                type: 'generated-index',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'development/webSocket/return',
                },
              ],
            },
          ],
        }
      ],
    },
  ],
};

export default sidebars;
