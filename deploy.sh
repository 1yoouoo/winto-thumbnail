# 압축 해제
tar -xzf /root/winto-thumbnail/build.tar.gz -C /root/winto-thumbnail/

# PM2로 애플리케이션 재시작
cd /root/winto-thumbnail
pm2 restart all
