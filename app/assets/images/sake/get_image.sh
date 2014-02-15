#!/bin/sh

common_keyword=$1

FILE=./keyword_list.txt
while read keyword
do
        keyword=`echo $keyword  $common_keyword`
        echo $keyword
        keyword=`echo $keyword | nkf -wMQ | tr = %`

        curl -e http://www.my-ajax-site.com \
                http://ajax.googleapis.com/ajax/services/search/images?q\=${keyword}\&v\=1.0\&safe\=on \
        | tr , \\n > result.txt

        status=`cat result.txt | grep "responseStatus" | sed -e 's/ "responseStatus": //g' -e 's/}//g'`

        if [ $status != "200" ]
        then
                exit
        fi

        cat result.txt | grep "url" | head -1 | sed -e 's/"url"://g' -e 's/"//g' >> list_url.txt

done < $FILE