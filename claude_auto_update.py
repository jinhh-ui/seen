#!/usr/bin/env python3
import sys
import subprocess
import os

# 명령어 받기
if len(sys.argv) > 1:
    action = sys.argv[1]
    
    os.chdir(os.path.expanduser("~/Desktop/seen"))
    
    # 수정 작업
    subprocess.run(['sed', '-i', '', 's/<h1>스타일을 똑똑하게 찾아보세요<\\/h1>/<h1>비슷한 취향을 더 똑똑하게 찾는 방법<\\/h1>/g', 'index.html'])
    subprocess.run(['sed', '-i', '', 's/<p>마음에 드는 옷, 가구, 액세서리 사진만 보여주세요\\.<br>/<p>이미지, 링크, 키워드로 시작해 비슷한 제품의 가격과 스타일을 빠르게 비교해보세요\\.<br>/g', 'index.html'])
    
    # Git 작업
    subprocess.run(['git', 'add', 'index.html'])
    subprocess.run(['git', 'commit', '-m', action])
    subprocess.run(['git', 'push'])
    
    print("✅ 완료!")
