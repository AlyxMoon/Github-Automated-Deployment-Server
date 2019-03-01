### Example Delivery from Github

With The following repository Webhooks settings:
- Payload URL: `http://deployment.allistermoon.com`
- Content type: `application/json`
- Secret: `********`

###### Headers
```
Request URL: http://deployment.allistermoon.com
Request method: POST
content-type: application/json
Expect:
User-Agent: GitHub-Hookshot/1174c8d
X-GitHub-Delivery: ********
X-GitHub-Event: ping
X-Hub-Signature: ********
```

###### Payload
```
{
  "zen": "Avoid administrative distraction.",
  "hook_id": 90753227,
  "hook": {
    "type": "Repository",
    "id": 90753227,
    "name": "web",
    "active": true,
    "events": [
      "push"
    ],
    "config": {
      "content_type": "json",
      "insecure_ssl": "0",
      "secret": "********",
      "url": "http://deployment.allistermoon.com"
    },
    "updated_at": "2019-03-01T04:05:04Z",
    "created_at": "2019-03-01T04:05:04Z",
    "url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/hooks/90753227",
    "test_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/hooks/90753227/test",
    "ping_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/hooks/90753227/pings",
    "last_response": {
      "code": null,
      "status": "unused",
      "message": null
    }
  },
  "repository": {
    "id": 173224104,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNzMyMjQxMDQ=",
    "name": "Simple-Github-Deployment-Server",
    "full_name": "AlyxMoon/Simple-Github-Deployment-Server",
    "private": false,
    "owner": {
      "login": "AlyxMoon",
      "id": 8443638,
      "node_id": "MDQ6VXNlcjg0NDM2Mzg=",
      "avatar_url": "https://avatars2.githubusercontent.com/u/8443638?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/AlyxMoon",
      "html_url": "https://github.com/AlyxMoon",
      "followers_url": "https://api.github.com/users/AlyxMoon/followers",
      "following_url": "https://api.github.com/users/AlyxMoon/following{/other_user}",
      "gists_url": "https://api.github.com/users/AlyxMoon/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/AlyxMoon/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/AlyxMoon/subscriptions",
      "organizations_url": "https://api.github.com/users/AlyxMoon/orgs",
      "repos_url": "https://api.github.com/users/AlyxMoon/repos",
      "events_url": "https://api.github.com/users/AlyxMoon/events{/privacy}",
      "received_events_url": "https://api.github.com/users/AlyxMoon/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/AlyxMoon/Simple-Github-Deployment-Server",
    "description": "A small personal server intended to deploy apps on my webserver based on Github webhooks",
    "fork": false,
    "url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server",
    "forks_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/forks",
    "keys_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/teams",
    "hooks_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/hooks",
    "issue_events_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/issues/events{/number}",
    "events_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/events",
    "assignees_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/assignees{/user}",
    "branches_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/branches{/branch}",
    "tags_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/tags",
    "blobs_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/languages",
    "stargazers_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/stargazers",
    "contributors_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/contributors",
    "subscribers_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/subscribers",
    "subscription_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/subscription",
    "commits_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/contents/{+path}",
    "compare_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/merges",
    "archive_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/downloads",
    "issues_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/issues{/number}",
    "pulls_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/labels{/name}",
    "releases_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/releases{/id}",
    "deployments_url": "https://api.github.com/repos/AlyxMoon/Simple-Github-Deployment-Server/deployments",
    "created_at": "2019-03-01T02:52:41Z",
    "updated_at": "2019-03-01T03:53:48Z",
    "pushed_at": "2019-03-01T03:53:47Z",
    "git_url": "git://github.com/AlyxMoon/Simple-Github-Deployment-Server.git",
    "ssh_url": "git@github.com:AlyxMoon/Simple-Github-Deployment-Server.git",
    "clone_url": "https://github.com/AlyxMoon/Simple-Github-Deployment-Server.git",
    "svn_url": "https://github.com/AlyxMoon/Simple-Github-Deployment-Server",
    "homepage": null,
    "size": 57,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  },
  "sender": {
    "login": "AlyxMoon",
    "id": 8443638,
    "node_id": "MDQ6VXNlcjg0NDM2Mzg=",
    "avatar_url": "https://avatars2.githubusercontent.com/u/8443638?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AlyxMoon",
    "html_url": "https://github.com/AlyxMoon",
    "followers_url": "https://api.github.com/users/AlyxMoon/followers",
    "following_url": "https://api.github.com/users/AlyxMoon/following{/other_user}",
    "gists_url": "https://api.github.com/users/AlyxMoon/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AlyxMoon/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AlyxMoon/subscriptions",
    "organizations_url": "https://api.github.com/users/AlyxMoon/orgs",
    "repos_url": "https://api.github.com/users/AlyxMoon/repos",
    "events_url": "https://api.github.com/users/AlyxMoon/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AlyxMoon/received_events",
    "type": "User",
    "site_admin": false
  }
}
```