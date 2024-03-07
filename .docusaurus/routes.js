import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', 'fd6'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', '991'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '67b'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', '07b'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', '819'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', '046'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '385'),
    exact: true
  },
  {
    path: '/docs/blog',
    component: ComponentCreator('/docs/blog', '200'),
    exact: true
  },
  {
    path: '/docs/blog/archive',
    component: ComponentCreator('/docs/blog/archive', '5c4'),
    exact: true
  },
  {
    path: '/docs/blog/first-blog-post',
    component: ComponentCreator('/docs/blog/first-blog-post', 'd54'),
    exact: true
  },
  {
    path: '/docs/blog/long-blog-post',
    component: ComponentCreator('/docs/blog/long-blog-post', '81b'),
    exact: true
  },
  {
    path: '/docs/blog/mdx-blog-post',
    component: ComponentCreator('/docs/blog/mdx-blog-post', '0dc'),
    exact: true
  },
  {
    path: '/docs/blog/tags',
    component: ComponentCreator('/docs/blog/tags', '980'),
    exact: true
  },
  {
    path: '/docs/blog/tags/docusaurus',
    component: ComponentCreator('/docs/blog/tags/docusaurus', 'cb8'),
    exact: true
  },
  {
    path: '/docs/blog/tags/facebook',
    component: ComponentCreator('/docs/blog/tags/facebook', '9e4'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hello',
    component: ComponentCreator('/docs/blog/tags/hello', 'b92'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hola',
    component: ComponentCreator('/docs/blog/tags/hola', '29f'),
    exact: true
  },
  {
    path: '/docs/blog/welcome',
    component: ComponentCreator('/docs/blog/welcome', '5a6'),
    exact: true
  },
  {
    path: '/docs/crud',
    component: ComponentCreator('/docs/crud', '01a'),
    exact: true
  },
  {
    path: '/docs/frame',
    component: ComponentCreator('/docs/frame', '0b9'),
    exact: true
  },
  {
    path: '/docs/login',
    component: ComponentCreator('/docs/login', '2bc'),
    exact: true
  },
  {
    path: '/docs/packages',
    component: ComponentCreator('/docs/packages', '3ea'),
    exact: true
  },
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', '975'),
    routes: [
      {
        path: '/docs/docs/category/building-your-first-app',
        component: ComponentCreator('/docs/docs/category/building-your-first-app', '6b9'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/category/development-workflow',
        component: ComponentCreator('/docs/docs/category/development-workflow', 'fea'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/category/getting-started',
        component: ComponentCreator('/docs/docs/category/getting-started', '219'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/async-tasks/creating-an-async-task',
        component: ComponentCreator('/docs/docs/documentation/async-tasks/creating-an-async-task', '691'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/async-tasks/manually-triggering-async-tasks',
        component: ComponentCreator('/docs/docs/documentation/async-tasks/manually-triggering-async-tasks', '0a1'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/async-tasks/overview',
        component: ComponentCreator('/docs/docs/documentation/async-tasks/overview', 'd02'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/async-tasks/scheduling-async-tasks',
        component: ComponentCreator('/docs/docs/documentation/async-tasks/scheduling-async-tasks', '289'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/async-tasks/syncing-and-viewing-async-tasks',
        component: ComponentCreator('/docs/docs/documentation/async-tasks/syncing-and-viewing-async-tasks', '85b'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/ddms/creating-a-ddm',
        component: ComponentCreator('/docs/docs/documentation/ddms/creating-a-ddm', 'd27'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/ddms/ddm-field-types',
        component: ComponentCreator('/docs/docs/documentation/ddms/ddm-field-types', '235'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/ddms/migrating-ddms',
        component: ComponentCreator('/docs/docs/documentation/ddms/migrating-ddms', 'bfb'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/ddms/overview',
        component: ComponentCreator('/docs/docs/documentation/ddms/overview', 'ba3'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/deployment/overview',
        component: ComponentCreator('/docs/docs/documentation/deployment/overview', '336'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/development-of-app/overview',
        component: ComponentCreator('/docs/docs/documentation/development-of-app/overview', '28a'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/events/overview',
        component: ComponentCreator('/docs/docs/documentation/events/overview', 'a03'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/getting-started/accessing-app-panel',
        component: ComponentCreator('/docs/docs/documentation/getting-started/accessing-app-panel', 'e86'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/getting-started/installing-zelthy/docker',
        component: ComponentCreator('/docs/docs/documentation/getting-started/installing-zelthy/docker', '6f4'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/getting-started/installing-zelthy/manual',
        component: ComponentCreator('/docs/docs/documentation/getting-started/installing-zelthy/manual', '160'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/introduction',
        component: ComponentCreator('/docs/docs/documentation/introduction', '5a1'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/modules/creating-a-module',
        component: ComponentCreator('/docs/docs/documentation/modules/creating-a-module', '2b5'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/modules/development/hello-world-example',
        component: ComponentCreator('/docs/docs/documentation/modules/development/hello-world-example', 'd1a'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/modules/development/models',
        component: ComponentCreator('/docs/docs/documentation/modules/development/models', 'dda'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/modules/development/overview',
        component: ComponentCreator('/docs/docs/documentation/modules/development/overview', 'c70'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/modules/overview',
        component: ComponentCreator('/docs/docs/documentation/modules/overview', '915'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/modules/registering-a-module',
        component: ComponentCreator('/docs/docs/documentation/modules/registering-a-module', 'c0d'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/packages/installing-a-package',
        component: ComponentCreator('/docs/docs/documentation/packages/installing-a-package', '27f'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/packages/overview',
        component: ComponentCreator('/docs/docs/documentation/packages/overview', '5b8'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/permission-framework/overview',
        component: ComponentCreator('/docs/docs/documentation/permission-framework/overview', '57c'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/permission-framework/permissions/creating-permissions',
        component: ComponentCreator('/docs/docs/documentation/permission-framework/permissions/creating-permissions', '043'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/permission-framework/permissions/custom-permissions',
        component: ComponentCreator('/docs/docs/documentation/permission-framework/permissions/custom-permissions', '13f'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/permission-framework/permissions/overview',
        component: ComponentCreator('/docs/docs/documentation/permission-framework/permissions/overview', 'cbd'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/permission-framework/permissions/syncing-and-viewing-permissions',
        component: ComponentCreator('/docs/docs/documentation/permission-framework/permissions/syncing-and-viewing-permissions', '2b5'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/permission-framework/permissions/using-permissions',
        component: ComponentCreator('/docs/docs/documentation/permission-framework/permissions/using-permissions', '485'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/permission-framework/policies/archiving-a-policy',
        component: ComponentCreator('/docs/docs/documentation/permission-framework/policies/archiving-a-policy', '249'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/permission-framework/policies/assigning-policies',
        component: ComponentCreator('/docs/docs/documentation/permission-framework/policies/assigning-policies', 'a53'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/permission-framework/policies/creating-a-policy',
        component: ComponentCreator('/docs/docs/documentation/permission-framework/policies/creating-a-policy', 'f2f'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/permission-framework/policies/editing-policy-config',
        component: ComponentCreator('/docs/docs/documentation/permission-framework/policies/editing-policy-config', '2ed'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/permission-framework/policies/overview',
        component: ComponentCreator('/docs/docs/documentation/permission-framework/policies/overview', '871'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/permission-framework/policies/policy-config-json',
        component: ComponentCreator('/docs/docs/documentation/permission-framework/policies/policy-config-json', '56b'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/permission-framework/policies/viewing-policies',
        component: ComponentCreator('/docs/docs/documentation/permission-framework/policies/viewing-policies', 'fd9'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/platform-architecture',
        component: ComponentCreator('/docs/docs/documentation/platform-architecture', '37c'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/spinning-up-an-app/intializing-app-codebase',
        component: ComponentCreator('/docs/docs/documentation/spinning-up-an-app/intializing-app-codebase', '913'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/spinning-up-an-app/launch-the-app',
        component: ComponentCreator('/docs/docs/documentation/spinning-up-an-app/launch-the-app', '9e6'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/spinning-up-an-app/switching-to-app-view',
        component: ComponentCreator('/docs/docs/documentation/spinning-up-an-app/switching-to-app-view', '474'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/spinning-up-an-app/updating-app-settings',
        component: ComponentCreator('/docs/docs/documentation/spinning-up-an-app/updating-app-settings', 'a08'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/spinning-up-an-app/updating-app-theme',
        component: ComponentCreator('/docs/docs/documentation/spinning-up-an-app/updating-app-theme', 'a36'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/static-and-media/overview',
        component: ComponentCreator('/docs/docs/documentation/static-and-media/overview', 'd71'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/templates/overview',
        component: ComponentCreator('/docs/docs/documentation/templates/overview', '7c5'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/user-management/adding-users',
        component: ComponentCreator('/docs/docs/documentation/user-management/adding-users', '022'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/user-management/assigning-policies-to-users',
        component: ComponentCreator('/docs/docs/documentation/user-management/assigning-policies-to-users', '7f8'),
        exact: true
      },
      {
        path: '/docs/docs/documentation/user-management/overview',
        component: ComponentCreator('/docs/docs/documentation/user-management/overview', 'cd6'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/user-management/updating-user-roles',
        component: ComponentCreator('/docs/docs/documentation/user-management/updating-user-roles', '861'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/user-management/viewing-users',
        component: ComponentCreator('/docs/docs/documentation/user-management/viewing-users', '901'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/user-roles/assigning-policies-to-user-roles',
        component: ComponentCreator('/docs/docs/documentation/user-roles/assigning-policies-to-user-roles', '953'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/user-roles/creating-a-user-role',
        component: ComponentCreator('/docs/docs/documentation/user-roles/creating-a-user-role', '465'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/user-roles/deactivating-a-user-role',
        component: ComponentCreator('/docs/docs/documentation/user-roles/deactivating-a-user-role', 'f93'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/user-roles/overview',
        component: ComponentCreator('/docs/docs/documentation/user-roles/overview', 'cf2'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/user-roles/reserved-user-roles',
        component: ComponentCreator('/docs/docs/documentation/user-roles/reserved-user-roles', '48f'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/views-and-routes/assigning-route-to-a-view',
        component: ComponentCreator('/docs/docs/documentation/views-and-routes/assigning-route-to-a-view', 'efc'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/views-and-routes/creating-a-view',
        component: ComponentCreator('/docs/docs/documentation/views-and-routes/creating-a-view', 'a52'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/views-and-routes/overview',
        component: ComponentCreator('/docs/docs/documentation/views-and-routes/overview', 'e81'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/docs/documentation/views-and-routes/types-of-views',
        component: ComponentCreator('/docs/docs/documentation/views-and-routes/types-of-views', '6a0'),
        exact: true
      },
      {
        path: '/docs/docs/tutorials/complex-app/overview',
        component: ComponentCreator('/docs/docs/tutorials/complex-app/overview', 'df1'),
        exact: true
      },
      {
        path: '/docs/docs/tutorials/todo-app/overview',
        component: ComponentCreator('/docs/docs/tutorials/todo-app/overview', '2fd'),
        exact: true
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '599'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
