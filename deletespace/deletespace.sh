#!/bin/bash

while read line ; do
  out="$out$line"
  echo "$out"
done < $1

out1=$out
echo $out1
#echo "$1"

#echo $path

#sed -i '' '/./' ./foobar
