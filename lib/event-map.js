/*!
 * typeof-github-event <https://github.com/doowb/typeof-github-event>
 *
 * Copyright (c) 2016, Brian Woodward.
 * Licensed under the MIT License.
 */
'use strict';

module.exports = {
  'commit_comment': {
    props: ['comment', 'repository'],
    validate: function(payload) {
      return !payload.hasOwnProperty('issue') && !payload.hasOwnProperty('pull_request');
    }
  },
  'create': {
    props: ['ref_type', 'ref', 'master_branch', 'description', 'repository']
  },
  'delete': {
    props: ['ref_type', 'ref', 'repository'],
    validate: function(payload) {
      return !payload.hasOwnProperty('master_branch');
    }
  },
  'deployment': {
    props: ['deployment', 'repository'],
    validate: function(payload) {
      return !payload.hasOwnProperty('deployment_status');
    }
  },
  'deployment_status': {
    props: ['deployment', 'deployment_status', 'repository']
  },
  'fork': {
    props: ['forkee', 'repository']
  },
  'gollum': {
    props: ['pages', 'repository']
  },
  'issue_comment': {
    props: ['issue', 'comment', 'repository']
  },
  'issues': {
    props: ['issue', 'repository'],
    validate: function(payload) {
      return !payload.hasOwnProperty('comment');
    }
  },
  'member': {
    props: ['member', 'repository']
  },
  'membership': {
    props: ['scope', 'member', 'team', 'organization']
  },
  'page_build': {
    props: ['build', 'repository']
  },
  'public': {
    props: ['repository'],
    validate: function(payload) {
      return Object.keys(payload).length === 2;
    }
  },
  'pull_request_review_comment': {
    props: ['comment', 'pull_request', 'repository']
  },
  'pull_request': {
    props: ['pull_request', 'repository'],
    validate: function(payload) {
      return !payload.hasOwnProperty('comment');
    }
  },
  'push': {
    props: ['ref', 'before', 'commits', 'repository']
  },
  'repository': {
    props: ['action', 'repository', 'organization']
  },
  'release': {
    props: ['release', 'repository']
  },
  'status': {
    props: ['sha', 'state', 'description', 'branches']
  },
  'team_add': {
    props: ['team', 'repository']
  },
  'watch': {
    props: ['action', 'repository'],
    validate: function(payload) {
      return payload.action === 'started';
    }
  }
}
