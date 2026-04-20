#!/bin/bash

# SEEN 자동 업데이트 스크립트
cd ~/Desktop/seen

# 파일 수정
sed -i '' "s/<h1>.*<\/h1>/<h1>${1:-스타일을 똑똑하게 찾아보세요}<\/h1>/g" index.html

# Git 작업
git add index.html
git commit -m "✨ Update SEEN: ${1:-자동 업데이트}"
git push

echo "✅ 완료! Vercel이 배포 중입니다..."
