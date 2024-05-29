.PHONY: git-update-docs git-update-config git-update-makefile

git-update-docs:
	git add .
	git commit -m "update docs"
	git push

git-update-config:
	git add .
	git commit -m "update config"
	git push

git-update-makefile:
	git add .
	git commit -m "update makefile"
	git push