# 暖创优品项目 Makefile

.PHONY: dockerx dockerx-frontend

dockerx-frontend:
	cd frontend && docker build --platform linux/amd64 -t g-frontend-linux-amd64:latest -f Dockerfile .

dockerx:
	cd backend && docker build --platform linux/amd64 -t g-linux-amd64:latest -f Dockerfile .
