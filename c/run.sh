#!/bin/bash

red='\033[0;31m'
green='\033[0;32m'
nc='\033[0m'
cmd=$1
day=$(printf "%02d" $2)
input_dir="../../days/$day"

cd "day_$day"

for file in *.c; do
  part=$(tr -cd 0-9 <<< $file)
  gcc -o run $file
  if [[ $cmd == "test" ]]; then
    res=$(cat "$input_dir/test$part" | ./run)
    expected=$(< $input_dir/result$part)
    echo "Expected: $expected"

    if [[ $res == $expected ]]; then
      color=$green
    else
      color=$red
    fi

    echo -e "${color}Result: $res ${nc}"
  elif [[ $cmd == "solve" ]]; then
    res=$(cat "$input_dir/input" | ./run)
    echo "Result for day $2, part $part: $res"
  else
    echo "Unknkown command $cmd"
  fi

  rm run
done
