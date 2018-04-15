# Git Tips


```
git: 'credential-manager' is not a git command. See 'git --help'.
```

- <https://stackoverflow.com/questions/11693074/git-credential-cache-is-not-a-git-command>



## Alias


```
[alias]
	st = status
	bl = blame
	cm = commit
	ch = checkout
	br = branch
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
[credential]
	helper = manager
```
