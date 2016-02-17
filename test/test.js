/*!
 * typeof-github-event <https://github.com/doowb/typeof-github-event>
 *
 * Copyright (c) 2016, Brian Woodward.
 * Licensed under the MIT License.
 */
'use strict';

require('mocha');
var path = require('path');
var assert = require('assert');
var events = require('../');
var fixtures = path.join.bind(path, __dirname, 'fixtures');

describe('github-event', function() {
  describe('typeof', function() {
    it('should detect commit_comment event', function() {
      var payload = require(fixtures('commit_comment.json'));
      assert.equal(events.typeof(payload), 'commit_comment');
    });
    it('should detect create event', function() {
      var payload = require(fixtures('create.json'));
      assert.equal(events.typeof(payload), 'create');
    });
    it('should detect delete event', function() {
      var payload = require(fixtures('delete.json'));
      assert.equal(events.typeof(payload), 'delete');
    });
    it('should detect deployment event', function() {
      var payload = require(fixtures('deployment.json'));
      assert.equal(events.typeof(payload), 'deployment');
    });
    it('should detect deployment_status event', function() {
      var payload = require(fixtures('deployment_status.json'));
      assert.equal(events.typeof(payload), 'deployment_status');
    });
    it('should detect fork event', function() {
      var payload = require(fixtures('fork.json'));
      assert.equal(events.typeof(payload), 'fork');
    });
    it('should detect gollum event', function() {
      var payload = require(fixtures('gollum.json'));
      assert.equal(events.typeof(payload), 'gollum');
    });
    it('should detect issue_comment event', function() {
      var payload = require(fixtures('issue_comment.json'));
      assert.equal(events.typeof(payload), 'issue_comment');
    });
    it('should detect issues event', function() {
      var payload = require(fixtures('issues.json'));
      assert.equal(events.typeof(payload), 'issues');
    });
    it('should detect member event', function() {
      var payload = require(fixtures('member.json'));
      assert.equal(events.typeof(payload), 'member');
    });
    it('should detect membership event', function() {
      var payload = require(fixtures('membership.json'));
      assert.equal(events.typeof(payload), 'membership');
    });
    it('should detect page_build event', function() {
      var payload = require(fixtures('page_build.json'));
      assert.equal(events.typeof(payload), 'page_build');
    });
    it('should detect public event', function() {
      var payload = require(fixtures('public.json'));
      assert.equal(events.typeof(payload), 'public');
    });
    it('should detect pull_request event', function() {
      var payload = require(fixtures('pull_request.json'));
      assert.equal(events.typeof(payload), 'pull_request');
    });
    it('should detect pull_request_review_comment event', function() {
      var payload = require(fixtures('pull_request_review_comment.json'));
      assert.equal(events.typeof(payload), 'pull_request_review_comment');
    });
    it('should detect push event', function() {
      var payload = require(fixtures('push.json'));
      assert.equal(events.typeof(payload), 'push');
    });
    it('should detect release event', function() {
      var payload = require(fixtures('release.json'));
      assert.equal(events.typeof(payload), 'release');
    });
    it('should detect repository event', function() {
      var payload = require(fixtures('repository.json'));
      assert.equal(events.typeof(payload), 'repository');
    });
    it('should detect status event', function() {
      var payload = require(fixtures('status.json'));
      assert.equal(events.typeof(payload), 'status');
    });
    it('should detect team_add event', function() {
      var payload = require(fixtures('team_add.json'));
      assert.equal(events.typeof(payload), 'team_add');
    });
    it('should detect watch event', function() {
      var payload = require(fixtures('watch.json'));
      assert.equal(events.typeof(payload), 'watch');
    });
  });

  describe('is', function() {
    describe('commit_comment', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('commit_comment.json'));
      });

      it('should validate payload is commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), true);
      });
      it('should validate payload is commit_comment through specific is commit_comment method', function() {
        assert.equal(events.is('commit_comment', payload), true);
        assert.equal(events.isCommitComment(payload), true);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('create', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('create.json'));
      });

      it('should validate payload is create', function() {
        assert.equal(events.is('create', payload), true);
      });
      it('should validate payload is create through specific is create method', function() {
        assert.equal(events.is('create', payload), true);
        assert.equal(events.isCreate(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('delete', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('delete.json'));
      });

      it('should validate payload is delete', function() {
        assert.equal(events.is('delete', payload), true);
      });
      it('should validate payload is delete through specific is delete method', function() {
        assert.equal(events.is('delete', payload), true);
        assert.equal(events.isDelete(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('deployment', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('deployment.json'));
      });

      it('should validate payload is deployment', function() {
        assert.equal(events.is('deployment', payload), true);
      });
      it('should validate payload is deployment through specific is deployment method', function() {
        assert.equal(events.is('deployment', payload), true);
        assert.equal(events.isDeployment(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('deployment_status', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('deployment_status.json'));
      });

      it('should validate payload is deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), true);
      });
      it('should validate payload is deployment_status through specific is deployment_status method', function() {
        assert.equal(events.is('deployment_status', payload), true);
        assert.equal(events.isDeploymentStatus(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('fork', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('fork.json'));
      });

      it('should validate payload is fork', function() {
        assert.equal(events.is('fork', payload), true);
      });
      it('should validate payload is fork through specific is fork method', function() {
        assert.equal(events.is('fork', payload), true);
        assert.equal(events.isFork(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('gollum', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('gollum.json'));
      });

      it('should validate payload is gollum', function() {
        assert.equal(events.is('gollum', payload), true);
      });
      it('should validate payload is gollum through specific is gollum method', function() {
        assert.equal(events.is('gollum', payload), true);
        assert.equal(events.isGollum(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('issue_comment', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('issue_comment.json'));
      });

      it('should validate payload is issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), true);
      });
      it('should validate payload is issue_comment through specific is issue_comment method', function() {
        assert.equal(events.is('issue_comment', payload), true);
        assert.equal(events.isIssueComment(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('issues', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('issues.json'));
      });

      it('should validate payload is issues', function() {
        assert.equal(events.is('issues', payload), true);
      });
      it('should validate payload is issues through specific is issues method', function() {
        assert.equal(events.is('issues', payload), true);
        assert.equal(events.isIssues(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('member', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('member.json'));
      });

      it('should validate payload is member', function() {
        assert.equal(events.is('member', payload), true);
      });
      it('should validate payload is member through specific is member method', function() {
        assert.equal(events.is('member', payload), true);
        assert.equal(events.isMember(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('membership', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('membership.json'));
      });

      it('should validate payload is membership', function() {
        assert.equal(events.is('membership', payload), true);
      });
      it('should validate payload is membership through specific is membership method', function() {
        assert.equal(events.is('membership', payload), true);
        assert.equal(events.isMembership(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('page_build', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('page_build.json'));
      });

      it('should validate payload is page_build', function() {
        assert.equal(events.is('page_build', payload), true);
      });
      it('should validate payload is page_build through specific is page_build method', function() {
        assert.equal(events.is('page_build', payload), true);
        assert.equal(events.isPageBuild(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('public', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('public.json'));
      });

      it('should validate payload is public', function() {
        assert.equal(events.is('public', payload), true);
      });
      it('should validate payload is public through specific is public method', function() {
        assert.equal(events.is('public', payload), true);
        assert.equal(events.isPublic(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('pull_request', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('pull_request.json'));
      });

      it('should validate payload is pull_request', function() {
        assert.equal(events.is('pull_request', payload), true);
      });
      it('should validate payload is pull_request through specific is pull_request method', function() {
        assert.equal(events.is('pull_request', payload), true);
        assert.equal(events.isPullRequest(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('pull_request_review_comment', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('pull_request_review_comment.json'));
      });

      it('should validate payload is pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), true);
      });
      it('should validate payload is pull_request_review_comment through specific is pull_request_review_comment method', function() {
        assert.equal(events.is('pull_request_review_comment', payload), true);
        assert.equal(events.isPullRequestReviewComment(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('push', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('push.json'));
      });

      it('should validate payload is push', function() {
        assert.equal(events.is('push', payload), true);
      });
      it('should validate payload is push through specific is push method', function() {
        assert.equal(events.is('push', payload), true);
        assert.equal(events.isPush(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('release', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('release.json'));
      });

      it('should validate payload is release', function() {
        assert.equal(events.is('release', payload), true);
      });
      it('should validate payload is release through specific is release method', function() {
        assert.equal(events.is('release', payload), true);
        assert.equal(events.isRelease(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('repository', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('repository.json'));
      });

      it('should validate payload is repository', function() {
        assert.equal(events.is('repository', payload), true);
      });
      it('should validate payload is repository through specific is repository method', function() {
        assert.equal(events.is('repository', payload), true);
        assert.equal(events.isRepository(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('status', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('status.json'));
      });

      it('should validate payload is status', function() {
        assert.equal(events.is('status', payload), true);
      });
      it('should validate payload is status through specific is status method', function() {
        assert.equal(events.is('status', payload), true);
        assert.equal(events.isStatus(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('team_add', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('team_add.json'));
      });

      it('should validate payload is team_add', function() {
        assert.equal(events.is('team_add', payload), true);
      });
      it('should validate payload is team_add through specific is team_add method', function() {
        assert.equal(events.is('team_add', payload), true);
        assert.equal(events.isTeamAdd(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not watch', function() {
        assert.equal(events.is('watch', payload), false);
      });
    });
    describe('watch', function() {
      var payload = {};
      beforeEach(function() {
        payload = require(fixtures('watch.json'));
      });

      it('should validate payload is watch', function() {
        assert.equal(events.is('watch', payload), true);
      });
      it('should validate payload is watch through specific is watch method', function() {
        assert.equal(events.is('watch', payload), true);
        assert.equal(events.isWatch(payload), true);
      });
      it('should validate payload is not commit_comment', function() {
        assert.equal(events.is('commit_comment', payload), false);
      });
      it('should validate payload is not create', function() {
        assert.equal(events.is('create', payload), false);
      });
      it('should validate payload is not delete', function() {
        assert.equal(events.is('delete', payload), false);
      });
      it('should validate payload is not deployment', function() {
        assert.equal(events.is('deployment', payload), false);
      });
      it('should validate payload is not deployment_status', function() {
        assert.equal(events.is('deployment_status', payload), false);
      });
      it('should validate payload is not fork', function() {
        assert.equal(events.is('fork', payload), false);
      });
      it('should validate payload is not gollum', function() {
        assert.equal(events.is('gollum', payload), false);
      });
      it('should validate payload is not issue_comment', function() {
        assert.equal(events.is('issue_comment', payload), false);
      });
      it('should validate payload is not issues', function() {
        assert.equal(events.is('issues', payload), false);
      });
      it('should validate payload is not member', function() {
        assert.equal(events.is('member', payload), false);
      });
      it('should validate payload is not membership', function() {
        assert.equal(events.is('membership', payload), false);
      });
      it('should validate payload is not page_build', function() {
        assert.equal(events.is('page_build', payload), false);
      });
      it('should validate payload is not public', function() {
        assert.equal(events.is('public', payload), false);
      });
      it('should validate payload is not pull_request', function() {
        assert.equal(events.is('pull_request', payload), false);
      });
      it('should validate payload is not pull_request_review_comment', function() {
        assert.equal(events.is('pull_request_review_comment', payload), false);
      });
      it('should validate payload is not push', function() {
        assert.equal(events.is('push', payload), false);
      });
      it('should validate payload is not release', function() {
        assert.equal(events.is('release', payload), false);
      });
      it('should validate payload is not repository', function() {
        assert.equal(events.is('repository', payload), false);
      });
      it('should validate payload is not status', function() {
        assert.equal(events.is('status', payload), false);
      });
      it('should validate payload is not team_add', function() {
        assert.equal(events.is('team_add', payload), false);
      });
    });
  });
});
