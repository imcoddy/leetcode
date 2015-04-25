# /bin/sh
find . -name '*.js' | awk -F/ '{print $NF}' | sort -f | uniq -c | grep "^[ \t]*1 " | cut -d ' ' -f 5
